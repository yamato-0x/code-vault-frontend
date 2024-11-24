// Fetch user's secrets from the backend
async function fetchSecrets() {
    const response = await fetch('/api/secrets');
    const secrets = await response.json();
    
    const secretsContainer = document.getElementById('secrets-container');
    secretsContainer.innerHTML = ''; // Clear existing secrets

    secrets.forEach(secret => {
        const secretElement = document.createElement('div');
        secretElement.classList.add('secret-item');
        
        secretElement.innerHTML = `
            <span><strong>${secret.name}</strong>: ${secret.value}</span>
            <button class="delete-btn" onclick="deleteSecret('${secret._id}')">Delete</button>
        `;
        
        secretsContainer.appendChild(secretElement);
    });
}

// Add a new secret
async function addSecret() {
    const secretName = document.getElementById('secret-name').value;
    const secretValue = document.getElementById('secret-value').value;

    if (!secretName || !secretValue) {
        alert("Please fill in both fields.");
        return;
    }

    const response = await fetch('/api/secrets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: secretName, value: secretValue })
    });

    if (response.ok) {
        fetchSecrets(); // Refresh the secrets list
    } else {
        alert("Failed to add secret.");
    }
}

// Delete a secret
async function deleteSecret(secretId) {
    const response = await fetch(`/api/secrets/${secretId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        fetchSecrets(); // Refresh the secrets list
    } else {
        alert("Failed to delete secret.");
    }
}

// Event listener for adding a secret
document.getElementById('add-secret-btn').addEventListener('click', addSecret);

// Initial fetch of secrets when the page loads
fetchSecrets();
