document.addEventListener("DOMContentLoaded", () => {

    const appPage = document.querySelector('.app')


//IMAGE FOR POP UP//
const americano = document.querySelector('.americano')
const cappuccino = document.querySelector('.cappuccino')
const macchiato = document.querySelector('.macchiato')
const flatwhite = document.querySelector('.flatwhite')
const frappuccino = document.querySelector('.frappuccino')
const icedcoffee = document.querySelector('.icedcoffee')
const coldbrew = document.querySelector('.coldbrew')
const greentea = document.querySelector('.greentea')
const blacktea = document.querySelector('.blacktea')
const croissant = document.querySelector('.croissant')
const muffin = document.querySelector('.muffin')

//POPUP//
const blackamericanopop =document.querySelector('.blackamericanopop')
const cappuccinopop =document.querySelector('.cappuccinopop')
const macchiatopop =document.querySelector('.macchiatopop')
const flatwhitepop =document.querySelector('.flatwhitepop')
const frappuccinopop =document.querySelector('.frappuccinopop')
const icedcoffepop =document.querySelector('.icedcoffepop')
const coldbrewpop =document.querySelector('.coldbrewpop')
const greenteapop =document.querySelector('.greenteapop')
const blackteapop =document.querySelector('.blackteapop')
const croissantpop =document.querySelector('.croissantpop')
const muffinpop =document.querySelector('.muffinpop')



    // POP UPs///  
    americano.addEventListener("click", ()=>{
        blackamericanopop.style.display="block"
        emptyCart.style.display="none"
       appPage.classList.add("hidden")
         
})
    
cappuccino.addEventListener('click', ()=>{
    cappuccinopop.style.display="block"
    emptyCart.style.display="none"
    appPage.classList.add("hidden")
})
    
macchiato.addEventListener('click', ()=>{
    macchiatopop.style.display="block"
    
    appPage.classList.add("hidden")
    
})

flatwhite.addEventListener('click', ()=>{
    flatwhitepop.style.display="block"
    appPage.classList.add("hidden")
    
})

frappuccino.addEventListener('click', ()=>{
    frappuccinopop.style.display="block"
    appPage.classList.add("hidden")
    
})

icedcoffee.addEventListener('click', ()=>{
    icedcoffepop.style.display="block"
    appPage.classList.add("hidden")
    
})

coldbrew.addEventListener('click', ()=>{
    coldbrewpop.style.display="block"
    appPage.classList.add("hidden")
    
})


greentea.addEventListener('click', ()=>{
    greenteapop.style.display="block"
    appPage.classList.add("hidden")
    
})


blacktea.addEventListener('click', ()=>{
    blackteapop.style.display="block"
    appPage.classList.add("hidden")
    
})


croissant.addEventListener('click', ()=>{
    croissantpop.style.display="block"
    appPage.classList.add("hidden")
    
})

muffin.addEventListener('click', ()=>{
    muffinpop.style.display="block"
    appPage.classList.add("hidden")
    
})



const popDivs = document.querySelectorAll('.pop-content > div');
function hideAllPopDivs() {
    popDivs.forEach(popDiv => {
        popDiv.style.display = "none";
    });
}

// CART ITEMS DISPLLAY ///
const cartNumberElement = document.querySelector(".cartnumber");
const cartBasket= document.querySelector(".cartbasket")
const orderItem = document.querySelector('.order')
const emptyCart = document.querySelector('.empty-cart')
cartBasket.addEventListener("click", () => {
    hideAllPopDivs();
    if (parseInt(cartNumberElement.textContent) === 0 || cartNumberElement.textContent === "") {
        appPage.style.display = "none";
        emptyCart.style.display = "block";
        orderItem.style.display = "none";
    } else {
        appPage.style.display = "none";
        emptyCart.style.display = "none";
        orderItem.style.display = "block";
    }
});
 /// BACK BUTTON HERE 
 document.querySelectorAll(".backbtn").forEach(button => {
    button.addEventListener("click", () => {
        const popup = button.closest(".blackamericanopop, .cappuccinopop, .macchiatopop");
        popup.classList.add("hidden");
        appPage.classList.remove("hidden");
    });
});



let topItems = 0;
 ///INNNER ADDD BUTTON///
document.querySelectorAll('#add-to-cart').forEach(btns => {
    btns.addEventListener('click', () => {
        document.querySelector('.order').style.display = "block";
        const popup = btns.closest(".pop-content > div"); // Correctly targets the parent popup div
        popup.style.display = "none"; // Hide the current popup

        const name = popup.querySelector(".name-popup").textContent;
        const price = parseFloat(popup.querySelector(".pricetag").textContent.replace('$', ''));

        if (items[name]) {
            items[name].count += 1;
            items[name].totalPrice += price;
        } else {
            items[name] = {
                price: price,
                count: 1,
                totalPrice: price
            };
        }
        updateOrderRocky();
    });
});
////INNER BUTTON ENDS HERE ////////////////

    //ADD BUTTON  STARTS HERE ///////////////////////////////
    const items = {};
    document.querySelectorAll('.addbtn').forEach(button =>{
        button.addEventListener('click', ()=>{
            topItems++
            let kaymilla = topItems
           document.querySelector('.cartnumber').textContent= kaymilla;
           document.querySelector('.cartnumber').style.display="block"
           const details = button.closest(".details");
           const name = details.querySelector(".nametag").textContent;
           const price = parseFloat(details.querySelector(".pricetag").textContent.replace('$', ''));
           if (items[name]) {
            items[name].count += 1;
            items[name].totalPrice += price;
        } else {
            items[name] = {
                price: price,
                count: 1,
                totalPrice: price
            };
        }
        updateOrderRocky();

        })


    })
    //ADD BUTTON  ENDS HERE ///////////////////////////////

     function updateOrderRocky(){
        const orderValueDiv = document.querySelector(".ordervalue");
        orderValueDiv.innerHTML = "";
        const totalWrapper = document.querySelector(".total-wrapper .total");

        let total = 0;
        let itemCount = 0;

        for (const [name, item] of Object.entries(items)) {
            const orderItemDiv = document.createElement("div");
            orderItemDiv.className = "order-item";

            const countSpan = document.createElement("span");
            countSpan.className = "count";
            countSpan.textContent = `${item.count}x`;

            const nameSpan = document.createElement("span");
            nameSpan.className = "itemname";
            nameSpan.textContent = name;

            const priceSpan = document.createElement("span");
            priceSpan.className = "itemsprice";
            priceSpan.textContent = `$${item.totalPrice.toFixed(2)}`;

            const deleteButton = document.createElement("div");
            deleteButton.className = "deletebtn";
            deleteButton.innerHTML = `<img src="./icons8-trash-24.png" alt="Delete">`;
            deleteButton.addEventListener("click", () => {
                topItems--;
                document.querySelector('.cartnumber').textContent = topItems;
                if (topItems === 0) {
                    document.querySelector('.cartnumber').style.display = "none";
                    document.querySelector('.order').style.display="none"
                    document.querySelector('.empty-cart').style.display="block"
                }
                
                const price = item.price;
                item.count--;
                item.totalPrice -= price;
                
                if (item.count <= 0) {
                    delete items[name];
                } 
                updateOrderRocky();
            });
    

            orderItemDiv.appendChild(countSpan);
            orderItemDiv.appendChild(nameSpan);
            orderItemDiv.appendChild(priceSpan);
            orderItemDiv.appendChild(deleteButton);

            orderValueDiv.appendChild(orderItemDiv);

            total += item.totalPrice;
            itemCount += item.count;
        }
        totalWrapper.textContent = `$${total.toFixed(2)}`;
     }

document.querySelector('.homekey').addEventListener("click",()=>{
    const orderItem = document.querySelector('.order');
    orderItem.style.display = "none";
    const emptyCart = document.querySelector('.empty-cart');
    emptyCart.style.display = "none";
    appPage.style.display = "block";
})

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const nameValueText = document.querySelector('.nameinput').value.trim();
    const emailValue= document.querySelector('.emailinput').value.trim();
    const phoneNumber = document.querySelector('.numberinput').value.trim();
    if (nameValueText === '' || emailValue === '' || phoneNumber === '') {
        alert('Please fill in all fields.');
        return;
    }
    document.querySelector(".mainform").style.display="none"
    document.querySelector(".order-list").style.display="none"
    document.querySelector(".deliverd").style.display="flex"
    document.querySelector(".orderperson").innerHTML=`${nameValueText}`
})
 
document.querySelector(".mailbox-btn").addEventListener('click',()=>{
appPage.style.display="block"
topItems = 0;
 total = 0;
 itemCount = 0;
 document.querySelector('.cartnumber').textContent = topItems;
 document.querySelector('.cartnumber').style.display = "none";
 document.querySelector(".deliverd").style.display="flex"
})
})


    
    




