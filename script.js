// access the html elements
let footer = document.querySelector("#footer");
let inputs = document.querySelector("#inputs");
let sab = document.querySelector("#sab");
let card = document.querySelector(".card");
let main1 = document.querySelector("#main1");
let ques = document.querySelector("#ques");
let main = document.querySelector("#main");
let str = document.querySelector("#start")
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let getOptions = document.querySelectorAll("input");
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let timer = document.querySelector(".timer");

let quiz =
    [{ question: "Q. How to insert an image in HTML?", opt1: "<img href = jtp.png />", opt2: "<img url = jtp.png />", opt3: "<img src = jtp.png />", copt: "<img src = jtp.png />" },
    { question: "Q. How to insert a background image in HTML? ", opt1: "<body background = img.png>", opt2: "<img background = img.png>", opt3: "<bg-image = img.png>", copt: "<body background = img.png>" },
    { question: " Q.What are the types of unordered or bulleted list in HTML?", opt1: "disc, square, triangle", opt2: "disc, circle, square", opt3: "polygon, triangle, circle", copt: "disc, circle, square" },
    { question: "Q.Which is the correct way to comment out something in HTML?", opt1: "Using ## and #", opt2: "Using <!-- and -->", opt3: "Using </-- and -/->", copt: "Using <!-- and -->" },
    { question: "Q.The correct sequence of HTML tags for starting a webpage is ?", opt1: "HTML, Head, Title, Body", opt2: "HTML, Body, Title, Head", opt3: "Head, Title, HTML, body", copt: "HTML, Head, Title, Body" },
    { question: "Q. Which object in Javascript doesn’t have a prototype?", opt1: "Base Object", opt2: "All object have prototype", opt3: "None of the above", copt: "Base Object" },


    ]

let score = 0;
let idx = 0;
let timeleft = 60;

function next() {
    main.style.display = "block"
    //     ques.innerText=quiz[idx].question
    //     opt1.innerText=quiz[idx].opt1
    //     opt2.innerText=quiz[idx].opt2
    //     opt3.innerText=quiz[idx].opt3
    //   idx++;
    main1.innerText = ""

    for (let i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked) {
            let seloptval = getOptions[i].value
            // console.log(seloptval)
            let selectedques = quiz[idx - 1]["question"]
            // console.log(selectedques)
            let selectedopt = quiz[idx - 1][`opt${seloptval}`]
            console.log(selectedopt)
            let correctopt = quiz[idx - 1]['copt']
            console.log(correctopt)
            if (selectedopt === correctopt) { score++ }

        }

        getOptions[i].checked = false;
    }

    if (idx > quiz.length - 1) {
        showScore();



    }
    ques.innerText = quiz[idx].question
    opt1.innerText = quiz[idx].opt1
    opt2.innerText = quiz[idx].opt2
    opt3.innerText = quiz[idx].opt3
    idx++;



    if (idx < quiz.length) { startTimer(); }

}

function cl() {
    btn.disabled = false
}
const startTimer = () => {
    const countdown = () => {
        timer.textContent = timeleft
        timeleft--;





    }





    timerID = setInterval(countdown, 2000);
}




const stopTimer = () => { clearInterval(timerID); }
const showScore = () => {
    card.textContent = ` YOU SCORED     ${score} / ${quiz.length}  `
    // const stopTimer=()=>{clearInterval(timerID);
    footer.style.display = "none"
    inputs.style.display = "none"
    ques.style.display = "none"
    main1.style.height = "200px"
    sab.style.display = "block"
    main1.style.display = "block"
}
// ques
// getOptions.innerText="";
// opt1.innerText="";
// opt2.innerText="";
// opt3.innerText="";
// btn.innerText="play again";
// main.innerText="helloooo"
// main.innerText= `\t,\t,-------------- "Hey Good Effort !""\n \n Keep practicing to improve your \n\n \t\t\t\t mcqs scores ! !! \n \n \t \t \t You scored ${score} out of ${quiz.length} `

