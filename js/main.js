// On full page load
$(function() {
        // Fill in greeting
        fillInGreeting();
        
        //On click of greeting or image
        $( '#greeting, #me-image' ).on( "click", function() {
                fillInGreeting();
        });
});

// Greetings
var greetings = ['Hello!', 'Hola!', 'Kamusta!', 'Salut!', 'Hallo!', 'Ciao!', 'Ahoj!', 'YAH sahs!', 'Czesc!', 'Ni hao!', 'Hej!', 'Kon\'nichiwa!', 'Annyeonghaseyo!', 'Shalom!', 'Merhaba!', "Hujambo!"];

// Fill in greeting with random greeting
function fillInGreeting() {
        var greeting = greetings[Math.floor(Math.random()*greetings.length)];
        $( '#greeting' ).html(greeting);	
}