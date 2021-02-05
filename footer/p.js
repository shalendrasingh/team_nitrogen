let arrayOfNumber = [9876543210,8563912423,1234567890,9638527410]
window.addEventListener('load',function(){
    let btnInput = document.getElementById('loginBtn').addEventListener('click',goPage)
})

function goPage(){
    let inpValue = document.getElementById('mobileNoEnter').value
    inpValue = Number(inpValue)
    // console.log(inpValue)
    let flag = false
    for(let i=0;i<arrayOfNumber.length;i++){
        if(inpValue===arrayOfNumber[i]){
            flag = true
        }
    }
    if(flag===true){
        let hp = document.getElementById('home').href
        // alert(hp)
        location = 'home.html'
    }else{
        alert('Enter Valid Mobile Number or Check again')
    }
}
