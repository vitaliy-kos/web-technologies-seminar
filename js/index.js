jQuery(document).ready(function ($) {
    "use strict";

    $('.task1').on('click','input[type=submit]', function(){
        $('.task1 .result').val(parseInt($('.task1 .input1').val()) + parseInt($('.task1 .input2').val()));
    });

    $('.task2').on('click','input[type=submit]', function(){
        alert('Привет, ' + $('.task2 .input1').val());
    });

    $('.task3').on('click','input[type=submit]', function(){
        let name = prompt('Как Вас зовут?', 'Ваше имя');
        if (name.length > 0) {
            alert('Введено имя: ' + name);
        }
    });

    $('.task4').on('click','input[type=submit]', function(){
        let name = $('.task4 .input1').val();
        if (name.length > 0) {
            alert('Введено имя: ' + name);
        }
    });

    $('.task5').on('click','input[type=submit]', function(){
        let right = confirm('Вы уверены?', 'ОК', 'Отмена');
        if (right) {
            alert('Мы рады, что Вы уверены!');
        } else {
            alert('Жаль, что Вы не уверены…');
        }
    });

    $('.task6').on('click','input[type=submit]', function(){
        let vozrast = prompt('Сколько Вам лет?');
        switch(vozrast) {
            case '18':
                alert('Вы совершеннолетний, все можно!');
                break;
            case '10':
                alert('Вам надо учить уроки!');
                break;
            case '30':
                alert('Ложитесь спать, завтра на работу');
                break;
            default:
                alert('Мы не знаем что Вам делать');
                break;
          }
    });

    $('.task7').on('click','input[type=submit]', function(){
        let array = [];
        for (let i = 0; i < 20; i++) {
            array.push(Math.floor((Math.random()*10) + 1));
        }
        $('.task7').append('<br><br><div>Исходный массив: [' + array.join(', ') + ']</div>');
        $('.task7').append('<div>Полученный массив: [' + array.sort(function(a, b) { return a - b; }).join(', ') + ']</div>');
        console.log(array);
    });

    $('.task8').on('click','input[type=submit]', function() {
        let array = ['a', 'b', 'c'];
        $('.task8').append('<br><br><div>Исходный массив: [' + array.join(', ') + ']</div>');

        array[0] = 'Home';
        array[1] = 'I bought house';
        array[2] = 'w';
        $('.task8').append('<div>Полученный массив: [' + array.join(', ') + ']</div>');
        console.log(array);
    });

    function checkFilm(film) {
        return film == 'Форсаж';
    }

    $('.task-homework1').on('click','input[type=submit]', function() {
        
        if (checkFilm(prompt('Какой у Вас любимый фильм?', 'Титаник'))) {
            alert('Вы угадали!');
        } else {
            alert('Попробуйте ещё раз!');
        }

    });
    

});
