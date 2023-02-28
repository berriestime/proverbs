let json = `
[
    {
        "name": "как карта ляжет",
        "picture": "05",
        "info": "падающие карты",
        "place": "карты, которые падают"
    },
    {
        "name": "перевёрнутый глобус с крестом внизу",
        "picture": "05",
        "info": "мир перевернулся вверх тормашками",
        "place": "глобус"
    },
    {
        "name": "жениться под метлой",
        "picture": "05",
        "info": "сожительство без брака",
        "place": "целующаяся парочка под метлой"
    },
    {
        "name": "выставить метлу",
        "picture": "01",
        "info": "«развлекаться в отсутствии хозяина",
        "place": "метла"
    },
    {
        "name": "«крыть крышу сладкими пирогами»",
        "picture": "01",
        "info": "чьё-то богатство",
        "place": "пироги лежат на крыше"
    },
    {
        "name": "оставлять в гнезде одно яйцо",
        "picture": "06",
        "info": "напоминает о необходимости оставлять что-то про запас ",
        "place": "Яйцо в корзине под навесом"
    },
    {
        "name": "накидывать голубой плащ",
        "picture": "10",
        "info": "супруга изменяет мужу",
        "place": "смыслы, «зашифрованные» в фигуре женщины в красном платье, накидывающей на мужчину голубой плащ (в центре композиции), невозможно распознать без знания цветовой символики. В 1559 году, когда создавалось это произведение, красный считался цветом греха, а голубой часто означал обман или глупость. Так что это не просто заботливая супруга накрывает накидкой своего благоверного, она изменяет ему."
    },
    {
        "name": "бежать, будто задница горит",
        "picture": "02",
        "info": "бежать, будто задница горит",
        "place": "человек бежит с горящим задом"
    },
    {
        "name": "кто глотает огонь, испражняется искрами",
        "picture": "02",
        "info": "не удивляйтесь результату, когда решаетесь на опасное предприятие",
        "place": "человек бежит с горящим задом"
    },
    {
        "name": "если открыты ворота, свиньи бегут в хлеба",
        "picture": "02",
        "info": "непредусмотрительность оборачивается бедой",
        "place": "человек бежит за свиньями"
    },
    {
        "name": "зерна меньше — свинья толще",
        "picture": "02",
        "info": "если у кого-то убавляется, то у кого-то прибавляется",
        "place": "свиньи"
    },
    {
        "name": "иметь зубную боль за ушами",
        "picture": "06",
        "info": "симуляция",
        "place": "человек в повязке"
    },
    {
        "name": "Выстрелить вторым болтом, чтобы поймать первый",
        "picture": "02",
        "info": "повторяет глупое действие",
        "place": "арбалетчик, выстреливший дважды "
    },
    {
        "name": "расстрелять все стрелы",
        "picture": "02",
        "info": "расходует все запасы",
        "place": "арбалетчик"
    },
    {
        "name": "бреть дурака без мыла",
        "picture": "06",
        "info": "обманывают кого-то",
        "place": "один человек бреет другого"
    },
    {
        "name": "два дурака под одним капюшоном",
        "picture": "06",
        "info": "глупость любит общество",
        "place": "двое в одном капюшоне"
    },
    {
        "name": "ветка растёт из окна",
        "picture": "06",
        "info": "значит нечто, что невозможно скрыть",
        "place": "ветка, торчащая из окна"
    },
    {
        "name": "играть у позорного столба",
        "picture": "06",
        "info": "привлекает внимание к чьим-то постыдным поступкам",
        "place": "человек, музицирующий в клетке"
    },
    {
        "name": "крыша без дранки",
        "picture": "06",
        "info": "у стен есть уши",
        "place": "дыра в крыше"
    },
    {
        "name": "вешать плащ по ветру",
        "picture": "03",
        "info": "держать нос по ветру",
        "place": "юноша на вершине башни, размахивающий плащом"
    },
    {
        "name": "пускать перья по ветру",
        "picture": "03",
        "info": "бесплодные усилия",
        "place": "старик, пускающий перья по ветру"
    },
    {
        "name": "женщина, глазеющая на аиста",
        "picture": "03",
        "info": "праздное времяпровождение",
        "place": "женщина в окне"
    },
    {
        "name": "прибить двух мух одним ударом",
        "picture": "03",
        "info": "убить двух зайцев сразу",
        "place": "человек с мухобойкой"
    },
    {
        "name": "свалиться с быка на ослиную задницу",
        "picture": "07",
        "info": "Когда у кого-то настаёт чёрный период в жизни",
        "place": "человек на осле"
    },
    {
        "name": "Вешать на себя бремя",
        "picture": "07",
        "info": "что он преувеличивает свои неприятности",
        "place": "человек в хомуте"
    },
    {
        "name": "Вытирать зад о дверь",
        "picture": "07",
        "info": "относиться к кому-то или чему-либо пренебрежительно",
        "place": "человек вытирающий зад о дверь",
        "type": "proverb"
    },
    {
        "name": "Целовать дверное кольцо",
        "picture": "07",
        "info": "быть угодливым",
        "place": "человек, целующий дверь"
    },
    {
        "name": "Рыбачить мимо сети",
        "picture": "07",
        "info": "упускает подвернувшиеся возможности",
        "place": "человек, рыбачащий мимо сети"
    },
    {
        "name": "Кидать деньги в воду",
        "picture": "07",
        "info": "тратить деньги попусту («швыряет на ветер»)",
        "place": "человек, кидающий деньги в воду"
    },
    {
        "name": "Висеть, как нужник над канавой",
        "picture": "07",
        "info": "нечто само собой разумеющееся.",
        "place": "человек в туалете на стене"
    },
    {
        "name": "Не волнуйся, что чей-то дом горит, пока кто-то может согреться",
        "picture": "03",
        "info": "то есть, хватайся за любую возможность, не переживая о последствиях для других",
        "place": "Тот, кто греется у костра"
    },
    {
        "name": "не инжир из коня валится",
        "picture": "04",
        "info": "не стоит обманываться первым впечатлением.",
        "place": "человек который бредет за конем"
    },
    {
        "name": "когда слепой ведёт слепого, оба упадут в яму",
        "picture": "04",
        "info": "нет смысла следовать за невеждой",
        "place": "двое идут на горизонте"
    },
    {
        "name": "легко идёт по ветру",
        "picture": "04",
        "info": "то есть пользуется благоприятными обстоятельствами",
        "place": "моряк в лодке"
    },
    {
        "name": "держать глаз на парусе",
        "picture": "04",
        "info": "Находится начеку",
        "place": "моряк в лодке"
    },
    {
        "name": "гадить на виселицу",
        "picture": "04",
        "info": "показывает что человеку не страшны никакие последствия его поступков",
        "place": "практически на линии горизонта человек гадит на виселицу"
    },
    {
        "name": "Пусть гуси будут гусями, если я не могу их содержать.",
        "picture": "04",
        "info": "не заботься о том, что тебя не касается или «не суй нос, куда не просят",
        "place": "мужчина смотрит на гусей"
    },
    {
        "name": "Кто знает, почему гуси босые?",
        "picture": "04",
        "info": "есть у всего есть причина, хоть и не всегда явная",
        "place": "гуси"
    },
    {
        "name": "плыть против течения",
        "picture": "08",
        "info": "с трудом сопротивляеться общему мнению.",
        "place": "Фигура, плывущая против течения"
    },
    {
        "name": "держать угря за хвост",
        "picture": "08",
        "info": "справляеться со сложной задачей",
        "place": "Рыбак «держит угря за хвост»"
    },
    {
        "name": "привязать дьявола к подушке",
        "picture": "13",
        "info": "олицетворяет упорство, которое преодолеет всё",
        "place": "женщина привязывает дьявола к подушке "
    }
]`;

