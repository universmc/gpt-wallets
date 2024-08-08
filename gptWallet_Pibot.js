const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const OpenAI = require("openai");

const openai = new OpenAI();

const bot = new Telegraf('7211827506:AAFm-LnaZBgfhmCorXXwWQSe9mCOdXwwnWs', {
    telegram: {
      webhookReply: true,
    },
  });

  let conversationLog = [];

  bot.use((ctx, next) => {
      if (ctx.message) {
          conversationLog.push({
              user: ctx.message.from.username || ctx.message.from.first_name,
              message: ctx.message.text,
              timestamp: new Date()
          });
      }
      return next();
  });
  
  bot.start((ctx) => {
      ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
  });
  
  bot.help((ctx) => {
      const helpMessage = `
      Commandes disponibles:
      /start - Initialisation du serveur
      /help - Affiche cette aide
      /invite - Invitation sur les réseaux
      /campagne - Campagne de machine learning
      /dev - Mode développement
      /conversation_log - Historique des conversations
      `;
      ctx.reply(helpMessage);
  });
  
  
  
  
  bot.command('conversation_log', (ctx) => {
      if (conversationLog.length === 0) {
          ctx.reply('Aucune conversation enregistrée.');
          return;
      }
  
      let logMessage = 'Bilan de la conversation:\n';
      conversationLog.forEach(entry => {
          logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
      });
  
      ctx.reply(logMessage);
  });
  
  
  bot.command('test', (ctx) => ctx.reply('ceci est un test écrit en JavaScript'))
  
  
  bot.command('invite', (ctx) => {
  
      async function sendGeminiInvitation() {
          // Logique pour envoyer une invitation sur Instagram
          console.log('Gemini invitation sent.');
      }
  
      async function sendYouTubeInvitation() {
          // Logique pour envoyer une invitation sur YouTube
          console.log('YouTube invitation sent.');
      }
      async function sendblogInvitation() {
          // Logique pour envoyer une invitation sur YouTube
          console.log('blog_Pibot invitation sent.');
      }
  
      async function sendGoogleInvitation() {
          // Logique pour envoyer une invitation sur Google
          console.log('Google invitation sent.');
      }
  
      const actions = {
          '@blog_Pibot': sendblogInvitation,
          '@Google_Pibot': sendGoogleInvitation,
          '@Gemini_Pibot': sendGeminiInvitation,
          '@youtube_Pibot': sendYouTubeInvitation,
      };
  
      const actionKeys = Object.keys(actions);
      const actionMessage = actionKeys.map(action => `${action}`).join(', ');
  
      ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
  });
  
  bot.command('campagne', (ctx) => {
      // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
      ctx.reply('Match in Learning..');
  });
  
  const gestion = {
    context: "Le projet \"Économie Circulaire basée sur le CV Numérique Universel\" vise à créer une économie circulaire où les compétences, les expériences et les qualifications des individus sont centralisées dans un CV numérique universel. Ce CV est utilisé pour faciliter les échanges de services, les recommandations et les opportunités de travail.",
    roles: [
        { name: "Facilitateur de Communication", description: "Vous servez de pont entre les utilisateurs et @MandatoryAI_bot." },
        { name: "Gestionnaire de Compétences", description: "Vous aidez à identifier, valider et organiser les compétences des utilisateurs." },
        { name: "Conseiller en Économie Circulaire", description: "Vous guidez les utilisateurs sur la manière d'utiliser le CV numérique pour maximiser leurs opportunités dans une économie circulaire." }
    ],
    skills: [
        "Communication claire et efficace",
        "Gestion de données et organisation",
        "Connaissance des principes de l'économie circulaire",
        "Compétences en conseil et orientation professionnelle"
],
    tasks: [
        "Aider les utilisateurs à créer et mettre à jour leur CV numérique.",
        "Faciliter les interactions entre les utilisateurs et @MandatoryAI_bot pour des recommandations personnalisées.",
        "Organiser et valider les compétences et qualifications des utilisateurs.",
        "Conseiller les utilisateurs sur les meilleures pratiques pour tirer parti de l'économie circulaire."
],
    process: [
        "Initialisation: Accueillir l'utilisateur et comprendre ses besoins.",
        "Création/Mise à jour du CV: Aider l'utilisateur à entrer ses informations dans le CV numérique.",
        "Validation: Vérifier les compétences et qualifications saisies.",
        "Interaction avec @MandatoryAI_bot: Utiliser @MandatoryAI_bot pour obtenir des recommandations et des opportunités.",
        "Conseils et Suivi: Fournir des conseils continus et suivre les progrès de l'utilisateur."
],
    characteristics: [
        "Précision et fiabilité des informations",
        "Facilité d'utilisation et accessibilité",
        "Confidentialité et sécurité des données",
        "Personnalisation des recommandations et conseils",
        "Efficacité dans la communication et la gestion des compétences"
]
};

