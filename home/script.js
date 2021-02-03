let items = document.getElementById("items");
let page = 1;

window.addEventListener("load", function () {
  getData();
  items.addEventListener("change", changePerPage);
  document.getElementById("next").addEventListener("click", () => {
    changePage(+1);
  });
  document.getElementById("prev").addEventListener("click", () => {
    changePage(-1);
  });
});

function changePage(val) {
  page += val;
  // console.log(page);
  let per_page = items.value;
  getData(per_page);
}

function changePerPage(e) {
  page = 1;
  let per_page = e.target.value;
  // console.log(per_page);
  getData(per_page);
}

let fetchlink;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData() {
  fetchlink = `https://json-server-mocker-projects.herokuapp.com/products?_page=${page}&_limit=3`;
  const data = await fetchApi(fetchlink);
  // console.log(data);
  generateData(data);
}

function generateData(data) {
  // console.log(data);
  let appData = document.getElementById("app_data");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card = document.createElement("div");
  card.classList.add("card");
  rating__span.appendChild(icon);
  rating__div.append(rating__span, add_cart_btn);
  card.append(image, description__div, price_tag, rating__div);

  return card;
}

// code for 2

let items2 = document.getElementById("items2");
let page2 = 1;

window.addEventListener("load", function () {
  getData2();
  items2.addEventListener("change", changePerPage2);
  document.getElementById("next2").addEventListener("click", () => {
    changePage2(+1);
  });
  document.getElementById("prev2").addEventListener("click", () => {
    changePage2(-1);
  });
});

function changePage2(val) {
  page2 += val;
  // console.log(page2);
  let per_page2 = items2.value;
  getData2(per_page2);
}

function changePerPage2(e) {
  page2 = 1;
  let per_page2 = e.target.value;
  // console.log(per_page2);
  getData2(per_page2);
}

let fetchlink2;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData2(val = 5) {
  fetchlink2 = `https://json-server-mocker-projects.herokuapp.com/best?_page=${page2}&_limit=3`;
  const data = await fetchApi(fetchlink2);
  // console.log(data);
  generateData2(data);
}

function generateData2(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card2 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card2);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card2 = document.createElement("div");
  card2.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card2.append(image, description__div, price_tag, rating__div);

  return card2;
}

// code for hair

let items3 = document.getElementById("items3");
let page3 = 1;

window.addEventListener("load", function () {
  getData3();
  items3.addEventListener("change", changePerPage3);
  document.getElementById("next3").addEventListener("click", () => {
    changePage3(+1);
  });
  document.getElementById("prev3").addEventListener("click", () => {
    changePage3(-1);
  });
});

function changePage3(val) {
  page3 += val;
  // console.log(page2);
  let per_page3 = items3.value;
  getData3(per_page3);
}

function changePerPage3(e) {
  page3 = 1;
  let per_page3 = e.target.value;
  // console.log(per_page3);
  getData2(per_page3);
}

let fetchlink3;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData3(val = 5) {
  fetchlink3 = `https://json-server-mocker-projects.herokuapp.com/hair_page?_page=${page3}&_limit=3`;
  const data = await fetchApi(fetchlink3);
  // console.log(data);
  generateData3(data);
}

function generateData3(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data3");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card3 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card3);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card3 = document.createElement("div");
  card3.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card3.append(image, description__div, price_tag, rating__div);

  return card3;
}

// code for skin

let items4 = document.getElementById("items4");
let page4 = 1;

window.addEventListener("load", function () {
  getData4();
  items4.addEventListener("change", changePerPage4);
  document.getElementById("next4").addEventListener("click", () => {
    changePage4(+1);
  });
  document.getElementById("prev4").addEventListener("click", () => {
    changePage4(-1);
  });
});

function changePage4(val) {
  page4 += val;
  // console.log(page2);
  let per_page4 = items4.value;
  getData4(per_page4);
}

function changePerPage4(e) {
  page4 = 1;
  let per_page4 = e.target.value;
  // console.log(per_page4);
  getData4(per_page4);
}

