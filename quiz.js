let quiz=[{ques: "Question 2",
para:"The correct sequence of HTML tags for starting a webpage is",
one:"Head, Title, HTML, body",

two:"HTML, Body, Title, Head",
three:"HTML, Head, Title, Body",
cor:"HTML, Head, Title, Body"},




{ques: "Question 3",
para:"The correct sequence of HTML tags for starting a webpage is",
one:"Head, Title, HTML, body",

two:"HTML, Body, Title, Head",
three:"HTML, Head, Title, Body",
cor:"HTML, Head, Title, Body"},







{ques: "Question 4",
para:"The correct sequence of HTML tags for starting a webpage is",
one:"Head, Title, HTML, body",

two:"HTML, Body, Title, Head",
three:"HTML, Head, Title, Body",
cor:"HTML, Head, Title, Body"},

]

let ques=document.querySelector(".question1");
let para=document.querySelector("p");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let btn=document.querySelector(".next");
idx=0

function next(){
    
    if(idx>quiz.length-1){alert("quiz finished")}
    
    
    ques.innerText=quiz[idx].ques
    para.innerText=quiz[idx].para
    one.innerText=quiz[idx].one
    two.innerText=quiz[idx].two
    three.innerText=quiz[idx].three
    idx++;
}
function start(){
    let first=document.querySelector(".first")
    first.style.display="block";}