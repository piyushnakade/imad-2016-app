//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    // make request to counter endpoint
    var request = new XMLHttpRequest();
     //capture response and store it in variable
     request.onreadystatechange = function (){
         if(request.readystate===XMLHttpRequest.DONE)
         {
             //take some action
             if (status==200){
                 var conuter = request.responseText;
                 var span = document.getElementById('count');
     span.innerHTML = counter.toString();
     
             }
             
     }
     
     
    //not done yet
     };
     //make the request
     request.open('http://piyushnakade.imad.hasura-app.io/counter',true);
     request.send(null);
      
     
    
};
