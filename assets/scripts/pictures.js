fetch('./assets/json/pictures.json')
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })




// let proverbJson = [
//     {
//         "name": "как карта ляжет",
//         "picture": "05",
//         "info": "падающие карты",
//         "place": "карты, которые падают"
//     },
//     {
//         "name": "перевёрнутый глобус с крестом внизу",
//         "picture": "05",
//         "info": "мир перевернулся вверх тормашками",
//         "place": "глобус"
//     },
//     {
//         "name": "жениться под метлой",
//         "picture": "05",
//         "info": "сожительство без брака",
//         "place": "целующаяся парочка под метлой",

//     },
//     {
//         "name": "выставить метлу",
//         "picture": "01",
//         "info": "«развлекаться в отсутствии хозяина",
//         "place": "метла"
//     },
//     {
//         "name": "«крыть крышу сладкими пирогами»",
//         "picture": "01",
//         "info": "чьё-то богатство",
//         "place": "пироги лежат на крыше"
//     },
//     {
//         "name": "оставлять в гнезде одно яйцо",
//         "picture": "06.jpg",
//         "info": "напоминает о необходимости оставлять что-то про запас ",
//         "place": "Яйцо в корзине под навесом"
//     },
//     {
//         "name": "накидывать голубой плащ",
//         "picture": "10",
//         "info": "супруга изменяет мужу",
//         "place": "смыслы, «зашифрованные» в фигуре женщины в красном платье, накидывающей на мужчину голубой плащ (в центре композиции), невозможно распознать без знания цветовой символики. В 1559 году, когда создавалось это произведение, красный считался цветом греха, а голубой часто означал обман или глупость. Так что это не просто заботливая супруга накрывает накидкой своего благоверного, она изменяет ему."
//     },
//     {
//         "name": "бежать, будто задница горит",
//         "picture": "02",
//         "info": "бежать, будто задница горит",
//         "place": "человек бежит с горящим задом"
//     },
//     {
//         "name": "кто глотает огонь, испражняется искрами",
//         "picture": "02",
//         "info": "не удивляйтесь результату, когда решаетесь на опасное предприятие",
//         "place": "человек бежит с горящим задом"
//     },
//     {
//         "name": "если открыты ворота, свиньи бегут в хлеба",
//         "picture": "02",
//         "info": "непредусмотрительность оборачивается бедой",
//         "place": "человек бежит за свиньями"
//     },
//     {
//         "name": "зерна меньше — свинья толще",
//         "picture": "02",
//         "info": "если у кого-то убавляется, то у кого-то прибавляется",
//         "place": "свиньи"
//     },
//     {
//         "name": "иметь зубную боль за ушами",
//         "picture": "06",
//         "info": "симуляция",
//         "place": "человек в повязке"
//     },
//     {
//         "name": "Выстрелить вторым болтом, чтобы поймать первый",
//         "picture": "02",
//         "info": "повторяет глупое действие",
//         "place": "арбалетчик, выстреливший дважды "
//     },
//     {
//         "name": "расстрелять все стрелы",
//         "picture": "02",
//         "info": "расходует все запасы",
//         "place": "арбалетчик"
//     },
//     {
//         "name": "бреть дурака без мыла",
//         "picture": "06",
//         "info": "обманывают кого-то",
//         "place": "один человек бреет другого"
//     },
//     {
//         "name": "два дурака под одним капюшоном",
//         "picture": "06",
//         "info": "глупость любит общество",
//         "place": "двое в одном капюшоне"
//     },
//     {
//         "name": "ветка растёт из окна",
//         "picture": "06",
//         "info": "значит нечто, что невозможно скрыть",
//         "place": "ветка, торчащая из окна"
//     },
//     {
//         "name": "играть у позорного столба",
//         "picture": "06",
//         "info": "привлекает внимание к чьим-то постыдным поступкам",
//         "place": "человек, музицирующий в клетке"
//     },
//     {
//         "name": "крыша без дранки",
//         "picture": "06",
//         "info": "у стен есть уши",
//         "place": "дыра в крыше"
//     },
//     {
//         "name": "вешать плащ по ветру",
//         "picture": "03",
//         "info": "держать нос по ветру",
//         "place": "юноша на вершине башни, размахивающий плащом"
//     },
//     {
//         "name": "пускать перья по ветру",
//         "picture": "03",
//         "info": "бесплодные усилия",
//         "place": "старик, пускающий перья по ветру"
//     },
//     {
//         "name": "женщина, глазеющая на аиста",
//         "picture": "03",
//         "info": "праздное времяпровождение",
//         "place": "женщина в окне"
//     },
//     {
//         "name": "прибить двух мух одним ударом",
//         "picture": "03",
//         "info": "убить двух зайцев сразу",
//         "place": "человек с мухобойкой"
//     },
//     {
//         "name": "свалиться с быка на ослиную задницу",
//         "picture": "07",
//         "info": "Когда у кого-то настаёт чёрный период в жизни",
//         "place": "человек на осле"
//     },
//     {
//         "name": "Вешать на себя бремя",
//         "picture": "07",
//         "info": "что он преувеличивает свои неприятности",
//         "place": "человек в хомуте"
//     },
//     {
//         "name": "Вытирать зад о дверь",
//         "picture": "07",
//         "info": "относиться к кому-то или чему-либо пренебрежительно",
//         "place": "человек вытирающий зад о дверь",
//         "type": "proverb"
//     },
//     {
//         "name": "Целовать дверное кольцо",
//         "picture": "07",
//         "info": "быть угодливым",
//         "place": "человек, целующий дверь"
//     },
//     {
//         "name": "Рыбачить мимо сети",
//         "picture": "07",
//         "info": "упускает подвернувшиеся возможности",
//         "place": "человек, рыбачащий мимо сети"
//     },
//     {
//         "name": "Кидать деньги в воду",
//         "picture": "07",
//         "info": "тратить деньги попусту («швыряет на ветер»)",
//         "place": "человек, кидающий деньги в воду"
//     },
//     {
//         "name": "Висеть, как нужник над канавой",
//         "picture": "07",
//         "info": "нечто само собой разумеющееся.",
//         "place": "человек в туалете на стене"
//     },
//     {
//         "name": "Не волнуйся, что чей-то дом горит, пока кто-то может согреться",
//         "picture": "03",
//         "info": "то есть, хватайся за любую возможность, не переживая о последствиях для других",
//         "place": "Тот, кто греется у костра"
//     },
//     {
//         "name": "не инжир из коня валится",
//         "picture": "04",
//         "info": "не стоит обманываться первым впечатлением.",
//         "place": "человек который бредет за конем"
//     },
//     {
//         "name": "когда слепой ведёт слепого, оба упадут в яму",
//         "picture": "04",
//         "info": "нет смысла следовать за невеждой",
//         "place": "двое идут на горизонте"
//     },
//     {
//         "name": "легко идёт по ветру",
//         "picture": "04",
//         "info": "то есть пользуется благоприятными обстоятельствами",
//         "place": "моряк в лодке",
//     },
//     {
//         "name": "держать глаз на парусе",
//         "picture": "04",
//         "info": "Находится начеку",
//         "place": "моряк в лодке"
//     },
//     {
//         "name": "гадить на виселицу",
//         "picture": "04",
//         "info": "показывает что человеку не страшны никакие последствия его поступков",
//         "place": "практически на линии горизонта человек гадит на виселицу"
//     },
//     {
//         "name": "Пусть гуси будут гусями, если я не могу их содержать.",
//         "picture": "04",
//         "info": "не заботься о том, что тебя не касается или «не суй нос, куда не просят",
//         "place": "мужчина смотрит на гусей",
//     },
//     {
//         "name": "Кто знает, почему гуси босые?",
//         "picture": "04",
//         "info": "есть у всего есть причина, хоть и не всегда явная",
//         "place": "гуси"
//     },
//     {
//         "name": "плыть против течения",
//         "picture": "08",
//         "info": "с трудом сопротивляеться общему мнению.",
//         "place": "Фигура, плывущая против течения"
//     },
//     {
//         "name": "держать угря за хвост",
//         "picture": "08",
//         "info": "справляеться со сложной задачей",
//         "place": "Рыбак «держит угря за хвост»"
//     },
//     {
//         "name": "привязать дьявола к подушке",
//         "picture": "13",
//         "info": "олицетворяет упорство, которое преодолеет всё",
//         "place": "женщина привязывает дьявола к подушке "
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     },
//     {
//         "name": "",
//         "picture": "",
//         "info": "",
//         "place": ""
//     }
// ]


