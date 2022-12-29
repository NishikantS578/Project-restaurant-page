
function contactPage(){
    const heading=document.createElement("h1")
    let cards=[]
    cards[0]=document.createElement("div")
    cards[1]=document.createElement("div")
    cards[2]=document.createElement("div")
    heading.textContent="Admins"
    cards[0].innerText=`Chotu
    email :chotu@email.com`
    cards[1].innerText=`Golu
    email :golu@email.com`
    cards[2].innerText=`Bholu
    email :bholu@email.com`


    let renderContact=function (content){
        content.innerHTML=""
        content.appendChild(heading)
        for(let i=0;i<cards.length;i++){
            content.appendChild(cards[i])
        }
        
    }
    return {renderContact}
}

export default contactPage