document.querySelector('.registration-form form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Registration Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

});
