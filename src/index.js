import _ from 'lodash';
import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';

const home=document.querySelector(".home")
const menu=document.querySelector(".menu")
const contact=document.querySelector(".contact")
const content=document.querySelector(".content")
let homePg=homePage()
homePg.renderHome(content)
let menuPg=menuPage()
let contactPg=contactPage()

home.addEventListener("click",function(){
    homePg.renderHome(content)
})
menu.addEventListener("click",function(){
    menuPg.renderMenu(content)
})
contact.addEventListener("click",function(){
    contactPg.renderContact(content)
})
