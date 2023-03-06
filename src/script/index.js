import appendData from "../componemt/append.js";
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


//products maping
let container = document.getElementById('container');

let url = `https://e-commerce-rest-api-production.up.railway.app/customer/product`;
let data = await fetchData(url);
appendData(data,container);

//footer 
document.querySelector('.footer').innerHTML = footer();


//search functionality
let searchvalue;
let input = document.getElementById('searchvalue');
input.addEventListener('change',()=>{
   searchvalue = input.value;
});

const functionForSearch=()=>{
   if(searchvalue === ''){
      return;
   }
   let newData = data.filter((el)=>el.productName.toLowerCase() == searchvalue.toLowerCase());
   appendData(newData,container);
   console.log(newData);
}
document.getElementById('searchbtn').addEventListener('click', functionForSearch);

//sort functionality;
let sortvalue;
let select = document.getElementById('sortvalue');
select.addEventListener('change',()=>{
   sortvalue = select.value;
   if(sortvalue === ''){
      return;
   }
   else if(sortvalue === 'ASC'){
      data.sort((a,b)=>a.price - b.price)
   }else{
      data.sort((a,b)=>b.price - a.price)
   }
   appendData(data,container);
})


