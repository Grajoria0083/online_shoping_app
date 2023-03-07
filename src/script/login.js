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



function loginU(){

   console.log("working 1")

   var mobileNo = document.getElementById("mobileNo").value;
   var password = document.getElementById("password").value;

   let obj = {
      "mobileNo": mobileNo,
      "password": password
   }

   const url = "https://e-commerce-rest-api-production.up.railway.app/customer/login";

fetch(url, {
   method: "POST",
   body: JSON.stringify(obj),
   headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
})
.then((response) => response.json)
.then((res) =>{
       console.log(res)
})
.catch(err)
   console.log("err : ",err);
}


//footer 
document.querySelector('.footer').innerHTML = footer();