let proverbs = JSON.parse(json);

let conctraction = document.querySelector(".composition__body");

conctraction.addEventListener("click", (event) => {
  if (event.target.classList.contains("composition__image")) {
    let urlNumber = event.target.parentNode.id;
    console.log(urlNumber); // получаем номер

    let proverbsFragment = [];
    for (let proverb of proverbs) {
      if (proverb.picture == urlNumber) {
        proverbsFragment.push(proverb);
        //console.log(proverb);
      }
    }
    console.log(proverbsFragment); // получаем массив из соответствующих фрагменту пословиц по номеру

    let proberbsName = proverbsFragment.map((a) => a.name);
    console.log(proberbsName); // массив из имен этих пословиц
    console.log(proberbsName[2]);

    let proberbsInfo = proverbsFragment.map((a) => a.info);
    console.log(proberbsInfo); //  массив из инфо этих пословиц

    // рисуем окно------------------------

    let parentNode = document.createElement("div");
    parentNode.classList.add("consult__form");

    let titleNode = document.createElement("div");
    titleNode.classList.add("consult__text");
    titleNode.textContent = "здесь скрыты пословицы:";

    let imageNode = document.createElement("div");
    imageNode.classList.add("consult__image");

    let fragmentNode = document.createElement("img");
    fragmentNode.src = `./assets/images/${urlNumber}.gif`;

    imageNode.append(fragmentNode);

    let closeNode = document.createElement("a");
    closeNode.classList.add("close-popup");
    closeNode.textContent = `X`;

    let rowNode = document.createElement("div");
    rowNode.classList.add("questions");

    for (let i = 0; i < proverbsFragment.length; i++) {
      let detailsNode = document.createElement("details");
      detailsNode.classList.add("questions__item");

      let summaryNode = document.createElement("summary");
      summaryNode.textContent = `${proberbsName[i]}`;

      let backNode = document.createElement("p");
      backNode.textContent = `${proberbsInfo[i]}`;

      detailsNode.append(summaryNode);
      detailsNode.append(backNode);

      rowNode.append(detailsNode);
    }

    parentNode.append(titleNode);
    parentNode.append(imageNode);

    parentNode.append(rowNode);
    parentNode.append(closeNode);

    let popup = document.querySelector(".consult");

    console.log(popup);
    popup = popup.append(parentNode);

    console.log(popup);
    document.body.classList.add("_lock");

    closeNode.addEventListener("click", (event) => {
      console.log(event.target);
      let closePopup = event.target.parentNode;
      closePopup.style = "display: none";
      document.body.classList.remove("_lock");
    });
  }
});
