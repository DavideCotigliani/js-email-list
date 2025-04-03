//recupero gli elementi del dom
const allList = document.getElementById ('all-list')

//dichiaro le variabili che mi servono
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`
//variabile nella quale inserire le mail
let emailItems = [];

//funzione per generare 10 mail random
const generateEmail = ()=>{
    //ciclo for per ciclare i 10 elementi
for(let i= 0; i<10; i++){
    //svolgo chiamata AJAX
    axios.get(endpoint).then(res=>{
        const email = res.data.response

        //aggiungo gli elementi nell'array emailItems
        emailItems.push(`<li>${email}</li>`)
        // una volta raggiunti 10 elementi li unisco insieme
        if(emailItems.length === 10){
            allList.innerHTML = emailItems.join('')
        }
    })
}
}
//chiamo la funzione
generateEmail()
