fetch("./assets/json/pictures.json")
  .then((response) => response.json())
  .then((proverbJson) => {
    const proverbText = JSON.stringify(proverbJson);
    const proverbObject = JSON.parse(proverbText);
    const proverbsCount = proverbObject.length;
    const proverbNumber = getRandom(proverbsCount);
    let proverb = proverbObject[proverbNumber].name;
    let proverbImg = proverbObject[proverbNumber].picture;
    let proverbInfo = proverbObject[proverbNumber].info;
    let proverbPlace = proverbObject[proverbNumber].place;
    let arrVerb = proverb.split(" ");
    const proverbButtons = document.querySelector(".tasks__list");
    const taskImg = document.querySelector(".tasks__img");
    const modalWindow = document.getElementById("openModal");
    const taskHeader = document.querySelector(`.picturеНeader`);
    const explanationsInfo = document.querySelector(`.explanations`);
    taskImg.innerHTML = `<img src="./assets/images/${proverbImg}.jpg" class="gif">`;
    explanationsInfo.innerHTML = ` <p class="pictureText"> где искать: ${proverbPlace} </p><p class="pictureText"> пословица означает "${proverbInfo}" </p>`;

    let arrVerbMix = [].concat(arrVerb);
    // перемешиваю слова и рисую их
    shuffle(arrVerbMix);
    drawVerbs(arrVerbMix);

    // функция для нахождения слуцчайной поговорки
    function getRandom(n) {
      return Math.round(Math.random() * n);
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    function drawVerbs(array) {
      let proverbVerbs = "";
      array.forEach(function (entry) {
        proverbVerbs += `<li class="tasks__item">${entry}</li>`;
      });
      proverbButtons.innerHTML = proverbVerbs;
    }

    const tasksListElement = document.querySelector(`.tasks__list`);
    const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);
    const explanations = document.querySelector(`.explanations`);
    const middle = document.querySelector(`.middle`);

    // Перебираем все элементы списка и присваиваем нужное значение
    for (const task of taskElements) {
      task.draggable = true;
    }

    tasksListElement.addEventListener(`dragstart`, (evt) => {
      evt.target.classList.add(`selected`);
    });

    tasksListElement.addEventListener(`dragend`, (evt) => {
      evt.target.classList.remove(`selected`);
      let i = 0;
      let rez = false;
      let arrNew = [];
      tasksListElement.childNodes.forEach(function (entry) {
        if (entry.outerText != undefined) {
          arrNew.push(entry.outerText);
        }
      });
      for (let i = 0; i < arrNew.length; i++) {
        if (arrVerb[i] == arrNew[i]) {
          rez = true;
        } else {
          console.log(arrVerb[i], "!=", arrNew[i]);
          rez = false;
          break;
        }
      }
      if (rez == true) {
        drawExplanations();
      }
    });
    //  функция то, что происходит если мы правильно сложили пословицу
    function drawExplanations() {
      explanations.style = "display:block";
      middle.style = "display:block";
      taskHeader.childNodes[0].textContent = "Вы угадали пословицу!";
    }

    tasksListElement.addEventListener(`dragover`, (evt) => {
      // Разрешаем сбрасывать элементы в эту область
      evt.preventDefault();

      // Находим перемещаемый элемент
      const activeElement = tasksListElement.querySelector(`.selected`);
      // Находим элемент, над которым в данный момент находится курсор
      const currentElement = evt.target;
      // Проверяем, что событие сработало:
      // 1. не на том элементе, который мы перемещаем,
      // 2. именно на элементе списка
      const isMoveable =
        activeElement !== currentElement &&
        currentElement.classList.contains(`tasks__item`);

      // Если нет, прерываем выполнение функции
      if (!isMoveable) {
        return;
      }

      // Находим элемент, перед которым будем вставлять
      const nextElement =
        currentElement === activeElement.nextElementSibling
          ? currentElement.nextElementSibling
          : currentElement;

      // Вставляем activeElement перед nextElement
      tasksListElement.insertBefore(activeElement, nextElement);
    });

    const getNextElement = (cursorPosition, currentElement) => {
      // Получаем объект с размерами и координатами
      const currentElementCoord = currentElement.getBoundingClientRect();
      // Находим вертикальную координату центра текущего элемента
      const currentElementCenter =
        currentElementCoord.y + currentElementCoord.height / 2;

      // Если курсор выше центра элемента, возвращаем текущий элемент
      // В ином случае — следующий DOM-элемент
      const nextElement =
        cursorPosition < currentElementCenter
          ? currentElement
          : currentElement.nextElementSibling;

      return nextElement;
    };

    tasksListElement.addEventListener(`dragover`, (evt) => {
      evt.preventDefault();

      const activeElement = tasksListElement.querySelector(`.selected`);
      const currentElement = evt.target;
      const isMoveable =
        activeElement !== currentElement &&
        currentElement.classList.contains(`tasks__item`);

      if (!isMoveable) {
        return;
      }

      // evt.clientY — вертикальная координата курсора в момент,
      // когда сработало событие
      const nextElement = getNextElement(evt.clientX, currentElement);

      // Проверяем, нужно ли менять элементы местами
      if (
        (nextElement && activeElement === nextElement.previousElementSibling) ||
        activeElement === nextElement
      ) {
        // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
        return;
      }

      tasksListElement.insertBefore(activeElement, nextElement);
    });
  });
