// On full page load
$(function() {
        // Fill in greeting
        fillInGreeting();
        
        // Select proper active nav link
        activateCurrentPageNav();
        
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
        
        // Contact form submit
        $('#google-form').on('submit', function(e) {
                $('#google-form *').fadeOut(2000);
                $('#form-message').text('Thank you! I\'ll get back to your query as soon as possible.');
        });

});

// Greetings
var greetings = ['Hello!', 'Hola!', 'Kamusta!', 'Salut!', 'Hallo!', 'Ciao!', 'Ahoj!', 'YAH sahs!', 'Czesc!', 'Ni hao!', 'Hej!', 'Kon\'nichiwa!', 'Annyeonghaseyo!', 'Shalom!', 'Merhaba!', "Hujambo!"];

// Fill in greeting with random greeting
function fillInGreeting() {
        var greeting = greetings[Math.floor(Math.random()*greetings.length)];
        $( '#greeting' ).html(greeting);	
}

// Add/remove classes
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

// Select current page nav based on current uri
function activateCurrentPageNav() {
        // Get current page path
        var path = window.location.pathname;
        console.log(path);
        
        // If you.html use activate you
        if (path.includes('you.html')) {
                $('#you-nav-link').addClass('active');
        // Otherwise default to me
        } else {
                $('#me-nav-link').addClass('active');
        }
}