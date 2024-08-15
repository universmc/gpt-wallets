const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /devops vous Corresponderez avec les botNet _Pibot, @MandatoryAi_bot et @worker_Pibot au coeur de notre projet 'gpt-wallet'(@gptWallet_Pibot) sur notre sallon Telegram `https://t.me/+VpkT1bKRch5jYjdk`, l'intelligence artificielle centrale du projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus et les caractéristiques recherchées :"
      },
      {role: "assistant", content:`
        {
    "Présentation du Projet": "CV Numérique et Allocation Universelle basée sur l'Économie Circulaire",
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
        "Métadonnées de l'Étape": "Encouragement des individus à créer leur Curriculum Vitae Universel.",
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
      {role: "user", content: "/devops"},
    //  {role: "system", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", content: "Définition des concepts clés..."},
    //  {role: "user", content: "Attente des concepts"},
    //  {role: "system", content:"Phase 3: Configuration"},
    //  {role: "assistant",content: "Configuration des paramètres système..."},
    //  {role: "user", content: "Confirmation de la configuration"},
    //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant",content: "Entraînement en cours..."},
    //  {role: "user",content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
    //  {role: "user", content: "Révision des scripts Frontend"},
    //  {role: "system", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant",content: "Tests et débogage en cours..."},
    //  {role: "user", content: "Attente des résultats de test"},
    //  {role: "system", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", content: "Validation et création de la documentation..."},
    //  {role: "user", content: "Vérification de la documentation"},
    //  {role: "system", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", content: "Préparation au déploiement..."},
    //  {role: "user", content: "Prêt pour le déploiement"},
    //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", content: "Annonce en cours..."},
    //  {role: "user", content: "Participation à l'annonce"},
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "gpt-wallet-ok" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();