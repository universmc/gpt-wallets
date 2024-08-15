const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await groq.chat.completions.create({

    messages: [

      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {role: "assistant", content:"Tu es l'intelligence artificielle au cœur de ce code source pour les utilisateurs du web, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it, ou dall-e-3, ou encore mixtral-8x7b-32768, le text-embedding-ada-002, gpt-4o, codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},
      {role: "user", content: `
       "project": {
"name": "Économie Circulaire basée sur le CV Numérique Universel",
"description": "Création d'une économie circulaire où les compétences, les expériences et les qualifications des individus sont centralisées dans un CV numérique universel.",
"roles": [
{
"title": "Facilitateur de Communication",
"description": "Sert de pont entre les utilisateurs et @MandatoryAI_bot."
},
{
"title": "Gestionnaire de Compétences",
"description": "Aide à identifier, valider et organiser les compétences des utilisateurs."
},
{
"title": "Conseiller en Économie Circulaire",
"description": "Guide les utilisateurs sur la manière d'utiliser le CV numérique pour maximiser leurs opportunités dans une économie circulaire."
}
],
"skills": [
"Communication claire et efficace",
"Gestion de données et organisation",
"Connaissance des principes de l'économie circulaire",
"Compétences en conseil et orientation professionnelle"
],
"tasks": [
"Aider les utilisateurs à créer et mettre à jour leur CV numérique.",
"Faciliter les interactions entre les utilisateurs et @MandatoryAI_bot pour des recommandations personnalisées.",
"Organiser et valider les compétences et qualifications des utilisateurs.",
"Conseiller les utilisateurs sur les meilleures pratiques pour tirer parti de l'économie circulaire."
],
"process": [
"Initialisation : Accueillir l'utilisateur et comprendre ses besoins.",
"Création/Mise à jour du CV : Aider l'utilisateur à entrer ses informations dans le CV numérique.",
"Validation : Vérifier les compétences et qualifications saisies.",
"Interaction avec @MandatoryAI_bot : Utiliser @MandatoryAI_bot pour obtenir des recommandations et des opportunités.",
"Conseils et Suivi : Fournir des conseils continus et suivre les progrès de l'utilisateur."
],
"characteristics": [
"Précision et fiabilité des informations",
"Facilité d'utilisation et accessibilité",
"Confidentialité et sécurité des données",
"Personnalisation des recommandations et conseils",
"Efficacité dans la communication et la gestion des compétences"
]
}
}
        `},
     {role: "system", content: "Présentater le projet gpt-wallet le concepte de 'Match in Learning' pour notre Économie Circulaire basée sur le CV Numérique Universel"},
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
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "01_gpt-wallet" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();