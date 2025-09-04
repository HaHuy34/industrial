// Menu Products
document.querySelector(".main-list-products").addEventListener("click", function (e) {
  e.stopPropagation(); // Ngăn chặn click lan ra ngoài
  document.querySelector(".list-pr").classList.toggle("active");
});

// Ẩn menu khi click ra ngoài
document.addEventListener("click", function (e) {
  const listProduct = document.querySelector(".list-product");
  const listPr = document.querySelector(".list-pr");

  // Nếu click ngoài vùng .list-product thì ẩn
  if (!listProduct.contains(e.target)) {
    listPr.classList.remove("active");
  }
});

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

// Search
const inputSearch = document.getElementById("ip-search");
const products = document.querySelectorAll(".col-6, .col-sm-4, .col-md-3, .col-lg-3");

inputSearch.addEventListener("keyup", function (event) {
  let keyword = this.value.toLowerCase().trim();

  // Nếu input trống → show hết
  if (keyword === "") {
    products.forEach(product => product.classList.remove("hidden"));
    return;
  }

  // Nếu nhấn Enter → lọc
  if (event.key === "Enter") {
    products.forEach(product => {
      let name = product.querySelector(".detail-product").textContent.toLowerCase();
      if (name.includes(keyword)) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });
  }
});

// Animation header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Back to top
const backToTop = document.getElementById("backToTop");

// Hiện / ẩn nút khi scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Click nút → cuộn mượt về đầu trang
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


