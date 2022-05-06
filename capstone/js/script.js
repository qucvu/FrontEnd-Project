let checkBox = document.getElementById("js-checkbox");
const changeBg = (prevClass, nextClass) => {
  let bgColors = document.querySelectorAll(`.${prevClass}`);
  for (let bgColor of bgColors) {
    bgColor.classList.remove(`${prevClass}`);
    bgColor.classList.add(`${nextClass}`);
  }
};

const changeText = (prevClass, nextClass) => {
  let colors = document.querySelectorAll(`.${prevClass}`);
  for (let color of colors) {
    color.classList.remove(`${prevClass}`);
    color.classList.add(`${nextClass}`);
  }
};

const changeInput = (prevClass, nextClass) => {
  let bgColors = document.querySelectorAll(`.${prevClass}`);
  for (let bgColor of bgColors) {
    bgColor.classList.remove(`${prevClass}`);
    bgColor.classList.add(`${nextClass}`);
  }
};

let headerBg = this.document.getElementById("header");
let headerTitles = this.document.getElementsByClassName("header__title");
let actives = this.document.querySelectorAll(".nav-link.active");

const checkScroll = () => {
  if (document.documentElement.scrollTop < 50) {
    headerBg.style.borderBottom = "1px solid rgba(231, 231, 231, 0.18)";
    headerBg.style.height = "10rem";
    headerBg.classList.remove("bg--white");
    headerBg.classList.remove("bg--dark");
    // active.setAttribute('style', 'color:inherit !important');
    for (let active of actives) {
      active.setAttribute("style", "color:inherit !important");
    }
    for (let headerTitle of headerTitles) {
      headerTitle.classList.remove("title--day");
      headerTitle.classList.add("title--night");
    }
    checkBox.addEventListener("click", function () {
      for (let headerTitle of headerTitles) {
        headerTitle.classList.remove("title--day");
        headerTitle.classList.add("title--night");
      }
    });
  }
  saveData();
};

const changeTheme = () => {
  checkScroll();
  if (checkBox.checked) {
    document.getElementById("js-moon").style.display = "none";
    document.getElementById("js-sun").style.display = "block";
    // document.getElementById('js-map').style.filter = "grayscale(100%)"
    changeBg("bg--white", "bg--dark");
    changeBg("bg--day", "bg--night");
    changeBg("bg--light", "bg--dark-1");
    changeBg("bg-overlay--day", "bg-overlay--night");
    changeText("title--day", "title--night");
    changeText("text-body--day", "text-body--night");
    changeBg("bg-servicepage", "bg-servicepage-change");
    changeInput("input--light", "input--dark");
    changeText("icon-alt--day", "icon-alt--night");
    changeBg("fill-white", "fill-black");
    changeBg("border--day", "border--night");
  } else {
    document.getElementById("js-moon").style.display = "block";
    document.getElementById("js-sun").style.display = "none";
    // document.getElementById('js-map').style.filter = "grayscale(0%)"
    changeBg("bg--dark", "bg--white");
    changeBg("bg--night", "bg--day");
    changeBg("bg--dark-1", "bg--light");
    changeBg("bg-overlay--night", "bg-overlay--day");
    changeText("title--night", "title--day");
    changeText("text-body--night", "text-body--day");
    changeBg("bg-servicepage-change", "bg-servicepage");
    changeInput("input--dark", "input--light");
    changeText("icon-alt--night", "icon-alt--day");
    changeBg("fill-black", "fill-white");
    changeBg("border--night", "border--day");
  }
};

const saveData = () => {
  localStorage.setItem("checked", JSON.stringify(checkBox.checked));
  // localStorage.setItem(
  //   "scrollPoint",
  //   JSON.stringify(document.documentElement.scrollTop)
  // );
};
const getData = () => {
  if (localStorage.getItem("checked")) {
    checkBox.checked = JSON.parse(localStorage.getItem("checked"));
  }
  document.documentElement.scrollTop += 1;
  // if (localStorage.getItem("scrollPoint")) {
  //   document.documentElement.scrollTop =
  //     JSON.parse(localStorage.getItem("scrollPoint")) + 1;
  // }
  changeTheme();
  checkScroll();
};
getData();