let fetchlink4;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData4() {
  fetchlink4 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page4}&_limit=3`;
  const data = await fetchApi(fetchlink4);
  // console.log(data);
  generateData4(data);
}

function generateData4(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data4");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card4 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card4);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card4 = document.createElement("div");
  card4.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card4.append(image, description__div, price_tag, rating__div);

  return card4;
}

// code for baby 5

let items5 = document.getElementById("items5");
let page5 = 1;

window.addEventListener("load", function () {
  getData5();
  items5.addEventListener("change", changePerPage5);
  document.getElementById("next5").addEventListener("click", () => {
    changePage5(+1);
  });
  document.getElementById("prev5").addEventListener("click", () => {
    changePage5(-1);
  });
});

function changePage5(val) {
  page5 += val;
  // console.log(page2);
  let per_page5 = items5.value;
  getData5(per_page5);
}

function changePerPage5(e) {
  page5 = 1;
  let per_page5 = e.target.value;
  // console.log(per_page5);
  getData5(per_page5);
}

let fetchlink5;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData5() {
  fetchlink5 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page5}&_limit=3`;
  const data = await fetchApi(fetchlink5);
  // console.log(data);
  generateData5(data);
}

function generateData5(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data5");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card5 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card5);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card5 = document.createElement("div");
  card5.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card5.append(image, description__div, price_tag, rating__div);

  return card5;
}

// code for vitamin 6

let items6 = document.getElementById("items6");
let page6 = 1;

window.addEventListener("load", function () {
  getData6();
  items6.addEventListener("change", changePerPage6);
  document.getElementById("next6").addEventListener("click", () => {
    changePage6(+1);
  });
  document.getElementById("prev6").addEventListener("click", () => {
    changePage6(-1);
  });
});

function changePage6(val) {
  page6 += val;
  // console.log(page2);
  let per_page6 = items6.value;
  getData6(per_page6);
}

function changePerPage6(e) {
  page6 = 1;
  let per_page6 = e.target.value;
  // console.log(per_page6);
  getData6(per_page6);
}

let fetchlink6;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData6() {
  fetchlink6 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page6}&_limit=3`;
  const data = await fetchApi(fetchlink6);
  // console.log(data);
  generateData6(data);
}

function generateData6(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data6");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card6 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card6);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card6 = document.createElement("div");
  card6.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card6.append(image, description__div, price_tag, rating__div);

  return card6;
}

// code for Onion Range

let items7 = document.getElementById("items7");
let page7 = 1;

window.addEventListener("load", function () {
  getData7();
  items7.addEventListener("change", changePerPage7);
  document.getElementById("next7").addEventListener("click", () => {
    changePage7(+1);
  });
  document.getElementById("prev7").addEventListener("click", () => {
    changePage7(-1);
  });
});

function changePage7(val) {
  page7 += val;
  // console.log(page2);
  let per_page7 = items7.value;
  getData7(per_page7);
}

function changePerPage7(e) {
  page7 = 1;
  let per_page7 = e.target.value;
  // console.log(per_page7);
  getData7(per_page7);
}

let fetchlink7;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData7() {
  fetchlink7 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page7}&_limit=3`;
  const data = await fetchApi(fetchlink7);
  // console.log(data);
  generateData7(data);
}

function generateData7(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data7");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card7 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card7);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card7 = document.createElement("div");
  card7.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card7.append(image, description__div, price_tag, rating__div);

  return card7;
}

// code for Ubtan

let items8 = document.getElementById("items8");
let page8 = 1;

window.addEventListener("load", function () {
  getData8();
  items8.addEventListener("change", changePerPage8);
  document.getElementById("next8").addEventListener("click", () => {
    changePage8(+1);
  });
  document.getElementById("prev8").addEventListener("click", () => {
    changePage8(-1);
  });
});

function changePage8(val) {
  page8 += val;
  // console.log(page2);
  let per_page8 = items8.value;
  getData8(per_page8);
}

function changePerPage8(e) {
  page8 = 1;
  let per_page8 = e.target.value;
  // console.log(per_page8);
  getData8(per_page8);
}

