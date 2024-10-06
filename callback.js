
// function greeting(person){
//     console.log(person);
// }

// const name = 'halima';
const laptop = {
    price: 45000,
    brand: 'lenovo',
    memory: '8gb'
}
// greeting(name);
// greeting(laptop);

// function greetingHandler(){
//     console.log('good morning');
// }
// greeting(greetingHandler);

function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('good morning', name);
}

function greetEvening(name){
    console.log('good evening', name);
}

greeting(greetingHandler, 'Kabir');
greeting(greetingHandler, 'kobi');
greeting(greetingHandler, 'Kofi');
greeting(greetEvening, 'solaiman');

