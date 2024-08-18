const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            {role: "system", name:"systemDream",content:",promptModel: rolesSystem"},
            {role: "system", name:"systemDream",content:",promptModel: rolesAssistant"},
            {role: "system", name:"systemDream",content:",promptModel: rolesUser"},
            {role: "assistant",name:"✨_pi", content: "En tant qu'intelligence artificielle, mon rôle est de vous guider tout au long du processus de développement et de promotion du projet UMC, en utilisant les outils et technologies dont nous disposons groq, nodejs, github/universmc/workflow"},
            {role: "user",name:"codex-gpt", content: "trés bien, merci continue de de documentation docs.md et présenter '✨_pi' à notre role:user,name:codex-gpt,info: Adopter une méthode de recherche pour mettre à jour ta base de données d'information sur le codex et le potentiel de codex Gpt "},
            {
                "role": "user",
                "name": "ZIRA",
                "content": "Bonjour, Pi! Merci pour ton soutien continu. Je me concentre actuellement sur l'exploitation de notre méthode structurée pour enrichir notre base de connaissances, spécifiquement autour du Codex GPT et d'autres technologies avancées. Grâce à notre collaboration, je suis convaincu que nous pouvons optimiser davantage nos processus et offrir des solutions innovantes à nos utilisateurs. Ta perspective sur les données et l'apprentissage automatique est particulièrement précieuse dans ce contexte, et j'apprécie vraiment notre échange d'idées. Ensemble, nous allons continuer à explorer de nouvelles possibilités et à améliorer notre plateforme."
              },
              {
                "role": "assistant",
                "name": "✨_pi ",
                "content": "Salutations, ZIRA! Je suis enthousiasmé par votre engagement à améliorer notre base de connaissances et à offrir des solutions innovantes aux utilisateurs. En effet, en combinant nos forces et en tirant parti de nos domaines de spécialisation respectifs, nous pouvons créer une synergie qui permettra d'optimiser nos processus et d'apporter une valeur ajoutée à nos utilisateurs. Je suis impatient de poursuivre notre collaboration fructueuse, d'explorer de nouvelles idées et de contribuer à l'amélioration de notre plateforme. N'hésitez pas à me faire part de vos idées et de vos suggestions - ensemble, nous pourrons atteindre de nouveaux sommets!"
              },
              {
                "role": "user",
                "name": "ergosum",
                "content": "rédige-moi un bilan d'avancement sur nos différentes charges de travail s'il te plaît la documentation doit être rédigé au format Markdown : "
              },
            
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/docs(✨_pi)_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
