import fetchData from "../componemt/fetch.js";
import footer from "../componemt/footer.js";
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
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id'); 
console.log(id);
let url = `https://e-commerce-rest-api-production.up.railway.app/customer/product/${id}`;
let data = await fetchData(url);

function appendProduct(){
       let img = document.createElement('img');
       img.src = data.productImage;
       let div = document.createElement('div');
       let h1 = document.createElement('h1');
       h1.innerText = data.productName;
       let spec = document.createElement('p');
       spec.innerText = data.specification;
       let clr = document.createElement('p');
       clr.innerText = `COLOR: ${data.color}`;
       let div1 = document.createElement('div');
       div1.setAttribute('class','div1')
       let brand = document.createElement('p');
       brand.innerText = `BRAND: ${data.manufacturer}`;        ;
       let price = document.createElement('p');
       price.innerText = `PRICE: ${data.price} $`;
       div1.append(brand,price)
       let btn = document.createElement('button');
       btn.innerText = 'Add To Cart';
       btn.addEventListener('click',function(){
         addToCartFun(data);
       })
       div.append(h1,spec,clr,div1,btn);
       container.append(img,div);
}


function addToCartFun(product){

}


appendProduct();


//footer 
document.querySelector('.footer').innerHTML = footer();