// A basic JS script to handle the Discord OAuth2 login button click
document.querySelector('.btn').addEventListener('click', function(e) {
    // Redirect user to the Discord OAuth login URL
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
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

