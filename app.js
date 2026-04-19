/* ============================================================
   BASE DE DONNÉES COMPLÈTE — Toutes matières — Brevet 3ème
   ============================================================ */
let DB={};
let FLASHCARDS={};
let questionBankReady=false;
let questionBankPromise=null;
const SUBJECT_KEYS=['histoire','geo','emc','francais','maths','svt','physique','technologie'];
const STORAGE_KEYS={
  profile:'brevet_profile_v3',
  streak:'brevet_streak_v2',
  theme:'brevet-theme',
  ranked:'brevet_ranked_v1',
  weakQuestions:'brevet_weak_questions_v1',
  dailyChallenges:'brevet_daily_challenges_v1'
};
const UI_COIN_ICON='brevetcoin-ui.png';
const BADGES={
  'robot-slayer':{label:'Tueur de Robots',icon:'🤖'},
  'night-owl':{label:'Oiseau de nuit',icon:'🦉'},
  'sniper':{label:'Sniper',icon:'🎯'},
  'invincible':{label:'Invincible',icon:'🛡️'}
};
const DUEL_BOT_NAME='BrevetAI';
const XP_RULES={
  baseLevelXp:260,
  growth:1.10,
  maxLevel:50,
  question:{mcq:6,tf:6,open:10,date:10},
  quizBonus:24,
  duelVictoryBonus:100,
  brevetBlancBonus:120
};
const DIFFICULTY_TARGETS={facile:8,normal:12,difficile:16};
const MIN_RANKED_LEVEL=8;
const DAILY_CHALLENGE_TEMPLATES=[
  {id:'runs-2',label:'Faire 2 quiz',description:'Terminez deux quiz ou modes de révision aujourd’hui.',metric:'quizzesCompleted',target:2,rewardXp:40,rewardCoins:25},
  {id:'streak-5',label:'Réussir 5 questions d’affilée',description:'Enchaînez cinq bonnes réponses sans erreur.',metric:'bestCorrectStreak',target:5,rewardXp:45,rewardCoins:30},
  {id:'xp-100',label:'Gagner 100 XP',description:'Accumulez 100 XP de jeu dans la journée.',metric:'xpGained',target:100,rewardXp:55,rewardCoins:35},
  {id:'answers-15',label:'Répondre à 15 questions',description:'Avancez dans vos révisions avec quinze réponses au total.',metric:'questionsAnswered',target:15,rewardXp:35,rewardCoins:20},
  {id:'weak-1',label:'Faire 1 révision ciblée',description:'Lancez une session “Points faibles” aujourd’hui.',metric:'weakReviewsCompleted',target:1,rewardXp:35,rewardCoins:25},
  {id:'ranked-1',label:'Terminer 1 partie classée',description:'Finissez une session classée pour gagner un bonus.',metric:'rankedRuns',target:1,rewardXp:70,rewardCoins:45,requiresLevel:MIN_RANKED_LEVEL}
];
const RANK_TIERS=[
  {name:'Bronze I',rp:0,diffs:['normal'],count:10,desc:'Questions normales, priorité aux bases solides.'},
  {name:'Bronze II',rp:60,diffs:['normal'],count:10,desc:'Toujours normal, avec davantage de pièges.'},
  {name:'Bronze III',rp:130,diffs:['normal','difficile'],count:11,desc:'Entrée progressive des questions difficiles.'},
  {name:'Argent I',rp:220,diffs:['normal','difficile'],count:11,desc:'Beaucoup plus de raisonnement attendu.'},
  {name:'Argent II',rp:320,diffs:['difficile'],count:12,desc:'Le difficile devient la norme.'},
  {name:'Argent III',rp:430,diffs:['difficile'],count:12,desc:'Questions ouvertes et formulations plus exigeantes.'},
  {name:'Or I',rp:560,diffs:['difficile'],count:13,desc:'Presque uniquement du haut niveau.'},
  {name:'Or II',rp:710,diffs:['difficile'],count:13,desc:'Très peu de marge d’erreur.'},
  {name:'Or III',rp:880,diffs:['difficile'],count:14,desc:'Sessions très sélectives.'},
  {name:'Diamant',rp:1080,diffs:['difficile'],count:14,desc:'Le sommet : précision, vitesse et méthode.'},
  {name:'Élite',rp:1400,diffs:['difficile'],count:15,desc:'Le très haut niveau : aucun cadeau, uniquement du lourd.'}
];
const GLOBAL_TITLES=[
  {level:1,title:'Novice'},
  {level:10,title:'Explorateur'},
  {level:20,title:'Expert'},
  {level:50,title:'Maître du Brevet'}
];
const SPECIALTY_TITLES={
  histoire:[
    {level:1,title:'Apprenti Historien'},
    {level:10,title:'Chroniqueur du Temps'},
    {level:20,title:'Maître des Annales'}
  ],
  geo:[
    {level:1,title:'Jeune Cartographe'},
    {level:10,title:'Explorateur du Monde'},
    {level:20,title:'Architecte des Territoires'}
  ],
  emc:[
    {level:1,title:'Citoyen Vigilant'},
    {level:10,title:'Gardien des Valeurs'},
    {level:20,title:'Défenseur de la République'}
  ],
  francais:[
    {level:1,title:'Apprenti Écrivain'},
    {level:10,title:'Linguiste'},
    {level:20,title:'Molière du Brevet'}
  ],
  maths:[
    {level:1,title:'Calculatrice humaine'},
    {level:10,title:'Pro des Maths'},
    {level:20,title:'Génie d’Euclide'}
  ],
  svt:[
    {level:1,title:'Ami de la Nature'},
    {level:10,title:'Darwin en herbe'},
    {level:20,title:'Gardien du Vivant'}
  ],
  physique:[
    {level:1,title:'Apprenti Alchimiste'},
    {level:10,title:'Einstein Junior'},
    {level:20,title:'Maître des Réactions'}
  ],
  technologie:[
    {level:1,title:'Codeur Novice'},
    {level:10,title:'Maître du Réseau'},
    {level:20,title:'Architecte Digital'}
  ]
};
const THEMES={
  dark:{label:'Classique',unlockLevel:1,preview:'linear-gradient(135deg,#16215d,#0f1535,#202f79)'},
  light:{label:'Clair',unlockLevel:1,preview:'linear-gradient(135deg,#ffffff,#eef4fb,#dfe9f7)'},
  starry:{label:'Nuit Étoilée',unlockLevel:5,passManaged:true,preview:'linear-gradient(135deg,#0a1b4f,#102b74,#1a4bb4)'},
  'gold-noir':{label:'Or & Noir',unlockLevel:10,passManaged:true,preview:'linear-gradient(135deg,#111111,#3b2f10,#a37a19)'},
  circuit:{label:'Circuit Émeraude',unlockLevel:15,passManaged:true,preview:'linear-gradient(135deg,#062527,#0f4c4f,#33a16f)'},
  aurora:{label:'Aurore Boréale',unlockLevel:20,passManaged:true,preview:'linear-gradient(135deg,#08253d,#114564,#59d6c2)'},
  ocean:{label:'Océan',unlockLevel:22,passManaged:true,preview:'linear-gradient(135deg,#07253c,#0c5f96,#7ed6ff)'},
  sunset:{label:'Coucher de Soleil',unlockLevel:25,passManaged:true,preview:'linear-gradient(135deg,#481b2f,#8f3f48,#ffb05a)'},
  paper:{label:'Carnet Vintage',unlockLevel:30,passManaged:true,preview:'linear-gradient(135deg,#fffaf1,#eadcc1,#c79b67)'},
  nebula:{label:'Nébuleuse Rose',unlockLevel:35,passManaged:true,preview:'linear-gradient(135deg,#170b2b,#4a246f,#ff8bd1)'},
  'ranked-bronze':{label:'Bronze',unlockRp:60,preview:'linear-gradient(135deg,#392217,#6c4631,#8a5c41)'},
  'ranked-silver':{label:'Argent',unlockRp:320,preview:'linear-gradient(135deg,#223041,#536980,#a4b6c9)'},
  'ranked-gold':{label:'Or',unlockRp:560,preview:'linear-gradient(135deg,#322108,#8f6216,#d1a22f)'},
  'ranked-diamond':{label:'Diamant',unlockRp:1080,preview:'linear-gradient(135deg,#c8f1ff,#eefaff,#9fe1ff)'},
  'elite-cosmos':{label:'Élite',unlockRp:1400,preview:'linear-gradient(135deg,#130824,#261045,#43186c)'},
  neon:{label:'Néon',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#061625,#00e7ff,#39ff88)'},
  'alerte-rouge':{label:'Alerte Rouge',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#22070a,#ff4040,#ffb347)'},
  'nature-vivante':{label:'Nature vivante',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#204a2d,#7bb15e,#d8cfad)'},
  glace:{label:'Glace',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#dff5ff,#9fdcff,#ffffff)'},
  electricite:{label:'Électricité',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#0b1a54,#ffd84f,#5ee6ff)'},
  'ciel-nuages':{label:'Ciel et Nuage',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#8ad0ff,#eef9ff,#ffffff)'},
  pastel:{label:'Pastel',unlockLevel:999,shopOnly:true,preview:'linear-gradient(135deg,#fff7fb,#eaf7ff,#f5ebff)'},
  antique:{label:'Antique',unlockStreak:7,preview:'linear-gradient(135deg,#e8dfcf,#b79b71,#f1d37f)'},
  manga:{label:'Manga',unlockLevel:999,passManaged:true,preview:'linear-gradient(135deg,#ffffff,#e8e8e8,#111111)'},
  steampunk:{label:'Steampunk',unlockLevel:999,passManaged:true,preview:'linear-gradient(135deg,#2c1d15,#7a4d2d,#c48b4e)'},
  magma:{label:'Magma',unlockLevel:999,passManaged:true,preview:'linear-gradient(135deg,#130908,#43140e,#ff7a1c)'},
  'aura-divine':{label:'Aura divine',unlockLevel:999,passManaged:true,preview:'linear-gradient(135deg,#ffffff,#fff7dc,#d3b055)'}
};
const SHOP_ITEMS={
  shield:{icon:'🛡️',label:'Le Bouclier',price:200,desc:'Protège la série si tu rates un jour.',action:'shield'},
  hourglass:{icon:'⏳',label:'Le Sablier',price:150,desc:'Ajoute +15 s en mode Survie.',action:'hourglass'},
  eraser:{icon:'🌓',label:'Bonus 50/50',price:100,desc:'Retire 2 mauvaises réponses sur un QCM.',action:'eraser'},
  xpboost:{icon:'⚡',label:'Boost XP x2',price:300,desc:'Double l XP pendant 10 minutes de quiz actifs.',action:'xpboost'},
  themeNeon:{icon:'💡',label:'Thème Néon',price:260,desc:'Lueur néon vivante et contours lumineux sur toute l interface.',action:'theme',themeKey:'neon'},
  themeAlert:{icon:'🚨',label:'Thème Alerte Rouge',price:260,desc:'Ambiance alarme rouge avec pulsation sombre et bords d urgence.',action:'theme',themeKey:'alerte-rouge'},
  themeNature:{icon:'🍃',label:'Thème Nature vivante',price:280,desc:'Forêt zen en vert et beige avec feuilles qui tombent.',action:'theme',themeKey:'nature-vivante'},
  themeGlace:{icon:'❄️',label:'Thème Glace',price:280,desc:'Univers froid et propre avec givre et neige légère.',action:'theme',themeKey:'glace'},
  themeElectric:{icon:'⚡',label:'Thème Électricité',price:320,desc:'Énergie brute, éclairs aléatoires et arcs électriques sur les boutons.',action:'theme',themeKey:'electricite'},
  themeSky:{icon:'☁️',label:'Thème Ciel et Nuage',price:280,desc:'Ambiance légère avec nuages qui défilent et éléments flottants.',action:'theme',themeKey:'ciel-nuages'},
  themePastel:{icon:'🧁',label:'Thème Pastel',price:260,desc:'Fond blanc, boutons pastel et textes multicolores doux.',action:'theme',themeKey:'pastel'}
};
const MINIAVS_WORKSHOP={
  backgrounds:[
    {value:'b6e3f4',label:'Azur',unlockLevel:1},
    {value:'c0aede',label:'Lavande',unlockLevel:1},
    {value:'ffd5dc',label:'Rose',unlockLevel:1},
    {value:'d8f5a2',label:'Menthe',unlockLevel:1},
    {value:'f4e7da',label:'Sable',unlockLevel:1},
    {value:'ffdfbf',label:'Pêche',unlockLevel:10},
    {value:'d1d4f9',label:'Glace',unlockLevel:12},
    {value:'9fd1ff',label:'Lagune',unlockLevel:20},
    {value:'f6b0ff',label:'Aurore',unlockLevel:30},
    {value:'f5d07a',label:'Or VIP',unlockLevel:50}
  ],
  eyes:[
    {value:'normal',label:'Normal',unlockLevel:1},
    {value:'happy',label:'Joyeux',unlockLevel:1},
    {value:'confident',label:'Confiant',unlockLevel:1}
  ],
  hair:[
    {value:'classic01',label:'Classique',unlockLevel:1},
    {value:'long',label:'Long',unlockLevel:1},
    {value:'ponyTail',label:'Queue de cheval',unlockLevel:1,mapTo:'ponyTail'},
    {value:'classic02',label:'Cheveux épais',unlockLevel:6},
    {value:'curly',label:'Boucles',unlockLevel:10},
    {value:'slaughter',label:'Chauve',unlockLevel:14},
    {value:'softLong',label:'Long féminin',unlockLevel:18,mapTo:'long'},
    {value:'stylish',label:'Cheveux hauts',unlockLevel:24},
    {value:'elvis',label:'Punk',unlockLevel:30}
  ],
  mouth:[
    {value:'default',label:'Sourire',unlockLevel:1},
    {value:'missingTooth',label:'Mordant',unlockLevel:1}
  ],
  clothing:[
    {value:'tShirt',label:'T-shirt',unlockLevel:1},
    {value:'golf',label:'Polo',unlockLevel:10}
  ],
  clothingColors:[
    {value:'3633e0',label:'Bleu',unlockLevel:1},
    {value:'e05a33',label:'Corail',unlockLevel:1},
    {value:'ff4dd8',label:'Rose vif',unlockLevel:1},
    {value:'ff7a59',label:'Mandarine',unlockLevel:1},
    {value:'4f8cff',label:'Bleu ciel',unlockLevel:1},
    {value:'9b5cff',label:'Violet',unlockLevel:1},
    {value:'1da77a',label:'Sapin',unlockLevel:1},
    {value:'f05f9e',label:'Fuchsia',unlockLevel:1},
    {value:'148f77',label:'Vert',unlockLevel:10},
    {value:'f0b84d',label:'Miel',unlockLevel:14},
    {value:'c43d3d',label:'Rouge brique',unlockLevel:18},
    {value:'6c4e0d',label:'Cuivre',unlockLevel:20},
    {value:'f5d07a',label:'Or',unlockLevel:50}
  ],
  hairColors:[
    {value:'1b0b47',label:'Noir bleuté',unlockLevel:1},
    {value:'47280b',label:'Brun',unlockLevel:1},
    {value:'ad3a20',label:'Auburn',unlockLevel:1},
    {value:'4f2a12',label:'Châtaigne',unlockLevel:1},
    {value:'c06f45',label:'Cuivre clair',unlockLevel:1},
    {value:'d9b57d',label:'Blond chaud',unlockLevel:8},
    {value:'ebd8a3',label:'Blond clair',unlockLevel:12},
    {value:'6d2034',label:'Bordeaux',unlockLevel:18},
    {value:'d6d6d6',label:'Argent',unlockLevel:20},
    {value:'f5d07a',label:'Doré',unlockLevel:50}
  ],
  skinColors:[
    {value:'836055',label:'Ébène chaud',unlockLevel:1},
    {value:'f5d0c5',label:'Clair rosé',unlockLevel:1},
    {value:'ffcb7e',label:'Doré',unlockLevel:1},
    {value:'6f4d3d',label:'Brun profond',unlockLevel:1},
    {value:'b77d63',label:'Ambre',unlockLevel:1},
    {value:'e3ab82',label:'Miel',unlockLevel:1}
  ],
  heads:[
    {value:'normal',label:'Standard',unlockLevel:1},
    {value:'thin',label:'Fin',unlockLevel:1},
    {value:'wide',label:'Large',unlockLevel:10}
  ],
  accessories:[
    {value:'none',label:'Aucun',unlockLevel:1},
    {value:'glasses',label:'Lunettes',unlockLevel:20}
  ],
  mustaches:[
    {value:'none',label:'Aucune',unlockLevel:1},
    {value:'pencilThin',label:'Moustache fine',unlockLevel:12},
    {value:'freddy',label:'Moustache large',unlockLevel:20},
    {value:'horshoe',label:'Fer à cheval',unlockLevel:30},
    {value:'pencilThinBeard',label:'Barbe fine',unlockLevel:36}
  ]
};
const MINIAVS_FIELD_ORDER=['eyes','hair','mouth','clothing','accessory','mustache','head'];
const MINIAVS_COLOR_GROUPS=['backgrounds','clothingColors','hairColors','skinColors'];
const MINIAVS_COLOR_FIELDS=['backgroundColor','clothingColor','hairColor','skinColor'];
const SOUND_PACKS={
  classic:{label:'Classique',unlockLevel:1,desc:'Carillons doux et propres.',wave:'sine',success:[784,988],error:[196,156],click:[660],toggle:[523,659],screen:[698,880],streak:[523,659,784],duel:[392,494],coin:[1046,1318,1760],volume:.045},
  '8bit':{label:'8-bit',unlockLevel:5,passManaged:true,desc:'Bips arcade rétro pour les bonnes réponses.',wave:'square',success:[880,1175],error:[220,165],click:[784],toggle:[330,494],screen:[988,1318],streak:[523,659,784],duel:[262,330],coin:[988,1318,1976],volume:.035},
  crystal:{label:'Cristal',unlockLevel:12,passManaged:true,desc:'Sons brillants et plus aériens.',wave:'triangle',success:[660,990],error:[210,180],click:[740],toggle:[554,740],screen:[880,1175],streak:[660,880,1175],duel:[370,554],coin:[1320,1760,2093],volume:.04},
  cosmic:{label:'Cosmique',unlockLevel:20,passManaged:true,desc:'Un timbre plus ample pour les hauts niveaux.',wave:'sawtooth',success:[523,784],error:[185,146],click:[622],toggle:[466,622],screen:[784,1046],streak:[523,698,932],duel:[311,392],coin:[932,1244,1661],volume:.03},
  prestige:{label:'Prestige',unlockLevel:35,passManaged:true,desc:'Finition noble pour les joueurs installés.',wave:'triangle',success:[740,1110],error:[174,138],click:[830],toggle:[622,830],screen:[988,1480],streak:[740,988,1480],duel:[415,554],coin:[1244,1661,2217],volume:.05}
};
const DUEL_DIFFICULTIES={
  calme:{label:'Calme',chip:'Zen',delayFactor:1.34,jitterFactor:1.16,mistakeChance:0.16,slowdownMs:2400,wrongAdvanceFactor:0.16},
  normal:{label:'Normal',chip:'Normal',delayFactor:1,jitterFactor:1,mistakeChance:0.10,slowdownMs:2000,wrongAdvanceFactor:0.24},
  rapide:{label:'Rapide',chip:'Rapide',delayFactor:0.82,jitterFactor:0.84,mistakeChance:0.07,slowdownMs:1600,wrongAdvanceFactor:0.3},
  furie:{label:'Furie',chip:'Furie',delayFactor:0.68,jitterFactor:0.72,mistakeChance:0.04,slowdownMs:1100,wrongAdvanceFactor:0.38}
};
const DEFAULT_DUEL_DIFFICULTY='normal';
const BREVET_PASS_PREMIUM_COST=800;
const COIN_RULES={
  streak:{startDay:2,base:20,step:10},
  daily:{comboBonus:100},
  perfect:{base:30,perLevel:2}
};
const PASS_TITLES={
  'global:Novice':{label:'Global · Novice',text:'Novice',effect:'none',desc:'Titre de départ de BrevetPro.'},
  'global:Explorateur':{label:'Global · Explorateur',text:'Explorateur',effect:'none',desc:'Titre simple du parcours gratuit.'},
  'global:Expert':{label:'Global · Expert',text:'Expert',effect:'none',desc:'Titre simple du parcours gratuit.'},
  'global:Maître du Brevet':{label:'Global · Maître du Brevet',text:'Maître du Brevet',effect:'none',desc:'Titre majeur du parcours gratuit.'},
  'premium:Cadence Chromee':{label:'Premium · Cadence Chromée',text:'Cadence Chromée',effect:'copper',desc:'Titre animé métallisé du pass premium.'},
  'premium:Turbo Revision':{label:'Premium · Turbo Révision',text:'Turbo Révision',effect:'electric',desc:'Titre animé à éclairs pour les joueurs premium.'},
  'premium:Cosmos Mental':{label:'Premium · Cosmos Mental',text:'Cosmos Mental',effect:'aurora',desc:'Titre animé aux reflets cosmiques.'},
  'premium:Empereur du Pass':{label:'Premium · Empereur du Pass',text:'Empereur du Pass',effect:'gold',desc:'Titre premium final avant la légende.'},
  'legend:Legende du Brevet':{label:'Final · Légende du Brevet',text:'Légende du Brevet',effect:'rainbow',desc:'Titre final arc-en-ciel du Brevet Pass.'}
};
const BREVET_PASS_LEVELS={
  2:{premium:[{type:'coins',amount:50}]},
  4:{free:[{type:'coins',amount:25}],premium:[{type:'xpboost',runs:1}]},
  6:{premium:[{type:'theme',key:'aurora'}]},
  8:{free:[{type:'theme',key:'starry'}],premium:[{type:'title',key:'premium:Cadence Chromee'}]},
  10:{premium:[{type:'coins',amount:60}]},
  12:{free:[{type:'sound',key:'8bit'}],premium:[{type:'theme',key:'ocean'}]},
  14:{premium:[{type:'sound',key:'cosmic'}]},
  16:{free:[{type:'title',key:'global:Explorateur'}],premium:[{type:'xpboost',runs:1}]},
  18:{premium:[{type:'theme',key:'sunset'}]},
  20:{free:[{type:'theme',key:'gold-noir'}],premium:[{type:'title',key:'premium:Turbo Revision'}]},
  22:{premium:[{type:'coins',amount:70}]},
  24:{free:[{type:'coins',amount:40}],premium:[{type:'theme',key:'nebula'}]},
  26:{premium:[{type:'sound',key:'prestige'}]},
  28:{free:[{type:'theme',key:'circuit'}],premium:[{type:'theme',key:'manga'}]},
  30:{premium:[{type:'xpboost',runs:1}]},
  32:{free:[{type:'sound',key:'crystal'}],premium:[{type:'theme',key:'steampunk'}]},
  34:{premium:[{type:'coins',amount:80}]},
  36:{free:[{type:'title',key:'global:Expert'}],premium:[{type:'title',key:'premium:Cosmos Mental'}]},
  38:{premium:[{type:'theme',key:'magma'}]},
  40:{free:[{type:'theme',key:'paper'}],premium:[{type:'xpboost',runs:2}]},
  42:{premium:[{type:'coins',amount:90}]},
  44:{free:[{type:'coins',amount:60}],premium:[{type:'title',key:'premium:Empereur du Pass'}]},
  46:{premium:[{type:'coins',amount:100}]},
  48:{free:[{type:'title',key:'global:Maître du Brevet'}],premium:[{type:'coins',amount:110}]},
  50:{free:[{type:'title',key:'legend:Legende du Brevet'},{type:'theme',key:'aura-divine'}],premium:[{type:'coins',amount:150}]}
};
const BREVET_PASS_INDEX=buildBrevetPassRewardIndex();
const REDACTION_TOPICS={
  histoire:[
    {
      title:"Sujet probable : raconter la vie d’un civil ou d’un soldat pendant la Première Guerre mondiale",
      intro:"Montrez la violence de masse, les conditions de vie et les émotions ressenties.",
      axes:["Contexte historique précis","Vie quotidienne dans les tranchées ou à l’arrière","Souffrance, peur, entraide, propagande"],
      words:["tranchées","poilus","violence de masse","artillerie","censure","arrière","mobilisation"],
      map:["Contexte 1914-1918","Conditions de vie","Émotions et souffrances","Bilan humain"]
    },
    {
      title:"Sujet probable : expliquer la France dans la Guerre froide et la construction européenne",
      intro:"Reliez rôle international, décolonisation et projet européen dans une réponse organisée.",
      axes:["Deux blocs et position française","Décolonisation et Ve République","CEE puis Union européenne"],
      words:["bloc de l’Ouest","OTAN","de Gaulle","décolonisation","CEE","Maastricht","coopération"],
      map:["Deux blocs","France gaullienne","Europe économique","Europe politique"]
    }
  ],
  francais:[
    {
      title:"Sujet probable : écrire un récit engagé à la première personne",
      intro:"Travaillez la narration, les émotions, un point de vue clair et un message fort.",
      axes:["Situation initiale rapide","Événement marquant","Réactions, sentiments, prise de position"],
      words:["soudain","pourtant","je ressentis","indigné","courage","témoigner","injustice"],
      map:["Cadre","Déclencheur","Émotions","Message final"]
    },
    {
      title:"Sujet probable : rédiger un texte argumentatif sur la liberté ou la solidarité",
      intro:"Défendez une thèse nette avec deux arguments développés et un exemple précis.",
      axes:["Thèse annoncée dès l’introduction","Arguments + exemples","Conclusion ouverte"],
      words:["à mon avis","tout d’abord","en effet","cependant","par exemple","ainsi","en conclusion"],
      map:["Thèse","Argument 1","Argument 2","Ouverture"]
    }
  ]
};

const QUESTION_EXPANSIONS={
  histoire:{
    "Première Guerre mondiale":[
      {type:"mcq",diff:"facile",q:"Comment appelle-t-on les soldats français de 1914-1918 ?",opts:["Les Spahis","Les Poilus","Les Tirailleurs","Les Hussards"],ans:1,explanation:"Le terme 'poilus' désigne familièrement les soldats français de la Grande Guerre."},
      {type:"mcq",diff:"normal",q:"Quel pays quitte le conflit après la révolution de 1917 ?",opts:["L'Italie","La Russie","Le Royaume-Uni","La Serbie"],ans:1,explanation:"Après la révolution bolchevique, la Russie signe la paix de Brest-Litovsk en 1918."},
      {type:"open",diff:"difficile",q:"Expliquez pourquoi la Première Guerre mondiale est qualifiée de guerre totale.",key:["mobilisation","économie","civils","propagande","état","industrie"],correctAnswer:"Parce qu'elle mobilise soldats, civils, économie, industrie et propagande au service du conflit.",explanation:"Une guerre totale engage toute la société et pas seulement les combattants."}
    ],
    "Les régimes totalitaires":[
      {type:"mcq",diff:"facile",q:"Quel moyen permet aux régimes totalitaires de surveiller et punir les opposants ?",opts:["Le suffrage universel","La police politique","La séparation des pouvoirs","Le référendum libre"],ans:1,explanation:"La police politique sert à surveiller, arrêter et terroriser les opposants."},
      {type:"mcq",diff:"normal",q:"Quel élément est commun au nazisme, au stalinisme et au fascisme ?",opts:["Le multipartisme","Le culte du chef","La liberté de la presse","L'indépendance de la justice"],ans:1,explanation:"Ces régimes imposent l'obéissance au chef et encadrent toute la société."},
      {type:"open",diff:"difficile",q:"Montrez en quoi la propagande est essentielle dans un régime totalitaire.",key:["contrôle","médias","opinion","jeunesse","idée","chef"],correctAnswer:"Elle contrôle l'information, glorifie le chef et façonne l'opinion dès l'enfance.",explanation:"Propagande, censure et embrigadement servent à imposer l'idéologie officielle."}
    ],
    "La Seconde Guerre mondiale":[
      {type:"mcq",diff:"facile",q:"Quel camp regroupe notamment l'Allemagne, l'Italie et le Japon ?",opts:["Les Alliés","L'Axe","L'Entente","Le Pacte atlantique"],ans:1,explanation:"L'Axe s'oppose aux Alliés pendant la Seconde Guerre mondiale."},
      {type:"mcq",diff:"normal",q:"Quel organisme est créé après 1945 pour préserver la paix mondiale ?",opts:["L'OTAN","L'ONU","La SDN","Le G7"],ans:1,explanation:"L'Organisation des Nations unies est fondée en 1945."},
      {type:"open",diff:"difficile",q:"Expliquez la différence entre camp de concentration et camp d'extermination.",key:["travail","mort","extermination","juifs","nazis","déportation"],correctAnswer:"Les camps de concentration enferment et exploitent ; les camps d'extermination sont conçus pour tuer massivement.",explanation:"Les camps d'extermination comme Auschwitz-Birkenau visent la mise à mort industrielle."}
    ],
    "La Guerre froide":[
      {type:"mcq",diff:"facile",q:"Quel bloc défend l'économie capitaliste pendant la Guerre froide ?",opts:["Le bloc soviétique","Le bloc occidental","Le bloc non-aligné","Le Kominform"],ans:1,explanation:"Le bloc occidental est dominé par les États-Unis."},
      {type:"mcq",diff:"normal",q:"Que symbolise la doctrine Truman de 1947 ?",opts:["L'aide américaine aux pays menacés par le communisme","La fin de l'ONU","L'alliance Chine-USA","La construction du mur de Berlin"],ans:0,explanation:"Elle lance la politique d'endiguement du communisme."},
      {type:"open",diff:"difficile",q:"Pourquoi parle-t-on d'un affrontement indirect entre les USA et l'URSS ?",key:["indirect","nucléaire","alliés","crises","guerres périphériques"],correctAnswer:"Parce qu'ils évitent le combat direct et s'opposent par alliés, crises et guerres périphériques.",explanation:"L'arme nucléaire pousse les deux superpuissances à éviter la guerre frontale."}
    ],
    "La décolonisation et la Ve République":[
      {type:"mcq",diff:"facile",q:"Qui devient le premier président de la Ve République ?",opts:["François Mitterrand","Georges Pompidou","Charles de Gaulle","René Coty"],ans:2,explanation:"De Gaulle devient la figure centrale du nouveau régime en 1958."},
      {type:"mcq",diff:"normal",q:"Quel mot désigne l'accès d'un territoire colonisé à l'indépendance ?",opts:["La fédération","La décolonisation","La collectivisation","La satellisation"],ans:1,explanation:"La décolonisation marque la fin des empires coloniaux."},
      {type:"open",diff:"difficile",q:"Expliquez pourquoi la guerre d'Algérie a profondément marqué la France.",key:["violence","politique","société","mémoire","indépendance","crise"],correctAnswer:"Parce qu'elle provoque une crise politique, de fortes violences et une mémoire durablement sensible.",explanation:"Elle participe à la chute de la IVe République et à la naissance de la Ve."}
    ]
  },
  geo:{
    "La mondialisation":[
      {type:"mcq",diff:"facile",q:"Comment appelle-t-on un très grand port mondial connecté aux routes maritimes ?",opts:["Une métropole touristique","Une façade maritime","Un hub portuaire","Un désert industriel"],ans:2,explanation:"Les grands ports servent de hubs dans les échanges mondiaux."},
      {type:"mcq",diff:"normal",q:"Quel flux immatériel circule aussi avec la mondialisation ?",opts:["Les plaques tectoniques","Les informations numériques","Les climats","Les frontières"],ans:1,explanation:"La mondialisation concerne aussi les données, la finance et les informations."},
      {type:"open",diff:"difficile",q:"Montrez que la mondialisation crée à la fois des intégrations et des inégalités.",key:["échanges","réseaux","métropoles","inégalités","exclusion","territoires"],correctAnswer:"Elle connecte fortement certaines métropoles et régions, mais en laisse d'autres en marge.",explanation:"Tous les territoires n'ont pas la même place dans les réseaux mondiaux."}
    ],
    "Développement durable":[
      {type:"mcq",diff:"facile",q:"Le développement durable repose sur combien de piliers ?",opts:["1","2","3","4"],ans:2,explanation:"Économie, social et environnement."},
      {type:"mcq",diff:"normal",q:"Quel acteur publie les grands rapports sur le climat ?",opts:["L'UNESCO","Le GIEC","Le FMI","L'OMS"],ans:1,explanation:"Le GIEC synthétise les connaissances scientifiques sur le climat."},
      {type:"open",diff:"difficile",q:"Expliquez pourquoi le développement durable oblige à arbitrer entre intérêts parfois contradictoires.",key:["économie","environnement","social","choix","ressources","équilibre"],correctAnswer:"Parce qu'il faut concilier croissance, justice sociale et protection des ressources sans sacrifier l'un des trois piliers.",explanation:"Une politique durable cherche l'équilibre plutôt qu'une logique unique."}
    ],
    "Espaces, échanges et inégalités":[
      {type:"mcq",diff:"facile",q:"Comment appelle-t-on une ville qui organise et commande un vaste territoire ?",opts:["Un village-rue","Une métropole","Une station balnéaire","Une enclave"],ans:1,explanation:"Les métropoles concentrent fonctions de commandement et réseaux."},
      {type:"mcq",diff:"normal",q:"Que signifie l'expression 'Nords et Suds' ?",opts:["Une opposition climatique","Des niveaux de développement inégaux","Deux continents fixes","Des blocs militaires"],ans:1,explanation:"Elle désigne des ensembles de pays diversement développés."},
      {type:"open",diff:"difficile",q:"Expliquez ce qu'est une fracture socio-spatiale.",key:["inégalités","espace","territoire","quartiers","accès","services"],correctAnswer:"C'est une inégalité visible dans l'espace entre territoires ou quartiers plus ou moins favorisés.",explanation:"Les inégalités sociales se lisent aussi dans l'organisation de l'espace."}
    ]
  },
  emc:{
    "Droits de l'Homme et du Citoyen":[
      {type:"mcq",diff:"facile",q:"Quel droit protège chacun contre l'arbitraire de l'État ?",opts:["La liberté d'expression","La propriété","La sûreté","Le suffrage"],ans:2,explanation:"La sûreté protège contre les arrestations arbitraires."},
      {type:"mcq",diff:"normal",q:"Quel texte de 1948 affirme les droits humains à l'échelle mondiale ?",opts:["La DDHC","La DUDH","La Constitution de 1958","Le Code civil"],ans:1,explanation:"La Déclaration universelle des droits de l'Homme est adoptée par l'ONU."},
      {type:"open",diff:"difficile",q:"Expliquez pourquoi les droits fondamentaux sont dits universels.",key:["universels","tous","êtres humains","sans distinction","égalité"],correctAnswer:"Parce qu'ils s'appliquent à tous les êtres humains sans distinction d'origine, de sexe ou de croyance.",explanation:"L'universalité signifie qu'aucune personne ne devrait en être privée."}
    ],
    "La démocratie, la laïcité et la citoyenneté":[
      {type:"mcq",diff:"facile",q:"Quel principe impose la neutralité religieuse de l'État ?",opts:["Le fédéralisme","La laïcité","Le communautarisme","La décentralisation"],ans:1,explanation:"La laïcité garantit aussi la liberté de conscience."},
      {type:"mcq",diff:"normal",q:"Quel mot désigne la participation d'un citoyen à la vie publique ?",opts:["La censure","L'abstention","L'engagement","La rumeur"],ans:2,explanation:"Le citoyen peut voter, débattre, s'informer ou s'engager."},
      {type:"open",diff:"difficile",q:"Montrez que la démocratie ne se résume pas seulement au vote.",key:["débat","libertés","contre-pouvoirs","information","justice","participation"],correctAnswer:"Elle suppose aussi des libertés, une information pluraliste, des contre-pouvoirs et une participation continue.",explanation:"Le vote est essentiel mais ne suffit pas à lui seul."}
    ]
  },
  francais:{
    "Grammaire":[
      {type:"mcq",diff:"facile",q:"Dans 'Les élèves travaillent sérieusement', la nature du mot 'sérieusement' est :",opts:["Adjectif","Adverbe","Nom","Pronom"],ans:1,explanation:"'Sérieusement' modifie le verbe et reste invariable : c'est un adverbe."},
      {type:"mcq",diff:"normal",q:"Dans 'Le livre que tu lis', quel est le rôle de 'que' ?",opts:["Déterminant","Pronom relatif","Conjonction","Adverbe"],ans:1,explanation:"'Que' introduit une subordonnée relative et remplace 'le livre'."},
      {type:"open",diff:"difficile",q:"Expliquez comment reconnaître une proposition subordonnée relative.",key:["pronom relatif","nom","complète","qui","que","dont","où"],correctAnswer:"Elle est introduite par un pronom relatif et complète un nom ou un pronom de la proposition principale.",explanation:"Elle précise souvent un nom déjà exprimé."}
    ],
    "Conjugaison":[
      {type:"mcq",diff:"facile",q:"Quel temps utilise-t-on souvent pour raconter une action brève dans un récit au passé ?",opts:["Imparfait","Passé simple","Présent","Futur"],ans:1,explanation:"Le passé simple met en valeur les actions de premier plan dans le récit."},
      {type:"mcq",diff:"normal",q:"Dans 'qu'il vienne', le verbe est au :",opts:["Subjonctif présent","Impératif","Conditionnel","Indicatif"],ans:0,explanation:"La forme 'qu'il vienne' appartient au subjonctif présent."},
      {type:"open",diff:"difficile",q:"Expliquez la différence entre imparfait et passé composé dans un récit.",key:["description","habitude","action ponctuelle","premier plan","arrière-plan"],correctAnswer:"L'imparfait sert à la description ou à l'habitude ; le passé composé marque une action ponctuelle et achevée.",explanation:"Ils n'ont pas la même valeur dans le récit."}
    ],
    "Figures de style":[
      {type:"mcq",diff:"facile",q:"'Il pleure dans mon cœur' est surtout un exemple de :",opts:["Personnification","Oxymore","Litote","Périphrase"],ans:0,explanation:"Le cœur semble agir comme une personne."},
      {type:"mcq",diff:"normal",q:"Quand deux mots opposés sont réunis dans la même expression, on parle de :",opts:["Anaphore","Oxymore","Métonymie","Parallélisme"],ans:1,explanation:"Exemple : une obscure clarté."},
      {type:"open",diff:"difficile",q:"Expliquez l'effet produit par une hyperbole dans un texte.",key:["exagération","insister","émotion","effet"],correctAnswer:"Elle exagère volontairement pour frapper le lecteur, insister ou créer une forte émotion.",explanation:"L'hyperbole amplifie la réalité pour produire un effet marqué."}
    ],
    "Méthodologie du Brevet":[
      {type:"mcq",diff:"facile",q:"Dans une réponse développée, que faut-il faire avant de rédiger ?",opts:["Copier le sujet","Repérer les mots-clés","Chercher des rimes","Compter les lignes"],ans:1,explanation:"Repérer les mots-clés aide à comprendre ce qu'on attend."},
      {type:"mcq",diff:"normal",q:"Dans un paragraphe argumentatif, quel ordre est le plus efficace ?",opts:["Exemple puis thèse puis argument","Thèse puis argument puis exemple","Conclusion puis développement","Citation puis titre"],ans:1,explanation:"Une idée claire, justifiée par un argument puis un exemple, est plus convaincante."},
      {type:"open",diff:"difficile",q:"Expliquez comment construire une introduction efficace en français au brevet.",key:["reformuler","présenter","annoncer","thème","problématique"],correctAnswer:"Il faut reformuler le sujet, présenter le thème puis annoncer clairement l'idée directrice ou la problématique.",explanation:"Une bonne introduction montre immédiatement que le sujet est compris."}
    ]
  }
};

function generateMathVariants(){
  return {
    maths:{
      "Calcul et Nombres":[
        {type:"mcq",diff:"facile",q:"Quel est le résultat de 7 × 8 ?",opts:["54","56","58","64"],ans:1,explanation:"7 × 8 = 56."},
        {type:"mcq",diff:"normal",q:"Quelle fraction est équivalente à 3/4 ?",opts:["6/10","9/12","12/20","15/24"],ans:1,explanation:"On multiplie numérateur et dénominateur par 3."},
        {type:"mcq",diff:"difficile",q:"Quel est le résultat de 2³ × 5² ?",opts:["100","150","200","250"],ans:2,explanation:"2³ = 8 et 5² = 25, donc 8 × 25 = 200."}
      ],
      "Géométrie et Théorèmes":[
        {type:"mcq",diff:"facile",q:"Dans un triangle rectangle, le plus long côté s'appelle :",opts:["La médiane","L'hypoténuse","La hauteur","La bissectrice"],ans:1,explanation:"L'hypoténuse est le côté opposé à l'angle droit."},
        {type:"mcq",diff:"normal",q:"L'aire d'un triangle de base 10 cm et hauteur 6 cm vaut :",opts:["30 cm²","60 cm²","16 cm²","26 cm²"],ans:0,explanation:"10 × 6 ÷ 2 = 30 cm²."},
        {type:"mcq",diff:"difficile",q:"Un cercle de rayon 4 cm a pour aire :",opts:["8π cm²","16π cm²","12π cm²","4π cm²"],ans:1,explanation:"Aire = πr² = π × 4² = 16π."}
      ],
      "Statistiques et Probabilités":[
        {type:"mcq",diff:"facile",q:"La moyenne de 4, 8 et 12 vaut :",opts:["6","7","8","9"],ans:2,explanation:"(4 + 8 + 12) ÷ 3 = 8."},
        {type:"mcq",diff:"normal",q:"On lance une pièce équilibrée. Quelle est la probabilité d'obtenir face ?",opts:["1","1/2","1/3","2"],ans:1,explanation:"Il y a une chance sur deux d'obtenir face."},
        {type:"mcq",diff:"difficile",q:"La médiane de la série 2 ; 4 ; 7 ; 9 ; 12 ; 15 vaut :",opts:["7","8","9","10"],ans:1,explanation:"Pour 6 valeurs, la médiane est la moyenne des deux centrales : (7 + 9)/2 = 8."}
      ],
      "Algèbre et Équations":[
        {type:"mcq",diff:"facile",q:"Si x + 5 = 11, alors x = :",opts:["5","6","7","16"],ans:1,explanation:"11 - 5 = 6."},
        {type:"mcq",diff:"normal",q:"Développer 3(x + 2) donne :",opts:["3x + 2","3x + 6","x + 6","6x + 2"],ans:1,explanation:"On distribue 3 à chaque terme : 3x + 6."},
        {type:"mcq",diff:"difficile",q:"Quelle est la solution de 4x - 7 = 9 ?",opts:["2","3","4","5"],ans:2,explanation:"4x = 16 donc x = 4."}
      ]
    },
    physique:{
      "Mouvement, vitesse et énergie":[
        {type:"mcq",diff:"facile",q:"Un objet parcourt 100 m en 20 s. Sa vitesse est :",opts:["2 m/s","4 m/s","5 m/s","10 m/s"],ans:2,explanation:"100 ÷ 20 = 5 m/s."},
        {type:"mcq",diff:"normal",q:"Quand la vitesse double, l'énergie cinétique :",opts:["Reste la même","Double","Est multipliée par quatre","Diminue"],ans:2,explanation:"Elle dépend du carré de la vitesse."},
        {type:"mcq",diff:"difficile",q:"Un mobile parcourt 1,8 km en 3 min. Sa vitesse en m/s est :",opts:["6","8","10","12"],ans:2,explanation:"1 800 m ÷ 180 s = 10 m/s."}
      ],
      "Matière, pH et transformations":[
        {type:"mcq",diff:"facile",q:"Une solution de pH 2 est :",opts:["Neutre","Basique","Acide","Métallique"],ans:2,explanation:"Plus le pH est petit, plus la solution est acide."},
        {type:"mcq",diff:"normal",q:"Un atome qui gagne un électron devient :",opts:["Un neutron","Un ion négatif","Un proton","Une molécule"],ans:1,explanation:"Gagner un électron donne un anion."},
        {type:"mcq",diff:"difficile",q:"Quel couple représente une neutralisation ?",opts:["Acide + base → sel + eau","Métal + eau → oxygène","Base + métal → carbone","Acide + acide → rien"],ans:0,explanation:"Une neutralisation produit typiquement un sel et de l'eau."}
      ]
    },
    svt:{
      "Génétique et corps humain":[
        {type:"mcq",diff:"facile",q:"Le support de l'information génétique est :",opts:["Le calcium","L'ADN","Le plasma","La peau"],ans:1,explanation:"L'ADN contient l'information génétique."},
        {type:"mcq",diff:"normal",q:"Un caractère héréditaire dépend principalement :",opts:["D'un gène","D'un os","D'un muscle","D'une artère"],ans:0,explanation:"Les gènes déterminent ou influencent les caractères héréditaires."},
        {type:"mcq",diff:"difficile",q:"Une mutation dans une cellule reproductrice peut :",opts:["N'avoir aucun effet possible","Être transmise à la descendance","Changer le climat","Créer un organe"],ans:1,explanation:"Si elle touche une cellule reproductrice, elle peut être héréditaire."}
      ],
      "Biodiversité et dynamique de la Terre":[
        {type:"mcq",diff:"facile",q:"Les séismes sont souvent liés :",opts:["Aux marées","Aux mouvements des plaques","Aux saisons","Aux nuages"],ans:1,explanation:"Les plaques lithosphériques en mouvement provoquent des séismes."},
        {type:"mcq",diff:"normal",q:"La photosynthèse permet aux végétaux de produire :",opts:["Du fer","Du glucose","Du plastique","Du sable"],ans:1,explanation:"Ils produisent du glucose grâce à l'énergie lumineuse."},
        {type:"mcq",diff:"difficile",q:"La biodiversité est importante car elle :",opts:["Réduit toute évolution","Fragilise les écosystèmes","Favorise l'équilibre et l'adaptation des écosystèmes","Supprime la sélection naturelle"],ans:2,explanation:"Une grande diversité rend les écosystèmes plus résilients."}
      ]
    },
    technologie:{
      "Algorithmique et programmation":[
        {type:"mcq",diff:"facile",q:"Une condition 'si... alors...' sert à :",opts:["Décorer le programme","Tester un cas","Créer une image","Éteindre l'ordinateur"],ans:1,explanation:"Elle permet au programme de choisir une action selon un test."},
        {type:"mcq",diff:"normal",q:"Une boucle est utile quand on veut :",opts:["Répéter une action","Supprimer toutes les variables","Changer de matière","Dessiner au hasard"],ans:0,explanation:"Une boucle évite de réécrire plusieurs fois le même bloc."},
        {type:"mcq",diff:"difficile",q:"Dans un algorithme, une variable sert surtout à :",opts:["Stocker une valeur modifiable","Colorer le texte","Créer du son","Détruire le programme"],ans:0,explanation:"Une variable mémorise une information que l'on peut faire évoluer."}
      ],
      "Matériaux, réseaux et objets":[
        {type:"mcq",diff:"facile",q:"Le cuivre est souvent utilisé car il est :",opts:["Comestible","Conducteur","Invisible","Souple comme du tissu"],ans:1,explanation:"Le cuivre conduit très bien l'électricité."},
        {type:"mcq",diff:"normal",q:"Dans un réseau, internet permet surtout :",opts:["De réduire la mémoire d'un objet","D'échanger des données","De transformer le bois","D'arrêter les programmes"],ans:1,explanation:"Un réseau sert à communiquer et partager des informations."},
        {type:"mcq",diff:"difficile",q:"Dans une démarche durable, un objet technique bien conçu doit idéalement être :",opts:["Jetable rapidement","Difficile à réparer","Réparable et recyclable","Le plus lourd possible"],ans:2,explanation:"La réparabilité et le recyclage réduisent l'impact environnemental."}
      ]
    }
  };
}

function cloneQuestion(item){
  return {
    ...item,
    opts:Array.isArray(item.opts)?[...item.opts]:item.opts,
    key:Array.isArray(item.key)?[...item.key]:item.key,
    dates:Array.isArray(item.dates)?[...item.dates]:item.dates,
    events:Array.isArray(item.events)?[...item.events]:item.events
  };
}

function splitScienceContent(){
  if(DB.sciences && !DB.svt){
    const [svtSource=[],physiqueSource=[],techSource=[]]=Object.values(DB.sciences);
    DB.svt={
      "Génétique et corps humain":svtSource.slice(0,4).map(cloneQuestion),
      "Biodiversité et dynamique de la Terre":svtSource.slice(4).map(cloneQuestion)
    };
    DB.physique={
      "Mouvement, vitesse et énergie":physiqueSource.slice(0,5).map(cloneQuestion),
      "Matière, pH et transformations":physiqueSource.slice(5).map(cloneQuestion)
    };
    DB.technologie={
      "Algorithmique et programmation":techSource.slice(0,4).map(cloneQuestion),
      "Matériaux, réseaux et objets":techSource.slice(4).map(cloneQuestion)
    };
    delete DB.sciences;
  }
  if(FLASHCARDS.sciences && !FLASHCARDS.svt){
    FLASHCARDS.svt=[
      {q:"Qu'est-ce que l'ADN ?",a:"Molécule support de l'information génétique",explain:"Localisée dans le noyau des cellules, composée de quatre bases."},
      {q:"Qu'est-ce qu'un gène ?",a:"Segment d'ADN codant pour une protéine ou un caractère",explain:"Un humain possède environ 20 000 à 25 000 gènes."},
      {q:"Combien de chromosomes possède l'être humain ?",a:"46 chromosomes, soit 23 paires",explain:"23 viennent du père et 23 de la mère."},
      {q:"Que produit la photosynthèse ?",a:"Du glucose et du dioxygène à partir de CO2, d'eau et de lumière",explain:"Elle a lieu dans les chloroplastes."},
      {q:"Que dit la tectonique des plaques ?",a:"La lithosphère est découpée en plaques qui se déplacent",explain:"Elle explique séismes, volcans et formation des montagnes."}
    ];
    FLASHCARDS.physique=[
      {q:"Quelle est la formule de la vitesse ?",a:"v = d / t",explain:"Distance divisée par temps, en m/s ou km/h."},
      {q:"Que signifie un pH de 7 ?",a:"La solution est neutre",explain:"pH < 7 acide, pH > 7 basique."},
      {q:"Quelle est la formule de l'énergie cinétique ?",a:"Ec = 1/2 × m × v²",explain:"Elle dépend de la masse et du carré de la vitesse."},
      {q:"Qu'est-ce qu'un ion ?",a:"Un atome ayant perdu ou gagné des électrons",explain:"Perte : cation positif ; gain : anion négatif."}
    ];
    FLASHCARDS.technologie=[
      {q:"Qu'est-ce qu'un algorithme ?",a:"Une suite d'instructions ordonnées pour résoudre un problème",explain:"C'est la logique de base de tout programme."},
      {q:"À quoi sert une boucle 'Pour' ?",a:"À répéter un bloc d'instructions un nombre fixé de fois",explain:"Très utile pour automatiser une action répétitive."},
      {q:"Qu'est-ce qu'une variable ?",a:"Un espace mémoire nommé qui stocke une valeur",explain:"Sa valeur peut changer pendant l'exécution du programme."},
      {q:"Pourquoi le cuivre est-il utilisé en technologie ?",a:"Parce que c'est un excellent conducteur électrique",explain:"On le retrouve dans de très nombreux câbles."},
      {q:"Qu'est-ce que le binaire ?",a:"Un système en base 2 avec seulement 0 et 1",explain:"Les ordinateurs l'utilisent pour stocker et traiter l'information."}
    ];
    delete FLASHCARDS.sciences;
  }
}

function getDefaultXpBySubject(){
  return SUBJECT_KEYS.reduce((acc,key)=>{acc[key]=0;return acc;},{});
}

function getDefaultAnswerStats(){
  return SUBJECT_KEYS.reduce((acc,key)=>{acc[key]=0;return acc;},{});
}

function getMiniavsOptions(group,level){
  const source=MINIAVS_WORKSHOP[group]||[];
  return source;
}

function sanitizeAvatarSeed(value,fallback='BrevetPro'){
  return String(value||fallback).trim().replace(/\s+/g,'-').slice(0,24)||fallback;
}

function sanitizeAvatarHex(value,fallback='b6e3f4'){
  const clean=String(value||'').trim().replace('#','').toLowerCase();
  return /^[a-f0-9]{6}$/.test(clean) ? clean : fallback;
}

function getDefaultAvatarConfig(seed='BrevetPro'){
  return {
    seed:sanitizeAvatarSeed(seed),
    backgroundColor:'b6e3f4',
    eyes:'happy',
    hair:'classic01',
    mouth:'default',
    clothing:'tShirt',
    clothingColor:'3633e0',
    hairColor:'47280b',
    skinColor:'f5d0c5',
    head:'normal',
    accessory:'none',
    mustache:'none',
    backgroundType:'solid'
  };
}

function normalizeAvatarValue(group,value,level,fallback){
  if(MINIAVS_COLOR_GROUPS.includes(group) && /^[a-f0-9]{6}$/i.test(String(value||''))){
    return sanitizeAvatarHex(value,fallback);
  }
  const unlocked=getMiniavsOptions(group,level);
  const found=unlocked.find(option=>option.value===value);
  return found?.value||fallback||unlocked[0]?.value||'';
}

function normalizeUserAvatarConfig(rawConfig={},seed='BrevetPro',level=1){
  const base={...getDefaultAvatarConfig(seed),...(rawConfig||{})};
  return {
    seed:sanitizeAvatarSeed(base.seed||seed),
    backgroundColor:normalizeAvatarValue('backgrounds',base.backgroundColor,level,'b6e3f4'),
    eyes:normalizeAvatarValue('eyes',base.eyes,level,'happy'),
    hair:normalizeAvatarValue('hair',base.hair,level,'classic01'),
    mouth:normalizeAvatarValue('mouth',base.mouth,level,'default'),
    clothing:normalizeAvatarValue('clothing',base.clothing,level,'tShirt'),
    clothingColor:normalizeAvatarValue('clothingColors',base.clothingColor,level,'3633e0'),
    hairColor:normalizeAvatarValue('hairColors',base.hairColor,level,'47280b'),
    skinColor:normalizeAvatarValue('skinColors',base.skinColor,level,'f5d0c5'),
    head:normalizeAvatarValue('heads',base.head,level,'normal'),
    accessory:normalizeAvatarValue('accessories',base.accessory,level,'none'),
    mustache:normalizeAvatarValue('mustaches',base.mustache,level,'none'),
    backgroundType:'solid'
  };
}

function getEyeEffect(config){
  return MINIAVS_WORKSHOP.eyes.find(option=>option.value===config?.eyes)?.effect||'none';
}

function resolveMiniavsConfig(config){
  const avatarConfig=normalizeUserAvatarConfig(config,config?.seed||'BrevetPro',50);
  const eyeOption=MINIAVS_WORKSHOP.eyes.find(option=>option.value===avatarConfig.eyes);
  const hairOption=MINIAVS_WORKSHOP.hair.find(option=>option.value===avatarConfig.hair);
  const mustacheOption=MINIAVS_WORKSHOP.mustaches.find(option=>option.value===avatarConfig.mustache);
  return {
    ...avatarConfig,
    apiEyes:eyeOption?.mapTo||avatarConfig.eyes,
    apiHair:hairOption?.mapTo||avatarConfig.hair,
    glasses:avatarConfig.accessory==='glasses'?'normal':'',
    glassesProbability:avatarConfig.accessory==='glasses'?100:0
    ,
    mustache:avatarConfig.mustache==='none'?'':(mustacheOption?.mapTo||avatarConfig.mustache),
    mustacheProbability:avatarConfig.mustache==='none'?0:100
  };
}

function generateAvatarUrl(config=playerProfile?.userAvatarConfig){
  const resolved=resolveMiniavsConfig(config||getDefaultAvatarConfig('BrevetPro'));
  const params=new URLSearchParams({
    seed:resolved.seed,
    backgroundColor:resolved.backgroundColor,
    backgroundType:resolved.backgroundType||'solid',
    eyes:resolved.apiEyes,
    hair:resolved.apiHair,
    mouth:resolved.mouth,
    body:resolved.clothing,
    bodyColor:resolved.clothingColor,
    hairColor:resolved.hairColor,
    skinColor:resolved.skinColor,
    head:resolved.head,
    radius:'50',
    size:'128'
  });
  if(resolved.glasses){
    params.set('glasses',resolved.glasses);
    params.set('glassesProbability',String(resolved.glassesProbability));
  }else{
    params.set('glassesProbability','0');
  }
  if(resolved.mustache){
    params.set('mustache',resolved.mustache);
    params.set('mustacheProbability',String(resolved.mustacheProbability));
  }else{
    params.set('mustacheProbability','0');
  }
  return `https://api.dicebear.com/9.x/miniavs/svg?${params.toString()}`;
}

function normalizePassLevelArray(values=[]){
  return Array.from(new Set(
    (Array.isArray(values)?values:[])
      .map(value=>Math.max(1,Math.min(XP_RULES.maxLevel,Math.floor(value||0))))
      .filter(Boolean)
  )).sort((a,b)=>a-b);
}

function buildBrevetPassRewardIndex(){
  const index={theme:{},sound:{},title:{}};
  Object.entries(BREVET_PASS_LEVELS).forEach(([levelKey,tracks])=>{
    const level=Number(levelKey);
    ['free','premium'].forEach(track=>{
      (tracks?.[track]||[]).forEach(reward=>{
        if(reward.type==='theme' || reward.type==='sound' || reward.type==='title'){
          index[reward.type][reward.key]={level,track};
        }
      });
    });
  });
  return index;
}

function getBattlePassTrackLabel(track='free'){
  return track==='premium'?'Premium':'Gratuit';
}

function getBattlePassTrackRewards(level,track='free'){
  return [...(BREVET_PASS_LEVELS[level]?.[track]||[])];
}

function hasBattlePassRewardsAtLevel(level){
  return !!(getBattlePassTrackRewards(level,'free').length || getBattlePassTrackRewards(level,'premium').length);
}

function getLegacyUnlockedSoundPackKeys(level){
  return Object.entries(SOUND_PACKS)
    .filter(([,pack])=>level>=(pack.unlockLevel||1))
    .map(([key])=>key);
}

function getUnlockedSoundPackKeys(){
  return Array.from(new Set(['classic',...(playerProfile?.unlockedSoundPacks||[])]));
}

function isBattlePassTrackClaimed(level,track='free',profile=playerProfile){
  if(!profile) return false;
  const claimed=track==='premium'?profile.battlePassClaimedPremium:profile.battlePassClaimedFree;
  return normalizePassLevelArray(claimed).includes(level);
}

function isBattlePassTrackUnlocked(level,track='free',profile=playerProfile){
  if(!profile) return false;
  const currentLevel=profile.levelInfo?.level||profile.level||1;
  if(level>currentLevel) return false;
  if(track==='premium' && !profile.battlePassPremium) return false;
  return true;
}

function getPassTitleMeta(titleKey){
  return PASS_TITLES[titleKey]||PASS_TITLES['global:Novice'];
}

function getTitleEffectClass(effect='none'){
  return effect && effect!=='none' ? `effect-${effect}` : '';
}

function getAvatarBorderTier(level){
  if(level>=40) return 'gold';
  if(level>=20) return 'silver';
  if(level>=10) return 'bronze';
  return 'base';
}

function getPlayerNameFxClass(level){
  if(level>=50) return 'vip';
  if(level>=40) return 'legend';
  if(level>=20) return 'glow';
  return '';
}

function getSoundPack(key){
  return SOUND_PACKS[key]||SOUND_PACKS.classic;
}

function formatLongDuration(seconds){
  const total=Math.max(0,Math.floor(seconds||0));
  const hours=Math.floor(total/3600);
  const minutes=Math.floor((total%3600)/60);
  if(hours>0) return `${hours} h ${String(minutes).padStart(2,'0')} min`;
  return `${minutes||0} min`;
}

function getFavoriteSubject(statsBySubject={},fallbackXpBySubject={}){
  const bestAnswered=getSubjectLeader(statsBySubject);
  return bestAnswered||getSubjectLeader(fallbackXpBySubject);
}

function cloneAvatarConfig(config){
  return JSON.parse(JSON.stringify(config||{}));
}

function getWorkshopUnlockCount(level){
  return ['backgrounds','eyes','hair','mouth','clothing','clothingColors','hairColors','skinColors','heads','accessories','mustaches']
    .reduce((sum,group)=>sum+getMiniavsOptions(group,level).length,0);
}

function getNextWorkshopUnlock(level){
  return 'Tous les éléments de l’Atelier sont déjà disponibles.';
}

let audioContext=null;
let avatarWorkshopDraft=null;
let ambientNodes=[];
let ambientThemeKey='';
let ambientNoiseBuffer=null;

function ensureAudioContext(){
  if(typeof window==='undefined') return null;
  const AudioCtor=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtor) return null;
  if(!audioContext) audioContext=new AudioCtor();
  if(audioContext.state==='suspended') audioContext.resume().catch(()=>{});
  return audioContext;
}

function getAmbientNoiseBuffer(ctx){
  if(ambientNoiseBuffer) return ambientNoiseBuffer;
  const length=ctx.sampleRate*2;
  const buffer=ctx.createBuffer(1,length,ctx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<length;i++){
    data[i]=(Math.random()*2-1)*0.4;
  }
  ambientNoiseBuffer=buffer;
  return buffer;
}

function stopThemeAmbience(){
  ambientNodes.forEach(node=>{
    try{
      if(node.stop) node.stop();
      if(node.disconnect) node.disconnect();
    }catch(error){
      console.warn('Ambient stop warning',error);
    }
  });
  ambientNodes=[];
  ambientThemeKey='';
}

function createAmbientOscillator(ctx,{frequency,wave='sine',gain=.0026,detune=0}={}){
  const osc=ctx.createOscillator();
  const gainNode=ctx.createGain();
  osc.type=wave;
  osc.frequency.value=frequency;
  osc.detune.value=detune;
  gainNode.gain.value=gain;
  osc.connect(gainNode);
  gainNode.connect(ctx.destination);
  osc.start();
  ambientNodes.push(osc,gainNode);
}

function createAmbientNoise(ctx,{gain=.0016,cutoff=900,Q=.0001}={}){
  const noise=ctx.createBufferSource();
  const filter=ctx.createBiquadFilter();
  const gainNode=ctx.createGain();
  noise.buffer=getAmbientNoiseBuffer(ctx);
  noise.loop=true;
  filter.type='lowpass';
  filter.frequency.value=cutoff;
  filter.Q.value=Q;
  gainNode.gain.value=gain;
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);
  noise.start();
  ambientNodes.push(noise,filter,gainNode);
}

function syncThemeAmbience(force=false){
  if(!playerProfile) return;
  const ctx=ensureAudioContext();
  if(!ctx) return;
  const themeKey=playerProfile.currentTheme||'dark';
  if(!force && ambientThemeKey===themeKey && ambientNodes.length) return;
  stopThemeAmbience();
  ambientThemeKey=themeKey;
  switch(themeKey){
    case 'pastel':
      createAmbientOscillator(ctx,{frequency:330,wave:'sine',gain:.0015});
      createAmbientOscillator(ctx,{frequency:494,wave:'triangle',gain:.0008,detune:5});
      break;
    case 'nature-vivante':
      createAmbientOscillator(ctx,{frequency:196,wave:'triangle',gain:.0019});
      createAmbientOscillator(ctx,{frequency:294,wave:'sine',gain:.0011,detune:8});
      createAmbientNoise(ctx,{gain:.0012,cutoff:1200});
      break;
    case 'glace':
      createAmbientOscillator(ctx,{frequency:392,wave:'triangle',gain:.0013});
      createAmbientOscillator(ctx,{frequency:587,wave:'sine',gain:.0009,detune:-6});
      createAmbientNoise(ctx,{gain:.0011,cutoff:1800});
      break;
    case 'ciel-nuages':
      createAmbientOscillator(ctx,{frequency:262,wave:'sine',gain:.0016});
      createAmbientOscillator(ctx,{frequency:392,wave:'triangle',gain:.0011,detune:4});
      break;
    case 'electricite':
      createAmbientOscillator(ctx,{frequency:110,wave:'sawtooth',gain:.0017});
      createAmbientOscillator(ctx,{frequency:220,wave:'square',gain:.0009,detune:7});
      break;
    case 'aurora':
      createAmbientOscillator(ctx,{frequency:174,wave:'triangle',gain:.0015});
      createAmbientOscillator(ctx,{frequency:261,wave:'sine',gain:.001,detune:-9});
      break;
    case 'ocean':
      createAmbientOscillator(ctx,{frequency:130,wave:'sine',gain:.0016});
      createAmbientOscillator(ctx,{frequency:196,wave:'triangle',gain:.0009,detune:3});
      createAmbientNoise(ctx,{gain:.0011,cutoff:1400});
      break;
    case 'sunset':
      createAmbientOscillator(ctx,{frequency:146,wave:'triangle',gain:.0014});
      createAmbientOscillator(ctx,{frequency:220,wave:'sine',gain:.0009,detune:-4});
      break;
    case 'magma':
      createAmbientOscillator(ctx,{frequency:55,wave:'sawtooth',gain:.0018});
      createAmbientOscillator(ctx,{frequency:82,wave:'triangle',gain:.0012,detune:6});
      createAmbientNoise(ctx,{gain:.001,cutoff:650});
      break;
    case 'manga':
      createAmbientOscillator(ctx,{frequency:208,wave:'square',gain:.0012});
      createAmbientOscillator(ctx,{frequency:311,wave:'triangle',gain:.0007,detune:10});
      break;
    case 'steampunk':
      createAmbientOscillator(ctx,{frequency:98,wave:'sawtooth',gain:.0014});
      createAmbientOscillator(ctx,{frequency:147,wave:'triangle',gain:.0009,detune:4});
      break;
    case 'antique':
      createAmbientOscillator(ctx,{frequency:196,wave:'sine',gain:.0013});
      createAmbientOscillator(ctx,{frequency:392,wave:'triangle',gain:.0008,detune:12});
      break;
    case 'neon':
      createAmbientOscillator(ctx,{frequency:123,wave:'sawtooth',gain:.0015});
      createAmbientOscillator(ctx,{frequency:246,wave:'square',gain:.0008,detune:-4});
      break;
    case 'paper':
    case 'vintage':
      createAmbientOscillator(ctx,{frequency:185,wave:'triangle',gain:.001});
      createAmbientOscillator(ctx,{frequency:277,wave:'sine',gain:.0007,detune:7});
      break;
    case 'aura-divine':
      createAmbientOscillator(ctx,{frequency:196,wave:'sine',gain:.0017});
      createAmbientOscillator(ctx,{frequency:392,wave:'triangle',gain:.0011,detune:6});
      createAmbientOscillator(ctx,{frequency:587,wave:'sine',gain:.0007,detune:-6});
      break;
    default:
      stopThemeAmbience();
      break;
  }
}

function playTone(ctx,when,frequency,duration,wave,volume){
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  osc.type=wave;
  osc.frequency.setValueAtTime(frequency,when);
  gain.gain.setValueAtTime(0.0001,when);
  gain.gain.exponentialRampToValueAtTime(volume,when+0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001,when+duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(when);
  osc.stop(when+duration+0.03);
}

function triggerVibration(type='success'){
  if(typeof navigator==='undefined' || typeof navigator.vibrate!=='function') return;
  const pattern=type==='error' ? [90] : type==='level' ? [24,30,24] : [18];
  navigator.vibrate(pattern);
}

function playEffect(type='success'){
  if(!playerProfile) return;
  const ctx=ensureAudioContext();
  if(!ctx) return;
  syncThemeAmbience();
  const pack=getSoundPack(playerProfile.soundPack);
  const soundType=type==='level' || type==='challenge' ? 'success' : type;
  const notes=pack[soundType]||pack.success;
  const now=ctx.currentTime;
  notes.forEach((frequency,index)=>{
    playTone(ctx,now+(index*0.08),frequency,soundType==='error'?0.12:0.14,pack.wave,pack.volume);
  });
}

function playSound(kind='success'){
  playEffect(kind);
}

function playCoinSound(){
  const ctx=ensureAudioContext();
  if(!ctx) return;
  syncThemeAmbience();
  const pack=getSoundPack(playerProfile?.soundPack);
  const notes=pack.coin||[1046,1568,2093];
  const wave=pack.wave||'triangle';
  const volume=Math.min(0.06,(pack.volume||0.04)+0.012);
  const now=ctx.currentTime;
  notes.forEach((frequency,index)=>{
    playTone(ctx,now+(index*0.045),frequency,0.1,wave,volume);
  });
}

function installAudioUnlockBridge(){
  if(typeof window==='undefined') return;
  const unlock=()=>{
    const ctx=ensureAudioContext();
    if(ctx) syncThemeAmbience(true);
    window.removeEventListener('pointerdown',unlock);
    window.removeEventListener('keydown',unlock);
    window.removeEventListener('touchstart',unlock);
  };
  window.addEventListener('pointerdown',unlock,{once:true});
  window.addEventListener('keydown',unlock,{once:true});
  window.addEventListener('touchstart',unlock,{once:true});
}

function escapeHTML(value){
  return String(value??'').replace(/[&<>"']/g,char=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[char]));
}

function nl2br(value){
  return escapeHTML(value).replace(/\n/g,'<br>');
}

function getLocalDateKey(date=new Date()){
  const y=date.getFullYear();
  const m=String(date.getMonth()+1).padStart(2,'0');
  const d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function daysBetween(dateA,dateB){
  if(!dateA||!dateB) return Infinity;
  const [ay,am,ad]=dateA.split('-').map(Number);
  const [by,bm,bd]=dateB.split('-').map(Number);
  const utcA=Date.UTC(ay,am-1,ad);
  const utcB=Date.UTC(by,bm-1,bd);
  return Math.round((utcB-utcA)/86400000);
}

function getLevelRequirement(level){
  return Math.round(XP_RULES.baseLevelXp*Math.pow(XP_RULES.growth,level-1));
}

function getLevelInfo(totalXp){
  let remaining=Math.max(0,Math.floor(totalXp||0));
  let level=1;
  while(level<XP_RULES.maxLevel){
    const needed=getLevelRequirement(level);
    if(remaining<needed) break;
    remaining-=needed;
    level++;
  }
  const nextLevelXp=level>=XP_RULES.maxLevel?0:getLevelRequirement(level);
  const progressPct=level>=XP_RULES.maxLevel?100:Math.min(100,Math.round((remaining/nextLevelXp)*100));
  return {level,currentLevelXp:remaining,nextLevelXp,progressPct};
}

function getStreakCoinReward(streakCount){
  const safeCount=Math.max(0,Math.floor(streakCount||0));
  if(safeCount<COIN_RULES.streak.startDay) return 0;
  return COIN_RULES.streak.base+((safeCount-COIN_RULES.streak.startDay)*COIN_RULES.streak.step);
}

function getPerfectQuizCoinReward(level=playerProfile?.levelInfo?.level||1){
  const safeLevel=Math.max(1,Math.floor(level||1));
  return COIN_RULES.perfect.base+((safeLevel-1)*COIN_RULES.perfect.perLevel);
}

function pickTitle(list,level){
  return [...list].reverse().find(item=>level>=item.level)?.title||list[0]?.title||'Novice';
}

function getSubjectLeader(xpBySubject={}){
  let bestKey=null;
  let bestXp=0;
  SUBJECT_KEYS.forEach(key=>{
    const current=xpBySubject[key]||0;
    if(current>bestXp){bestXp=current;bestKey=key;}
  });
  return bestXp>0?bestKey:null;
}

function getCorrectAnswerText(q){
  if(q.type==='mcq') return q.opts?.[q.ans]||'';
  if(q.type==='tf') return q.ans?'Vrai':'Faux';
  if(q.type==='date') return (q.dates||[]).map((date,idx)=>`${date} → ${q.events?.[idx]||''}`).join(' · ');
  return q.correctAnswer||q.answer||getOpenAnswerKeywords(q).slice(0,3).join(', ');
}

function buildPedagogicalReminder(subject,chapter,q){
  const source=`${chapter} ${q.q||''}`.toLowerCase();
  if(subject==='maths'){
    const rules=[
      {test:/pythagore/,text:"Le théorème de Pythagore s'utilise uniquement dans un triangle rectangle : côté² + côté² = hypoténuse²."},
      {test:/aire.*triangle|triangle.*aire/,text:"Aire d'un triangle = base × hauteur ÷ 2."},
      {test:/aire.*cercle|cercle.*aire|disque/,text:"Aire du disque = π × rayon²."},
      {test:/périmètre.*cercle|circonférence/,text:"Périmètre du cercle = 2 × π × rayon."},
      {test:/probabilit/,text:"Probabilité = nombre de cas favorables ÷ nombre de cas possibles."},
      {test:/moyenne/,text:"Moyenne = somme des valeurs ÷ nombre de valeurs."},
      {test:/thal/,text:"Avec des droites parallèles, les longueurs correspondantes restent proportionnelles."}
    ];
    return rules.find(rule=>rule.test.test(source))?.text||'';
  }
  if(subject==='francais'){
    const rules=[
      {test:/cod|coi/,text:"Le COD se relie directement au verbe ; le COI se construit avec une préposition comme à ou de."},
      {test:/subjonctif/,text:"Le subjonctif s'emploie souvent après 'que' pour exprimer doute, souhait, émotion ou obligation."},
      {test:/participe passé/,text:"Avec l'auxiliaire être, le participe passé s'accorde avec le sujet en genre et en nombre."},
      {test:/adjectif/,text:"L'adjectif qualificatif s'accorde avec le nom qu'il précise."},
      {test:/imparfait/,text:"L'imparfait sert souvent à exprimer une habitude, une description ou une action qui dure dans le passé."},
      {test:/relative|pronom relatif/,text:"Une proposition subordonnée relative complète un nom et commence souvent par qui, que, dont ou où."}
    ];
    return rules.find(rule=>rule.test.test(source))?.text||'';
  }
  return '';
}

function getExplanation(q){
  return q.explain||q.explanation||'';
}

function normalizeQuestionBank(){
  Object.entries(DB).forEach(([subject,chapters])=>{
    Object.entries(chapters).forEach(([chapter,questions])=>{
      questions.forEach(q=>{
        if(!q.q && q.question) q.q=q.question;
        if(q.type==='input') q.type='open';
        if(!q.correctAnswer && q.answer) q.correctAnswer=q.answer;
        if(!Array.isArray(q.key) && Array.isArray(q.keywords)) q.key=[...q.keywords];
        if(!q.correctAnswer) q.correctAnswer=getCorrectAnswerText(q);
        const baseExplanation=q.explain||q.explanation||`Cette notion appartient au chapitre ${chapter}.`;
        const reminder=buildPedagogicalReminder(subject,chapter,q);
        q.explanation=reminder && !baseExplanation.includes(reminder)
          ? `${baseExplanation}\n\nRappel : ${reminder}`
          : baseExplanation;
        q.explain=q.explanation;
      });
    });
  });
}

let QUESTION_LOOKUP={};

function assignQuestionIds(){
  QUESTION_LOOKUP={};
  Object.entries(DB).forEach(([subject,chapters])=>{
    Object.entries(chapters).forEach(([chapter,questions])=>{
      questions.forEach((q,index)=>{
        const id=q.id||`${subject}::${chapter}::${index}`;
        q.id=id;
        q._id=id;
        q._subj=q._subj||subject;
        q._chapter=q._chapter||chapter;
        QUESTION_LOOKUP[id]=q;
      });
    });
  });
}

function applyQuestionExpansions(){
  Object.entries(QUESTION_EXPANSIONS).forEach(([subject,chapters])=>{
    Object.entries(chapters).forEach(([chapter,questions])=>{
      if(!DB[subject]?.[chapter]) return;
      DB[subject][chapter].push(...questions.map(cloneQuestion));
    });
  });
  const generated=generateMathVariants();
  Object.entries(generated).forEach(([subject,chapters])=>{
    Object.entries(chapters).forEach(([chapter,questions])=>{
      if(!DB[subject]?.[chapter]) return;
      DB[subject][chapter].push(...questions.map(cloneQuestion));
    });
  });
}

function applyFlashcardQuestions(){
  SUBJECT_KEYS.forEach(subject=>{
    const chapters=Object.keys(DB[subject]||{});
    const cards=FLASHCARDS[subject]||[];
    cards.forEach((card,idx)=>{
      if(!chapters.length) return;
      const chapter=chapters[idx%chapters.length];
      const key=(extractKeywords(card.a+' '+(card.explain||'')).map(word=>word.toLowerCase()).slice(0,4));
      if(!key.length) key.push(...String(card.a).toLowerCase().split(/[^a-zà-ÿ0-9]+/i).filter(word=>word.length>3).slice(0,4));
      DB[subject][chapter].push({
        type:'open',
        diff:idx%4===0?'facile':'normal',
        q:card.q,
        key:key.length?key:['réponse'],
        correctAnswer:card.a,
        explanation:card.explanation||card.explain||card.a
      });
    });
  });
}

function getRankInfo(rp){
  let current=RANK_TIERS[0];
  RANK_TIERS.forEach(tier=>{ if(rp>=tier.rp) current=tier; });
  return current;
}

function safeReadJSON(key,fallback={}){
  try{
    const raw=localStorage.getItem(key);
    if(!raw) return fallback;
    const parsed=JSON.parse(raw);
    return parsed && typeof parsed==='object' ? parsed : fallback;
  }catch(_error){
    return fallback;
  }
}

function loadRankedProfile(){
  const raw=safeReadJSON(STORAGE_KEYS.ranked,{});
  return {rp:Math.max(0,Math.floor(raw.rp||0)),peakRp:Math.max(0,Math.floor(raw.peakRp||0))};
}

function saveRankedProfile(){
  if(!rankedProfile) return;
  localStorage.setItem(STORAGE_KEYS.ranked,JSON.stringify(rankedProfile));
}

function extractKeywords(text){
  return Array.from(new Set(String(text||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .match(/[a-z]{4,}/g)||[]))
    .filter(word=>!['dans','avec','pour','plus','cette','celui','elles','nous','vous','leur','leurs','sont','comme','tout','tous','etre'].includes(word))
    .slice(0,4)
    .map(word=>word.charAt(0).toUpperCase()+word.slice(1));
}

function cleanSheetText(text=''){
  return String(text||'').replace(/\s+/g,' ').trim();
}

function normalizeAnswerText(text=''){
  return String(text||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();
}

function getLevenshteinDistance(s1='',s2=''){
  const a=String(s1||'');
  const b=String(s2||'');
  if(a===b) return 0;
  if(!a.length) return b.length;
  if(!b.length) return a.length;
  const rows=Array.from({length:b.length+1},(_,index)=>index);
  for(let i=1;i<=a.length;i++){
    let previous=i-1;
    rows[0]=i;
    for(let j=1;j<=b.length;j++){
      const current=rows[j];
      const cost=a[i-1]===b[j-1]?0:1;
      rows[j]=Math.min(
        rows[j]+1,
        rows[j-1]+1,
        previous+cost
      );
      previous=current;
    }
  }
  return rows[b.length];
}

function getCloseEnoughThreshold(str=''){
  const compact=normalizeAnswerText(str).replace(/\s+/g,'');
  const len=compact.length;
  if(len<=2) return 0;
  if(len<=6) return 1;
  return 2;
}

function isCloseEnough(str1='',str2=''){
  const normalized1=normalizeAnswerText(str1);
  const normalized2=normalizeAnswerText(str2);
  if(!normalized1 || !normalized2) return false;
  const threshold=Math.min(getCloseEnoughThreshold(normalized1),getCloseEnoughThreshold(normalized2));
  return getLevenshteinDistance(normalized1,normalized2)<=threshold;
}

function tokenizeNormalizedAnswer(text=''){
  return normalizeAnswerText(text)
    .split(' ')
    .map(part=>part.trim())
    .filter(part=>part.length>=2);
}

function matchKeywordAgainstAnswer(keyword,userAnswer){
  const keywordParts=tokenizeNormalizedAnswer(keyword);
  const answerTokens=tokenizeNormalizedAnswer(userAnswer);
  if(!keywordParts.length || !answerTokens.length){
    return {ok:false,usedTolerance:false};
  }
  let usedTolerance=false;
  const ok=keywordParts.every(part=>{
    if(answerTokens.includes(part)) return true;
    const fuzzyMatch=answerTokens.some(token=>isCloseEnough(token,part));
    if(fuzzyMatch) usedTolerance=true;
    return fuzzyMatch;
  });
  return {ok,usedTolerance};
}

function getOpenAnswerKeywords(q){
  const explicit=[
    ...(Array.isArray(q?.key)?q.key:[]),
    ...(Array.isArray(q?.keywords)?q.keywords:[])
  ];
  const derived=extractKeywords(`${q?.correctAnswer||q?.answer||''} ${q?.explain||q?.explanation||''}`);
  const source=explicit.length?explicit.concat(derived):derived;
  return Array.from(new Set(
    source
      .map(keyword=>normalizeAnswerText(keyword))
      .filter(keyword=>keyword.length>2)
  ));
}

function getOpenAnswerRequirement(keywords){
  if(!keywords.length) return 1;
  if(keywords.length>=4) return 3;
  return Math.min(2,keywords.length);
}

function isOpenAnswerValid(q,userAnswer){
  const normalizedAnswer=normalizeAnswerText(userAnswer);
  const keywords=getOpenAnswerKeywords(q);
  if(!normalizedAnswer){
    return {ok:false,hits:[],keywords,usedTolerance:false,viaKeywords:keywords.length>0};
  }
  const hits=keywords
    .map(keyword=>({keyword,...matchKeywordAgainstAnswer(keyword,normalizedAnswer)}))
    .filter(match=>match.ok);
  if(keywords.length){
    return {
      ok:hits.length>=getOpenAnswerRequirement(keywords),
      hits:hits.map(match=>match.keyword),
      keywords,
      usedTolerance:hits.some(match=>match.usedTolerance),
      viaKeywords:true
    };
  }
  const expected=normalizeAnswerText(q?.correctAnswer||q?.answer||'');
  const closeEnough=expected?isCloseEnough(normalizedAnswer,expected):false;
  return {
    ok:closeEnough,
    hits:[],
    keywords,
    usedTolerance:closeEnough && normalizedAnswer!==expected,
    viaKeywords:false
  };
}

function getSheetIllustrationUrl(subject,chapter,item){
  const palette={
    histoire:{a:'#4b2431',b:'#d1a55f',c:'#f6ead0'},
    geo:{a:'#0a3556',b:'#44c0ff',c:'#dff6ff'},
    emc:{a:'#3a235f',b:'#f0c65a',c:'#f8f1ff'},
    francais:{a:'#61253d',b:'#ff9bb8',c:'#fff1f6'},
    maths:{a:'#103a52',b:'#5fe2ff',c:'#e5fbff'},
    svt:{a:'#153c2e',b:'#70e38f',c:'#ecfff2'},
    physique:{a:'#14233f',b:'#74c5ff',c:'#eaf7ff'},
    technologie:{a:'#0d2e31',b:'#57f0c8',c:'#ebfffb'}
  }[subject]||{a:'#1b2240',b:'#e8b84b',c:'#f5f7ff'};
  const icon=SUBJ_META[subject]?.icon||'📘';
  const title=cleanSheetText(item?.title||chapter).slice(0,34);
  const kicker=cleanSheetText(item?.kicker||'Repère').slice(0,26);
  const subtitle=cleanSheetText(item?.copy||chapter).slice(0,58);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.a}"/>
        <stop offset="100%" stop-color="${palette.b}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="460" rx="34" fill="url(#bg)"/>
    <circle cx="690" cy="88" r="58" fill="rgba(255,255,255,0.14)"/>
    <circle cx="720" cy="120" r="22" fill="rgba(255,255,255,0.18)"/>
    <rect x="38" y="42" width="724" height="376" rx="28" fill="rgba(7,11,26,0.18)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="68" y="82" width="184" height="184" rx="24" fill="${palette.c}" opacity="0.94"/>
    <text x="160" y="190" text-anchor="middle" font-size="82" font-family="Verdana, Arial, sans-serif">${icon}</text>
    <text x="286" y="122" font-size="26" font-family="Verdana, Arial, sans-serif" fill="rgba(255,255,255,0.78)" letter-spacing="2">${kicker.toUpperCase()}</text>
    <text x="286" y="180" font-size="42" font-family="Verdana, Arial, sans-serif" font-weight="700" fill="#ffffff">${title}</text>
    <text x="286" y="236" font-size="24" font-family="Verdana, Arial, sans-serif" fill="rgba(255,255,255,0.92)">${subtitle}</text>
    <rect x="286" y="284" width="370" height="14" rx="7" fill="rgba(255,255,255,0.18)"/>
    <rect x="286" y="284" width="230" height="14" rx="7" fill="#ffffff" opacity="0.68"/>
    <rect x="286" y="324" width="290" height="12" rx="6" fill="rgba(255,255,255,0.16)"/>
    <rect x="286" y="354" width="330" height="12" rx="6" fill="rgba(255,255,255,0.14)"/>
    <rect x="286" y="384" width="210" height="12" rx="6" fill="rgba(255,255,255,0.12)"/>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getSheetLines(questions,max=6){
  return Array.from(new Set(
    questions
      .map(q=>cleanSheetText(q.explanation||q.explain||q.correctAnswer||q.q))
      .filter(Boolean)
  )).slice(0,max);
}

function buildSheetVisualPack(subject,chapter,questions,keywords,lines){
  const lower=chapter.toLowerCase();
  const idea=lines[0]||chapter;
  const reminder=lines[1]||lines[0]||chapter;
  const examples={
    histoire:{
      visuals:[
        {art:'history',kicker:'Frise',title:'Dates a memoriser',copy:lower.includes('prem')?'1914, 1916, 1917, 1918 : la chronologie minimale a citer.':'Placez les evenements dans l ordre avant de rediger.'},
        {art:'history',kicker:'Carte evolutive',title:'Territoires en mouvement',copy:'Reperez les changements de frontieres, de blocs ou de rapports de force.'},
        {art:'history',kicker:'Sujet long',title:'Reponse developpee',copy:'Situez, expliquez, illustrez avec un exemple precis puis concluez clairement.'}
      ],
      stepsTitle:'Methode de reponse detaillee',
      steps:[
        'Je situe l evenement avec une date ou une periode precise.',
        'Je nomme les acteurs, les causes et les consequences.',
        'Je termine par un exemple concret ou un bilan historique.'
      ],
      timeline:[
        {label:'Repere 1',copy:lower.includes('guerre')?'Datez le debut, le tournant et la fin du conflit.':'Reperez le contexte, le regime et la rupture.'},
        {label:'Repere 2',copy:'Associez chaque date a un acteur et a une idee-force.'},
        {label:'Repere 3',copy:'Pensez aux consequences pour la France, l Europe ou le monde.'}
      ],
      mind:[
        {title:'Contexte',text:'Quand et dans quelle situation se place le chapitre ?'},
        {title:'Acteurs',text:'Etats, chefs, populations ou resistants a identifier.'},
        {title:'Rupture',text:'Montrez ce qui change vraiment dans le temps.'},
        {title:'Bilan',text:'Consequence politique, sociale ou humaine a retenir.'}
      ]
    },
    geo:{
      visuals:[
        {art:'geo',kicker:'Carte',title:'Reperes spatiaux',copy:'Localisez a l echelle mondiale, nationale puis locale avant d expliquer.'},
        {art:'geo',kicker:'Photo',title:'Lecture d image',copy:'Observez les acteurs, les amenagements, les flux et les contrastes visibles.'},
        {art:'geo',kicker:'Croquis',title:'Idee-force',copy:`Mots utiles : ${keywords.slice(0,3).join(', ')||'flux, metropole, territoire'}.`}
      ],
      stepsTitle:'Methode carte / croquis',
      steps:[
        'Je localise le lieu et je donne l echelle.',
        'Je decris les flux, les acteurs ou les amenagements.',
        'J explique ce que cela montre sur la mondialisation ou les inegalites.'
      ],
      timeline:[
        {label:'Monde',copy:'Quels grands flux relient ce territoire au reste du monde ?'},
        {label:'Territoire',copy:'Quelles metropoles, interfaces ou marges apparaissent ?'},
        {label:'Cas local',copy:'Quel amenagement concret peut etre cite ?'}
      ],
      mind:[
        {title:'Localiser',text:'Carte, continent, facade, aire urbaine ou espace productif.'},
        {title:'Decrire',text:'Acteurs, reseaux, densites, mobilites, contrastes.'},
        {title:'Expliquer',text:'Pourquoi cet espace est integre ou en difficultes ?'},
        {title:'Illustrer',text:'Toujours ajouter un exemple de territoire ou d amenagement.'}
      ]
    },
    francais:{
      visuals:[
        {art:'francais',kicker:'Regle',title:'Notion utile',copy:idea},
        {art:'francais',kicker:'Exemple',title:'Application concrete',copy:reminder},
        {art:'francais',kicker:'Mots utiles',title:'Vocabulaire brevet',copy:'Sujet, justification, citation, connecteur, effet, registre, these.'}
      ],
      stepsTitle:'Reflexe redaction / langue',
      steps:[
        'Je nomme clairement la regle ou la figure de style.',
        'J applique aussitot la regle a une phrase precise.',
        'Je justifie avec un mot grammatical ou un effet produit.'
      ],
      timeline:null,
      mind:[
        {title:'Identifier',text:'Nature, fonction, temps, figure ou these du texte.'},
        {title:'Justifier',text:'Citez un mot ou un groupe de mots du texte.'},
        {title:'Expliquer',text:'Dites en quoi la regle ou la figure produit un effet.'},
        {title:'Rediger',text:'Faites une phrase complete, propre et precise.'}
      ]
    },
    maths:{
      visuals:[
        {art:'maths',kicker:'Formule',title:'A connaitre',copy:questions.find(q=>q.correctAnswer && q.correctAnswer.length<70)?.correctAnswer||'Toujours ecrire la formule avant le calcul.'},
        {art:'maths',kicker:'Calcul',title:'Exemple detaille',copy:lower.includes('géom')||lower.includes('geometr')?'Ex : 3² + 4² = 9 + 16 = 25 donc la longueur vaut 5.':'Ex : on remplace les valeurs, on calcule, puis on conclut avec l unite.'},
        {art:'maths',kicker:'Piege',title:'Point de vigilance',copy:'Verifiez l unite, l ordre des operations et la phrase de conclusion.'}
      ],
      stepsTitle:'Application de formule',
      steps:lower.includes('stat')
        ? ['J organise les donnees.', 'Je choisis moyenne, mediane ou probabilite.', 'Je calcule puis j interprete le resultat.']
        : lower.includes('alg')
          ? ['J isole l inconnue.', 'Je developpe ou reduis si besoin.', 'Je verifie la solution obtenue.']
          : ['Je repere la formule utile.', 'Je remplace chaque grandeur avec son unite.', 'Je calcule puis j ecris la conclusion.'],
      timeline:null,
      mind:[
        {title:'Donnees',text:'Relisez le texte et isolez les valeurs utiles.'},
        {title:'Outil',text:'Formule, theoreme ou methode a choisir.'},
        {title:'Calcul',text:'Montrez les etapes, pas seulement le resultat.'},
        {title:'Conclusion',text:'Unite, phrase finale et verification rapide.'}
      ]
    },
    physique:{
      visuals:[
        {art:'physique',kicker:'Formule',title:'Application',copy:questions.find(q=>q.correctAnswer && q.correctAnswer.length<70)?.correctAnswer||'Commencez toujours par ecrire la relation physique.'},
        {art:'physique',kicker:'Schema',title:'Observation',copy:'Reperez les grandeurs, les unites et le sens physique du resultat.'},
        {art:'physique',kicker:'Experience',title:'Interpretation',copy:'Comparez mesure, calcul et conclusion scientifique.'}
      ],
      stepsTitle:'Calcul ou experience',
      steps:[
        'Je note la formule et les unites attendues.',
        'Je remplace les valeurs sans oublier les conversions.',
        'J interprete le resultat : vitesse, energie, acidite ou transformation.'
      ],
      timeline:null,
      mind:[
        {title:'Grandeurs',text:'Masse, vitesse, distance, temps, pH ou ions.'},
        {title:'Mesure',text:'Observer, relever, convertir et comparer.'},
        {title:'Calcul',text:'Utiliser la bonne relation avec les bonnes unites.'},
        {title:'Conclusion',text:'Dire ce que le resultat signifie vraiment.'}
      ]
    },
    technologie:{
      visuals:[
        {art:'tech',kicker:'Algorithme',title:'Logique',copy:'Entree → traitement → sortie : gardez cette chaine en tete.'},
        {art:'tech',kicker:'Reseau',title:'Circulation',copy:'Reperez les donnees, les capteurs, les actionneurs et le support de communication.'},
        {art:'tech',kicker:'Objet',title:'Usage durable',copy:'Penser fonction, materiau, energie, reparation et recyclage.'}
      ],
      stepsTitle:'Algorithme type',
      steps:[
        'Je definis la variable ou l information utile.',
        'Je construis la condition ou la boucle necessaire.',
        'Je teste le resultat attendu et j explique le role de chaque etape.'
      ],
      timeline:null,
      mind:[
        {title:'Besoin',text:'Quel probleme l objet ou le programme doit-il resoudre ?'},
        {title:'Donnees',text:'Capteurs, variables ou informations d entree.'},
        {title:'Traitement',text:'Condition, boucle, sequence ou protocole reseau.'},
        {title:'Sortie',text:'Action de l objet, affichage ou message envoye.'}
      ]
    },
    svt:{
      visuals:[
        {art:'svt',kicker:'Schema',title:'Organisation du vivant',copy:'Reliez organe, cellule, ADN ou ecosysteme dans le bon ordre.'},
        {art:'svt',kicker:'Mecanisme',title:'Cause → effet',copy:'Montrez comment un phenomene biologique ou geologique se met en place.'},
        {art:'svt',kicker:'Repere',title:'A retenir',copy:'Un mot-cle doit toujours etre rattache a un exemple concret.'}
      ],
      stepsTitle:'Explication scientifique',
      steps:[
        'Je nomme les elements du schema ou du mecanisme.',
        'J explique leur role avec le vocabulaire scientifique du chapitre.',
        'Je termine par une consequence observable sur le corps, l ecosysteme ou la Terre.'
      ],
      timeline:null,
      mind:[
        {title:'Structure',text:'Cellule, organe, gene, plaque ou ecosysteme.'},
        {title:'Fonction',text:'A quoi sert chaque element dans le chapitre ?'},
        {title:'Lien',text:'Reliez cause, mecanisme et effet final.'},
        {title:'Exemple',text:'Ajoutez une situation ou une observation concrete.'}
      ]
    },
    emc:{
      visuals:[
        {art:'emc',kicker:'Principe',title:'Valeur republicaine',copy:'Definissez le principe puis reliez-le a une situation concrete.'},
        {art:'emc',kicker:'Exemple',title:'Cas pratique',copy:'Imaginez un conflit, un droit ou un devoir puis dites quelle valeur s applique.'},
        {art:'emc',kicker:'Reflexe',title:'Citoyen',copy:'Respect, argument, loi, vote, justice, laicite et engagement.'}
      ],
      stepsTitle:'Reponse citoyenne',
      steps:[
        'Je nomme la valeur ou le droit concerne.',
        'Je l explique avec des mots simples mais precis.',
        'Je donne un exemple de vie quotidienne ou de vie democratique.'
      ],
      timeline:null,
      mind:[
        {title:'Valeur',text:'Liberte, egalite, fraternite, laicite ou justice.'},
        {title:'Droit',text:'Ce que la loi protege pour chacun.'},
        {title:'Devoir',text:'Ce que le citoyen doit respecter.'},
        {title:'Exemple',text:'Toujours illustrer avec une situation concrete.'}
      ]
    }
  };
  return examples[subject]||examples.histoire;
}

function buildSheetFromChapter(subject,chapter,questions){
  const lines=getSheetLines(questions,6);
  const points=lines.slice(0,4).map((text,idx)=>({
    icon:['📌','🧩','⚠️','✨'][idx%4],
    text
  }));
  const tags=Array.from(new Set(
    questions
      .map(q=>cleanSheetText(q.correctAnswer||''))
      .filter(value=>value && value.length<72)
      .slice(0,4)
      .concat(extractKeywords(`${chapter} ${lines.join(' ')}`))
  )).slice(0,6);
  const keywords=extractKeywords(`${chapter} ${lines.join(' ')}`);
  const pack=buildSheetVisualPack(subject,chapter,questions,keywords,lines);
  return {
    subject,
    chapter,
    points,
    tags,
    visuals:pack.visuals,
    stepsTitle:pack.stepsTitle,
    steps:pack.steps,
    timeline:pack.timeline,
    mind:{
      center:chapter,
      branches:pack.mind
    }
  };
}

function applyFlashcardDerivedQuestions(){
  SUBJECT_KEYS.forEach(subject=>{
    const chapters=Object.keys(DB[subject]||{});
    const cards=FLASHCARDS[subject]||[];
    cards.forEach((card,idx)=>{
      if(!chapters.length || !card.a) return;
      const chapter=chapters[idx%chapters.length];
      const distractors=shuffle(
        cards
          .filter((_,otherIdx)=>otherIdx!==idx)
          .map(other=>cleanSheetText(other.a))
          .filter(answer=>answer && answer!==cleanSheetText(card.a))
      ).slice(0,3);
      if(distractors.length===3){
        const options=shuffle([cleanSheetText(card.a),...distractors]);
        DB[subject][chapter].push({
          type:'mcq',
          diff:idx%3===0?'facile':'normal',
          q:card.q,
          opts:options,
          ans:options.indexOf(cleanSheetText(card.a)),
          explanation:card.explain||card.explanation||card.a
        });
      }
      const key=extractKeywords(`${card.q} ${card.a} ${card.explain||card.explanation||''}`).map(word=>word.toLowerCase());
      DB[subject][chapter].push({
        type:'open',
        diff:idx%2===0?'normal':'difficile',
        q:`Explique avec un exemple : ${String(card.q).replace(/\?$/,'')}.`,
        key:key.length?key:['notion'],
        correctAnswer:`${cleanSheetText(card.a)}${card.explain||card.explanation?` — ${cleanSheetText(card.explain||card.explanation)}`:''}`,
        explanation:card.explain||card.explanation||card.a
      });
    });
  });
}

function applyChapterSynthesisQuestions(){
  Object.entries(DB).forEach(([subject,chapters])=>{
    Object.entries(chapters).forEach(([chapter,questions])=>{
      const keys=extractKeywords(`${chapter} ${questions.map(q=>q.correctAnswer||q.explanation||q.q).join(' ')}`).map(word=>word.toLowerCase()).slice(0,5);
      const answerBase=cleanSheetText(questions.find(q=>q.explanation||q.explain)?.explanation||questions[0]?.correctAnswer||chapter);
      questions.push({
        type:'open',
        diff:'difficile',
        q:`Donnez l idee essentielle du chapitre "${chapter}" puis un exemple précis.`,
        key:keys.length?keys:['idee','exemple'],
        correctAnswer:answerBase,
        explanation:`Réponse attendue : l idée-clef du chapitre, suivie d un exemple concret ou d une application détaillée.`
      });
    });
  });
}

let REVISION_SHEETS={};

function buildRevisionSheets(){
  REVISION_SHEETS=Object.fromEntries(
    Object.entries(DB).map(([subject,chapters])=>[
      subject,
      Object.entries(chapters).map(([chapter,questions])=>buildSheetFromChapter(subject,chapter,questions))
    ])
  );
}

function initializeQuestionBankData(){
  if(questionBankReady) return true;
  if(!window.BREVET_DB || !window.BREVET_FLASHCARDS){
    throw new Error('question-bank-missing');
  }
  DB=window.BREVET_DB;
  FLASHCARDS=window.BREVET_FLASHCARDS;
  splitScienceContent();
  applyQuestionExpansions();
  applyFlashcardQuestions();
  applyFlashcardDerivedQuestions();
  normalizeQuestionBank();
  assignQuestionIds();
  buildRevisionSheets();
  questionBankReady=true;
  delete window.BREVET_DB;
  delete window.BREVET_FLASHCARDS;
  if(storageBootReady){
    weakQuestionIds=weakQuestionIds.filter(id=>QUESTION_LOOKUP[id]);
    saveWeakQuestions();
    renderWeakReviewCard();
  }
  updateFlashCounts();
  return true;
}

function loadQuestionBankScript(){
  if(window.BREVET_DB && window.BREVET_FLASHCARDS){
    return Promise.resolve();
  }
  const existing=document.getElementById('question-bank-script');
  if(existing){
    return new Promise((resolve,reject)=>{
      if(existing.dataset.loaded==='true'){
        resolve();
        return;
      }
      existing.addEventListener('load',()=>resolve(),{once:true});
      existing.addEventListener('error',()=>reject(new Error('question-bank-load-error')),{once:true});
    });
  }
  return new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.id='question-bank-script';
    script.src='./db-data.js';
    script.async=true;
    script.dataset.loaded='false';
    script.addEventListener('load',()=>{
      script.dataset.loaded='true';
      resolve();
    },{once:true});
    script.addEventListener('error',()=>reject(new Error('question-bank-load-error')),{once:true});
    document.head.appendChild(script);
  });
}

function ensureQuestionBankLoaded({silent=false}={}){
  if(questionBankReady) return Promise.resolve(true);
  if(questionBankPromise) return questionBankPromise;
  if(!silent) showToast('Chargement des questions...','info');
  questionBankPromise=(async()=>{
    await loadQuestionBankScript();
    initializeQuestionBankData();
    return true;
  })().catch(error=>{
    console.error('Erreur de chargement de la base de questions',error);
    questionBankPromise=null;
    if(!silent){
      showToast('Impossible de charger la base de questions.','error');
    }
    return false;
  });
  return questionBankPromise;
}

function scheduleQuestionBankWarmup(){
  if(questionBankReady || questionBankPromise) return;
  const warmup=()=>ensureQuestionBankLoaded({silent:true});
  if(typeof requestIdleCallback==='function'){
    requestIdleCallback(()=>{warmup();},{timeout:1800});
  }else{
    setTimeout(()=>{warmup();},900);
  }
}

function createDefaultDuelState(){
  return {
    active:false,
    result:null,
    pendingResult:false,
    finalizeTimer:null,
    animationFrame:null,
    botName:DUEL_BOT_NAME,
    botAvatar:'🤖',
    botDifficultyLabel:'Mode découverte',
    botPaceLabel:'Lent',
    botAnswers:0,
    botScore:0,
    botQuestionStart:0,
    botQuestionDelayMs:0,
    botWillAnswerCorrect:true,
    botFinishedAt:0,
    playerFinishedAt:0,
    playerProgress:0,
    botProgress:0,
    lastBeepAt:0,
    statusText:`${DUEL_BOT_NAME} se prépare...`,
    lead:'tie'
  };
}

function createDefaultComboState(){
  return {
    streak:0,
    multiplier:1
  };
}

function createDefaultSurvivalState(){
  return {
    active:false,
    timerFrame:null,
    timeLeft:30,
    lastTick:0,
    questionsAnswered:0,
    bestSessionTime:0,
    gameOver:false,
    gameOverReason:'',
    selectedPoolLabel:'Mix total'
  };
}

function createDefaultQuestionAidState(){
  return {
    gommeUsed:false,
    hiddenWrongOptions:[]
  };
}

/* ============================================================
   ÉTAT
   ============================================================ */
let state = {
  subject:'histoire', chapters:[], difficulty:'normal',
  options:{timer:false,correction:true,mix:false,survival:false,duel:false},
  questions:[], currentIdx:0, score:0, errors:[],
  startTime:null, timerInterval:null, timerLeft:30, answered:false,
  matchState:{selected:null,pairs:{},done:0,total:0},
  isBrevetBlanc:false, bbGlobalTimerInterval:null,
  bbTimeLeft:900, bbBySubject:{},
  runRewarded:false, sessionEarnedXp:0, correctAnswersInRun:0,
  unlockedThemesThisRun:[],
  mode:'standard',
  rankedTier:null,
  rankedRpDelta:0,
  duel:createDefaultDuelState(),
  combo:createDefaultComboState(),
  survival:createDefaultSurvivalState(),
  questionAid:createDefaultQuestionAidState(),
  pendingSelfEval:null,
  runXpBoostActive:false,
  pendingStreakCelebration:null
};
let flashState={cards:[],idx:0,flipped:false};
let playerProfile=null;
let streakState=null;
let rankedProfile=null;
let weakQuestionIds=[];
let dailyChallengeState=null;
let dailyChallengeRewardLock=false;
let storageBootReady=false;
let currentSheetSubject='histoire';
let speechState={active:false,isBB:false,text:''};
let streakCelebrationTimer=null;
let streakAutoReturnTimer=null;

/* ============================================================
   UTILITAIRES
   ============================================================ */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function syncBrowserThemeColor(themeKey){
  const meta=document.querySelector('meta[name="theme-color"]');
  if(!meta) return;
  const themeColors={
    dark:'#0f1535',
    light:'#eef4fb',
    glace:'#d9f1ff',
    'ciel-nuages':'#f7fcff',
    pastel:'#fffafd',
    antique:'#fbf3e8',
    paper:'#fff8ee',
    vintage:'#f7ead8',
    neon:'#061625',
    'alerte-rouge':'#22070a',
    electricite:'#0b1a54',
    manga:'#050505',
    'aura-divine':'#fff8e3',
    'ranked-diamond':'#eefaff',
    diamant:'#eefaff'
  };
  meta.setAttribute('content',themeColors[themeKey]||'#0f1535');
}

function showScreen(id){
  if(id==='screen-history'){
    openVipScreen();
    return;
  }
  stopSpeech();
  if(id!=='screen-results') clearStreakAutoReturn();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active','enter'));
  const screen=document.getElementById(id);
  if(!screen) return;
  playEffect('screen');
  screen.classList.add('active');
  requestAnimationFrame(()=>screen.classList.add('enter'));
  window.scrollTo(0,0);
  if(id==='screen-home'){
    renderWeakReviewCard();
    renderDailyChallenges();
    updateRankedUI();
  }
  if(id==='screen-flash-select') updateFlashCounts();
  if(id==='screen-sheets') renderSheets();
  if(id==='screen-ranked-hub') updateRankedUI();
  if(id==='screen-daily-challenges') renderDailyChallenges();
  if(id==='screen-shop') renderShop();
  if(id==='screen-pass') renderBrevetPassScreen();
  if(id==='screen-themes') renderThemeSelector();
  if(id==='screen-titles') renderTitleSelector();
  if(id==='screen-settings') renderSettingsPanel();
  if(id==='screen-vip'){
    updateVipUI();
    renderHistory('stats-history-list');
  }
  if(id==='screen-difficulty') renderDuelDifficultyRow();
  if(id==='screen-home') requestAnimationFrame(()=>maybePlayPendingStreakCelebration());
}

const TOAST_TYPES={
  info:{icon:'ℹ️',label:'Info'},
  success:{icon:'✅',label:'Succès'},
  warning:{icon:'⚠️',label:'Attention'},
  error:{icon:'⛔',label:'Erreur'},
  theme:{icon:'🎨',label:'Nouveau thème'},
  sound:{icon:'🔊',label:'Pack sonore'},
  shield:{icon:'🛡️',label:'Récompense'},
  level:{icon:'✨',label:'Niveau'},
  challenge:{icon:'🎯',label:'Défi du jour'},
  avatar:{icon:'🪪',label:'Profil'},
  admin:{icon:'🛠️',label:'Admin'},
  locked:{icon:'🔒',label:'Verrouillé'},
  delete:{icon:'🗑️',label:'Action'},
  shuffle:{icon:'🔀',label:'Flashcards'},
  streak:{icon:'🔥',label:'Série'},
  badge:{icon:'🏅',label:'Badge'}
};

const toastState={
  queue:[],
  hideTimer:null,
  nextTimer:null,
  active:false
};

function renderNextToast(){
  const t=document.getElementById('toast');
  if(!t){
    toastState.active=false;
    toastState.queue.length=0;
    return;
  }
  if(!toastState.queue.length){
    toastState.active=false;
    t.className='toast';
    t.innerHTML='';
    return;
  }
  toastState.active=true;
  const {message,type}=toastState.queue.shift();
  const meta=TOAST_TYPES[type]||TOAST_TYPES.info;
  t.className=`toast toast-${type||'info'}`;
  t.innerHTML=`
    <span class="toast-icon" aria-hidden="true">${meta.icon}</span>
    <div class="toast-copy">
      <span class="toast-label">${escapeHtml(meta.label)}</span>
      <span class="toast-message">${escapeHtml(message)}</span>
    </div>
  `;
  t.classList.remove('show');
  requestAnimationFrame(()=>t.classList.add('show'));
  clearTimeout(toastState.hideTimer);
  clearTimeout(toastState.nextTimer);
  toastState.hideTimer=setTimeout(()=>{
    t.classList.remove('show');
    toastState.nextTimer=setTimeout(renderNextToast,220);
  },3000);
}

function showToast(message,type='info'){
  if(!message) return;
  toastState.queue.push({message:String(message),type});
  if(!toastState.active) renderNextToast();
}

function formatTime(s){
  const m=Math.floor(s/60),sec=s%60;
  return m>0?`${m}m ${sec<10?'0':''}${sec}s`:`${sec}s`;
}

function formatMMSS(s){
  const m=Math.floor(s/60),sec=s%60;
  return `${m<10?'0':''}${m}:${sec<10?'0':''}${sec}`;
}

function formatTenths(seconds=0){
  const safe=Math.max(0,seconds||0);
  return safe>=10 ? `${safe.toFixed(0)}s` : `${safe.toFixed(1)}s`;
}

function formatMinutesAndSeconds(totalSeconds=0){
  const safe=Math.max(0,Math.floor(totalSeconds||0));
  const minutes=Math.floor(safe/60);
  const seconds=safe%60;
  return `${minutes}:${String(seconds).padStart(2,'0')}`;
}

function normalizeInventory(raw={}){
  const legacyRuns=Math.max(0,Math.floor(raw.xpBoostRuns||0));
  return {
    shield:Math.max(0,Math.floor(raw.shield||0)),
    hourglass:Math.max(0,Math.floor(raw.hourglass||0)),
    eraser:Math.max(0,Math.floor(raw.eraser||0)),
    xpBoostMinutes:Math.max(0,Math.floor(raw.xpBoostMinutes||legacyRuns*10||0)),
    xpBoostExpiresAt:Math.max(0,Math.floor(raw.xpBoostExpiresAt||0))
  };
}

function isSurvivalRun(){
  return state.mode==='survival';
}

function getComboMultiplierForStreak(streak=0){
  if(streak>=10) return 5;
  if(streak>=6) return 3;
  if(streak>=3) return 2;
  return 1;
}

function isDuelRun(){
  return state.mode==='duel';
}

function getStoredXpBoostMinutes(){
  return Math.max(0,Math.floor(playerProfile?.inventory?.xpBoostMinutes||0));
}

function hasActiveXpBoost(){
  return Math.max(0,Math.floor(playerProfile?.inventory?.xpBoostExpiresAt||0))>Date.now();
}

function getActiveXpBoostRemainingSeconds(){
  return Math.max(0,Math.ceil((Math.max(0,Math.floor(playerProfile?.inventory?.xpBoostExpiresAt||0))-Date.now())/1000));
}

function getStoredXpBoostPacks(){
  return Math.floor(getStoredXpBoostMinutes()/10);
}

function getStreakMultiplier(){
  const streakCount=Math.max(0,getStreakStatus().displayCount||0);
  return Math.min(5,1+(Math.max(0,streakCount-1)*0.1));
}

function renderStreakFlameMarkup(isReady=false){
  return `
    <span class="streak-flame ${isReady?'ready':'idle'}">
      <span class="streak-flame-core"></span>
      <span class="streak-flame-inner"></span>
      <span class="streak-flame-spark"></span>
    </span>
  `;
}

function clearStreakAutoReturn(){
  if(streakAutoReturnTimer){
    clearTimeout(streakAutoReturnTimer);
    streakAutoReturnTimer=null;
  }
}

function clearStreakCelebrationHide(){
  if(streakCelebrationTimer){
    clearTimeout(streakCelebrationTimer);
    streakCelebrationTimer=null;
  }
}

function buildStreakCelebrationPayload(previousCount,nextCount){
  const safePrevious=Math.max(0,Math.floor(previousCount||0));
  const safeNext=Math.max(1,Math.floor(nextCount||1));
  return {
    from:safePrevious,
    count:safeNext,
    firstDay:safePrevious<=0 && safeNext===1,
    multiplier:getStreakMultiplier(),
    played:false
  };
}

function maybePlayPendingStreakCelebration(){
  const overlay=document.getElementById('streak-celebration-overlay');
  const payload=state.pendingStreakCelebration;
  if(!overlay || !payload || payload.played) return;
  payload.played=true;
  const flame=document.getElementById('streak-celebration-flame');
  const title=document.getElementById('streak-celebration-title');
  const copy=document.getElementById('streak-celebration-copy');
  const count=document.getElementById('streak-celebration-count');
  if(count) count.textContent=String(payload.count);
  if(title){
    title.textContent=payload.firstDay
      ? 'Série lancée'
      : `${payload.count} jours d’affilée`;
  }
  if(copy){
    copy.textContent=payload.firstDay
      ? 'Jour 1 validé. Reviens demain pour allumer encore plus la flamme.'
      : `Ta flamme crépite plus fort. Bonus XP actuel : x${payload.multiplier.toFixed(1)}.`;
  }
  overlay.hidden=false;
  overlay.classList.remove('ignite','surge');
  if(flame){
    flame.classList.remove('ignite','surge');
    flame.classList.add(payload.firstDay?'ignite':'surge');
  }
  overlay.classList.add('open',payload.firstDay?'ignite':'surge');
  playEffect('streak');
  triggerVibration(payload.firstDay?'success':'level');
  clearStreakCelebrationHide();
  streakCelebrationTimer=setTimeout(()=>{
    overlay.classList.remove('open','ignite','surge');
    if(flame) flame.classList.remove('ignite','surge');
    streakCelebrationTimer=null;
    setTimeout(()=>{
      overlay.hidden=true;
      if(state.pendingStreakCelebration===payload){
        state.pendingStreakCelebration=null;
      }
    },260);
  },2600);
}

function schedulePendingStreakCelebration(){
  clearStreakAutoReturn();
  if(!state.pendingStreakCelebration) return;
  streakAutoReturnTimer=setTimeout(()=>{
    streakAutoReturnTimer=null;
    if(getActiveScreenId()==='screen-results' && state.pendingStreakCelebration){
      showScreen('screen-home');
    }
  },1400);
}

function getDuelDifficultyConfig(key=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY){
  return DUEL_DIFFICULTIES[key]||DUEL_DIFFICULTIES[DEFAULT_DUEL_DIFFICULTY];
}

function formatDuelDifficultyMeta(key=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY){
  const config=getDuelDifficultyConfig(key);
  return `${config.label} · ${config.chip}`;
}

function getDuelBotProfile(level=1,difficultyKey=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY){
  const duelLevel=Math.max(1,Math.min(15,Math.floor(level||1)));
  const config=getDuelDifficultyConfig(difficultyKey);
  const profiles=[
    {max:2,avatar:'🤖',difficulty:'Mode découverte',pace:'Lent'},
    {max:5,avatar:'🦾',difficulty:'Mode révision',pace:'Cadencé'},
    {max:8,avatar:'⚙️',difficulty:'Mode sérieux',pace:'Rapide'},
    {max:11,avatar:'🚀',difficulty:'Mode turbo',pace:'Très rapide'},
    {max:14,avatar:'🔥',difficulty:'Mode agressif',pace:'Éclair'},
    {max:15,avatar:'👾',difficulty:'Mode ultime',pace:'Extrême'}
  ];
  const profile=profiles.find(entry=>duelLevel<=entry.max)||profiles[profiles.length-1];
  return {...profile,duelLevel,selectedDifficulty:config.label};
}

function getDuelBotQuestionDelayMs(level=1,difficultyKey=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY){
  const duelLevel=Math.max(1,Math.min(15,Math.floor(level||1)));
  const config=getDuelDifficultyConfig(difficultyKey);
  const ratio=(duelLevel-1)/14;
  const baseDelay=(7200-(ratio*5200))*config.delayFactor;
  const jitter=(1100-(ratio*450))*config.jitterFactor;
  return Math.max(1200,Math.round(baseDelay+(((Math.random()*2)-1)*jitter)));
}

function renderDuelDifficultyButtons(targetId,selectedKey=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY){
  const host=document.getElementById(targetId);
  if(!host) return;
  host.innerHTML=Object.entries(DUEL_DIFFICULTIES).map(([key,config])=>`
    <button class="duel-speed-btn ${selectedKey===key?'selected':''}" onclick="setDuelDifficulty('${key}')">
      <strong>${config.chip}</strong>
      <span>${config.label}</span>
    </button>
  `).join('');
}

function renderDuelDifficultyRow(){
  const row=document.getElementById('duel-speed-row');
  if(row) row.hidden=!state.options.duel;
  renderDuelDifficultyButtons('duel-speed-buttons');
  renderDuelDifficultyButtons('duel-setup-options');
  const label=document.getElementById('duel-speed-copy');
  if(label){
    const config=getDuelDifficultyConfig();
    label.textContent=`BrevetAI : ${config.label}`;
  }
}

function setDuelDifficulty(key,silent=false){
  if(!playerProfile || !DUEL_DIFFICULTIES[key]) return;
  playerProfile.duelDifficulty=key;
  savePlayerProfile();
  renderDuelDifficultyRow();
  if(isDuelRun()){
    const profile=getDuelBotProfile(playerProfile?.levelInfo?.level||1,key);
    state.duel.botDifficultyLabel=DUEL_DIFFICULTIES[key].label;
    state.duel.botPaceLabel=profile.pace;
    updateDuelHud(performance.now());
  }
  if(!silent){
    playEffect('toggle');
    showToast(`Duel IA réglé sur ${DUEL_DIFFICULTIES[key].label}.`,'info');
  }
}

function openDuelSetup(){
  if(!playerProfile) return;
  renderDuelDifficultyRow();
  playEffect('click');
  document.getElementById('duel-setup-modal')?.classList.add('open');
}

function closeDuelSetup(){
  playEffect('click');
  document.getElementById('duel-setup-modal')?.classList.remove('open');
}

function startConfiguredDuel(){
  closeDuelSetup();
  startDuelChallenge();
}

function clearDuelTimers(){
  if(state.duel.animationFrame){
    cancelAnimationFrame(state.duel.animationFrame);
    state.duel.animationFrame=null;
  }
  if(state.duel.finalizeTimer){
    clearTimeout(state.duel.finalizeTimer);
    state.duel.finalizeTimer=null;
  }
}

function setDuelHudVisible(visible){
  const hud=document.getElementById('duel-hud');
  if(!hud) return;
  hud.hidden=!visible;
  hud.classList.toggle('active',visible);
}

function resetDuelState(){
  clearDuelTimers();
  state.duel=createDefaultDuelState();
  setDuelHudVisible(false);
}

function pauseDuelEngine(){
  clearDuelTimers();
  state.duel.active=false;
}

function getPlayerDuelProgress(){
  const total=state.questions.length||1;
  return Math.min(1,(state.currentIdx+(state.answered?1:0))/total);
}

function getCurrentBotFraction(now=performance.now()){
  if(!state.duel.active || state.duel.botFinishedAt || !state.duel.botQuestionDelayMs) return 0;
  return Math.min(1,Math.max(0,(now-state.duel.botQuestionStart)/state.duel.botQuestionDelayMs));
}

function getRobotBadgeLabel(){
  return playerProfile?.badges?.includes('robot-slayer')
    ? `${BADGES['robot-slayer'].icon} ${BADGES['robot-slayer'].label}`
    : 'Verrouillé';
}

function unlockBadge(key){
  if(!playerProfile || !BADGES[key]) return false;
  const owned=new Set(playerProfile.badges||[]);
  if(owned.has(key)) return false;
  playerProfile.badges=[...(playerProfile.badges||[]),key];
  showToast(`Badge débloqué : ${BADGES[key].label}`,'badge');
  savePlayerProfile();
  return true;
}

function renderCoinAmount(amount,label='BrevetCoins'){
  const suffix=label?` ${label}`:'';
  return `<span class="coin-inline"><img src="${UI_COIN_ICON}" alt="BrevetCoin"> ${amount}${suffix}</span>`;
}

function spawnCoinBurst(amount=0){
  const layer=document.getElementById('coin-burst-layer');
  if(!layer || amount<=0) return;
  const count=Math.min(8,Math.max(3,Math.round(amount/20)));
  for(let index=0; index<count; index++){
    const coin=document.createElement('span');
    coin.className='coin-burst';
    coin.innerHTML=`<img src="${UI_COIN_ICON}" alt="BrevetCoin">`;
    coin.style.left=`${46+((Math.random()*18)-9)}%`;
    coin.style.setProperty('--coin-x',`${(Math.random()*140)-70}px`);
    coin.style.setProperty('--coin-y',`${-60-(Math.random()*90)}px`);
    coin.style.animationDelay=`${index*0.03}s`;
    layer.appendChild(coin);
    setTimeout(()=>coin.remove(),1200);
  }
}

function awardCoins(amount,reason='',silent=false){
  if(!playerProfile || !amount) return 0;
  const actual=Math.max(0,Math.floor(amount));
  if(!actual) return 0;
  playerProfile.coins=Math.max(0,(playerProfile.coins||0)+actual);
  playerProfile.stats.coinsEarned=(playerProfile.stats.coinsEarned||0)+actual;
  savePlayerProfile();
  refreshPlayerUI();
  spawnCoinBurst(actual);
  playCoinSound();
  if(!silent){
    showToast(`+${actual} BrevetCoins${reason?` (${reason})`:''}`,'success');
  }
  return actual;
}

function spendCoins(amount){
  if(!playerProfile) return false;
  const cost=Math.max(0,Math.floor(amount||0));
  if((playerProfile.coins||0)<cost){
    showToast('Fonds insuffisants','warning');
    return false;
  }
  playerProfile.coins=Math.max(0,(playerProfile.coins||0)-cost);
  savePlayerProfile();
  refreshPlayerUI();
  return true;
}

function updateDuelHud(now=performance.now()){
  const hud=document.getElementById('duel-hud');
  if(!hud) return;
  const total=state.questions.length||1;
  const playerProgress=getPlayerDuelProgress();
  const botProgress=Math.min(1,(state.duel.botAnswers+getCurrentBotFraction(now))/total);
  state.duel.playerProgress=playerProgress;
  state.duel.botProgress=botProgress;

  const playerFill=document.getElementById('duel-player-fill');
  const botFill=document.getElementById('duel-bot-fill');
  const playerValue=document.getElementById('duel-player-value');
  const botValue=document.getElementById('duel-bot-value');
  const botAvatar=document.getElementById('duel-bot-avatar');
  const botName=document.getElementById('duel-bot-name');
  const botMeta=document.getElementById('duel-bot-meta');
  const leader=document.getElementById('duel-leader');
  const alert=document.getElementById('duel-alert');

  if(playerFill) playerFill.style.width=`${Math.round(playerProgress*100)}%`;
  if(botFill) botFill.style.width=`${Math.round(botProgress*100)}%`;
  if(playerValue) playerValue.textContent=`${Math.round(playerProgress*100)}%`;
  if(botValue) botValue.textContent=`${Math.round(botProgress*100)}%`;
  if(botAvatar) botAvatar.textContent=state.duel.botAvatar;
  if(botName) botName.textContent=state.duel.botName;
  if(botMeta) botMeta.textContent=`Niv. ${getDuelBotProfile(playerProfile?.levelInfo?.level||1,playerProfile?.duelDifficulty).duelLevel} · ${state.duel.botDifficultyLabel} · ${state.duel.botPaceLabel}`;

  let lead='tie';
  let leaderText='Duel serré';
  if(state.duel.playerFinishedAt && !state.duel.botFinishedAt){
    lead='player';
    leaderText='Tu as terminé en premier';
  }else if(state.duel.botFinishedAt && !state.duel.playerFinishedAt){
    lead='bot';
    leaderText=`${DUEL_BOT_NAME} a terminé`;
  }else if(playerProgress>botProgress+0.025){
    lead='player';
    leaderText='Tu es en tête';
  }else if(botProgress>playerProgress+0.025){
    lead='bot';
    leaderText=`${DUEL_BOT_NAME} mène`;
  }
  state.duel.lead=lead;
  if(leader){
    leader.textContent=leaderText;
    leader.className=`duel-leader ${lead}`;
  }

  let alertText=state.duel.statusText||`${DUEL_BOT_NAME} se prépare...`;
  if(state.duel.botFinishedAt){
    alertText=`${DUEL_BOT_NAME} a bouclé sa série.`;
  }else if(!state.duel.botWillAnswerCorrect){
    alertText=`${DUEL_BOT_NAME} hésite... profite de sa faute possible.`;
  }else if(lead==='bot' && botProgress>=0.75){
    alertText='Alerte : le bot met la pression.';
  }else if(lead==='player'){
    alertText='Garde ce rythme pour rester devant.';
  }
  if(alert) alert.textContent=alertText;
}

function playDuelWarningBeep(remainingRatio=0.2){
  const ctx=ensureAudioContext();
  if(!ctx) return;
  const pack=getSoundPack(playerProfile?.soundPack);
  const now=ctx.currentTime;
  const base=remainingRatio<0.1?1380:remainingRatio<0.18?1240:1100;
  const volume=Math.max(0.015,(pack.volume||0.05)*0.32);
  playTone(ctx,now,base,0.045,'square',volume);
  playTone(ctx,now+0.085,base*1.08,0.045,'square',volume);
}

function maybePlayDuelWarning(now=performance.now()){
  if(!isDuelRun() || !state.duel.active || state.duel.playerFinishedAt) return;
  const remainingRatio=1-state.duel.botProgress;
  const botAhead=state.duel.botProgress>state.duel.playerProgress+0.05;
  if(!botAhead || remainingRatio>0.35) return;
  const cooldown=remainingRatio<0.08?220:remainingRatio<0.15?360:remainingRatio<0.24?520:760;
  if(now-state.duel.lastBeepAt<cooldown) return;
  playDuelWarningBeep(remainingRatio);
  state.duel.lastBeepAt=now;
}

function scheduleNextBotQuestion(now=performance.now()){
  if(!isDuelRun()) return;
  const difficultyKey=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY;
  const difficultyConfig=getDuelDifficultyConfig(difficultyKey);
  if(state.duel.botAnswers>=state.questions.length){
    state.duel.botFinishedAt=state.duel.botFinishedAt||Date.now();
    return;
  }
  state.duel.botQuestionStart=now;
  state.duel.botWillAnswerCorrect=Math.random()>=difficultyConfig.mistakeChance;
  state.duel.botQuestionDelayMs=getDuelBotQuestionDelayMs(playerProfile?.levelInfo?.level||1,difficultyKey)+(state.duel.botWillAnswerCorrect?0:difficultyConfig.slowdownMs);
  state.duel.statusText=state.duel.botWillAnswerCorrect
    ? `${DUEL_BOT_NAME} répond...`
    : `${DUEL_BOT_NAME} risque une erreur et ralentit.`;
}

function syncDuelBotProgress(now=performance.now()){
  if(!isDuelRun() || state.duel.botFinishedAt || !state.questions.length) return;
  while(!state.duel.botFinishedAt && state.duel.botQuestionDelayMs && now-state.duel.botQuestionStart>=state.duel.botQuestionDelayMs){
    state.duel.botAnswers=Math.min(state.questions.length,state.duel.botAnswers+1);
    if(state.duel.botWillAnswerCorrect) state.duel.botScore++;
    if(state.duel.botAnswers>=state.questions.length){
      state.duel.botFinishedAt=Date.now();
      state.duel.statusText=`${DUEL_BOT_NAME} a terminé sa série.`;
    }else{
      scheduleNextBotQuestion(now);
    }
  }
}

function disableCurrentQuestionInputs(){
  document.querySelectorAll('#question-card button, #question-card textarea').forEach(node=>{
    node.disabled=true;
  });
}

function getLockedDuelOutcome(){
  if(!isDuelRun()) return null;
  const total=state.questions.length||1;
  const remainingForBot=Math.max(0,total-state.duel.botAnswers);
  if(state.duel.botFinishedAt && !state.duel.playerFinishedAt) return 'bot';
  if(state.duel.playerFinishedAt && !state.duel.botFinishedAt){
    if(state.score<=state.duel.botScore) return 'bot';
    if(state.score>state.duel.botScore+remainingForBot) return 'player';
    return null;
  }
  if(state.duel.playerFinishedAt && state.duel.botFinishedAt){
    return state.duel.playerFinishedAt<state.duel.botFinishedAt && state.score>state.duel.botScore ? 'player' : 'bot';
  }
  return null;
}

function finalizeDuelOutcome(result){
  if(!isDuelRun() || state.duel.pendingResult) return true;
  state.duel.pendingResult=true;
  state.duel.result=result;
  pauseDuelEngine();
  updateDuelHud(performance.now());
  setDuelHudVisible(false);
  if(result==='bot'){
    state.duel.statusText='Le Bot a été plus rapide... Entraîne-toi encore !';
    stopTimer();
    state.answered=true;
    disableCurrentQuestionInputs();
    showFeedback(false,`🤖 ${DUEL_BOT_NAME} a pris l’avantage !`,{
      expected:'',
      explanation:`${DUEL_BOT_NAME} a été plus rapide... Entraîne-toi encore !`
    },false);
  }
  state.duel.finalizeTimer=setTimeout(()=>showResults(false),result==='bot'?900:450);
  return true;
}

function handlePlayerAnswerForDuel(ok){
  if(!isDuelRun() || !state.duel.active || state.duel.pendingResult) return false;
  if(!ok){
    const difficultyConfig=getDuelDifficultyConfig(playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY);
    const immediateAdvance=Math.min(1800,Math.max(650,state.duel.botQuestionDelayMs*difficultyConfig.wrongAdvanceFactor));
    state.duel.botQuestionStart-=immediateAdvance;
    state.duel.statusText=`Mauvaise réponse : ${DUEL_BOT_NAME} gagne du terrain.`;
  }else{
    state.duel.statusText='Bonne réponse : tu tiens la cadence.';
  }
  const now=performance.now();
  syncDuelBotProgress(now);
  updateDuelHud(now);
  const isLastQuestion=state.currentIdx>=state.questions.length-1;
  if(isLastQuestion){
    state.duel.playerFinishedAt=Date.now();
    state.duel.statusText='Tu as terminé. Verdict du duel en cours...';
    updateDuelHud(now);
    const lockedOutcome=getLockedDuelOutcome();
    if(lockedOutcome) return finalizeDuelOutcome(lockedOutcome);
    const wrap=document.getElementById('next-btn-wrap');
    const btn=document.getElementById('next-btn');
    if(wrap) wrap.style.display='flex';
    if(btn){
      btn.textContent=`🤖 ${DUEL_BOT_NAME} termine...`;
      btn.disabled=true;
    }
    return true;
  }
  const lockedOutcome=getLockedDuelOutcome();
  if(lockedOutcome) return finalizeDuelOutcome(lockedOutcome);
  return false;
}

function tickDuelBot(now=performance.now()){
  if(!isDuelRun() || !state.duel.active){
    state.duel.animationFrame=null;
    return;
  }
  syncDuelBotProgress(now);
  updateDuelHud(now);
  maybePlayDuelWarning(now);
  const lockedOutcome=getLockedDuelOutcome();
  if(lockedOutcome){
    finalizeDuelOutcome(lockedOutcome);
    return;
  }
  state.duel.animationFrame=requestAnimationFrame(tickDuelBot);
}

function startDuelMode(){
  if(!isDuelRun()) return;
  clearDuelTimers();
  state.duel=createDefaultDuelState();
  const difficultyKey=playerProfile?.duelDifficulty||DEFAULT_DUEL_DIFFICULTY;
  const botProfile=getDuelBotProfile(playerProfile?.levelInfo?.level||1,difficultyKey);
  state.duel.active=true;
  state.duel.botAvatar=botProfile.avatar;
  state.duel.botDifficultyLabel=getDuelDifficultyConfig(difficultyKey).label;
  state.duel.botPaceLabel=botProfile.pace;
  setDuelHudVisible(true);
  scheduleNextBotQuestion(performance.now());
  updateDuelHud(performance.now());
  state.duel.animationFrame=requestAnimationFrame(tickDuelBot);
}

function openXpBoostPurchaseModal(){
  const modal=document.getElementById('xpboost-modal');
  const copy=document.getElementById('xpboost-modal-copy');
  if(copy){
    const stored=getStoredXpBoostMinutes();
    const activeSeconds=getActiveXpBoostRemainingSeconds();
    copy.textContent=activeSeconds>0
      ? `Un nouveau boost de 10 min est prêt. Actif encore ${formatMinutesAndSeconds(activeSeconds)}.`
      : stored>0
        ? `${Math.floor(stored/10)} boost${Math.floor(stored/10)>1?'s':''} de 10 min en réserve.`
        : 'Ton boost XP x2 est prêt à être activé.';
  }
  playEffect('success');
  modal?.classList.add('open');
}

function closeXpBoostPurchaseModal(silent=false){
  if(!silent) playEffect('click');
  document.getElementById('xpboost-modal')?.classList.remove('open');
}

function activateStoredXpBoost({minutes=10,silent=false}={}){
  if(!playerProfile) return false;
  const available=getStoredXpBoostMinutes();
  if(available<minutes){
    if(!silent) showToast('Aucun boost XP en réserve.','warning');
    return false;
  }
  const now=Date.now();
  const currentExpiry=Math.max(now,Math.floor(playerProfile.inventory.xpBoostExpiresAt||0));
  playerProfile.inventory.xpBoostMinutes=Math.max(0,available-minutes);
  playerProfile.inventory.xpBoostExpiresAt=currentExpiry+(minutes*60000);
  savePlayerProfile();
  refreshPlayerUI();
  renderShop();
  if(!silent){
    playEffect('success');
    showToast(`Boost XP activé pour ${minutes} min.`,'success');
  }
  return true;
}

function handleXpBoostPurchaseChoice(activateNow){
  if(activateNow) activateStoredXpBoost({minutes:10});
  else{
    renderShop();
    showToast('Boost XP gardé en réserve pour plus tard.','info');
  }
  closeXpBoostPurchaseModal(true);
}

function registerDuelOutcome(){
  if(!playerProfile || !isDuelRun()) return;
  const stats=playerProfile.stats;
  if(state.duel.result==='player'){
    stats.duelWins=(stats.duelWins||0)+1;
    stats.duelWinStreak=(stats.duelWinStreak||0)+1;
    stats.bestDuelWinStreak=Math.max(stats.bestDuelWinStreak||0,stats.duelWinStreak||0);
    if((stats.duelWinStreak||0)>=3) unlockBadge('robot-slayer');
  }else{
    stats.duelLosses=(stats.duelLosses||0)+1;
    stats.duelWinStreak=0;
  }
}

function isRapidModeQuestion(question){
  return !!question && !['open','input'].includes(question.type);
}

function buildMixedQuestionPool(count=12,diffs=['facile','normal','difficile']){
  const pool=[];
  SUBJECT_KEYS.forEach(subject=>{
    Object.keys(DB[subject]||{}).forEach(chapter=>{
      pool.push(...(DB[subject][chapter]||[])
        .filter(q=>diffs.includes(q.diff) && isRapidModeQuestion(q))
        .map(q=>({...q,_subj:q._subj||subject,_chapter:q._chapter||chapter})));
    });
  });
  return shuffle(pool).slice(0,Math.min(count,pool.length));
}

function recordAnsweredQuestion(q,isBB=false){
  if(!q) return;
  if(!state.runSubjectCounts) state.runSubjectCounts={};
  const subjectKey=isBB
    ? (q._subj||state.subject)
    : ((state.mode==='ranked' || state.mode==='duel' || state.mode==='survival') ? (q._subj||state.subject) : state.subject);
  state.runSubjectCounts[subjectKey]=(state.runSubjectCounts[subjectKey]||0)+1;
}

async function startDuelChallenge(){
  if(!await ensureQuestionBankLoaded()) return;
  resetDuelState();
  clearSurvivalTimer();
  stopTimer();
  const duelConfig=getDuelDifficultyConfig();
  state.options.duel=true;
  state.options.survival=false;
  const selected=buildMixedQuestionPool(Math.max(10,DIFFICULTY_TARGETS.normal),['facile','normal','difficile']);
  if(!selected.length){
    showToast('Aucune question disponible pour le duel.','warning');
    return;
  }
  state.subject=selected[0]?._subj||'histoire';
  state.chapters=['Duel IA'];
  state.questions=selected;
  state.currentIdx=0;
  state.score=0;
  state.errors=[];
  state.startTime=Date.now();
  state.answered=false;
  state.isBrevetBlanc=false;
  state.mode='duel';
  state.rankedTier=null;
  state.rankedRpDelta=0;
  state.runRewarded=false;
  state.sessionEarnedXp=0;
  state.correctAnswersInRun=0;
  state.unlockedThemesThisRun=[];
  resetRunHelpers();
  document.getElementById('q-subject-tag').textContent='🤖 Duel IA';
  document.getElementById('q-subject-tag').className='quiz-tag gold';
  document.getElementById('q-chapter-tag').textContent='Mix toutes matières';
  document.getElementById('q-diff-tag').textContent=`${DUEL_BOT_NAME} · ${duelConfig.label}`;
  document.getElementById('q-total').textContent=selected.length;
  document.getElementById('timer-display').style.display='none';
  showScreen('screen-quiz');
  playEffect('duel');
  startDuelMode();
  renderQuestion();
}

function getShopOwnedLabel(itemKey){
  if(!playerProfile) return '';
  const item=SHOP_ITEMS[itemKey];
  if(item?.action==='theme' && item.themeKey){
    return playerProfile.unlockedThemes.includes(item.themeKey)
      ? 'Thème déjà débloqué'
      : `Déblocage immédiat : ${THEMES[item.themeKey]?.label||'Thème'}`;
  }
  switch(itemKey){
    case 'shield': return `${playerProfile.streakShields||0} bouclier${(playerProfile.streakShields||0)>1?'s':''} en réserve`;
    case 'hourglass': return `${playerProfile.inventory.hourglass||0} sablier${(playerProfile.inventory.hourglass||0)>1?'s':''} disponible${(playerProfile.inventory.hourglass||0)>1?'s':''}`;
    case 'eraser': return `${playerProfile.inventory.eraser||0} bonus 50/50 disponible${(playerProfile.inventory.eraser||0)>1?'s':''}`;
    case 'xpboost':
      if(hasActiveXpBoost()){
        return `Actif : ${formatMinutesAndSeconds(getActiveXpBoostRemainingSeconds())} · réserve : ${getStoredXpBoostPacks()} boost(s)`;
      }
      return `${getStoredXpBoostPacks()} boost${getStoredXpBoostPacks()>1?'s':''} de 10 min en réserve`;
    default:return '';
  }
}

function renderShop(){
  if(!playerProfile) return;
  const balance=document.getElementById('shop-balance');
  const grid=document.getElementById('shop-grid');
  if(balance) balance.innerHTML=renderCoinAmount(playerProfile.coins||0);
  if(!grid) return;
  const entries=Object.entries(SHOP_ITEMS);
  const utilityCards=entries.filter(([,item])=>item.action!=='theme').map(([itemKey,item])=>{
    const extraButton=itemKey==='xpboost' && getStoredXpBoostMinutes()>=10
      ? `<button class="btn-secondary" onclick="activateStoredXpBoost({minutes:10})">${hasActiveXpBoost()?'Prolonger de 10 min':'Activer maintenant'}</button>`
      : '';
    return `
      <div class="shop-card">
        <div class="shop-card-head">
          <div class="shop-icon">${item.icon}</div>
          <div class="shop-price">${renderCoinAmount(item.price,'')}</div>
        </div>
        <div class="shop-title">${item.label}</div>
        <div class="shop-desc">${item.desc}</div>
        <div class="shop-owned">${getShopOwnedLabel(itemKey)}</div>
        <button class="btn-primary" onclick="buyShopItem('${itemKey}')">
          Acheter
        </button>
        ${extraButton}
      </div>
    `;
  }).join('');
  const themeCards=entries.filter(([,item])=>item.action==='theme').map(([itemKey,item])=>{
    const unlocked=!!item.themeKey && playerProfile.unlockedThemes.includes(item.themeKey);
    return `
      <div class="shop-card theme-offer ${unlocked?'owned':''}">
        <div class="shop-card-head">
          <div class="shop-icon">${item.icon}</div>
          <div class="shop-price">${renderCoinAmount(item.price,'')}</div>
        </div>
        <div class="shop-title">${item.label}</div>
        <div class="shop-desc">${item.desc}</div>
        <div class="shop-owned">${getShopOwnedLabel(itemKey)}</div>
        <button class="${unlocked?'btn-secondary':'btn-primary'}" ${unlocked?'disabled':''} onclick="${unlocked?'void(0)':`buyShopItem('${itemKey}')`}">
          ${unlocked?'Déjà débloqué':'Acheter ce thème'}
        </button>
      </div>
    `;
  }).join('');
  grid.innerHTML=`
    <div class="shop-section">
      <div class="shop-section-title">Objets & Boosts</div>
      <div class="shop-section-grid">${utilityCards}</div>
    </div>
    <div class="shop-section">
      <div class="shop-section-title">Thèmes Premium</div>
      <div class="shop-section-copy">Chaque thème s’achète séparément et reste disponible ensuite dans le sélecteur de thèmes.</div>
      <div class="shop-section-grid">${themeCards}</div>
    </div>
  `;
}

function buyShopItem(itemKey){
  if(!playerProfile) return;
  const item=SHOP_ITEMS[itemKey];
  if(!item) return;
  if(item.action==='theme' && item.themeKey && playerProfile.unlockedThemes.includes(item.themeKey)){
    showToast('Thème déjà possédé.','info');
    return;
  }
  if(!spendCoins(item.price)) return;
  switch(item.action){
    case 'shield':
      playerProfile.streakShields=(playerProfile.streakShields||0)+1;
      playerProfile.inventory.shield=(playerProfile.inventory.shield||0)+1;
      break;
    case 'hourglass':
      playerProfile.inventory.hourglass=(playerProfile.inventory.hourglass||0)+1;
      break;
    case 'eraser':
      playerProfile.inventory.eraser=(playerProfile.inventory.eraser||0)+1;
      break;
    case 'xpboost':
      playerProfile.inventory.xpBoostMinutes=(playerProfile.inventory.xpBoostMinutes||0)+10;
      break;
    case 'theme':
      if(item.themeKey && !playerProfile.unlockedThemes.includes(item.themeKey)){
        playerProfile.unlockedThemes.push(item.themeKey);
      }
      break;
  }
  syncProfileComputedData();
  savePlayerProfile();
  refreshPlayerUI();
  renderShop();
  renderThemeSelector();
  if(item.action==='xpboost'){
    openXpBoostPurchaseModal();
    showToast(`${item.label} acheté !`,'success');
    return;
  }
  playEffect('success');
  showToast(`${item.label} acheté !`,'success');
}

function resetRunHelpers(){
  state.combo=createDefaultComboState();
  state.questionAid=createDefaultQuestionAidState();
  state.pendingSelfEval=null;
  state.runSubjectCounts={};
  state.runXpBoostActive=hasActiveXpBoost();
  state.pendingStreakCelebration=null;
  stopSpeech();
  updateComboHud();
  renderQuizUtilityBar();
}

function getQuestionXpBase(q,isBB=false){
  return XP_RULES.question[q.type]||10;
}

function getActiveQuestionXpMultiplier(){
  return (state.combo?.multiplier||1)*(state.runXpBoostActive?2:1);
}

function updateComboHud(){
  const hud=document.getElementById('combo-hud');
  if(!hud) return;
  const active=(state.combo?.multiplier||1)>1;
  hud.hidden=!active;
  hud.textContent=active?`Combo x${state.combo.multiplier}`:'';
}

function spawnComboText(text,type='combo'){
  const layer=document.getElementById('combo-fx-layer');
  if(!layer || !text) return;
  const node=document.createElement('div');
  node.className=`combo-fx ${type}`;
  node.textContent=text;
  layer.appendChild(node);
  setTimeout(()=>node.remove(),1200);
}

function triggerScreenShake(){
  const target=document.getElementById('screen-quiz');
  if(!target) return;
  target.classList.remove('screen-shake');
  void target.offsetWidth;
  target.classList.add('screen-shake');
  setTimeout(()=>target.classList.remove('screen-shake'),480);
}

function advanceCombo(){
  state.combo.streak+=1;
  const previousMultiplier=state.combo.multiplier||1;
  const nextMultiplier=getComboMultiplierForStreak(state.combo.streak);
  state.combo.multiplier=nextMultiplier;
  updateComboHud();
  if(nextMultiplier>previousMultiplier){
    playEffect('streak');
    triggerVibration('success');
    spawnComboText(`COMBO X${nextMultiplier} !`);
  }
}

function breakCombo(){
  if((state.combo?.multiplier||1)>1){
    spawnComboText('COMBO BRISÉ','break');
  }
  state.combo=createDefaultComboState();
  updateComboHud();
  triggerScreenShake();
}

function getQuestionSpeechText(q){
  if(!q) return '';
  let text=q.q||'';
  if(q.type==='mcq' && Array.isArray(q.opts)){
    text+=`. Choix proposés : ${q.opts.join(', ')}.`;
  }else if(q.type==='tf'){
    text+='. Réponds par vrai ou faux.';
  }
  return text;
}

function stopSpeech(){
  if(typeof window==='undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  speechState={active:false,isBB:false,text:''};
  renderQuizUtilityBar();
}

function toggleQuestionSpeech(isBB=false){
  const q=state.questions[state.currentIdx];
  const text=getQuestionSpeechText(q);
  if(typeof window==='undefined' || !window.speechSynthesis || !text){
    showToast('Lecture vocale indisponible sur cet appareil.','warning');
    return;
  }
  if(speechState.active){
    stopSpeech();
    return;
  }
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang='fr-FR';
  utterance.rate=0.96;
  utterance.onend=()=>{speechState={active:false,isBB:false,text:''};renderQuizUtilityBar();};
  utterance.onerror=()=>{speechState={active:false,isBB:false,text:''};renderQuizUtilityBar();};
  speechState={active:true,isBB,text};
  renderQuizUtilityBar();
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function canUseHourglass(){
  return isSurvivalRun() && (playerProfile?.inventory?.hourglass||0)>0 && !state.survival.gameOver;
}

function canUseEraser(){
  const q=state.questions[state.currentIdx];
  return !state.answered && q?.type==='mcq' && !state.questionAid.gommeUsed && (playerProfile?.inventory?.eraser||0)>0;
}

function renderQuizUtilityBar(){
  const bar=document.getElementById('quiz-utility-bar');
  if(!bar) return;
  const speechLabel=speechState.active?'⏹ Stop voix':'🔊 Lire la question';
  const eraserCount=playerProfile?.inventory?.eraser||0;
  const hourglassCount=playerProfile?.inventory?.hourglass||0;
  const boostLabel=state.runXpBoostActive?`⚡ Boost XP x2 · ${formatMinutesAndSeconds(getActiveXpBoostRemainingSeconds())}`:'⚡ Boost XP x1';
  bar.innerHTML=`
    <button class="question-tool-btn" onclick="toggleQuestionSpeech(false)">${speechLabel}</button>
    <button class="question-tool-btn ${canUseEraser()?'':'disabled'}" ${canUseEraser()?'':'disabled'} onclick="useEraser()">🌓 50/50 (${eraserCount})</button>
    <button class="question-tool-btn ${canUseHourglass()?'':'disabled'}" ${canUseHourglass()?'':'disabled'} onclick="useHourglass()">⏳ Sablier (${hourglassCount})</button>
    <div class="question-tool-badge ${state.runXpBoostActive?'active':''}">${boostLabel}</div>
  `;
}

function useHourglass(){
  if(!canUseHourglass()){
    showToast('Aucun sablier disponible.','warning');
    return;
  }
  playerProfile.inventory.hourglass=Math.max(0,(playerProfile.inventory.hourglass||0)-1);
  adjustSurvivalTime(15,'Sablier utilisé');
  savePlayerProfile();
  refreshPlayerUI();
  renderQuizUtilityBar();
  showToast('Sablier utilisé : +15 s','success');
}

function useEraser(){
  if(!canUseEraser()){
    showToast('Le bonus 50/50 est indisponible sur cette question.','warning');
    return;
  }
  const q=state.questions[state.currentIdx];
  const wrongIndexes=(q.opts||[]).map((_,index)=>index).filter(index=>index!==q.ans);
  const removed=shuffle(wrongIndexes).slice(0,Math.min(2,wrongIndexes.length));
  removed.forEach(index=>{
    const node=document.getElementById(`opt-${index}`);
    if(node){
      node.disabled=true;
      node.classList.add('erased');
    }
  });
  state.questionAid.gommeUsed=true;
  state.questionAid.hiddenWrongOptions=removed;
  playerProfile.inventory.eraser=Math.max(0,(playerProfile.inventory.eraser||0)-1);
  savePlayerProfile();
  refreshPlayerUI();
  renderQuizUtilityBar();
  showToast('50/50 utilisé : 2 réponses retirées','success');
}

function buildSurvivalPool(subject=null,chapters=[]){
  if(subject && chapters.length){
    const pool=[];
    chapters.forEach(chapter=>{
      pool.push(...(DB[subject]?.[chapter]||[])
        .filter(isRapidModeQuestion)
        .map(q=>({...q,_subj:q._subj||subject,_chapter:q._chapter||chapter})));
    });
    return shuffle(pool);
  }
  const pool=[];
  SUBJECT_KEYS.forEach(subjectKey=>{
    Object.keys(DB[subjectKey]||{}).forEach(chapter=>{
      pool.push(...(DB[subjectKey][chapter]||[])
        .filter(isRapidModeQuestion)
        .map(q=>({...q,_subj:q._subj||subjectKey,_chapter:q._chapter||chapter})));
    });
  });
  return shuffle(pool);
}

function clearSurvivalTimer(){
  if(state.survival.timerFrame){
    cancelAnimationFrame(state.survival.timerFrame);
    state.survival.timerFrame=null;
  }
}

function setSurvivalHudVisible(visible){
  const hud=document.getElementById('survival-hud');
  if(!hud) return;
  hud.hidden=!visible;
}

function updateSurvivalHud(){
  const hud=document.getElementById('survival-hud');
  const timerNode=document.getElementById('survival-timer-val');
  const recordNode=document.getElementById('survival-record');
  const hintNode=document.getElementById('survival-hint');
  if(!hud || !timerNode) return;
  const warning=state.survival.timeLeft<10;
  timerNode.textContent=formatTenths(state.survival.timeLeft);
  hud.classList.toggle('warning',warning);
  hud.classList.toggle('critical',warning);
  if(recordNode){
    recordNode.textContent=`Record : ${formatTime(Math.round(playerProfile?.stats?.bestSurvivalTime||0))}`;
  }
  if(hintNode){
    hintNode.textContent=state.survival.gameOver
      ? 'Game Over'
      : `+5 s par bonne réponse · -8 s par erreur`;
  }
}

function adjustSurvivalTime(delta,label=''){
  if(!isSurvivalRun()) return;
  state.survival.timeLeft=Math.max(0,state.survival.timeLeft+delta);
  updateSurvivalHud();
  if(label){
    spawnComboText(`${delta>0?'+':''}${delta}s`,delta>0?'time-plus':'break');
  }
}

function handleSurvivalGameOver(reason='time'){
  if(!isSurvivalRun() || state.survival.gameOver) return true;
  state.survival.gameOver=true;
  state.survival.gameOverReason=reason;
  clearSurvivalTimer();
  stopSpeech();
  setSurvivalHudVisible(true);
  updateSurvivalHud();
  showFeedback(false,'💀 Game Over',{
    expected:'',
    explanation:`Score final : ${state.score} · Temps survécu : ${formatTime(Math.round((Date.now()-state.startTime)/1000))}`
  },false);
  setTimeout(()=>showResults(false),550);
  return true;
}

function tickSurvivalMode(timestamp){
  if(!isSurvivalRun() || state.survival.gameOver){
    state.survival.timerFrame=null;
    return;
  }
  if(!state.survival.lastTick) state.survival.lastTick=timestamp;
  const delta=(timestamp-state.survival.lastTick)/1000;
  state.survival.lastTick=timestamp;
  state.survival.timeLeft=Math.max(0,state.survival.timeLeft-delta);
  updateSurvivalHud();
  if(state.survival.timeLeft<=0){
    handleSurvivalGameOver('time');
    return;
  }
  state.survival.timerFrame=requestAnimationFrame(tickSurvivalMode);
}

function handleAnswerForSurvival(ok){
  if(!isSurvivalRun()) return false;
  state.survival.questionsAnswered+=1;
  adjustSurvivalTime(ok?5:-8,ok?'Temps gagné':'Temps perdu');
  if(state.survival.timeLeft<=0){
    handleSurvivalGameOver('time');
    return true;
  }
  return false;
}

async function startSurvivalMode(config={}){
  if(!await ensureQuestionBankLoaded()) return;
  resetDuelState();
  clearSurvivalTimer();
  stopTimer();
  state.options.duel=false;
  state.options.survival=true;
  state.mode='survival';
  state.survival=createDefaultSurvivalState();
  state.survival.active=true;
  state.survival.selectedPoolLabel=config.label||'Mix total';
  const pool=config.pool?.length?config.pool:buildSurvivalPool(config.subject||null,config.chapters||[]);
  if(!pool.length){
    showToast('Aucune question disponible pour le mode Survie.','warning');
    return;
  }
  state.subject=config.subject||'histoire';
  state.chapters=config.chapters?.length?[...config.chapters]:['Mode Survie'];
  state.questions=pool;
  state.currentIdx=0;
  state.score=0;
  state.errors=[];
  state.startTime=Date.now();
  state.answered=false;
  state.isBrevetBlanc=false;
  state.rankedTier=null;
  state.rankedRpDelta=0;
  state.runRewarded=false;
  state.sessionEarnedXp=0;
  state.correctAnswersInRun=0;
  state.unlockedThemesThisRun=[];
  resetRunHelpers();
  document.getElementById('q-subject-tag').textContent='🔥 Mode Survie';
  document.getElementById('q-subject-tag').className='quiz-tag gold';
  document.getElementById('q-chapter-tag').textContent=state.survival.selectedPoolLabel;
  document.getElementById('q-diff-tag').textContent='⏳ Survie';
  document.getElementById('q-total').textContent='∞';
  document.getElementById('timer-display').style.display='none';
  showScreen('screen-quiz');
  setSurvivalHudVisible(true);
  updateSurvivalHud();
  renderQuestion();
  state.survival.lastTick=0;
  state.survival.timerFrame=requestAnimationFrame(tickSurvivalMode);
}

const SUBJ_META={
  histoire:{icon:'🏛️',name:'Histoire',  tagClass:'gold',  chapClass:''},
  geo:     {icon:'🌍',name:'Géographie',tagClass:'blue',  chapClass:''},
  emc:     {icon:'⚖️',name:'EMC',       tagClass:'purple',chapClass:'emc-ch'},
  francais:{icon:'📝',name:'Français',  tagClass:'pink',  chapClass:'francais-ch'},
  maths:   {icon:'📐',name:'Maths',     tagClass:'teal',  chapClass:'maths-ch'},
  svt:     {icon:'🌿',name:'SVT',       tagClass:'svt',   chapClass:'svt-ch'},
  physique:{icon:'⚗️',name:'Physique-Chimie',tagClass:'physics',chapClass:'physique-ch'},
  technologie:{icon:'💻',name:'Technologie',tagClass:'tech',chapClass:'technologie-ch'},
  sciences:{icon:'🔬',name:'Sciences',  tagClass:'orange',chapClass:'sciences-ch'}
};

function loadPlayerProfile(){
  const raw=safeReadJSON(STORAGE_KEYS.profile,{});
  const themeAliases={'ranked-crown':'ranked-gold'};
  const normalizeThemeKey=themeKey=>themeAliases[themeKey]||themeKey||'dark';
  const migratedTheme=normalizeThemeKey(localStorage.getItem(STORAGE_KEYS.theme)||raw.currentTheme||'dark');
  const statsRaw=raw.stats||{};
  const legacyLevelInfo=getLevelInfo(Math.max(0,Math.floor(raw.totalXp||0)));
  const profile={
    pseudo:String(raw.pseudo||'').trim(),
    avatarConfigured:!!raw.userAvatarConfig,
    totalXp:Math.max(0,Math.floor(raw.totalXp||0)),
    coins:Math.max(0,Math.floor(raw.coins||0)),
    openSelfEvalMode:!!raw.openSelfEvalMode,
    xpBySubject:{...getDefaultXpBySubject(),...(raw.xpBySubject||{})},
    unlockedThemes:Array.isArray(raw.unlockedThemes)?raw.unlockedThemes.map(normalizeThemeKey):['dark','light'],
    unlockedSoundPacks:Array.isArray(raw.unlockedSoundPacks)
      ? raw.unlockedSoundPacks.filter(key=>SOUND_PACKS[key])
      : getLegacyUnlockedSoundPackKeys(legacyLevelInfo.level),
    unlockedPassTitles:Array.isArray(raw.unlockedPassTitles)
      ? raw.unlockedPassTitles.filter(key=>PASS_TITLES[key])
      : GLOBAL_TITLES.filter(item=>legacyLevelInfo.level>=item.level).map(item=>`global:${item.title}`),
    battlePassPremium:!!raw.battlePassPremium,
    battlePassClaimedFree:normalizePassLevelArray(raw.battlePassClaimedFree||[]),
    battlePassClaimedPremium:normalizePassLevelArray(raw.battlePassClaimedPremium||[]),
    currentTheme:migratedTheme,
    selectedTitle:raw.selectedTitle||'global:Novice',
    userAvatarConfig:normalizeUserAvatarConfig(raw.userAvatarConfig||{},raw.pseudo||raw.selectedAvatar||'BrevetPro',50),
    soundPack:raw.soundPack||'classic',
    duelDifficulty:DUEL_DIFFICULTIES[raw.duelDifficulty]?raw.duelDifficulty:DEFAULT_DUEL_DIFFICULTY,
    streakShields:Math.max(0,Math.floor(raw.streakShields||0)),
    shieldMilestone:Math.max(0,Math.floor(raw.shieldMilestone||0)),
    badges:Array.isArray(raw.badges)?raw.badges.filter(Boolean):[],
    inventory:normalizeInventory(raw.inventory||{}),
    level:Math.max(1,Math.floor(raw.level||1)),
    stats:{
      questionsAnswered:Math.max(0,Math.floor(statsRaw.questionsAnswered||0)),
      revisionSeconds:Math.max(0,Math.floor(statsRaw.revisionSeconds||0)),
      completedRuns:Math.max(0,Math.floor(statsRaw.completedRuns||0)),
      answersBySubject:{...getDefaultAnswerStats(),...(statsRaw.answersBySubject||{})},
      duelWins:Math.max(0,Math.floor(statsRaw.duelWins||0)),
      duelLosses:Math.max(0,Math.floor(statsRaw.duelLosses||0)),
      duelWinStreak:Math.max(0,Math.floor(statsRaw.duelWinStreak||0)),
      bestDuelWinStreak:Math.max(0,Math.floor(statsRaw.bestDuelWinStreak||0)),
      bestSurvivalTime:Math.max(0,Number(statsRaw.bestSurvivalTime||0)),
      bestSurvivalScore:Math.max(0,Math.floor(statsRaw.bestSurvivalScore||0)),
      coinsEarned:Math.max(0,Math.floor(statsRaw.coinsEarned||0)),
      xp:Math.max(0,Math.floor(statsRaw.xp||raw.totalXp||0))
    }
  };
  profile.unlockedThemes=Array.from(new Set(['dark','light',...profile.unlockedThemes]));
  profile.unlockedSoundPacks=Array.from(new Set(['classic',...profile.unlockedSoundPacks]));
  profile.unlockedPassTitles=Array.from(new Set(['global:Novice',...profile.unlockedPassTitles]));
  if(!THEMES[profile.currentTheme]) profile.currentTheme='dark';
  return profile;
}

function savePlayerProfile(){
  if(!playerProfile) return;
  localStorage.setItem(STORAGE_KEYS.profile,JSON.stringify({
    pseudo:playerProfile.pseudo,
    totalXp:playerProfile.totalXp,
    coins:playerProfile.coins,
    openSelfEvalMode:playerProfile.openSelfEvalMode,
    xpBySubject:playerProfile.xpBySubject,
    unlockedThemes:playerProfile.unlockedThemes,
    unlockedSoundPacks:playerProfile.unlockedSoundPacks,
    unlockedPassTitles:playerProfile.unlockedPassTitles,
    battlePassPremium:playerProfile.battlePassPremium,
    battlePassClaimedFree:playerProfile.battlePassClaimedFree,
    battlePassClaimedPremium:playerProfile.battlePassClaimedPremium,
    currentTheme:playerProfile.currentTheme,
    selectedTitle:playerProfile.selectedTitle,
    userAvatarConfig:playerProfile.userAvatarConfig,
    soundPack:playerProfile.soundPack,
    streakShields:playerProfile.streakShields,
    shieldMilestone:playerProfile.shieldMilestone,
    inventory:playerProfile.inventory,
    level:playerProfile.level,
    badges:playerProfile.badges,
    stats:playerProfile.stats
  }));
  localStorage.setItem(STORAGE_KEYS.theme,playerProfile.currentTheme);
}

function loadStreakState(){
  const raw=safeReadJSON(STORAGE_KEYS.streak,{});
  const stateData={count:Math.max(0,raw.count||0),lastQuizDate:raw.lastQuizDate||null};
  if(stateData.lastQuizDate && !/^\d{4}-\d{2}-\d{2}$/.test(stateData.lastQuizDate)){
    stateData.lastQuizDate=null;
  }
  return stateData;
}

function saveStreakState(){
  if(!streakState) return;
  localStorage.setItem(STORAGE_KEYS.streak,JSON.stringify(streakState));
}

function getStreakStatus(){
  const today=getLocalDateKey();
  const rawCount=Math.max(0,streakState?.count||0);
  const lastQuizDate=streakState?.lastQuizDate||null;
  if(!lastQuizDate || rawCount<=0){
    return {displayCount:0,projectedCount:1,isToday:false,gap:Infinity,canUseShield:false,needsReset:false};
  }
  const gap=daysBetween(lastQuizDate,today);
  if(gap<=0){
    return {displayCount:rawCount,projectedCount:rawCount,isToday:true,gap:0,canUseShield:false,needsReset:false};
  }
  if(gap===1){
    return {displayCount:rawCount,projectedCount:rawCount+1,isToday:false,gap,canUseShield:false,needsReset:false};
  }
  const canUseShield=(playerProfile?.streakShields||0)>0;
  return {
    displayCount:canUseShield?rawCount:0,
    projectedCount:canUseShield?rawCount+1:1,
    isToday:false,
    gap,
    canUseShield,
    needsReset:!canUseShield
  };
}

function getProjectedStreakCount(){
  return getStreakStatus().projectedCount;
}

function loadWeakQuestions(){
  const raw=safeReadJSON(STORAGE_KEYS.weakQuestions,{ids:[]});
  if(Array.isArray(raw)) return raw.filter(id=>typeof id==='string');
  return Array.isArray(raw.ids)?raw.ids.filter(id=>typeof id==='string'):[];
}

function saveWeakQuestions(){
  localStorage.setItem(STORAGE_KEYS.weakQuestions,JSON.stringify({ids:weakQuestionIds}));
}

function getWeakQuestionCount(){
  if(!questionBankReady) return weakQuestionIds.length;
  return weakQuestionIds.filter(id=>QUESTION_LOOKUP[id]).length;
}

function rememberWeakQuestion(question){
  const id=question?._id||question?.id;
  if(!id) return;
  weakQuestionIds=[id,...weakQuestionIds.filter(item=>item!==id)].slice(0,300);
  saveWeakQuestions();
  renderWeakReviewCard();
}

function clearWeakQuestion(question){
  const id=question?._id||question?.id;
  if(!id) return;
  const next=weakQuestionIds.filter(item=>item!==id);
  if(next.length===weakQuestionIds.length) return;
  weakQuestionIds=next;
  saveWeakQuestions();
  renderWeakReviewCard();
}

function buildDailyChallengeTemplatePool(){
  const level=playerProfile?.levelInfo?.level||1;
  return DAILY_CHALLENGE_TEMPLATES.filter(template=>!template.requiresLevel || level>=template.requiresLevel);
}

function createDailyChallengeState(dateKey=getLocalDateKey()){
  const quests=shuffle(buildDailyChallengeTemplatePool()).slice(0,3).map(template=>({
    ...template,
    claimed:false,
    completed:false
  }));
  return {
    date:dateKey,
    comboClaimed:false,
    quests,
    stats:{
      quizzesCompleted:0,
      bestCorrectStreak:0,
      currentCorrectStreak:0,
      xpGained:0,
      questionsAnswered:0,
      weakReviewsCompleted:0,
      rankedRuns:0
    }
  };
}

function normalizeDailyChallengeState(raw){
  const today=getLocalDateKey();
  if(!raw || raw.date!==today) return createDailyChallengeState(today);
  const statsRaw=raw.stats||{};
  const availableTemplates=Object.fromEntries(buildDailyChallengeTemplatePool().map(template=>[template.id,template]));
  const quests=Array.isArray(raw.quests)
    ? raw.quests
      .map(quest=>{
        const template=availableTemplates[quest.id];
        if(!template) return null;
        return {
          ...template,
          claimed:!!quest.claimed,
          completed:!!quest.completed
        };
      })
      .filter(Boolean)
    : [];
  const nextState={
    date:today,
    comboClaimed:!!raw.comboClaimed,
    quests:quests.length===3?quests:createDailyChallengeState(today).quests,
    stats:{
      quizzesCompleted:Math.max(0,Math.floor(statsRaw.quizzesCompleted||0)),
      bestCorrectStreak:Math.max(0,Math.floor(statsRaw.bestCorrectStreak||0)),
      currentCorrectStreak:Math.max(0,Math.floor(statsRaw.currentCorrectStreak||0)),
      xpGained:Math.max(0,Math.floor(statsRaw.xpGained||0)),
      questionsAnswered:Math.max(0,Math.floor(statsRaw.questionsAnswered||0)),
      weakReviewsCompleted:Math.max(0,Math.floor(statsRaw.weakReviewsCompleted||0)),
      rankedRuns:Math.max(0,Math.floor(statsRaw.rankedRuns||0))
    }
  };
  return nextState;
}

function loadDailyChallenges(){
  return normalizeDailyChallengeState(safeReadJSON(STORAGE_KEYS.dailyChallenges,null));
}

function saveDailyChallenges(){
  if(!dailyChallengeState) return;
  localStorage.setItem(STORAGE_KEYS.dailyChallenges,JSON.stringify(dailyChallengeState));
}

function ensureDailyChallenges(){
  const normalized=normalizeDailyChallengeState(dailyChallengeState);
  const changed=!dailyChallengeState || JSON.stringify(normalized)!==JSON.stringify(dailyChallengeState);
  dailyChallengeState=normalized;
  if(changed) saveDailyChallenges();
  return dailyChallengeState;
}

function getDailyChallengeProgress(quest){
  return Math.min(quest.target,dailyChallengeState?.stats?.[quest.metric]||0);
}

function renderWeakReviewCard(){
  const copy=document.getElementById('weak-card-copy');
  if(!copy) return;
  const count=getWeakQuestionCount();
  copy.textContent=count
    ? `${count} question${count>1?'s':''} ratée${count>1?'s':''} enregistrée${count>1?'s':''}. Lancez une révision ciblée.`
    : 'Aucune question ratée enregistrée pour le moment.';
}

function renderDailyChallenges(){
  ensureDailyChallenges();
  const list=document.getElementById('daily-challenges-list');
  const summaryTitle=document.getElementById('daily-summary-title');
  const summaryCopy=document.getElementById('daily-summary-copy');
  const homeCopy=document.getElementById('daily-card-copy');
  const completedCount=dailyChallengeState.quests.filter(quest=>getDailyChallengeProgress(quest)>=quest.target).length;
  if(summaryTitle){
    summaryTitle.textContent=`${completedCount} défi${completedCount>1?'s':''} terminé${completedCount>1?'s':''} aujourd’hui`;
  }
  if(summaryCopy){
    summaryCopy.textContent=completedCount===3
      ? `Bravo, les trois quêtes du jour sont validées. Bonus combo : +${COIN_RULES.daily.comboBonus} BrevetCoins.`
      : `Date du jour : ${new Date().toLocaleDateString('fr-FR')} · ${3-completedCount} défi${3-completedCount>1?'s':''} restant${3-completedCount>1?'s':''}.`;
  }
  if(homeCopy){
    homeCopy.textContent=completedCount===3
      ? `Les 3 défis du jour sont terminés. Bonus combo de ${COIN_RULES.daily.comboBonus} BrevetCoins encaissé.`
      : `${completedCount}/3 défi${completedCount>1?'s':''} terminé${completedCount>1?'s':''} aujourd’hui.`;
  }
  if(!list) return;
  list.innerHTML=dailyChallengeState.quests.map(quest=>{
    const progress=getDailyChallengeProgress(quest);
    const pct=Math.max(0,Math.min(100,Math.round((progress/quest.target)*100)));
    const done=progress>=quest.target;
    return `
      <div class="daily-card ${done?'done':''}">
        <div class="daily-card-head">
          <div class="daily-card-title">${escapeHtml(quest.label)}</div>
          <span class="daily-card-reward">+${quest.rewardXp} XP · +${quest.rewardCoins||0} coins</span>
        </div>
        <div class="daily-card-copy">${escapeHtml(quest.description)}</div>
        <div class="daily-progress-row">
          <span>${progress} / ${quest.target}</span>
          <span>${pct}%</span>
        </div>
        <div class="daily-progress-bar"><div class="daily-progress-fill" style="width:${pct}%"></div></div>
        <div class="daily-status">${done?'✅ Défi terminé':'🎯 En cours'}</div>
      </div>
    `;
  }).join('');
}

function syncDailyChallenges(){
  ensureDailyChallenges();
  let changed=false;
  dailyChallengeState.quests.forEach(quest=>{
    const done=getDailyChallengeProgress(quest)>=quest.target;
    quest.completed=done;
    if(done && !quest.claimed){
      quest.claimed=true;
      changed=true;
      playEffect('challenge');
      triggerVibration('success');
      showToast(`Défi terminé : ${quest.label} (+${quest.rewardXp} XP)`,'challenge');
      dailyChallengeRewardLock=true;
      addXP(quest.rewardXp,null);
      dailyChallengeRewardLock=false;
      awardCoins(quest.rewardCoins||0,`Défi quotidien : ${quest.label}`);
    }
  });
  const completedCount=dailyChallengeState.quests.filter(quest=>quest.claimed).length;
  if(completedCount===dailyChallengeState.quests.length && !dailyChallengeState.comboClaimed){
    dailyChallengeState.comboClaimed=true;
    changed=true;
    playEffect('challenge');
    triggerVibration('level');
    awardCoins(COIN_RULES.daily.comboBonus,'Combo des 3 défis du jour !');
  }
  if(changed) saveDailyChallenges();
  renderDailyChallenges();
}

function registerDailyAnswer(wasCorrect){
  ensureDailyChallenges();
  dailyChallengeState.stats.questionsAnswered+=1;
  if(wasCorrect){
    dailyChallengeState.stats.currentCorrectStreak+=1;
    dailyChallengeState.stats.bestCorrectStreak=Math.max(
      dailyChallengeState.stats.bestCorrectStreak,
      dailyChallengeState.stats.currentCorrectStreak
    );
  }else{
    dailyChallengeState.stats.currentCorrectStreak=0;
  }
  saveDailyChallenges();
  syncDailyChallenges();
}

function registerDailyRunCompletion(mode='standard'){
  ensureDailyChallenges();
  dailyChallengeState.stats.quizzesCompleted+=1;
  if(mode==='weak') dailyChallengeState.stats.weakReviewsCompleted+=1;
  if(mode==='ranked') dailyChallengeState.stats.rankedRuns+=1;
  saveDailyChallenges();
  syncDailyChallenges();
}

function getThemeUnlockText(theme){
  if(!theme) return '';
  const themeKey=Object.entries(THEMES).find(([,value])=>value===theme)?.[0]||'';
  if(theme.passManaged){
    const placement=BREVET_PASS_INDEX.theme[themeKey];
    return placement
      ? `Brevet Pass ${placement.track==='premium'?'Premium ':''}· niv. ${placement.level}`.replace('  ',' ')
      : 'Brevet Pass';
  }
  if(theme.shopOnly){
    return 'Boutique';
  }
  if(theme.unlockStreak){
    return `Série de ${theme.unlockStreak} jours`;
  }
  if(theme.unlockRp){
    return `Mode classé : ${getRankInfo(theme.unlockRp).name}`;
  }
  return `Niveau ${theme.unlockLevel||1}`;
}

function getSoundPackUnlockText(soundKey){
  const pack=SOUND_PACKS[soundKey];
  if(!pack) return '';
  if(pack.passManaged){
    const placement=BREVET_PASS_INDEX.sound[soundKey];
    return placement
      ? `Brevet Pass ${placement.track==='premium'?'Premium ':''}· niv. ${placement.level}`.replace('  ',' ')
      : 'Brevet Pass';
  }
  return `Niveau ${pack.unlockLevel||1}`;
}

function getThemeSourceMeta(themeKey,theme=THEMES[themeKey]){
  if(!theme) return {label:'Spécial',detail:'Déblocage spécial',sortSource:99,sortValue:9999,badgeClass:'special'};
  if(themeKey==='dark' || themeKey==='light'){
    return {
      label:'Base',
      detail:'Disponible dès le départ',
      sortSource:0,
      sortValue:themeKey==='dark'?0:1,
      badgeClass:'base'
    };
  }
  if(theme.passManaged){
    const placement=BREVET_PASS_INDEX.theme[themeKey];
    const isPremium=placement?.track==='premium';
    return {
      label:isPremium?'Pass Premium':'Brevet Pass',
      detail:placement?`Niveau ${placement.level}`:'Palier du pass',
      sortSource:1,
      sortValue:(placement?.level||999)*10+(isPremium?1:0),
      badgeClass:isPremium?'premium':'pass'
    };
  }
  if(theme.unlockRp){
    return {
      label:'Mode classé',
      detail:getRankInfo(theme.unlockRp).name,
      sortSource:2,
      sortValue:theme.unlockRp,
      badgeClass:'ranked'
    };
  }
  if(theme.unlockStreak){
    return {
      label:'Série',
      detail:`${theme.unlockStreak} jours`,
      sortSource:3,
      sortValue:theme.unlockStreak,
      badgeClass:'streak'
    };
  }
  if(theme.shopOnly){
    const shopItem=Object.values(SHOP_ITEMS).find(item=>item.themeKey===themeKey);
    return {
      label:'Boutique',
      detail:shopItem?`${shopItem.price} BrevetCoins`:'Achetable',
      sortSource:4,
      sortValue:shopItem?.price||999,
      badgeClass:'shop'
    };
  }
  return {
    label:'Niveau',
    detail:`Niveau ${theme.unlockLevel||1}`,
    sortSource:5,
    sortValue:theme.unlockLevel||999,
    badgeClass:'level'
  };
}

function escapeHtml(value){
  return String(value??'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function getBattlePassRewardDescriptor(reward,track='free',level=1){
  if(!reward) return {icon:'✨',label:'Récompense',shortLabel:'Récompense',desc:'Déblocage du Brevet Pass.',track,level,type:'unknown'};
  if(reward.type==='coins'){
    return {
      icon:'🪙',
      label:`${reward.amount} BrevetCoins`,
      shortLabel:`${reward.amount} coins`,
      desc:'Ajout immédiat dans ton portefeuille.',
      track,
      level,
      type:'coins'
    };
  }
  if(reward.type==='theme'){
    const theme=THEMES[reward.key];
    return {
      icon:'🎨',
      label:`Thème ${theme?.label||reward.key}`,
      shortLabel:theme?.label||'Thème',
      desc:'Débloqué dans le sélecteur de thèmes.',
      track,
      level,
      type:'theme'
    };
  }
  if(reward.type==='sound'){
    const pack=SOUND_PACKS[reward.key];
    return {
      icon:'🔊',
      label:`Pack ${pack?.label||reward.key}`,
      shortLabel:pack?.label||'Pack sonore',
      desc:pack?.desc||'Nouveau pack sonore disponible.',
      track,
      level,
      type:'sound'
    };
  }
  if(reward.type==='title'){
    const meta=getPassTitleMeta(reward.key);
    return {
      icon:'🏅',
      label:meta.text,
      shortLabel:meta.text,
      desc:meta.desc||'Nouveau titre disponible.',
      effect:meta.effect||'none',
      track,
      level,
      type:'title'
    };
  }
  if(reward.type==='xpboost'){
    const minutes=(reward.minutes||((reward.runs||1)*10));
    return {
      icon:'⚡',
      label:`Boost XP x2`,
      shortLabel:`Boost ${minutes} min`,
      desc:`Double l XP pendant ${minutes} minute${minutes>1?'s':''}.`,
      track,
      level,
      type:'xpboost'
    };
  }
  return {icon:'✨',label:'Récompense mystère',shortLabel:'Récompense',desc:'Déblocage du Brevet Pass.',track,level,type:reward.type||'unknown'};
}

function renderBattlePassRewardIcon(reward){
  if(!reward) return '✨';
  if(reward.type==='coins'){
    return `<img src="${UI_COIN_ICON}" alt="BrevetCoin" class="reward-coin-icon">`;
  }
  return escapeHtml(reward.icon||'✨');
}

function getActiveScreenId(){
  return document.querySelector('.screen.active')?.id||'';
}

function getLevelRewardItems(level){
  if(level<1 || level>XP_RULES.maxLevel || !hasBattlePassRewardsAtLevel(level)) return [];
  return ['free','premium'].flatMap(track=>
    getBattlePassTrackRewards(level,track).map(reward=>{
      const descriptor=getBattlePassRewardDescriptor(reward,track,level);
      return {
        ...descriptor,
        claimed:isBattlePassTrackClaimed(level,track),
        unlocked:isBattlePassTrackUnlocked(level,track),
        premiumLocked:track==='premium' && !playerProfile?.battlePassPremium
      };
    })
  );
}

function getNextRewardMilestone(fromLevel){
  for(let level=Math.max(1,fromLevel); level<=XP_RULES.maxLevel; level++){
    if(hasBattlePassRewardsAtLevel(level)){
      return {level,rewards:getLevelRewardItems(level)};
    }
  }
  return null;
}

function renderXpRewardCards(rewards=[]){
  if(!rewards.length) return '';
  return rewards.map(reward=>`
    <div class="xp-reward-card ${reward.track||'free'} ${reward.premiumLocked?'locked':''}">
      <div class="xp-reward-icon">${renderBattlePassRewardIcon(reward)}</div>
      <div class="xp-reward-copy">
        <strong>${escapeHtml(reward.label)}</strong>
        <span>${escapeHtml(reward.desc)}</span>
        <span class="xp-reward-track">${reward.premiumLocked?'Premium requis':`${getBattlePassTrackLabel(reward.track)} · niv. ${reward.level}`}</span>
      </div>
    </div>
  `).join('');
}

function isThemeUnlocked(themeKey,level=playerProfile?.levelInfo?.level||1,peakRp=rankedProfile?.peakRp||rankedProfile?.rp||0,streakCount=getStreakStatus().displayCount){
  const theme=THEMES[themeKey];
  if(!theme) return false;
  if(theme.passManaged) return !!playerProfile?.unlockedThemes?.includes(themeKey);
  if(theme.shopOnly) return !!playerProfile?.unlockedThemes?.includes(themeKey);
  const levelOk=theme.unlockLevel ? level>=theme.unlockLevel : true;
  const rankOk=theme.unlockRp ? peakRp>=theme.unlockRp : true;
  const streakOk=theme.unlockStreak ? streakCount>=theme.unlockStreak : true;
  return levelOk && rankOk && streakOk;
}

function applyBattlePassRewardToProfile(reward,summary){
  if(!playerProfile || !reward || !summary) return;
  const descriptor=getBattlePassRewardDescriptor(reward,summary.track,summary.level);
  if(reward.type==='coins'){
    const amount=Math.max(0,Math.floor(reward.amount||0));
    if(!amount) return;
    playerProfile.coins=Math.max(0,(playerProfile.coins||0)+amount);
    playerProfile.stats.coinsEarned=(playerProfile.stats.coinsEarned||0)+amount;
    summary.coinGain+=amount;
    summary.items.push(descriptor);
    return;
  }
  if(reward.type==='theme' && THEMES[reward.key] && !playerProfile.unlockedThemes.includes(reward.key)){
    playerProfile.unlockedThemes.push(reward.key);
    summary.items.push(descriptor);
    return;
  }
  if(reward.type==='sound' && SOUND_PACKS[reward.key] && !playerProfile.unlockedSoundPacks.includes(reward.key)){
    playerProfile.unlockedSoundPacks.push(reward.key);
    summary.items.push(descriptor);
    return;
  }
  if(reward.type==='title' && PASS_TITLES[reward.key] && !playerProfile.unlockedPassTitles.includes(reward.key)){
    playerProfile.unlockedPassTitles.push(reward.key);
    summary.items.push(descriptor);
    return;
  }
  if(reward.type==='xpboost'){
    const minutes=Math.max(10,Math.floor(reward.minutes||((reward.runs||1)*10)));
    playerProfile.inventory.xpBoostMinutes=(playerProfile.inventory.xpBoostMinutes||0)+minutes;
    summary.items.push(descriptor);
  }
}

function claimBattlePassTrack(level,track='free',{silent=false}={}){
  if(!playerProfile) return null;
  const rewards=getBattlePassTrackRewards(level,track);
  if(!rewards.length) return null;
  if(!isBattlePassTrackUnlocked(level,track) || isBattlePassTrackClaimed(level,track)) return null;
  const summary={level,track,items:[],coinGain:0};
  rewards.forEach(reward=>applyBattlePassRewardToProfile(reward,summary));
  const claimKey=track==='premium'?'battlePassClaimedPremium':'battlePassClaimedFree';
  playerProfile[claimKey]=normalizePassLevelArray([...(playerProfile[claimKey]||[]),level]);
  if(!silent && summary.items.length){
    if(summary.coinGain>0){
      spawnCoinBurst(summary.coinGain);
      playCoinSound();
    }
    const extras=summary.items
      .filter(item=>item.type!=='coins')
      .map(item=>item.shortLabel)
      .join(' · ');
    showToast(
      summary.coinGain>0
        ? `+${summary.coinGain} BrevetCoins (${getBattlePassTrackLabel(track)} · niveau ${level} du Pass)${extras?` · ${extras}`:''}`
        : `Brevet Pass ${getBattlePassTrackLabel(track)} · niveau ${level} : ${summary.items.map(item=>item.shortLabel).join(' · ')}`,
      'level'
    );
  }
  return summary;
}

function claimBattlePassRewardsInRange(startLevel,endLevel,{tracks=['free','premium'],silent=false}={}){
  const summaries=[];
  for(let level=Math.max(1,startLevel); level<=Math.min(XP_RULES.maxLevel,endLevel); level++){
    tracks.forEach(track=>{
      const summary=claimBattlePassTrack(level,track,{silent});
      if(summary) summaries.push(summary);
    });
  }
  return summaries;
}

function initializeBrevetPassProgress(silent=true){
  if(!playerProfile) return [];
  const currentLevel=playerProfile.levelInfo?.level||getLevelInfo(playerProfile.totalXp).level;
  const tracks=playerProfile.battlePassPremium?['free','premium']:['free'];
  return claimBattlePassRewardsInRange(1,currentLevel,{tracks,silent});
}

function syncProfileComputedData(){
  if(!playerProfile) return;
  playerProfile.inventory=normalizeInventory(playerProfile.inventory||{});
  playerProfile.duelDifficulty=DUEL_DIFFICULTIES[playerProfile.duelDifficulty]?playerProfile.duelDifficulty:DEFAULT_DUEL_DIFFICULTY;
  playerProfile.battlePassClaimedFree=normalizePassLevelArray(playerProfile.battlePassClaimedFree||[]);
  playerProfile.battlePassClaimedPremium=normalizePassLevelArray(playerProfile.battlePassClaimedPremium||[]);
  playerProfile.unlockedSoundPacks=Array.from(new Set(['classic',...(playerProfile.unlockedSoundPacks||[])]));
  playerProfile.unlockedPassTitles=Array.from(new Set(['global:Novice',...(playerProfile.unlockedPassTitles||[])]));
  const levelInfo=getLevelInfo(playerProfile.totalXp);
  const streakCount=getStreakStatus().displayCount;
  playerProfile.levelInfo=levelInfo;
  playerProfile.level=levelInfo.level;
  if(!playerProfile.pseudo) playerProfile.pseudo='';
  const unlockedPassTitleKeys=Object.keys(PASS_TITLES).filter(key=>playerProfile.unlockedPassTitles.includes(key));
  playerProfile.globalTitle=getPassTitleMeta(unlockedPassTitleKeys[unlockedPassTitleKeys.length-1]||'global:Novice').text;
  const unlocked=Object.entries(THEMES)
    .filter(([themeKey])=>isThemeUnlocked(themeKey,levelInfo.level,rankedProfile?.peakRp||rankedProfile?.rp||0,streakCount))
    .map(([themeKey])=>themeKey);
  playerProfile.unlockedThemes=Array.from(new Set(['dark','light',...playerProfile.unlockedThemes,...unlocked]));
  playerProfile.userAvatarConfig=normalizeUserAvatarConfig(
    playerProfile.userAvatarConfig,
    playerProfile.pseudo||'BrevetPro',
    levelInfo.level
  );
  playerProfile.unlockedSoundPacks=getUnlockedSoundPackKeys();
  const leader=getSubjectLeader(playerProfile.xpBySubject);
  playerProfile.specialtySubject=leader;
  if(leader){
    const specialtyLevel=getLevelInfo(playerProfile.xpBySubject[leader]||0).level;
    playerProfile.specialtyLevel=specialtyLevel;
    playerProfile.specialtyTitle=pickTitle(SPECIALTY_TITLES[leader]||GLOBAL_TITLES,specialtyLevel);
  }else{
    playerProfile.specialtyLevel=0;
    playerProfile.specialtyTitle='Polyvalent en herbe';
  }
  if(!playerProfile.unlockedThemes.includes(playerProfile.currentTheme)){
    playerProfile.currentTheme='dark';
  }
  if(!playerProfile.unlockedSoundPacks.includes(playerProfile.soundPack)){
    playerProfile.soundPack=playerProfile.unlockedSoundPacks[0]||'classic';
  }
  playerProfile.ownedTitles=[
    ...Object.keys(PASS_TITLES)
      .filter(key=>playerProfile.unlockedPassTitles.includes(key))
      .map(key=>{
        const meta=getPassTitleMeta(key);
        return {key,label:meta.label,text:meta.text,effect:meta.effect||'none'};
      }),
    ...SUBJECT_KEYS.flatMap(subjectKey=>{
      const titles=SPECIALTY_TITLES[subjectKey]||[];
      const subjectLevel=getLevelInfo(playerProfile.xpBySubject[subjectKey]||0).level;
      return titles.filter(item=>subjectLevel>=item.level).map(item=>({
        key:`${subjectKey}:${item.title}`,
        label:`${SUBJ_META[subjectKey].name} · ${item.title}`,
        text:item.title,
        effect:'none'
      }));
    })
  ];
  if(!playerProfile.ownedTitles.find(title=>title.key===playerProfile.selectedTitle)){
    playerProfile.selectedTitle=playerProfile.ownedTitles[0]?.key||'global:Novice';
  }
  playerProfile.displayedTitle=playerProfile.ownedTitles.find(title=>title.key===playerProfile.selectedTitle)?.text||playerProfile.globalTitle;
  playerProfile.displayedTitleEffect=playerProfile.ownedTitles.find(title=>title.key===playerProfile.selectedTitle)?.effect||'none';
  playerProfile.favoriteSubject=getFavoriteSubject(playerProfile.stats.answersBySubject,playerProfile.xpBySubject);
  playerProfile.inventory.shield=Math.max(playerProfile.inventory.shield||0,playerProfile.streakShields||0);
  playerProfile.stats.xp=playerProfile.totalXp;
}

function getNextThemeGoal(level){
  if(level>=XP_RULES.maxLevel) return 'Pass terminé';
  const next=getNextRewardMilestone(level+1);
  if(!next) return 'Pass terminé';
  const hasFree=next.rewards.some(reward=>reward.track==='free');
  const hasPremium=next.rewards.some(reward=>reward.track==='premium');
  const trackLabel=hasFree&&hasPremium?'gratuit + premium':hasPremium?'premium':'gratuit';
  return `Niv. ${next.level} · ${trackLabel}`;
}

function getBattlePassProgressPercent(info=playerProfile?.levelInfo){
  if(!info) return 0;
  if(info.level>=XP_RULES.maxLevel) return 100;
  const totalSteps=Math.max(1,XP_RULES.maxLevel-1);
  return Math.max(0,Math.min(100,(((info.level-1)+(info.progressPct/100))/totalSteps)*100));
}

function renderBrevetPassRewardCards(level,track='free'){
  const rewards=getBattlePassTrackRewards(level,track);
  return rewards.map(reward=>{
    const descriptor=getBattlePassRewardDescriptor(reward,track,level);
    const claimed=isBattlePassTrackClaimed(level,track);
    const locked=track==='premium' && !playerProfile?.battlePassPremium;
    return `
      <article class="pass-reward-card-mini ${track} ${claimed?'claimed':''} ${locked?'locked':''}">
        <div class="pass-reward-card-icon">${renderBattlePassRewardIcon(descriptor)}</div>
        <div class="pass-reward-card-copy">
          <strong>${escapeHtml(descriptor.label)}</strong>
          <span>${escapeHtml(descriptor.desc)}</span>
        </div>
      </article>
    `;
  }).join('');
}

function buyBrevetPassPremium(){
  if(!playerProfile) return;
  if(playerProfile.battlePassPremium){
    showToast('Brevet Pass Premium déjà actif.','info');
    return;
  }
  if(!spendCoins(BREVET_PASS_PREMIUM_COST)) return;
  playerProfile.battlePassPremium=true;
  const summaries=claimBattlePassRewardsInRange(
    1,
    playerProfile.levelInfo?.level||1,
    {tracks:['premium'],silent:true}
  );
  const unlockedLabels=summaries.flatMap(summary=>summary.items.filter(item=>item.type!=='coins').map(item=>item.shortLabel));
  const coinGain=summaries.reduce((total,summary)=>total+(summary.coinGain||0),0);
  if(coinGain>0){
    spawnCoinBurst(coinGain);
    playCoinSound();
  }
  syncProfileComputedData();
  savePlayerProfile();
  refreshPlayerUI();
  showToast(
    coinGain>0
      ? `+${coinGain} BrevetCoins (Rattrapage Brevet Pass Premium)${unlockedLabels.length?` · ${unlockedLabels.slice(0,4).join(' · ')}${unlockedLabels.length>4?' …':''}`:''}`
      : unlockedLabels.length
        ? `Brevet Pass Premium activé : ${unlockedLabels.slice(0,4).join(' · ')}${unlockedLabels.length>4?' …':''}`
        : 'Brevet Pass Premium activé.',
    'success'
  );
}

function renderBrevetPassScreen(){
  if(!playerProfile) return;
  syncProfileComputedData();
  const info=playerProfile.levelInfo;
  const fill=document.getElementById('pass-progress-fill');
  const levelNode=document.getElementById('pass-current-level');
  const caption=document.getElementById('pass-progress-caption');
  const nextNode=document.getElementById('pass-next-reward');
  const balance=document.getElementById('pass-balance');
  const status=document.getElementById('pass-premium-status');
  const copy=document.getElementById('pass-premium-copy');
  const button=document.getElementById('pass-premium-button');
  const buttonPrice=document.getElementById('pass-premium-price');
  const counts=document.getElementById('pass-reward-counts');
  const cards=document.getElementById('pass-cards');
  const nextMilestone=getNextRewardMilestone(info.level+1);
  const rewardLevels=Object.keys(BREVET_PASS_LEVELS).map(Number).sort((a,b)=>a-b);
  const freeClaimed=(playerProfile.battlePassClaimedFree||[]).length;
  const premiumClaimed=(playerProfile.battlePassClaimedPremium||[]).length;
  if(fill) fill.style.width=`${getBattlePassProgressPercent(info)}%`;
  if(levelNode) levelNode.textContent=`Niveau ${info.level} / ${XP_RULES.maxLevel}`;
  if(caption){
    caption.textContent=info.level>=XP_RULES.maxLevel
      ? 'Brevet Pass terminé. Tu peux encore récupérer la voie premium si elle n’est pas active.'
      : `${info.currentLevelXp} / ${info.nextLevelXp} XP vers le niveau ${Math.min(info.level+1,XP_RULES.maxLevel)}`;
  }
  if(nextNode){
    nextNode.textContent=nextMilestone
      ? `Prochain palier : niveau ${nextMilestone.level} · ${nextMilestone.rewards.map(reward=>reward.shortLabel).join(' · ')}`
      : 'Dernier palier atteint';
  }
  if(balance) balance.innerHTML=renderCoinAmount(playerProfile.coins||0);
  if(status){
    status.textContent=playerProfile.battlePassPremium
      ? 'Version Premium active'
      : 'Version gratuite active';
  }
  if(copy){
    copy.textContent=playerProfile.battlePassPremium
      ? 'Tu récupères automatiquement les récompenses gratuites et premium à chaque niveau du Pass.'
      : 'La voie gratuite donne une récompense tous les 4 niveaux. Le Premium ajoute une seconde colonne tous les 2 niveaux.';
  }
  if(button){
    button.disabled=!!playerProfile.battlePassPremium;
    button.textContent=playerProfile.battlePassPremium ? 'Premium déjà débloqué' : 'Débloquer le Premium';
  }
  if(buttonPrice){
    buttonPrice.innerHTML=playerProfile.battlePassPremium ? 'Accès permanent actif' : renderCoinAmount(BREVET_PASS_PREMIUM_COST,'');
  }
  if(counts){
    counts.innerHTML=`
      <span class="pass-stat-pill">🎯 ${freeClaimed} paliers gratuits récupérés</span>
      <span class="pass-stat-pill premium">💎 ${premiumClaimed} paliers premium récupérés</span>
      <span class="pass-stat-pill">🪜 ${rewardLevels.length} paliers à récompense</span>
      <span class="pass-stat-pill">🎨 ${playerProfile.unlockedThemes.length} thèmes possédés</span>
    `;
  }
  if(!cards) return;
  cards.innerHTML=rewardLevels.map(level=>{
    const freeRewards=getBattlePassTrackRewards(level,'free');
    const premiumRewards=getBattlePassTrackRewards(level,'premium');
    const current=level===info.level;
    const reached=level<=info.level;
    const isNext=!!nextMilestone && level===nextMilestone.level;
    const freeClaimedHere=isBattlePassTrackClaimed(level,'free');
    const premiumClaimedHere=isBattlePassTrackClaimed(level,'premium');
    const levelStatus=current
      ? 'Niveau actuel'
      : isNext
        ? 'Prochain palier'
        : reached
          ? 'Atteint'
          : 'À venir';
    const freeState=freeClaimedHere?'Récupéré':reached?'Disponible':'Verrouillé';
    const premiumState=premiumClaimedHere
      ? 'Récupéré'
      : playerProfile.battlePassPremium
        ? (reached?'Disponible':'À venir')
        : 'Premium requis';
    return `
      <article class="pass-level-card ${current?'current':''} ${reached?'reached':'future'} ${isNext?'next':''}">
        <div class="pass-level-head">
          <div>
            <div class="pass-level-kicker">${isNext?'Ton prochain objectif':reached?'Palier Brevet Pass':'Bientôt disponible'}</div>
            <div class="pass-level-number">Niveau ${level}</div>
          </div>
          <div class="pass-level-state ${current?'current':''} ${isNext?'next':''}">${levelStatus}</div>
        </div>
        <div class="pass-track-stack">
          ${freeRewards.length?`
            <section class="pass-track-row free ${freeClaimedHere?'claimed':reached?'ready':'future'}">
              <div class="pass-track-label">
                <div>
                  <strong>Voie gratuite</strong>
                  <span class="pass-track-state">${freeState}</span>
                </div>
                <span class="pass-track-chip free">Gratuit</span>
              </div>
              <div class="pass-reward-grid">
                ${renderBrevetPassRewardCards(level,'free')}
              </div>
            </section>
          `:''}
          ${premiumRewards.length?`
            <section class="pass-track-row premium ${(premiumClaimedHere && playerProfile.battlePassPremium)?'claimed':(reached && playerProfile.battlePassPremium)?'ready':(!playerProfile.battlePassPremium?'locked':'future')}">
              <div class="pass-track-label">
                <div>
                  <strong>Voie premium</strong>
                  <span class="pass-track-state">${premiumState}</span>
                </div>
                <span class="pass-track-chip premium">Premium</span>
              </div>
              <div class="pass-reward-grid">
                ${renderBrevetPassRewardCards(level,'premium')}
              </div>
            </section>
          `:''}
        </div>
      </article>
    `;
  }).join('');
}

function applyTheme(themeKey,shouldPersist=true){
  if(!playerProfile || !THEMES[themeKey]) return;
  if(!playerProfile.unlockedThemes.includes(themeKey)){
    showToast(`${THEMES[themeKey].label} se débloque via ${getThemeUnlockText(THEMES[themeKey])}`,'locked');
    return;
  }
  playerProfile.currentTheme=themeKey;
  document.body.setAttribute('data-theme',themeKey);
  syncBrowserThemeColor(themeKey);
  syncThemeAmbience(true);
  playEffect('toggle');
  if(shouldPersist) savePlayerProfile();
  renderThemeSelector();
}

function renderThemeSelector(){
  if(!playerProfile) return;
  const container=document.getElementById('theme-selector');
  const status=document.getElementById('theme-panel-status');
  if(!container||!status) return;
  container.innerHTML='';
  const unlockedCount=Object.keys(THEMES).filter(themeKey=>playerProfile.unlockedThemes.includes(themeKey)).length;
  status.textContent=`${unlockedCount} thème${unlockedCount>1?'s':''} disponible${unlockedCount>1?'s':''}`;
  const orderedThemes=Object.entries(THEMES).sort(([themeKeyA,themeA],[themeKeyB,themeB])=>{
    const sourceA=getThemeSourceMeta(themeKeyA,themeA);
    const sourceB=getThemeSourceMeta(themeKeyB,themeB);
    if(sourceA.sortSource!==sourceB.sortSource) return sourceA.sortSource-sourceB.sortSource;
    if(sourceA.sortValue!==sourceB.sortValue) return sourceA.sortValue-sourceB.sortValue;
    return themeA.label.localeCompare(themeB.label,'fr');
  });
  orderedThemes.forEach(([themeKey,theme])=>{
    const btn=document.createElement('button');
    const unlocked=playerProfile.unlockedThemes.includes(themeKey);
    const sourceMeta=getThemeSourceMeta(themeKey,theme);
    btn.className='theme-btn'+(playerProfile.currentTheme===themeKey?' selected':'');
    btn.disabled=!unlocked;
    btn.onclick=()=>applyTheme(themeKey);
    btn.innerHTML=`
      <div class="theme-swatch" style="background:${theme.preview}"></div>
      <div class="theme-card-head">
        <div class="theme-name">${theme.label}</div>
        <span class="theme-source-badge ${sourceMeta.badgeClass}">${sourceMeta.label}</span>
      </div>
      <div class="theme-meta">Source : ${sourceMeta.label} · ${sourceMeta.detail}</div>
      ${unlocked
        ? `<div class="theme-unlock-source">✅ Disponible maintenant</div>`
        : `<div class="theme-lock">🔒 ${getThemeUnlockText(theme)}</div>`}
    `;
    container.appendChild(btn);
  });
}

function toggleThemePanel(){
  showScreen('screen-themes');
}

function toggleTitlePanel(){
  showScreen('screen-titles');
}

function renderTitleSelector(){
  if(!playerProfile) return;
  const select=document.getElementById('title-select');
  const status=document.getElementById('title-panel-status');
  const preview=document.getElementById('owned-title-preview');
  if(!select||!status||!preview) return;
  select.innerHTML=playerProfile.ownedTitles.map(title=>`<option value="${title.key}" ${title.key===playerProfile.selectedTitle?'selected':''}>${title.label}</option>`).join('');
  preview.innerHTML=playerProfile.ownedTitles.map(title=>`
    <span class="title-chip ${getTitleEffectClass(title.effect)} ${title.key===playerProfile.selectedTitle?'selected':''}">
      ${title.key===playerProfile.selectedTitle?'✅':'🏅'} ${escapeHtml(title.text)}
    </span>
  `).join('');
  status.textContent=`${playerProfile.ownedTitles.length} titre${playerProfile.ownedTitles.length>1?'s':''} débloqué${playerProfile.ownedTitles.length>1?'s':''}`;
}

function selectDisplayedTitle(value){
  if(!playerProfile) return;
  playerProfile.selectedTitle=value;
  savePlayerProfile();
  refreshPlayerUI();
}

function getWorkshopTargets(mode='atelier'){
  return mode==='onboarding'
    ? {
        modal:'onboarding-modal',
        preview:'onboarding-avatar-preview',
        ring:'onboarding-avatar-preview-ring',
        overlay:'onboarding-avatar-overlay',
        controls:'onboarding-avatar-controls',
        summary:'onboarding-avatar-summary'
      }
    : {
        modal:'avatar-modal',
        preview:'atelier-avatar-preview',
        ring:'atelier-avatar-preview-ring',
        overlay:'atelier-avatar-overlay',
        controls:'atelier-avatar-controls',
        summary:'atelier-avatar-summary'
      };
}

function getWorkshopLevel(mode='atelier'){
  return mode==='onboarding'?1:(playerProfile?.levelInfo?.level||1);
}

function ensureAvatarWorkshopDraft(mode='atelier'){
  if(!avatarWorkshopDraft){
    const baseSeed=mode==='onboarding'
      ? (document.getElementById('onboarding-pseudo')?.value||playerProfile?.pseudo||'BrevetPro')
      : (playerProfile?.userAvatarConfig?.seed||playerProfile?.pseudo||'BrevetPro');
    avatarWorkshopDraft=cloneAvatarConfig(normalizeUserAvatarConfig(
      playerProfile?.userAvatarConfig||getDefaultAvatarConfig(baseSeed),
      baseSeed,
      getWorkshopLevel(mode)
    ));
  }
  return avatarWorkshopDraft;
}

function renderWorkshopSelect(label,group,field,mode){
  const draft=ensureAvatarWorkshopDraft(mode);
  const options=getMiniavsOptions(group,getWorkshopLevel(mode));
  return `
    <label>
      <span class="field-label">${label}</span>
      <select class="atelier-select" onchange="updateAvatarDraft('${field}',this.value,'${mode}')">
        ${options.map(option=>`<option value="${option.value}" ${draft[field]===option.value?'selected':''}>${option.label}</option>`).join('')}
      </select>
    </label>
  `;
}

function renderWorkshopColorRow(label,group,field,mode){
  const draft=ensureAvatarWorkshopDraft(mode);
  const options=getMiniavsOptions(group,getWorkshopLevel(mode));
  return `
    <div>
      <div class="atelier-chip-title">${label}</div>
      <div class="atelier-color-tools">
        <div class="color-chip-row">
          ${options.map(option=>`<button type="button" class="color-chip${draft[field]===option.value?' selected':''}" style="background:#${option.value}" title="${option.label}" onclick="updateAvatarDraft('${field}','${option.value}','${mode}')"></button>`).join('')}
        </div>
        <input class="atelier-hex-input" value="#${draft[field]}" placeholder="#a1b2c3" onchange="updateAvatarDraftHex('${field}',this.value,'${mode}')">
        <div class="atelier-hex-help">Vous pouvez aussi taper un code hexadécimal libre pour ${label.toLowerCase()}.</div>
      </div>
    </div>
  `;
}

function renderAvatarWorkshop(mode='atelier'){
  const targets=getWorkshopTargets(mode);
  const draft=ensureAvatarWorkshopDraft(mode);
  const level=getWorkshopLevel(mode);
  const preview=document.getElementById(targets.preview);
  const ring=document.getElementById(targets.ring);
  const overlay=document.getElementById(targets.overlay);
  const controls=document.getElementById(targets.controls);
  const summary=document.getElementById(targets.summary);
  if(preview) preview.src=generateAvatarUrl(draft);
  if(ring){
    ring.setAttribute('data-border-tier',mode==='onboarding'?'base':getAvatarBorderTier(level));
  }
  if(overlay) overlay.setAttribute('data-eye-effect',getEyeEffect(draft));
  if(summary){
    summary.textContent=`Aperçu en direct • ${getNextWorkshopUnlock(level)}`;
  }
  if(!controls) return;
  controls.innerHTML=`
    <div class="atelier-section">
      <div class="atelier-section-title">Base du personnage</div>
      <div class="atelier-field-grid">
        ${renderWorkshopSelect('Yeux','eyes','eyes',mode)}
        ${renderWorkshopSelect('Cheveux','hair','hair',mode)}
        ${renderWorkshopSelect('Bouche','mouth','mouth',mode)}
        ${renderWorkshopSelect('Vetement','clothing','clothing',mode)}
        ${renderWorkshopSelect('Accessoire','accessories','accessory',mode)}
        ${renderWorkshopSelect('Barbe / moustache','mustaches','mustache',mode)}
        ${renderWorkshopSelect('Tete','heads','head',mode)}
      </div>
      <div class="atelier-inline-note">Toutes les coiffures, couleurs, lunettes et barbes sont disponibles dès le niveau 1.</div>
    </div>
    <div class="atelier-section">
      <div class="atelier-section-title">Couleurs</div>
      ${renderWorkshopColorRow('Fond','backgrounds','backgroundColor',mode)}
      <div style="height:10px"></div>
      ${renderWorkshopColorRow('Vetement','clothingColors','clothingColor',mode)}
      <div style="height:10px"></div>
      ${renderWorkshopColorRow('Cheveux','hairColors','hairColor',mode)}
      <div style="height:10px"></div>
      ${renderWorkshopColorRow('Peau','skinColors','skinColor',mode)}
    </div>
  `;
}

function updateAvatarDraft(field,value,mode='atelier'){
  const level=getWorkshopLevel(mode);
  const draft=ensureAvatarWorkshopDraft(mode);
  avatarWorkshopDraft=normalizeUserAvatarConfig({
    ...draft,
    [field]:field==='seed'?sanitizeAvatarSeed(value,playerProfile?.pseudo||'BrevetPro'):value
  }, value||draft.seed||playerProfile?.pseudo||'BrevetPro', level);
  renderAvatarWorkshop(mode);
}

function updateAvatarDraftHex(field,value,mode='atelier'){
  const draft=ensureAvatarWorkshopDraft(mode);
  const level=getWorkshopLevel(mode);
  avatarWorkshopDraft=normalizeUserAvatarConfig({
    ...draft,
    [field]:sanitizeAvatarHex(value,draft[field])
  },draft.seed||playerProfile?.pseudo||'BrevetPro',level);
  renderAvatarWorkshop(mode);
}

function randomizeAvatarDraft(mode='atelier'){
  const level=getWorkshopLevel(mode);
  const pick=group=>{
    const unlocked=getMiniavsOptions(group,level);
    return unlocked[Math.floor(Math.random()*unlocked.length)]?.value||'';
  };
  const baseSeed=(mode==='onboarding'
    ? (document.getElementById('onboarding-pseudo')?.value||playerProfile?.pseudo||'BrevetPro')
    : (playerProfile?.pseudo||'BrevetPro'));
  avatarWorkshopDraft=normalizeUserAvatarConfig({
    seed:sanitizeAvatarSeed(`${baseSeed}-${Math.floor(100+Math.random()*900)}`,baseSeed),
    backgroundColor:pick('backgrounds'),
    eyes:pick('eyes'),
    hair:pick('hair'),
    mouth:pick('mouth'),
    clothing:pick('clothing'),
    clothingColor:pick('clothingColors'),
    hairColor:pick('hairColors'),
    skinColor:pick('skinColors'),
    head:pick('heads'),
    accessory:pick('accessories'),
    mustache:pick('mustaches')
  },baseSeed,level);
  renderAvatarWorkshop(mode);
}

function saveAvatarWorkshop(){
  if(!playerProfile) return;
  const draft=ensureAvatarWorkshopDraft('atelier');
  playerProfile.userAvatarConfig=normalizeUserAvatarConfig(draft,playerProfile.pseudo||'BrevetPro',playerProfile.levelInfo.level);
  playerProfile.avatarConfigured=true;
  savePlayerProfile();
  refreshPlayerUI();
  closeAvatarModal();
  showToast('Avatar enregistré.','avatar');
}

function openAvatarModal(){
  if(!playerProfile) return;
  avatarWorkshopDraft=cloneAvatarConfig(normalizeUserAvatarConfig(
    playerProfile.userAvatarConfig,
    playerProfile.pseudo||'BrevetPro',
    playerProfile.levelInfo.level
  ));
  renderAvatarWorkshop('atelier');
  document.getElementById('avatar-modal')?.classList.add('open');
}

function closeAvatarModal(){
  avatarWorkshopDraft=null;
  document.getElementById('avatar-modal')?.classList.remove('open');
}

function maybeOpenOnboarding(){
  if(!playerProfile) return;
  if(playerProfile.pseudo && playerProfile.avatarConfigured) return;
  const pseudoInput=document.getElementById('onboarding-pseudo');
  if(pseudoInput && !pseudoInput.value) pseudoInput.value=playerProfile.pseudo||'';
  avatarWorkshopDraft=cloneAvatarConfig(normalizeUserAvatarConfig(
    playerProfile.userAvatarConfig,
    pseudoInput?.value||playerProfile.pseudo||'BrevetPro',
    1
  ));
  renderAvatarWorkshop('onboarding');
  document.getElementById('onboarding-modal')?.classList.add('open');
}

function completeOnboarding(){
  if(!playerProfile) return;
  const input=document.getElementById('onboarding-pseudo');
  const pseudo=String(input?.value||'').trim().slice(0,18);
  if(!pseudo){
    showToast('Entrez un pseudo pour commencer.','warning');
    input?.focus();
    return;
  }
  const draft=ensureAvatarWorkshopDraft('onboarding');
  playerProfile.pseudo=pseudo;
  playerProfile.userAvatarConfig=normalizeUserAvatarConfig({
    ...draft,
    seed:sanitizeAvatarSeed(draft.seed||pseudo,pseudo)
  },pseudo,1);
  playerProfile.avatarConfigured=true;
  savePlayerProfile();
  avatarWorkshopDraft=null;
  document.getElementById('onboarding-modal')?.classList.remove('open');
  refreshPlayerUI();
  showToast(`Bienvenue ${pseudo} !`,'success');
}

function renderSettingsPanel(){
  if(!playerProfile) return;
  const select=document.getElementById('sound-pack-select');
  const desc=document.getElementById('sound-pack-desc');
  const status=document.getElementById('settings-panel-status');
  const vipNote=document.getElementById('vip-settings-note');
  const selfEvalBtn=document.getElementById('open-self-eval-btn');
  const backupNote=document.getElementById('backup-settings-note');
  if(select){
    select.innerHTML=Object.entries(SOUND_PACKS).map(([key,pack])=>{
      const unlocked=playerProfile.unlockedSoundPacks.includes(key);
      return `<option value="${key}" ${key===playerProfile.soundPack?'selected':''} ${unlocked?'':'disabled'}>${pack.label}${unlocked?'':` · ${getSoundPackUnlockText(key)}`}</option>`;
    }).join('');
  }
  if(desc){
    const pack=getSoundPack(playerProfile.soundPack);
    desc.textContent=`${pack.label} — ${pack.desc} Les clics, transitions, combos, duels et pièces suivent ce pack.`;
  }
  if(status){
    status.textContent=`${playerProfile.unlockedSoundPacks.length} pack${playerProfile.unlockedSoundPacks.length>1?'s':''} sonore${playerProfile.unlockedSoundPacks.length>1?'s':''} disponible${playerProfile.unlockedSoundPacks.length>1?'s':''}`;
  }
  if(vipNote){
    vipNote.textContent='Tableau de bord complet : progression, historique et classé accessibles à tout moment.';
  }
  if(selfEvalBtn){
    selfEvalBtn.textContent=`Auto-évaluation : ${playerProfile.openSelfEvalMode?'ON':'OFF'}`;
  }
  if(backupNote){
    backupNote.textContent=playerProfile.openSelfEvalMode
      ? 'Mode auto-évaluation actif : les questions ouvertes peuvent être validées manuellement.'
      : 'Mode auto-évaluation inactif : la correction des réponses ouvertes reste automatique.';
  }
}

function toggleSettingsPanel(){
  showScreen('screen-settings');
}

function selectSoundPack(value){
  if(!playerProfile) return;
  if(!playerProfile.unlockedSoundPacks.includes(value)){
    showToast(`Pack sonore : ${getSoundPackUnlockText(value)}`,'locked');
    renderSettingsPanel();
    return;
  }
  playerProfile.soundPack=value;
  savePlayerProfile();
  refreshPlayerUI();
  previewSoundPack();
}

function previewSoundPack(){
  playSound('click');
  setTimeout(()=>playSound('toggle'),150);
  setTimeout(()=>playSound('success'),320);
  setTimeout(()=>playCoinSound(),520);
  setTimeout(()=>playSound('error'),760);
}

function toggleOpenSelfEvalMode(){
  if(!playerProfile) return;
  playerProfile.openSelfEvalMode=!playerProfile.openSelfEvalMode;
  savePlayerProfile();
  renderSettingsPanel();
  showToast(
    playerProfile.openSelfEvalMode
      ? 'Auto-évaluation activée pour les réponses ouvertes.'
      : 'Auto-évaluation désactivée.',
    'info'
  );
}

function exportProgress(){
  const payload={
    version:1,
    exportedAt:new Date().toISOString(),
    storage:{
      [STORAGE_KEYS.profile]:localStorage.getItem(STORAGE_KEYS.profile),
      [STORAGE_KEYS.streak]:localStorage.getItem(STORAGE_KEYS.streak),
      [STORAGE_KEYS.theme]:localStorage.getItem(STORAGE_KEYS.theme),
      [STORAGE_KEYS.ranked]:localStorage.getItem(STORAGE_KEYS.ranked),
      [STORAGE_KEYS.weakQuestions]:localStorage.getItem(STORAGE_KEYS.weakQuestions),
      [STORAGE_KEYS.dailyChallenges]:localStorage.getItem(STORAGE_KEYS.dailyChallenges),
      brevet_history:localStorage.getItem('brevet_history')
    }
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=`brevetpro-save-${getLocalDateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),500);
  showToast('Sauvegarde exportée en JSON.','success');
}

function triggerImportProgress(){
  document.getElementById('progress-import-input')?.click();
}

function handleImportProgress(event){
  const file=event?.target?.files?.[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const parsed=JSON.parse(String(reader.result||'{}'));
      const storage=parsed.storage||parsed;
      const knownKeys=[
        STORAGE_KEYS.profile,
        STORAGE_KEYS.streak,
        STORAGE_KEYS.theme,
        STORAGE_KEYS.ranked,
        STORAGE_KEYS.weakQuestions,
        STORAGE_KEYS.dailyChallenges,
        'brevet_history'
      ];
      let restored=0;
      knownKeys.forEach(key=>{
        if(typeof storage[key]==='string'){
          localStorage.setItem(key,storage[key]);
          restored++;
        }
      });
      if(!restored) throw new Error('empty-import');
      playerProfile=loadPlayerProfile();
      syncProfileComputedData();
      initializeBrevetPassProgress(true);
      streakState=loadStreakState();
      rankedProfile=loadRankedProfile();
      weakQuestionIds=loadWeakQuestions();
      dailyChallengeState=loadDailyChallenges();
      storageBootReady=true;
      ensureDailyChallenges();
      savePlayerProfile();
      if(questionBankReady){
        weakQuestionIds=weakQuestionIds.filter(id=>QUESTION_LOOKUP[id]);
        saveWeakQuestions();
      }
      saveDailyChallenges();
      document.body.setAttribute('data-theme',playerProfile.currentTheme||'dark');
      syncBrowserThemeColor(playerProfile.currentTheme||'dark');
      refreshPlayerUI();
      renderSettingsPanel();
      renderThemeSelector();
      renderTitleSelector();
      renderWeakReviewCard();
      renderDailyChallenges();
      renderHistory('stats-history-list');
      renderShop();
      updateRankedUI();
      if(questionBankReady) updateFlashCounts();
      else scheduleQuestionBankWarmup();
      showToast('Progression restaurée avec succès.','success');
    }catch(error){
      showToast('Fichier de sauvegarde invalide.','error');
    }finally{
      event.target.value='';
    }
  };
  reader.readAsText(file,'utf-8');
}

function updateVipUI(){
  if(!playerProfile || !rankedProfile) return;
  const streakStatus=getStreakStatus();
  const favoriteSubject=playerProfile.favoriteSubject;
  const favoriteLabel=favoriteSubject?`${SUBJ_META[favoriteSubject].icon} ${SUBJ_META[favoriteSubject].name}`:'À définir';
  const setText=(id,value)=>{
    const node=document.getElementById(id);
    if(node) node.textContent=value;
  };
  setText('vip-total-questions',String(playerProfile.stats.questionsAnswered||0));
  setText('vip-revision-time',formatLongDuration(playerProfile.stats.revisionSeconds||0));
  setText('vip-favorite-subject',favoriteLabel);
  setText('vip-streak',`${streakStatus.displayCount} jour${streakStatus.displayCount>1?'s':''}`);
  setText('vip-player-name',playerProfile.pseudo||'Joueur');
  setText('vip-active-title',playerProfile.displayedTitle||playerProfile.globalTitle);
  setText('vip-sound-pack',getSoundPack(playerProfile.soundPack).label);
  setText('vip-shields',String(playerProfile.streakShields||0));
  setText('vip-total-xp',`${playerProfile.totalXp} XP`);
  setText('vip-ranked-name',getRankInfo(rankedProfile.rp).name);
  setText('vip-completed-runs',String(playerProfile.stats.completedRuns||0));
  setText('vip-theme-name',THEMES[playerProfile.currentTheme]?.label||'Classique');
  setText('vip-duel-wins',String(playerProfile.stats.duelWins||0));
  setText('vip-robot-badge',getRobotBadgeLabel());
}

function openVipScreen(){
  updateVipUI();
  showScreen('screen-vip');
}

function renderXpModal(){
  if(!playerProfile) return;
  syncProfileComputedData();
  const info=playerProfile.levelInfo;
  const currentLevel=info.level;
  const nextLevel=Math.min(currentLevel+1,XP_RULES.maxLevel);
  const remainingXp=currentLevel>=XP_RULES.maxLevel ? 0 : Math.max(0,info.nextLevelXp-info.currentLevelXp);
  const setText=(id,value)=>{
    const node=document.getElementById(id);
    if(node) node.textContent=value;
  };
  setText('xp-modal-title',currentLevel>=XP_RULES.maxLevel?`Niveau ${currentLevel} atteint`:`Niveau ${currentLevel} → ${nextLevel}`);
  setText(
    'xp-modal-subtitle',
    currentLevel>=XP_RULES.maxLevel
      ? (playerProfile.battlePassPremium
          ? 'Tu as terminé le Brevet Pass Premium. Toutes les récompenses du pass sont maintenant visibles.'
          : 'Tu as terminé la voie gratuite du Brevet Pass. Les récompenses premium restent verrouillées tant que le pass n’est pas acheté.')
      : `Encore ${remainingXp} XP pour atteindre le niveau ${nextLevel}.`
  );
  setText('xp-modal-next-level-pill',currentLevel>=XP_RULES.maxLevel?`Lvl ${currentLevel}`:`Lvl ${nextLevel}`);
  setText(
    'xp-modal-range',
    currentLevel>=XP_RULES.maxLevel
      ? 'Niveau maximum atteint'
      : `${info.currentLevelXp} / ${info.nextLevelXp} XP vers le niveau ${nextLevel}`
  );
  setText('xp-modal-percent',`${info.progressPct}%`);
  setText('xp-modal-total-xp',`${playerProfile.totalXp} XP`);
  setText('xp-modal-remaining-xp',currentLevel>=XP_RULES.maxLevel?'0 XP':`${remainingXp} XP`);
  setText('xp-modal-bonus',`x${getStreakMultiplier().toFixed(1)}`);
  const fill=document.getElementById('xp-modal-track-fill');
  if(fill) fill.style.width=info.progressPct+'%';
}

function openXpModal(){
  playEffect('click');
  renderXpModal();
  document.getElementById('xp-modal')?.classList.add('open');
}

function closeXpModal(){
  playEffect('click');
  document.getElementById('xp-modal')?.classList.remove('open');
}

function updateRankedUI(){
  if(!rankedProfile || !playerProfile) return;
  const rankInfo=getRankInfo(rankedProfile.rp);
  const unlocked=playerProfile.levelInfo.level>=MIN_RANKED_LEVEL;
  const nextTier=RANK_TIERS.find(tier=>tier.rp>rankedProfile.rp);
  const rpToNext=nextTier?`${nextTier.rp-rankedProfile.rp} RP avant ${nextTier.name}`:'Rang maximum atteint';
  const rankName=document.getElementById('ranked-rank-name');
  const rankDesc=document.getElementById('ranked-rank-desc');
  const rpCount=document.getElementById('ranked-rp-count');
  const rpDesc=document.getElementById('ranked-rp-desc');
  const accessRule=document.getElementById('ranked-access-rule');
  const accessDesc=document.getElementById('ranked-access-desc');
  const hubRank=document.getElementById('ranked-hub-rank');
  const hubRp=document.getElementById('ranked-hub-rp');
  const hubMatch=document.getElementById('ranked-hub-matchmaking');
  const hubMatchDesc=document.getElementById('ranked-hub-matchmaking-desc');
  const startBtn=document.getElementById('ranked-start-btn');
  if(rankName) rankName.textContent=rankInfo.name;
  if(rankDesc) rankDesc.textContent=unlocked?rankInfo.desc:`Atteignez le niveau ${MIN_RANKED_LEVEL} pour débloquer le classé.`;
  if(rpCount) rpCount.textContent=`${rankedProfile.rp} RP`;
  if(rpDesc) rpDesc.textContent=rpToNext;
  if(accessRule) accessRule.textContent=unlocked?`${rankedProfile.rp} RP`: `Niveau ${MIN_RANKED_LEVEL}`;
  if(accessDesc) accessDesc.textContent=unlocked?`Rang actuel : ${rankInfo.name}`:`Niveau actuel : ${playerProfile.levelInfo.level}`;
  if(hubRank) hubRank.textContent=rankInfo.name;
  if(hubRp) hubRp.textContent=`${rankedProfile.rp} RP`;
  if(hubMatch) hubMatch.textContent=rankInfo.desc.split('.')[0]||rankInfo.name;
  if(hubMatchDesc) hubMatchDesc.textContent=rpToNext;
  if(startBtn){
    startBtn.disabled=!unlocked;
    startBtn.textContent=unlocked?'Lancer une partie classée':`Disponible au niveau ${MIN_RANKED_LEVEL}`;
  }
}

function refreshPlayerUI(){
  if(!playerProfile || !streakState) return;
  syncProfileComputedData();
  const activeScreenId=getActiveScreenId();
  const info=playerProfile.levelInfo;
  const streakStatus=getStreakStatus();
  document.getElementById('player-level-badge').textContent=`Lvl ${info.level}`;
  const globalTitleNode=document.getElementById('player-global-title');
  if(globalTitleNode){
    globalTitleNode.textContent=playerProfile.displayedTitle;
    globalTitleNode.className=`player-global-title ${getTitleEffectClass(playerProfile.displayedTitleEffect)}`.trim();
  }
  document.getElementById('player-total-xp').textContent=`${playerProfile.totalXp} XP cumulés`;
  const coinNode=document.getElementById('player-coins');
  if(coinNode){
    coinNode.innerHTML=renderCoinAmount(playerProfile.coins||0);
  }
  const streakNode=document.getElementById('player-streak');
  if(streakNode){
    streakNode.innerHTML=`${renderStreakFlameMarkup(streakStatus.isToday)}Série : ${streakStatus.displayCount} jour${streakStatus.displayCount>1?'s':''}`;
  }
  document.getElementById('player-shields').textContent=`🛡 ${playerProfile.streakShields} bouclier${playerProfile.streakShields>1?'s':''}`;
  document.getElementById('player-sound-pack').textContent=`🔊 Son : ${getSoundPack(playerProfile.soundPack).label}`;
  document.getElementById('player-next-theme').textContent=`Pass suivant : ${getNextThemeGoal(info.level)}`;
  document.getElementById('player-xp-range').textContent=info.level>=XP_RULES.maxLevel
    ? 'Niveau maximum atteint'
    : `${info.currentLevelXp} / ${info.nextLevelXp} XP vers le niveau ${info.level+1}`;
  document.getElementById('player-multiplier').textContent=`Bonus série x${getStreakMultiplier().toFixed(1)}`;
  document.getElementById('xp-track-fill').style.width=info.progressPct+'%';
  const xpHint=document.getElementById('player-xp-hint');
  if(xpHint){
    xpHint.textContent=info.level>=XP_RULES.maxLevel
      ? 'Clique sur la barre pour revoir ton Brevet Pass terminé'
      : `Clique sur la barre pour voir le palier du Brevet Pass au niveau ${Math.min(info.level+1,XP_RULES.maxLevel)}`;
  }
  const nameNode=document.getElementById('player-name');
  if(nameNode){
    const fx=getPlayerNameFxClass(info.level);
    nameNode.textContent=playerProfile.pseudo||'Choisis ton pseudo';
    nameNode.className=`player-name${fx?` ${fx}`:''}`;
  }
  const avatarBtn=document.getElementById('player-avatar-btn');
  const avatarFrame=document.getElementById('player-avatar-frame');
  const avatarImg=document.getElementById('player-avatar-img');
  const avatarOverlay=document.getElementById('player-avatar-overlay');
  if(avatarBtn) avatarBtn.setAttribute('data-border-tier',getAvatarBorderTier(info.level));
  if(avatarFrame) avatarFrame.setAttribute('data-eye-effect',getEyeEffect(playerProfile.userAvatarConfig));
  if(avatarOverlay) avatarOverlay.setAttribute('data-eye-effect',getEyeEffect(playerProfile.userAvatarConfig));
  if(avatarImg) avatarImg.src=generateAvatarUrl(playerProfile.userAvatarConfig);
  document.getElementById('player-specialty').textContent=playerProfile.specialtySubject
    ? `${SUBJ_META[playerProfile.specialtySubject].icon} ${playerProfile.specialtyTitle}`
    : playerProfile.specialtyTitle;
  const vipSubtitle=document.getElementById('vip-card-subtitle');
  if(vipSubtitle){
    vipSubtitle.textContent=`Progression globale, historique récent, temps de révision et rang classé dans un seul menu.`;
  }
  document.body.setAttribute('data-theme',playerProfile.currentTheme||'dark');
  syncBrowserThemeColor(playerProfile.currentTheme||'dark');
  syncThemeAmbience();
  if(activeScreenId==='screen-themes') renderThemeSelector();
  if(activeScreenId==='screen-titles') renderTitleSelector();
  if(activeScreenId==='screen-settings') renderSettingsPanel();
  renderWeakReviewCard();
  if(activeScreenId==='screen-home' || activeScreenId==='screen-daily-challenges') renderDailyChallenges();
  if(activeScreenId==='screen-shop') renderShop();
  if(activeScreenId==='screen-pass') renderBrevetPassScreen();
  updateRankedUI();
  if(activeScreenId==='screen-vip') updateVipUI();
  if(document.getElementById('xp-modal')?.classList.contains('open')) renderXpModal();
}

const ADMIN_SECRET_CODE='admin123';

function getTotalXpFromLevelProgress(level,currentLevelXp=0){
  const safeLevel=Math.max(1,Math.min(XP_RULES.maxLevel,Math.floor(level||1)));
  let totalXp=0;
  for(let current=1;current<safeLevel;current++){
    totalXp+=getLevelRequirement(current);
  }
  if(safeLevel>=XP_RULES.maxLevel) return totalXp;
  const currentCap=Math.max(0,getLevelRequirement(safeLevel)-1);
  return totalXp+Math.max(0,Math.min(currentCap,Math.floor(currentLevelXp||0)));
}

function populateAdminPanel(){
  if(!playerProfile) return;
  syncProfileComputedData();
  const info=playerProfile.levelInfo;
  const streakStatus=getStreakStatus();
  const lvlInput=document.getElementById('admin-level-input');
  const xpInput=document.getElementById('admin-xp-input');
  const shieldInput=document.getElementById('admin-shields-input');
  const coinsInput=document.getElementById('admin-coins-input');
  const streakInput=document.getElementById('admin-streak-input');
  const rankInput=document.getElementById('admin-rank-input');
  const note=document.getElementById('admin-note');
  if(lvlInput) lvlInput.value=String(info.level);
  if(xpInput) xpInput.value=String(info.currentLevelXp);
  if(shieldInput) shieldInput.value=String(playerProfile.streakShields||0);
  if(coinsInput) coinsInput.value=String(playerProfile.coins||0);
  if(streakInput) streakInput.value=String(streakStatus.displayCount);
  if(rankInput){
    rankInput.innerHTML=RANK_TIERS.map(tier=>`<option value="${tier.rp}" ${getRankInfo(rankedProfile?.rp||0).name===tier.name?'selected':''}>${tier.name}</option>`).join('');
  }
  if(note){
    note.textContent=info.level>=XP_RULES.maxLevel
      ? 'Niveau maximum atteint. L’XP saisie sera ignorée tant que le niveau reste au maximum. Les BrevetCoins peuvent être modifiés librement.'
      : `Palier suivant : ${info.nextLevelXp} XP pour le niveau ${info.level+1}. Les BrevetCoins peuvent être ajustés ici aussi.`;
  }
}

function openAdminPanel(){
  populateAdminPanel();
  document.getElementById('admin-modal')?.classList.add('open');
}

function closeAdminPanel(){
  document.getElementById('admin-modal')?.classList.remove('open');
}

function handleAdminAccess(){
  const code=prompt('Code secret admin ?');
  if(code===null) return;
  if(code!==ADMIN_SECRET_CODE){
    showToast('Code admin incorrect.','error');
    return;
  }
  openAdminPanel();
}

function bindAdminLogoAccess(){
  document.querySelectorAll('.logo').forEach(logo=>{
    if(logo.dataset.adminBound==='1') return;
    logo.dataset.adminBound='1';
    logo.addEventListener('dblclick',event=>{
      event.preventDefault();
      handleAdminAccess();
    });
  });
}

function applyAdminChanges(){
  if(!playerProfile) return;
  const lvlValue=Number(document.getElementById('admin-level-input')?.value||1);
  const xpValue=Number(document.getElementById('admin-xp-input')?.value||0);
  const shieldsValue=Number(document.getElementById('admin-shields-input')?.value||0);
  const coinsValue=Number(document.getElementById('admin-coins-input')?.value||0);
  const streakValue=Number(document.getElementById('admin-streak-input')?.value||0);
  const rankRpValue=Number(document.getElementById('admin-rank-input')?.value||0);
  const safeLevel=Math.max(1,Math.min(XP_RULES.maxLevel,Math.floor(lvlValue||1)));
  const safeCurrentXp=Math.max(0,Math.floor(xpValue||0));
  playerProfile.totalXp=getTotalXpFromLevelProgress(safeLevel,safeCurrentXp);
  playerProfile.streakShields=Math.max(0,Math.floor(shieldsValue||0));
  playerProfile.coins=Math.max(0,Math.floor(coinsValue||0));
  playerProfile.shieldMilestone=Math.floor(safeLevel/10)*10;
  if(!streakState) streakState={count:0,lastQuizDate:null};
  streakState.count=Math.max(0,Math.floor(streakValue||0));
  streakState.lastQuizDate=streakState.count>0?getLocalDateKey():null;
  rankedProfile.rp=Math.max(0,Math.floor(rankRpValue||0));
  rankedProfile.peakRp=Math.max(0,Math.floor(rankRpValue||0));
  syncProfileComputedData();
  savePlayerProfile();
  saveStreakState();
  saveRankedProfile();
  refreshPlayerUI();
  populateAdminPanel();
  showToast('Profil admin mis à jour.','admin');
}

function resetAdminProfile(){
  if(!confirm('Remettre complètement le profil à zéro ?')) return;
  playerProfile=loadPlayerProfile();
  playerProfile.pseudo='';
  playerProfile.avatarConfigured=false;
  playerProfile.totalXp=0;
  playerProfile.coins=0;
  playerProfile.xpBySubject=getDefaultXpBySubject();
  playerProfile.unlockedThemes=['dark','light'];
  playerProfile.currentTheme='dark';
  playerProfile.selectedTitle='global:Novice';
  playerProfile.userAvatarConfig=getDefaultAvatarConfig('BrevetPro');
  playerProfile.soundPack='classic';
  playerProfile.unlockedSoundPacks=['classic'];
  playerProfile.unlockedPassTitles=['global:Novice'];
  playerProfile.battlePassPremium=false;
  playerProfile.battlePassClaimedFree=[];
  playerProfile.battlePassClaimedPremium=[];
  playerProfile.streakShields=0;
  playerProfile.shieldMilestone=0;
  playerProfile.badges=[];
  playerProfile.inventory=normalizeInventory({});
  playerProfile.openSelfEvalMode=false;
  playerProfile.level=1;
  playerProfile.stats={
    questionsAnswered:0,
    revisionSeconds:0,
    completedRuns:0,
    answersBySubject:getDefaultAnswerStats(),
    duelWins:0,
    duelLosses:0,
    duelWinStreak:0,
    bestDuelWinStreak:0,
    bestSurvivalTime:0,
    bestSurvivalScore:0,
    coinsEarned:0,
    xp:0
  };
  streakState={count:0,lastQuizDate:null};
  rankedProfile={rp:0,peakRp:0};
  savePlayerProfile();
  saveStreakState();
  saveRankedProfile();
  refreshPlayerUI();
  populateAdminPanel();
  closeAdminPanel();
  maybeOpenOnboarding();
  showToast('Profil remis à zéro.','admin');
}

function updateStreak(){
  if(!streakState || !playerProfile) return false;
  const status=getStreakStatus();
  const previousDisplay=status.displayCount;
  const previousThemes=new Set(playerProfile.unlockedThemes||[]);
  let toastMessage='';

  if(status.isToday) return false;

  if(!streakState.lastQuizDate || (streakState.count||0)<=0){
    streakState.count=1;
  }else if(status.gap===1){
    streakState.count+=1;
  }else if(status.canUseShield){
    playerProfile.streakShields=Math.max(0,playerProfile.streakShields-1);
    streakState.count+=1;
    toastMessage=`🛡 Bouclier utilisé. Série sauvée à ${streakState.count} jours.`;
  }else{
    streakState.count=1;
  }

  streakState.lastQuizDate=getLocalDateKey();
  playerProfile.inventory=normalizeInventory(playerProfile.inventory||{});
  playerProfile.inventory.shield=Math.max(0,playerProfile.streakShields||0);
  syncProfileComputedData();
  if(streakState.count!==previousDisplay){
    state.pendingStreakCelebration=buildStreakCelebrationPayload(previousDisplay,streakState.count);
  }
  saveStreakState();
  savePlayerProfile();
  refreshPlayerUI();

  if(!toastMessage && streakState.count===1 && previousDisplay!==1){
    toastMessage='Série lancée ! Reviens demain pour toucher ton premier bonus de BrevetCoins.';
  }
  const newThemes=playerProfile.unlockedThemes.filter(themeKey=>!previousThemes.has(themeKey));
  if(newThemes.length){
    state.unlockedThemesThisRun.push(...newThemes.filter(themeKey=>!state.unlockedThemesThisRun.includes(themeKey)));
    showToast(`Thème débloqué : ${THEMES[newThemes[0]].label}`,'theme');
  }
  const streakCoins=getStreakCoinReward(streakState.count);
  if(streakCoins>0){
    awardCoins(streakCoins,`Série de ${streakState.count} jours !`);
  }
  if(toastMessage) showToast(toastMessage,'streak');
  return true;
}

function updateStreakAfterCompletedQuiz(){
  return updateStreak();
}

function addXP(amount,subject=state.subject,applyMultiplier=true){
  if(!playerProfile || !amount) return 0;
  syncProfileComputedData();
  const multiplier=getStreakMultiplier();
  const actual=applyMultiplier?Math.round(amount*multiplier):Math.max(0,Math.round(amount));
  const previousLevel=playerProfile.levelInfo?.level||1;
  const previousThemes=new Set(playerProfile.unlockedThemes||[]);
  const previousPacks=new Set(playerProfile.unlockedSoundPacks||[]);
  const previousWorkshopUnlocks=getWorkshopUnlockCount(previousLevel);
  playerProfile.totalXp+=actual;
  if(subject && playerProfile.xpBySubject[subject]!==undefined){
    playerProfile.xpBySubject[subject]+=actual;
  }
  state.sessionEarnedXp+=actual;
  if(!dailyChallengeRewardLock){
    ensureDailyChallenges();
    dailyChallengeState.stats.xpGained+=actual;
    saveDailyChallenges();
  }
  syncProfileComputedData();
  if(playerProfile.levelInfo.level>previousLevel){
    const tracks=playerProfile.battlePassPremium?['free','premium']:['free'];
    claimBattlePassRewardsInRange(previousLevel+1,playerProfile.levelInfo.level,{tracks,silent:false});
    syncProfileComputedData();
  }
  const newThemes=playerProfile.unlockedThemes.filter(themeKey=>!previousThemes.has(themeKey));
  const newPacks=playerProfile.unlockedSoundPacks.filter(key=>!previousPacks.has(key));
  const workshopUnlockGain=getWorkshopUnlockCount(playerProfile.levelInfo.level)-previousWorkshopUnlocks;
  if(newThemes.length){
    state.unlockedThemesThisRun.push(...newThemes.filter(themeKey=>!state.unlockedThemesThisRun.includes(themeKey)));
    const nonPassTheme=newThemes.find(themeKey=>!THEMES[themeKey]?.passManaged);
    if(nonPassTheme){
      showToast(`Thème débloqué : ${THEMES[nonPassTheme].label}`,'theme');
    }
  }
  if(workshopUnlockGain>0){
    showToast('Toutes les options de l’Atelier sont maintenant disponibles.','avatar');
  }
  if(newPacks.length){
    const nonPassPack=newPacks.find(key=>!SOUND_PACKS[key]?.passManaged);
    if(nonPassPack){
      showToast(`Pack débloqué : ${SOUND_PACKS[nonPassPack].label}`,'sound');
    }
  }
  if(playerProfile.levelInfo.level>previousLevel){
    playEffect('level');
    triggerVibration('level');
    showToast(`Niveau ${playerProfile.levelInfo.level} atteint !`,'level');
  }
  savePlayerProfile();
  refreshPlayerUI();
  if(!dailyChallengeRewardLock) syncDailyChallenges();
  return actual;
}

function awardXp(baseAmount,subject){
  if(!playerProfile || !baseAmount) return 0;
  return addXP(baseAmount,subject);
}

function getQuestionXpValue(q,isBB=false){
  return getQuestionXpBase(q,isBB);
}

function markCorrectAnswer(q,isBB=false){
  recordAnsweredQuestion(q,isBB);
  state.score++;
  state.correctAnswersInRun++;
  advanceCombo();
  playEffect('success');
  triggerVibration('success');
  registerDailyAnswer(true);
  clearWeakQuestion(q);
  const subjectKey=isBB
    ? (q._subj||state.subject)
    : ((state.mode==='ranked' || state.mode==='duel' || state.mode==='survival') ? (q._subj||state.subject) : state.subject);
  if(isBB){
    if(!state.bbBySubject[subjectKey]) state.bbBySubject[subjectKey]={correct:0,total:0};
    state.bbBySubject[subjectKey].total++;
    state.bbBySubject[subjectKey].correct++;
  }
  const questionXp=Math.max(1,Math.round(getQuestionXpValue(q,isBB)*getActiveQuestionXpMultiplier()));
  addXP(questionXp,subjectKey);
}

function markWrongAnswer(q,isBB=false){
  recordAnsweredQuestion(q,isBB);
  playEffect('error');
  triggerVibration('error');
  state.correctAnswersInRun=0;
  breakCombo();
  registerDailyAnswer(false);
  rememberWeakQuestion(q);
  if(isBB){
    const subjectKey=q._subj||state.subject;
    if(!state.bbBySubject[subjectKey]) state.bbBySubject[subjectKey]={correct:0,total:0};
    state.bbBySubject[subjectKey].total++;
  }
}

function updateScoreDisplays(){
  const scoreText='Score : '+state.score;
  const quizScore=document.getElementById('q-score-live');
  const bbScore=document.getElementById('bb-score-live');
  if(quizScore) quizScore.textContent=scoreText;
  if(bbScore) bbScore.textContent=scoreText;
}

function buildFeedbackPayload(q,showExpected=false,extra={}){
  return {
    expected:showExpected?getCorrectAnswerText(q):'',
    explanation:getExplanation(q),
    note:'',
    ...extra
  };
}

function registerRunStats(total,elapsed){
  if(!playerProfile) return;
  playerProfile.stats.questionsAnswered+=Math.max(0,total||0);
  playerProfile.stats.revisionSeconds+=Math.max(0,elapsed||0);
  playerProfile.stats.completedRuns+=1;
  Object.entries(state.runSubjectCounts||{}).forEach(([subjectKey,count])=>{
    if(playerProfile.stats.answersBySubject[subjectKey]!==undefined){
      playerProfile.stats.answersBySubject[subjectKey]+=count;
    }
  });
}

function buildResultsRewardSummary(){
  const levelSummary=document.getElementById('result-level-summary');
  const specialtySummary=document.getElementById('result-specialty-summary');
  const themeSummary=document.getElementById('result-theme-unlock');
  const xpEarned=document.getElementById('result-xp-earned');
  if(xpEarned) xpEarned.innerHTML=state.mode==='ranked'
    ? `✨ <strong>+${state.sessionEarnedXp} XP</strong> · 🏆 ${state.rankedRpDelta>=0?'+':''}${state.rankedRpDelta} RP`
    : `✨ <strong>+${state.sessionEarnedXp} XP</strong>`;
  if(levelSummary) levelSummary.innerHTML=`📈 <strong>Lvl ${playerProfile.levelInfo.level}</strong> ${playerProfile.displayedTitle}`;
  if(specialtySummary){
    specialtySummary.textContent=playerProfile.specialtySubject
      ? `${SUBJ_META[playerProfile.specialtySubject].icon} ${playerProfile.specialtyTitle}`
      : playerProfile.specialtyTitle;
  }
  if(themeSummary){
    themeSummary.textContent=state.unlockedThemesThisRun.length
      ? `🎨 Nouveau thème : ${state.unlockedThemesThisRun.map(themeKey=>THEMES[themeKey].label).join(', ')}`
      : '🎨 Aucun thème débloqué cette session';
  }
}

async function renderSheets(){
  if(!await ensureQuestionBankLoaded({silent:true})) return;
  const toolbar=document.getElementById('sheet-subject-toolbar');
  const stack=document.getElementById('sheet-stack');
  if(!toolbar||!stack) return;
  toolbar.innerHTML=SUBJECT_KEYS.map(subject=>`<button class="subject-pill ${subject===currentSheetSubject?'active':''}" onclick="setSheetSubject('${subject}')">${SUBJ_META[subject].icon} ${SUBJ_META[subject].name}</button>`).join('');
  const cards=REVISION_SHEETS[currentSheetSubject]||[];
  const cardHtml=cards.map(sheet=>`
    <article class="sheet-card">
      <div class="sheet-head">
        <div>
          <div class="sheet-title">${SUBJ_META[currentSheetSubject].icon} ${sheet.chapter}</div>
          <div class="section-subtitle" style="margin:6px 0 0;text-align:left">${SUBJ_META[currentSheetSubject].name} · fiche visuelle</div>
        </div>
        <div class="sheet-badge">Lecture rapide · exemples concrets</div>
      </div>
      <div class="sheet-grid">
        <div class="sheet-section">
          <h4>À retenir</h4>
          <div class="sheet-points">
            ${sheet.points.map(point=>`<div class="sheet-point"><i>${point.icon}</i><div>${escapeHTML(point.text)}</div></div>`).join('')}
          </div>
          <div class="sheet-tags">${sheet.tags.map(tag=>`<span class="sheet-tag">${escapeHTML(tag)}</span>`).join('')}</div>
        </div>
        <div class="sheet-section">
          <h4>Repères visuels</h4>
          <div class="sheet-visual-grid">
            ${sheet.visuals.map(item=>`
              <div class="sheet-visual-card">
                <img class="sheet-visual-image" src="${getSheetIllustrationUrl(currentSheetSubject,sheet.chapter,item)}" alt="${escapeHTML(item.title)}">
                <div class="sheet-visual-head">
                  <div class="sheet-art ${item.art}"></div>
                  <div>
                    <span class="sheet-visual-kicker">${escapeHTML(item.kicker)}</span>
                    <div class="sheet-visual-title">${escapeHTML(item.title)}</div>
                  </div>
                </div>
                <div class="sheet-visual-copy">${escapeHTML(item.copy)}</div>
              </div>
            `).join('')}
          </div>
        </div>
        ${sheet.timeline?.length?`
          <div class="sheet-section">
            <h4>Repères et cartes</h4>
            <div class="sheet-timeline">
              ${sheet.timeline.map(item=>`
                <div class="timeline-item">
                  <div class="timeline-date">${escapeHTML(item.label)}</div>
                  <div class="timeline-copy">${escapeHTML(item.copy)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `:''}
      </div>
    </article>
  `).join('');
  const writingTopics=REDACTION_TOPICS[currentSheetSubject]||[];
  const writingHtml=writingTopics.length?`
    <div class="sheet-divider"><span>Sujets probables</span></div>
    ${writingTopics.map(topic=>`
      <article class="sheet-card">
        <div class="sheet-head">
          <div>
            <div class="sheet-title">Sujet - ${escapeHTML(topic.title)}</div>
            <div class="section-subtitle" style="margin:6px 0 0;text-align:left">Sujet probable distinct de la fiche chapitre</div>
          </div>
          <div class="sheet-badge">Plan + mots utiles</div>
        </div>
        <div class="sheet-grid">
          <div class="sheet-section">
            <h4>Angle de réponse</h4>
            <div class="sheet-point"><i>Plan</i><div>${escapeHTML(topic.intro)}</div></div>
            <div class="sheet-points" style="margin-top:12px">
              ${topic.axes.map(axis=>`<div class="sheet-point"><i>Axe</i><div>${escapeHTML(axis)}</div></div>`).join('')}
            </div>
            <div class="redaction-words">${topic.words.map(word=>`<span>${escapeHTML(word)}</span>`).join('')}</div>
          </div>
          <div class="sheet-section">
            <h4>Repères utiles</h4>
            <img class="sheet-visual-image" src="${getSheetIllustrationUrl(currentSheetSubject,topic.title,{title:'Sujet probable',kicker:'Plan rapide',copy:topic.intro})}" alt="${escapeHTML(topic.title)}">
            <div class="sheet-steps">
              ${topic.map.map((node,idx)=>`
                <div class="sheet-step">
                  <div class="sheet-step-num">${idx+1}</div>
                  <div><strong>${['Ouverture','Axe 1','Axe 2','Conclusion'][idx]||`Idée ${idx+1}`}</strong><br>${escapeHTML(node)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </article>
    `).join('')}
  `:'';
  stack.innerHTML=cardHtml+writingHtml;
}
async function setSheetSubject(subject){
  currentSheetSubject=subject;
  await renderSheets();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
async function startSubject(subj){
  if(!await ensureQuestionBankLoaded()) return;
  resetDuelState();
  clearSurvivalTimer();
  state.subject=subj; state.chapters=[]; state.isBrevetBlanc=false; state.mode='standard';
  renderChapters(subj); showScreen('screen-chapters');
}

function renderChapters(subj){
  const m=SUBJ_META[subj];
  document.getElementById('chapters-title').textContent=`${m.icon} Chapitres — ${m.name}`;
  const list=document.getElementById('chapter-list');
  list.innerHTML='';
  Object.keys(DIFFICULTY_TARGETS).forEach(diff=>{
    const desc=document.getElementById(`diff-desc-${diff}`);
    if(desc) desc.textContent='0 question';
  });
  Object.keys(DB[subj]).forEach((ch,i)=>{
    const btn=document.createElement('button');
    btn.className='chapter-btn'+(m.chapClass?' '+m.chapClass:'');
    const qc=DB[subj][ch].length;
    btn.innerHTML=`<div class="chapter-num">${i+1}</div><div class="chapter-info"><strong>${ch}</strong><span>${qc} question${qc>1?'s':''}</span></div>`;
    btn.onclick=()=>toggleChapter(ch,btn);
    list.appendChild(btn);
  });
}

function toggleChapter(ch,btn){
  playEffect('click');
  if(state.chapters.includes(ch)){state.chapters=state.chapters.filter(c=>c!==ch);btn.classList.remove('selected');}
  else{state.chapters.push(ch);btn.classList.add('selected');}
  updateDifficultyOptions();
}

function selectAllChapters(){
  playEffect('toggle');
  state.chapters=Object.keys(DB[state.subject]);
  document.querySelectorAll('.chapter-btn').forEach(b=>b.classList.add('selected'));
  showToast('Tout le programme sélectionné.','success');
  updateDifficultyOptions();
}

function goToDifficulty(){
  playEffect('click');
  if(!state.chapters.length){showToast('Sélectionnez au moins un chapitre.','warning');return;}
  updateDifficultyOptions();
  showScreen('screen-difficulty');
}

function selectDiff(d,btn){
  playEffect('toggle');
  state.difficulty=d;
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

function toggleOption(opt,btn){
  playEffect('toggle');
  state.options[opt]=!state.options[opt];
  btn.classList.toggle('active');
  if(opt==='duel' && state.options.duel){
    state.options.survival=false;
    document.getElementById('btn-survival')?.classList.remove('active');
  }
  if(opt==='survival' && state.options.survival){
    state.options.duel=false;
    document.getElementById('btn-duel')?.classList.remove('active');
    state.options.timer=false;
    document.getElementById('btn-timer')?.classList.remove('active');
  }
  renderDuelDifficultyRow();
}

function getQuestionsForDifficulty(subject,chapters,difficulty){
  const pool=[];
  chapters.forEach(ch=>pool.push(...(DB[subject]?.[ch]||[]).filter(q=>q.diff===difficulty)));
  return shuffle(pool);
}

function updateDifficultyOptions(){
  if(!state.subject || !state.chapters.length) return;
  const counts={
    facile:getQuestionsForDifficulty(state.subject,state.chapters,'facile').length,
    normal:getQuestionsForDifficulty(state.subject,state.chapters,'normal').length,
    difficile:getQuestionsForDifficulty(state.subject,state.chapters,'difficile').length
  };
  Object.entries(DIFFICULTY_TARGETS).forEach(([diff,target])=>{
    const available=counts[diff];
    const actual=Math.min(target,available);
    const desc=document.getElementById(`diff-desc-${diff}`);
    const btn=document.getElementById(`diff-btn-${diff}`);
    if(desc) desc.textContent=`${actual} question${actual>1?'s':''}${available<target && available>0?' disponibles':''}${available===0?' disponible':''}`;
    if(btn){
      btn.disabled=available===0;
      btn.style.opacity=available===0?'.55':'1';
      btn.style.cursor=available===0?'not-allowed':'pointer';
    }
  });
  if(counts[state.difficulty]===0){
    const fallback=['normal','facile','difficile'].find(diff=>counts[diff]>0);
    if(fallback){
      state.difficulty=fallback;
      document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected'));
      document.getElementById(`diff-btn-${fallback}`)?.classList.add('selected');
    }
  }
}

/* ============================================================
   MOTEUR QUIZ STANDARD
   ============================================================ */
function buildPool(){
  const exactPool=getQuestionsForDifficulty(state.subject,state.chapters,state.difficulty);
  const filteredPool=state.options.duel?exactPool.filter(isRapidModeQuestion):exactPool;
  const target=DIFFICULTY_TARGETS[state.difficulty];
  return filteredPool.slice(0,Math.min(target,filteredPool.length));
}

function buildWeakReviewPool(){
  return shuffle(
    weakQuestionIds
      .map(id=>QUESTION_LOOKUP[id])
      .filter(Boolean)
      .map(question=>({...question,_subj:question._subj,_chapter:question._chapter}))
  );
}

async function startWeakReview(){
  if(!await ensureQuestionBankLoaded()) return;
  const selected=buildWeakReviewPool().slice(0,15);
  if(!selected.length){
    showToast('Aucune question ratée enregistrée pour le moment.','info');
    return;
  }
  resetDuelState();
  clearSurvivalTimer();
  state.mode='weak';
  state.subject=selected[0]?._subj||'histoire';
  state.chapters=['Points faibles'];
  state.questions=selected;
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;state.isBrevetBlanc=false;state.rankedTier=null;state.rankedRpDelta=0;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];
  resetRunHelpers();
  const first=selected[0];
  const meta=SUBJ_META[first?._subj]||SUBJ_META.histoire;
  const st=document.getElementById('q-subject-tag');
  st.textContent=`🎯 ${meta.name}`;
  st.className='quiz-tag gold';
  document.getElementById('q-chapter-tag').textContent=`${selected.length} question${selected.length>1?'s':''} ciblée${selected.length>1?'s':''}`;
  document.getElementById('q-diff-tag').textContent='Révision ciblée';
  document.getElementById('q-total').textContent=selected.length;
  document.getElementById('timer-display').style.display='none';
  showScreen('screen-quiz');
  renderQuestion();
}

function startQuiz(){
  if(state.options.survival && !state.options.duel){
    startSurvivalMode({
      subject:state.subject,
      chapters:[...state.chapters],
      label:state.chapters.length===1?`${SUBJ_META[state.subject].icon} ${state.chapters[0]}`:`${SUBJ_META[state.subject].icon} Survie personnalisée`
    });
    return;
  }
  resetDuelState();
  clearSurvivalTimer();
  state.questions=buildPool();
  if(!state.questions.length){showToast('Aucune question disponible.','warning');return;}
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;state.isBrevetBlanc=false;state.mode=state.options.duel?'duel':'standard';state.rankedTier=null;state.rankedRpDelta=0;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];
  resetRunHelpers();

  const m=SUBJ_META[state.subject];
  const diffLabel={facile:'🌱 Facile',normal:'🎯 Normal',difficile:'🔥 Difficile'}[state.difficulty];
  const duelLabel=getDuelDifficultyConfig().label;
  const st=document.getElementById('q-subject-tag');
  st.textContent=m.icon+' '+m.name; st.className='quiz-tag '+m.tagClass;
  document.getElementById('q-chapter-tag').textContent=state.chapters.length===1?state.chapters[0]:state.chapters.length+' chapitres';
  document.getElementById('q-diff-tag').textContent=state.mode==='duel'
    ? `🤖 Duel · ${duelLabel} · ${diffLabel}`
    : diffLabel;
  document.getElementById('q-total').textContent=state.questions.length;
  document.getElementById('timer-display').style.display=state.options.timer?'flex':'none';

  showScreen('screen-quiz');
  if(state.mode==='duel') startDuelMode();
  renderQuestion();
}

function openRankedHub(){
  showScreen('screen-ranked-hub');
}

function buildRankedPool(rankInfo){
  let pool=[];
  SUBJECT_KEYS.forEach(subject=>{
    Object.keys(DB[subject]).forEach(chapter=>{
      pool.push(...DB[subject][chapter]
        .filter(q=>rankInfo.diffs.includes(q.diff))
        .map(q=>({...q,_subj:subject,_chapter:chapter}))
      );
    });
  });
  return shuffle(pool).sort((a,b)=>({facile:1,normal:2,difficile:3}[b.diff]-{facile:1,normal:2,difficile:3}[a.diff])).slice(0,Math.min(rankInfo.count,pool.length));
}

async function startRankedQuiz(){
  if(!await ensureQuestionBankLoaded()) return;
  resetDuelState();
  clearSurvivalTimer();
  if(playerProfile.levelInfo.level<MIN_RANKED_LEVEL){
    showToast(`Le mode classé se débloque au niveau ${MIN_RANKED_LEVEL}.`,'locked');
    return;
  }
  const rankInfo=getRankInfo(rankedProfile.rp);
  const selected=buildRankedPool(rankInfo);
  if(!selected.length){showToast('Pas assez de questions pour lancer le classé.','warning');return;}
  state.mode='ranked';
  state.rankedTier=rankInfo;
  state.rankedRpDelta=0;
  state.questions=selected;
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;state.isBrevetBlanc=false;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];
  resetRunHelpers();

  const st=document.getElementById('q-subject-tag');
  st.textContent=`🏆 ${rankInfo.name}`;
  st.className='quiz-tag gold';
  document.getElementById('q-chapter-tag').textContent=`Classé · ${rankInfo.diffs.join(' + ')}`;
  document.getElementById('q-diff-tag').textContent=`${selected.length} questions`;
  document.getElementById('q-total').textContent=selected.length;
  document.getElementById('timer-display').style.display='none';

  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion(){
  const q=state.questions[state.currentIdx];
  stopSpeech();
  state.pendingSelfEval=null;
  state.answered=false;state.matchState={selected:null,pairs:{},done:0,total:0};
  state.questionAid=createDefaultQuestionAidState();
  const progressBase=isSurvivalRun()
    ? ((state.survival.questionsAnswered%10)/10)*100
    : ((state.currentIdx/state.questions.length)*100);
  document.getElementById('progress-fill').style.width=progressBase+'%';
  document.getElementById('q-current').textContent=isSurvivalRun()?state.survival.questionsAnswered+1:state.currentIdx+1;
  document.getElementById('q-score-live').textContent='Score : '+state.score;
  document.getElementById('feedback-container').innerHTML='';
  document.getElementById('next-btn-wrap').style.display='none';
  if(state.mode==='ranked' && q._subj){
    document.getElementById('q-chapter-tag').textContent=`${SUBJ_META[q._subj].icon} ${q._chapter||SUBJ_META[q._subj].name}`;
  }
  if(state.mode==='weak' && q._subj){
    const meta=SUBJ_META[q._subj]||SUBJ_META.histoire;
    const subjectTag=document.getElementById('q-subject-tag');
    if(subjectTag){
      subjectTag.textContent=`${meta.icon} ${meta.name}`;
      subjectTag.className=`quiz-tag ${meta.tagClass}`;
    }
    document.getElementById('q-chapter-tag').textContent=q._chapter||meta.name;
    document.getElementById('q-diff-tag').textContent={
      facile:'🌱 Facile',
      normal:'🎯 Normal',
      difficile:'🔥 Difficile'
    }[q.diff]||'Révision ciblée';
  }
  document.getElementById('question-card').innerHTML=renderQHTML(q);
  setSurvivalHudVisible(isSurvivalRun());
  if(isSurvivalRun()) updateSurvivalHud();
  updateComboHud();
  renderQuizUtilityBar();
  if(isDuelRun()){
    setDuelHudVisible(true);
    updateDuelHud(performance.now());
  }else{
    setDuelHudVisible(false);
  }
  if(state.options.timer) startTimer();
}

/* ============================================================
   MOTEUR BREVET BLANC
   ============================================================ */
async function startBrevetBlanc(){
  if(!await ensureQuestionBankLoaded()) return;
  resetDuelState();
  clearSurvivalTimer();
  // Build 30 questions from ALL subjects
  let allQ=[];
  SUBJECT_KEYS.forEach(subj=>{
    Object.keys(DB[subj]).forEach(ch=>{
      DB[subj][ch].forEach(q=>allQ.push({...q,_subj:subj}));
    });
  });
  allQ=shuffle(allQ);
  // Try to balance: ~5 per subject
  const bySubj={};SUBJECT_KEYS.forEach(s=>bySubj[s]=[]);
  allQ.forEach(q=>bySubj[q._subj].push(q));
  let selected=[];
  const perSubj=Math.floor(30/SUBJECT_KEYS.length);
  Object.keys(bySubj).forEach(s=>selected.push(...bySubj[s].slice(0,perSubj)));
  // Fill remaining spots
  const remaining=shuffle(allQ.filter(q=>!selected.includes(q)));
  while(selected.length<30 && remaining.length) selected.push(remaining.pop());
  selected=shuffle(selected).slice(0,30);

  state.isBrevetBlanc=true; state.mode='brevet'; state.rankedTier=null; state.rankedRpDelta=0;
  state.questions=selected;
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];
  state.bbBySubject={};SUBJECT_KEYS.forEach(s=>state.bbBySubject[s]={correct:0,total:0});
  resetRunHelpers();

  // Global timer 15 min = 900s
  state.bbTimeLeft=900;
  startGlobalTimer();

  showScreen('screen-bb-quiz');
  renderBBQuestion();
}

function startGlobalTimer(){
  clearInterval(state.bbGlobalTimerInterval);
  updateGlobalTimerDisplay();
  state.bbGlobalTimerInterval=setInterval(()=>{
    state.bbTimeLeft--;
    updateGlobalTimerDisplay();
    if(state.bbTimeLeft<=0){
      clearInterval(state.bbGlobalTimerInterval);
      showToast('Temps écoulé !','error');
      showResults(true);
    }
  },1000);
}

function updateGlobalTimerDisplay(){
  const v=document.getElementById('gtimer-val');
  const f=document.getElementById('gtimer-fill');
  const b=document.getElementById('global-timer-bar');
  if(!v) return;
  v.textContent=formatMMSS(state.bbTimeLeft);
  const pct=(state.bbTimeLeft/900)*100;
  if(f) f.style.width=pct+'%';
  const isLow=state.bbTimeLeft<=120;
  if(b) b.classList.toggle('warning',isLow);
  if(f){f.classList.toggle('low',isLow);}
}

function renderBBQuestion(){
  const q=state.questions[state.currentIdx];
  stopSpeech();
  state.answered=false;state.matchState={selected:null,pairs:{},done:0,total:0};
  document.getElementById('bb-progress-fill').style.width=((state.currentIdx/30)*100)+'%';
  document.getElementById('bb-current').textContent=state.currentIdx+1;
  document.getElementById('bb-score-live').textContent='Score : '+state.score;
  document.getElementById('bb-feedback-container').innerHTML='';
  document.getElementById('bb-next-btn-wrap').style.display='none';
  const m=SUBJ_META[q._subj||state.subject];
  document.getElementById('bb-subject-tag').textContent=m.icon+' '+m.name;
  document.getElementById('bb-subject-tag').className='quiz-tag '+m.tagClass;
  document.getElementById('bb-question-card').innerHTML=renderQHTML(q,true);
}

function bbNextQuestion(){
  state.currentIdx++;
  if(state.currentIdx>=state.questions.length){showResults(true);return;}
  renderBBQuestion();
}

/* ============================================================
   RENDU QUESTIONS (partagé quiz + brevet blanc)
   ============================================================ */
function renderQHTML(q,isBB=false){
  const prefix=isBB?'bb-':'';
  const handlerPrefix=isBB?'bb_':'';
  const tl={mcq:'🔘 QCM',tf:'✅ Vrai ou Faux',open:'✏️ Question ouverte',input:'✏️ Question ouverte',date:'📅 Associer dates et événements'};
  let html=`<div class="q-type-badge">${tl[q.type]||'Question'}</div><div class="question-text">${q.q||"Associez chaque date à l'événement correspondant :"}</div>`;
  if(q.type==='mcq'){
    const L=['A','B','C','D'];
    html+='<div class="options-list">';
    q.opts.forEach((opt,i)=>html+=`<button class="option-btn" onclick="${handlerPrefix}answerMCQ(${i})" id="${prefix}opt-${i}"><span class="option-letter">${L[i]}</span>${opt}</button>`);
    html+='</div>';
  }else if(q.type==='tf'){
    html+=`<div class="tf-row"><button class="tf-btn" id="${prefix}tf-true" onclick="${handlerPrefix}answerTF(true)">✅ Vrai</button><button class="tf-btn" id="${prefix}tf-false" onclick="${handlerPrefix}answerTF(false)">❌ Faux</button></div>`;
  }else if(q.type==='open' || q.type==='input'){
    html+=`<div class="open-input-wrap"><textarea class="open-input" id="${prefix}open-ans" placeholder="Saisissez votre réponse..." rows="3"></textarea><button class="btn-primary" onclick="${handlerPrefix}answerOpen()" style="align-self:flex-start">Valider →</button></div>`;
  }else if(q.type==='date'){
    html+=renderDateMatch(q,isBB);
  }
  return html;
}

function renderDateMatch(q,isBB=false){
  const prefix=isBB?'bb-':'';
  const se=shuffle(q.events.map((e,i)=>({e,i})));
  const sd=shuffle(q.dates.map((d,i)=>({d,i})));
  state.matchState.total=q.dates.length;
  let h='<div class="match-grid"><div class="match-col"><div class="match-col-title">📅 Dates</div>';
  sd.forEach(({d,i})=>h+=`<div class="match-item" data-type="date" data-idx="${i}" data-bb="${isBB?1:0}" onclick="selectMatch(this)">${d}</div>`);
  h+='</div><div class="match-col"><div class="match-col-title">📌 Événements</div>';
  se.forEach(({e,i})=>h+=`<div class="match-item" data-type="event" data-idx="${i}" data-bb="${isBB?1:0}" onclick="selectMatch(this)">${e}</div>`);
  h+='</div></div>';
  return h;
}

function selectMatch(el){
  if(el.classList.contains('matched'))return;
  const ms=state.matchState,type=el.dataset.type,idx=parseInt(el.dataset.idx),isBB=el.dataset.bb==='1';
  if(!ms.selected){if(type==='date'){ms.selected={el,idx};el.classList.add('selected-a');}return;}
  if(ms.selected.el===el){el.classList.remove('selected-a');ms.selected=null;return;}
  if(type==='date'){ms.selected.el.classList.remove('selected-a');ms.selected={el,idx};el.classList.add('selected-a');return;}
  if(ms.selected.idx===idx){
    ms.selected.el.classList.remove('selected-a');ms.selected.el.classList.add('matched');el.classList.add('matched');
    ms.done++;ms.selected=null;
    if(ms.done===ms.total) completeDateMatch(isBB);
  }else{
    const prev=ms.selected;
    prev.el.classList.remove('selected-a');prev.el.classList.add('wrong-match');el.classList.add('wrong-match');
    ms.selected=null;
    setTimeout(()=>{prev.el.classList.remove('wrong-match');el.classList.remove('wrong-match');},600);
  }
}

function completeDateMatch(isBB=false){
  const q=state.questions[state.currentIdx];
  stopTimer();
  markCorrectAnswer(q,isBB);
  updateScoreDisplays();
  showFeedback(true,'✅ Parfait !',buildFeedbackPayload(q),isBB);
  if(!isBB && handleAnswerForSurvival(true)) return;
  if(!isBB && handlePlayerAnswerForDuel(true)) return;
  showNextButton(isBB);state.answered=true;
}

/* ── Standard quiz answer functions ── */
function answerMCQ(i){
  if(state.answered)return;
  state.answered=true;stopTimer();
  const q=state.questions[state.currentIdx];
  const ok=i===q.ans;
  document.querySelectorAll('.option-btn').forEach((b,j)=>{b.disabled=true;if(j===q.ans)b.classList.add('correct');else if(j===i&&!ok)b.classList.add('wrong');});
  if(ok){markCorrectAnswer(q,false);}else{
    markWrongAnswer(q,false);
    state.errors.push({q:q.q,yours:q.opts[i],correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }
  updateScoreDisplays();
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Mauvaise réponse',buildFeedbackPayload(q,!ok),false);
  if(handleAnswerForSurvival(ok)) return;
  if(handlePlayerAnswerForDuel(ok)) return;
  showNextButton();
}
function answerTF(ans){
  if(state.answered)return;
  state.answered=true;stopTimer();
  const q=state.questions[state.currentIdx];
  const ok=ans===q.ans;
  ['tf-true','tf-false'].forEach(id=>{const b=document.getElementById(id);if(b)b.disabled=true;});
  (q.ans?document.getElementById('tf-true'):document.getElementById('tf-false'))?.classList.add('correct');
  if(!ok){
    (ans?document.getElementById('tf-true'):document.getElementById('tf-false'))?.classList.add('wrong');
    markWrongAnswer(q,false);
    state.errors.push({q:q.q,yours:ans?'Vrai':'Faux',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }else{
    markCorrectAnswer(q,false);
  }
  updateScoreDisplays();
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Mauvaise réponse',buildFeedbackPayload(q,!ok),false);
  if(handleAnswerForSurvival(ok)) return;
  if(handlePlayerAnswerForDuel(ok)) return;
  showNextButton();
}
function answerOpen(){
  if(state.answered)return;
  state.answered=true;stopTimer();
  const q=state.questions[state.currentIdx];
  const ua=(document.getElementById('open-ans')?.value||'').trim();
  const validation=isOpenAnswerValid(q,ua);
  const ok=validation.ok;
  const ta=document.getElementById('open-ans');
  if(ta)ta.disabled=true;
  if(!ok && playerProfile?.openSelfEvalMode){
    state.pendingSelfEval={q,ua};
    showFeedback(false,'🤔 Auto-évaluation',{
      expected:getCorrectAnswerText(q),
      explanation:'Compare ta réponse avec la correction puis choisis ton niveau de validation.',
      note:'Mode auto-évaluation actif pour les réponses ouvertes.',
      actions:`
        <button class="feedback-action" onclick="resolveOpenSelfEval('yes')">Oui</button>
        <button class="feedback-action" onclick="resolveOpenSelfEval('partial')">Partiellement</button>
        <button class="feedback-action" onclick="resolveOpenSelfEval('no')">Non</button>
      `
    },false);
    return;
  }
  if(ok){
    markCorrectAnswer(q,false);
  }else{
    markWrongAnswer(q,false);
    state.errors.push({q:q.q,yours:ua||'(vide)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }
  updateScoreDisplays();
  showFeedback(
    ok,
    ok?'✅ Bonne réponse !':'❌ Réponse insuffisante',
    buildFeedbackPayload(q,!ok,{
      note:ok && validation.usedTolerance ? 'Réponse acceptée malgré une petite faute !' : ''
    }),
    false
  );
  if(handleAnswerForSurvival(ok)) return;
  if(handlePlayerAnswerForDuel(ok)) return;
  showNextButton();
}

function resolveOpenSelfEval(result){
  const pending=state.pendingSelfEval;
  if(!pending) return;
  state.pendingSelfEval=null;
  const {q,ua}=pending;
  const accepted=result==='yes' || result==='partial';
  if(accepted){
    markCorrectAnswer(q,false);
    updateScoreDisplays();
    showFeedback(
      true,
      result==='yes'?'✅ Réponse validée':'🟡 Réponse partiellement validée',
      {
        expected:getCorrectAnswerText(q),
        explanation:result==='yes'
          ? 'Validation manuelle confirmée. La compréhension est acceptée.'
          : 'Validation partielle acceptée. Continue à préciser ta formulation pour viser une réponse parfaite.',
        note:'Réponse évaluée manuellement.'
      },
      false
    );
  }else{
    markWrongAnswer(q,false);
    state.errors.push({q:q.q,yours:ua||'(vide)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
    updateScoreDisplays();
    showFeedback(false,'❌ Réponse à retravailler',buildFeedbackPayload(q,true),false);
  }
  if(handleAnswerForSurvival(accepted)) return;
  if(handlePlayerAnswerForDuel(accepted)) return;
  showNextButton();
}

/* ── Brevet Blanc answer functions ── */
function bb_answerMCQ(i){
  if(state.answered)return;
  state.answered=true;
  const q=state.questions[state.currentIdx];
  const ok=i===q.ans;
  document.querySelectorAll('#bb-question-card .option-btn').forEach((b,j)=>{b.disabled=true;if(j===q.ans)b.classList.add('correct');else if(j===i&&!ok)b.classList.add('wrong');});
  if(ok){markCorrectAnswer(q,true);}else{
    markWrongAnswer(q,true);
    state.errors.push({q:q.q,yours:q.opts[i],correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }
  updateScoreDisplays();
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Mauvaise réponse',buildFeedbackPayload(q,!ok),true);
  showNextButton(true);
}
function bb_answerTF(ans){
  if(state.answered)return;
  state.answered=true;
  const q=state.questions[state.currentIdx];
  const ok=ans===q.ans;
  ['bb-tf-true','bb-tf-false'].forEach(id=>{const b=document.getElementById(id);if(b)b.disabled=true;});
  (q.ans?document.getElementById('bb-tf-true'):document.getElementById('bb-tf-false'))?.classList.add('correct');
  if(!ok){
    (ans?document.getElementById('bb-tf-true'):document.getElementById('bb-tf-false'))?.classList.add('wrong');
    markWrongAnswer(q,true);
    state.errors.push({q:q.q,yours:ans?'Vrai':'Faux',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }else{
    markCorrectAnswer(q,true);
  }
  updateScoreDisplays();
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Mauvaise réponse',buildFeedbackPayload(q,!ok),true);
  showNextButton(true);
}
function bb_answerOpen(){
  if(state.answered)return;
  state.answered=true;
  const q=state.questions[state.currentIdx];
  const ua=(document.getElementById('bb-open-ans')?.value||'').trim();
  const validation=isOpenAnswerValid(q,ua);
  const ok=validation.ok;
  const ta=document.getElementById('bb-open-ans');
  if(ta)ta.disabled=true;
  if(ok){
    markCorrectAnswer(q,true);
  }else{
    markWrongAnswer(q,true);
    state.errors.push({q:q.q,yours:ua||'(vide)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }
  updateScoreDisplays();
  showFeedback(
    ok,
    ok?'✅ Bonne réponse !':'❌ Réponse insuffisante',
    buildFeedbackPayload(q,!ok,{
      note:ok && validation.usedTolerance ? 'Réponse acceptée malgré une petite faute !' : ''
    }),
    true
  );
  showNextButton(true);
}

function showFeedback(ok,title,payload,isBB=false){
  const container=document.getElementById((isBB?'bb-':'')+'feedback-container');
  const box=document.createElement('div');
  box.className='feedback-box '+(ok?'correct':'wrong');box.style.display='block';
  const noteBlock=payload.note?`<div class="feedback-note">${escapeHTML(payload.note)}</div>`:'';
  const expectedBlock=payload.expected?`<div class="feedback-answer"><strong>Réponse attendue :</strong> ${escapeHTML(payload.expected)}</div>`:'';
  const explanationBlock=payload.explanation?`<div class="feedback-explanation"><div class="feedback-label">Rappel</div><div class="feedback-text">${nl2br(payload.explanation)}</div></div>`:'';
  const actionsBlock=payload.actions?`<div class="feedback-actions">${payload.actions}</div>`:'';
  box.innerHTML=`<div class="feedback-title">${title}</div>${noteBlock}${expectedBlock}${explanationBlock}${actionsBlock}`;
  container.innerHTML='';container.appendChild(box);
}

function showNextButton(isBB=false){
  const prefix=isBB?'bb-':'';
  const wrap=document.getElementById(prefix+'next-btn-wrap');
  wrap.style.display='flex';
  const btn=wrap.querySelector('button');
  const total=state.questions.length;
  const isLast=state.currentIdx>=total-1;
  if(isBB){btn.textContent=isLast?'📊 Voir les résultats':'Question suivante →';btn.onclick=isLast?()=>showResults(true):bbNextQuestion;}
  else{btn.textContent=isLast?'📊 Voir les résultats':'Question suivante →';btn.onclick=isLast?()=>showResults(false):nextQuestion;}
}

function nextQuestion(){
  stopSpeech();
  if(isSurvivalRun()){
    state.currentIdx=(state.currentIdx+1)%state.questions.length;
    if(state.currentIdx===0) state.questions=shuffle(state.questions);
    renderQuestion();
    return;
  }
  state.currentIdx++;
  if(state.currentIdx>=state.questions.length){showResults();return;}
  renderQuestion();
}

/* ============================================================
   TIMER (quiz standard)
   ============================================================ */
function startTimer(){stopTimer();state.timerLeft=30;updateTimerDisplay();state.timerInterval=setInterval(()=>{state.timerLeft--;updateTimerDisplay();if(state.timerLeft<=0){stopTimer();if(!state.answered)timeUp();}},1000);}
function stopTimer(){clearInterval(state.timerInterval);state.timerInterval=null;const d=document.getElementById('timer-display');if(d)d.classList.remove('warning');}
function updateTimerDisplay(){const d=document.getElementById('timer-display'),v=document.getElementById('timer-val');if(!d||!v)return;v.textContent=state.timerLeft;d.classList.toggle('warning',state.timerLeft<=10);}
function timeUp(){
  state.answered=true;
  const q=state.questions[state.currentIdx];
  recordAnsweredQuestion(q,false);
  playEffect('error');
  triggerVibration('error');
  state.correctAnswersInRun=0;
  breakCombo();
  registerDailyAnswer(false);
  rememberWeakQuestion(q);
  state.errors.push({q:q.q,yours:'(temps écoulé)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  showFeedback(false,'⏱️ Temps écoulé !',buildFeedbackPayload(q,true));
  if(handlePlayerAnswerForDuel(false)) return;
  showNextButton();
}

function finalizeRunMilestones(total,elapsed,isBB=false){
  if(!playerProfile) return;
  if(!isSurvivalRun() && !isBB && total===10 && state.score===10){
    awardCoins(
      getPerfectQuizCoinReward(playerProfile.levelInfo?.level||1),
      `Perfect 10/10 · niveau ${playerProfile.levelInfo?.level||1}`
    );
  }
  if(isSurvivalRun()){
    playerProfile.stats.bestSurvivalTime=Math.max(playerProfile.stats.bestSurvivalTime||0,elapsed);
    playerProfile.stats.bestSurvivalScore=Math.max(playerProfile.stats.bestSurvivalScore||0,state.score||0);
  }
  const hour=new Date().getHours();
  if(hour>=22) unlockBadge('night-owl');
  if(state.score>=10 && elapsed<=120) unlockBadge('sniper');
  if(isBB && state.score===total) unlockBadge('invincible');
}

/* ============================================================
   RÉSULTATS
   ============================================================ */
function showResults(isBB=false){
  stopTimer();clearInterval(state.bbGlobalTimerInterval);
  pauseDuelEngine();
  setDuelHudVisible(false);
  clearSurvivalTimer();
  setSurvivalHudVisible(false);
  const elapsed=Math.floor((Date.now()-state.startTime)/1000);
  const total=isSurvivalRun()
    ? Math.max(1,state.survival.questionsAnswered||0)
    : (state.questions.length||1);
  const pct=Math.round((state.score/total)*100);
  const runBonusMultiplier=state.runXpBoostActive?2:1;

  if(!state.runRewarded){
    updateStreakAfterCompletedQuiz();
    registerRunStats(total,elapsed);
    registerDailyRunCompletion(state.mode);
    if(state.mode==='ranked'){
      const rpDelta=pct>=90?40:pct>=75?26:pct>=60?12:pct>=45?0:-18;
      state.rankedRpDelta=rpDelta;
      rankedProfile.rp=Math.max(0,rankedProfile.rp+rpDelta);
      rankedProfile.peakRp=Math.max(rankedProfile.peakRp,rankedProfile.rp);
      saveRankedProfile();
      updateRankedUI();
      const rankedSubjects=Array.from(new Set(state.questions.map(q=>q._subj).filter(Boolean)));
      const rankedBonus=36*runBonusMultiplier;
      const share=rankedSubjects.length?Math.floor(rankedBonus/rankedSubjects.length):rankedBonus;
      let remainder=rankedSubjects.length?rankedBonus-(share*rankedSubjects.length):0;
      (rankedSubjects.length?rankedSubjects:[state.subject]).forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else if(state.mode==='weak'){
      const subjects=Array.from(new Set(state.questions.map(q=>q._subj).filter(Boolean)));
      const weakBonus=XP_RULES.quizBonus*runBonusMultiplier;
      const share=subjects.length?Math.floor(weakBonus/subjects.length):weakBonus;
      let remainder=subjects.length?weakBonus-(share*subjects.length):0;
      (subjects.length?subjects:[state.subject]).forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else if(isBB){
      const subjects=SUBJECT_KEYS.filter(subjectKey=>state.bbBySubject[subjectKey]?.total);
      const bbBonus=XP_RULES.brevetBlancBonus*runBonusMultiplier;
      const share=subjects.length?Math.floor(bbBonus/subjects.length):0;
      let remainder=subjects.length?bbBonus-(share*subjects.length):0;
      subjects.forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else if(state.mode==='survival'){
      // Le mode Survie rémunère déjà chaque bonne réponse via l'XP des questions.
    }else{
      awardXp(XP_RULES.quizBonus*runBonusMultiplier,state.subject);
      if(state.mode==='duel'){
        registerDuelOutcome();
        if(state.duel.result==='player'){
          addXP(XP_RULES.duelVictoryBonus,state.subject,false);
          showToast('IA vaincue ! +100 XP','success');
        }else{
          showToast('Le Bot a été plus rapide... Entraîne-toi encore !','warning');
        }
      }
    }
    finalizeRunMilestones(total,elapsed,isBB);
    saveHistory({
      subject:state.mode==='ranked'
        ? 'classe'
        : (state.mode==='weak'
          ? 'points-faibles'
          : (state.mode==='survival'
            ? 'survival'
            : (isBB?'brevet-blanc':state.subject))),
      chapters:state.mode==='ranked'
        ? [`Rang ${state.rankedTier?.name||getRankInfo(rankedProfile.rp).name}`]
        : (state.mode==='weak'
          ? ['Révision ciblée']
          : (state.mode==='survival'
            ? [state.survival.selectedPoolLabel||'Mode Survie']
            : (isBB?['Brevet Blanc']:state.chapters))),
      diff:state.mode==='ranked'
        ? 'Classé'
        : (state.mode==='weak'
          ? 'Points faibles'
          : (state.mode==='survival'
            ? 'Survie'
            : (isBB?'Blanc':(state.mode==='duel'?'Duel':state.difficulty)))),
      score:state.score,total,pct,elapsed,
      rpDelta:state.mode==='ranked'?state.rankedRpDelta:0,
      xpEarned:state.sessionEarnedXp,
      date:new Date().toLocaleDateString('fr-FR')
    });
    savePlayerProfile();
    state.runRewarded=true;
  }

  const fill=document.getElementById('score-ring-fill');
  const circumference=2*Math.PI*52;
  fill.style.stroke=pct>=70?'var(--green)':pct>=40?'var(--gold)':'var(--red)';
  document.getElementById('result-percent').style.color=pct>=70?'var(--green)':pct>=40?'var(--gold)':'var(--red)';
  setTimeout(()=>{fill.style.strokeDashoffset=circumference-(pct/100)*circumference;},100);
  document.getElementById('result-percent').textContent=pct+'%';

  let [title,sub]=pct>=90?['🏆 Excellent !','Score parfait — prêt(e) pour le brevet !']:pct>=70?['👍 Très bien !','Bon travail ! Quelques points à revoir.']:pct>=50?['💪 Pas mal !','Continuez à réviser les parties manquées.']:['📚 À retravailler !','Consultez vos erreurs et recommencez.'];
  if(state.mode==='duel'){
    if(state.duel.result==='player'){
      title='🤖 IA vaincue !';
      sub=`${DUEL_BOT_NAME} s’incline. Bonus duel accordé : +100 XP.`;
    }else{
      title='🤖 Duel perdu';
      sub='Le Bot a été plus rapide... Entraîne-toi encore !';
    }
  }else if(state.mode==='survival'){
    const bestTime=playerProfile?.stats?.bestSurvivalTime||elapsed;
    const bestScore=playerProfile?.stats?.bestSurvivalScore||state.score;
    title='💀 Game Over';
    sub=`Score final : ${state.score}/${total} · Record temps : ${formatTime(Math.round(bestTime))} · Record score : ${bestScore}`;
  }
  document.getElementById('result-title').textContent=title;
  document.getElementById('result-subtitle').textContent=state.mode==='ranked'
    ? `${sub} ${state.rankedRpDelta>=0?'+':''}${state.rankedRpDelta} RP sur cette partie classée.`
    : sub;
  document.getElementById('stat-correct').textContent=state.score;
  document.getElementById('stat-wrong').textContent=total-state.score;
  document.getElementById('stat-time').textContent=formatTime(isBB?900-state.bbTimeLeft:elapsed);
  buildResultsRewardSummary();

  // Brevet Blanc breakdown
  const bbSection=document.getElementById('bb-breakdown-section');
  const bbGrid=document.getElementById('bb-breakdown-grid');
  if(isBB){
    bbSection.style.display='block';
    bbGrid.innerHTML='';
    Object.entries(state.bbBySubject).forEach(([subj,data])=>{
      if(!data.total)return;
      const m=SUBJ_META[subj];
      const sp=Math.round((data.correct/data.total)*100);
      const sc=sp>=70?'var(--green)':sp>=40?'var(--gold)':'var(--red)';
      const d=document.createElement('div');
      d.className='bb-subj-stat';
      d.innerHTML=`<div class="bss-name">${m.icon} ${m.name}</div><div class="bss-score" style="color:${sc}">${data.correct}/${data.total} (${sp}%)</div>`;
      bbGrid.appendChild(d);
    });
    document.getElementById('btn-restart').textContent='🔄 Relancer un Brevet Blanc';
    document.getElementById('btn-restart').onclick=startBrevetBlanc;
  }else{
    bbSection.style.display='none';
    document.getElementById('btn-restart').textContent=state.mode==='ranked'
      ? '🏆 Rejouer en classé'
      : (state.mode==='weak'
        ? '🎯 Refaire mes points faibles'
        : (state.mode==='duel'
          ? '🤖 Refaire un duel'
          : (state.mode==='survival' ? '🔥 Relancer la survie' : '🔄 Recommencer')));
    document.getElementById('btn-restart').onclick=state.mode==='ranked'
      ? startRankedQuiz
      : (state.mode==='weak'
        ? startWeakReview
        : (state.mode==='duel'
          ? startDuelChallenge
          : (state.mode==='survival'
            ? ()=>startSurvivalMode({
                subject:state.chapters.includes('Mode Survie')?null:state.subject,
                chapters:state.chapters.includes('Mode Survie')?[]:[...state.chapters],
                label:state.survival.selectedPoolLabel||'Mix total'
              })
            : restartQuiz)));
  }

  showScreen('screen-results');
  schedulePendingStreakCelebration();
}

function showErrors(){
  playEffect('click');
  const list=document.getElementById('errors-list');list.innerHTML='';
  document.getElementById('error-count-subtitle').textContent=state.errors.length===0?'Aucune erreur — parfait !':state.errors.length+' erreur(s) à retravailler';
  state.errors.forEach(err=>{
    const d=document.createElement('div');d.className='error-item';
    d.innerHTML=`<div class="error-q">📌 ${escapeHTML(err.q)}</div><div class="error-your">❌ Votre réponse : ${escapeHTML(err.yours)}</div><div class="error-correct">✅ Réponse correcte : ${escapeHTML(err.correct)}</div><div class="error-explain">💡 ${nl2br(err.explanation||'')}</div>`;
    list.appendChild(d);
  });
  showScreen('screen-errors');
}

function restartQuiz(){
  playEffect('click');
  resetDuelState();
  clearSurvivalTimer();
  showScreen('screen-difficulty');
}

function confirmQuit(isBB=false){
  if(confirm('Quitter ? Votre progression sera perdue.')){
    stopTimer();clearInterval(state.bbGlobalTimerInterval);
    resetDuelState();
    clearSurvivalTimer();
    showScreen('screen-home');
  }
}

/* ============================================================
   HISTORIQUE
   ============================================================ */
function saveHistory(entry){
  let h=JSON.parse(localStorage.getItem('brevet_history')||'[]');
  h.unshift(entry);h=h.slice(0,20);
  localStorage.setItem('brevet_history',JSON.stringify(h));
}

function renderHistory(targetId='history-list'){
  const h=JSON.parse(localStorage.getItem('brevet_history')||'[]');
  const list=document.getElementById(targetId);
  if(!list) return;
  list.innerHTML='';
  if(!h.length){list.innerHTML='<div class="history-empty">📚 Aucune session enregistrée.<br>Lancez votre premier quiz !</div>';return;}

  // Stats
  let gTotal=0,gCorrect=0;const bySubj={};
  h.forEach(e=>{gTotal+=e.total;gCorrect+=e.score;
    const s=e.subject;if(!bySubj[s])bySubj[s]={total:0,correct:0,count:0};
    bySubj[s].total+=e.total;bySubj[s].correct+=e.score;bySubj[s].count++;
  });
  const gAvg=Math.round((gCorrect/gTotal)*100);

  const allSubjMeta={...SUBJ_META,'brevet-blanc':{icon:'🎓',name:'Brevet Blanc',tagClass:'gold'},'classe':{icon:'🏆',name:'Mode Classé',tagClass:'gold'}};
  allSubjMeta['points-faibles']={icon:'🎯',name:'Points faibles',tagClass:'gold'};
  allSubjMeta['survival']={icon:'🔥',name:'Mode Survie',tagClass:'gold'};

  const banner=document.createElement('div');banner.className='history-avg-banner';
  let subjHTML='';
  Object.entries(bySubj).forEach(([s,d])=>{
    const avg=Math.round((d.correct/d.total)*100);
    const cls=avg>=70?'good':avg>=40?'mid':'bad';
    const m=allSubjMeta[s]||{icon:'📚',name:s};
    subjHTML+=`<div class="avg-subj-box"><div class="avg-pct ${cls}">${avg}%</div><div class="avg-name">${m.icon} ${m.name}</div><div class="avg-count">${d.count} partie${d.count>1?'s':''}</div></div>`;
  });
  banner.innerHTML=`<div class="avg-main">📊 Moyenne générale : <strong style="font-size:1.25rem">${gAvg}%</strong> &nbsp;— ${h.length} partie${h.length>1?'s':''}</div><div class="avg-grid">${subjHTML}</div>`;
  list.appendChild(banner);

  h.forEach(entry=>{
    const cls=entry.pct>=70?'good':entry.pct>=40?'mid':'bad';
    const m=allSubjMeta[entry.subject]||{icon:'📚',name:entry.subject};
    const diffLabel={facile:'🌱 Facile',normal:'🎯 Normal',difficile:'🔥 Difficile',Blanc:'🎓 Brevet Blanc','Classé':'🏆 Classé','Points faibles':'🎯 Points faibles',Duel:'🤖 Duel IA',Survie:'🔥 Survie'}[entry.diff]||entry.diff;
    const chaps=entry.chapters?entry.chapters.join(', '):'—';
    const xpLabel=entry.xpEarned?` · +${entry.xpEarned} XP`:'';
    const rpLabel=entry.rpDelta?` · ${entry.rpDelta>=0?'+':''}${entry.rpDelta} RP`:'';
    const d=document.createElement('div');d.className='history-item';
    d.innerHTML=`<div class="history-score-badge ${cls}">${entry.pct}%</div><div class="history-info"><strong>${m.icon} ${m.name}</strong><div class="h-detail">${entry.score}/${entry.total} réponses · ${diffLabel} · ${formatTime(entry.elapsed)}${xpLabel}${rpLabel}</div><div class="h-chapters">📖 ${chaps}</div></div><div class="history-date">${entry.date}</div>`;
    list.appendChild(d);
  });
}

function clearHistory(){
  if(confirm("Effacer tout l'historique ?")){
    localStorage.removeItem('brevet_history');
    renderHistory();
    renderHistory('stats-history-list');
    showToast('Effacé.','delete');
  }
}

/* ============================================================
   FLASHCARDS
   ============================================================ */
function updateFlashCounts(){
  if(!questionBankReady){
    document.querySelectorAll('[id^="fc-count-"]').forEach(el=>{el.textContent='Chargement...';});
    ensureQuestionBankLoaded({silent:true}).then(loaded=>{
      if(loaded) updateFlashCounts();
    });
    return;
  }
  Object.keys(FLASHCARDS).forEach(s=>{
    const el=document.getElementById('fc-count-'+s);
    if(el)el.textContent=FLASHCARDS[s].length+' cartes';
  });
  const total=Object.values(FLASHCARDS).reduce((a,v)=>a+v.length,0);
  const el=document.getElementById('fc-count-all');if(el)el.textContent=total+' cartes';
}

async function startFlash(subj){
  if(!await ensureQuestionBankLoaded()) return;
  let cards=[];
  if(subj==='all') cards=SUBJECT_KEYS.flatMap(subjectKey=>FLASHCARDS[subjectKey]||[]);
  else cards=FLASHCARDS[subj]||[];
  flashState.cards=shuffle(cards);flashState.idx=0;flashState.flipped=false;
  renderFlashcard();showScreen('screen-flash');
}

function renderFlashcard(){
  const c=flashState.cards[flashState.idx];
  document.getElementById('fc-question').textContent=c.q;
  document.getElementById('fc-answer').textContent=c.a;
  document.getElementById('fc-explain').textContent=c.explanation||c.explain||'';
  document.getElementById('fc-current').textContent=flashState.idx+1;
  document.getElementById('fc-total').textContent=flashState.cards.length;
  document.getElementById('flashcard').classList.remove('flipped');
  flashState.flipped=false;
}

function flipCard(){playEffect('click');flashState.flipped=!flashState.flipped;document.getElementById('flashcard').classList.toggle('flipped',flashState.flipped);}
function nextCard(){playEffect('click');flashState.idx=(flashState.idx+1)%flashState.cards.length;renderFlashcard();}
function prevCard(){playEffect('click');flashState.idx=(flashState.idx-1+flashState.cards.length)%flashState.cards.length;renderFlashcard();}
function shuffleCards(){playEffect('toggle');flashState.cards=shuffle(flashState.cards);flashState.idx=0;renderFlashcard();showToast('Cartes mélangées !','shuffle');}

/* ============================================================
   THÈME
   ============================================================ */
function toggleTheme(){
  if(!playerProfile) return;
  const next=playerProfile.currentTheme==='light'?'dark':'light';
  applyTheme(next);
}

/* ============================================================
   RACCOURCIS CLAVIER
   ============================================================ */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeXpModal();
  }
  const screen=document.querySelector('.screen.active');if(!screen)return;
  if(screen.id==='screen-flash'){if(e.key==='ArrowRight')nextCard();if(e.key==='ArrowLeft')prevCard();if(e.key===' '){e.preventDefault();flipCard();}}
  const isBB=screen.id==='screen-bb-quiz';
  if((screen.id==='screen-quiz'||isBB)&&!state.answered){
    const q=state.questions[state.currentIdx];
    if(q?.type==='mcq'){const m={'1':0,'2':1,'3':2,'4':3};if(m[e.key]!==undefined){isBB?bb_answerMCQ(m[e.key]):answerMCQ(m[e.key]);}}
    if(q?.type==='tf'){if(e.key==='v'||e.key==='V'){isBB?bb_answerTF(true):answerTF(true);}if(e.key==='f'||e.key==='F'){isBB?bb_answerTF(false):answerTF(false);}}
  }
});

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('load',()=>{
  playerProfile=loadPlayerProfile();
  syncProfileComputedData();
  initializeBrevetPassProgress(true);
  streakState=loadStreakState();
  rankedProfile=loadRankedProfile();
  weakQuestionIds=loadWeakQuestions();
  dailyChallengeState=loadDailyChallenges();
  storageBootReady=true;
  ensureDailyChallenges();
  syncProfileComputedData();
  savePlayerProfile();
  if(questionBankReady){
    weakQuestionIds=weakQuestionIds.filter(id=>QUESTION_LOOKUP[id]);
    saveWeakQuestions();
  }
  saveDailyChallenges();
  document.body.setAttribute('data-theme',playerProfile.currentTheme||'dark');
  syncBrowserThemeColor(playerProfile.currentTheme||'dark');
  refreshPlayerUI();
  installAudioUnlockBridge();
  scheduleQuestionBankWarmup();
  document.getElementById('progress-import-input')?.addEventListener('change',handleImportProgress);
  bindAdminLogoAccess();
  maybeOpenOnboarding();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'})
      .then(() => console.log('Application prête pour le mode hors-ligne !'))
      .catch(err => console.error('Erreur de chargement de l\'app', err));
  });
}
