const checkboxList = document.querySelectorAll('input[type="checkbox"]');
const itemList = document.querySelectorAll(".item:not(.btn)");
const btnStart = document.querySelector(".btn");

const timingFunctionList = [
  "linear",
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out"
];

(function initCheckbox() {
  checkboxList.forEach((checkbox, i) => {
    checkbox.addEventListener("click", () => {
      console.log(itemList[i].style.display);
      if (itemList[i].style.display) {
        itemList[i].style.display = null;
      } else {
        itemList[i].style.display = "none";
      }
    });
  });
})();

(function initBtnStart() {
  btnStart.addEventListener("mouseover", () => {
    let width = document.querySelector(".control input:nth-of-type(1)").value;
    let duration = document.querySelector(".control input:nth-of-type(2)").value;
    itemList.forEach((item, i) => {
      item.style.transition = `width ${duration}s ${timingFunctionList[i]}`;
      item.style.width = `${width}px`;
    });
  });

  btnStart.addEventListener("mouseleave", () => {
    itemList.forEach((item) => {
      item.style.width = null;
    });
  });
})();
