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

//data mapping;
const container = document.getElementById('container');

//footer 
document.querySelector('.footer').innerHTML = footer();