const dictionary = {
    "example": "An example is an instance or case that illustrates an idea or concept.",
    "programming": "Programming is the process of writing source code to create software.",
    "web": "The web is a system of interconnected documents that can be accessed via the Internet.",
    "javascript": "JavaScript is a programming language used to create interactivity on web pages."
};

function searchWord() {
    const wordInput = document.getElementById('word').value.trim().toLowerCase();
    const definitionDiv = document.getElementById('definition');
    if (dictionary[wordInput]) {
        definitionDiv.innerText = dictionary[wordInput];
        definitionDiv.classList.remove('alert-danger');
        definitionDiv.classList.add('alert-info');
    } else {
        definitionDiv.innerText = "The word was not found in the dictionary.";
        definitionDiv.classList.remove('alert-info');
        definitionDiv.classList.add('alert-danger');
    }
}