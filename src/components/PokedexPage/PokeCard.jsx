import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import {useNavigate} from 'react-router-dom'
import './style/PokeCard.css'

const PokeCard = ({pokeInfo}) => {
    const [pokemon, getPokemons] = useFetch(pokeInfo.url)

    useEffect(() => {
        getPokemons()
    }, [])
 
    const navigate = useNavigate()

    const handlePokeDetail = () => {
        navigate(`/pokedex/${pokeInfo.name}`)
    }
    
  return (
    <article className={`card border-${pokemon?.types[0].type.name}`} onClick={handlePokeDetail}>
        <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
            <img className="card__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="card__principal">
            <h3 className={`card__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className="card__types">
                {
                    pokemon?.types.map(typeInfo => (
                        <li className="card__type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
        </section>
        <hr className="card__hr"/>
        <section className="card__stats" >
            <ul className="card__list">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="card__stat" key = {statInfo.stat.url}>
                            <span className="card__stat_label">{statInfo.stat.name}</span>
                            <span className={`card__stat_value color-${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard