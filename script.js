const questions = [
  {
    question: "Quel est le plus grand équidé ?",
    options: ["Cheval", "Âne", "Zèbre", "Poney"],
    correctIndex: 0,
  },
  {
    question: "Combien de pattes a un cheval ?",
    options: ["2", "4", "6", "8"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la durée de vie moyenne d'un cheval domestique en années ?",
    options: ["10 ans", "20 ans", "30 ans", "40 ans"],
    correctIndex: 1,
  },
  {
    question: "Quelle est la plus petite race de chevaux au monde ?",
    options: ["Shetland", "Mustang", "Appaloosa", "Clydesdale"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la blessure causée par une pression constante de la selle sur le dos du cheval ?",
    options: ["Écorchure", "Foulure", "Ampoule", "Selle équine"],
    correctIndex: 2,
  },
  {
    question: "De quelle couleur sont les yeux d'un cheval albinos ?",
    options: ["Bleus", "Marrons", "Verts", "Rouges"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le terme utilisé pour désigner le cheval femelle ayant déjà donné naissance ?",
    options: ["Poulaine", "Jument", "Pouliche", "Poulinière"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la projection osseuse sur le dos d'un cheval où l'on pose la selle ?",
    options: ["Étrier", "Garrot", "Sabot", "Crinière"],
    correctIndex: 1,
  },
  {
    question: "Quelle est la durée de gestation d'une jument, en mois ?",
    options: ["6 mois", "9 mois", "12 mois", "15 mois"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de l'allure intermédiaire entre le trot et le galop, où deux pieds sont levés en même temps ?",
    options: ["Pas espagnol", "Amble", "Saut de mouton", "Canter"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la partie du licol qui passe dans la bouche du cheval et sert à le diriger ?",
    options: ["Rênes", "Licolin", "Bridon", "Mors"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la couleur du pelage d'un cheval qui est beige avec une crinière et une queue noires, mais sans bande cruciale ?",
    options: ["Noir", "Bai", "Isabelle", "Grullo"],
    correctIndex: 2,
  },
  {
    question:
      "Comment s'appelle la robe du cheval qui est de couleur crème avec une crinière et une queue noires ?",
    options: ["Baie", "Noir", "Isabelle", "Blanc"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la première allure que l'on apprend généralement aux débutants ?",
    options: ["Galop", "Trot", "Marche", "Pas"],
    correctIndex: 3,
  },
  {
    question: "Quel est l'organe principal du système respiratoire du cheval ?",
    options: ["Cœur", "Foie", "Estomac", "Poumons"],
    correctIndex: 3,
  },
  {
    question: "Quel terme désigne la naissance d'un poulain ?",
    options: ["Petit", "Poulain", "Bébé", "Poney"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la partie du corps du cheval qui est comparable à notre ongle ?",
    options: ["Crinière", "Sabot", "Museau", "Queue"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la pratique qui consiste à sauter par-dessus des obstacles avec un cheval ?",
    options: ["Dressage", "Galop", "Saut d'obstacles", "Trotting"],
    correctIndex: 2,
  },
  {
    question:
      "Comment appelle-t-on la couleur du pelage qui est mélange de noir et de blanc, avec des formes irrégulières ?",
    options: ["Pie", "Alezan", "Palomino", "Roan"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la couverture que l'on met sur le dos d'un cheval pour le protéger du froid ?",
    options: ["Capote", "Couverture", "Manteau", "Chapeau"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la race de chevaux connue pour sa robe noire intense, sa crinière et sa queue abondantes, ainsi que son allure fière ?",
    options: ["Arabe", "Frison", "Percheron", "Quarter Horse"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la maladie des sabots qui peut être causée par un sol humide et boueux ?",
    options: ["Sabot glissant", "Gale des sabots", "Fourbure", "Sabot mou"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la plus petite allure du cheval, où au moins un pied reste au sol à tout moment ?",
    options: ["Trot", "Pas", "Galop", "Amble"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de l'attelage tiré par un cheval et utilisé pour transporter des personnes ?",
    options: ["Brouette", "Chariot", "Wagon", "Tracteur"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la couche externe du pelage d'un cheval, formée de poils plus longs et raides ?",
    options: ["Sous-poil", "Crinière", "Poil de couverture", "Poil de garde"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la couleur de robe d'un cheval caractérisée par un corps noir et des extrémités (crinière, queue, jambes) de couleur blanche ou beige ?",
    options: ["Bai", "Noir", "Pie", "Grullo"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la discipline équestre qui consiste en une suite de mouvements exécutés avec précision par le cheval ?",
    options: ["Saut d'obstacles", "Cross", "Dressage", "Western"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la partie du harnachement qui entoure la tête du cheval et est utilisée pour le contrôler ?",
    options: ["Bride", "Sangle", "Selle", "Licou"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la race de chevaux originaire d'Espagne, souvent reconnue pour sa robe blanche et sa présence dans des spectacles équestres ?",
    options: ["Lipizzan", "Andalou", "Pur-sang", "Fjord"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la technique de dressage qui consiste à faire bouger le cheval latéralement sans avancer ni reculer ?",
    options: ["Pas espagnol", "Appuyer", "Épaule en dedans", "Contre-galop"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom du dispositif utilisé pour retenir un cheval en place en l'attachant à un point fixe ?",
    options: ["Attache-vite", "Harnais", "Longe", "Licou"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la race de chevaux connue pour sa rapidité sur de courtes distances et souvent utilisée pour les courses ?",
    options: ["Cob", "Poney Shetland", "Arabe", "Quarter Horse"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom du mouvement où le cheval lève les deux pieds d'un côté en même temps, comme s'il dansait ?",
    options: ["Piaffer", "Passage", "Saut de mouton", "Galop à gauche"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle partie du harnachement permet au cavalier de diriger le cheval en lui indiquant la direction à prendre ?",
    options: ["Sangle", "Boucle", "Rênes", "Selle"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la robe d'un cheval où le corps est beige avec une crinière et une queue noires, et une bande cruciale noire sur le dos ?",
    options: ["Bai", "Pie", "Isabelle", "Noir pangaré"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom du cheval légendaire connu pour sa bravoure et sa loyauté envers son maître, Roland, dans la littérature médiévale ?",
    options: ["Pégase", "Bucephale", "Pégasus", "Rooney"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la discipline équestre où le cavalier doit surmonter des obstacles naturels en pleine nature ?",
    options: ["Saut d'obstacles", "Dressage", "Cross", "Reining"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la partie du cheval située entre le dos et la croupe ?",
    options: ["Encolure", "Garrot", "Grasset", "Croupe"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la robe du cheval caractérisée par une couleur de base et une autre couleur sur le ventre et les membres ?",
    options: ["Piebald", "Tricolore", "Isabelle", "Dun"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la maladie équine affectant les sabots et provoquant une boiterie, souvent associée à une mauvaise circulation sanguine ?",
    options: ["Fourbure", "Colique", "Gourme", "Tétanos"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de l'action où le cheval se met sur ses pattes arrière en levant ses pattes avant du sol ?",
    options: ["Cabré", "Bond", "Piaffer", "Pas espagnol"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la discipline équestre qui met l'accent sur l'harmonie entre le cavalier et le cheval, sans sauts ni courses ?",
    options: ["Saut d'obstacles", "Endurance", "Dressage", "Western"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la robe du cheval où le pelage est brun avec une crinière et une queue noires, mais sans bande cruciale ?",
    options: ["Bai", "Noir pangaré", "Isabelle", "Pie"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la partie du licol qui passe sur le front du cheval, au-dessus des yeux ?",
    options: ["Muserolle", "Bride", "Têtière", "Rênes"],
    correctIndex: 2,
  },
  {
    question: "Quelle est la longueur d'un pas moyen d'un cheval, en mètres ?",
    options: ["0,5 m", "1 m", "1,5 m", "2 m"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la race de chevaux connue pour sa grande taille, sa robe alezane et son tempérament calme ?",
    options: ["Cob", "Pur-sang", "Clydesdale", "Arabe"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de l'objet utilisé pour nettoyer les sabots d'un cheval ?",
    options: ["Brosse", "Éponge", "Fourche à fumier", "Cure-pied"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom du mouvement où le cheval avance en faisant des pas très courts et rapides, souvent en parade ?",
    options: ["Pas de côté", "Pas espagnol", "Piaffer", "Marche rapide"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la couleur de robe du cheval qui est beige avec une crinière et une queue noires, sans bande cruciale ?",
    options: ["Isabelle", "Bai", "Grullo", "Pie"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la pratique équestre où le cavalier effectue des figures artistiques tout en étant debout sur le dos du cheval en mouvement ?",
    options: ["Dressage", "Cirque équestre", "Voltige", "Endurance"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom du cheval de couleur noire aux reflets métalliques, originaire d'Irlande ?",
    options: ["Fjord", "Cob", "Irish Sport Horse", "Connemara"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la partie du cheval située entre le garrot et le poitrail ?",
    options: ["Encolure", "Bras", "Poitrail", "Garrot"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la maladie équine caractérisée par des gonflements douloureux au niveau du ventre et nécessitant souvent une intervention vétérinaire ?",
    options: ["Gourme", "Fourbure", "Colique", "Tétanos"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la partie du corps du cheval qui est située entre le poitrail et le ventre ?",
    options: ["Croupe", "Flanc", "Bassin", "Côté"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la robe où le pelage est blanc avec des taches foncées, souvent rondes ou ovales ?",
    options: ["Piebald", "Noir pangaré", "Dun", "Grullo"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la partie du cheval située entre la croupe et la base de la queue ?",
    options: ["Queue", "Garrot", "Quartier", "Crinière"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la discipline équestre où les cavaliers effectuent des sauts au-dessus d'obstacles tout en enchaînant des figures ?",
    options: ["Endurance", "Dressage", "Saut en longueur", "Saut d'obstacles"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la couleur du pelage d'un cheval qui est d'un brun clair, souvent avec une crinière et une queue plus foncées ?",
    options: ["Noir pangaré", "Blanc", "Cannelle", "Alezan"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la partie du harnachement qui est placée sous la selle pour protéger le dos du cheval ?",
    options: ["Sangle", "Bride", "Bavette", "Licou"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la race de chevaux originaires d'Amérique du Nord, souvent utilisée pour les activités de cow-boy ?",
    options: ["Cob", "Arabe", "Quarter Horse", "Andalou"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la robe du cheval avec un pelage marron et des crins noirs, souvent associée aux chevaux islandais ?",
    options: ["Noir pangaré", "Alezan", "Isabelle", "Brun"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la maladie des yeux qui peut causer des larmoiements et une irritation chez le cheval ?",
    options: ["Myopie", "Cataracte", "Conjonctivite", "Presbytie"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la distance approximative d'un galop en mètres, en une minute pour un cheval moyen ?",
    options: ["200 m", "400 m", "600 m", "800 m"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la race de chevaux reconnue pour ses rayures zébrées sur les jambes ?",
    options: ["Cob", "Appaloosa", "Zèbre", "Hinnies"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la partie du harnachement qui permet au cavalier de s'asseoir et de se maintenir en équilibre sur le dos du cheval ?",
    options: ["Selle", "Bride", "Sangle", "Mors"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la maladie du cheval qui se manifeste par une inflammation des poumons, souvent causée par de mauvaises conditions de vie ?",
    options: ["Asthme", "Grippe", "Toux", "Pneumonie"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la race de chevaux originaire de Pologne, connue pour ses aptitudes au dressage et son élégance ?",
    options: ["Trakehner", "Clydesdale", "Mustang", "Fjord"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la partie du harnachement qui se place dans la bouche du cheval et permet au cavalier de le diriger ?",
    options: ["Boucle", "Rênes", "Mors", "Attache"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la discipline équestre où le cavalier doit effectuer un parcours d'obstacles en un temps limité ?",
    options: ["Dressage", "Endurance", "Saut d'obstacles", "Crosse"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom du cheval légendaire de l'Antiquité, célèbre pour sa vitesse et son endurance exceptionnelles ?",
    options: ["Pégase", "Bucéphale", "Phénix", "Centaur"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom du cheval célèbre pour ses exploits dans les courses de longue distance et pour avoir transporté un messager antique ?",
    options: ["Pégase", "Centaure", "Mustang", "Phar Lap"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la partie du harnachement qui se place autour du poitrail du cheval et permet de l'atteler ?",
    options: ["Sangle", "Brancard", "Aiguillette", "Briderie"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la race de chevaux originaires d'Écosse, souvent utilisés pour la traction lourde ?",
    options: ["Cob", "Clydesdale", "Arabe", "Appaloosa"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de l'allure du cheval caractérisée par quatre temps distincts et réguliers ?",
    options: ["Trot", "Pas", "Amble", "Galop"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la couleur de robe du cheval qui est dorée avec une crinière et une queue de couleur crème à blanc ?",
    options: ["Bai", "Isabelle", "Alezan", "Noir pangaré"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom du cheval blanc ailé issu de la mythologie grecque ?",
    options: ["Pégase", "Centaure", "Minotaure", "Hydre"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la maladie qui peut provoquer une enflure et une douleur dans les membres du cheval, généralement due à des mouvements excessifs ?",
    options: ["Tendinite", "Fracture", "Arthrite", "Fourbure"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la partie du cheval située entre la cuisse et le bas-ventre ?",
    options: ["Ventre", "Flanc", "Côte", "Grasset"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la robe du cheval qui est noire avec des taches blanches réparties aléatoirement sur le corps ?",
    options: ["Isabelle", "Piebald", "Noir pangaré", "Roan"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la race de chevaux originaire des États-Unis, souvent utilisée pour les activités de western et de ranch ?",
    options: ["Quarter Horse", "Appaloosa", "Mustang", "Arabe"],
    correctIndex: 0,
  },
  {
    question: "Comment s'appelle le bébé d'un cheval ?",
    options: ["Petit", "Poussin", "Poulain", "Chaton"],
    correctIndex: 2,
  },
  {
    question:
      "Quel animal ressemble à un petit cheval avec de grandes oreilles et une voix braillarde ?",
    options: ["Zèbre", "Lion", "Âne", "Chien"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de l'action de faire monter un cheval sur un camion spécial ?",
    options: ["Glisser", "Tirer", "Monter", "Charger"],
    correctIndex: 3,
  },
  {
    question: "Quelle partie du cheval est utilisée pour le brosser ?",
    options: ["Queue", "Crinière", "Dos", "Pattes"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la couleur du pelage d'un cheval qui est marron avec une crinière et une queue noires ?",
    options: ["Alezan", "Noir", "Isabelle", "Bai"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la vitesse la plus rapide à laquelle un cheval peut courir ?",
    options: ["30 km/h", "50 km/h", "70 km/h", "100 km/h"],
    correctIndex: 1,
  },
  {
    question:
      "Comment s'appelle la nourriture principale des chevaux, qui est sec et ressemble à de l'herbe ?",
    options: ["Fruits", "Légumes", "Foin", "Pain"],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la partie du cheval qu'il secoue pour chasser les mouches ?",
    options: ["Crinière", "Pattes", "Queue", "Oreilles"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la personne qui s'occupe des chevaux et les monte ?",
    options: ["Cavalier", "Vétérinaire", "Jockey", "Éleveur"],
    correctIndex: 0,
  },
  {
    question: "Comment s'appelle la maison des chevaux ?",
    options: ["Étable", "Chenil", "Niche", "Cage"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la durée approximative d'une gestation chez la jument ?",
    options: ["6 mois", "9 mois", "12 mois", "15 mois"],
    correctIndex: 1,
  },
  {
    question: "Quelle est la différence entre un âne et un mulet ?",
    options: ["La taille", "La robe", "Les oreilles", "Le cri"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la technique d'équitation où le cavalier saute par-dessus un obstacle sans selle ni étriers ?",
    options: ["Voltige", "Dressage", "Cross", "Saut en liberté"],
    correctIndex: 0,
  },
  {
    question: "Quelle est la partie du cheval où l'on place la selle ?",
    options: ["Boucle", "Attache", "Poitrail", "Garrot"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la robe du cheval caractérisée par une couleur de base diluée et une crinière plus foncée ?",
    options: ["Bai", "Alezan", "Isabelle", "Dun"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la race de chevaux qui excelle dans les courses de longue distance, comme les courses d'endurance ?",
    options: ["Arabe", "Frison", "Quarter Horse", "Clydesdale"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la partie du cheval qui est souvent utilisée pour prendre le pouls ?",
    options: ["Cou", "Pattes", "Flanc", "Crinière"],
    correctIndex: 0,
  },
  {
    question:
      "Quel est le nom de la discipline équestre où les cavaliers exécutent des figures artistiques en musique ?",
    options: ["Dressage", "Saut d'obstacles", "Reining", "Dressage en musique"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la couleur du pelage d'un cheval qui est uniformément noir, sans aucune autre couleur ?",
    options: ["Bai", "Noir pangaré", "Pie", "Noir"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la race de chevaux célèbre pour sa vitesse dans les courses de trot attelé ?",
    options: ["Arabe", "Pur-sang", "Clydesdale", "Trotteur français"],
    correctIndex: 3,
  },
  {
    question:
      "Quel est le nom de la partie du cheval située entre les épaules et le dos ?",
    options: ["Encolure", "Bras", "Poitrail", "Garrot"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la principale différence entre le trot assis et le trot enlevé ?",
    options: [
      "La vitesse",
      "Le nombre de temps",
      "Le mouvement du cavalier",
      "L'allure du cheval",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Quelle est la longueur approximative d'une foulée de galop en mètres ?",
    options: ["3 m", "4 m", "5 m", "6 m"],
    correctIndex: 1,
  },
  {
    question:
      "Quelle est la robe du cheval caractérisée par une couleur de base foncée avec des poils plus clairs sur les parties saillantes ?",
    options: ["Alezan", "Isabelle", "Dun", "Souris"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la partie du harnachement où les rênes sont attachées pour contrôler la direction du cheval ?",
    options: ["Sangle", "Bavette", "Bride", "Mors"],
    correctIndex: 2,
  },
  {
    question:
      "Quel est le nom de la technique d'équitation qui consiste à faire reculer le cheval en ligne droite ou en diagonale ?",
    options: ["Appuyer", "Reculer", "Reculer", "Contre-galop"],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la robe du cheval caractérisée par une couleur de base claire avec des extrémités plus foncées ?",
    options: ["Bai", "Noir pangaré", "Pie", "Alezan"],
    correctIndex: 1,
  },
  {
    question:
      "Quel est le nom de la discipline équestre où le cavalier doit effectuer un parcours d'obstacles en musique, avec des figures de dressage entre les sauts ?",
    options: [
      "Dressage en musique",
      "Saut en musique",
      "Reining en musique",
      "Cross en musique",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Quelle est la partie du cheval qui peut être pincée par le cavalier pour le diriger latéralement ?",
    options: ["Encolure", "Boucle", "Pattes", "Flanc"],
    correctIndex: 3,
  },
  {
    question:
      "Quelle est la robe du cheval caractérisée par une couleur de base noire et une crinière et une queue de couleur crème à blanc ?",
    options: ["Bai", "Isabelle", "Noir pangaré", "Pie"],
    correctIndex: 2,
  },

  // ... (autres questions)
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let remainingLives = 3;

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function updateRemainingQuestions() {
  const remainingQuestionsElement = document.getElementById(
    "remaining-questions"
  );
  const remainingQuestions = questions.length - currentQuestionIndex;

  remainingQuestionsElement.textContent = `Questions restantes: ${remainingQuestions}`;
}

function updateLives() {
  const livesContainer = document.getElementById("lives-container");
  livesContainer.innerHTML = "";

  for (let i = 0; i < remainingLives; i++) {
    const heartIcon = document.createElement("i");
    heartIcon.className = "fas fa-heart";
    livesContainer.appendChild(heartIcon);
  }
}

function startQuiz() {
  correctAnswersCount = 0;
  remainingLives = 3;
  shuffleQuestions();
  showQuestion(currentQuestionIndex);
  updateRemainingQuestions(); // Mettre à jour les questions restantes
  updateLives();
}

function showQuestion(questionIndex) {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.querySelector(".options");
  const resultElement = document.getElementById("result");
  const retryButton = document.getElementById("retry-button");
  const correctAnswerElement = document.getElementById("correct-answer");

  questionElement.textContent = questions[questionIndex].question;
  optionsContainer.innerHTML = "";

  questions[questionIndex].options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(optionButton);
  });

  resultElement.textContent = "";
  retryButton.style.display = "none";
  correctAnswerElement.style.display = "none";
}

function checkAnswer(selectedIndex) {
  const resultElement = document.getElementById("result");
  const retryButton = document.getElementById("retry-button");
  const quizResultElement = document.getElementById("quiz-result");
  const questionContainer = document.getElementById("question-container");

  if (selectedIndex === questions[currentQuestionIndex].correctIndex) {
    resultElement.textContent = "Bonne réponse ! 🎉";
    currentQuestionIndex++;
    updateRemainingQuestions();
    correctAnswersCount++;
    remainingLives = 3;
    updateLives();

    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      resultElement.textContent = "Félicitations, vous avez terminé le quiz !";
      retryButton.textContent = "Réessayer";
      retryButton.style.display = "block";
      quizResultElement.textContent = `Vous avez obtenu ${correctAnswersCount} bonnes réponses.`;
      quizResultElement.style.display = "block";
      retryButton.style.display = "block"; // Afficher le bouton "Réessayer"
    }
  } else {
    resultElement.textContent = "Mauvaise réponse. 😞";
    remainingLives--;
    updateLives();

    if (remainingLives === 0) {
      questionContainer.style.display = "none";
      retryButton.textContent = "Réessayer";
      retryButton.style.display = "block";
      quizResultElement.textContent = `Vous avez perdu. Votre score est de ${correctAnswersCount} bonnes réponses.`;
      quizResultElement.style.display = "block";
      retryButton.style.display = "block"; // Afficher le bouton "Réessayer"
    } else {
      const optionsContainer = document.querySelector(".options");
      const incorrectOptionButton = optionsContainer.children[selectedIndex];
      incorrectOptionButton.style.backgroundColor = "#ff0000";

      const correctOptionButton =
        optionsContainer.children[questions[currentQuestionIndex].correctIndex];
      correctOptionButton.style.backgroundColor = "#00ff00";

      setTimeout(() => {
        incorrectOptionButton.style.backgroundColor = "#ffc107";
        correctOptionButton.style.backgroundColor = "#ffc107";
        currentQuestionIndex++; // Passer à la question suivante
        updateRemainingQuestions(); // Mettre à jour les questions restantes
        if (currentQuestionIndex < questions.length) {
          showQuestion(currentQuestionIndex);
        }
      }, 2000);
    }
  }
}

function retryQuiz() {
  currentQuestionIndex = 0;
  const questionContainer = document.getElementById("question-container");
  const retryButton = document.getElementById("retry-button");
  const quizResultElement = document.getElementById("quiz-result");
  const optionsContainer = document.querySelector(".options");

  if (!questionContainer || !retryButton || !optionsContainer) {
    return;
  }

  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.disabled = false; // Réactiver les boutons lors de la réinitialisation
  });

  questionContainer.style.display = "block"; // Réafficher le conteneur de la question
  retryButton.style.display = "none"; // Masquer le bouton "Réessayer"
  quizResultElement.style.display = "none"; // Masquer le résultat du quiz

  remainingLives = 3;
  correctAnswersCount = 0; // Réinitialiser le score
  updateLives();
  updateRemainingQuestions(); // Mettre à jour les questions restantes
  showQuestion(currentQuestionIndex);
}

// Lancer le quiz au chargement de la page
startQuiz();
