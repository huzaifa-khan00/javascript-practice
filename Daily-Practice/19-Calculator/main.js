let equalCount = 0;

function calculator(data){

   if(data == "equal"){
      equalCount++;

      let result = document.getElementById('current-display').innerText;

      let evalDisplay = document.getElementById('eval-display').innerText = result;

      if(equalCount >= 2){
         document.getElementById('eval-display-old').innerText = evalDisplay;
      }
      
      result = document.getElementById('current-display').innerText = eval(result);
      
      console.log(result)
      return;
   }if(data == "clear"){
      equalCount = 0;
      document.getElementById('current-display').innerText = '';
      document.getElementById('eval-display').innerText = '';
      document.getElementById('eval-display-old').innerText = '';
      return;
   }if(data == "del"){
      let del = document.getElementById('current-display').innerText;
      del = del.slice(0, del.length -1);
      document.getElementById('current-display').innerText = del;
      return;
   }

   let currentData = document.getElementById('current-display').innerText += data;
   
}
