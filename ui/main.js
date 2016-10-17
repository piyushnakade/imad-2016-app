//counter code
var button = document.getElementById('counter');
button.onclick = function (){
    // make request to counter endpoint
     //capture response and store it in variable 
     
     //render the variable in correct span
     counter = counter + 1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
     
      
     
     
};
