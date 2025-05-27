//import useState and useEffect
import { useState, useEffect } from "react"


//import css 
import "./css/sales.css"


const Sales = () => {


    const [salesData, setSalesData] = useState(null)
    const [error, setError] = useState(null)
    const [dataLoading, setDataLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:1337/api/sales?populate=*')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR WITH FETCHING API')
                }
                return response.json()
            })

            .then((data) => {
                setSalesData(data.data)
                setDataLoading(false)
            })

            .catch((error) => {
                console.error("Fetch error:", error)
                setError(error.message)
                setDataLoading(false)

            })
    }, [])

    return (
        <section id="sales">
            <h5 class="section-title">SALES</h5>
            <div class="sales-container">
                {salesData && salesData.map((data) => (


                    <a href={data.sale_url} class="a-sell" key={data.id}>
                        <div class="sale-box">
                            <img src={"http://localhost:1337" + data.sale_image.url} alt="sale" />

                        </div>
                    </a>



                ))}

            </div>
        </section>

    )
}

export default Sales