import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countriesJSON from "../countries.json";
import '../App.css';

function CountryDetail({match}) {
    const [country, setCountry] = useState({});

    useEffect(() => {
        const thisCountryId = match.params.countryId;
        const foundCountry = countriesJSON.find((country) => country.alpha3Code === thisCountryId);

        console.log(foundCountry);
        setCountry(foundCountry);
    }, [match.params.countryId]);

    return (
        <div class="col-7">
            <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt={country.name} style={{width: "300px"}} />
            <h2>{country.name}</h2>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area}</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders && country.borders.map((borderCountry) => {
                                    const foundBorderCountry = countriesJSON.find((country) => country.alpha3Code === borderCountry);
                                    return (
                                            <li key={borderCountry}>
                                                <Link to={"/" + borderCountry}>{foundBorderCountry.name}</Link>
                                            </li>
                                        );
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetail;