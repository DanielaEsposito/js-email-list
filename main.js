console.log("js ok");

for(let i =0; i < 10 ; i++){

    fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => response.json() )
    .then((data) => {
        const singleEmail = data.response;
        
        console.log(singleEmail);
        
    });
}
