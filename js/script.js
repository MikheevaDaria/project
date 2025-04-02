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
    const textTitle = ["места, которые можно посетить в городе1", "'экскурсии в городе1","рестораны, которые можно посетить1","спа-комплекс1"];

    if(intensiveImg.length){
        intensiveImg.forEach((item, index) => {

            // объявляем переменную intensiveText,выбираем все элементы с классом intensive__description( описания для изображений)
                const intensiveText = document.querySelectorAll('.info__text');
            
            //Когда курсор наводится на изображение (mouseenter):
                item.addEventListener('mouseenter', () => {
            //у изображения уменьшаем видимость
                  item.style.opacity = 1;
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
    } else {
        console.log('карточек нет')
    }
 
        

// =======================================================================
    // Дополнительные скрипты
    // Scroll up
    // Обратите внимание, что в коде выше уже есть слушатель скролла (на следующей практике уберем повторение)

    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollUpButton) {
        const windowHeight = document.documentElement.clientHeight; // Определяем высоту видимой части окна браузера

        // Показать кнопку при прокрутке вниз на высоту экрана
        document.addEventListener('scroll', () => {
            let scrollPageY = this.scrollY;

            if (scrollPageY >= windowHeight) {
                scrollUpButton.classList.add('scroll-up--show');
            } else {
                scrollUpButton.classList.remove('scroll-up--show');
            }
        });

        // Плавная прокрутка наверх при нажатии на кнопку
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }

    const headerMenu = document.querySelector('.header__menu');
    if (headerMenu){
            const headerList = headerMenu.querySelector('.menu__list');
            const menuData = {
                link1: {
                    link: 'booking.html',
                    title: 'БРОНИРОВАНИЕ',
                },
                link2: {
                    link: '#rooms',
                    title: 'НОМЕРА И ЦЕНЫ',
                },
                link3: {
                    link: '#info0',
                    title: 'СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ',
                },
                link4: {
                    link: '#footer',
                    title: 'КОНТАКТЫ',
                },
                link5: {
                    link: 'registration.html',
                    title: 'ВХОД И РЕГИСТРАЦИЯ',
                }
            }
            const createLink = (UrlLink, title) =>{
                const link = `
                <li class="menu__item menu__item">
                                    <a class="menu__link" href="${UrlLink}">${title}</a>
                </li>
                `;
                return link;
            }
            for (const linkItem in menuData) {
                const link = menuData[linkItem];
                const linkIndex = createLink(link.link, link.title);
                headerList.insertAdjacentHTML('beforeend', linkIndex);
    
            }
    }    

    const cardsContainer = document.querySelector('#info0');
    if (cardsContainer) {
        const cardList = cardsContainer.querySelector('.info__wrap');

        // Пример URL для получения данных с сервера
        const apiUrl = 'data.json';

        // Функция для создания карточки
        const createCard = (linkUrl, iconUrl, iconAlt, title, description) => {

            // Шаблонные строки и подстановки
            const card = `
     <div class="info__places">
                <img class="info__icon" src="images/place.jpg" alt="фото мест" width="400" height="350">
                <a class="info__link" href="${linkUrl}">места, которые
                    можно посетить в городе</a>
                <div class="info__text" hidden>
                    Сбросьте якорь в рутине!
                    Забудьте о банальных туристических маршрутах и отправляйтесь в увлекательное путшествие по самым душевным и колоритным уголкам города!
                    Создайте свою уникальную историю города!
                </div>
            </div>


                <a class="card__item" href="${linkUrl}">
                    <span class="card__icon">
                        <img src="${iconUrl}" alt="${iconAlt}">
                    </span>
                    <h3 class="card__title">${title}</h3>
                    <p class="card__description">${description}</p>
                </a>
            `;

            return card;
        }

        // Загрузка данных с сервера
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data)); // Тип полученных данных

                // for (const item in data) {
                //     const card = data[item];

                //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
                //     cardList.insertAdjacentHTML('beforeend', cardElement);
                // }

                data.forEach(item => {
                    const cardElement = createCard(item.link, item.icon, item.iconAlt, item.title, item.description);
                    cardList.insertAdjacentHTML('beforeend', cardElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }

});