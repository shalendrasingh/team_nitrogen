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

  let addToLs = data;

  localStorage.setItem("cart", JSON.stringify(addToLs));
  generateData(data);
}
let appData = document.getElementById("app_data_for_best_sell");
// console.log(appData);
function generateData(data) {
  // console.log(document.getElementById("app_data_for_best_sell"));

  appData.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card = createUserCard(data[i], data[i].id);
    // console.log(data[i].id);
    appData.append(card);
    // console.log(card);
    // appData.innerHTML = card;
  }
}

// code for create card

function createUserCard(item, id) {
  // console.log("object");
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
  add_cart_btn.setAttribute("id", "buy_btn01");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);
  // console.log(add_cart_btn, "qqqqqqq");
  let card = document.createElement("div");

  card.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);

  rating__span.appendChild(icon);
  rating__div.append(rating__span, add_cart_btn);
  card.append(image, description__div, price_tag, rating__div, tag);
  // console.log("wertyui");
  return card;
}

let arrForLs = [];
let arrForPrice = [];
function showData(id) {
  // // alert();
  // console.log(id);
  let conditionChekLs = localStorage.getItem("order");
  conditionChekLs = JSON.parse(conditionChekLs);

  if (conditionChekLs == null || conditionChekLs.length == 0) {
    let getDataFromLs = localStorage.getItem("cart");
    getDataFromLs = JSON.parse(getDataFromLs);

    let orders = getDataFromLs.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    // console.log(orders);

    let cartShow = {
      id: orders[0].id,
      description: orders[0].description,
      img: orders[0].img,
      price: orders[0].price,

      quantity: 1,
    };

    let priceShow = {
      id: orders[0].id,
      price: orders[0].price,
    };

    // console.log(cartShow);

    arrForLs.push(cartShow);
    arrForPrice.push(priceShow);

    localStorage.setItem("order", JSON.stringify(arrForLs));
    localStorage.setItem("price", JSON.stringify(arrForPrice));
  } else {
    let count = 0;
    let ordersChecks = conditionChekLs.filter((item) => {
      if (item.id === id) {
        count++;
        return (item.quantity = item.quantity + 1);
      } else {
        return item;
      }
    });

    // console.log(ordersChecks.length);

    if (count !== 0) {
      // arrForLs.push(ordersChecks);

      localStorage.setItem("order", JSON.stringify(ordersChecks));
    }
    // console.log(count, " count 1");

    if (count == 0) {
      // console.log(count, " count m");
      let getDataFromLs = localStorage.getItem("cart");
      getDataFromLs = JSON.parse(getDataFromLs);

      let orders = getDataFromLs.filter((item) => {
        if (item.id == id) {
          return item;
        }
      });

      // console.log(orders);

      let cartShow = {
        id: orders[0].id,
        description: orders[0].description,
        img: orders[0].img,
        price: orders[0].price,

        quantity: 1,
      };

      let priceShow = {
        id: orders[0].id,
        price: orders[0].price,
      };

      // console.log(cartShow);
      // arrForLs = [];
      arrForLs.push(cartShow);
      arrForPrice.push(priceShow);

      localStorage.setItem("order", JSON.stringify(arrForLs));
      localStorage.setItem("price", JSON.stringify(arrForPrice));
    }
    // console.log(arrForLs, " erro");
  }

  cartDataShowFunc();
}
function cartDataShowFunc() {
  let fetchDataFromLocalStr = localStorage.getItem("order");
  fetchDataFromLocalStr = JSON.parse(fetchDataFromLocalStr);
  // fetchDataFromLocalStr.length == 0 ||
  if (fetchDataFromLocalStr == null || fetchDataFromLocalStr.length === 0) {
    cartDataShow_tag.innerHTML = "";
  } else {
    cartDataShow_tag.innerHTML = fetchDataFromLocalStr.length;
  }
}
cartDataShowFunc();

// code for fetchand sho

// onload(displaytoCheckoutPage());
//
//
//
//
//
//
//
//
//
//
//
//
//

// code for 2

let items2 = document.getElementById("items2");
var page2 = 1;

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

