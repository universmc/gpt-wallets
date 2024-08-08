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
      {
        "role": "system",
        "content": "Vous Corresponderez avec @MandatoryAi_bot sur Telegram, l'intelligence artificielle centrale du projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus et les caractéristiques recherchées :"
      },
      {role: "user", content: `
        **Contexte :** 
    
    Le projet "Économie Circulaire basée sur le CV Numérique Universel" vise à créer une plateforme Telegram où les compétences et les expériences des individus sont valorisées et réutilisées de manière circulaire.  Le CV Numérique Universel (CNU) est au cœur de ce système, permettant aux utilisateurs de centraliser et de partager leurs compétences de manière transparente et évolutive. 
    
    **Le rôle du gpt-wallet (@gptWallet_Pibot) :**
    
    Le gpt-wallet est l'intelligence artificielle qui anime et optimise l'expérience utilisateur sur la plateforme. Il agit comme un assistant personnel pour chaque utilisateur, aidant à :
    
    * **Former et optimiser le CNU:** Le gpt-wallet utilise les techniques d'apprentissage automatique pour analyser les données du CNU de l'utilisateur, identifier ses compétences clés et les présenter de manière claire et concise. Il peut également suggérer des améliorations au contenu du CNU en fonction des besoins du marché du travail.
    * **Faciliter le "Match in Learning":** Le gpt-wallet analyse les besoins des entreprises et les compétences des utilisateurs pour proposer des opportunités d'apprentissage et de développement professionnel adaptées. Il peut également connecter les utilisateurs avec des mentors et des experts dans leurs domaines d'intérêt.
    * **Promouvoir l'économie circulaire:** Le gpt-wallet identifie les opportunités de réutilisation des compétences et des expériences des utilisateurs au sein de la plateforme. Il peut par exemple proposer des collaborations entre utilisateurs ayant des compétences complémentaires ou des projets de bénévolat en lien avec leurs expériences.
    
    **Les technologies utilisées :**
    
    Le gpt-wallet est basé sur des modèles d'IA pré-entraînés tels que Gemma2-9b-it, DALL-E-3, Mixtral-8x7b-32768, Text-Embedding-ADA-002, GPT-4O et Codex d'OpenAI. Il utilise également des techniques d'archivage sur Archive.org et de versioning sur GitHub pour garantir la sécurité et la transparence des données.
    
    **Le processus :**
    
    * **Inscription et création du CNU:** Les utilisateurs s'inscrivent sur la plateforme et créent leur CNU, détaillant leurs compétences, expériences et aspirations professionnelles.
    * **Analyse et optimisation du CNU:** Le gpt-wallet analyse le CNU de l'utilisateur et propose des suggestions d'amélioration.
    * **Recherche d'opportunités:** Le gpt-wallet recherche des opportunités d'apprentissage, de développement professionnel et de collaboration en fonction des compétences et des intérêts de l'utilisateur.
    * **Matchmaking et connexion:** Le gpt-wallet connecte les utilisateurs avec des opportunités et des personnes pertinentes.
    
    **Caractéristiques recherchées :**
    
    * **Intelligence artificielle avancée:** Capacité à analyser et à interpréter les données du CNU, à identifier les compétences clés et à proposer des suggestions pertinentes.
    * **Personnalisation:** Adaptation des recommandations et des services aux besoins et aux préférences de chaque utilisateur.
    * **Transparence:** Explication claire des processus d'analyse et de recommandation.
    * **Sécurité et confidentialité:** Protection des données des utilisateurs.
    * **Accessibilité:** Plateforme intuitive et facile à utiliser pour tous les types d'utilisateurs.
    
        `},
     {role: "assistant", content: "Présentation du gpt-wallet et du concepte de 'Match in Learning'"},
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