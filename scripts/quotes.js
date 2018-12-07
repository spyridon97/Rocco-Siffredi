const p = document.getElementById("quotepara"); 
const aud = document.getElementById("myAudio");

function giveQuote(){
            var x = Math.floor((Math.random() * 8));
            var phrases=["Passion, Humility, Irony",
                         "Respect for women",
                         "I'm always ready",
                         "In life it does not matter who you go with, but who you are with",
                         "Life is too short to waste it in fulfilling the dreams of others, throw yourself headlong into your dreams",
                         "Fantozzi forever in my heart",
                         "Indulge without limitations",
                         "I like islands and what can I do?"];
            p.innerHTML=phrases[x];
            aud.play();
}
        

