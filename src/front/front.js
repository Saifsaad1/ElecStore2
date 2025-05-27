//import css
import "./css/front.css"

//import images
import background1 from "./images/background1.jpg"
import background2 from "./images/background2.png"
import background3 from "./images/background3.jpg"


const Front = () => {



    return(
        <section id="front">

        <div className="front-container">
            <div className="slider">
                <div className="slides">

                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>

                    <div className="slide first">
                        <img src={background1}/>
                    </div>

                    <div className="slide">
                        <img src={background2}/>
                    </div>

                    <div className="slide">
                        <img src={background3}/>
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>

                    </div>

                </div>

                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>

                </div>
            </div>


        </div>
        <div className="front-1">
            <div className="front-1-container">
                <h3>01</h3>
                <h1>ELECTRIC YOUR LIFE<br/>WITH US </h1>
                <div className="front-1-btns">

                    <a href="#products"><button href="" className="brows-btn">BROWS DEVICES</button></a>
                    <a href="#sales"><button href="" className="sales-btn">SEE SALES</button></a>

                </div>
            </div>

        </div>

    </section>
    )
}


export default Front