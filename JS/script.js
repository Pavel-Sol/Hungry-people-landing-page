// header__burger header__menu добавляем / убираем класс active, для body класс lock
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(
      ".header__burger,.header__menu__right,.header__menu__left,.header__menu"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// кнопка переключатель. сначала у всех btn-switch удаляем класс active, потом при клике на нее
// работает toggleClass
$(document).ready(function () {
  $(".btn-switch").click(function (event) {
    $(".btn-switch").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// инициализация и настройки для specialties__slider
$(document).ready(function () {
  $(".specialties__slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight:true,
  });
});
// настройка табов в секции prices
let prices = document.querySelectorAll("[data-tab]");

prices.forEach(price);

function price(item) {
  item.addEventListener("click", tabClick);
}

function tabClick() {
  let tabId = this.dataset.tab;
  document.querySelectorAll("[data-tab-content]").forEach(function (item) {
    item.classList.add("tab-hidden");
  });
  document.getElementById(tabId).classList.toggle("tab-hidden");
}
// переключение кнопок меню в секции prices
$(document).ready(function () {
  $(".prices__menu__item").click(function (event) {
    $(".prices__menu__item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
// инициализация и настройки для place__slider
$(document).ready(function () {
  $(".place__slider").slick({
    arrows: false,
    slidesToShow:4,
    autoplay: true,
    autoplaySpeed:3000,
    responsive:[
    {
      breakpoint: 1080,
      settings: {
        slidesToShow:3,
      }
      },{
        breakpoint: 720,
        settings: {
          slidesToShow:2,
        }
        },{
          breakpoint: 360,
          settings: {
            slidesToShow:1,
          }
          }
 ]
  });
});
