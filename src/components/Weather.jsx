import React from 'react'

const Weather = ({result}) => {


    //extract api values
    const {name, main} = result;

    if(!name) return null

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather in {name} is:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Max temperature:
                    {parseFloat(main.temp_max - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>MIn temperature:
                    {parseFloat(main.temp_min - 273.15, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>                
     );
}
 
export default Weather;