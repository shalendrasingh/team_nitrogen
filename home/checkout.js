let cartDataShow_tag = document.getElementById("cartDataShow_tag");
// // cartDataShow_tag.innerHTML;

function cartDataShowFunc() {
  let fetchDataFromLocalStr = localStorage.getItem("order");
  fetchDataFromLocalStr = JSON.parse(fetchDataFromLocalStr);

  if (fetchDataFromLocalStr.length == 0) {
    cartDataShow_tag.innerHTML = "";
  } else {
    cartDataShow_tag.innerHTML = fetchDataFromLocalStr.length;
  }
}

cartDataShowFunc();
function displaytoCheckoutPage() {
  let dataComesFromLs = localStorage.getItem("order");
  dataComesFromLs = JSON.parse(dataComesFromLs);
  console.log(dataComesFromLs + "aa gay");

  if (dataComesFromLs !== null) {
    printDataToCheckoutPage(dataComesFromLs);
  } else {
    alert("cart is empty add some thig to cart");
  }

  console.log(dataComesFromLs);
}

let purched_item = document.getElementById("purched_item_div");
console.log(purched_item, " puchseitem");
function printDataToCheckoutPage(data) {
  //   console.log(data);
  // purched_item = document.querySelector("#purched_item_div");
  // console.log(purched_item);
  // .innerHTML = data[0].id;
  // let cartCard;
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
    iconDel.className = "fa fa-trash";

    buttonDiv.append(minusSpan, itemSpan, plusSpan);
    buttonMainDiv.append(buttonDiv, iconDel);
    secondDiv.append(pDesc, priceTag, buttonMainDiv);
    imgDiv.append(imgTag);
    cartCard.append(imgDiv, secondDiv);
    // console.log(cartCard);
    // console.log(purched_item);

    // document.getElementById("purched_item_div").innerHTML = cartCard;
    console.log(purched_item);

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
  console.log(retPrice);

  let final = addPlusItem.filter((item) => {
    if (item.id === id) {
      return (item.price += retPrice);
    }
  });

  localStorage.setItem("order", JSON.stringify(final));

  window.location.reload();
}

function minusItem(id) {
  //   console.log(id);
  let dataComesFromLs = localStorage.getItem("order");
  dataComesFromLs = JSON.parse(dataComesFromLs);

  let addPlusItem = dataComesFromLs.filter((item) => {
    if (item.id === id) {
      //   item.price = Number(item.price) - Number(item.price);
      //   item.quantity = item.quantity - 1;
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
  console.log(retPrice);

  let final = addPlusItem.filter((item) => {
    if (item.id === id) {
      return (item.price -= retPrice);
    }
  });

  localStorage.setItem("order", JSON.stringify(final));

  window.location.reload();
}

window.addEventListener("load", () => {
  displaytoCheckoutPage();
});

// ls ke orders se item.price + karna reduce karna hai fir total me dekhana hai
