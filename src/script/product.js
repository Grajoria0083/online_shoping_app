import append from "../componemt/append.js";
import fetchData from "../componemt/fetch.js";
import navbar from "../componemt/navbar.js";

//navbar logic;
let header = document.querySelector('.header');
header.innerHTML = navbar();
let menubtn = document.querySelector('.mobile_nav');
const toggleIcon=()=>{
   header.classList.toggle('active');
}
menubtn.addEventListener('click',toggleIcon);

//product maping
let container = document.getElementById('container');
let id = localStorage.getItem('id');
console.log(id);
let url = `https://e-commerce-rest-api-production.up.railway.app/customer/product/${id}`;
let data = await fetchData(url);

function appendProduct(){
       let div = document.createElement('div');
       let img = document.createElement('img');
       img.src = data.productImage;
       let h1 = document.createElement('h1');
       h1.innerText = data.productName;
       let brand = document.createElement('p');
       brand.innerText = data.manufacturer;        ;
       let price = document.createElement('p');
       price.innerText = data.price;
       let btn = document.createElement('button');
       btn.innerText = 'Add To Cart';
       btn.addEventListener('click',function(){
         addToCartFun(data);
       })
       div.append(img,h1,brand,price,btn);
       container.append(div);
}


function addToCartFun(product){
   
}


appendProduct()