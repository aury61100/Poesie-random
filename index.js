// https://poetrydb.org/author,title/Shakespeare;Sonne
var obj;
fetch("out.json")
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {
        var title = document.createElement("h1");
        var author = document.createElement("h3");
        var text = document.createElement("p");

        var random = obj[Math.floor(Math.random()*154)];
        
        title.innerHTML = random.title;
        document.body.appendChild(title);

        text.innerHTML = random.text;
        document.body.appendChild(text);

               
    })

