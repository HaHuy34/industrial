// Submenu
document.querySelectorAll(".main-menu").forEach((item) => {
  item.addEventListener("click", function (e) {
    // Ngăn click trong submenu cũng trigger cha
    if (e.target.closest(".sub-menu")) return;

    // Đóng các menu khác
    document.querySelectorAll(".main-menu").forEach((li) => {
      if (li !== item) li.classList.remove("active");
    });

    // Toggle cái đang click
    item.classList.toggle("active");
  });
});

document
  .querySelector(".registered-sales")
  .addEventListener("click", function () {
    alert("Tính năng đang được update");
  });

// Filter bar
const buttons = document.querySelectorAll(".filter-bar button");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
