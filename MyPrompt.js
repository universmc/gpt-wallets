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
{role: "assistant",content: "rédiger un plan d'action clair et détaillé donc développer le rôle contexte afin d' améliorer Techniques d'apprentissage automatique. Dans ce code source ta response devra être rédigédans la langue lang:Fr Français" }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
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