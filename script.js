const listItemsWithOptions = document.querySelectorAll(".list_item");

listItemsWithOptions.forEach((item) => {
  const optionsList = item.querySelector(".options");
  const arrowIcon = item.querySelector(".icon svg");

  item.addEventListener("mouseenter", () => {
    optionsList.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
  });

  item.addEventListener("mouseleave", () => {
    optionsList.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
  });
});

// for drop down

const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const sBtn_text = selectBtn.querySelector(".sBtn-text");
  const options = optionMenu.querySelectorAll(".options .option");

  selectBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    optionMenu.classList.toggle("active");
    console.log("Button clicked");
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(selectedOption);
      optionMenu.classList.remove("active");
      console.log("Option clicked");
    });
  });

  document.body.addEventListener("click", (event) => {
    if (
      !optionMenu.contains(event.target) &&
      !selectBtn.contains(event.target)
    ) {
      optionMenu.classList.remove("active");
    }
  });
});

// for about more section
const iconSmallElements = document.querySelectorAll('.has-child .icon-small');

iconSmallElements.forEach(iconSmall => {
    iconSmall.addEventListener('click', function(e) {
        e.preventDefault();
        const content = this.parentElement.querySelector('.content');
        content.classList.toggle('visible');
        
        const icon = this.querySelector('svg');
        icon.classList.toggle('rotated');
    });
});
