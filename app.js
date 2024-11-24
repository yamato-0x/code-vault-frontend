// A basic JS script to handle the Discord OAuth2 login button click
document.querySelector('.btn').addEventListener('click', function(e) {
    // Redirect user to the Discord OAuth login URL
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
});
