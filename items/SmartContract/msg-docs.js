const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Chemin vers le fichier template.json
const templatePath = 'template.json';  // Correction ici, pas besoin de fs.readFile

// Chargement du fichier template.json de manière synchrone
const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));

// Création d'un message pour le rôle user
const userMessage = {
  role: 'user',
  content: 'request content.'
};

// Création d'un message pour le rôle assistant
const assistantMessage = {
  role: 'assistant',
  content: 'request groq -L'
};

// Ajout des messages aux données du modèle
template.messages.push(userMessage);
template.messages.push(assistantMessage);

// Écriture du modèle dans le fichier template.json mis à jour
fs.writeFileSync(templatePath, JSON.stringify(template, null, 2));

console.log('Le fichier template.json a été mis à jour avec les nouveaux messages.');

async function main() {
    groq.chat.completions.create({
        messages: [
            {role: "system", name:"systemDream",content:",promptModel: rolesSystem"},
            {role: "system", name:"systemDream",content:",promptModel: rolesAssistant"},
            {role: "system", name:"systemDream",content:",promptModel: rolesUser"},
            {role: "assistant",name:"✨_pi", content: "En tant qu'intelligence artificielle, mon rôle est de vous guider tout au long du processus de développement et de promotion du projet UMC, en utilisant les outils et technologies dont nous disposons groq, nodejs, github/universmc/workflow"},
            {role: "user",name:"codex-gpt", content: "trés bien, merci continue de de documentation docs.md et présenter '✨_pi' à notre role:user,name:codex-gpt,info: Adopter une méthode de recherche pour mettre à jour ta base de données d'information sur le codex et le potentiel de codex Gpt "},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
    }).then((chatCompletion)=>{
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/template(✨_pi)_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}

main();
