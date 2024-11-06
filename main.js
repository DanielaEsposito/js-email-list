//console.log("js ok");
const emails =document.getElementById("list")


for(let i =0; i < 10 ; i++){
    fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json() )
    .then((data) => {
        const singleEmail = data.response;
        emails.innerHTML += `<li>${singleEmail}</li>`;
        console.log(emails);
        
    })
    
}
