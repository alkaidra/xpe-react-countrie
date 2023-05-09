import { Country } from "./Country";

export function Countries({children: countries = [], onCountryClick = null, visited = []}) {
    return (
        <div className="border p-2 rounded-lg flex flex-col gap-4">
            <h2 className="text-center font-semibold">{countries.length} países encontrados</h2>
            <h2 className="text-center text-blue-500 font-semibold">{visited.length} países visitados</h2>

            { countries.map((country, key) => {
                const isVisited = visited.indexOf(country.flag) !== -1;
                return <Country isVisited={isVisited} onCountryClick={onCountryClick} key={key}>{ country }</Country>
            }) }

        </div>
    )
}