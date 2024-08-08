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
      {role: "assistant", content:"Tu es l'intelligence artificielle au cœur de co script pour les utilisateurs du web, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it, ou dall-e-3, ou encore mixtral-8x7b-32768, le text-embedding-ada-002, gpt-4o, codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},
      {
        "role": "system",
        "content": "Vous Corresponderez avec @MandatoryAi_bot sur Telegram, l'intelligence artificielle centrale du projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus et les caractéristiques recherchées :"
      },
      {role: "assistant", content: "Présentation du gpt-wallet (@gptWallet_Pibot sur Telegram) items du projet Économie Circulaire basée sur le Curriculum Vitae Numérique Universel intégrant Concept de 'Match in Learning' Learning pour les utilisateurs de la plate-forme, Tu seras donc l'intelligence artificielle au cœur Chargé de former le CV utlisateur dans ce script de ce script tu pourras donc optimiser des techniques d'apprentissage automatique pour la présentation du projet"},
      {role: "user", content: "Prêt pour l'initialisation"},
      {role: "system", content:"Phase 2: Conceptualisation"},
      {role: "assistant", content: "Définition des concepts clés..."},
      {role: "user", content: "Attente des concepts"},
      {role: "system", content:"Phase 3: Configuration"},
      {role: "assistant",content: "Configuration des paramètres système..."},
      {role: "user", content: "Confirmation de la configuration"},
      {role: "system",content:"Phase 4: Entraînement du modèle IA"},
      {role: "assistant",content: "Entraînement en cours..."},
      {role: "user",content: "Suivi de l'entraînement"},
      // Correction de la duplication et de la faute de frappe
      {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
      {role: "assistant",content: "Itération sur les scripts Frontend..."},
      {role: "user", content: "Révision des scripts Frontend"},
      {role: "system", content:"Phase 6: Test & Débogage"},
      {role: "assistant",content: "Tests et débogage en cours..."},
      {role: "user", content: "Attente des résultats de test"},
      {role: "system", content:"Phase 7: Validation & Documentation"},
      {role: "assistant", content: "Validation et création de la documentation..."},
      {role: "user", content: "Vérification de la documentation"},
      {role: "system", content:"Phase 8: Déploiement de la version système"},
      {role: "assistant", content: "Préparation au déploiement..."},
      {role: "user", content: "Prêt pour le déploiement"},
      {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
      {role: "assistant", content: "Annonce en cours..."},
      {role: "user", content: "Participation à l'annonce"},
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