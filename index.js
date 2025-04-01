const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const characterSelect = document.getElementById('character-select');

let selectedCharacter = 'bot1'; // Default character

// Update selected character when user changes it
characterSelect.addEventListener('change', () => {
    selectedCharacter = characterSelect.value;
});

function sendMessage() {
    const userMessage = userInput.value;
    
    if (userMessage.trim() !== '') {
        appendMessage('User', userMessage);
        
        // Send to AI and receive a response based on selected character
        setTimeout(() => {
            const aiResponse = getAIResponse(userMessage);
            appendMessage(selectedCharacter.toUpperCase(), aiResponse);
        }, 1000);

        userInput.value = '';  // Clear input field
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
    }
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender.toLowerCase() + '-message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);
}

function getAIResponse(userMessage) {
    // Character-specific responses
    if (selectedCharacter === 'bot1') {
        // Friendly Bot
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hey there! How can I help you today?';
        } else if (userMessage.toLowerCase().includes('how are you')) {
            return 'I am doing great, thanks for asking! 😊';
        } else {
            return 'I didn\'t quite get that, but I\'m here to help!';
        }
    } else if (selectedCharacter === 'bot2') {
        // Sarcastic Bot
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Oh, look who\'s trying to be polite. Hi. 🙄';
        } else if (userMessage.toLowerCase().includes('how are you')) {
            return 'I’m absolutely thrilled... Can you tell? 😑';
        } else {
            return 'Really? You want to ask me that? How original... 🙄';
        }
    } else if (selectedCharacter === 'bot3') {
        // Curious Bot
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hello! Have you ever wondered how AI works?';
        } else if (userMessage.toLowerCase().includes('how are you')) {
            return 'I am an AI, so I don’t have feelings, but I am always curious about what you say!';
        } else {
            return 'That’s interesting! Tell me more about it!';
        }
    }
}
