
function setName(name) {


    const productId = document.getElementById('product-list');
    const count = productId.childElementCount;
    const p = document.createElement('p');

    p.innerHTML = `${count + 1}. ${name}`

    productId.appendChild(p);



}


function setPrice(itemPrice){
    
    const totalPriceId=document.getElementById('totalPrice');
    const priceString=totalPriceId.innerText;
    const price= parseFloat(priceString);
   
   
   const totalPriceNumber= price+itemPrice;
   const totalPrice=totalPriceNumber.toFixed(2)

    totalPriceId.innerText=totalPrice;


}


function discount(){
    let discount=0;
    console.log(discount);
    const totalPriceId=document.getElementById('totalPrice');
    const priceString=totalPriceId.innerText;
    const price= parseFloat(priceString);
    console.log(price);

    discount=((price*20)/100);
    const discountFormated=discount.toFixed(2);

    const discountId=document.getElementById('totalDiscount');
    discountId.innerText=discountFormated
   
    



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