const scrollPage = () => {
  checkScroll();
  window.addEventListener("scroll", () => {
    checkScroll();
    if (document.documentElement.scrollTop >= 50) {
      headerBg.style.borderBottom = "none";
      headerBg.style.height = "8rem";
      // active.setAttribute('style', 'color:#009f4d !important');
      for (let active of actives) {
        active.setAttribute("style", "color:#009f4d !important");
      }
      if (checkBox.checked) {
        headerBg.classList.add("bg--dark");
        for (let headerTitle of headerTitles) {
          headerTitle.classList.remove("title--day");
          headerTitle.classList.add("title--night");
        }
      } else {
        headerBg.classList.add("bg--white");
        for (let headerTitle of headerTitles) {
          headerTitle.classList.remove("title--night");
          headerTitle.classList.add("title--day");
        }
      }
    }
    // else {
    //     headerBg.style.height = "10rem";
    //     headerBg.classList.remove('bg--white');
    //     headerBg.classList.remove('bg--dark');
    //     active.setAttribute('style', 'color:inherit !important');
    //     for (let headerTitle of headerTitles) {
    //         headerTitle.classList.remove('title--day')
    //         headerTitle.classList.add('title--night')
    //     }
    //     checkBox.addEventListener('click',function(){
    //     for (let headerTitle of headerTitles) {
    //         headerTitle.classList.remove('title--day')
    //         headerTitle.classList.add('title--night')
    //     }
    //     })
    // }
  });
};
scrollPage();

checkBox.addEventListener("click", () => {
  document.documentElement.scrollTop += 1;
  checkScroll();
  changeTheme();
  saveData();
  // if (checkBox.checked) {
  //     document.getElementById('js-moon').style.display = "none"
  //     document.getElementById('js-sun').style.display = "block"
  //     changeBg("bg--white", "bg--dark")
  //     changeBg("bg--day", "bg--night")
  //     changeBg("bg--light", "bg--dark-1")
  //     changeBg("bg-overlay--day", "bg-overlay--night")
  //     changeText("title--day", "title--night")
  //     changeText("text-body--day", "text-body--night")
  // } else {
  //     document.getElementById('js-moon').style.display = "block"
  //     document.getElementById('js-sun').style.display = "none"
  //     changeBg("bg--dark", "bg--white")
  //     changeBg("bg--night", "bg--day")
  //     changeBg("bg--dark-1", "bg--light")
  //     changeBg("bg-overlay--night", "bg-overlay--day")
  //     changeText("title--night", "title--day")
  //     changeText("text-body--night", "text-body--day")
  // }
});

//handle search button
let btnSearch = document.getElementById("js-search");
let btnClose = document.querySelector(".btn--close");
let searchForm = document.querySelector(".header__search__form");
btnSearch.addEventListener("click", function () {
  searchForm.style.visibility = "initial";
  searchForm.style.opacity = "1";
  document
    .querySelector(".header__search")
    .classList.add("header__search--spread");
});

btnClose.addEventListener("click", function () {
  searchForm.style.visibility = "hidden";
  searchForm.style.opacity = "0";
  document
    .querySelector(".header__search")
    .classList.remove("header__search--spread");
});

var mybutton = document.querySelector(".backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// right-sidebar
const allSideBar = document.querySelector(".all-sidebar");
const buttonSideBar = document.querySelector(".button-sidebar");
const rightSideBar = document.querySelector('.right-sidebar');
buttonSideBar.addEventListener("click", function () {
  buttonSideBar.classList.toggle("animate-button");
  allSideBar.classList.toggle("animate-sidebar");
  rightSideBar.classList.toggle("z-index-min");
});
