// On full page load
$(function() {
        // Fill in greeting
        fillInGreeting();
        
        //On click of greeting or image
        $( '#greeting, #me-image' ).on( "click", function() {
                fillInGreeting();
        });
        
        //On click of button change/clear class and scroll into view.
        $( '.description-button' ).on( "click", function() {
                updateClass(this, '.description-button', 'btn-white-top','btn-white-top');
                
                // Scroll into view
                $('html, body').animate({
                        scrollTop: $(this).offset().top - 15
                });
        });
        
        //On click of nav items change/clear class
        $( '#nav-left .nav-item' ).on( "click", function() {
                updateClass(this, '#nav-left .nav-item', 'active','active');
        });
        
        // On click of "you"
        $( '#you-link' ).on( "click", function() {
                $('#me').load('./you.html');
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
        
        // If the class is already on what was clicked
        // They're collapsing, just remove the class
        if ($(thing).hasClass(a)) {
                $(thing).removeClass(r);
        // Else, they're expanding
        } else {
                $(all).removeClass(r);
                $(thing).addClass(a);
        }
}