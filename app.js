//Event Listener

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e){
 
  const number = document.querySelector("input[type=number]").value;
  
  const xht = new XMLHttpRequest();
  xht.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
   
  xht.onload = function(){
    if(this.status===200){
      const response = JSON.parse(this.responseText);
      let output = "";
      response.value.forEach(function(joke){
         output +=`
          <li>${joke.joke}</li>
         `;
      })
     // console.log(response.value[0]);

      document.querySelector(".jokes").innerHTML = output ;
    }
    
  }
  xht.send();

  e.preventDefault();
}