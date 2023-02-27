const navbar = () =>{
    return ` <h1> <a href="/index.html">Home </a></h1>
    <nav class="nav">
         <ul>
            <li><a href="/src/pages/login.html">Login</a></li>
            <li><a href="/src/pages/signup.html">SignUp</a></li>
            <li><a href="/src/pages/cart.html">Cart</a></li>
         </ul>
    </nav>
    <div class="mobile_nav">
        <i name="open" class="fa-solid fa-bars mobile_nav_icon"></i>
        <i name="close" class="fa-solid fa-xmark mobile_nav_icon"></i>
    </div>`
};

export default navbar;