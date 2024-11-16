import { lists } from "./storage.js";
import UIUpdate from "./UiUpdate.js";

{/* <li class="list-items">
                    <h4>Item 1</h4>
                    <button class="rmv-btn"><img class="icon-img" src="./assets/icons/11536872261558965374.svg" alt="delete"></button> 
                </li> */}


const input = document.querySelector('#input-feild');
const button = document.querySelector('#btn');

button.addEventListener('click', addTask);


function addTask(){
    if(input.value){
        const li = {
            id: lists.length + 1,
            value: input.value,
        }

        lists.push(li)
        input.value = '';
    }

    UIUpdate();
    
}


const ulList = document.getElementById('ul-lists');

ulList.addEventListener('click', function (e){
    const li = e.target.closest('.rmv-btn').parentNode;
    const itemID = Number(li.getAttribute('data-id'));
    for(const idx in lists){
        if(lists[idx].id === itemID){
            lists.splice(idx, 1)
        }
    }
    UIUpdate();
})