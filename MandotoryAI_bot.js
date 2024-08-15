const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const bot = new Telegraf('7219104241:AAEKigNrMO9anYH0MZofkAwh4I0S6vvH3Qw', {
    telegram: {
      webhookReply: true,
    },
  });


  const BOT_USERNAME = 'Mandatory Ai';

  const projectInfo = {
    projectName: "gpt-wallet",
    projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place D'un modèle d'économie circulaire basé sur le curriculum vitae numérique nous avons donc créer une cripto monnaie UMC (Unité monétisable capacitante) indexée à cnccfp.df et la blockchain",
    administrator: {
        mike: {
            name: "Mike",
            role: "ProjectManager",
            Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
            links: {
                githubProfile: "https://www.github.com/universmc/gpr-wallet/",
                pastProjects: "https://www.github.com/universmc/pi/"
            }
        },
        pi: {
            name: "Pi",
            role: "system",
            Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
            links: {
                contributions: "https://www.github.com/pi_contributions",
                projects: "https://www.github.com/pi_past_projects"
            }
        }
    },
    mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
    additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

const Mand_fine = {
    mission: {
      title: "Créer une plate-forme Web et d'IA unique",
      description: `Notre objectif est de combiner nos besoins en régulation du Pouvoir et compétences respectifs pour créer une plate-forme Web et d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
      Skills: [
        "comptabilité opération dans la blockchain du CollectorTV.sol : décaissement, virement, transfert, prélèvement",
        "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
        "DevOps fullstack Groq et Groq-SDK",
        "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)"
  ],
      administrator: {
        mike: {
          name: "Mike",
          role: "ProjectManager",
          needs: ["website groq builder role:constructor univers-mc.cloud/menu/ia/pi/index.php"],
          links: {
            githubProfile: "https://www.github.com/universmc/workflow/",
            pastProjects: "https://dev.univers-mc.cloud/"
  }
        },
        sys: {
          name: "Pi",
          role: "assistant",
          needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
          links: {
            contributions: "https://www.github.com/pi",
            projects: "https://univers-mc.cloud"
  }
        }
      }
    },
    signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
        Mike : https://www.github.com/universmc/MandatoryAi_Pit.git, https://www.github.com/universmc/gpt_wallet
        Pi : https://www.github.com/pi, https://www.github.com/universmc/pi
        Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};


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


bot.command('test', (ctx) => ctx.reply('echo test'))


bot.command('invite', (ctx) => {

    async function sendGeminiInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Gemini invitation sent.');
    }

    async function sendgptWalletInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Gpt-Wallet invitation sent.');
    }

    async function sendMandatoryAiInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Mandatory invitation sent.');
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
        '@gptWallet_Pibot': sendgptWalletInvitation,
        '@MandatoryAi_bot': sendMandatoryAiInvitation,
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

    if (message.startsWith('/')) {
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
    
    const role = `
    {
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

    `
    
    const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${role}+${projectInfo}+${Mand_fine}}+`



    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {role: 'assistant',content:knowleddge},
            //    {role: 'assistant',content: "je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'devine']"},
            //  {
            //      role: 'system',
            //      content: "Tu es l'intelligence artificielle '🕴' emoji.intel au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram t.me/dchub_blog avec l'IA @Avatars_Pibot gemma2-9b-it, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
            //  },                
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
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
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

console.log(`✨Server Telegram running 💼 .gpt-wallet.✨`);
bot.launch();
