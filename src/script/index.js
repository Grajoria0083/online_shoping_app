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

const getData = async()=>{
      let data = await fetch('https://e-commerce-rest-api-production.up.railway.app//customer/product');
      data = data.json();
      console.log(data);
      return data;
}

const mapData =(data)=>{
      data.map((el)=>{
         let card = document.createElement('div');
         
         let poster = document.createElement('img');

         let name = document.createDocumentFragment('h1');

         let price = document.createElement('h1');
      })
}



