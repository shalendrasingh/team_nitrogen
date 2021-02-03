window.addEventListener('load', execute)

let btn = document.getElementById('hair')
 btn.addEventListener('click', showData)

function execute(){
 showData()
}

function showData(){
    let url = "https://nitrogen-project.herokuapp.com/hair_page"
    fetch(url)
    .then(res => res.json())
    .then(res => displayData(res))
}

function displayData(data){
    let cards = document.getElementById('cards')
    
    for(i in data){
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        cards.append(card)

        let img = document.createElement('img')
        img.src = data[i].img
        img.setAttribute('class', 'image')
        card.append(img)

        let desc = document.createElement('p')
        desc.setAttribute('class', 'desc')
        desc.textContent = data[i].desc
        card.append(desc)

        let price = document.createElement('p')
        price.setAttribute('class', 'price')
        price.textContent = data[i].price
        card.append(price)

        let bottom_div = document.createElement('div')
        bottom_div.setAttribute('class', 'bottom_div')
        card.append(bottom_div)

        let div = document.createElement('div')
        div.setAttribute('class', 'div')
        bottom_div.append(div)

        let rating = document.createElement('p')
        rating.setAttribute('class', 'rating')
        rating.textContent = data[i].rating
        div.append(rating)

        let rating_img = document.createElement('img')
        rating_img.setAttribute('class', 'rating_img')
        rating_img.src = data[i].rating_img
        div.append(rating_img)

        let cart_btn = document.createElement('button')
        cart_btn.setAttribute('class', 'cart_btn')
        cart_btn.textContent="ADD TO CART"
        bottom_div.append(cart_btn)

    }
}