// const proverbText = JSON.stringify(proverbJson);
// const proverbObject = JSON.parse(proverbText);
// const proverbsCount = proverbObject.length;
// const proverbNumber = getRandom(proverbsCount);
// let proverb = proverbObject[proverbNumber].name;
// let proverbImg = proverbObject[proverbNumber].picture;
// let proverbInfo = proverbObject[proverbNumber].info;
// let proverbPlace = proverbObject[proverbNumber].place;
// let arrVerb = proverb.split(" ");
// const proverbButtons = document.querySelector('.tasks__list');
// const taskImg = document.querySelector('.tasks__img');
// const modalWindow = document.getElementById("openModal")
// const taskHeader = document.querySelector(`.picturеНeader`);
// const explanationsInfo = document.querySelector(`.explanations`);

// console.log(proverbImg);
// taskImg.innerHTML = `<img src="./assets/images/${proverbImg}.gif" class="gif">`;
// explanationsInfo.innerHTML = ` <p class="pictureText"> где искать: ${proverbPlace} </p><p class="pictureText"> пословица означает "${proverbInfo}" </p>`;

// let arrVerbMix = [].concat(arrVerb);
// // функция для нахождения слуцчайной поговорки
// function getRandom(n) {
//     return Math.round(Math.random() * n);
// }
// // перемешиваю слова и рисую их
// shuffle(arrVerbMix);
// drawVerbs(arrVerbMix);

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// function drawVerbs(array) {
//     let proverbVerbs = "";
//     array.forEach(function (entry) {
//         proverbVerbs += ` <li class="tasks__item">${entry}</li>`;
//     })
//     proverbButtons.innerHTML = proverbVerbs;

