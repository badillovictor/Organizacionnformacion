document.addEventListener('DOMContentLoaded', function() {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    div2.style.visibility = 'hidden';

    button1.addEventListener('click', function() {
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'visible';
    });

    button2.addEventListener('click', function() {
        div2.style.visibility = 'hidden';
        div1.style.visibility = 'visible';
    });
});