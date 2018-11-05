// Implementation of the landing's page text slider
const quote = document.getElementById("quote");
const quoter = document.getElementById("quoter");
console.log(quote, quoter);

const quotes = [
    {
        quote: "I want to see emotion... fear... excitement... the eyes going up from being surprised.",
        quoter: "-Rocco Siffredi"
    },
    {
        quote: "Rocco has far more power in this industry than any actress.",
        quoter: "-John Stagliano"
    },
    {
        quote: "Any girl in the industry who has been with him... will tell you that they have done things with him that they [would] never do with anyone else.",
        quoter: "-Bobbi Starr"
    },
]

let quoteIndex = 0;

setInterval(()=>{
    quoteIndex++;
    if (quoteIndex > 2)
        quoteIndex = 0;
    quote.innerHTML = '<strong>"'+ quotes[quoteIndex].quote +'"</strong>';
    quoter.innerHTML = '<p>' + quotes[quoteIndex].quoter + '</p>';
}, 5000);