// }

// const tasksListElement = document.querySelector(`.tasks__list`);
// const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);
// const explanations = document.querySelector(`.explanations`);
// const middle = document.querySelector(`.middle`);


// // Перебираем все элементы списка и присваиваем нужное значение
// for (const task of taskElements) {
//     task.draggable = true;
// }

// tasksListElement.addEventListener(`dragstart`, (evt) => {
//     evt.target.classList.add(`selected`);
// })

// tasksListElement.addEventListener(`dragend`, (evt) => {
//     evt.target.classList.remove(`selected`);
//     let i = 0;
//     let rez = false;
//     let arrNew = [];
//     tasksListElement.childNodes.forEach(function (entry) {
//         if (entry.outerText != undefined) {
//             arrNew.push(entry.outerText);
//         }
//     })
//     for (let i = 0; i < arrNew.length; i++) {
//         if (arrVerb[i] == arrNew[i]) {
//             rez = true;
//         }
//         else {
//             console.log(arrVerb[i], "!=", arrNew[i]);
//             rez = false;
//             break;
//         }
//     }
//     if (rez == true) { drawExplanations() }
// });
// //  функция то, что происходит если мы правильно сложили пословицу
// function drawExplanations() {
//     explanations.style = "display:block";
//     middle.style = "display:block";
//     taskHeader.childNodes[0].textContent = "Вы угадали пословицу!";
// }

// tasksListElement.addEventListener(`dragover`, (evt) => {
//     // Разрешаем сбрасывать элементы в эту область
//     evt.preventDefault();

//     // Находим перемещаемый элемент
//     const activeElement = tasksListElement.querySelector(`.selected`);
//     // Находим элемент, над которым в данный момент находится курсор
//     const currentElement = evt.target;
//     // Проверяем, что событие сработало:
//     // 1. не на том элементе, который мы перемещаем,
//     // 2. именно на элементе списка
//     const isMoveable = activeElement !== currentElement &&
//         currentElement.classList.contains(`tasks__item`);

//     // Если нет, прерываем выполнение функции
//     if (!isMoveable) {
//         return;
//     }

//     // Находим элемент, перед которым будем вставлять
//     const nextElement = (currentElement === activeElement.nextElementSibling) ?
//         currentElement.nextElementSibling :
//         currentElement;

//     // Вставляем activeElement перед nextElement
//     tasksListElement.insertBefore(activeElement, nextElement);



// });

// const getNextElement = (cursorPosition, currentElement) => {
//     // Получаем объект с размерами и координатами
//     const currentElementCoord = currentElement.getBoundingClientRect();
//     // Находим вертикальную координату центра текущего элемента
//     const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

//     // Если курсор выше центра элемента, возвращаем текущий элемент
//     // В ином случае — следующий DOM-элемент
//     const nextElement = (cursorPosition < currentElementCenter) ?
//         currentElement :
//         currentElement.nextElementSibling;

//     return nextElement;
// };


// tasksListElement.addEventListener(`dragover`, (evt) => {
//     evt.preventDefault();

//     const activeElement = tasksListElement.querySelector(`.selected`);
//     const currentElement = evt.target;
//     const isMoveable = activeElement !== currentElement &&
//         currentElement.classList.contains(`tasks__item`);

//     if (!isMoveable) {
//         return;
//     }

//     // evt.clientY — вертикальная координата курсора в момент,
//     // когда сработало событие
//     const nextElement = getNextElement(evt.clientX, currentElement);

//     // Проверяем, нужно ли менять элементы местами
//     if (
//         nextElement &&
//         activeElement === nextElement.previousElementSibling ||
//         activeElement === nextElement
//     ) {
//         // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
//         return;
//     }

//     tasksListElement.insertBefore(activeElement, nextElement);
// });