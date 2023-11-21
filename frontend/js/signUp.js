function signUp(){

let output;

document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const  p = document.getElementById('message');
    const form=document.getElementById('registerForm');

  
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

    
   //Setting the message which display the message in json 
    if(data.success){
        if(data.success==true){
           p.innerText='Registered successfully'
        }
        else{
         p.innerText= data.message;
        }
       
      }
      else{
        p.innerText=data.error;
      }
  
      //resetting the form or if we don't do that and again submit that data we will get the error.
    form.reset();

    setTimeout(()=>{
      p.innerText='';
    },10000)
    

  });
   
  

}

signUp();