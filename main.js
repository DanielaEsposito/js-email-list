//console.log("js ok");
const emails =document.getElementById("list")
const generateListBtn =document.getElementById("add-btn")


function generate(){
    for(let i =0; i < 10 ; i++){
        fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
        .then((response) => response.json() )
        .then((data) => {
            const singleEmail = data.response;
            emails.innerHTML += `<a href="#" class=" list-group-item list-group-item-action text-center">${singleEmail}</a>`;
            
        })   
    }
}
let startEmail = generate();


generateListBtn.addEventListener("click" ,(event) =>{
    emails.innerHTML="";
    emails.innerHTML= `<div  class="list-group-item list-group-item-action text-center fw-bold">My e-mail list</div>`
    generate();
});