document.addEventListener('DOMContentLoaded', function () {
    const listIcon = document.getElementById('listIcon');
    const closeIcon = document.getElementById('closeIcon');
    const iconContainer = document.getElementById('iconContainer');
    const navLinks = document.getElementById('navLinks')
    const mainSection = document.getElementById('mainSection');

    closeIcon.style.display = 'none';

    listIcon.addEventListener('click', function () {
        listIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navLinks.style.display = 'block';

    });

    closeIcon.addEventListener('click', function () {
        closeIcon.style.display = 'none';
        listIcon.style.display = 'block';
        navLinks.style.display = 'none'
    });
});
