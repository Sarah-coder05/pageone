function Header() {
    return(
       <div>
           <div class="row">
                <div>
                    <a href="index.html" class="logo">Pageone
                    <span class="dot">.</span>
                    </a>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#Home" class="home">Home</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Process">Process</a></li>
                            <li><a href="#Clients">Clients</a></li>
                            <li><a href="#About">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <a href="#Contact">Contact</a>
                </div>
           </div>
            <div>
                <h1 class="heading">
                    We are a web agency based in Los Angeles,CA
                </h1>
            </div>
       </div>
    )
}
export default Header