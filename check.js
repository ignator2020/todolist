

function check(){
    return new Promise(function(resolve,reject){
        var count= 0;
        count=document.querySelectorAll("input:checked");
        console.log(count);
        console.log(count.length);
       if(count.length==95){
           resolve(swal("Good job!", "You have completed 5 tasks!", "success"));
           
       } 
    })
}


