export const PokemonCards = ({ pokemonesData }) => {

    return (
        <li className="pokemon-card ">
            <figure>
                <img src={pokemonesData.sprites.other.dream_world.front_default}
                    alt={pokemonesData.name}
                    className="pokemon-image" />
            </figure>
            <h1 className="pokemon-name">
                {pokemonesData.name}
            </h1>
            <div className="pokemon-info pokemon-highlight">
                <p>
                    {pokemonesData.types.map((curType) => curType.type.name).join(", ")}
                </p>
            </div>
            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <span>Heigt:</span>{pokemonesData.height}
                </p>
                <p className="pokemon-info">
                    <span>Weight:</span>{pokemonesData.weight}
                </p>
                <p className="pokemon-info">
                    <span>Speed:</span>{pokemonesData.stats[5].base_stat}
                </p>
            </div>
            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <p>{pokemonesData.base_experience}</p>
                    <span> Experience:</span>
                </div>
                <div className="pokemon-info">
                    <p>{pokemonesData.stats[1].base_stat}</p>
                    <span>Attack:</span>
                </div>
                <div className="pokemon-info">
                    <p>
                        {pokemonesData.abilities
                            .map((abilityInfo) => abilityInfo.ability.name)
                            .slice(0, 1)
                            .join(", ")}
                    </p>
                    <span> Abilities: </span>
                </div>
            </div>
        </li>

    )
}