var today = new Date();

$('#date').text(function(){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
    return date;
});

$('#age').text(function(){
    var birthday = new Date(1999, 6, 9); // July 9, 1999
    var age = today.getFullYear() - birthday.getFullYear();
    if (today.getMonth() < birthday.getMonth() || today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate())
        age--;
    return age;
});
