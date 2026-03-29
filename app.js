/* ============================================================
   BASE DE DONNÉES COMPLÈTE — Toutes matières — Brevet 3ème
   ============================================================ */
const DB = {

  /* ==================== HISTOIRE ==================== */
  histoire: {
    "Première Guerre mondiale": [
      {type:"mcq",diff:"facile",q:"En quelle année débute la Première Guerre mondiale ?",opts:["1912","1914","1916","1918"],ans:1,explain:"La Première Guerre mondiale commence en août 1914, déclenchée par l'assassinat de l'archiduc François-Ferdinand à Sarajevo le 28 juin 1914."},
      {type:"tf",diff:"facile",q:"La France et le Royaume-Uni sont alliés pendant la Première Guerre mondiale.",ans:true,explain:"Ils forment la Triple Entente avec la Russie, face aux Empires centraux (Allemagne, Autriche-Hongrie)."},
      {type:"mcq",diff:"normal",q:"Quel événement déclenche la Première Guerre mondiale ?",opts:["La révolution russe","L'invasion de la Belgique","L'assassinat de l'archiduc François-Ferdinand","La chute de l'Empire ottoman"],ans:2,explain:"François-Ferdinand est assassiné le 28 juin 1914 à Sarajevo par Gavrilo Princip, déclenchant un engrenage d'alliances."},
      {type:"mcq",diff:"normal",q:"Quelle bataille de 1916 symbolise le carnage de la Grande Guerre avec ~700 000 victimes ?",opts:["La Marne","La Somme","Verdun","Sedan"],ans:2,explain:"Verdun (fév.-déc. 1916) est le symbole de la boucherie de la Grande Guerre. Les deux camps perdent près de 700 000 hommes."},
      {type:"date",diff:"normal",dates:["1914","1916","1917","1918"],events:["Début de la guerre","Bataille de Verdun","Entrée des USA","Armistice"],explain:"1914 : début ; 1916 : Verdun ; 1917 : USA entrent en guerre ; 1918 : armistice du 11 novembre."},
      {type:"mcq",diff:"difficile",q:"Quel traité met fin à la Première Guerre mondiale en 1919 ?",opts:["Traité de Versailles","Traité de Paris","Traité de Brest-Litovsk","Traité de Locarno"],ans:0,explain:"Le Traité de Versailles (28 juin 1919) impose à l'Allemagne de lourdes réparations et des pertes territoriales."},
      {type:"tf",diff:"difficile",q:"L'armistice de la Première Guerre mondiale est signé le 14 juillet 1918.",ans:false,explain:"Faux ! L'armistice est signé le 11 novembre 1918 à 11h. Le 14 juillet est la Fête nationale française."}
    ],
    "Les régimes totalitaires": [
      {type:"mcq",diff:"facile",q:"Quel régime Adolf Hitler instaure-t-il en Allemagne dès 1933 ?",opts:["Communisme","Fascisme","Nazisme","Monarchie"],ans:2,explain:"Le nazisme est un régime totalitaire basé sur le racisme, l'antisémitisme et le nationalisme extrême."},
      {type:"tf",diff:"facile",q:"Benito Mussolini est le chef du régime fasciste en Italie dans les années 1920.",ans:true,explain:"Mussolini prend le pouvoir en 1922 et instaure le premier régime fasciste d'Europe."},
      {type:"mcq",diff:"normal",q:"Comment appelle-t-on le régime de Staline en URSS ?",opts:["Dictature militaire","Totalitarisme stalinien","Démocratie populaire","Régime fasciste"],ans:1,explain:"Le stalinisme repose sur le culte de la personnalité, les purges politiques, le Goulag et la collectivisation forcée."},
      {type:"mcq",diff:"normal",q:"En quelle année Hitler devient-il chancelier d'Allemagne ?",opts:["1929","1931","1933","1936"],ans:2,explain:"Hitler est nommé chancelier le 30 janvier 1933, puis démantèle la démocratie pour instaurer la dictature."},
      {type:"open",diff:"difficile",q:"Qu'est-ce que la propagande dans un régime totalitaire ?",key:["propagande","contrôle","information","masses","état","opinion"],correctAnswer:"Contrôle de l'information et des médias par l'État pour manipuler l'opinion publique.",explain:"Presse, radio, affiches, cinéma sont mis au service du pouvoir pour diffuser l'idéologie officielle et écraser toute opposition."},
      {type:"tf",diff:"difficile",q:"Les lois de Nuremberg (1935) retirent la citoyenneté allemande aux Juifs.",ans:true,explain:"Ces lois institutionnalisent la persécution antisémite et interdisent les mariages mixtes."}
    ],
    "La Seconde Guerre mondiale": [
      {type:"mcq",diff:"facile",q:"En quelle année la Seconde Guerre mondiale se termine-t-elle en Europe ?",opts:["1943","1944","1945","1946"],ans:2,explain:"Capitulation allemande le 8 mai 1945. Le conflit se termine en Asie le 2 septembre 1945."},
      {type:"mcq",diff:"facile",q:"Qui lance l'Appel du 18 juin 1940 depuis Londres ?",opts:["Philippe Pétain","Charles de Gaulle","Jean Moulin","Henri Giraud"],ans:1,explain:"De Gaulle refuse l'armistice et appelle les Français à continuer le combat depuis la BBC."},
      {type:"mcq",diff:"normal",q:"Quel terme désigne le génocide des Juifs par les nazis ?",opts:["La Résistance","La Shoah","La déportation","La colonisation"],ans:1,explain:"La Shoah (6 millions de Juifs exterminés) est le génocide systématique organisé par les nazis dans des camps d'extermination."},
      {type:"tf",diff:"normal",q:"Le débarquement de Normandie (D-Day) a lieu le 6 juin 1944.",ans:true,explain:"Le 6 juin 1944, les Alliés débarquent sur les plages normandes. C'est le plus grand débarquement amphibie de l'histoire."},
      {type:"date",diff:"normal",dates:["1939","1940","1941","1944"],events:["Début de la WWII","Appel du 18 juin","Pearl Harbor — USA en guerre","D-Day en Normandie"],explain:"Dates clés de la Seconde Guerre mondiale."},
      {type:"tf",diff:"difficile",q:"Les bombes atomiques sont larguées sur Tokyo et Osaka en 1945.",ans:false,explain:"Faux ! Elles tombent sur Hiroshima (6 août) et Nagasaki (9 août 1945), causant 100 000–200 000 morts."}
    ],
    "La Guerre froide": [
      {type:"mcq",diff:"facile",q:"Quels deux blocs s'affrontent durant la Guerre froide ?",opts:["France et Allemagne","États-Unis et URSS","OTAN et UE","Chine et Japon"],ans:1,explain:"La Guerre froide (1947-1991) oppose les USA (bloc occidental capitaliste) et l'URSS (bloc soviétique communiste)."},
      {type:"tf",diff:"facile",q:"Le mur de Berlin est construit en 1961 pour empêcher les Allemands de l'Est de fuir à l'Ouest.",ans:true,explain:"Érigé dans la nuit du 12 au 13 août 1961, il tombe le 9 novembre 1989."},
      {type:"mcq",diff:"normal",q:"Quelle crise de 1962 amène le monde au bord de la guerre nucléaire ?",opts:["Crise de Suez","Crise de Cuba","Guerre de Corée","Guerre du Viêtnam"],ans:1,explain:"L'URSS installe des missiles à Cuba. Kennedy impose un blocus. Après 13 jours de tension, Khrouchtchev recule."},
      {type:"mcq",diff:"difficile",q:"En quelle année le mur de Berlin tombe-t-il ?",opts:["1985","1987","1989","1991"],ans:2,explain:"Le 9 novembre 1989, le mur tombe. L'URSS se dissout en décembre 1991."}
    ],
    "La décolonisation et la Ve République": [
      {type:"mcq",diff:"facile",q:"En quelle année est fondée la Ve République ?",opts:["1944","1946","1958","1962"],ans:2,explain:"La Ve République est fondée en 1958. De Gaulle en rédige la Constitution renforçant l'exécutif."},
      {type:"tf",diff:"facile",q:"La guerre d'Algérie se termine en 1962 avec les accords d'Évian.",ans:true,explain:"Les accords d'Évian (18 mars 1962) reconnaissent l'indépendance de l'Algérie après 8 ans de guerre."},
      {type:"mcq",diff:"normal",q:"Quel leader indien mène la lutte pour l'indépendance par la non-violence ?",opts:["Nehru","Mandela","Gandhi","Nasser"],ans:2,explain:"Gandhi, par la désobéissance civile et les jeûnes, joue un rôle clé dans l'indépendance de l'Inde en 1947."},
      {type:"mcq",diff:"difficile",q:"Quel traité transforme la CEE en Union européenne en 1992 ?",opts:["Traité de Rome","Traité de Maastricht","Traité de Lisbonne","Traité de Paris"],ans:1,explain:"Le Traité de Maastricht (1992) crée l'UE, instaure la citoyenneté européenne et prépare l'euro."}
    ]
  },

  /* ==================== GÉOGRAPHIE ==================== */
  geo: {
    "La mondialisation": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce que la mondialisation ?",opts:["L'uniformisation des cultures","L'intensification des échanges à l'échelle mondiale","La création d'un gouvernement mondial","La fin des frontières"],ans:1,explain:"Processus d'intensification des échanges (marchandises, capitaux, personnes, informations) accéléré depuis les années 1990."},
      {type:"tf",diff:"facile",q:"Les États-Unis sont la première puissance économique mondiale.",ans:true,explain:"Les USA ont le PIB le plus élevé du monde, suivis par la Chine."},
      {type:"mcq",diff:"normal",q:"Que sont les FTN ?",opts:["Forces terrestres nationales","Firmes transnationales (multinationales)","Fonds de transformation numérique","Frontières terrestres nationales"],ans:1,explain:"Les Firmes Transnationales sont présentes dans plusieurs pays : Apple, Toyota, TotalEnergies... Acteurs clés de la mondialisation."},
      {type:"open",diff:"difficile",q:"Qu'est-ce qu'un espace de production délocalisé ?",key:["délocalisation","main-d'œuvre","coût","pays","production"],correctAnswer:"Production transférée vers un pays à moindre coût de main-d'œuvre.",explain:"Les FTN délocalisent pour réduire les coûts en produisant dans des pays où la main-d'œuvre est moins chère."}
    ],
    "Développement durable": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce que le développement durable ?",opts:["Un développement économique rapide","Un développement qui satisfait les besoins présents sans compromettre l'avenir","Un développement limité aux pays riches","Un développement uniquement écologique"],ans:1,explain:"Définition du rapport Brundtland (1987). Trois piliers : économie, social, environnement."},
      {type:"tf",diff:"facile",q:"Le réchauffement climatique est principalement dû aux activités humaines selon le GIEC.",ans:true,explain:"Le GIEC affirme avec un très haut niveau de certitude que les activités humaines en sont la cause principale."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce que l'IDH ?",opts:["Indice mesurant uniquement le PIB","Indice combinant espérance de vie, éducation et revenu","Indice de pollution atmosphérique","Indicateur de surface forestière"],ans:1,explain:"L'IDH (créé par le PNUD) va de 0 à 1 et mesure le développement humain sur 3 critères."},
      {type:"mcq",diff:"difficile",q:"Lors de quelle conférence les accords de Paris sur le climat sont-ils signés ?",opts:["Rio 1992","Kyoto 1997","Copenhague 2009","Paris 2015 (COP21)"],ans:3,explain:"La COP21 à Paris (2015) vise à limiter le réchauffement à 1,5°C au-dessus des niveaux préindustriels."}
    ],
    "Espaces, échanges et inégalités": [
      {type:"mcq",diff:"facile",q:"Quel pays est le plus peuplé du monde en 2024 ?",opts:["États-Unis","Inde","Chine","Indonésie"],ans:1,explain:"L'Inde a dépassé la Chine en 2023 avec plus de 1,4 milliard d'habitants."},
      {type:"tf",diff:"normal",q:"Sydney est la capitale de l'Australie.",ans:false,explain:"Faux ! La capitale est Canberra. Sydney est la plus grande ville mais pas la capitale."},
      {type:"mcq",diff:"normal",q:"Que sont les BRICS ?",opts:["Les pays les plus pauvres","Brésil, Russie, Inde, Chine, Afrique du Sud — pays émergents","Les fondateurs de l'ONU","Les pays du G7"],ans:1,explain:"Pays émergents à forte croissance représentant ~40% de la population mondiale."},
      {type:"open",diff:"difficile",q:"Définissez la littoralisation.",key:["littoralisation","littoral","côte","concentration","populations","économie"],correctAnswer:"Concentration croissante des populations et des activités économiques sur les littoraux.",explain:"60% de la population mondiale vit à moins de 60 km d'une côte."}
    ]
  },

  /* ==================== EMC ==================== */
  emc: {
    "Droits de l'Homme et du Citoyen": [
      {type:"mcq",diff:"facile",q:"En quelle année est adoptée la Déclaration des Droits de l'Homme et du Citoyen ?",opts:["1776","1789","1830","1848"],ans:1,explain:"La DDHC est adoptée le 26 août 1789 pendant la Révolution française."},
      {type:"tf",diff:"facile",q:"La DUDH est adoptée par l'ONU en 1948.",ans:true,explain:"La Déclaration universelle des droits de l'Homme est adoptée le 10 décembre 1948 après la Seconde Guerre mondiale."},
      {type:"mcq",diff:"facile",q:"Quelle est la devise de la République française ?",opts:["Égalité, Justice, Fraternité","Liberté, Égalité, Fraternité","Liberté, Justice, Solidarité","Démocratie, Égalité, Liberté"],ans:1,explain:"'Liberté, Égalité, Fraternité' est issue de la Révolution française et inscrite dans la Constitution de 1958."},
      {type:"open",diff:"difficile",q:"Expliquez ce qu'est un droit fondamental.",key:["droit","fondamental","universel","inaliénable","imprescriptible","humain"],correctAnswer:"Droit naturel, universel et inaliénable reconnu à tout être humain, qu'aucun État ne peut supprimer.",explain:"Les droits fondamentaux protègent la vie, la liberté, l'égalité. Ils sont garantis par la Constitution et les conventions internationales."}
    ],
    "La démocratie, la laïcité et la citoyenneté": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce que la démocratie ?",opts:["Un régime dirigé par un roi","Un régime où le peuple exerce le pouvoir via des représentants élus","Un régime militaire","Un régime théocratique"],ans:1,explain:"La démocratie (demos = peuple, kratos = pouvoir) : souveraineté appartient au peuple qui vote librement."},
      {type:"tf",diff:"facile",q:"La laïcité interdit aux citoyens de pratiquer leur religion.",ans:false,explain:"Faux ! La laïcité garantit la liberté de conscience. Elle impose seulement la neutralité de l'État vis-à-vis des religions."},
      {type:"mcq",diff:"normal",q:"En quelle année est adoptée la loi de séparation de l'Église et de l'État ?",opts:["1789","1848","1905","1958"],ans:2,explain:"La loi du 9 décembre 1905 instaure la séparation Église/État et organise la laïcité à la française."},
      {type:"mcq",diff:"normal",q:"À quel âge vote-t-on en France ?",opts:["16 ans","17 ans","18 ans","21 ans"],ans:2,explain:"Le droit de vote est accordé à 18 ans depuis 1974 (abaissé de 21 ans)."},
      {type:"tf",diff:"difficile",q:"En France, le Conseil constitutionnel peut censurer une loi contraire à la Constitution.",ans:true,explain:"Il vérifie la conformité des lois à la Constitution et peut les censurer avant promulgation ou via la QPC."}
    ]
  },

  /* ==================== FRANÇAIS ==================== */
  francais: {
    "Grammaire": [
      {type:"mcq",diff:"facile",q:"Quelle est la nature du mot 'rapidement' dans la phrase 'Il court rapidement' ?",opts:["Nom","Adjectif qualificatif","Adverbe","Verbe"],ans:2,explain:"'Rapidement' est un adverbe de manière. Il modifie le verbe 'court'. Les adverbes sont invariables."},
      {type:"mcq",diff:"facile",q:"Quelle est la fonction du groupe nominal souligné : 'Le chat __ mange la souris.' ?",opts:["Complément d'objet direct","Sujet","Attribut du sujet","Complément d'objet indirect"],ans:1,explain:"Le groupe nominal 'Le chat' est sujet du verbe 'mange' : il répond à la question 'Qui mange ?'"},
      {type:"tf",diff:"facile",q:"Un adjectif qualificatif s'accorde en genre et en nombre avec le nom qu'il qualifie.",ans:true,explain:"L'adjectif s'accorde avec le nom auquel il se rapporte. Ex : 'une belle fleur' (féminin singulier), 'de beaux enfants' (masculin pluriel)."},
      {type:"mcq",diff:"normal",q:"Dans 'Je lui parle', quel est le rôle de 'lui' ?",opts:["Complément d'objet direct (COD)","Complément d'objet indirect (COI)","Sujet","Attribut"],ans:1,explain:"'Lui' est COI : il répond à 'à qui je parle ?' Le COI est lié au verbe par une préposition (à/de)."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce qu'une proposition subordonnée relative ?",opts:["Une proposition qui s'oppose à la principale","Une proposition introduite par un pronom relatif qui complète un nom","Une proposition indépendante","Une proposition infinitive"],ans:1,explain:"La subordonnée relative complète un nom (ou pronom) avec un pronom relatif (qui, que, dont, où...). Ex : 'Le livre que tu lis est passionnant.'"},
      {type:"open",diff:"difficile",q:"Expliquez la différence entre COD et COI.",key:["COD","COI","direct","indirect","préposition","objet"],correctAnswer:"Le COD est relié directement au verbe (sans préposition). Le COI est relié au verbe par une préposition (à, de).",explain:"Ex : COD → 'Je mange une pomme' (quoi ?). COI → 'Je parle à Marie' (à qui ?)."},
      {type:"tf",diff:"difficile",q:"Le participe passé employé avec l'auxiliaire 'être' s'accorde avec le sujet.",ans:true,explain:"Avec 'être', le participe passé s'accorde en genre et en nombre avec le sujet. Ex : 'Elle est partie', 'Ils sont arrivés'."}
    ],
    "Conjugaison": [
      {type:"mcq",diff:"facile",q:"Quelle est la terminaison de la 1re personne du singulier du présent de l'indicatif pour les verbes en -er ?",opts:["-is","-e","-s","-ai"],ans:1,explain:"Les verbes en -er prennent '-e' à la 1re personne du singulier du présent : je mange, je joue, je parle."},
      {type:"mcq",diff:"facile",q:"Conjuguez 'finir' à la 3e personne du pluriel du présent de l'indicatif.",opts:["Il finissent","Ils finit","Ils finissent","Ils finent"],ans:2,explain:"Les verbes en -ir (2e groupe) se conjuguent avec 'iss' au présent pour les formes du pluriel : nous finissons, vous finissez, ils finissent."},
      {type:"tf",diff:"facile",q:"Le passé composé est formé avec l'auxiliaire avoir ou être + le participe passé.",ans:true,explain:"Passé composé = auxiliaire (avoir/être) + participe passé. Ex : 'j'ai mangé', 'je suis parti'."},
      {type:"mcq",diff:"normal",q:"Quel temps exprime une action habituelle dans le passé ?",opts:["Passé composé","Imparfait","Passé simple","Plus-que-parfait"],ans:1,explain:"L'imparfait exprime une action habituelle, répétée ou une description dans le passé. Ex : 'Chaque matin, il lisait le journal.'"},
      {type:"mcq",diff:"normal",q:"À quel temps appartient la forme verbale 'il eût chanté' ?",opts:["Conditionnel passé","Subjonctif plus-que-parfait","Passé antérieur","Futur antérieur"],ans:1,explain:"'Il eût chanté' est le subjonctif plus-que-parfait. Ce temps s'emploie dans des propositions subordonnées après certaines conjonctions."},
      {type:"open",diff:"difficile",q:"Expliquez l'emploi du subjonctif présent.",key:["subjonctif","doute","souhait","sentiment","obligation","que","volonté"],correctAnswer:"Le subjonctif s'emploie pour exprimer un doute, un souhait, une obligation ou un sentiment, généralement après 'que'.",explain:"Ex : 'Je veux que tu viennes' (souhait), 'Il faut que tu réussisses' (obligation), 'Je doute qu'il soit là' (doute)."},
      {type:"tf",diff:"difficile",q:"Le passé simple est un temps encore très utilisé à l'oral en français contemporain.",ans:false,explain:"Faux ! Le passé simple est presque exclusivement écrit (récits, littérature). À l'oral, on lui préfère le passé composé."}
    ],
    "Figures de style": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce qu'une métaphore ?",opts:["Une comparaison avec 'comme'","Une comparaison sans outil comparatif qui assimile deux réalités","Une exagération","Une répétition"],ans:1,explain:"La métaphore assimile deux réalités sans outil de comparaison. Ex : 'La vie est un long fleuve tranquille.' (≠ comparaison : 'La vie est comme un fleuve')."},
      {type:"mcq",diff:"facile",q:"Identifiez la figure de style : 'Il est fort comme un lion.'",opts:["Métaphore","Comparaison","Hyperbole","Allitération"],ans:1,explain:"C'est une comparaison : on compare 'il' (comparé) et 'lion' (comparant) avec l'outil comparatif 'comme'."},
      {type:"tf",diff:"facile",q:"L'hyperbole est une figure d'atténuation.",ans:false,explain:"Faux ! L'hyperbole est une figure d'exagération. Ex : 'Je t'ai attendu mille ans !' La litote est la figure d'atténuation."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce que la personnification ?",opts:["Décrire un lieu","Attribuer des caractéristiques humaines à un objet, un animal ou une idée abstraite","Faire une liste d'éléments","Répéter un son"],ans:1,explain:"La personnification prête des traits humains à ce qui n'est pas humain. Ex : 'Le vent gémit', 'La forêt murmure ses secrets'."},
      {type:"mcq",diff:"normal",q:"Quelle figure de style consiste à répéter des sons consonantiques similaires ?",opts:["Assonance","Allitération","Anaphore","Antithèse"],ans:1,explain:"L'allitération est la répétition de sons consonantiques. Ex : 'Pour qui sont ces serpents qui sifflent sur vos têtes ?' (Racine)."},
      {type:"open",diff:"difficile",q:"Définissez l'antithèse et donnez un exemple.",key:["antithèse","opposé","contraste","opposition","deux","idées"],correctAnswer:"L'antithèse oppose deux idées ou termes contraires pour créer un effet de contraste.",explain:"Ex : 'Viens, il fait si doux, si chaud… tu meurs de froid.' L'antithèse souligne une opposition pour renforcer le sens."},
      {type:"tf",diff:"difficile",q:"L'anaphore est la répétition d'un même mot ou groupe de mots en début de plusieurs phrases ou vers.",ans:true,explain:"Ex : 'Je t'aime pour ta sagesse / Je t'aime pour ta douceur / Je t'aime pour ta tendresse.' La répétition de 'Je t'aime' crée un effet d'insistance."}
    ],
    "Méthodologie du Brevet": [
      {type:"mcq",diff:"facile",q:"Quelle est la structure d'une introduction de texte argumentatif ?",opts:["Thèse → Arguments → Conclusion","Accroche → Présentation du sujet → Annonce du plan","Contexte → Problématique → Développement","Définition → Exemples → Synthèse"],ans:1,explain:"L'introduction comprend : une accroche (citation, question, fait), la présentation du sujet et l'annonce du plan. Elle 'accroche' le lecteur."},
      {type:"mcq",diff:"facile",q:"Qu'est-ce qu'un texte narratif ?",opts:["Un texte qui décrit","Un texte qui argumente","Un texte qui raconte une histoire, des événements","Un texte qui explique un phénomène"],ans:2,explain:"Un texte narratif raconte une histoire (roman, conte, nouvelle). Il se caractérise par une chronologie, des personnages et une progression narrative."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce qu'un argument dans un texte argumentatif ?",opts:["Un fait inventé","Une raison qui soutient ou réfute une thèse, souvent illustrée d'un exemple","Une description","Une anecdote personnelle"],ans:1,explain:"L'argument soutient la thèse. Il doit être suivi d'un exemple concret (illustrer l'argument) pour être convaincant."},
      {type:"tf",diff:"normal",q:"Dans un commentaire de texte, on peut donner son avis personnel sans le justifier.",ans:false,explain:"Faux ! Tout point de vue doit être argumenté et illustré par des exemples tirés du texte. Un avis non justifié n'a aucune valeur dans un devoir littéraire."},
      {type:"open",diff:"difficile",q:"Qu'est-ce qu'une thèse dans un texte argumentatif ?",key:["thèse","point de vue","affirmation","défend","opinion","auteur"],correctAnswer:"La thèse est le point de vue, l'opinion que l'auteur défend dans son texte.",explain:"Dans un texte argumentatif, l'auteur soutient une thèse (sa position) avec des arguments et des exemples, pour convaincre le lecteur."}
    ]
  },

  /* ==================== MATHÉMATIQUES ==================== */
  maths: {
    "Calcul et Nombres": [
      {type:"mcq",diff:"facile",q:"Combien vaut 15 % de 200 ?",opts:["20","25","30","35"],ans:2,explain:"15 % de 200 = 200 × 15 ÷ 100 = 200 × 0,15 = 30."},
      {type:"mcq",diff:"facile",q:"Quel est le résultat de ¾ + ½ ?",opts:["1","1 ¼","5/4","1 ½"],ans:1,explain:"¾ + ½ = ¾ + 2/4 = 5/4 = 1 ¼. Il faut réduire au même dénominateur."},
      {type:"tf",diff:"facile",q:"0,5 est égal à ½.",ans:true,explain:"0,5 = 5/10 = 1/2. La conversion décimal ↔ fraction est fondamentale."},
      {type:"mcq",diff:"normal",q:"Un article coûte 80 € après une réduction de 20 %. Quel était son prix initial ?",opts:["96 €","100 €","104 €","64 €"],ans:1,explain:"Si le prix final est 80 % du prix initial : prix initial = 80 ÷ 0,8 = 100 €."},
      {type:"mcq",diff:"normal",q:"Quelle est la valeur de 2³ × 2² ?",opts:["2⁵","2⁶","4⁵","2⁸"],ans:0,explain:"Règle des puissances : aᵐ × aⁿ = aᵐ⁺ⁿ. Donc 2³ × 2² = 2^(3+2) = 2⁵ = 32."},
      {type:"mcq",diff:"normal",q:"Simplifiez la fraction 18/24.",opts:["3/4","2/3","9/12","6/8"],ans:0,explain:"PGCD(18, 24) = 6. 18÷6 = 3, 24÷6 = 4. Donc 18/24 = 3/4."},
      {type:"tf",diff:"difficile",q:"La racine carrée de 144 est 12.",ans:true,explain:"√144 = 12 car 12² = 144. Carré parfait à connaître."},
      {type:"mcq",diff:"difficile",q:"Un véhicule consomme 6 L/100 km. Combien consomme-t-il sur 350 km ?",opts:["18 L","20 L","21 L","24 L"],ans:2,explain:"Consommation = 350 × 6 / 100 = 2100 / 100 = 21 L."}
    ],
    "Géométrie et Théorèmes": [
      {type:"mcq",diff:"facile",q:"Qu'énonce le théorème de Pythagore ?",opts:["Dans tout triangle, la somme des angles est 180°","Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés","Deux triangles sont semblables si leurs angles sont égaux","L'aire d'un cercle est πr²"],ans:1,explain:"Pythagore : a² + b² = c² où c est l'hypoténuse (côté opposé à l'angle droit). S'applique uniquement aux triangles rectangles."},
      {type:"mcq",diff:"facile",q:"Quelle est la formule de l'aire d'un triangle ?",opts:["base × hauteur","(base × hauteur) ÷ 2","base + hauteur","base² ÷ 2"],ans:1,explain:"Aire d'un triangle = (base × hauteur) ÷ 2. La hauteur est perpendiculaire à la base."},
      {type:"tf",diff:"facile",q:"La somme des angles d'un triangle est toujours 180°.",ans:true,explain:"C'est une propriété fondamentale : la somme des trois angles d'un triangle vaut toujours 180°."},
      {type:"mcq",diff:"normal",q:"Un triangle a des côtés 3, 4 et 5. Est-il rectangle ?",opts:["Non, impossible à dire","Oui, car 3² + 4² = 5²","Non, car 3 + 4 ≠ 5","Oui, car il a un angle droit visible"],ans:1,explain:"3² + 4² = 9 + 16 = 25 = 5². La réciproque du théorème de Pythagore confirme qu'il est rectangle."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce que le théorème de Thalès ?",opts:["Il relie angles et côtés d'un triangle","Si deux droites parallèles sont coupées par deux sécantes, les rapports de longueurs correspondants sont égaux","Il donne la formule de l'aire d'un trapèze","Il permet de calculer l'hypoténuse"],ans:1,explain:"Thalès : si (BC) // (DE) dans un triangle, alors AB/AD = AC/AE = BC/DE. Permet de calculer des longueurs par proportionnalité."},
      {type:"tf",diff:"difficile",q:"Le périmètre d'un cercle de rayon r est 2πr.",ans:true,explain:"Périmètre (ou circonférence) = 2πr. L'aire du disque est πr². Ces deux formules sont fondamentales."},
      {type:"mcq",diff:"difficile",q:"Dans un triangle ABC rectangle en A, avec AB = 6 cm et AC = 8 cm, quelle est la longueur BC ?",opts:["10 cm","14 cm","7 cm","√28 cm"],ans:0,explain:"BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100. BC = √100 = 10 cm."}
    ],
    "Statistiques et Probabilités": [
      {type:"mcq",diff:"facile",q:"On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un 3 ?",opts:["1/3","1/6","1/2","1/4"],ans:1,explain:"Il y a 1 résultat favorable (le 3) sur 6 résultats possibles équiprobables. P(3) = 1/6."},
      {type:"mcq",diff:"facile",q:"Dans la liste : 3, 5, 7, 7, 8 — quelle est la médiane ?",opts:["5","7","8","6"],ans:1,explain:"La médiane est la valeur centrale dans une liste ordonnée. Ici : 3, 5, 7, 7, 8 → 5 valeurs, la médiane est la 3e = 7."},
      {type:"tf",diff:"facile",q:"La probabilité d'un événement est toujours comprise entre 0 et 1.",ans:true,explain:"P = 0 signifie impossible, P = 1 signifie certain. Toute probabilité est entre ces deux valeurs."},
      {type:"mcq",diff:"normal",q:"Quelle est la moyenne de : 10, 12, 8, 14, 16 ?",opts:["10","12","13","11"],ans:1,explain:"Moyenne = (10 + 12 + 8 + 14 + 16) ÷ 5 = 60 ÷ 5 = 12."},
      {type:"mcq",diff:"normal",q:"On tire une carte dans un jeu de 52 cartes. Quelle est la probabilité de tirer un roi ?",opts:["1/13","1/4","1/52","4/52"],ans:0,explain:"Il y a 4 rois dans 52 cartes. P(roi) = 4/52 = 1/13. On simplifie en divisant par 4."},
      {type:"tf",diff:"difficile",q:"Dans une expérience aléatoire, la somme des probabilités de tous les événements élémentaires est 1.",ans:true,explain:"La somme de toutes les probabilités d'une expérience aléatoire vaut toujours 1 (loi des probabilités totales)."}
    ],
    "Algèbre et Équations": [
      {type:"mcq",diff:"facile",q:"Que vaut x si 2x + 4 = 10 ?",opts:["2","3","4","5"],ans:1,explain:"2x + 4 = 10 → 2x = 10 - 4 → 2x = 6 → x = 3."},
      {type:"mcq",diff:"facile",q:"Développez (x + 2)² ?",opts:["x² + 4","x² + 2x + 4","x² + 4x + 4","x² + 4x"],ans:2,explain:"(a + b)² = a² + 2ab + b². Donc (x + 2)² = x² + 2×x×2 + 2² = x² + 4x + 4."},
      {type:"tf",diff:"normal",q:"L'équation 3x - 6 = 0 a pour solution x = 2.",ans:true,explain:"3x - 6 = 0 → 3x = 6 → x = 2. On isole x."},
      {type:"mcq",diff:"normal",q:"Factorisez x² - 9.",opts:["(x-3)(x+3)","(x-9)(x+1)","(x-3)²","x(x-9)"],ans:0,explain:"x² - 9 = x² - 3². On utilise l'identité remarquable a² - b² = (a-b)(a+b). Donc x² - 9 = (x-3)(x+3)."},
      {type:"mcq",diff:"difficile",q:"Quelle est la solution du système : x + y = 5 et x - y = 1 ?",opts:["x=3, y=2","x=4, y=1","x=2, y=3","x=1, y=4"],ans:0,explain:"Addition des deux équations : 2x = 6 → x = 3. Puis y = 5 - 3 = 2. Vérification : 3 - 2 = 1 ✓"}
    ]
  },

  /* ==================== SCIENCES ==================== */
  sciences: {
    "SVT — Vivant, corps humain et Terre": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce que l'ADN ?",opts:["Une protéine musculaire","La molécule support de l'information génétique","Un acide gastrique","Une hormone de croissance"],ans:1,explain:"L'ADN (Acide DésoxyriboNucléique) est la molécule qui contient les informations génétiques de l'organisme. Il est localisé dans le noyau des cellules."},
      {type:"mcq",diff:"facile",q:"Où a lieu la digestion des aliments dans le corps humain ?",opts:["Uniquement dans l'estomac","Dans le tube digestif (bouche, estomac, intestins)","Uniquement dans le foie","Dans les poumons"],ans:1,explain:"La digestion se déroule dans tout le tube digestif : bouche (mastication, salive), estomac (acidité), intestin grêle (absorption des nutriments), côlon (eau)."},
      {type:"tf",diff:"facile",q:"Les chromosomes sont présents dans le noyau des cellules.",ans:true,explain:"Les chromosomes sont des structures composées d'ADN et de protéines, localisées dans le noyau cellulaire. L'être humain possède 46 chromosomes (23 paires)."},
      {type:"mcq",diff:"normal",q:"Qu'appelle-t-on un gène ?",opts:["Une cellule nerveuse","Un segment d'ADN qui code pour une protéine ou un caractère héréditaire","Un chromosome entier","Un acide aminé"],ans:1,explain:"Un gène est une séquence d'ADN qui porte l'information pour fabriquer une protéine ou déterminer un caractère héréditaire. L'humain possède environ 20 000 à 25 000 gènes."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce que la tectonique des plaques ?",opts:["Le mouvement des océans","La théorie selon laquelle la lithosphère est divisée en plaques qui se déplacent","L'étude des tremblements de terre","La formation des nuages"],ans:1,explain:"La tectonique des plaques explique les séismes, les éruptions volcaniques et la formation des chaînes de montagnes par le mouvement des plaques lithosphériques."},
      {type:"open",diff:"difficile",q:"Expliquez ce qu'est la mutation génétique.",key:["mutation","ADN","modification","gène","aléatoire","hérédité","caractère"],correctAnswer:"Modification spontanée ou provoquée de la séquence d'ADN d'un gène, pouvant entraîner un changement de caractère héréditaire.",explain:"Les mutations peuvent être bénéfiques (source de biodiversité), neutres ou nocives (maladies génétiques). Elles sont transmissibles si elles touchent les cellules reproductrices."},
      {type:"tf",diff:"difficile",q:"La photosynthèse produit du dioxygène et du glucose à partir de CO2 et de lumière.",ans:true,explain:"6CO2 + 6H2O + lumière → C6H12O6 (glucose) + 6O2. La photosynthèse a lieu dans les chloroplastes des cellules végétales."}
    ],
    "Physique-Chimie": [
      {type:"mcq",diff:"facile",q:"Quelle est la formule de la vitesse ?",opts:["v = m × a","v = d / t","v = F / m","v = P / V"],ans:1,explain:"Vitesse = distance / temps (v = d/t). Unités : m/s ou km/h. Conversion : 1 m/s = 3,6 km/h."},
      {type:"mcq",diff:"facile",q:"Un pH de 7 correspond à une solution :",opts:["Acide","Neutre","Basique","Saturée"],ans:1,explain:"pH < 7 = acide, pH = 7 = neutre (eau pure), pH > 7 = basique. Le pH mesure la concentration en ions H⁺."},
      {type:"tf",diff:"facile",q:"Un atome est électriquement neutre.",ans:true,explain:"L'atome a autant de protons (charges +) dans le noyau que d'électrons (charges −) autour du noyau. Il est donc électriquement neutre."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce que l'énergie cinétique ?",opts:["L'énergie stockée dans un ressort","L'énergie due au mouvement d'un objet","L'énergie chimique d'un carburant","L'énergie lumineuse"],ans:1,explain:"Ec = ½ × m × v². L'énergie cinétique dépend de la masse et de la vitesse. Plus un objet est lourd et rapide, plus son énergie cinétique est grande."},
      {type:"mcq",diff:"normal",q:"Un objet a une masse de 2 kg et roule à 10 m/s. Quelle est son énergie cinétique ?",opts:["20 J","100 J","200 J","10 J"],ans:1,explain:"Ec = ½ × m × v² = ½ × 2 × 10² = 1 × 100 = 100 J."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce qu'un ion ?",opts:["Un atome stable","Un atome ayant perdu ou gagné un ou plusieurs électrons","Une molécule organique","Un neutron libre"],ans:1,explain:"Un ion est un atome (ou groupe d'atomes) qui a perdu (cation +) ou gagné (anion −) un ou plusieurs électrons."},
      {type:"open",diff:"difficile",q:"Expliquez la différence entre un acide et une base.",key:["acide","base","pH","H+","OH-","ions","neutre"],correctAnswer:"Un acide libère des ions H⁺ en solution (pH < 7) ; une base libère des ions OH⁻ (pH > 7).",explain:"Ex. acide : vinaigre (acide acétique), citron (acide citrique). Ex. base : soude (NaOH), bicarbonate. La neutralisation acide + base → sel + eau."},
      {type:"tf",diff:"difficile",q:"La réaction chimique entre un acide et une base s'appelle neutralisation.",ans:true,explain:"Acide + base → sel + eau. Ex : HCl + NaOH → NaCl + H2O. Le pH de la solution obtenue tend vers 7 (neutralité)."}
    ],
    "Technologie et Algorithmique": [
      {type:"mcq",diff:"facile",q:"Qu'est-ce qu'un algorithme ?",opts:["Un programme informatique","Une suite d'instructions ordonnées permettant de résoudre un problème","Un type de processeur","Un langage de programmation"],ans:1,explain:"Un algorithme est une suite finie et ordonnée d'instructions permettant de résoudre un problème ou d'accomplir une tâche."},
      {type:"mcq",diff:"facile",q:"Dans un programme, à quoi sert une boucle 'Pour' (for) ?",opts:["À prendre une décision","À répéter un bloc d'instructions un nombre déterminé de fois","À définir une variable","À afficher un résultat"],ans:1,explain:"La boucle 'Pour' (for) répète un bloc d'instructions un nombre de fois fixé à l'avance. Ex : 'Pour i de 1 à 10 : afficher i'."},
      {type:"tf",diff:"facile",q:"Une instruction conditionnelle 'Si... Sinon' permet d'exécuter des instructions différentes selon une condition.",ans:true,explain:"Si (condition) alors [instructions A] sinon [instructions B]. Permet de prendre des décisions dans un programme."},
      {type:"mcq",diff:"normal",q:"Qu'est-ce qu'une variable en programmation ?",opts:["Un bug","Un espace mémoire nommé qui peut stocker une valeur","Un type de boucle","Un fichier de données"],ans:1,explain:"Une variable est un espace mémoire identifié par un nom (ex : 'age', 'score') dans lequel on stocke une valeur qui peut évoluer au cours du programme."},
      {type:"mcq",diff:"normal",q:"Quel matériau est un conducteur électrique ?",opts:["Bois","Plastique","Caoutchouc","Cuivre"],ans:3,explain:"Le cuivre est un excellent conducteur électrique, utilisé dans les fils électriques. Le bois, le plastique et le caoutchouc sont des isolants."},
      {type:"open",diff:"difficile",q:"Qu'est-ce que le développement durable appliqué aux matériaux ?",key:["recyclage","matériaux","renouvelable","durable","écologie","ressource","impact"],correctAnswer:"Choisir des matériaux recyclables, renouvelables ou à faible impact environnemental pour concevoir des objets durables.",explain:"Ex : préférer l'aluminium recyclé au plastique vierge, utiliser le bois issu de forêts gérées durablement, concevoir des objets réparables (économie circulaire)."},
      {type:"tf",diff:"difficile",q:"Le binaire est un système de numération en base 2 utilisant uniquement les chiffres 0 et 1.",ans:true,explain:"Les ordinateurs fonctionnent en binaire (base 2). Ex : 5 en binaire = 101 (1×4 + 0×2 + 1×1). Chaque chiffre binaire s'appelle un bit."}
    ]
  }
};

/* ============================================================
   FLASHCARDS — Toutes matières
   ============================================================ */
const FLASHCARDS = {
  histoire: [
    {q:"Quand commence la Première Guerre mondiale ?",a:"1914",explain:"Déclenchée par l'assassinat de François-Ferdinand à Sarajevo"},
    {q:"Quand se termine la Première Guerre mondiale ?",a:"11 novembre 1918",explain:"Armistice signé dans un wagon à Rethondes"},
    {q:"Qu'est-ce que la Shoah ?",a:"Génocide des Juifs par les nazis (6 millions de victimes)",explain:"Exterminés dans les camps d'Auschwitz, Treblinka, Sobibor..."},
    {q:"Qu'est-ce que l'Appel du 18 juin 1940 ?",a:"De Gaulle appelle depuis Londres à continuer le combat",explain:"Il refuse l'armistice signé par Pétain avec l'Allemagne nazie"},
    {q:"Quand le mur de Berlin tombe-t-il ?",a:"9 novembre 1989",explain:"Symbole de la fin de la Guerre froide"},
    {q:"Qu'est-ce que le Traité de Versailles (1919) ?",a:"Traité de paix mettant fin à la WWI",explain:"Impose de lourdes réparations à l'Allemagne — semence du nazisme"},
    {q:"Quand est fondée la Ve République ?",a:"1958",explain:"De Gaulle rédige une Constitution renforçant le président"},
    {q:"Qu'est-ce que le D-Day ?",a:"Débarquement allié en Normandie, 6 juin 1944",explain:"Plus grand débarquement amphibie de l'histoire"},
    {q:"Quand l'Algérie obtient-elle son indépendance ?",a:"1962 (accords d'Évian)",explain:"Après 8 ans de guerre (1954-1962)"},
    {q:"Qu'est-ce que la Guerre froide ?",a:"Affrontement indirect USA/URSS (1947-1991)",explain:"Sans conflit armé direct entre les deux superpuissances"}
  ],
  geo: [
    {q:"Définissez la mondialisation.",a:"Intensification des échanges à l'échelle mondiale",explain:"Marchandises, capitaux, personnes, informations"},
    {q:"Qu'est-ce que l'IDH ?",a:"Indice combinant espérance de vie, éducation et revenu (0 à 1)",explain:"Créé par le PNUD pour mesurer le développement humain"},
    {q:"Quelle est la capitale de l'Australie ?",a:"Canberra",explain:"Souvent confondue avec Sydney, la plus grande ville"},
    {q:"Qu'est-ce que le développement durable ?",a:"Développement répondant aux besoins présents sans compromettre l'avenir",explain:"3 piliers : économique, social, environnemental"},
    {q:"Quelle est la capitale du Brésil ?",a:"Brasilia",explain:"Construite de 1956 à 1960, remplace Rio de Janeiro"},
    {q:"Qu'est-ce que les BRICS ?",a:"Brésil, Russie, Inde, Chine, Afrique du Sud — pays émergents",explain:"~40% de la population mondiale"},
    {q:"Qu'est-ce que la littoralisation ?",a:"Concentration des populations/activités sur les littoraux",explain:"60% des humains vivent à moins de 60 km d'une côte"},
    {q:"Quel est le pays le plus peuplé du monde en 2024 ?",a:"L'Inde (devant la Chine depuis 2023)",explain:"Plus de 1,4 milliard d'habitants"}
  ],
  emc: [
    {q:"Qu'est-ce que la DDHC ?",a:"Déclaration des Droits de l'Homme et du Citoyen — 1789",explain:"Liberté, propriété, sûreté, résistance à l'oppression"},
    {q:"Quand est adoptée la DUDH ?",a:"10 décembre 1948 par l'ONU",explain:"Après la Seconde Guerre mondiale"},
    {q:"Qu'est-ce que la laïcité ?",a:"Séparation Église/État, garantie de la liberté de conscience",explain:"Loi de 1905 — l'État est neutre religieusement"},
    {q:"Quelle est la devise de la République ?",a:"Liberté, Égalité, Fraternité",explain:"Inscrite dans la Constitution de 1958"},
    {q:"Qu'est-ce que la présomption d'innocence ?",a:"Tout accusé est considéré innocent jusqu'à preuve de culpabilité",explain:"Droit fondamental garanti par la DDHC et la CEDH"},
    {q:"À quel âge vote-t-on en France ?",a:"18 ans (depuis 1974)",explain:"Abaissé de 21 ans sous Giscard d'Estaing"},
    {q:"Quels sont les 3 pouvoirs dans une démocratie ?",a:"Exécutif, législatif, judiciaire",explain:"Séparation des pouvoirs — théorie de Montesquieu (1748)"}
  ],
  francais: [
    {q:"Qu'est-ce qu'une métaphore ?",a:"Comparaison sans outil comparatif",explain:"Ex : 'La vie est un long fleuve tranquille'"},
    {q:"Quelle est la différence entre métaphore et comparaison ?",a:"La comparaison utilise 'comme/tel/ainsi que', la métaphore non",explain:"Ex comparaison : 'Il est fort comme un lion'. Métaphore : 'Il est un lion.'"},
    {q:"Qu'est-ce qu'une hyperbole ?",a:"Figure d'exagération pour produire un effet",explain:"Ex : 'Je t'ai attendu mille ans !'"},
    {q:"Qu'est-ce qu'un COD ?",a:"Complément d'objet direct — lié au verbe sans préposition",explain:"Question : 'quoi ?' ou 'qui ?' — Ex : 'Je mange une pomme' (quoi ?)"},
    {q:"Qu'est-ce qu'un COI ?",a:"Complément d'objet indirect — lié par une préposition (à, de...)",explain:"Question : 'à qui ? de quoi ?' — Ex : 'Je parle à Marie'"},
    {q:"Qu'est-ce que l'imparfait exprime ?",a:"Une action habituelle, répétée ou une description dans le passé",explain:"Ex : 'Chaque matin, il lisait le journal'"},
    {q:"Qu'est-ce que le subjonctif exprime ?",a:"Doute, souhait, obligation, sentiment — après 'que'",explain:"Ex : 'Il faut que tu viennes'"},
    {q:"Qu'est-ce qu'une allitération ?",a:"Répétition de sons consonantiques dans un texte",explain:"Ex : 'Pour qui sont ces serpents qui sifflent sur vos têtes ?' (Racine)"},
    {q:"Qu'est-ce qu'une anaphore ?",a:"Répétition d'un mot ou groupe en début de phrase",explain:"Ex : 'Je t'aime pour ta sagesse / Je t'aime pour ta douceur'"},
    {q:"Qu'est-ce qu'une thèse dans un texte argumentatif ?",a:"Le point de vue que l'auteur défend",explain:"Elle est soutenue par des arguments et des exemples"}
  ],
  maths: [
    {q:"Quelle est la formule de Pythagore ?",a:"a² + b² = c² (c = hypoténuse)",explain:"S'applique uniquement dans les triangles rectangles"},
    {q:"Quelle est la formule de l'aire d'un triangle ?",a:"(base × hauteur) ÷ 2",explain:"La hauteur est perpendiculaire à la base"},
    {q:"Quelle est la formule de l'aire d'un cercle ?",a:"A = π × r²",explain:"r = rayon du cercle"},
    {q:"Quelle est la formule du périmètre d'un cercle ?",a:"P = 2 × π × r",explain:"Aussi appelée circonférence"},
    {q:"Qu'est-ce que la médiane ?",a:"La valeur centrale d'une série ordonnée",explain:"Si nombre pair de valeurs : moyenne des deux valeurs centrales"},
    {q:"Que vaut 15% de 200 ?",a:"30",explain:"200 × 15 / 100 = 30"},
    {q:"Comment développer (a+b)² ?",a:"a² + 2ab + b²",explain:"Identité remarquable à connaître absolument"},
    {q:"Qu'est-ce que le théorème de Thalès ?",a:"Si BC // DE, alors AB/AD = AC/AE = BC/DE",explain:"Permet de calculer des longueurs par proportionnalité"},
    {q:"Comment calculer une probabilité simple ?",a:"P = nombre de cas favorables / nombre de cas possibles",explain:"Toujours comprise entre 0 (impossible) et 1 (certain)"},
    {q:"Comment calculer une moyenne ?",a:"Somme des valeurs ÷ nombre de valeurs",explain:"Ex : moyenne de 4, 6, 8 → (4+6+8)/3 = 6"}
  ],
  sciences: [
    {q:"Qu'est-ce que l'ADN ?",a:"Molécule support de l'information génétique",explain:"Localisée dans le noyau des cellules, composée de 4 bases"},
    {q:"Qu'est-ce qu'un gène ?",a:"Segment d'ADN codant pour une protéine ou un caractère",explain:"L'humain possède ~20 000 à 25 000 gènes"},
    {q:"Combien de chromosomes possède l'être humain ?",a:"46 (23 paires)",explain:"23 viennent du père, 23 de la mère"},
    {q:"Quelle est la formule de la vitesse ?",a:"v = d / t (distance / temps)",explain:"Unités : m/s ou km/h — conversion : 1 m/s = 3,6 km/h"},
    {q:"Qu'est-ce que le pH ?",a:"Mesure de l'acidité d'une solution (0 à 14)",explain:"pH < 7 = acide, pH = 7 = neutre, pH > 7 = basique"},
    {q:"Qu'est-ce que l'énergie cinétique ?",a:"Énergie due au mouvement — Ec = ½mv²",explain:"Dépend de la masse et du carré de la vitesse"},
    {q:"Qu'est-ce qu'un algorithme ?",a:"Suite d'instructions ordonnées pour résoudre un problème",explain:"À la base de tout programme informatique"},
    {q:"Qu'est-ce que la photosynthèse ?",a:"Production de glucose et O2 par les végétaux à partir de CO2, H2O et lumière",explain:"A lieu dans les chloroplastes — base de la vie sur Terre"},
    {q:"Qu'est-ce que la tectonique des plaques ?",a:"Théorie expliquant les mouvements des plaques de la lithosphère",explain:"Explique séismes, volcans et formation des montagnes"},
    {q:"Qu'est-ce qu'un ion ?",a:"Atome ayant perdu (cation +) ou gagné (anion −) des électrons",explain:"Ex : Na⁺ (sodium), Cl⁻ (chlorure)"}
  ]
};

const SUBJECT_KEYS=['histoire','geo','emc','francais','maths','svt','physique','technologie'];
const STORAGE_KEYS={
  profile:'brevet_profile_v3',
  streak:'brevet_streak_v2',
  theme:'brevet-theme',
  ranked:'brevet_ranked_v1',
  weakQuestions:'brevet_weak_questions_v1',
  dailyChallenges:'brevet_daily_challenges_v1'
};
const XP_RULES={
  baseLevelXp:260,
  growth:1.10,
  maxLevel:50,
  question:{mcq:6,tf:6,open:10,date:10},
  quizBonus:24,
  brevetBlancBonus:120
};
const DIFFICULTY_TARGETS={facile:8,normal:12,difficile:16};
const MIN_RANKED_LEVEL=8;
const DAILY_CHALLENGE_TEMPLATES=[
  {id:'runs-2',label:'Faire 2 quiz',description:'Terminez deux quiz ou modes de révision aujourd’hui.',metric:'quizzesCompleted',target:2,rewardXp:40},
  {id:'streak-5',label:'Réussir 5 questions d’affilée',description:'Enchaînez cinq bonnes réponses sans erreur.',metric:'bestCorrectStreak',target:5,rewardXp:45},
  {id:'xp-100',label:'Gagner 100 XP',description:'Accumulez 100 XP de jeu dans la journée.',metric:'xpGained',target:100,rewardXp:55},
  {id:'answers-15',label:'Répondre à 15 questions',description:'Avancez dans vos révisions avec quinze réponses au total.',metric:'questionsAnswered',target:15,rewardXp:35},
  {id:'weak-1',label:'Faire 1 révision ciblée',description:'Lancez une session “Points faibles” aujourd’hui.',metric:'weakReviewsCompleted',target:1,rewardXp:35},
  {id:'ranked-1',label:'Terminer 1 partie classée',description:'Finissez une session classée pour gagner un bonus.',metric:'rankedRuns',target:1,rewardXp:70,requiresLevel:MIN_RANKED_LEVEL}
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
  starry:{label:'Nuit Étoilée',unlockLevel:5,preview:'linear-gradient(135deg,#0a1b4f,#102b74,#1a4bb4)'},
  'gold-noir':{label:'Or & Noir',unlockLevel:10,preview:'linear-gradient(135deg,#111111,#3b2f10,#a37a19)'},
  circuit:{label:'Circuit Émeraude',unlockLevel:15,preview:'linear-gradient(135deg,#062527,#0f4c4f,#33a16f)'},
  aurora:{label:'Aurore Boréale',unlockLevel:20,preview:'linear-gradient(135deg,#08253d,#114564,#59d6c2)'},
  ocean:{label:'Océan',unlockLevel:22,preview:'linear-gradient(135deg,#07253c,#0c5f96,#7ed6ff)'},
  sunset:{label:'Coucher de Soleil',unlockLevel:25,preview:'linear-gradient(135deg,#481b2f,#8f3f48,#ffb05a)'},
  paper:{label:'Carnet Vintage',unlockLevel:30,preview:'linear-gradient(135deg,#fffaf1,#eadcc1,#c79b67)'},
  nebula:{label:'Nébuleuse Rose',unlockLevel:35,preview:'linear-gradient(135deg,#170b2b,#4a246f,#ff8bd1)'},
  'ranked-bronze':{label:'Bronze',unlockRp:60,preview:'linear-gradient(135deg,#392217,#6c4631,#8a5c41)'},
  'ranked-silver':{label:'Argent',unlockRp:320,preview:'linear-gradient(135deg,#223041,#536980,#a4b6c9)'},
  'ranked-gold':{label:'Or',unlockRp:560,preview:'linear-gradient(135deg,#322108,#8f6216,#d1a22f)'},
  'ranked-diamond':{label:'Diamant',unlockRp:1080,preview:'linear-gradient(135deg,#c8f1ff,#eefaff,#9fe1ff)'},
  'elite-cosmos':{label:'Élite',unlockRp:1400,preview:'linear-gradient(135deg,#130824,#261045,#43186c)'}
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
  classic:{label:'Classique',unlockLevel:1,desc:'Carillons doux et propres.',wave:'sine',success:[784,988],error:[196,156],volume:.045},
  '8bit':{label:'8-bit',unlockLevel:5,desc:'Bips arcade rétro pour les bonnes réponses.',wave:'square',success:[880,1175],error:[220,165],volume:.035},
  crystal:{label:'Cristal',unlockLevel:12,desc:'Sons brillants et plus aériens.',wave:'triangle',success:[660,990],error:[210,180],volume:.04},
  cosmic:{label:'Cosmique',unlockLevel:20,desc:'Un timbre plus ample pour les hauts niveaux.',wave:'sawtooth',success:[523,784],error:[185,146],volume:.03},
  prestige:{label:'Prestige',unlockLevel:35,desc:'Finition noble pour les joueurs installés.',wave:'triangle',success:[740,1110],error:[174,138],volume:.05}
};
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

function getUnlockedSoundPackKeys(level){
  return Object.entries(SOUND_PACKS)
    .filter(([,pack])=>level>=pack.unlockLevel)
    .map(([key])=>key);
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

function ensureAudioContext(){
  if(typeof window==='undefined') return null;
  const AudioCtor=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtor) return null;
  if(!audioContext) audioContext=new AudioCtor();
  if(audioContext.state==='suspended') audioContext.resume().catch(()=>{});
  return audioContext;
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
  return q.correctAnswer||'';
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

function getOpenAnswerKeywords(q){
  const source=(Array.isArray(q?.key) && q.key.length)
    ? q.key
    : extractKeywords(`${q?.correctAnswer||''} ${q?.explain||q?.explanation||''}`);
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
  const hits=keywords.filter(keyword=>keyword.split(' ').every(part=>normalizedAnswer.includes(part)));
  return {
    ok:hits.length>=getOpenAnswerRequirement(keywords),
    hits,
    keywords
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

splitScienceContent();
applyQuestionExpansions();
applyFlashcardQuestions();
applyFlashcardDerivedQuestions();
normalizeQuestionBank();
assignQuestionIds();
REVISION_SHEETS=Object.fromEntries(
  Object.entries(DB).map(([subject,chapters])=>[
    subject,
    Object.entries(chapters).map(([chapter,questions])=>buildSheetFromChapter(subject,chapter,questions))
  ])
);

/* ============================================================
   ÉTAT
   ============================================================ */
let state = {
  subject:'histoire', chapters:[], difficulty:'normal',
  options:{timer:false,correction:true,mix:false,survival:false},
  questions:[], currentIdx:0, score:0, errors:[],
  startTime:null, timerInterval:null, timerLeft:30, answered:false,
  matchState:{selected:null,pairs:{},done:0,total:0},
  isBrevetBlanc:false, bbGlobalTimerInterval:null,
  bbTimeLeft:900, bbBySubject:{},
  runRewarded:false, sessionEarnedXp:0, correctAnswersInRun:0,
  unlockedThemesThisRun:[],
  mode:'standard',
  rankedTier:null,
  rankedRpDelta:0
};
let flashState={cards:[],idx:0,flipped:false};
let playerProfile=null;
let streakState=null;
let rankedProfile=null;
let weakQuestionIds=[];
let dailyChallengeState=null;
let dailyChallengeRewardLock=false;
let currentSheetSubject='histoire';

/* ============================================================
   UTILITAIRES
   ============================================================ */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function showScreen(id){
  if(id==='screen-history'){
    openVipScreen();
    return;
  }
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const screen=document.getElementById(id);
  if(!screen) return;
  screen.classList.add('active');
  window.scrollTo(0,0);
  if(id==='screen-flash-select') updateFlashCounts();
  if(id==='screen-ranked-hub') updateRankedUI();
  if(id==='screen-daily-challenges') renderDailyChallenges();
  if(id==='screen-vip'){
    updateVipUI();
    renderHistory('stats-history-list');
  }
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
  streak:{icon:'🔥',label:'Série'}
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
  const profile={
    pseudo:String(raw.pseudo||'').trim(),
    avatarConfigured:!!raw.userAvatarConfig,
    totalXp:Math.max(0,Math.floor(raw.totalXp||0)),
    xpBySubject:{...getDefaultXpBySubject(),...(raw.xpBySubject||{})},
    unlockedThemes:Array.isArray(raw.unlockedThemes)?raw.unlockedThemes.map(normalizeThemeKey):['dark','light'],
    currentTheme:migratedTheme,
    selectedTitle:raw.selectedTitle||'global:Novice',
    userAvatarConfig:normalizeUserAvatarConfig(raw.userAvatarConfig||{},raw.pseudo||raw.selectedAvatar||'BrevetPro',50),
    soundPack:raw.soundPack||'classic',
    streakShields:Math.max(0,Math.floor(raw.streakShields||0)),
    shieldMilestone:Math.max(0,Math.floor(raw.shieldMilestone||0)),
    stats:{
      questionsAnswered:Math.max(0,Math.floor(statsRaw.questionsAnswered||0)),
      revisionSeconds:Math.max(0,Math.floor(statsRaw.revisionSeconds||0)),
      completedRuns:Math.max(0,Math.floor(statsRaw.completedRuns||0)),
      answersBySubject:{...getDefaultAnswerStats(),...(statsRaw.answersBySubject||{})}
    }
  };
  profile.unlockedThemes=Array.from(new Set(['dark','light',...profile.unlockedThemes]));
  if(!THEMES[profile.currentTheme]) profile.currentTheme='dark';
  return profile;
}

function savePlayerProfile(){
  if(!playerProfile) return;
  localStorage.setItem(STORAGE_KEYS.profile,JSON.stringify({
    pseudo:playerProfile.pseudo,
    totalXp:playerProfile.totalXp,
    xpBySubject:playerProfile.xpBySubject,
    unlockedThemes:playerProfile.unlockedThemes,
    currentTheme:playerProfile.currentTheme,
    selectedTitle:playerProfile.selectedTitle,
    userAvatarConfig:playerProfile.userAvatarConfig,
    soundPack:playerProfile.soundPack,
    streakShields:playerProfile.streakShields,
    shieldMilestone:playerProfile.shieldMilestone,
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

function getStreakMultiplier(){
  return getProjectedStreakCount()>3?1.2:1;
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
      ? 'Bravo, les trois quêtes du jour sont validées. Revenez demain pour une nouvelle rotation.'
      : `Date du jour : ${new Date().toLocaleDateString('fr-FR')} · ${3-completedCount} défi${3-completedCount>1?'s':''} restant${3-completedCount>1?'s':''}.`;
  }
  if(homeCopy){
    homeCopy.textContent=completedCount===3
      ? 'Les 3 défis du jour sont terminés. Revenez demain pour de nouveaux bonus.'
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
          <span class="daily-card-reward">+${quest.rewardXp} XP</span>
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
    }
  });
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
  if(theme.unlockRp){
    return `Mode classé : ${getRankInfo(theme.unlockRp).name}`;
  }
  return `Niveau ${theme.unlockLevel||1}`;
}

function escapeHtml(value){
  return String(value??'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function getLevelRewardItems(level){
  if(level<1 || level>XP_RULES.maxLevel) return [];
  const rewards=[];
  const globalTitle=GLOBAL_TITLES.find(item=>item.level===level);
  if(globalTitle){
    rewards.push({
      icon:'🏅',
      label:`Titre global : ${globalTitle.title}`,
      desc:'Nouveau titre à équiper dans le sélecteur de titres.'
    });
  }
  Object.entries(THEMES)
    .filter(([,theme])=>theme.unlockLevel===level)
    .forEach(([,theme])=>{
      rewards.push({
        icon:'🎨',
        label:`Thème : ${theme.label}`,
        desc:'Ajouté automatiquement au sélecteur de thèmes.'
      });
    });
  Object.entries(SOUND_PACKS)
    .filter(([,pack])=>pack.unlockLevel===level)
    .forEach(([,pack])=>{
      rewards.push({
        icon:'🔊',
        label:`Pack sonore : ${pack.label}`,
        desc:pack.desc
      });
    });
  if(level===MIN_RANKED_LEVEL){
    rewards.push({
      icon:'🏆',
      label:'Mode classé',
      desc:'Débloque les parties classées et la montée en RP.'
    });
  }
  if(level>0 && level%10===0){
    rewards.push({
      icon:'🛡️',
      label:'Bouclier de série',
      desc:'+1 bouclier pour protéger automatiquement ta flamme.'
    });
  }
  if(level===XP_RULES.maxLevel){
    rewards.push({
      icon:'👑',
      label:'Niveau maximum',
      desc:'Tu atteins le niveau maximum de BrevetPro.'
    });
  }
  return rewards;
}

function getNextRewardMilestone(fromLevel){
  for(let level=Math.max(1,fromLevel); level<=XP_RULES.maxLevel; level++){
    const rewards=getLevelRewardItems(level);
    if(rewards.length) return {level,rewards};
  }
  return null;
}

function renderXpRewardCards(rewards=[]){
  if(!rewards.length) return '';
  return rewards.map(reward=>`
    <div class="xp-reward-card">
      <div class="xp-reward-icon">${escapeHtml(reward.icon)}</div>
      <div class="xp-reward-copy">
        <strong>${escapeHtml(reward.label)}</strong>
        <span>${escapeHtml(reward.desc)}</span>
      </div>
    </div>
  `).join('');
}

function isThemeUnlocked(themeKey,level=playerProfile?.levelInfo?.level||1,peakRp=rankedProfile?.peakRp||rankedProfile?.rp||0){
  const theme=THEMES[themeKey];
  if(!theme) return false;
  const levelOk=theme.unlockLevel ? level>=theme.unlockLevel : true;
  const rankOk=theme.unlockRp ? peakRp>=theme.unlockRp : true;
  return levelOk && rankOk;
}

function syncProfileComputedData(){
  if(!playerProfile) return;
  const levelInfo=getLevelInfo(playerProfile.totalXp);
  playerProfile.levelInfo=levelInfo;
  if(!playerProfile.pseudo) playerProfile.pseudo='';
  playerProfile.globalTitle=pickTitle(GLOBAL_TITLES,levelInfo.level);
  while((playerProfile.shieldMilestone||0)+10<=levelInfo.level){
    playerProfile.shieldMilestone=(playerProfile.shieldMilestone||0)+10;
    playerProfile.streakShields=(playerProfile.streakShields||0)+1;
  }
  const unlocked=Object.entries(THEMES)
    .filter(([themeKey])=>isThemeUnlocked(themeKey,levelInfo.level,rankedProfile?.peakRp||rankedProfile?.rp||0))
    .map(([themeKey])=>themeKey);
  playerProfile.unlockedThemes=Array.from(new Set(['dark','light',...playerProfile.unlockedThemes,...unlocked]));
  playerProfile.userAvatarConfig=normalizeUserAvatarConfig(
    playerProfile.userAvatarConfig,
    playerProfile.pseudo||'BrevetPro',
    levelInfo.level
  );
  playerProfile.unlockedSoundPacks=getUnlockedSoundPackKeys(levelInfo.level);
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
    ...GLOBAL_TITLES.filter(item=>levelInfo.level>=item.level).map(item=>({key:`global:${item.title}`,label:`Global · ${item.title}`,text:item.title})),
    ...SUBJECT_KEYS.flatMap(subjectKey=>{
      const titles=SPECIALTY_TITLES[subjectKey]||[];
      const subjectLevel=getLevelInfo(playerProfile.xpBySubject[subjectKey]||0).level;
      return titles.filter(item=>subjectLevel>=item.level).map(item=>({
        key:`${subjectKey}:${item.title}`,
        label:`${SUBJ_META[subjectKey].name} · ${item.title}`,
        text:item.title
      }));
    })
  ];
  if(!playerProfile.ownedTitles.find(title=>title.key===playerProfile.selectedTitle)){
    playerProfile.selectedTitle=playerProfile.ownedTitles[0]?.key||'global:Novice';
  }
  playerProfile.displayedTitle=playerProfile.ownedTitles.find(title=>title.key===playerProfile.selectedTitle)?.text||playerProfile.globalTitle;
  playerProfile.favoriteSubject=getFavoriteSubject(playerProfile.stats.answersBySubject,playerProfile.xpBySubject);
}

function getNextThemeGoal(level){
  const peakRp=rankedProfile?.peakRp||rankedProfile?.rp||0;
  const locked=Object.entries(THEMES).filter(([themeKey])=>!isThemeUnlocked(themeKey,level,peakRp));
  if(!locked.length) return 'Tous les thèmes sont débloqués';
  const next=locked.sort((a,b)=>{
    const aScore=(a[1].unlockLevel?Math.max(0,a[1].unlockLevel-level):0)+(a[1].unlockRp?Math.max(0,a[1].unlockRp-peakRp)/100:0);
    const bScore=(b[1].unlockLevel?Math.max(0,b[1].unlockLevel-level):0)+(b[1].unlockRp?Math.max(0,b[1].unlockRp-peakRp)/100:0);
    return aScore-bScore;
  })[0];
  return `${next[1].label} via ${getThemeUnlockText(next[1])}`;
}

function applyTheme(themeKey,shouldPersist=true){
  if(!playerProfile || !THEMES[themeKey]) return;
  if(!playerProfile.unlockedThemes.includes(themeKey)){
    showToast(`${THEMES[themeKey].label} se débloque via ${getThemeUnlockText(THEMES[themeKey])}`,'locked');
    return;
  }
  playerProfile.currentTheme=themeKey;
  document.body.setAttribute('data-theme',themeKey);
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
  Object.entries(THEMES).forEach(([themeKey,theme])=>{
    const btn=document.createElement('button');
    const unlocked=playerProfile.unlockedThemes.includes(themeKey);
    btn.className='theme-btn'+(playerProfile.currentTheme===themeKey?' selected':'');
    btn.disabled=!unlocked;
    btn.onclick=()=>applyTheme(themeKey);
    btn.innerHTML=`
      <div class="theme-swatch" style="background:${theme.preview}"></div>
      <div class="theme-name">${theme.label}</div>
      <div class="theme-meta">${unlocked?'Disponible maintenant':`Déblocage : ${getThemeUnlockText(theme)}`}</div>
      ${unlocked?'':`<div class="theme-lock">🔒 ${getThemeUnlockText(theme)}</div>`}
    `;
    container.appendChild(btn);
  });
}

function toggleThemePanel(){
  const panel=document.getElementById('theme-panel');
  if(!panel) return;
  panel.classList.toggle('open');
  if(panel.classList.contains('open')) renderThemeSelector();
}

function toggleTitlePanel(){
  const panel=document.getElementById('title-panel');
  if(!panel) return;
  panel.classList.toggle('open');
  if(panel.classList.contains('open')) renderTitleSelector();
}

function renderTitleSelector(){
  if(!playerProfile) return;
  const select=document.getElementById('title-select');
  const status=document.getElementById('title-panel-status');
  const preview=document.getElementById('owned-title-preview');
  if(!select||!status||!preview) return;
  select.innerHTML=playerProfile.ownedTitles.map(title=>`<option value="${title.key}" ${title.key===playerProfile.selectedTitle?'selected':''}>${title.label}</option>`).join('');
  preview.innerHTML=playerProfile.ownedTitles.map(title=>`<span class="title-chip">${title.key===playerProfile.selectedTitle?'✅':'🏅'} ${title.text}</span>`).join('');
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
  if(select){
    select.innerHTML=Object.entries(SOUND_PACKS).map(([key,pack])=>{
      const unlocked=playerProfile.unlockedSoundPacks.includes(key);
      return `<option value="${key}" ${key===playerProfile.soundPack?'selected':''} ${unlocked?'':'disabled'}>${pack.label}${unlocked?'':` · niveau ${pack.unlockLevel}`}</option>`;
    }).join('');
  }
  if(desc){
    const pack=getSoundPack(playerProfile.soundPack);
    desc.textContent=`${pack.label} — ${pack.desc}`;
  }
  if(status){
    status.textContent=`${playerProfile.unlockedSoundPacks.length} pack${playerProfile.unlockedSoundPacks.length>1?'s':''} sonore${playerProfile.unlockedSoundPacks.length>1?'s':''} disponible${playerProfile.unlockedSoundPacks.length>1?'s':''}`;
  }
  if(vipNote){
    vipNote.textContent='Tableau de bord complet : progression, historique et classé accessibles à tout moment.';
  }
}

function toggleSettingsPanel(){
  const panel=document.getElementById('settings-panel');
  if(!panel) return;
  panel.classList.toggle('open');
  if(panel.classList.contains('open')) renderSettingsPanel();
}

function selectSoundPack(value){
  if(!playerProfile) return;
  if(!playerProfile.unlockedSoundPacks.includes(value)){
    showToast(`Pack sonore niveau ${SOUND_PACKS[value]?.unlockLevel||1}`,'locked');
    renderSettingsPanel();
    return;
  }
  playerProfile.soundPack=value;
  savePlayerProfile();
  refreshPlayerUI();
  previewSoundPack();
}

function previewSoundPack(){
  playSound('success');
  setTimeout(()=>playSound('error'),180);
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
  const currentRewards=currentLevel>=XP_RULES.maxLevel ? getLevelRewardItems(currentLevel) : getLevelRewardItems(nextLevel);
  const fallbackMilestone=currentLevel>=XP_RULES.maxLevel ? null : (!currentRewards.length ? getNextRewardMilestone(nextLevel+1) : null);
  const setText=(id,value)=>{
    const node=document.getElementById(id);
    if(node) node.textContent=value;
  };
  setText('xp-modal-title',currentLevel>=XP_RULES.maxLevel?`Niveau ${currentLevel} atteint`:`Niveau ${currentLevel} → ${nextLevel}`);
  setText(
    'xp-modal-subtitle',
    currentLevel>=XP_RULES.maxLevel
      ? 'Tu as atteint le niveau maximum. Toutes les récompenses de niveau sont maintenant débloquées.'
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
  setText(
    'xp-modal-reward-heading',
    currentLevel>=XP_RULES.maxLevel
      ? 'Récompenses déjà obtenues au niveau maximum'
      : `Récompenses du niveau ${nextLevel}`
  );
  const fill=document.getElementById('xp-modal-track-fill');
  if(fill) fill.style.width=info.progressPct+'%';
  const rewardsNode=document.getElementById('xp-modal-rewards');
  if(rewardsNode) rewardsNode.innerHTML=renderXpRewardCards(currentRewards);
  const emptyNode=document.getElementById('xp-modal-empty');
  if(emptyNode){
    const shouldShowEmpty=!currentRewards.length;
    emptyNode.hidden=!shouldShowEmpty;
    if(shouldShowEmpty){
      emptyNode.textContent=currentLevel>=XP_RULES.maxLevel
        ? 'Toutes les récompenses de niveau sont déjà récupérées.'
        : `Le niveau ${nextLevel} n’ajoute pas de déblocage majeur.`;
    }
  }
  const upcomingNode=document.getElementById('xp-modal-upcoming');
  if(upcomingNode){
    if(fallbackMilestone){
      upcomingNode.hidden=false;
      upcomingNode.innerHTML=`<strong>Palier marquant suivant : niveau ${fallbackMilestone.level}</strong><br>${renderXpRewardCards(fallbackMilestone.rewards)}`;
    }else{
      upcomingNode.hidden=true;
      upcomingNode.innerHTML='';
    }
  }
}

function openXpModal(){
  renderXpModal();
  document.getElementById('xp-modal')?.classList.add('open');
}

function closeXpModal(){
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
  const info=playerProfile.levelInfo;
  const streakStatus=getStreakStatus();
  document.getElementById('player-level-badge').textContent=`Lvl ${info.level}`;
  document.getElementById('player-global-title').textContent=playerProfile.displayedTitle;
  document.getElementById('player-total-xp').textContent=`${playerProfile.totalXp} XP cumulés`;
  const streakNode=document.getElementById('player-streak');
  if(streakNode){
    streakNode.innerHTML=`<span class="streak-flame ${streakStatus.isToday?'ready':'idle'}">🔥</span>Série : ${streakStatus.displayCount} jour${streakStatus.displayCount>1?'s':''}`;
  }
  document.getElementById('player-shields').textContent=`🛡 ${playerProfile.streakShields} bouclier${playerProfile.streakShields>1?'s':''}`;
  document.getElementById('player-sound-pack').textContent=`🔊 Son : ${getSoundPack(playerProfile.soundPack).label}`;
  document.getElementById('player-next-theme').textContent=`Thème suivant : ${getNextThemeGoal(info.level)}`;
  document.getElementById('player-xp-range').textContent=info.level>=XP_RULES.maxLevel
    ? 'Niveau maximum atteint'
    : `${info.currentLevelXp} / ${info.nextLevelXp} XP vers le niveau ${info.level+1}`;
  document.getElementById('player-multiplier').textContent=`Bonus série x${getStreakMultiplier().toFixed(1)}`;
  document.getElementById('xp-track-fill').style.width=info.progressPct+'%';
  const xpHint=document.getElementById('player-xp-hint');
  if(xpHint){
    xpHint.textContent=info.level>=XP_RULES.maxLevel
      ? 'Clique sur la barre pour revoir tes récompenses de niveau'
      : `Clique sur la barre pour voir ce que tu débloques au niveau ${Math.min(info.level+1,XP_RULES.maxLevel)}`;
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
  renderThemeSelector();
  renderTitleSelector();
  renderSettingsPanel();
  renderWeakReviewCard();
  renderDailyChallenges();
  updateRankedUI();
  updateVipUI();
  renderXpModal();
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
  const streakInput=document.getElementById('admin-streak-input');
  const rankInput=document.getElementById('admin-rank-input');
  const note=document.getElementById('admin-note');
  if(lvlInput) lvlInput.value=String(info.level);
  if(xpInput) xpInput.value=String(info.currentLevelXp);
  if(shieldInput) shieldInput.value=String(playerProfile.streakShields||0);
  if(streakInput) streakInput.value=String(streakStatus.displayCount);
  if(rankInput){
    rankInput.innerHTML=RANK_TIERS.map(tier=>`<option value="${tier.rp}" ${getRankInfo(rankedProfile?.rp||0).name===tier.name?'selected':''}>${tier.name}</option>`).join('');
  }
  if(note){
    note.textContent=info.level>=XP_RULES.maxLevel
      ? 'Niveau maximum atteint. L’XP saisie sera ignorée tant que le niveau reste au maximum.'
      : `Palier suivant : ${info.nextLevelXp} XP pour le niveau ${info.level+1}.`;
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
  const streakValue=Number(document.getElementById('admin-streak-input')?.value||0);
  const rankRpValue=Number(document.getElementById('admin-rank-input')?.value||0);
  const safeLevel=Math.max(1,Math.min(XP_RULES.maxLevel,Math.floor(lvlValue||1)));
  const safeCurrentXp=Math.max(0,Math.floor(xpValue||0));
  playerProfile.totalXp=getTotalXpFromLevelProgress(safeLevel,safeCurrentXp);
  playerProfile.streakShields=Math.max(0,Math.floor(shieldsValue||0));
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
  playerProfile.xpBySubject=getDefaultXpBySubject();
  playerProfile.unlockedThemes=['dark','light'];
  playerProfile.currentTheme='dark';
  playerProfile.selectedTitle='global:Novice';
  playerProfile.userAvatarConfig=getDefaultAvatarConfig('BrevetPro');
  playerProfile.soundPack='classic';
  playerProfile.streakShields=0;
  playerProfile.shieldMilestone=0;
  playerProfile.stats={
    questionsAnswered:0,
    revisionSeconds:0,
    completedRuns:0,
    answersBySubject:getDefaultAnswerStats()
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
  let toastMessage='';

  if(status.isToday) return false;

  if(!streakState.lastQuizDate || (streakState.count||0)<=0){
    streakState.count=1;
  }else if(status.gap===1){
    streakState.count+=1;
  }else if(status.canUseShield){
    playerProfile.streakShields=Math.max(0,playerProfile.streakShields-1);
    streakState.count+=1;
    toastMessage=`🛡 Bouclier utilisé. Série de ${streakState.count} jours ! Tu es en feu ! 🔥`;
  }else{
    streakState.count=1;
  }

  streakState.lastQuizDate=getLocalDateKey();
  saveStreakState();
  savePlayerProfile();
  refreshPlayerUI();

  if(!toastMessage && streakState.count>=2 && streakState.count>previousDisplay){
    toastMessage=`Série de ${streakState.count} jours ! Tu es en feu ! 🔥`;
  }
  if(toastMessage) showToast(toastMessage,'streak');
  return true;
}

function updateStreakAfterCompletedQuiz(){
  updateStreak();
}

function addXP(amount,subject=state.subject){
  if(!playerProfile || !amount) return 0;
  syncProfileComputedData();
  const multiplier=getStreakMultiplier();
  const actual=Math.round(amount*multiplier);
  const previousLevel=playerProfile.levelInfo?.level||1;
  const previousThemes=new Set(playerProfile.unlockedThemes||[]);
  const previousPacks=new Set(playerProfile.unlockedSoundPacks||[]);
  const previousShields=playerProfile.streakShields||0;
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
  const newThemes=playerProfile.unlockedThemes.filter(themeKey=>!previousThemes.has(themeKey));
  const newPacks=playerProfile.unlockedSoundPacks.filter(key=>!previousPacks.has(key));
  const shieldGain=(playerProfile.streakShields||0)-previousShields;
  const workshopUnlockGain=getWorkshopUnlockCount(playerProfile.levelInfo.level)-previousWorkshopUnlocks;
  if(newThemes.length){
    state.unlockedThemesThisRun.push(...newThemes.filter(themeKey=>!state.unlockedThemesThisRun.includes(themeKey)));
    showToast(`Thème débloqué : ${THEMES[newThemes[0]].label}`,'theme');
  }
  if(workshopUnlockGain>0){
    showToast('Toutes les options de l’Atelier sont maintenant disponibles.','avatar');
  }
  if(newPacks.length){
    showToast(`Pack débloqué : ${SOUND_PACKS[newPacks[0]].label}`,'sound');
  }
  if(shieldGain>0){
    showToast(`+${shieldGain} bouclier${shieldGain>1?'s':''} de série`,'shield');
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
  if(state.options.survival && !isBB){
    const tier=Math.floor(Math.max(0,state.correctAnswersInRun-1)/5);
    return 5*Math.pow(2,tier);
  }
  return XP_RULES.question[q.type]||10;
}

function markCorrectAnswer(q,isBB=false){
  state.score++;
  state.correctAnswersInRun++;
  playEffect('success');
  triggerVibration('success');
  registerDailyAnswer(true);
  clearWeakQuestion(q);
  const subjectKey=isBB?(q._subj||state.subject):(state.mode==='ranked'?(q._subj||state.subject):state.subject);
  if(isBB){
    if(!state.bbBySubject[subjectKey]) state.bbBySubject[subjectKey]={correct:0,total:0};
    state.bbBySubject[subjectKey].total++;
    state.bbBySubject[subjectKey].correct++;
  }
  awardXp(getQuestionXpValue(q,isBB),subjectKey);
}

function markWrongAnswer(q,isBB=false){
  playEffect('error');
  triggerVibration('error');
  state.correctAnswersInRun=0;
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

function buildFeedbackPayload(q,showExpected=false){
  return {
    expected:showExpected?getCorrectAnswerText(q):'',
    explanation:getExplanation(q)
  };
}

function registerRunStats(total,elapsed){
  if(!playerProfile) return;
  playerProfile.stats.questionsAnswered+=Math.max(0,total||0);
  playerProfile.stats.revisionSeconds+=Math.max(0,elapsed||0);
  playerProfile.stats.completedRuns+=1;
  state.questions.forEach(q=>{
    const subjectKey=q._subj||state.subject;
    if(playerProfile.stats.answersBySubject[subjectKey]!==undefined){
      playerProfile.stats.answersBySubject[subjectKey]+=1;
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

function renderSheets(){
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
function setSheetSubject(subject){
  currentSheetSubject=subject;
  renderSheets();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function startSubject(subj){
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
  if(state.chapters.includes(ch)){state.chapters=state.chapters.filter(c=>c!==ch);btn.classList.remove('selected');}
  else{state.chapters.push(ch);btn.classList.add('selected');}
  updateDifficultyOptions();
}

function selectAllChapters(){
  state.chapters=Object.keys(DB[state.subject]);
  document.querySelectorAll('.chapter-btn').forEach(b=>b.classList.add('selected'));
  showToast('Tout le programme sélectionné.','success');
  updateDifficultyOptions();
}

function goToDifficulty(){
  if(!state.chapters.length){showToast('Sélectionnez au moins un chapitre.','warning');return;}
  updateDifficultyOptions();
  showScreen('screen-difficulty');
}

function selectDiff(d,btn){
  state.difficulty=d;
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

function toggleOption(opt,btn){state.options[opt]=!state.options[opt];btn.classList.toggle('active');}

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
  const target=DIFFICULTY_TARGETS[state.difficulty];
  return exactPool.slice(0,Math.min(target,exactPool.length));
}

function buildWeakReviewPool(){
  return shuffle(
    weakQuestionIds
      .map(id=>QUESTION_LOOKUP[id])
      .filter(Boolean)
      .map(question=>({...question,_subj:question._subj,_chapter:question._chapter}))
  );
}

function startWeakReview(){
  const selected=buildWeakReviewPool().slice(0,15);
  if(!selected.length){
    showToast('Aucune question ratée enregistrée pour le moment.','info');
    return;
  }
  state.mode='weak';
  state.subject=selected[0]?._subj||'histoire';
  state.chapters=['Points faibles'];
  state.questions=selected;
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;state.isBrevetBlanc=false;state.rankedTier=null;state.rankedRpDelta=0;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];
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
  state.questions=buildPool();
  if(!state.questions.length){showToast('Aucune question disponible.','warning');return;}
  state.currentIdx=0;state.score=0;state.errors=[];
  state.startTime=Date.now();state.answered=false;state.isBrevetBlanc=false;state.mode='standard';state.rankedTier=null;state.rankedRpDelta=0;
  state.runRewarded=false;state.sessionEarnedXp=0;state.correctAnswersInRun=0;state.unlockedThemesThisRun=[];

  const m=SUBJ_META[state.subject];
  const st=document.getElementById('q-subject-tag');
  st.textContent=m.icon+' '+m.name; st.className='quiz-tag '+m.tagClass;
  document.getElementById('q-chapter-tag').textContent=state.chapters.length===1?state.chapters[0]:state.chapters.length+' chapitres';
  document.getElementById('q-diff-tag').textContent={facile:'🌱 Facile',normal:'🎯 Normal',difficile:'🔥 Difficile'}[state.difficulty];
  document.getElementById('q-total').textContent=state.questions.length;
  document.getElementById('timer-display').style.display=state.options.timer?'flex':'none';

  showScreen('screen-quiz');
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

function startRankedQuiz(){
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
  state.answered=false;state.matchState={selected:null,pairs:{},done:0,total:0};
  document.getElementById('progress-fill').style.width=((state.currentIdx/state.questions.length)*100)+'%';
  document.getElementById('q-current').textContent=state.currentIdx+1;
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
  if(state.options.timer) startTimer();
}

/* ============================================================
   MOTEUR BREVET BLANC
   ============================================================ */
function startBrevetBlanc(){
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
  const tl={mcq:'🔘 QCM',tf:'✅ Vrai ou Faux',open:'✏️ Question ouverte',date:'📅 Associer dates et événements'};
  let html=`<div class="q-type-badge">${tl[q.type]||'Question'}</div><div class="question-text">${q.q||"Associez chaque date à l'événement correspondant :"}</div>`;
  if(q.type==='mcq'){
    const L=['A','B','C','D'];
    html+='<div class="options-list">';
    q.opts.forEach((opt,i)=>html+=`<button class="option-btn" onclick="${handlerPrefix}answerMCQ(${i})" id="${prefix}opt-${i}"><span class="option-letter">${L[i]}</span>${opt}</button>`);
    html+='</div>';
  }else if(q.type==='tf'){
    html+=`<div class="tf-row"><button class="tf-btn" id="${prefix}tf-true" onclick="${handlerPrefix}answerTF(true)">✅ Vrai</button><button class="tf-btn" id="${prefix}tf-false" onclick="${handlerPrefix}answerTF(false)">❌ Faux</button></div>`;
  }else if(q.type==='open'){
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
  if(ok){
    markCorrectAnswer(q,false);
  }else{
    markWrongAnswer(q,false);
    state.errors.push({q:q.q,yours:ua||'(vide)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  }
  updateScoreDisplays();
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Réponse insuffisante',buildFeedbackPayload(q,!ok),false);
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
  showFeedback(ok,ok?'✅ Bonne réponse !':'❌ Réponse insuffisante',buildFeedbackPayload(q,!ok),true);
  showNextButton(true);
}

function showFeedback(ok,title,payload,isBB=false){
  const container=document.getElementById((isBB?'bb-':'')+'feedback-container');
  const box=document.createElement('div');
  box.className='feedback-box '+(ok?'correct':'wrong');box.style.display='block';
  const expectedBlock=payload.expected?`<div class="feedback-answer"><strong>Réponse attendue :</strong> ${escapeHTML(payload.expected)}</div>`:'';
  const explanationBlock=payload.explanation?`<div class="feedback-explanation"><div class="feedback-label">Rappel</div><div class="feedback-text">${nl2br(payload.explanation)}</div></div>`:'';
  box.innerHTML=`<div class="feedback-title">${title}</div>${expectedBlock}${explanationBlock}`;
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

function nextQuestion(){state.currentIdx++;if(state.currentIdx>=state.questions.length){showResults();return;}renderQuestion();}

/* ============================================================
   TIMER (quiz standard)
   ============================================================ */
function startTimer(){stopTimer();state.timerLeft=30;updateTimerDisplay();state.timerInterval=setInterval(()=>{state.timerLeft--;updateTimerDisplay();if(state.timerLeft<=0){stopTimer();if(!state.answered)timeUp();}},1000);}
function stopTimer(){clearInterval(state.timerInterval);state.timerInterval=null;const d=document.getElementById('timer-display');if(d)d.classList.remove('warning');}
function updateTimerDisplay(){const d=document.getElementById('timer-display'),v=document.getElementById('timer-val');if(!d||!v)return;v.textContent=state.timerLeft;d.classList.toggle('warning',state.timerLeft<=10);}
function timeUp(){
  state.answered=true;
  const q=state.questions[state.currentIdx];
  playEffect('error');
  triggerVibration('error');
  state.correctAnswersInRun=0;
  registerDailyAnswer(false);
  rememberWeakQuestion(q);
  state.errors.push({q:q.q,yours:'(temps écoulé)',correct:getCorrectAnswerText(q),explanation:getExplanation(q)});
  showFeedback(false,'⏱️ Temps écoulé !',buildFeedbackPayload(q,true));
  showNextButton();
}

/* ============================================================
   RÉSULTATS
   ============================================================ */
function showResults(isBB=false){
  stopTimer();clearInterval(state.bbGlobalTimerInterval);
  const elapsed=Math.floor((Date.now()-state.startTime)/1000);
  const total=state.questions.length||1;
  const pct=Math.round((state.score/total)*100);

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
      const share=rankedSubjects.length?Math.floor(36/rankedSubjects.length):36;
      let remainder=rankedSubjects.length?36-(share*rankedSubjects.length):0;
      (rankedSubjects.length?rankedSubjects:[state.subject]).forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else if(state.mode==='weak'){
      const subjects=Array.from(new Set(state.questions.map(q=>q._subj).filter(Boolean)));
      const share=subjects.length?Math.floor(XP_RULES.quizBonus/subjects.length):XP_RULES.quizBonus;
      let remainder=subjects.length?XP_RULES.quizBonus-(share*subjects.length):0;
      (subjects.length?subjects:[state.subject]).forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else if(isBB){
      const subjects=SUBJECT_KEYS.filter(subjectKey=>state.bbBySubject[subjectKey]?.total);
      const share=subjects.length?Math.floor(XP_RULES.brevetBlancBonus/subjects.length):0;
      let remainder=subjects.length?XP_RULES.brevetBlancBonus-(share*subjects.length):0;
      subjects.forEach(subjectKey=>awardXp(share+(remainder-->0?1:0),subjectKey));
    }else{
      awardXp(XP_RULES.quizBonus,state.subject);
    }
    saveHistory({
      subject:state.mode==='ranked'?'classe':(state.mode==='weak'?'points-faibles':(isBB?'brevet-blanc':state.subject)),
      chapters:state.mode==='ranked'
        ? [`Rang ${state.rankedTier?.name||getRankInfo(rankedProfile.rp).name}`]
        : (state.mode==='weak'
          ? ['Révision ciblée']
          : (isBB?['Brevet Blanc']:state.chapters)),
      diff:state.mode==='ranked'?'Classé':(state.mode==='weak'?'Points faibles':(isBB?'Blanc':state.difficulty)),
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

  const [title,sub]=pct>=90?['🏆 Excellent !','Score parfait — prêt(e) pour le brevet !']:pct>=70?['👍 Très bien !','Bon travail ! Quelques points à revoir.']:pct>=50?['💪 Pas mal !','Continuez à réviser les parties manquées.']:['📚 À retravailler !','Consultez vos erreurs et recommencez.'];
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
      : (state.mode==='weak' ? '🎯 Refaire mes points faibles' : '🔄 Recommencer');
    document.getElementById('btn-restart').onclick=state.mode==='ranked'
      ? startRankedQuiz
      : (state.mode==='weak' ? startWeakReview : restartQuiz);
  }

  showScreen('screen-results');
}

function showErrors(){
  const list=document.getElementById('errors-list');list.innerHTML='';
  document.getElementById('error-count-subtitle').textContent=state.errors.length===0?'Aucune erreur — parfait !':state.errors.length+' erreur(s) à retravailler';
  state.errors.forEach(err=>{
    const d=document.createElement('div');d.className='error-item';
    d.innerHTML=`<div class="error-q">📌 ${escapeHTML(err.q)}</div><div class="error-your">❌ Votre réponse : ${escapeHTML(err.yours)}</div><div class="error-correct">✅ Réponse correcte : ${escapeHTML(err.correct)}</div><div class="error-explain">💡 ${nl2br(err.explanation||'')}</div>`;
    list.appendChild(d);
  });
  showScreen('screen-errors');
}

function restartQuiz(){showScreen('screen-difficulty');}

function confirmQuit(isBB=false){
  if(confirm('Quitter ? Votre progression sera perdue.')){
    stopTimer();clearInterval(state.bbGlobalTimerInterval);
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
    const diffLabel={facile:'🌱 Facile',normal:'🎯 Normal',difficile:'🔥 Difficile',Blanc:'🎓 Brevet Blanc','Classé':'🏆 Classé','Points faibles':'🎯 Points faibles'}[entry.diff]||entry.diff;
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
  Object.keys(FLASHCARDS).forEach(s=>{
    const el=document.getElementById('fc-count-'+s);
    if(el)el.textContent=FLASHCARDS[s].length+' cartes';
  });
  const total=Object.values(FLASHCARDS).reduce((a,v)=>a+v.length,0);
  const el=document.getElementById('fc-count-all');if(el)el.textContent=total+' cartes';
}

function startFlash(subj){
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

function flipCard(){flashState.flipped=!flashState.flipped;document.getElementById('flashcard').classList.toggle('flipped',flashState.flipped);}
function nextCard(){flashState.idx=(flashState.idx+1)%flashState.cards.length;renderFlashcard();}
function prevCard(){flashState.idx=(flashState.idx-1+flashState.cards.length)%flashState.cards.length;renderFlashcard();}
function shuffleCards(){flashState.cards=shuffle(flashState.cards);flashState.idx=0;renderFlashcard();showToast('Cartes mélangées !','shuffle');}

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
  streakState=loadStreakState();
  rankedProfile=loadRankedProfile();
  weakQuestionIds=loadWeakQuestions().filter(id=>QUESTION_LOOKUP[id]);
  dailyChallengeState=loadDailyChallenges();
  ensureDailyChallenges();
  syncProfileComputedData();
  savePlayerProfile();
  saveWeakQuestions();
  saveDailyChallenges();
  document.body.setAttribute('data-theme',playerProfile.currentTheme||'dark');
  refreshPlayerUI();
  updateFlashCounts();
  renderSettingsPanel();
  renderWeakReviewCard();
  renderDailyChallenges();
  bindAdminLogoAccess();
  maybeOpenOnboarding();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Application prête pour le mode hors-ligne !'))
      .catch(err => console.error('Erreur de chargement de l\'app', err));
  });
}
