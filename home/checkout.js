let cartDataShow_tag = document.getElementById("cartDataShow_tag");

function cartDataShowFunc() {
  let fetchDataFromLocalStr = localStorage.getItem("order");
  fetchDataFromLocalStr = JSON.parse(fetchDataFromLocalStr);

  if (fetchDataFromLocalStr.length === 0) {
    cartDataShow_tag.innerHTML = "";
  } else {
    cartDataShow_tag.innerHTML = fetchDataFromLocalStr.length;
  }
}

cartDataShowFunc();
function displaytoCheckoutPage() {
  let dataComesFromLs = localStorage.getItem("order");
  dataComesFromLs = JSON.parse(dataComesFromLs);
  // console.log(dataComesFromLs + "aa gay");

  if (dataComesFromLs !== null) {
    printDataToCheckoutPage(dataComesFromLs);
  } else {
    alert("cart is empty add some thig to cart");
  }

  // console.log(dataComesFromLs);
}

let purched_item = document.getElementById("purched_item_div");
// console.log(purched_item, " puchseitem");
function printDataToCheckoutPage(data) {
  for (i in data) {
    let cartCard = document.createElement("div");
    cartCard.className = "cartCard";

    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";

    let imgTag = document.createElement("img");
    imgTag.src = data[i].img;
    imgTag.className = "imgTag";

    let secondDiv = document.createElement("div");
    secondDiv.className = "secondDiv";

    let pDesc = document.createElement("p");
    pDesc.textContent = data[i].description;
    pDesc.className = "pDesc";

    let priceTag = document.createElement("h4");
    priceTag.className = "priceTag";
    priceTag.textContent = "₹ " + data[i].price;

    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button___div";

    let minusSpan = document.createElement("button");
    minusSpan.className = "minusSpan";
    minusSpan.textContent = " -- ";
    minusSpan.setAttribute("onclick", `minusItem(${data[i].id})`);

    let itemSpan = document.createElement("button");
    itemSpan.className = "itemSpan";
    itemSpan.textContent = data[i].quantity;

    let plusSpan = document.createElement("button");
    plusSpan.className = "plusSpan";
    plusSpan.textContent = " + ";
    plusSpan.setAttribute("onclick", `plusItem(${data[i].id})`);

    let buttonMainDiv = document.createElement("div");
    buttonMainDiv.className = "buttonMainDiv";
    let iconDel = document.createElement("i");
    iconDel.className = "fa fa-tras delete";
    iconDel.setAttribute("onclick", `deleteData(${data[i].id})`);

    buttonDiv.append(minusSpan, itemSpan, plusSpan);
    buttonMainDiv.append(buttonDiv, iconDel);
    secondDiv.append(pDesc, priceTag, buttonMainDiv);
    imgDiv.append(imgTag);
    cartCard.append(imgDiv, secondDiv);
    // console.log(purched_item);

    purched_item.append(cartCard);
  }
}

function plusItem(id) {
  let dataComesFromLs = localStorage.getItem("order");
  dataComesFromLs = JSON.parse(dataComesFromLs);

  let addPlusItem = dataComesFromLs.filter((item) => {
    if (item.id === id) {
      return (item.quantity = item.quantity + 1);
    } else {
      return item;
    }
  });
  let priceComesFromLs = localStorage.getItem("price");
  priceComesFromLs = JSON.parse(priceComesFromLs);
  let retPrice;
  let addPlusIncrese = priceComesFromLs.filter((item) => {
    if (item.id === id) {
      retPrice = item.price;
      return;
    }
  });
  // console.log(retPrice);

  let final = addPlusItem.filter((item) => {
    if (item.id === id) {
      return (item.price += retPrice);
    } else {
      return item;
    }
  });

  localStorage.setItem("order", JSON.stringify(final));

  window.location.reload();
}

