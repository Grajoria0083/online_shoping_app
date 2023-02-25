const navbar = () =>{
    return ` <h1>Home</h1>
    <nav class="nav">
         <ul>
            <li><a href="">Login</a></li>
            <li><a href="">SignUp</a></li>
            <li><a href="">Cart</a></li>
         </ul>
    </nav>
    <div class="mobile_nav">
        <i name="open" class="fa-solid fa-bars mobile_nav_icon"></i>
        <i name="close" class="fa-solid fa-xmark mobile_nav_icon"></i>
    </div>`
};

export default navbar;