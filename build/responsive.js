const { app, BrowserWindow } = require('electron');
const path = require('path');

// Initialise l'application
app.on('ready', () => {
  // Crée une nouvelle fenêtre
const mainWindow = new BrowserWindow({
    width: 320,
    height: 460,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      sandbox: true
}
  });

  // Charge un fichier HTML
mainWindow.loadFile(path.join(__dirname, 'index.html'));
});
