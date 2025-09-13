const products = [
  // الكونتينر الأول
  [
    {
      title: "Lenovo P8 Tab3 plus",
      price: "$329.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Teclast X10 Quad Core 3G",
      price: "$150.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Design 3G",
      price: "$586.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Octa Core",
      price: "$50.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
  ],
  // الكونتينر الثاني
  [
    {
      title: "BDF 10 inch Octa Core",
      price: "$120.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Design 3G",
      price: "$230.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Teclast X10 Quad Core 3G",
      price: "$340.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Lenovo P8 Tab3 plus",
      price: "$450.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
  ],
  // الكونتينر الثالث
  [
    {
      title: "Lenovo P8 Tab3 plus",
      price: "$329.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Teclast X10 Quad Core 3G",
      price: "$150.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Design 3G",
      price: "$586.99",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Octa Core",
      price: "$50.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
  ],
  // الكونتينر الرابع
  [
    {
      title: "BDF 10 inch Octa Core",
      price: "$120.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "BDF 10 inch Design 3G",
      price: "$230.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Teclast X10 Quad Core 3G",
      price: "$340.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
    {
      title: "Lenovo P8 Tab3 plus",
      price: "$450.00",
      img: "./images/41lT6amLxQL._SR290,290_.jpg",
    },
  ],
];

const mainSection = document.querySelector(".content");

// نكرر الكونتينر 4 مرات
products.forEach((containerProducts) => {
  const container = document.createElement("div");
  container.classList.add("container");

  const grid = document.createElement("div");
  grid.classList.add("grid");

  containerProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" />
      <div class="card-content">
        <div>
          <div>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star" style="color: gray"></i>
          </div>
          <h3>${product.title}</h3>
          <p class="hide-price">$150.0</p>
          <div class="hide-card">
            <div class="discount"><p>-50%</p></div>
            <div class="new-price">
              <p>${product.price}</p>
              <p style="text-decoration:line-through;">$150.0</p>
            </div>
            <button>Add to cart</button>
            <span><i class="fa-regular fa-heart" style="color: #000;"></i></span>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);
  mainSection.appendChild(container);
});

const burger = document.querySelector(".burger");
const devices = document.querySelector(".devices-mobile");

burger.addEventListener("click", () => {
  devices.classList.toggle("active");
});

const toggleBtn = document.querySelector(".grid-2-icon");
const toggles = document.querySelector(
  ".first-div-mobile .mobile-options .nest-div .toggles"
);
const mobileOptions = document.querySelector(".mobile-options");

toggleBtn.addEventListener("click", () => {
  mobileOptions.classList.toggle("active");
  toggles.style.display = " none";
});

const formIcon = document.querySelector("form i");
const formInput = document.querySelector("form input");

formIcon.addEventListener("click",()=>{
  formInput.classList.toggle("open");
  formIcon.style.display = "none";
})

let icon = document.querySelector(".settings-toggle");
let list = document.querySelector("aside");
let overlay = document.querySelector(".overlay");

icon.addEventListener("click", () => {
  list.classList.toggle("open");
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
});
overlay.addEventListener("click", () => {
  list.classList.remove("open");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none"; // ← منع الكليك لما يختفي
});

let devicesDesc = document.querySelector(".devices");
let devicesDescH3 = document.querySelectorAll(".devices h3");
function handleResize() {
  if (window.innerWidth >= 1024) {
    list.classList.remove("open");
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    devicesDesc.style.overflow = "auto";
    devicesDesc.style.height = "6.7vh";
  }
}

window.addEventListener("resize", handleResize);

const scrollContainer = document.querySelector(".devices");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function checkOverflow() {
  if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
}

// عند تحميل الصفحة + تغيير حجم الشاشة
checkOverflow();
window.addEventListener("resize", checkOverflow);

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});


