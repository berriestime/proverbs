// let json;
// json.src = `../../assets/json/pictures.json`;
let json = `
[
    {
        "name": "Как карта ляжет",
        "picture": "05",
        "info": "падающие карты",
        "place": "карты, которые падают"
    },
    {
        "name": "Перевёрнутый глобус с крестом внизу",
        "picture": "05",
        "info": "мир перевернулся вверх тормашками",
        "place": "глобус"
    },
    {
        "name": "Жениться под метлой",
        "picture": "05",
        "info": "сожительство без брака",
        "place": "целующаяся парочка под метлой"
    },
    {
        "name": "Выставить метлу",
        "picture": "01",
        "info": "развлекаться в отсутствии хозяина",
        "place": "метла"
    },
    {
        "name": "Крыть крышу сладкими пирогами",
        "picture": "01",
        "info": "чьё-то богатство",
        "place": "пироги лежат на крыше"
    },
    {
        "name": "Оставлять в гнезде одно яйцо",
        "picture": "06",
        "info": "напоминает о необходимости оставлять что-то про запас ",
        "place": "Яйцо в корзине под навесом"
    },
    {
        "name": "Накидывать голубой плащ",
        "picture": "10",
        "info": "супруга изменяет мужу",
        "place": "смыслы, «зашифрованные» в фигуре женщины в красном платье, накидывающей на мужчину голубой плащ (в центре композиции), невозможно распознать без знания цветовой символики. В 1559 году, когда создавалось это произведение, красный считался цветом греха, а голубой часто означал обман или глупость. Так что это не просто заботливая супруга накрывает накидкой своего благоверного, она изменяет ему."
    },
    {
        "name": "Бежать, будто задница горит",
        "picture": "02",
        "info": "бежать, будто задница горит",
        "place": "человек бежит с горящим задом"
    },
    {
        "name": "Кто глотает огонь, испражняется искрами",
        "picture": "02",
        "info": "не удивляйтесь результату, когда решаетесь на опасное предприятие",
        "place": "человек бежит с горящим задом"
    },
    {
        "name": "Если открыты ворота, свиньи бегут в хлеба",
        "picture": "02",
        "info": "непредусмотрительность оборачивается бедой",
        "place": "человек бежит за свиньями"
    },
    {
        "name": "Зерна меньше — свинья толще",
        "picture": "02",
        "info": "если у кого-то убавляется, то у кого-то прибавляется",
        "place": "свиньи"
    },
    {
        "name": "Иметь зубную боль за ушами",
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
        "name": "Расстрелять все стрелы",
        "picture": "02",
        "info": "расходует все запасы",
        "place": "арбалетчик"
    },
    {
        "name": "Брить дурака без мыла",
        "picture": "06",
        "info": "обманывают кого-то",
        "place": "один человек бреет другого"
    },
    {
        "name": "Два дурака под одним капюшоном",
        "picture": "06",
        "info": "глупость любит общество",
        "place": "двое в одном капюшоне"
    },
    {
        "name": "Ветка растёт из окна",
        "picture": "06",
        "info": "значит нечто, что невозможно скрыть",
        "place": "ветка, торчащая из окна"
    },
    {
        "name": "Играть у позорного столба",
        "picture": "06",
        "info": "привлекает внимание к чьим-то постыдным поступкам",
        "place": "человек, музицирующий в клетке"
    },
    {
        "name": "Крыша без дранки",
        "picture": "06",
        "info": "у стен есть уши",
        "place": "дыра в крыше"
    },
    {
        "name": "Вешать плащ по ветру",
        "picture": "03",
        "info": "держать нос по ветру",
        "place": "юноша на вершине башни, размахивающий плащом"
    },
    {
        "name": "Пускать перья по ветру",
        "picture": "03",
        "info": "бесплодные усилия",
        "place": "старик, пускающий перья по ветру"
    },
    {
        "name": "Женщина, глазеющая на аиста",
        "picture": "03",
        "info": "праздное времяпровождение",
        "place": "женщина в окне"
    },
    {
        "name": "Прибить двух мух одним ударом",
        "picture": "03",
        "info": "убить двух зайцев сразу",
        "place": "человек с мухобойкой"
    },
    {
        "name": "Свалиться с быка на ослиную задницу",
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
        "name": "Не инжир из коня валится",
        "picture": "04",
        "info": "не стоит обманываться первым впечатлением.",
        "place": "человек который бредет за конем"
    },
    {
        "name": "Когда слепой ведёт слепого, оба упадут в яму",
        "picture": "04",
        "info": "нет смысла следовать за невеждой",
        "place": "двое идут на горизонте"
    },
    {
        "name": "Легко идёт по ветру",
        "picture": "04",
        "info": "то есть пользуется благоприятными обстоятельствами",
        "place": "моряк в лодке"
    },
    {
        "name": "Держать глаз на парусе",
        "picture": "04",
        "info": "Находится начеку",
        "place": "моряк в лодке"
    },
    {
        "name": "Гадить на виселицу",
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
        "name": "Плыть против течения",
        "picture": "08",
        "info": "с трудом сопротивляеться общему мнению.",
        "place": "Фигура, плывущая против течения"
    },
    {
        "name": "Держать угря за хвост",
        "picture": "08",
        "info": "справляеться со сложной задачей",
        "place": "Рыбак «держит угря за хвост»"
    },
    {
        "name": "Привязать дьявола к подушке",
        "picture": "13",
        "info": "олицетворяет упорство, которое преодолеет всё",
        "place": "женщина привязывает дьявола к подушке "
    },
    {
        "name": "Биться головой о стену",
        "picture": "13",
        "info": "упрямо продолжать пытаться достичь цели, которая почти невозможна",
        "place": "Человек, бьющийся головой о стену"
    },
    {
        "name": "Одна нога босая, вторая обутая",
        "picture": "13",
        "info": "важность равновесия",
        "place": "Человек, бьющийся головой о стену, что одна нога у него босая, вторая обутая,"
    },
    {
        "name": "Грызть колонну",
        "picture": "13",
        "info": "религиозный ханжа",
        "place": "фигура «грызущая колонну» "
    },
    {
        "name": "Жарить всю сельдь ради одной икринки",
        "picture": "09",
        "info": "делает слишком много ради малого результата",
        "place": " юноша жарит сельдь "
    },
    {
        "name": "Тут сельдь не жарится",
        "picture": "09",
        "info": "что-то идёт не по плану",
        "place": "юноша жарит сельдь"
    },
    {
        "name": "Что может сделать дым железу?",
        "picture": "09",
        "info": "не стоит стараться изменить то, что изменить невозможно",
        "place": "пила над юношей, который жарит сельдь"
    },
    {
        "name": "Рыба болтается на своих жабрах",
        "picture": "09",
        "info": "нужно принимать ответственность за свои действия",
        "place": "рыба, которая висит "
    },
    {
        "name": "Тут не просто селёдка",
        "picture": "09",
        "info": "больше, чем видно на первый взгляд",
        "place": "рыба, которая висит"
    },
    {
        "name": "Надел на голову крышку",
        "picture": "09",
        "info": "отказаться от взятых ранее обязательств",
        "place": "Молодой человек с рыбой «надел на голову крышку»"
    },
    {
        "name": "Сидит на пепле меж двух табуретов",
        "picture": "09",
        "info": "демонстрирует неуверенность",
        "place": "человек чежду двух табуретов"
    },
    {
        "name": "Ножницы, висящие на оконной оплётке",
        "picture": "09",
        "info": "тут вас всё равно обманут",
        "place": "ножницы, висящие на оконной оплётке"
    },
    {
        "name": "Щупать кур",
        "picture": "10",
        "info": "заниматься делом без определённого исхода",
        "place": "мужчина в красной шапке, высунувшись из окна, «щупает кур»"
    },
    {
        "name": "Вешать колокольчик на кота",
        "picture": "10",
        "info": "совершать опасный, опрометчивый поступок",
        "place": "латник вешает колокольчик на кота"
    },
    {
        "name": "Кусать железо",
        "picture": "10",
        "info": "беззастенчиво врать",
        "place": "мужчина в латах и ножом в зубах, цепляющий колокольчик на кота"
    },
    {
        "name": "Стричь овец, но не свежевать их",
        "picture": "14",
        "info": "не заходить слишком далеко",
        "place": "стригаль с овцой на коленях напоминает"
    },
    {
        "name": "Кто-то стрижёт овец, а кто-то — свиней",
        "picture": "14",
        "info": "у кого-то есть преимущества, а у кого-то нет",
        "place": "человек, пытающийся обкорнать свинью"
    },
    {
        "name": "Терпелив, как агнец",
        "picture": "14",
        "info": "кротость",
        "place": "Связанный ягнёнок"
    },
    {
        "name": "Один ветер мотает то, что другой прядёт",
        "picture": "14",
        "info": "разносить сплетни",
        "place": "две кумушки"
    },
    {
        "name": "Смотри, чтобы между ними не сунулась чёрная собака",
        "picture": "14",
        "info": "намекает, что всё может пойти ещё хуже",
        "place": "Чёрная собака между ними кумушками  "
    },
    {
        "name": "Таскать воздух в корзине",
        "picture": "10",
        "info": "попусту тратить время",
        "place": "мужчина, что «таскает воздух в корзине»"
    },
    {
        "name": "Ставить свечу дьяволу",
        "picture": "10",
        "info": "льстить и заводить друзей без разбора",
        "place": "мужчина ставит свечу"
    },
    {
        "name": "Исповедоваться дьяволу",
        "picture": "10",
        "info": "выдаёт секреты врагам",
        "place": "мужчина ставит свечу"
    },
    {
        "name": "Быть черпаком для пены",
        "picture": "11",
        "info": "тунеядство",
        "place": "шумовка за спиной лисы"
    },
    {
        "name": "Нет толку в красивой посуде, если с неё нечего есть",
        "picture": "11",
        "info": "красота не самоценна",
        "place": "Тарелка на краю стола"
    },
    {
        "name": "Надрезать брюхо свинье",
        "picture": "11",
        "info": "непоправимый поступок",
        "place": "человек, «надрезавший брюхо свинье»"
    },
    {
        "name": "Не давайте святыни псам и не бросайте жемчуга вашего пред свиньями",
        "picture": "15",
        "info": "напрасно тратить усилия на недостойных",
        "place": "человека, мечущий розы перед свиньями "
    },
    {
        "name": "Согнуться, чтобы войти в мир",
        "picture": "15",
        "info": "унизиться, чтобы достичь успеха",
        "place": "человек, вползающий в шар"
    },
    {
        "name": "Крутит мир на пальце",
        "picture": "15",
        "info": "у него всё схвачено",
        "place": " человек, который крутит мир"
    },
    {
        "name": "Разливший кашу, не соберёт её снова",
        "picture": "16",
        "info": "не вернёт сделанного",
        "place": "Человек, разливший кашу "
    },
    {
        "name": "Распластался меду двумя буханками хлеба",
        "picture": "16",
        "info": "сводит концы с концами",
        "place": "человек распластался меду двумя буханками хлеба, мы бы сейчас сказали  "
    },
    {
        "name": "Искать топорик",
        "picture": "16",
        "info": "пытается придумать оправдание",
        "place": "персонаж, который «ищет топорик» с фонарем в руке "
    },
    {
        "name": "А вот и он со своим фонарём",
        "picture": "16",
        "info": "нашёл применение своим талантам",
        "place": "персонаж, который «ищет топорик» с фонарем в руке"
    },
    {
        "name": "Тянет верёвку, чтобы найти длинный конец",
        "picture": "16",
        "info": "пытаться получить преимущество",
        "place": "пара, где каждый «тянет верёвку, чтобы найти длинный конец» "
    },
    {
        "name": "",
        "picture": "",
        "info": "",
        "place": ", ; тот, кто «ставит свечу дьяволу» — льстит и заводит друзей без разбора; а кто «исповедуется дьяволу», тот выдаёт секреты врагам."
    },
    {
        "name": "Зевает против печки",
        "picture": "12",
        "info": "хочет взяться за то, с чем не справится или «откусить больше, чем может проглотить»",
        "place": "человек у печки "
    },
    {
        "name": "Хватать куриное яйцо, упуская гусиное",
        "picture": "12",
        "info": "делает плохой выбор",
        "place": "крестьянка"
    },
    {
        "name": "Провалился сквозь корзину",
        "picture": "12",
        "info": "его обман раскрылся",
        "place": " "
    },
    {
        "name": "Лепит Христу льняную бороду",
        "picture": "11",
        "info": "скрывает обман под христианским благочестием",
        "place": "монах «лепит Христу льняную бороду» "
    },
    {
        "name": "Завис между небом и землёй",
        "picture": "12",
        "info": "оказался в трудном положении",
        "place": "человек в корзине "
    },
    {
        "name": "Две собаки над одной костью редко договорятся",
        "picture": "11",
        "info": "когда речь идёт о согласии по одному пункту",
        "place": "две собаки"
    },
    {
        "name": "Сидит на углях",
        "picture": "11",
        "info": "проявлять нетерпение",
        "place": "Человек в железном шлеме"
    },
    {
        "name": "С ним вертела не повернёшь",
        "picture": "11",
        "info": "с ним лучше дела не иметь",
        "place": "Человек в железном шлеме"
    }
]`;

const proverbs = JSON.parse(json);

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
    fragmentNode.src = `./assets/images/${urlNumber}.gif`;

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
