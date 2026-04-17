const validateForm  = (event) => {
    event.preventDefault()

    let uname = event.target.uname.value
    let password = event.target.password.value

    let msg = document.getElementById("message")

    if(uname==="" && password==="")
    {
        msg.innerText = "Please Enter username and password"
    }
    else if(uname==="")
    {
        msg.innerText = "please enter username"
    }
    else if(password==="")
    {
        msg.innerText = "please enter password"
    }
    else
    {
        msg.innerText = "Login Successful"
    }
};