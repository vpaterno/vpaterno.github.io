// On full page load
$(function() {
        // Fill in greeting
        fillInGreeting();
        
        //On click of greeting or image
        $( '#greeting, #me-image' ).on( "click", function() {
                fillInGreeting();
        });
        
        //On click of button change/clear class
        $( '.description-button' ).on( "click", function() {
                updateClass(this, '.description-button', 'btn-white-top','btn-white-top');
        });
        
        // On click of "you"
        $( '#you-link' ).on( "click", function() {
                $(this).load('./you.html');
        });
});

// Greetings
var greetings = ['Hello!', 'Hola!', 'Kamusta!', 'Salut!', 'Hallo!', 'Ciao!', 'Ahoj!', 'YAH sahs!', 'Czesc!', 'Ni hao!', 'Hej!', 'Kon\'nichiwa!', 'Annyeonghaseyo!', 'Shalom!', 'Merhaba!', "Hujambo!"];

// Fill in greeting with random greeting
function fillInGreeting() {
        var greeting = greetings[Math.floor(Math.random()*greetings.length)];
        $( '#greeting' ).html(greeting);	
}

// Change border on selected button
function updateClass(thing, all, a, r) {
        console.log(thing);
        $(all).removeClass(r);
        $(thing).addClass(a);
}