
let inpcollection = new DocumentFragment()
let submit = document.querySelector("#btn")
let table = document.querySelector("#tablee")

//adding addEventListener to take the input while clicking on submit button

submit.addEventListener('click',(e)=>{
let inputs= document.querySelectorAll(".inp")
let tr= document.createElement("tr")
let inpName = document.querySelector(".name")
let inpNum = document.querySelector(".num")
let inpMail = document.querySelector(".email")
let form = document.querySelector("#form")
let gender = document.querySelectorAll(".gen")
for(let i=0 ; i<gender.length ;i++){
   if(gender[i].checked){
      console.log(gender[i].value)
      gender= gender[i]
   }
}

//checking if the input isnt empty, so that we can store the input in the

if(inpName.value != "" && inpNum.value !="" && inpMail.value != "" && gender.checked ==true ){
for(let i=0; i<inputs.length;i++){
   let td=document.createElement("td")
   td.textContent= inputs[i].value
   inpcollection.append(td)
tr.appendChild(inpcollection)
}
let td = document.createElement("td")
td.textContent= gender.value
console.log(td)
inpcollection.append(td)
tr.append(inpcollection)
table.append(tr)
}
//If any of the input is empty them it will not going to store any single input and will shows the alert

else if(inpName.value != "" || inpNum.value =="" || inpMail.value == "" ||  gender.checked){
alert("Fill all the field to submit the form")}

// let para = document.createElement("p")
// para.textContent="this is field mandatory"
// let div = document.createElement('div')
// div.className = "div"
// div.appendChild(para)
// inpName.after(div)
// console.log(inpName)
}


   
) 






// focus part

 let boxFocus = document.querySelectorAll(".inp")

for(let i=0 ; i<boxFocus.length ; i++){
    if(boxFocus[i].type=="text"){
        
        let nam = document.querySelector(".name")
            nam.addEventListener("focus",(e)=>{
               e.target.style.background="#1d3456"
            })
            nam= document.querySelector(".name")
            nam.addEventListener("blur",(e)=>{
               e.target.style.background=""
            })
    }
    else if(boxFocus[i].type=="number"){
        
        let num = document.querySelector(".num")
        num.addEventListener("focus",(e)=>{
           e.target.style.background="#1d3456"
        })
        num= document.querySelector(".num")
        num.addEventListener("blur",(e)=>{
           e.target.style.background=""
        })

    }
else{
    
    let mail= document.querySelector(".email")
            mail.addEventListener("focus",(e)=>{
               e.target.style.background="#1d3456"
            })
            mail= document.querySelector(".email")
            mail.addEventListener("blur",(e)=>{
               e.target.style.background=""
})
}
 }


