document.getElementById('saveChanges').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    // Simulate saving changes (this can be connected to a backend for actual saving)
    alert(`Profile Updated!\nUsername: ${username}\nEmail: ${email}`);

    // If you were handling file uploads, you could use FormData to send profilePicture to your server.
});

document.getElementById('changePassword').addEventListener('click', function() {
    alert('Redirect to Change Password Page');
    // You can add logic to redirect to another page for changing password
});

document.getElementById('deleteAccount').addEventListener('click', function() {
    const confirmation = confirm('Are you sure you want to delete your account?');
    if (confirmation) {
        alert('Account deleted.');
        // Logic to delete the account
    }
});

document.getElementById('privacySettings').addEventListener('click', function() {
    alert('Redirect to Privacy Settings Page');
    // You can add logic to open privacy settings
});
