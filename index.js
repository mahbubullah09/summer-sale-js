
function setName(name) {


    const productId = document.getElementById('product-list');
    const count = productId.childElementCount;
    const p = document.createElement('p');

    p.innerHTML = `${count + 1}. ${name}`

    productId.appendChild(p);



}


function setPrice(itemPrice) {

    const totalPriceId = document.getElementById('totalPrice');
    const totalpriceString = totalPriceId.innerText;
    const totalprice = parseFloat(totalpriceString);


    const totalPriceNumber = totalprice + itemPrice;
    const totalPriceFormated = totalPriceNumber.toFixed(2)

    totalPriceId.innerText = totalPriceFormated;



    // for price section 

    const priceId = document.getElementById('price-Id');
    const priceSreing = priceId.innerText;
    const price = parseFloat(priceSreing);

    const priceNumber = price + itemPrice;
    const priceFormatted = priceNumber.toFixed(2);

    priceId.innerText = priceFormatted;




    // for puschase button disable 


    const buttonId = document.getElementById('purchase-btn');
    if (totalPriceNumber > 0) {
        buttonId.removeAttribute('disabled')
        buttonId.classList.remove('bg-slate-500')

        buttonId.classList.add('cursor-pointer')
        buttonId.classList.add('bg-[#E527B2]')

    }

    // for apply button disable 

    const applyId = document.getElementById('apply-btn');
    if (totalPriceNumber >= 200) {
        applyId.removeAttribute('disabled')
        applyId.classList.remove('bg-slate-500')

        applyId.classList.add('cursor-pointer')
        applyId.classList.add('bg-[#E527B2]')

    }




}


function discount() {
    const couponId = document.getElementById('couponField');
    const couponValue = couponId.value;
    couponId.value = '';

    if (couponValue !== 'SELL200') {
        return
    }

    let discount = 0;
    console.log(discount);
    const totalPriceId = document.getElementById('totalPrice');
    const priceString = totalPriceId.innerText;
    const totalPrice = parseFloat(priceString);


    discount = ((totalPrice * 20) / 100);
    const discountFormated = discount.toFixed(2);

    const discountId = document.getElementById('totalDiscount');
    discountId.innerText = discountFormated;

    // for price section 

    const priceId = document.getElementById('price-Id');
    const priceNumber = totalPrice - discount;
    const priceFormatted = priceNumber.toFixed(2);

    priceId.innerText = priceFormatted;






}




function k_accesorries() {

    const itemId = document.getElementById('k-accesorries-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('k-accesorries-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);



}



function k_accesorries_mini(){
    const itemId = document.getElementById('k-accesorries-mini-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('k-accesorries-mini-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}






function home_cooker(){
    const itemId = document.getElementById('home-cooker-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('home-cooker-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}




function cap(){
    const itemId = document.getElementById('cap-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('cap-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}



function jersey(){
    const itemId = document.getElementById('jersey-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('jersey-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}





function cates(){
    const itemId = document.getElementById('cates-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('cates-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}





function chair(){
    const itemId = document.getElementById('chair-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('chair-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}





function play(){
    const itemId = document.getElementById('play-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('play-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}





function sofa(){
    const itemId = document.getElementById('sofa-name');
    const nameOfItem = itemId.innerText;
    const priceId = document.getElementById('sofa-price');
    const priceString = priceId.innerText;
    const priceOfItem = parseFloat(priceString);



    setName(nameOfItem);
    setPrice(priceOfItem);


}




