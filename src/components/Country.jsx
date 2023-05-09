import classNames from "classnames";

export function Country({ children: country, onCountryClick = null, isVisited = false }) {
    if (!country) {
        return (
            <div className="text-center">
                <small className="text-red-500 font-semibold">Não foi possível carregar os dados</small>
            </div>
        )
    }

    const demographicDensity = country.population / country.area;

    const altImage = `Bandeira do ${country.name.common}`;

    const handleCountryClick = () => {
        if (onCountryClick) {
            onCountryClick(country.flag)
        }
    }

    return (
        <div
            onClick={ handleCountryClick }
            className={classNames("border p-2 rounded-lg flex items-center gap-4 cursor-pointer", {
                "bg-blue-500 text-white": isVisited ===true
            })}
        >
            <img className="w-48 border rounded-lg" src={country.flags.png} alt={altImage} />
            <ul>
                <li><strong>Name: </strong>{country.name.common}</li>
                <li><strong>Capital: </strong>{country.capital}</li>
                <li><strong>Region: </strong>{country.region}</li>
                <li><strong>Population: </strong>{country.population} pessoas</li>
                <li><strong>Area: </strong>{country.area} m²</li>
                <li><strong>Demographic Density: </strong>{demographicDensity}</li>
                <li><strong>Flag: </strong>{country.flag}</li>
            </ul>

        </div>
    )
}