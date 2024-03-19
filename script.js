// navbar hover effect
const listItemsWithOptions = document.querySelectorAll(".list_item");

listItemsWithOptions.forEach((item) => {
  const optionsList = item.querySelector(".options");

  // Add event listeners for hover effect
  item.addEventListener("mouseenter", () => {
    optionsList.style.display = "block"; // Display options on hover
  });

  item.addEventListener("mouseleave", () => {
    optionsList.style.display = "none"; // Hide options when not hovered
  });
});
