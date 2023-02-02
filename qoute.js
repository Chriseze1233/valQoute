const quotes = [
    
        `But when I’m with you /
I feel like a dreamer that’s had all his dreams come true`
    ,
    
        `And if the stars should ever die, we’ll make our own light, you and I.`
    ,
    
        `I look at every day with you as a gift."`
    ,
    
        
        `Love recognizes no barriers, it jumps hurdles, leaps fences, penetrates walls to arrive at its destination, full of hope.`
    ,
    `You are my heart, my life, my one and only thought`
    ,
    `You never lose by loving. You always lose by holding back`
    ,
    `I wanted it to be you. I wanted it to be you so badly."`,
    `Love is an irresistible desire to be irresistibly desired`
    ,
    `When love is not madness it is not love.`
    ,
    `If you remember me, then I don't care if everyone else forgets`
    ,
    `You are the answer to every prayer I've offered`
    ,
    `Every heart sings a song, incomplete, until another heart whispers back`
    ,
    `To love at all is to be vulnerable`
    ,
    `I love you because the entire universe conspired to help me find you`
    ,
    `If you work through the tough times, the respect and love that you feel deepens`
    ,
    `All that you are is all that I’ll ever need`
    ,
    `There's no bad consequence to loving fully, with all your heart. You always gain by giving love`
    ,
    `I would rather share one lifetime with you than face all the ages of this world alone`
    ,
    `If you love them in the morning with their eyes full of crust; if you love them at night with their hair full of rollers, chances are, you’re in love."`
    ,
    `Even in my dreams I never imagined that I should find so much love on earth`
    ,
    `The early possession you obtained (in my heart), and the absolute power you have obtained over it, leaves not the smallest space unoccupied`
]

const getQoute = document.querySelector('#getQoute');
const showQoute = document.querySelector('.quote');
const copy = document.querySelector('#copy');
let copied = copy.querySelector('.cpi');
let count = 0;

function getRandom() {
    count = Math.floor(Math.random() * quotes.length);
    showQoute.textContent = quotes[count];
}

function copyTex(textCont) {
   let  contents = showQoute.textContent;
   let cont = document.createElement("input");
   cont.setAttribute('value', contents);
   showQoute.appendChild(cont)
   cont.select();
    document.execCommand('copy');
    cont.parentNode.removeChild(cont);
 }
 
  
function changeText() {
    copied.innerText = "Copied";
};

getQoute.addEventListener('click', () => {
    getRandom();
    console.log(count);
    showQoute.style.fontStyle = "italic";
    copied.innerHTML=("copy")
    showQoute.classList.add("active");
})

copy.addEventListener('click', () => {
    copyTex();
    changeText();
})

