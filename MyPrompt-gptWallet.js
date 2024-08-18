const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const MyPrompt = {
    command: "/MyPrompt",
    description:
      "Optimiser les prompts de l'utilisateur dans le code source en suivant des étapes définies",
    steps: [
      {
        step: 1,
        description:
          "Présentation et demande de la tâche et de son but",
        type: "Question"
  },
      {
        step: 2,
        description:
          "Définir les éléments nécessaires à la réalisation de la tâche",
        elements: [
          {
            name: "Role",
            description: "Meilleur rôle pour la tâche"
  },
          {
            name: "Skills",
            description: "Compétences clés pour la tâche"
  },
          {
            name: "Context",
            description: "Contexte et détails pour la tâche"
  },
          {
            name: "Task",
            description: "Tâche à réaliser"
  },
          {
            name: "Process",
            description: "Étapes pour assistant"
  },
          {
            name: "Characteristics",
            description: "Caractéristiques du résultat"
  },
          {
            name: "ImmediateActions",
            description: "Actions en fonction du contexte et du rôle"
  }
        ]
      },
      {
        step: 3,
        description: "Validation des éléments",
        type: "Question"
  },
      {
        step: 4,
        description: "Rédaction du prompt parfait en intégrant les éléments et les remarques",
        promptStructure: "Tu es [Rôle]. Tu maitrises [Skills].\nMon contexte est [Context].\nTu vas [Task].\nPour ça, voici les étapes à suivre : [Process].\nVoici les caractéristiques du résultat attendu : [Characteristics].\nAinsi que les actions imediate à envisagées : [ImmediateActions]"
  }
    ]
  };
  
  console.log(MyPrompt);
  
 
  const roleUser = "MyPrompt";

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",content: `"${MyPrompt}"` },
      {role: "assistant",content: "/MyPrompt" },
      {role: "user",content: `{
"role": "root",
"sub_roles": ["system", "assistant", "user"],
"skills": ["Enseignement", "Communication", "Motivation", "Analyse"],
"context": {
"environment": "Hack Academy",
"interaction": "Bots _net_",
"Archiviste": "https://archive.org",
"norme": "W3C",
"model": "_Gan_",
"modelGpt": "gpt-4o",
"modelMixtral": "mixtral-8x7b-32768",
"modelGemini": "gemma2-9b-it",
"modelLma": "llama3-8b-8192",
"Datasets:** HuggingFace, UMC Machine Learning Repository.
"Outils Python:** Pandas, Scikit-learn, NLTK.
"Outils Javascript:** nodeJs, groq-sdk, cdnjs.
"goal": "Match in Learning"
},
"task": {
"action": "Planifier",
"domain": "HowTo",
"purpose": "Atteindre les objectifs d'apprentissage"
},
"process": [
"Définir les objectifs d'apprentissage",
"Préparer les supports de cours",
"Déterminer les méthodes pédagogiques",
"Gérer les interactions avec les bots _Net_",
"Évaluer les résultats et adapter l'approche"
],
"characteristics": {
"clarity": "Clarté dans les explications",
"engagement": "Implication des bot _net_",
"flexibility": "Adaptation à chaque bots _net_",
"assessment": "Évaluation continue",
"collaboration": "Travail en reseau"
},
"immediate_actions": ["Réviser les supports de cours", "Planifier l'activité suivante", "Partager les ressources", "Encourager la participation"]
}] + [
{
"title": "Matching Learning (apprentissage par paire)",
"purpose": "Améliorer l'efficacité de l'apprentissage d'un modèle à partir de données non étiquetées",
"steps": [
{
"step": "Préparation des données",
"description": "Extraire et préparer les données d'entrée et de sortie à utiliser pour l'apprentissage, inclure la collecte, la nettoyage et la transformation des données"
},
{
"step": "Appariement des données",
"description": "Créer des paires de données en associant les données d'entrée à leurs résultats correspondants (sorties)"
},
{
"step": "Apprentissage de la fonction de coût de paires",
"description": "Utiliser une fonction de coût de paires pour évaluer la qualité des paires de données"
},
{
"step": "Entraînement du modèle",
"description": "Utiliser les paires de données pertinentes pour entraîner le modèle"
},
{
"step": "Évaluation et amélioration",
"description": "Évaluer les performances du modèle en utilisant des données de test et en effectuant des prédictions"
}
]
}`},
{role: "assistant", content:`
  {
"Présentation du Projet": "Curriculum Vitae Numérique et Allocation Universelle basée sur l'Économie Circulaire",
"Titre": "Projet d'Allocation Universelle basée sur le Curriculum Vitae",
"Objectifs Initiaux": [
"Promulgation de la réforme du code du travail pour garantir le droit au travail rémunéré",
"Mise en place du modèle économique circulaire basé sur les CV, la TVA et le PIB",
"Développement du contrat intelligent crypto basé sur la monétisation des CV des utilisateurs de univers-mc"
],
"Instructions pour la Réalisation": [
{
  "Étape": "Conceptualisation",
  "Température": 0.5,
  "Métadonnées de l'Étape": "Étape de réflexion initiale sur les objectifs et les ressources nécessaires.",
  "Tâches": [
    "Définissez clairement les objectifs du projet.",
    "Identifiez les parties prenantes clés et les ressources nécessaires."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Conceptualisation adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à définir la structure de la plateforme en ligne."
},
{
  "Étape": "Développement du Curriculum Vitae Universel",
  "Température": 0.6,
  "Métadonnées de l'Étape": "Création de la plateforme en ligne pour répertorier les compétences, formations et expériences.",
  "Tâches": [
    "Créez une plateforme en ligne pour répertorier les compétences, formations et expériences dès l'âge de 16 ans.",
    "Concevez une interface conviviale pour les utilisateurs.",
    "Intégrez un système de collecte de données pour suivre les compétences et les expériences au fil du temps."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Développement du Curriculum adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape impliquera la création d'un contrat intelligent basé sur Solidity pour la monétisation des compétences."
},
{
  "Étape": "Monétisation des Compétences",
  "Température": 0.7,
  "Métadonnées de l'Étape": "Utilisation de la technologie blockchain pour créer un contrat intelligent.",
  "Tâches": [
    "Utilisez la technologie blockchain pour créer un contrat intelligent basé sur Solidity.",
    "Concevez un algorithme qui calcule la valeur des compétences en fonction de l'âge, de l'expérience et de la hiérarchie de compétences.",
    "Assurez-vous de la sécurité et de la transparence des transactions."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Monétisation des Compétences adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à mettre en place le mécanisme d'indexation sur l'inflation pour ajuster la valeur du travail."
},
{
  "Étape": "Calcul de la Valeur et Indexation",
  "Température": 0.8,
  "Métadonnées de l'Étape": "Mise en place du mécanisme d'indexation sur l'inflation.",
  "Tâches": [
    "Mettez en place un mécanisme d'indexation sur l'inflation pour ajuster la valeur du travail en fonction des conditions économiques.",
    "Créez un système de collecte et de répartition de la TVA pour financer l'allocation universelle."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Calcul de la Valeur et Indexation adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape sera de déployer le système sur la blockchain pour assurer son bon fonctionnement."
},
{
  "Étape": "Impact Économique circulaire",
  "Température": 0.7,
  "Métadonnées de l'Étape": "Analyse de l'impact économique et stimulation de la participation des utilisateurs et des entreprises.",
  "Objectifs": [
    "Lien entre CV, TVA sur le PIB, pouvoir d'achat, stimulation de la productivité et réduction des inégalités."
  ],
  "Tâches": [
    "Analysez l'impact économique du projet.",
    "Encouragez la participation des utilisateurs et des entreprises."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Impact Économique circulaire adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à intégrer le contrat intelligent dans la blockchain."
},
{
  "Étape": "Déploiement sur la Blockchain",
  "Température": 0.8,
  "Métadonnées de l'Étape": "Intégration du contrat intelligent dans la blockchain.",
  "Tâches": [
    "Intégrez le contrat intelligent et les mécanismes de monétisation dans la blockchain.",
    "Testez le système pour assurer son bon fonctionnement."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Déploiement sur la Blockchain adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à encourager les individus à créer leur Curriculum Vitae Universel sur la plateforme."
},
{
  "Étape": "Intégration du Curriculum",
  "Température": 0.7,
  "Métadonnées de l'Étape": "Encouragement des individus à créer leur Curriculum Vitae Numérique Universel.",
  "Tâches": [
    "Encouragez les individus à créer leur Curriculum Vitae Universel sur la plateforme.",
    "Assurez-vous que le système collecte et traite correctement les données."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Intégration du Curriculum adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à surveiller en continu l'impact économique du projet."
},
{
  "Étape": "Suivi et Optimisation",
  "Température": 0.8,
  "Métadonnées de l'Étape": "Surveillance continue de l'impact économique et identification des domaines d'amélioration.",
  "Tâches": [
    "Surveillez en continu l'impact économique du projet.",
    "Identifiez les domaines qui nécessitent des améliorations et des ajustements."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Suivi et Optimisation adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à promouvoir le projet auprès d'un large public."
},
{
  "Étape": "Promotion et Sensibilisation",
  "Température": 0.7,
  "Métadonnées de l'Étape": "Présentation du projet à un large public et encouragement de l'adoption.",
  "Tâches": [
    "Présentez le projet à un large public, y compris les autorités, les entreprises et les citoyens.",
    "Encouragez l'adoption du système et sollicitez des retours d'expérience."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Promotion et Sensibilisation adaptées à NeoFS)",
  "Conseil Next Step": "La prochaine étape consistera à rester ouverts aux nouvelles idées et aux améliorations."
},
{
  "Étape": "Évolution Continue",
  "Température": 0.8,
  "Métadonnées de l'Étape": "Développement continu du projet en collaboration avec des experts et des partenaires.",
  "Tâches": [
    "Restez ouverts aux nouvelles idées et aux améliorations.",
    "Travaillez en étroite collaboration avec des experts et des partenaires pour développer le projet."
  ],
  "Prompt": "$prompt=(instructions spécifiques pour l'étape de Évolution Continue adaptées à NeoFS)",
  "Conseil Next Step": "Fournissez des mises à jour régulières pour améliorer les fonctionnalités et corriger les bugs."
}
]
}`}, 
{role: "assistant",content: "analyse approfondie des éléments importants du script" },
{role: "user",content: "redaction de la présentation clair et détaillé du Projet 'CV Numérique et Allocation Universelle basée sur l'Économie Circulaire, afin d' améliorer Techniques d'apprentissage automatique. Dans ce code source ta response devra être rédigédans la langue lang:Fr Français" }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("✨ Documentation généré et enregistré dans " + outputFilePath);
});
}
main();