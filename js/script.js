'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    // *    1. Начало.
    // *    2. Получаем все элемент изображений с описанием.
    // *    3. Для каждого изображения(проверяем есть ли такие изображения):
    // *        3.1. Добавляем обработчик наведения курсора на изображение:
    // *            3.1.1. Да:
    // *                3.1.1.1. показываем текст при наведении.
    // *            3.1.2. Нет: продолжаем.
    // *        3.2. Добавляем обработчик курсора уходит с изображения:
    // *            3.3.1. Да:
    // *                3.3.1.1. Скрываем элемент с описанием.
    // *            3.3.2. Нет: продолжаем.
    // *    4.Конец.


    const intensiveImg = document.querySelectorAll(".info__places");

    intensiveImg.forEach((item, index) => {

        // объявляем переменную intensiveText,выбираем все элементы с классом intensive__description( описания для изображений)
            const intensiveText = document.querySelectorAll('.info__text');
        
        //Когда курсор наводится на изображение (mouseenter):
            item.addEventListener('mouseenter', () => {
        //у изображения уменьшаем видимость
              item.style.opacity = 0.5;
        //удаляем атрибут hidden и текст становится видимым
              intensiveText[index].removeAttribute('hidden');
                });
        
        //Когда курсор убираем с изображения (mouseleave):
            item.addEventListener('mouseleave', () => {
        //изображение делаем непрозрачным
                    item.style.opacity = 1;
        //добавляем атрибут hidden и тест становится видимым
              intensiveText[index].setAttribute('hidden', true);
                });
            });
        


});