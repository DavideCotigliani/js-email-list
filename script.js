//recupero gli elementi del dom
const allList = document.getElementById ('all-list')

//dichiaro le variabili che mi servono
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`
let emailItems;
//funzione per generare 10 mail random
const generateEmail = ()=>{
for(let i= 0; i<10; i++){
    axios.get(endpoint).then(res=>{
        const email = res.data.response
    })
}
}
