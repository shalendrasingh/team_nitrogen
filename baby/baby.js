window.addEventListener('load', function() {
    getProductFromApi()
})

let all = document.querySelector("#all").addEventListener('click',allFilter)

let diaper = document.getElementById("diaper").addEventListener('click',diaperFilter)

let shampoo = document.querySelector("#shampoo").addEventListener('click',shampooFilter)

let lotion = document.querySelector("#lotion").addEventListener('click',lotionFilter)

let oil = document.querySelector("#oil").addEventListener('click',oilFilter)

let powder = document.querySelector("#powder").addEventListener('click',powderFilter)

function diaperFilter() {

    fetch(`https://ancient-woodland-11686.herokuapp.com/baby?category=diaper`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function shampooFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby?category=shampoo`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function lotionFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby?category=lotion`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function oilFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby?category=oil`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function powderFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby?category=powder`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function allFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function getProductFromApi() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby`)
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
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






// var xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://localhost:3000/baby?category=shampoo`)
//     xhr.send()

//     xhr.onload = function() {

//         var data = JSON.parse(this.responseText)

//         var img = data.img
//         var description = data.description
//         var amount = data.amount
//         var rating = data.rating

//         console.log(img, description, amount, rating)

//     if(this.status === 200) {
//         console.log(data)
//         var products = ""
//         for(var i = 0; i < data.length; i++) {
            
//             products += `
//             <div id = "cards">
//             <img src = ${data[i].img}></img>
//             <h5>${data[i].description}</h5>
//             <h4>${data[i].amount}</h4>
//             <div class = "row">
//                 <p>${data[i].rating}<i class="fa fa-star"></i></p>
//                 <button>ADD TO CART</button>
//              </div>
//             </div>`

//         }
//     }
//     document.getElementById("card").innerHTML = products

























// function createCard({img, description, amount, rating}) {
//     let card = document.getElementById("card")

//     let div = document.createElement('div')
//     div.setAttribute('class', cards)

//     let image = document.createElement('img')
//     image.src = img
//     div.append(image)

//     let desc = document.createElement('h5')
//     desc.textContent = description
//     div.append(desc)

//     let totalAmount = document.createElement('h4')
//     totalAmount.textContent = amount
//     div.append(totalAmount)

//     let ratings = document.createElement('h5')
//     ratings.textContent = rating
//     div.append(ratings)

//     card.append(div)
// }
