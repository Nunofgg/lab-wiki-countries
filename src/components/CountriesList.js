import React, { useState } from "react";
import {Link} from "react-router-dom";
import countriesJSON from '../countries.json'

function CountriesList(){
    const [countries, setCountries] = useState(countriesJSON);

    return (
        <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <ul class="list-group">
                {countries.map((country, index) => {
                    return (
                        <li key={index}>
                            <Link exact to={`/${country.alpha3Code}`} class="list-group-item list-group-item-action">
                                <div>
                                    <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name}/>
                                    <h4>{country.name}</h4>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CountriesList;