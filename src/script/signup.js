
import navbar from "../componemt/navbar.js";

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


function signupUser(){
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var mobileNo = document.getElementById("mobileNo").value;
   var password = document.getElementById("password").value;
   var city = document.getElementById("city").value;
   var houseNo = document.getElementById("houseNo").value;
   var pincode = document.getElementById("pincode").value;
   var state = document.getElementById("state").value;
   var country = document.getElementById("country").value;

var obj = {
   "name":name,
   "email": email,
   "mobileNo": mobileNo,
   "password": password,
   "address": { 
      "houseNo": houseNo,
      "pincode": pincode,
      "city": city,
      "state": state,
      "country": country
   }
}


const url = "https://e-commerce-rest-api-production.up.railway.app/customer/";

fetch(url, {
   method: "POST",
   body: JSON.stringify(obj),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => response.json)
.then((json) =>{
       console.log(json)
})
.catch(err)
   console.log("err : ",err);   
console.log(obj)
}


//footer 
document.querySelector('.footer').innerHTML = footer();

