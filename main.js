//console.log("js ok");
const emails =document.getElementById("list")
const generateListBtn =document.getElementById("add-list")

for(let i =0; i < 10 ; i++){
    fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json() )
    .then((data) => {
        const singleEmail = data.response;
        emails.innerHTML += `<a href="#" class=" list-group-item list-group-item-action text-center">${singleEmail}</a>`;
        
    })
    
}


//function generateNewEmailList (num){
    //for(let i =0; i < num ; i++){
       // const singleEmail="";
        //fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
        //.then((response) => response.json() )
        //.then((data) => {
             //singleEmail = data.response;
        
        //})  
    //}
    
//}

//let esempio = generateNewEmailList(5);
//console.log(esempio);
