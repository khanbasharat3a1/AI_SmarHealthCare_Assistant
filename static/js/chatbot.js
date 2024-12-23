function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatbox = document.getElementById('chatbox');
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');

    if (userInput) {
        // Clear error message
        errorMessage.style.display = 'none';

        // Add user's message to the chatbox
        chatbox.innerHTML += `
            <div class="message user">
                <span class="label">You</span>
                <p>${userInput}</p>
            </div>
        `;

        // Clear input field
        document.getElementById('user-input').value = '';

        // Auto-scroll chatbox to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;

        // Show loading indicator inside chatbox
        chatbox.innerHTML += `
            <div id="typing-indicator" class="message bot">
                <span class="label">Bot</span>
                <p><em>Typing...</em></p>
                <div class="spinner-border spinner-border-sm text-secondary" role="status"></div>
            </div>
        `;

        // Auto-scroll after adding the loading indicator
        chatbox.scrollTop = chatbox.scrollHeight;

        // Simulate API call to get bot response
        fetch('/get_response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        })
            .then(response => response.json())
            .then(data => {
                // Remove typing indicator
                const typingIndicator = document.getElementById('typing-indicator');
                if (typingIndicator) {
                    typingIndicator.remove();
                }

                // Add bot's message to the chatbox
                chatbox.innerHTML += `
                    <div class="message bot">
                        <span class="label">Bot</span>
                        <p>${data.reply}</p>
                    </div>
                `;

                // Auto-scroll chatbox to the bottom
                chatbox.scrollTop = chatbox.scrollHeight;
            })
            .catch(() => {
                errorMessage.style.display = 'block';
            })
            .finally(() => {
                // Ensure the loading indicator is hidden
                loadingIndicator.style.display = 'none';
            });
    }
}
