//import css
import "./css/arrivals.css"

//import images
import arrivals1 from "./images/arrivals 1.jpg"
import arrivals2 from "./images/arrivals 2.png"
import arrivals3 from "./images/arrivals 3.png"
import arrivals4 from "./images/arrivals 4.png"


const Arrivals = () =>{

    return(
        <section id="arrivals">
        <div className="arrivals-container">
            <div className="arrivals-1">
                <a href="">
                    <img src={arrivals1}/>
                </a>

            </div>
            <div className="arrivals-2">
                <div className="ar-im-1">
                    <a href="">
                        <img src={arrivals2}/>
                    </a>
                </div>

                <div className="ar-im-2">
                    <a href="">
                        <img src={arrivals3}/>
                    </a>


                </div>


            </div>

            <div className="arrivals-3">

                <a href="">
                    <img src={arrivals4}/>

                </a>

            </div>



        </div>



    </section>
    )
}

export default Arrivals