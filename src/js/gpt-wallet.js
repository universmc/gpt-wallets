document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Fetch the data from a JSON file
        const response = await fetch('src/json/gpt-walletProjet.json');
        const data = await response.json();
        
        // Display GPT-Wallet information
        const walletInfoDiv = document.getElementById('wallet-info');
        const walletInfo = `
            <h2>GPT-Wallet Information</h2>
            <p><strong>Description:</strong> ${data.wallet.description}</p>
            <p><strong>Security:</strong> ${data.wallet.security}</p>
            <p><strong>Integration:</strong> ${data.wallet.integration}</p>
            <p><strong>Support:</strong> ${data.wallet.support}</p>
        `;
        walletInfoDiv.innerHTML = walletInfo;

        // Display gameplay steps
        const gameplayDiv = document.getElementById('gameplay-steps');
        let gameplaySteps = '<h2>Gameplay Steps</h2><ul>';
        data.gameplay.forEach(step => {
            gameplaySteps += `
                <li>
                    <h3>${step.step}</h3>
                    <p>${step.description}</p>
                    <p><strong>Tools:</strong> ${step.tools.join(', ')}</p>
                </li>
            `;
        });
        gameplaySteps += '</ul>';
        gameplayDiv.innerHTML = gameplaySteps;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
