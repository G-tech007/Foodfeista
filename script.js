// Sample users for authentication
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Authentication function
function authenticate() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    // Find user in the array
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    // Check if user exists
    if (user) {
        alert('Login successful!');
        errorElement.textContent = '';
        // Redirect to another page or perform other actions here
    } else {
        errorElement.textContent = 'Invalid username or password';
    }
}
