fetch("/assets/json/pictures.json")
  .then((response) => response.json())
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

        // рисуем окно------------------------

        const parentNode = document.createElement("div");
        parentNode.classList.add("modal__form");

        const titleNode = document.createElement("div");
        titleNode.classList.add("modal__text");
        titleNode.textContent = "здесь скрыты пословицы:";

        const imageNode = document.createElement("div");
        imageNode.classList.add("modal__image");

        const fragmentNode = document.createElement("img");
        fragmentNode.src = `./assets/images/${urlNumber}.jpg`;

        imageNode.append(fragmentNode);

        const closeNode = document.createElement("a");
        closeNode.classList.add("close-popup");
        closeNode.textContent = `X`;

        const rowNode = document.createElement("div");
        rowNode.classList.add("modal__questions");

        for (let i = 0; i < proverbsFragment.length; i++) {
          const detailsNode = document.createElement("details");
          detailsNode.classList.add("modal__questions-item");

          const summaryNode = document.createElement("summary");
          summaryNode.textContent = `${proberbsName[i]}`;

          const backNode = document.createElement("p");
          backNode.textContent = `Значение: "${proberbsInfo[i]}"`;

          const backPlace = document.createElement("p");
          backPlace.textContent = `Где искать: "${proberbsPlace[i]}"`;

          detailsNode.append(summaryNode);
          detailsNode.append(backNode);
          detailsNode.append(backPlace);

          rowNode.append(detailsNode);
        }

        parentNode.append(titleNode);
        parentNode.append(imageNode);

        parentNode.append(rowNode);
        parentNode.append(closeNode);

        let popup = document.querySelector(".modal");

        console.log(popup);
        popup.append(parentNode);

        console.log(popup);
        document.body.classList.add("_lock");

        closeNode.addEventListener("click", (event) => {
          console.log(event.target);
          const closePopup = event.target.parentNode;
          closePopup.style = "display: none";
          document.body.classList.remove("_lock");
        });
      }
    });
  });