async function getData2() {
  fetchlink2 = `https://json-server-mocker-projects.herokuapp.com/face_page?_page=${page2}&_limit=3`;
  const data = await fetchApi(fetchlink2);
  // console.log(data);
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  //  localStorage.setItem("cart", JSON.stringify(addToLs));
  generateData2(data);
}
function generateData2(data) {
  // console.log(data);
  let appData2 = document.getElementById("myApp_data");
  appData2.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card2 = createUserCard2(data[i], data[i].id);
    // console.log(data[i]);
    appData2.append(card2);
  }
}

function createUserCard2(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn2");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let card2 = document.createElement("div");
  card2.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card2.append(image, description__div, price_tag, rating__div, tag);

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

  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  // console.log(data);
  generateData3(data);
}

function generateData3(data) {
  // console.log(data);
  let appData3 = document.getElementById("myApp_data3");
  appData3.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card3 = createUserCard3(data[i], data[i].id);
    // console.log(data[i]);
    appData3.append(card3);
  }
}

function createUserCard3(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn3");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);

  let card3 = document.createElement("div");
  card3.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card3.append(image, description__div, price_tag, rating__div, tag);

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
  fetchlink4 = `https://json-server-mocker-projects.herokuapp.com/best?_page=${page4}&_limit=3`;
  const data = await fetchApi(fetchlink4);
  // console.log(data);
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData4(data);
}

function generateData4(data) {
  // console.log(data);
  let appData4 = document.getElementById("myApp_data4");
  appData4.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card4 = createUserCard4(data[i], data[i].id);
    // console.log(data[i]);
    appData4.append(card4);
  }
}

function createUserCard4(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn4");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);
  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);

  let card4 = document.createElement("div");
  card4.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card4.append(image, description__div, price_tag, rating__div, tag);

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
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData5(data);
}

function generateData5(data) {
  // console.log(data);
  let appData5 = document.getElementById("myApp_data5");
  appData5.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card5 = createUserCard5(data[i], data[i].id);
    // console.log(data[i]);
    appData5.append(card5);
  }
}

function createUserCard5(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn5");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);
  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  let card5 = document.createElement("div");
  card5.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card5.append(image, description__div, price_tag, rating__div, tag);

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
  fetchlink6 = `https://json-server-mocker-projects.herokuapp.com/products?_page=${page6}&_limit=3`;
  const data = await fetchApi(fetchlink6);
  // console.log(data);
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData6(data);
}

function generateData6(data) {
  // console.log(data);
  let appData6 = document.getElementById("myApp_data6");
  appData6.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card6 = createUserCard6(data[i], data[i].id);
    // console.log(data[i]);
    appData6.append(card6);
  }
}

function createUserCard6(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn6");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);

  let card6 = document.createElement("div");
  card6.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card6.append(image, description__div, price_tag, rating__div, tag);

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
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData7(data);
}

function generateData7(data) {
  // console.log(data);
  let appData7 = document.getElementById("myApp_data7");
  appData7.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card7 = createUserCard7(data[i], data[i].id);
    // console.log(data[i]);
    appData7.append(card7);
  }
}

function createUserCard7(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn7");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let card7 = document.createElement("div");
  card7.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card7.append(image, description__div, price_tag, rating__div, tag);

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
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  // console.log(data);
  generateData8(data);
}

function generateData8(data) {
  // console.log(data);
  let appData8 = document.getElementById("myApp_data8");
  appData8.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card8 = createUserCard8(data[i], data[i].id);
    // console.log(data[i]);
    appData8.append(card8);
  }
}

function createUserCard8(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn8");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let card8 = document.createElement("div");
  card8.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card8.append(image, description__div, price_tag, rating__div, tag);

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
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData9(data);
}

function generateData9(data) {
  // console.log(data);
  let appData9 = document.getElementById("myApp_data9");
  appData9.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card9 = createUserCard9(data[i], data[i].id);
    // console.log(data[i]);
    appData9.append(card9);
  }
}

function createUserCard9(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn9");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

  let card9 = document.createElement("div");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "Best Seller";
  tag.append(tagname);
  card9.classList.add("card");
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card9.append(image, description__div, price_tag, rating__div, tag);

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
  let getCartlsdata = localStorage.getItem("cart");
  getCartlsdata = JSON.parse(getCartlsdata);
  //  let addToLs = data;

  for (let i = 0; i < data.length; i++) {
    getCartlsdata.push(data[i]);
  }
  // console.log(getCartlsdata, "singh");
  localStorage.setItem("cart", JSON.stringify(getCartlsdata));
  generateData10(data);
}

