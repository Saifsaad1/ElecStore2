//import useState
import { useState } from "react"

//import css
import "./css/iphone-slide.css"


//import images
import iphone_13 from "./images/iphone 13.png"

const Iphone_slide = () => {

    const [showIcon, setShowIcon] = useState(false)

    const showTheIcon = () => {
        setShowIcon(prev => !prev)
    }

    return (
        <section id="iphone-slide">

            <div class="iphone-container">

                <div class="iphone-img">
                    <img src={iphone_13} />
                </div>

                <div class="iphone-txt">
                    <h4 class="iphone-name">Iphone 13 Pro</h4>
                    <p>Lorem ipsum dolor sit, amet consectr adiping elit.
                        Modi vate amet, mima quidem aliquid qui iste. Voluptatem laborum quo nam.</p>

                    <a href="" class="iphone-btn">Buy Now</a>
                    <button onClick={showTheIcon}  class="iphone-btn2">Contact us</button>
                    {showIcon && <div class="iphone-icons">
                        <a href="" class="icon-a"><i class="fab fa-facebook-f"></i></a>
                        <a href="" class="icon-b"><i class="fab fa-instagram"></i></a>
                        <a href="" class="icon-c"><i class="fab fa-twitter"></i></a>
                        <a href="" class="icon-d"><i class="fab fa-reddit"></i></a>

                    </div>}


                </div>

            </div>


        </section >
    )
}

export default Iphone_slide