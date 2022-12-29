
function homePage(){{
    const heading=document.createElement("h1")
    let cards=[]
    cards[0]=document.createElement("div")
    cards[1]=document.createElement("div")
    cards[2]=document.createElement("div")
    heading.textContent="My Restaurant"
    cards[0].textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio necessitatibus, eum et fugiat quibusdam non deleniti. Qui id porro totam vero veniam quo, explicabo autem impedit quos dicta veritatis?"
    cards[1].textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio necessitatibus, eum et fugiat quibusdam non deleniti. Qui id porro totam vero veniam quo, explicabo autem impedit quos dicta veritatis?"
    cards[2].textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio necessitatibus, eum et fugiat quibusdam non deleniti. Qui id porro totam vero veniam quo, explicabo autem impedit quos dicta veritatis?"
    
    let renderHome=function (content){
        content.innerHTML=""
        content.appendChild(heading)
        for(let i=0;i<cards.length;i++){
            content.appendChild(cards[i])
        }
    }
    return {renderHome}
}}


export default homePage