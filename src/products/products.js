import { useState, useEffect } from "react"


//import css
import "./css/products.css"

//import images
import plus from "./images/plus.png"
import aoole from "./images/aoole.png"

const Products = () => {


    const [datas, setData] = useState(null)
    const [error, setError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:1337/api/products?populate=*')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR WITH FETCHING API')
                }
                return response.json();
            })

            .then((data) => {
                setData(data.data)
                setDataLoading(false)
            })

            .catch((error) => {
                console.error("Fetch error:", error)
                setError(error.message)
                setDataLoading(false)

            })
    }, [])

    //convertion numeric rate value into stars rate
    const renderStars = (rate) => {
        const fullStars = Math.floor(rate);
        const hasHalfStar = rate % 1 !== 0;
        const totalStars = 5;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="fa fa-star-half" aria-hidden="true"></i>);
        }

        const remaining = totalStars - stars.length;

        for (let i = 0; i < remaining; i++) {
            stars.push(<i key={`empty-${i}`} className="fa fa-star-o" aria-hidden="true"></i>);
        }

        return stars;
    };

    return (
        <section id="products">

            <h4 className="section-title">PRODUCTS</h4>
            <div className="products-container">

                {datas && datas.map((data) => (
                    <div className="product-box product-1" key={data.id}>

                        <div className="img-box">
                            <img src={"http://localhost:1337" + data.image.url} className="product-img" />
                            <img src={plus} className="image1" />
                            <div className="img-text">

                                <p className="img-text-p">
                                    {data.product_cover}
                                </p>
                            </div>

                        </div>
                        <div className="details-box">
                            <h5>{data.product_title}</h5>
                            <p>{data.product_describe}</p>
                            <div className="rate">
                                {renderStars(data.product_rate ?? 0)}


                            </div>
                            <h6>{data.product_price}$</h6>
                            <a href="" class="add-tc">Add To Card</a>
                        </div>

                    </div>
                ))}





            </div>
            <div className="top-products">
                <h5 className="section-title">TOP PRODUCTS </h5>
                <div className="top-products-container">
                    <div className="top-ls">
                        <a href="">
                            <img src={aoole} />
                        </a>

                    </div>

                    <div className="top-rs">

                        <p>START NEW GENERATION! </p>





                    </div>


                </div>


            </div>


        </section>
    )
}


export default Products