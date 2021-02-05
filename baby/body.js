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
        <h5>${data[i].desc}</h5>
        <h4>₹${data[i].price}</h4>
        <div class = "row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div>
        </div>`
        document.getElementById("card").innerHTML = div
    }
}