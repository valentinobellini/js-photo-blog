// seleziona gli elementi del DOM
// seleziona il contenitore dove verranno inserite le cards
const container = document.getElementById('container');

const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");




// definisci l'endpoint da cui recuperare i dati delle immagini
const apiEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'


// invoca funzione per generazione cards
generateCards();






// ************************
//GESTIONE OVERLAY
// ************************



//event listener che fa apparire overlay al click
container.addEventListener('click', showOverlay);

//event listener che fa scomparire overlay al click
closeButton.addEventListener('click', hideOverlay);







// ************************
// FUNZIONI
// ************************

// funzione per generare le cards
function generateCards() {


    // invia la richiesta GET all'API
    axios.get(apiEndpoint)
        .then(responseObj => {

            // logga oggetto di risposta per debug
            // console.log(responseObj);

            // estrai la lista delle cards dalla risposta dell'API
            const cardsList = responseObj.data

            // logga lista delle cards per debug
            console.log(cardsList);


            // cicla per ricavare ogni elemento dalla lista
            for (let i = 0; i < cardsList.length; i++) {
                let card = cardsList[i];

                console.log(card);


                // crea le card in pagina
                container.innerHTML += `
                <div class="card">
                    <img class="pin" src="./img/pin.svg" alt="">
                    <div class="innerContainer">
                        <img class="image" src="${card.url}" alt="">
                        <div class="textContainer">
                            <h5>${card.date}</h5>
                            <h2>${card.title}</h2>
                        </div>
                    </div>
                </div>
                `
            }
            





        })

        .catch(function (error) {
            // gestisci eventuali errori nella richiesta
            console.error('Errore durante il recupero dei dati:', error);

            // aggiungi messaggio di errore in pagina
            container.innerHTML = `
                        <h2 class="error">404 | NOT FOUND</h2>
                        `;
        });
};


// funzione per far apparire overlay
function showOverlay() {
    overlay.classList.remove('inactive');
    overlay.classList.add('active');
}


//funzione per far scomparire overlay
function hideOverlay() {
    overlay.classList.remove('active');
    overlay.classList.add('inactive');
}