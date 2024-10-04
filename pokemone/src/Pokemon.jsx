import { useEffect, useState } from "react";
import "./index.css"
import { PokemonCards } from "./PokemonCards";


export const Pokemone = () => {
    const [pokemones, setPokemones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);

            const detailPokemonData = data.results.map(async (curPokemone) => {
                const res = await fetch(curPokemone.url)
                const data = await res.json();
                console.log(data);
                return data
            })

            console.log(detailPokemonData);
            const finalData = await Promise.all(detailPokemonData);
            console.log(finalData);
            setPokemones(finalData);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);

        }
    }
    useEffect(() => {
        fetchPokemon();
    }, []);

    //search functionalities
    const searchData = pokemones.filter((curPokemone) =>
        curPokemone.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }


    return (
        <>

            <section className="container">
                <header>
                    <h1>Lets Catch pokemon</h1>
                </header>
                <div className="pokemon-search">
                    <input type="text"
                        placeholder="Search pokemon"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div>
                    <ul className="cards">
                        {/* {pokemones.map((curPokemone) => { */}
                        {searchData.map((curPokemone) => {
                            return (
                                <PokemonCards key={curPokemone.id} pokemonesData={curPokemone} />
                            )

                        })}

                    </ul>
                </div>
            </section>
        </>
    )
}