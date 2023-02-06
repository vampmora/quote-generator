let quoteText = document.getElementById('quote-text'),
    quoteTag  = document.getElementById('quote-tag'),
    quoteAuthor= document.getElementById('quote-author'),
    quoteGenBtn = document.getElementById('quote-gen-btn');


   function randomQuote(){       //2
    
    fetch('https://api.quotable.io/random')   //1
    .then(response => response.json())
    .then(data=> {
     //console.log(data.content, data.author)
     
     //4
     quoteText.textContent = ` “${data.content}” `;
     //quoteTag.textContent = data.tag;
     quoteAuthor.textContent = ` " ${data.author} "`;

    })
 
   }

   quoteGenBtn.addEventListener('click', ()=>{  //3
    randomQuote()
   })