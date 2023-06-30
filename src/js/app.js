const shopBtn = document.querySelector('.shopping')
const cards = document.querySelector('.cards')
const elLoader = document.querySelector('.loader')

const basket = document.querySelector('.basket')

console.log(document);


let purchase = 0;


function shopBtnClick() {
    location.href = 'about.html'
}

shopBtn.addEventListener('click', shopBtnClick)



async function getData(API) {
    elLoader.classList.remove('hidden')
    const res = await fetch(API)
    const datas = await res.json()
    elLoader.classList.add('hidden')
    await datas.forEach((data, i)=> {
        let shoppingData = `
        <div class="card">
        <img src="${data.img}" alt="img">
        <div class="card__title">
            <h2>${data.name}</h2>
            <p>${data.desc}</p>
            <div class="card__footer">
                <p class="price">$ ${data.price}</p>
                <div class="card__cound">
                    <button class="minus-btn">-</button>
                    <span>0</span>
                    <button class="plus-btn">+</button>
                </div>
            </div>
        </div>
        </div>
        `
        cards.innerHTML += shoppingData
        
    })


}



async function getElbtn() {
    await getData('../json/cards.json')
    const mBtn = document.querySelectorAll('.minus-btn')
    const pBtn = document.querySelectorAll('.plus-btn')

    mBtn.forEach((item)=> {
        item.addEventListener('click', (e)=> {
            let elCard = e.target.parentElement.parentElement.parentElement.parentElement
            
        })
    })
}

getElbtn()