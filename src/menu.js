function menuPage(){
    const heading=document.createElement("h1")
    let cards=[]
    cards[0]=document.createElement("div")
    cards[1]=document.createElement("div")
    cards[2]=document.createElement("div")
    heading.textContent="My Menu"
    cards[0].textContent="Pav Bhaji"
    cards[1].textContent="Chaat"
    cards[2].textContent="Rasogulla"
    let images=[]
    images[0]=document.createElement("img")
    images[1]=document.createElement("img")
    images[2]=document.createElement("img")
    images[0].setAttribute("src","./pav-bhaji.jpg")
    images[1].setAttribute("src","./chaat.jpg")
    images[2].setAttribute("src","./gulab-jamun.jpg")

    let renderMenu=function (content){
        content.innerHTML=""
        content.appendChild(heading)
        for(let i=0;i<cards.length;i++){
            content.appendChild(cards[i])
            cards[i].appendChild(images[i])
        }
    }
    return {renderMenu}
}
export default menuPage