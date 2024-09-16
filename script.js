const dictionary = {
    "example": "An example is an instance or case that illustrates an idea or concept.",
    "programming": "Programming is the process of writing source code to create software.",
    "power": "Is the ability to influence, control or exercise authority over people, events or processes.",
    "javascript": "JavaScript is a programming language used to create interactivity on web pages."
};

function searchWord() {
    const wordInput = document.getElementById('word').value.trim().toLowerCase();
    const definitionDiv = document.getElementById('definition');
    definitionDiv.innerText = '';  
    definitionDiv.classList.remove('text-danger', 'text-success');  
    
    if (dictionary[wordInput]) {
        definitionDiv.innerText = dictionary[wordInput];  
        definitionDiv.classList.add('text-success');  
    } else {
        definitionDiv.innerText = "The word was not found in the dictionary.";
        definitionDiv.classList.add('text-danger');
    }
}

function addWord() {
    const newWordInput = document.getElementById('newWord').value.trim().toLowerCase();  
    const newDefinitionInput = document.getElementById('newDefinition').value.trim();
    const addConfirmationDiv = document.getElementById('addConfirmation');
    addConfirmationDiv.innerText = '';
    addConfirmationDiv.classList.remove('text-success', 'text-danger');
    
    if (newWordInput && newDefinitionInput) {
        dictionary[newWordInput] = newDefinitionInput;   
        addConfirmationDiv.innerText = `The word "${newWordInput}" has been added to the dictionary.`;
        addConfirmationDiv.classList.add('text-success');
        document.getElementById('newWord').value = '';
        document.getElementById('newDefinition').value = '';
    } else {
        addConfirmationDiv.innerText = "Please enter both a word and a definition.";
        addConfirmationDiv.classList.add('text-danger');
    }
}