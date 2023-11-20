function signUp(){


document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Implement form validation
  
    const response = await fetch('http://127.0.0.1:3400/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password, bio }),
    });
  
    const data = await response.json();
    console.log(data);
  });

}

signUp();