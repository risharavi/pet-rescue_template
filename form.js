function validatename(){
    const name = document.getElementById("name").value;
    const nameiInput = document.getElementById("name");
    const nameMessage = document.getElementById("namemessage");
    if(name.length >= 3){
        nameiInput.style.borderColor ="green";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        return true;
    }
    else{
        nameiInput.style.borderColor = "red";
        nameMessage.textContent = "Name should be at last 3 characters long";
        nameMessage.style.color = "red";
        return false;
    }
    }

function validateemail(){
const email = document.getElementById("email").value;
const emailiInput = document.getElementById("email");
const emailMessage = document.getElementById("emailmessage");
const emailpattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if(emailpattern.test(email)){
    emailiInput.style.borderColor ="green";
    emailMessage.textContent = " valid email ";
    emailMessage.style.color = "green";
    return true;
}
else{
    emailiInput.style.borderColor = "red";
    emailMessage.textContent = "Enter a valid email address";
    emailMessage.style.color ="red";
    return false;
}
}

function validatepassword(){
    const password = document.getElementById("password").value;
    const passwordiInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordmessage");
    if(password.length >= 3){
        passwordiInput.style.borderColor ="green";
        passwordMessage.textContent = "strong";
        passwordMessage.style.color = "green";
        return true;
    }
    else{
        passwordiInput.style.borderColor = "red";
        passwordMessage.textContent = "password should be at last 3 characters long";
        passwordMessage.style.color = "red";
        return false;
    }
    }
    document.getElementById("myform").addEventListener("submit", function(event){
        const isvalidName = validatename();
        const isvalidEmail = validateemail();
        const isvalidPassword = validatepasswod();
        if(!isvalidName || !isvalidEmail|| !isvalidPassword){
            event.preventDefault();
        }

            
        
        


    });