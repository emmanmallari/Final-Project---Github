/* scripts.js */

document.querySelector('.registration-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add code to handle form submission, such as sending data to a server
    // For demonstration purposes, let's log the submitted data
    console.log('Registration Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Optionally, you can redirect the user to a confirmation page
    // window.location.href = 'confirmation.html';
});
