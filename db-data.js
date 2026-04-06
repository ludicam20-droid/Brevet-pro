/* Base de questions et flashcards charg?e ? la demande */
window.BREVET_DB = {

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
window.BREVET_FLASHCARDS = {
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

