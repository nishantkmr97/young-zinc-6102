
let Register = async() => {
  
    try{
        var register_data = {
        userName : document.querySelector("#username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        cpassword :document.querySelector("#confirmpassword").value,
        mobilephone : document.querySelector("#mob").value,
    };
    
    register_data =JSON.stringify(register_data);         
    
    let res = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: register_data,
    
        headers :{
           "Content-Type": "application/json", 
        },
    });                                                                 
    
    let data = await res.json();
    console.log("data :", data);
    } catch(error){
            console.log("error", error);
    }
    window.location.href="./login.html"
    };
       



