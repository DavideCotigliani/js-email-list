//recupero gli elementi del dom
const allList = document.getElementById ('all-list')

//dichiaro le variabili che mi servono
const number= 10;
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`


//svolgo la chiamata AJAX per interrogare l'endpoint
axios.get(endpoint).then(res =>{

    //recupero l'array dei valori generati
    const result = res.data.response
})
