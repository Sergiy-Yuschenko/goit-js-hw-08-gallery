const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];

//Знаходимо потрібний елемент-список (ul) на який треба почепити його елементи створені скріптом
const imagesGaleryListEl = document.querySelector('ul.js-gallery');

//Знаходимо елемент бекдропу модального вікна
const modalWindowEl = document.querySelector('.js-lightbox');

//Знаходимо елемент зображення модального вікна
const modalImageEl = document.querySelector('.lightbox__image');

            /*РОЗМІТКА ГАЛЕРЕЇ*/

//Функція в яка отримує данні із масиву по конкретному зображенню, створює та повертає розмітку елемента списку
const imagesGaleryListCreate = ({preview, original,  description}) => {
    //Створюємо елемент списку "li" та додаємо йому необхідний клас
    const galeryListItemEl = document.createElement('li');
    galeryListItemEl.classList.add('gallery__item');

    //Створюємо елемент посилання "a" та додаємо йому необхідний клас s і атрибут
    const galeryListLinkEl = document.createElement('a');
    galeryListLinkEl.classList.add('gallery__link');
    galeryListLinkEl.href = original;

    //Створюємо елемент зображення "img" та додаємо йому необхідний клас s і атрибути
    const galeryListImageEl = document.createElement('img');
    galeryListImageEl.classList.add('gallery__image');
    galeryListImageEl.src = preview;
    galeryListImageEl.setAttribute('data-source', original);
    galeryListImageEl.alt = description;

    //Додаємо створений елемент зображення в середину створеного елемента посилання
    galeryListLinkEl.append(galeryListImageEl);

    //Додаємо створений елемент посилання в середину створеного елемента списку
    galeryListItemEl.append(galeryListLinkEl);
    
    //Повертаємо результат роботи функції
    return galeryListItemEl;
}

//створення масиву з розміткою елементів галереї за рахунок перебору масиву з даними
//методом месивів "map", який по кожному елементу масиву виконує функцію imagesGaleryListCreate
//та повертає масив з результатами її виконання
const listItems = galleryItems.map(imagesGaleryListCreate);

//Додаємо створеі елементи списку в знайдений елемент список "ul" за рахунок 
//функції append в яку розпилюємо масив з розміткою
imagesGaleryListEl.append(...listItems);

            /*МОДАЛЬНЕ ВІКНО*/
            
//Функція яка відкриває модальне вікно та, передає його
//елементу зображення значення url великого зображення із об'єкту dataset та
//ключа source елементу зображення, по якому відбувся клік, та передає значенню src його 
//елементу значення src зображення, по якому відбувся клік
function modalOpen(event) {
    //Гардклоуз, що спрацьовує якщо клік відбувся по галереї, але не потрапив на жлдну з картинок
    if (event.target.nodeName !== 'IMG') return;
    //блокування переходу за посиланням
    event.preventDefault();
    //відкривання модалки
    modalWindowEl.classList.add('is-open');
    //отримання url великого зображення та передача його в src елемента зображення модалки
    modalImageEl.src = event.target.dataset.source;
    //отримання значення атрибута alt та передача його в src елемента зображення модалки
    modalImageEl.alt = event.target.alt;
}

//Слухач, який при кліку на елемент-список виконує функцію modalOpen
imagesGaleryListEl.addEventListener('click', modalOpen);









