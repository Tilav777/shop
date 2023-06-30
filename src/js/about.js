async function getElbtn() {
    await getData('../json/cards.json')
    const mBtn = document.querySelectorAll('.minus-btn')
    const pBtn = document.querySelectorAll('.plus-btn')

    mBtn.forEach((item)=> {
        item.addEventListener('click', (e)=> {
            let elCard = e.target.parentElement.parentElement.parentElement.parentElement
            basket.innerHTML += elCard
        })
    })
}

export default getElbtn