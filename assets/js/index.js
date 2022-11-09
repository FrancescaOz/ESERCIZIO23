//FORM DI INPUT//

var benvenuto = document.getElementById('benvenuto');
var inserisci = document.getElementById('inserisci');
var cancella = document.getElementById('cancella');

inserisci.addEventListener('click', function(e){
    e.preventDefault();
    var nome = document.getElementById('nome').value;
    localStorage.setItem('utente', nome);
    benvenuto.innerHTML = `Benvenuto/a ${localStorage.getItem('utente')}`;
    document.getElementById('nome').value ="";
})

cancella.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('utente');
saluto.innerHTML ='';
})

//TIMER
var sec = 0;
var min = 0;
var ore = 0;
var timer = setInterval(stopwatch, 1000);
var secRecord = sessionStorage.getItem('scorrereSec');
var minRecord = sessionStorage.getItem('scorrereMin');
var oreRecord = sessionStorage.getItem('scorrereOre');

if (secRecord && minRecord) {
    sec = Number(secRecord);
    min = Number(minRecord);
    ore = Number(oreRecord);
}

function stopwatch() {

    if (sec == 60) {
        sec = 0;
        min++;
    } if (min == 60) {
        min = 0
        h++;
    }
    sec++;

    sessionStorage.setItem('scorrereSec', sec);
    sessionStorage.setItem('scorrereMin', min);
    sessionStorage.setItem('scorrereOre', ore);
    document.querySelector('.timerConto').innerHTML = `Sei connesso da: ${ore} ore ${min} min ${sec} sec`;

}

window.addEventListener('DOMContentLoaded', stopwatch);

//AXIOS//

//<---LI RICHIAMO TUTTI---->//
axios.get('https://fakestoreapi.com/products/').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});
//<---NE PRENDO UNO---->//
axios.get('https://fakestoreapi.com/products/11').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});
//<---NE AGGIUNGO UNO---->//
axios.post('https://fakestoreapi.com/products/', {title: 'Ho aggiunto un elemento', price: 10.99, description: 'Il mio post', category: 'Il mio post', image: 'Il mio post', rating: 'Il mio post'}).then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

//<---NE MODIFICO UNO---->//
axios.put('https://fakestoreapi.com/products/21', {title: 'Ne ho modificato uno', price: 10.99, description: 'La mia modifica', category: 'La mia modifica', image: 'La mia modifica', rating: 'La mia modifica'}).then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});
//<---NE ELIMINO UNO---->//
axios.delete('https://fakestoreapi.com/products/21').then(function (response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});
//<---LI RICHIAMO TUTTI---->//
axios.get('https://fakestoreapi.com/products/').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error) {
    console.log(error);
});
