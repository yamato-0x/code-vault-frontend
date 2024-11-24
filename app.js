// A basic JS script to handle the Discord OAuth2 login button click
document.querySelector('.btn').addEventListener('click', function(e) {
    // Redirect user to the Discord OAuth login URL
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1309506923535798283&response_type=code&redirect_uri=https%3A%2F%2Fyamato-0x.github.io%2Fcode-vault-frontend%2Fdashboard.html&scope=identify';
});

// Check if the user is logged in
async function checkLogin() {
    const response = await fetch('/api/check-login');
    const user = await response.json();

    if (!user.loggedIn) {
        window.location.href = 'index.html'; // Redirect to login page if not logged in
    }
}

// Call this function on page load for the dashboard
if (window.location.pathname === '/dashboard.html') {
    checkLogin();
}

