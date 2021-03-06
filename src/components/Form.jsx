import React, {useState} from 'react'
import Error from './Error';

const Form = ({search, setSearch, setConsult}) => {

    

    const [error, setError] = useState(false)

    //extract city and country
    const {city, country} = search;

    const handleChange = e => {
        //refresh state
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    //when the user submits the form
    const handleSubmit = e => {
        e.preventDefault()

        //validate
        if(city.trim() === '' || country.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setConsult(true)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="both fields are required" />: null}
            
            <div className="input-field col s12">
              <input 
                type="text"
                name="city"
                id="city"
                value={city}  
                onChange={handleChange}    
              />
              <label htmlFor="city">City: </label>  
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}                      
                >
                    <option value="">-- select a country --</option>
                    <option value="US">United States</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>                
            </div>
            <div className="input-field col s12">
                <input 
                type="submit"
                value="search weather"
                className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Form;