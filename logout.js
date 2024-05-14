function confirmLogout() {
    // Show confirmation dialog box
    var logout = window.confirm("Are you sure you want to logout?");
    
    // If user confirms, logout
    if (logout) {
        // Perform logout operation, e.g., redirecting to logout page
        window.location.href = "homepage.html"; // Change this to your logout URL
    }
    // If user cancels, do nothing
}