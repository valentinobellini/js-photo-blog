// seleziona gli elementi del DOM
const container = document.getElementById('container');




// definisci l'endpoint
const apiEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'



generateCards();


// funzioni

// funzione per generare le cards

function generateCards() {

    // invia la richiesta GET all'API
    axios.get(apiEndpoint)
        .then(responseObj => {

            // logga oggetto di risposta per debug
            // console.log(responseObj);


            const cardsList = responseObj.data

            // logga data per debug
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
            console.error('Errore durante il recupero dell\'email:', error);

            // aggiungi messaggio di errore in pagina
            outputList.innerHTML = `
                        <li>404 | NOT FOUND</li>
                        `;
        });
}