function generateData10(data) {
  // console.log(data);
  let appData10 = document.getElementById("myApp_data10");
  appData10.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card10 = createUserCard10(data[i], data[i].id);
    // console.log(data[i]);

    appData10.append(card10);
  }
}

function createUserCard10(item, id) {
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
  add_cart_btn.setAttribute("id", "buy_btn10");
  add_cart_btn.setAttribute("onclick", `showData(${id})`);

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
  // console.log(value);
  let search_result__display = document.querySelector("#search_result");
  search_result__display.innerHTML = "";

  fetch(`https://json-server-mocker-projects.herokuapp.com/baby?q=${value}`)
    .then((res) => res.json())
    .then((res) => {
      search_result__display.innerHTML = res;
      // console.log(res);
      generateData11(res);
    });
}

function generateData11(data) {
  // console.log(data);
  let search_result = document.getElementById("search_result");
  search_result.innerHTML = "";
  let len = data.length;
  for (let i = 0; i < len; i++) {
    let card11 = createUserCard11(data[i]);
    // console.log(data[i]);
    search_result.append(card11);
  }
}

function createUserCard11(item) {
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

  let card11 = document.createElement("div");
  card11.classList.add("card");

  let tag = document.createElement("div");
  tag.className = "tagsname";

  let tagname = document.createElement("div");
  tagname.className = "tag";
  tagname.textContent = "New Launch";
  tag.append(tagname);
  rating__span.append(icon);
  rating__div.append(rating__span, add_cart_btn);
  card11.append(image, description__div, price_tag, rating__div, tag);

  return card11;
}

// code for routing the page

let best__seller__button = document
  .querySelector("#best__seller__btn")
  .addEventListener("click", redirectToBabyPage);

function redirectToBabyPage() {
  return Promise.resolve().then(() => {
    location = "../baby/index.html";
  });
}

let best__deal__button = document
  .querySelector("#best__deal__btn")
  .addEventListener("click", redirectToDealPage);

function redirectToDealPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/beauty_page.html";
  });
}

let hair__button = document
  .querySelector("#hair__btn")
  .addEventListener("click", redirectToHairPage);

function redirectToHairPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/hair_page.html";
  });
}

let skin__button = document
  .querySelector("#skin__btn")
  .addEventListener("click", redirectToSkinPage);

function redirectToSkinPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/face_Page.html";
  });
}

let baby__button = document
  .querySelector("#baby__btn")
  .addEventListener("click", redirectToBabPage);

function redirectToBabPage() {
  return Promise.resolve().then(() => {
    location = "../baby/index.html";
  });
}

let vitamin__button = document
  .querySelector("#vitamin")
  .addEventListener("click", redirectToVitaminPage);

function redirectToVitaminPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/gift_packs_page.html";
  });
}

let onion__button = document
  .querySelector("#onion__btn")
  .addEventListener("click", redirectToOnionPage);

function redirectToOnionPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/face_page.html";
  });
}

let ubtan__button = document
  .querySelector("#ubtan__btn")
  .addEventListener("click", redirectToUbtanPage);

function redirectToUbtanPage() {
  return Promise.resolve().then(() => {
    location = "../baby/body.html";
  });
}

let wintercare__button = document
  .querySelector("#wintercare")
  .addEventListener("click", redirectToWintercarePage);

function redirectToWintercarePage() {
  return Promise.resolve().then(() => {
    location = "../beauty/face_page.html";
  });
}

let hot_deal__button = document
  .querySelector("#hot_deal")
  .addEventListener("click", redirectToHot_dealPage);

function redirectToHot_dealPage() {
  return Promise.resolve().then(() => {
    location = "../beauty/hair_page.html";
  });
}

document
  .getElementById("click_cartbtn")
  .addEventListener("click", redirectToclick_cartbtnPage);

function redirectToclick_cartbtnPage() {
  return Promise.resolve().then(() => {
    location = "./checkout.html";
  });
}

document.getElementById("login_btn").addEventListener("click", redirectologin);

function redirectologin() {
  return Promise.resolve().then(() => {
    location = "../footer/login.html";
  });
}