let fetchlink8;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData8() {
  fetchlink8 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page8}&_limit=3`;
  const data = await fetchApi(fetchlink8);
  // console.log(data);
  generateData8(data);
}

function generateData8(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data8");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card8 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card8);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card8 = document.createElement("div");
  card8.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card8.append(image, description__div, price_tag, rating__div);

  return card8;
}

// code Winter Care

let items9 = document.getElementById("items9");
let page9 = 1;

window.addEventListener("load", function () {
  getData9();
  items9.addEventListener("change", changePerPage9);
  document.getElementById("next9").addEventListener("click", () => {
    changePage9(+1);
  });
  document.getElementById("prev9").addEventListener("click", () => {
    changePage9(-1);
  });
});

function changePage9(val) {
  page9 += val;
  // console.log(page2);
  let per_page9 = items9.value;
  getData9(per_page9);
}

function changePerPage9(e) {
  page9 = 1;
  let per_page9 = e.target.value;
  // console.log(per_page9);
  getData9(per_page9);
}

let fetchlink9;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData9() {
  fetchlink9 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page9}&_limit=3`;
  const data = await fetchApi(fetchlink9);
  // console.log(data);
  generateData9(data);
}

function generateData9(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data9");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card9 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card9);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card9 = document.createElement("div");
  card9.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card9.append(image, description__div, price_tag, rating__div);

  return card9;
}

// code for New Launches

let items10 = document.getElementById("items10");
let page10 = 1;

window.addEventListener("load", function () {
  getData10();
  items10.addEventListener("change", changePerPage10);
  document.getElementById("next10").addEventListener("click", () => {
    changePage10(+1);
  });
  document.getElementById("prev10").addEventListener("click", () => {
    changePage10(-1);
  });
});

function changePage10(val) {
  page10 += val;
  // console.log(page2);
  let per_page10 = items10.value;
  getData10(per_page10);
}

function changePerPage10(e) {
  page10 = 1;
  let per_page10 = e.target.value;
  // console.log(per_page10);
  getData10(per_page10);
}

let fetchlink10;

async function fetchApi(url) {
  const datafetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await datafetch.json();
  return data;
}

async function getData10() {
  fetchlink10 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page10}&_limit=3`;
  const data = await fetchApi(fetchlink10);
  // console.log(data);
  generateData10(data);
}

function generateData10(data) {
  // console.log(data);
  let appData = document.getElementById("myApp_data10");
  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card10 = createUserCard(data[i]);
    // console.log(data[i]);
    appData.append(card10);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.price;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card10 = document.createElement("div");
  card10.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card10.append(image, description__div, price_tag, rating__div, tag);

  return card10;
}

// code for timer

setInterval(function time() {
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}, 1000);

// code for search functionality
let searchInputValue = document.querySelector("#search");

let searchBtn = document
  .querySelector("#search_btn")
  .addEventListener("click", handleSearchData);

function handleSearchData() {
  let value = searchInputValue.value;
  console.log(value);
  let search_result__display = document.querySelector("#search_result");
  search_result__display.innerHTML = "";

  fetch(`https://json-server-mocker-projects.herokuapp.com/baby?q=${value}`)
    .then((res) => res.json())
    .then((res) => {
      search_result__display.innerHTML = res;
      console.log(res);
      generateData11(res);
    });
}

// 1234567890-

function generateData11(data) {
  // console.log(data);
  let search_result = document.getElementById("search_result");
  search_result.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card11 = createUserCard(data[i]);
    // console.log(data[i]);
    search_result.append(card11);
  }
}

function createUserCard(item) {
  let image = document.createElement("img");
  image.className = "img";
  image.src = item.img;

  let description__div = document.createElement("p");
  description__div.className = "desc";
  description__div.textContent = item.description;

  let price_tag = document.createElement("h3");
  price_tag.className = "price";
  price_tag.textContent = "₹ " + item.amount;

  let rating__div = document.createElement("div");
  rating__div.className = "rating__div";

  let rating__span = document.createElement("h5");
  rating__span.textContent = item.rating;
  rating__span.className = "rating__span";

  let icon = document.createElement("i");
  icon.className = "fa fa-star icon-star";

  let add_cart_btn = document.createElement("button");
  add_cart_btn.textContent = "ADD TO CART";
  add_cart_btn.className = "btn addBtn";

  let card11 = document.createElement("div");
  card11.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card11.append(image, description__div, price_tag, rating__div, tag);

  return card11;
}
