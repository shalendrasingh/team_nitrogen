window.addEventListener('load', function() {
    getProductFromApi()
})


let all = document.querySelector("#all").addEventListener('click',allFilter)

let lotion = document.getElementById("lotion").addEventListener('click',lotionFilter)

let butter = document.querySelector("#butter").addEventListener('click',butterFilter)

function lotionFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/body?category=lotion`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log(res)
    })
    .catch((err) => console.log(err))
}

function butterFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/body?category=butter`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function allFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/body`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function getProductFromApi() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/body`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        printData(res)
    })
    .catch((err) => console.log(err))
}


function printData(data) {
    let div = ""
    for(i in data) {
        div += `<div id = "cards">
        <img src = ${data[i].img}></img>
        <h5>${data[i].description}</h5>
        <h4>${data[i].amount}</h4>
        <div class = "row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div>
        </div>`
        document.getElementById("card").innerHTML = div
    }
}



// function getData() {
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://localhost:3000/body`)
//     xhr.send()

//     xhr.onload = function() {

//         var data = JSON.parse(this.responseText)

//         var img = data.img
//         var description = data.description
//         var amount = data.amount
//         var rating = data.rating

//         console.log(img, description, amount, rating)

//         if(this.status === 200) {
//             var products = ``
//             for(var i = 0; i < data.length; i++) {

//                 products += `
//                 <div id = "cards">
//                 <img src = ${data[i].img}></img>
//                 <h5>${data[i].description}</h5>
//                 <h4>${data[i].amount}</h4>
//                 <div class = "row">
//                     <p>${data[i].rating}<i class="fa fa-star" aria-hidden="true"></p>
//                     <button>ADD TO CART</button>
//                  </div>
//                 </div>`

//             }
//             // createCard(response)
//         }
//         document.getElementById("card").innerHTML = products
//     }
// }











// function createCard(data) {
//     let cards = document.getElementById("cards")
    
//     for(i in data) {
//         let div = document.createElement('div')
//         div.setAttribute('class', card)
//         cards.append(div)

//         let img = document.createElement('img')
//         img.src = data[i].img
//         img.setAttribute('class', 'image')
//         card.append(img)
        
//         let description = document.createElement('p')
//         description.setAttribute('class', 'description')
//         description.textContent = data[i].description
//         card.append(description)

//         let amount = document.createElement('p')
//         amount.setAttribute('class', 'amount')
//         amount.textContent = data[i].amount
//         card.append(amount)

//         let bottom_div = document.createElement('div')
//         bottom_div.setAttribute('class', 'bottom_div')
//         card.append(bottom_div)

//         let div = document.createElement('div')
//         div.setAttribute('class', 'div')
//         bottom_div.append(div)

//         let rating = document.createElement('p')
//         rating.setAttribute('class', 'rating')
//         rating.textContent = data[i].rating
//         div.append(rating)

//         let rating_img = document.createElement('img')
//         rating_img.setAttribute('class', 'rating_img')
//         rating_img.src = data[i].rating_img
//         div.append(rating_img)

//         let cart_btn = document.createElement('button')
//         cart_btn.setAttribute('class', 'cart_btn')
//         cart_btn.textContent = "ADD TO CART"
//         bottom_div.append(cart_btn)
//     }
// }