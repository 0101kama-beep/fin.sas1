let quote = [];
function getquote() {
    fetch("https://zenquotes.io/api/quotes")
        .then(Response => Response.json)
        .then(data => {
           console.log(data);   
           let Quotes = data[0].q;
           let authore = data[0].a;
     document.querySelector(".Quotes").textContent = Quotes;
      document.querySelector(".authore").textContent = authore;
        }
        )


};

 window.onload = function () {
     getquote(); }
