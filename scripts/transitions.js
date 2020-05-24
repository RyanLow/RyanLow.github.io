$(function() {
    $('body').fadeIn(400);
});

$('a').click(function(event) {
    if(this.hostname == window.location.hostname) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('body').fadeOut(400);
        setTimeout(function() {
            window.location.href = link;
        }, 400);
    }
});
