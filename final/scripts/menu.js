document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });
});