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
      /info -  Obtenir des informations sur le projet.
      /docs - Consulter la documentation.
      /code -  Gérer les fragments de code.
      /test -  Lancer des tests sur des fonctions spécifiques. 
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
  
   const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${blog_Pibot}+${cheatSheet}`
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
  
  console.log(`Server Telegram running ✨gpt-wallet_Pibot.`);
  bot.launch();
  