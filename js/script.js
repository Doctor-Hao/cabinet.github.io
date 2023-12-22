function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;

//<Burger>===========================================================================
document.addEventListener("DOMContentLoaded", function () {
  // [Burger]
  let burger = document.querySelector(".header__icon");
  let burger_hide = document.querySelector(".header__hide");
  let burger_menu = document.querySelector(".header__menu");
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");
  let line3 = document.getElementById("line3");

  document.addEventListener("click", function (e) {
    // Проверяем, был ли клик вне меню и на иконку бургера
    if (!burger_menu.contains(e.target) && e.target !== burger) {
      burger_menu.classList.remove("_active");
      burger_hide.classList.remove("_hide");
      line1.classList.remove("cross");

      line1.style.transform = "rotate(0) translateY(0)";
      line2.style.opacity = "1";
      line2.style.transformOrigin = "center";
      line3.style.transform = "rotate(0) translateY(0)";
      line2.setAttribute("d", "M1.5 22H17.5");
      line3.setAttribute("d", "M1.5 13H31.5");
    }
  });

  burger.addEventListener("click", function (e) {
    burger_menu.classList.toggle("_active");
    burger_hide.classList.toggle("_hide");

    line1.classList.toggle("cross");

    if (line1.classList.contains("cross")) {
      line1.setAttribute("d", "M1.5 4H31.5");
      line1.style.transformOrigin = "center";
      line1.style.transform = "rotate(45deg) translateY(9px)";
      line2.style.opacity = "0";
      line3.setAttribute("d", "M1.5 22H31.5");
      line3.style.transformOrigin = "center";
      line3.style.transform = "rotate(-45deg) translateY(-9px)";
    } else {
      line1.style.transform = "rotate(0) translateY(0)";
      line2.style.opacity = "1";
      line2.style.transformOrigin = "center";
      line3.style.transform = "rotate(0) translateY(0)";
      line2.setAttribute("d", "M1.5 22H17.5");
      line3.setAttribute("d", "M1.5 13H31.5");
    }
  });

  burger.addEventListener("mouseenter", function (e) {
    if (!line1.classList.contains("cross")) {
      line2.setAttribute("d", "M1.5 22H31.5");
    } else {
      line3.style.transform = "rotate(-50deg) translateY(-9px)";
      line1.style.transform = "rotate(50deg) translateY(9px)";
    }
  });
  burger.addEventListener("mouseleave", function (e) {
    if (!line1.classList.contains("cross")) {
      line2.setAttribute("d", " M1.5 22H17.5");
    } else {
      line3.style.transform = "rotate(-45deg) translateY(-9px)";
      line1.style.transform = "rotate(45deg) translateY(9px)";
    }
  });
  // [/Burger]

  // Получаем элементы
  const items = document.querySelectorAll(".header__items");

  // Функция для перемещения элементов
  function moveItems() {
    // Получаем ширину окна браузера
    const windowWidth = window.innerWidth;

    // Если ширина окна
    if (windowWidth <= 1500) {
      // Перемещаем элементы внутри header__menu
      items.forEach((item) => {
        burger_hide.appendChild(item);
      });
    }
  }

  // Вызываем функцию при загрузке страницы и изменении размера окна
  window.addEventListener("load", moveItems);
  window.addEventListener("resize", moveItems);

  /// Получаем все элементы с классом 'work-statistic'
  const workStatistics = document.querySelectorAll(".work-statistic");

  // Проходимся по каждому элементу
  workStatistics.forEach((workStat) => {
    // Находим дочерний элемент 'span'
    const spanElement = workStat.querySelector("span");

    // Получаем значение текста внутри 'span' и убираем символ процента, предполагая, что там число с процентом
    const percentage = parseInt(spanElement.textContent);

    // Устанавливаем значение ширины псевдоэлемента before равным проценту
    workStat.style.setProperty("--before-width", percentage + "%");
  });

  // action
  // Получаем все кнопки
  const buttons = document.querySelectorAll(".action__button");

  // Функция для обработки клика по кнопке
  function handleClick(event) {
    // Предотвращаем стандартное поведение кнопки (если нужно)
    event.preventDefault();

    // Перебираем все кнопки
    buttons.forEach((button) => {
      // Удаляем класс _button-active у всех кнопок
      button.classList.remove("_button-active");
    });

    // Добавляем класс _button-active к нажатой кнопке
    event.currentTarget.classList.add("_button-active");
  }

  // Назначаем обработчик события клика на каждую кнопку
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  // Получаем все вкладки и соответствующие элементы
  const tabs = document.querySelectorAll(".action__tab");
  const firstTabContent = document.querySelector(".one-tab");
  const secondTabContent = document.querySelector(".two-tab");

  // Функция для обработки клика по вкладке
  function handleTabClick(event) {
    // Предотвращаем стандартное поведение кнопки (если нужно)
    event.preventDefault();

    // Удаляем класс _tab-active у всех вкладок
    tabs.forEach((tab) => {
      tab.classList.remove("_tab-active");
    });

    // Добавляем класс _tab-active к нажатой вкладке
    event.currentTarget.classList.add("_tab-active");

    // Проверяем, какая вкладка была активирована и отображаем соответствующий контент
    if (event.currentTarget === tabs[0]) {
      firstTabContent.style.display = "block";
      secondTabContent.style.display = "none";
    } else {
      firstTabContent.style.display = "none";
      secondTabContent.style.display = "block";
    }
  }

  // Назначаем обработчик события клика на каждую вкладку
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", handleTabClick);

    // Устанавливаем активный класс для первой вкладки и скрываем второй контент при загрузке страницы
    if (index === 0) {
      tab.classList.add("_tab-active");
      firstTabContent.style.display = "block";
      secondTabContent.style.display = "none";
    }
  });
});

//<Select>===========================================================================
// let select = document.querySelector('._customer-select');
// select.addEventListener("click", function (e) {
// 	select.classList.toggle('_active');
// });
//</Select>===========================================================================

//<Выпадающий блок>===========================================================================
/* <script>
  document.addEventListener("DOMContentLoaded", () => {
     var acc = document.getElementsByClassName("_customer-intro__accordion");

     for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.previousElementSibling;
          if (panel.style.maxHeight) {
             panel.style.maxHeight = null;
          } else {
             panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
     }
  });
</script> */
//</Выпадающий блок>===========================================================================
