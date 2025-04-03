// Recupero gli elementi del DOM
const allList = document.getElementById('all-list');
const button = document.getElementById('button');

// Dichiaro le variabili che mi servono
const endpoint = `https://flynn.boolean.careers/exercises/api/random/mail`;
// Variabile nella quale inserire le mail
let emailItems = [];

// Funzione per generare 10 mail random
const generateEmail = () => {
    emailItems = [];  // Resetto l'array prima di iniziare
    // Ciclo i 10 elementi
    for (let i = 0; i < 10; i++) {
        // Svolgo la chiamata AJAX
        axios.get(endpoint).then(res => {
                const email = res.data.response;
                
                emailItems.push(`<li>${email}</li>`);  // Aggiungo la mail all'array

                // Una volta che tutte le email sono state aggiunte, aggiorno il DOM
                if (emailItems.length === 10) {
                    allList.innerHTML = emailItems.join('');  // Unisco gli elementi dell'array in una stringa
                }
            })
    }
};
// Funzione di callback
button.addEventListener('click', () => {
    generateEmail(); 
});
