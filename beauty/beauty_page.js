window.addEventListener('load', function(){
    showData()
})



 document.getElementById('all').addEventListener('click',allFilter)
 document.getElementById('hair_page').addEventListener('click',hairFilter)
let face_btn = document.getElementById('face_page').addEventListener('click',faceFilter)
let body_btn = document.getElementById('body').addEventListener('click',bodyFilter)

function allFilter(){
    // let url = "https://nitrogen-project.herokuapp.com/beauty_page"
    fetch(`https://nitrogen-project.herokuapp.com/beauty_page`)
    .then((res) => res.json())
    .then((res) => displayData(res))
}

function hairFilter(){
    // console.log("objects")    
    fetch(`https://nitrogen-project.herokuapp.com/beauty_page?category=hair`)
    .then((res) => res.json())
    .then((res) => {
        displayData(res)
        console.log(res)
    })
    .catch((err) => console.log(err + "error on hair"))

}
function faceFilter(){
    // let url = `https://nitrogen-project.herokuapp.com/beauty_page?category=hair`
    fetch(`https://nitrogen-project.herokuapp.com/beauty_page?category=face`)
    .then(res => res.json())
    .then(res => {
        displayData(res)
        console.log(res)
    })

}
function bodyFilter(){
    // let url = `https://nitrogen-project.herokuapp.com/beauty_page?category=hair`
    fetch(`https://nitrogen-project.herokuapp.com/beauty_page?category=body`)
    .then(res => res.json())
    .then(res => displayData(res))

}

function showData(){
    // let url = `https://nitrogen-project.herokuapp.com/beauty_page`
    fetch(`https://nitrogen-project.herokuapp.com/beauty_page`)
    .then(res => res.json())
    .then(res => displayData(res))
}

function displayData(data){
    let product = ""

    for( i in data){
        product +=
         `<div id = "cards">
         <img src="${data[i].img}"></img>
         <h5>${data[i].desc}</h5>
         <h4>${data[i].price}</h4>
         <div class="row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div>
        </div>`
        document.getElementById('card').innerHTML = product
    } 
}



// function displayData(data){
//     let cards = document.getElementById('cards')
    
//     for(i in data){
//         let card = document.createElement('div')
//         card.setAttribute('class', 'card')
//         cards.append(card)

//         let img = document.createElement('img')
//         img.src = data[i].img
//         img.setAttribute('class', 'image')
//         card.append(img)

//         let desc = document.createElement('p')
//         desc.setAttribute('class', 'desc')
//         desc.textContent = data[i].desc
//         card.append(desc)

//         let price = document.createElement('p')
//         price.setAttribute('class', 'price')
//         price.textContent = data[i].price
//         card.append(price)

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
//         cart_btn.textContent="ADD TO CART"
//         bottom_div.append(cart_btn)
        

//     }
// }
