# Define variables
NODE_ENV = development
NODE_PORT = 5144
NODE_APP = index.js

# Définir la commande par défaut (si aucune commande n'est spécifiée)
.DEFAULT_GOAL := help

# Définir les variables
NAME = "mon_projet"
NODE_PATH = "node_modules/.bin"
# Afficher la liste des commandes disponibles

update:
	@echo "✨ Mise en état du dossier sur github✨"
	@git add .
	@git commit -m "test"
	@git push
	@echo "✨ Mise à jour terminée✨"

help:
	@echo "Les commandes disponibles sont :"
	@echo "    install -     Installer les dépendances Node.js"
	@echo "    test -        Lancer les tests unitaires"
	@echo "    lint -        Vérifier la qualité du code"
	@echo "    build -       Générer le projet"
	@echo "    start -       Démarrer le serveur de développement"
	@echo "    deploy -      Déployer le projet en production"
# Installer les dépendances Node.js
install:
	@npm install

# Lancer les tests unitaires
test:
	@$(NODE_PATH)/mocha

# Vérifier la qualité du code
lint:
	@$(NODE_PATH)/eslint .

# Générer le projet
build:
	@npm run build
# Démarrer le serveur de développement
deploy:
	@npm run deploy


menu :
	@echo "Welcom To Quantum Univere."
	@echo""
	@echo"╔═════════════════════════════════════╗     ╔═════════════════════════════════════════════════════════════════════╗"
	@echo"╠═══════════ ✨ Pi Console ═══════════╣     ║  [💫] [💬] [📚] [🌌] [✨] [⚡️] [💰] [🌴] [📱] [📡]<            >[🛰]║"
	@echo"║                                     ║     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"╠═════════════════════════════════════╣     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║(∏)                                  ║     ║[💻.📱]:/<                                                        /%>║"
	@echo"╚═════════════════════════════════════╝     ╚═════════════════════════════════════════════════════════════════════╝"	
	@echo""

MAGIC_TARGETS := codex build rep file script clean

all: $(MAGIC_TARGETS)
# Magic COMPILER groq quantum

gsrv:
	@echo "Welcom To Telegram Univers Mc.ia."
	@php -S localhost:5255

Telegram:
	@echo "Welcom To Telegram Univers Mc.ia."
	@./srv/Telegram/bin.sh


codex:
	@echo "Quantum Universe reveal a story to be told"
	@node data/welcom-umc.js

build: buildHtml buildCss buildJS buildJson
# Fabrication de la magie
buildHtml:
	@echo "Crafting web's fabric with quantum threads so bold"
	@node models/worksJS-html.js

buildCss:
	@echo "Shaping beauty with qubits in every fold"
	@node models/modelcss.js

buildJS:
	@echo "Weaving the logic with quantum entanglements we behold"@node javascript.js
	@node "data/knowledge.js"

buildJson:
	@echo "Encoding knowledge in cosmic structures, truths to uphold"
	@node src/wirefram.js
rep:
	@echo "Perceiving the quantum realm's Cosmic ia Consciencius World && vast landscape"
	@vim -a build/build.sh &&
	@vim -wq

file:
	@echo "Revealing hidden X11 dimensions, secrets to escape"
	@bash src/sh/build.sh && 
	@touch build/files.sh

script:
	@echo "Unleashing quantum Magic Mafile with every script we shape"
	@bash src/sh/build.sh && 
	@touch build/files.sh

server:
	@node srv/Telegram/server.js
	@echo "Unleashing quantum Magic Mafile with every script we shape" 
# Ouvrez-vous aux dimensions cachées
clean-r:
	@echo "Returning the quantum realm to pristine state"
	@rm -rf data/* build/* src/* data/*

clean-R:
	@echo "Unweaving the fabric, a celestial fate"@rm -rf output/ build/ src/ data/

clean: clean-r clean-R
