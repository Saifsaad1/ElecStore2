


//import css
import "./css/footer.css"


//import images
import logo from "../navbar/images/logo.png"



const Footer = () => {



    return(
        <footer id="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="ftl">
                    <a href="">
                        <img src={logo}/>
                    </a>
                    <p>ELECTRIC YOUR LIFE </p>
                </div>

                <div class="ftr">
                    <ul>
                        <a href="">
                            <li>SUPPORT</li>
                        </a>
                        <a href="">
                            <li>WIDGETKIT</li>
                        </a>
                        <a href="">
                            <li>FEEDBACK</li>
                        </a>

                    </ul>

                    <ul>
                        <a href="">
                            <li>F A Q</li>
                        </a>
                        <a href="">
                            <li>COOKIES</li>
                        </a>
                        <a href="">
                            <li>SERVICES</li>
                        </a>

                    </ul>

                    <ul>
                        <a href="">
                            <li>SECURITY </li>
                        </a>
                        <a href="">
                            <li> BRANCHES</li>
                        </a>
                        <a href="">
                            <li>SHIPPING </li>
                        </a>

                    </ul>


                </div>

            </div>

            <div class="footer-down">

                <div class="fdt">
                    <a href=""><i class="fab fa-facebook-f"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter"></i></a>
                    <a href=""><i class="fab fa-reddit"></i></a>

                </div>

                <div class="fdd">
                    <small>©Copyright. ELEC STORE</small>
                </div>

            </div>

        </div>
    </footer>
    )
}

export default Footer