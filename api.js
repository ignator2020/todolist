function ajax(){
    // Creating an XHR Object
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    xhttp.onreadystatechange = function(){
        // condition
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
          
            var output ="";
            output += `<thead>
                            <th>Status</th>
                            <th>Task</th>
                       </thead>`
            for(var i=0;i<response.length;i++){

                

                if(response[i].completed == true){
                    output += ` <tr>
                        <td><input type="checkbox"  id="chkbx" checked disabled></td>
                        <td style="text-decoration: line-through;">${response[i].title}</td>
                    <tr>`;
                }
                else{
                  output += 
                                 `
                                     <tr> 
                                        <td><input type="checkbox" onclick="check();"></td>    
                                        <td>${response[i].title}</td>
                                     </tr>   
                                   `;
                }
               
                
                      
            }
            document.getElementById("myTable").innerHTML = output;
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }

   