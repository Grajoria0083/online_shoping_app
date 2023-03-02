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


//products maping
let container = document.getElementById('container');

let url = `https://e-commerce-rest-api-production.up.railway.app/customer/product`;
let data = await fetchData(url);
append(data,container);


