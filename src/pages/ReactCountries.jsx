import { useState } from "react";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Input } from "../components/Input";
import { Countries } from "../components/Countries"
import { useFetch } from "../hook/useFetch";

export function ReactCountries() {
    const [countryFilter, setCountryFilter] = useState("");
    const [visited, setVisited] = useState([]);
    
    const { data } = useFetch("all");

    const filteredCountries = countryFilter.length >= 3 ? data.filter(({name}) => name.common.toLowerCase().includes(countryFilter.trim().toLowerCase())) : data;

    const toggleVisitedCountry = (countryFlag) => {
        let newVisitedCountries = [...visited];

        if (newVisitedCountries.indexOf(countryFlag) !== -1) {
            newVisitedCountries = newVisitedCountries.filter(country => country !== countryFlag);
        } else {
            newVisitedCountries.push(countryFlag);
        }

        setVisited(newVisitedCountries);
    }


    return (
        <>
            <Header>react-countries</Header>

            <Main>
                <Input
                    label="Informe o nome do país (min 3 char): "
                    value={countryFilter}
                    autoFocus
                    onCountryFilterChange={setCountryFilter}
                />
                
                <Countries visited={visited} onCountryClick={toggleVisitedCountry}>{filteredCountries}</Countries>
            </Main>
        </>
    );
}