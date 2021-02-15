function validate()
{
    var user = document.getElementById("username");
    var password = document.getElementById("password");
    var username = "admin";
    var pwd = "12345";

    
    if(user.value == "" || password.value == ""){
        // alert("Fields cannt be empty");
        // Swal.fire("Fields cannot be empty");
        swal({
            icon: 'warning',
            title: 'Oops...',
            text: 'Fields cannot be empty!',
            
          })
        return false;
    }

    else if(!user.value.match(username)){
        // alert("You have entered an invalid username/password!");
        // Swal.fire("You have entered an invalid username/password!!");
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'You have entered an invalid username/password!!',
            
          })
        return false;

    }
    else if(!password.value.match(pwd)){
        // alert("You have entered an invalid username/password!");
        // Swal.fire("You have entered an invalid username/password!!");
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'You have entered an invalid username/password!!',
            
          })
        return false;
    }
    else{
        
        return true;
    }

 

}
  


      






















