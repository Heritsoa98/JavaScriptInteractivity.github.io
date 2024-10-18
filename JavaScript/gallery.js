// Fonction appelée lors du survol d'une petite image
function upDate(previewPic) {
    // Sélectionner l'élément où l'image principale est affichée
    var imageDiv = document.getElementById('image');
    
    // Changer le fond pour afficher l'image en fonction de la source de l'image survolée
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    
    // Changer le texte de l'élément pour correspondre à la description de l'image
    imageDiv.innerHTML = previewPic.alt;
}

// Fonction appelée lorsque la souris quitte une petite image
function unDo() {
    // Réinitialiser l'image de fond et le texte de la grosse case
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none"; // Remettre l'image de fond à vide
    imageDiv.innerHTML = "Hover over an image below to display here."; // Réinitialiser le texte
}