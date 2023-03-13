let closeNode;

const urlJson = "./assets/json/pictures.json";

fetch(urlJson)
  .then((data) => data.json())
  .then((proverbs) => {
    const constraction = document.querySelector(".composition__body");

    constraction.addEventListener("click", (event) => {
      if (event.target.classList.contains("composition__image")) {
        const urlNumber = event.target.parentNode.id; // получаем номер фрагмента

        const proverbsFragment = [];
        for (let proverb of proverbs) {
          if (proverb.picture == urlNumber) {
            proverbsFragment.push(proverb); // получаем массив из соответствующих фрагменту пословиц по номеру
          }
        }

        const proberbsName = proverbsFragment.map((a) => a.name); // массив из имен этих пословиц

        const proberbsInfo = proverbsFragment.map((a) => a.info); //  массив из инфо этих пословиц

        const proberbsPlace = proverbsFragment.map((a) => a.place); //  массив из place этих пословиц

        // рисуем окно--------------------------

        printPopup(
          urlNumber,
          proberbsName,
          proberbsInfo,
          proberbsPlace,
          proverbsFragment
        );

        document.body.classList.add("_lock");

        // функция удаления модального окна----

        closePopup();
      }
    });
  });

// рисуем окно--------------------------

function printPopup(src, name, info, place, array) {
  const parentNode = document.createElement("div");
  parentNode.classList.add("modal__form");

  const titleNode = document.createElement("div");
  titleNode.classList.add("modal__text");
  titleNode.textContent = "здесь скрыты пословицы:";

  const imageNode = document.createElement("div");
  imageNode.classList.add("modal__image");

  const fragmentNode = document.createElement("img");
  fragmentNode.src = `./assets/images/${src}.jpg`;

  imageNode.append(fragmentNode);

  closeNode = document.createElement("a");
  closeNode.classList.add("close-popup");
  closeNode.textContent = `X`;

  const columnNode = document.createElement("div");
  columnNode.classList.add("modal__column-questions");

  const rowNode = document.createElement("div");
  rowNode.classList.add("modal__questions");

  for (let i = 0; i < array.length; i++) {
    const detailsNode = document.createElement("details");
    detailsNode.classList.add("modal__questions-item");

    const summaryNode = document.createElement("summary");
    summaryNode.textContent = `${name[i]}`;

    const backNode = document.createElement("p");
    backNode.textContent = `Значение: "${info[i]}"`;

    const backPlace = document.createElement("p");
    backPlace.textContent = `Где искать: "${place[i]}"`;

    detailsNode.append(summaryNode);
    detailsNode.append(backNode);
    detailsNode.append(backPlace);

    rowNode.append(detailsNode);
  }

  columnNode.append(rowNode);

  parentNode.append(closeNode);
  parentNode.append(titleNode);
  parentNode.append(imageNode);

  parentNode.append(columnNode);

  const popup = document.querySelector(".modal");
  popup.append(parentNode);
}

// функция удаления модального окна----

function closePopup() {
  closeNode.addEventListener("click", (event) => {
    console.log(event.target);
    const closePopup = event.target.parentNode.parentNode;
    console.log(event.target.parentNode.parentNode);
    document.body.classList.remove("_lock");

    while (closePopup.firstChild) {
      closePopup.removeChild(closePopup.firstChild);
    }
  });
}