function minusItem(id) {
  let dataComesFromLs = localStorage.getItem("order");
  dataComesFromLs = JSON.parse(dataComesFromLs);

  let addPlusItem = dataComesFromLs.filter((item) => {
    if (item.id === id) {
      return (item.quantity = item.quantity - 1);
    } else {
      return item;
    }
  });

  let priceComesFromLs = localStorage.getItem("price");
  priceComesFromLs = JSON.parse(priceComesFromLs);
  let retPrice;
  let addPlusIncrese = priceComesFromLs.filter((item) => {
    if (item.id === id) {
      retPrice = item.price;
      return;
    }
  });
  // console.log(retPrice);

  let final = addPlusItem.filter((item) => {
    if (item.id === id) {
      return (item.price -= retPrice);
    } else {
      return item;
    }
  });

  localStorage.setItem("order", JSON.stringify(final));

  window.location.reload();
}

window.addEventListener("load", () => {
  displaytoCheckoutPage();
});

function showTotalPrice() {
  let select = document.getElementById("total_order_price");
  select.innerHTML = "";
  let getPriceFromLsToshow = localStorage.getItem("order");
  getPriceFromLsToshow = JSON.parse(getPriceFromLsToshow);
  let amntP = getPriceFromLsToshow.map((item) => {
    return item.price;
  });

  let finalTotalPrice = amntP.reduce((a, b) => {
    return a + b;
  });

  select.innerHTML = "₹ " + finalTotalPrice;

  // let reduceFunc = getPriceFromLsToshow.filter((item) => {
  //   return item.price;
  // });
  // console.log(reduceFunc);
}

showTotalPrice();

let coupenInputValue = document.getElementById("coupenInput");
coupenInputValue.value;
// console.log(coupenInputValue);

let applyButton = document
  .getElementById("applyBtn")
  .addEventListener("click", applyDiscountOnitem);

let getPriceFromLsTos = localStorage.getItem("order");
getPriceFromLsTos = JSON.parse(getPriceFromLsTos);
let amnt = getPriceFromLsTos.map((item) => {
  return item.price;
});

let finalTotalPrice = amnt.reduce((a, b) => {
  return a + b;
});

// console.log(finalTotalPrice);
document.getElementById("grand__total").innerHTML = "₹ " + finalTotalPrice;

function applyDiscountOnitem() {
  let inputDisValue = coupenInputValue.value;

  // console.log(amnt);
  if (inputDisValue === "OFF40") {
    document.getElementById("itm_dis_amnt").innerHTML =
      "₹ " + (finalTotalPrice - 40);
    // document.getElementById("shipping_amt").textContent=am;
    document.getElementById("coup_dis_amnt").innerHTML = "₹ " + 40;
    document.getElementById("grand__total").innerHTML = "₹ " + finalTotalPrice;
  } else {
    alert("Invalid Coupon");
  }
}
// applyDiscountOnitem();

let obj = [];

function checkError() {
  let user = document.getElementById("username").value;
  let lastN = document.getElementById("lastname").value;
  let mob = document.getElementById("mobile").value;
  let emailU = document.getElementById("email").value;
  let pin = document.getElementById("pincode").value;
  let cit = document.getElementById("city").value;
  let stat = document.getElementById("state").value;
  let add = document.getElementById("address").value;
  let add2 = document.getElementById("address2").value;

  // console.log(user, lastN, mob, emailU, pin, cit, stat, add, add2);

  payload = {
    user,
    lastN,
    mob,
    emailU,
    pin,
    cit,
    stat,
    add,
    add2,
  };

  if (
    user === "" ||
    lastN === "" ||
    mob === "" ||
    emailU === "" ||
    pin === "" ||
    cit === "" ||
    stat === "" ||
    add === "" ||
    add2 === ""
  ) {
    alert("please fill detail * field");
  } else {
    obj.push(payload);

    localStorage.clear();
    localStorage.setItem("userDetails", JSON.stringify(obj));

    // window.location.reload();
    // window.location = "index.html";
  }
}

// console.log(obj);
