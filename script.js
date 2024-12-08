document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        const chatBox = document.getElementById('chat-box');
        
        // Display user message
        chatBox.innerHTML += `<div class="chat-message user">User: ${message}</div>`;
        userInput.value = '';

        // Simulate a bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            chatBox.innerHTML += `<div class="chat-message bot">Bot: ${botResponse}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight; // Automatically scroll down
        }, 1000);
    }
}

function getBotResponse(message) {
    // Simple bot response logic for demonstration
    if (message.toLowerCase().includes('hello')) {
        return "Hello! How can I help you today?";
    } else if (message.toLowerCase().includes('how are you')) {
        return "I'm just a bot, but thanks for asking!";
    } else {
        return "I'm not sure how to respond to that.";
    }
}
