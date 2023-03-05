const navbar = () =>{
    return ` <h1> <a href="/index.html">Home </a></h1>
    <nav class="nav">
         <ul>
            <li><a href="/login.html">Login</a></li>
            <li><a href="/signup.html">SignUp</a></li>
            <li><a href="/cart.html">Cart</a></li>
         </ul>
    </nav>
    <div class="mobile_nav">
        <i name="open" class="fa-solid fa-bars mobile_nav_icon"></i>
        <i name="close" class="fa-solid fa-xmark mobile_nav_icon"></i>
    </div>`
};

export default navbar;