#!/bin/bash
# Affichage de l'heure et du mode de développement
# echo "💻$(date "+%H:%M:%S") /dev mode"
#!/bin/bash

# Définition des variables utilisées dans le script:
hudTensor="╔╗╚╝═║╠╣╦╩╬"         # Caractères spéciaux utilisés pour le design du menu
SCRIPT_DIR="../src/sh/*.sh"
BUILD_DIR="../src/build/*"  #  # Répertoire contenant les scripts à exécuter

menu () {    
    echo ""
    echo "╔═════════════════════════════════════════════════════════════════════╗"  
    echo "║  [✨]  [🌌][💻][📔][💬][🏗️][🌴] [🛰 ]                                     ║" 
    echo "╠═════════════════════════════════════════════════════════════════════╣"   
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "║                                                                     ║"  
    echo "╠                                                                     ╣"  
    echo "║[.-°]<                                                            ‰/>║"   
    echo "╠═════════════════════════════════════════════════════════════════════╣"   
    echo "║[💻]                                                                 ║"    
    echo "╚═════════════════════════════════════════════════════════════════════╝" 
    printf ""

}

menu  # Appel de la fonction pour afficher le menu