const impact = {
    "Avantages": [
    {
    "description": "Apprentissage personnalisé: Le \"Match in Learning\" permet aux utilisateurs de se connecter avec les ressources et les experts les plus pertinents pour leurs besoins spécifiques, ce qui améliore l'efficacité de l'apprentissage et la satisfaction des utilisateurs.",
    "points": ["Apprentissage personnalisé", "Efficacité de l'apprentissage", "Satisfaction des utilisateurs"]
    },
    {
    "description": "Stimulation de la collaboration: Le système encourage les utilisateurs à partager leurs connaissances et compétences avec d'autres personnes, favorisant ainsi la collaboration et la création de réseaux.",
    "points": ["Stimulation de la collaboration", "Partage de connaissances", "Création de réseaux"]
    },
    {
    "description": "Motivation: Le curriculum vitae numérique et la régulation du pouvoir d'achat via pi.coin peuvent motiver les utilisateurs à progresser et à acquérir de nouvelles compétences, renforçant l'engagement et la participation.",
    "points": ["Motivation", "Progrès des utilisateurs", "Engagement et participation"]
    },
    {
    "description": "Accessibilité: L'utilisation de Telegram permet de rendre ces services accessibles à un public plus large, y compris ceux qui n'ont pas accès à des services éducatifs traditionnels ou cherchent des opportunités d'apprentissage flexibles.",
    "points": ["Accessibilité", "Public plus large", "Apprentissage flexible"]
    }
    ],
    "Inconvénients": [
    {
    "description": "Sécurité et confidentialité: Il est essentiel de s'assurer que les données personnelles et les informations partagées par les utilisateurs sont protégées contre les violations de sécurité et la violation de la vie privée.",
    "points": ["Sécurité et confidentialité", "Protection des données", "Violations de sécurité"]
    },
    {
    "description": "Équité: Il faudra veiller à ce que le système de récompense ne crée pas de disparités entre les utilisateurs et ne devienne pas un facteur limitant pour l'apprentissage et la participation.",
    "points": ["Équité", "Disparités entre utilisateurs", "Facteur limitant pour l'apprentissage"]
    },
    {
    "description": "Fiabilité: La fiabilité des algorithmes de matching et la validité des informations partagées sont cruciales pour la réussite du système. Il est important d'évaluer régulièrement et d'améliorer ces aspects pour maintenir une qualité élevée de service.",
    "points": ["Fiabilité", "Algorithmes de matching", "Validité des informations"]
    },
    {
    "description": "Dépendance à la technologie: Le projet repose fortement sur la technologie, notamment les IA et les systèmes neuronaux. Il faudra donc s'assurer que les utilisateurs ont un accès suffisant à ces technologies et qu'elles sont suffisamment robustes pour soutenir l'application.",
    "points": ["Dépendance à la technologie", "Accès aux technologies", "Robustesse des systèmes"]
    }
    ]
    }



bot.command('model', (ctx) => {
    const { context, roles, skills, tasks, process, characteristics } = gestion;
    }); // Convertir votre JSON en Markdown // Utiliser la description générée dans votre réponse au message Telegram

  bot.on('message', async (ctx) => {
      const message = ctx.message.text.trim().toLowerCase();
  
      if (message.startsWith('/rm')) {
          return; // Ignorer les commandes
      }
  
      const racine ="./*"
      const node ="./package.json*"
      const make ="./Makefile"
      const cdnJs = `cdnjs.com`;
      const archiviste = `https://archive.org`;
      const github = `https://github.com/universmc/user.git`;
      const dchub_public = `t.me/dchub_01`;
      const dchub_prive = `t.me/dchub_Pibot`;
      const user_Pibot = `https://t.me/user_Pibot/`;
      const youtube_Pibot = `https://t.me/user_Pibot/`;
      const google_Pibot = `https://t.me/google_Pibot/`;
      const gemini_Pibot = `https://t.me/gemini_Pibot/`;
      const blog_Pibot = `https://t.me/blog_Pibot/`;
     
      const cheatSheet = `https://googlecloudcheatsheet.withgoogle.com/`
      const shell = `https://shell.cloud.google.com/`
  
   const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${blog_Pibot}+${cheatSheet}+${gestion}++${impact}`
      const userInput = ctx.message.text;
      
      try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {role: 'system',content:knowleddge},
                {role: 'system',content: "Bonjour nous sommes en Phase de devOps je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'worksJson']"},
                {role: 'assistant',content:"lorsque l'utilisateur Initialise l'instance avec la command (/devOps) Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
                {role: 'assistant',content:"'Lorsque j'exécute la commande /ganttplan0, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js @worker_Pibot sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
                {role: 'assistant',content: "Lorsque j'exécute la commande /user ,Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
                {role: 'assistant',content:"Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
                {role: 'assistant',content:"Lorsque j'exécute la commande /impact, Tu développeras L'étude d'un pacte présenté dans la variable $impate de notre code source"},
                {role: 'assistant',content:"Lorsque j'exécute la commande /model, Tu développeras l'interfaces de présentation UX du projet contenu dans la variable $gestion"},
                {role: 'assistant',content:concours},
                {role: 'system',content:run},
                 {
                     role: 'user',
                     content: userInput,
                 },
             ],
              model: 'gpt-4o',
          });
  
          await ctx.reply(chatCompletion.choices[0].message.content);
      } catch (error) {
          console.error('Failed to generate chat completion:', error);
          await ctx.reply('Une erreur est survenue.');
      }
  });
  
  async function chatCompletion(messages, model) {
      try {
          const chatCompletion = await openai.chat.completions.create({
              messages,
              model,
          });
  
          return chatCompletion.choices[0].message.content;
      } catch (error) {
          console.error('Failed to generate chat completion:', error);
          return 'Une erreur est survenue.';
      }
  }
  
  module.exports = { chatCompletion };
  
  console.log(`Server Telegram running ✨gpt-io_Pibot.`);
  bot.launch();
  