/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$.getJSON("https://api.giphy.com/v1/gifs/trending&api_key=tAVAozfTYPug6pP2VlExfLnuIiO4slSX", function(data) { console.log("success got data", data); })

$.ajax({
  url: 'https://randomuser.me/api/?results=3',
  dataType: 'json',
  success: function(data) {
    const users = data.results;
    
    const button = document.querySelector('button')
    
    const showPlayers = (jsonObj) => {
    const users = jsonObj;
    console.log(users)
      for (let i = 0; i < users.length; i++) {
      const myArticle = document.createElement('article');
      const myDiv = document.createElement('div');
      const myH2 = document.createElement('h2');
      const monH2 = document.createElement('div');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myDiv4 = document.createElement('div');
      const myList = document.createElement('ul');
      const myRow = document.createElement('div');

      monH2.insertAdjacentHTML('beforeEnd', `<h1 class='text-center rainbow'>Player ${i+1} </h1>`);
      myH2.textContent = users[i].name.first + " " + users[i].name.last.toUpperCase() ;
      myPara1.textContent = 'Email: ' + users[i].email;
      myPara2.textContent = 'Gender: ' + users[i].gender.toUpperCase();
      myPara3.textContent = 'Location:' + users[i].location.city + " " + users[i].location.state;
      myDiv4.insertAdjacentHTML('beforeEnd', `<div style="width:100%;height:0;padding-bottom:133%;position:relative;"><iframe src="https://giphy.com/embed/1yMeHjINSR6mB0cwEB" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/hot97-1yMeHjINSR6mB0cwEB">via GIPHY</a></p>`)

      myDiv.className = "four columns";
      myRow.className = "row";
      myDiv.style = 'margin-top: 40px;'  

      myDiv.appendChild(monH2);
      myDiv.appendChild(myDiv4);
      myDiv.appendChild(myH2);
      myDiv.appendChild(myPara1);
      myDiv.appendChild(myPara2);
      myDiv.appendChild(myPara3);
      myDiv.appendChild(myList);

    
      const myContainer = document.querySelector(".row")
      console.log(myContainer)

      myContainer.appendChild(myDiv);
      }
    }
    
    button.onclick = function() {
      showPlayers(users)
    } 
    
  }
});
    


    
