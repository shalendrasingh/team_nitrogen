window.addEventListener('load', function() {
    getProductFromApi()
})

let all = document.querySelector("#all").addEventListener('click',allFilter)

let hair = document.getElementById("hair").addEventListener('click',hairFilter)

let face = document.querySelector("#face").addEventListener('click',faceFilter)

let body = document.querySelector("#body").addEventListener('click',bodyFilter)

let baby = document.querySelector("#baby").addEventListener('click',babyFilter)


function hairFilter() {

    fetch(`https://nitrogen-project.herokuapp.com/hair_page`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function faceFilter() {
    fetch(`https://nitrogen-project.herokuapp.com/face_page`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function bodyFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/body`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function babyFilter() {
    fetch(`https://ancient-woodland-11686.herokuapp.com/baby`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function allFilter() {
    fetch(`https://nitrogen-project.herokuapp.com/hair_page`) 
    .then((res) => res.json())
    .then((res) => {
        printData(res)
        console.log("object")
    })
    .catch((err) => console.log(err))
}

function getProductFromApi() {
    fetch(`https://nitrogen-project.herokuapp.com/hair_page`)
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
        <h5>${data[i].desc}</h5>
        <h4>${data[i].price}</h4>
        <div class = "row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div>
        </div>`
        document.getElementById("card").innerHTML = div
    }
}

