let isRed = false;
document.querySelector('button').addEventListener('click', function () {
    if (isRed) {
        document.querySelector('.pencil').style.backgroundColor = '';
        document.querySelector('.pencil').classList.toggle('spin');
        document.querySelector('button').style.backgroundColor = '';


        isRed = false;
    } else {
        document.querySelector('.pencil').classList.add('spin');
        document.querySelector('.pencil').style.backgroundColor = 'red';
        document.querySelector('button').style.backgroundColor = 'blue';


        isRed = true;
    }
});