// Clicked on logo
$('.profil-logo').on('click', function () {
    window.open('https://github.com/Adan-Perez', '_blank', 'noopener noreferrer');
});

// Typing on input
$('input').keyup(function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        this.value = '';
        this.blur();
    }
});

// Typing on textarea
$('textarea').keyup(function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        this.value = '';
        this.blur();
    }
});
