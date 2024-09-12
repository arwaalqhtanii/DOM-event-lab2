let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let head= document.getElementById('head')
console.log(img1,img2,img3);


img1.addEventListener("click" , ()=> {
    document.body.style.background = "blue";
    let text = document.createElement("p")
    text.innerText="hello"
    text.style.textAlign ="center"
    head.appendChild(text)
})