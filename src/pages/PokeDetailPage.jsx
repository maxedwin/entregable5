import {useParams} from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PokedexPage/style/PokeDetailPage.css'


const PokeDetailPage = () => {
  const { name } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
   getPokemon()
  }, [name])
  console.log(pokemon)

  return (
    <div >
      <header className="banner">
        
      </header>
      <div className="card__pokedetail">
      <header className="header__detailpoke">
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt=""/>
        <h1 className="id__card">#{pokemon?.id}</h1>
      <h2 className="namepoke__card">{pokemon?.name}</h2>

      </header>
      <div className="h__stats">
        <div>
            <h2>Peso</h2>
            <span>{pokemon?.weight}</span>
        </div>
        <div>
            <h2>Altura</h2>
            <span>{pokemon?.height}</span>
        </div>

        <div>
            <h2>Type</h2>
            <span>{pokemon?.types[0].type.name}</span>
        </div>
        <div>
            <h2>Abilities</h2>
            <span>{pokemon?.abilities[0].ability.name}</span>
        </div>
    </div>
   
    <article className="article">
      <label>Stast</label>
      
      <div className="stats-container">
      <label className="label__stats">HP:</label>
      <label className="label__value_stats">{pokemon?.stats[0].base_stat} / 150</label>
      </div>
      <div className="contenedor-barra-progreso">
      <div className="barra-progreso" style={{ width: `${(pokemon?.stats[0].base_stat / 150) * 100}%` }}></div>
      </div>
      

    
      <div className="stats-container">
      <label className="label__stats">Attack</label>
      <label className="label__value_stats">{pokemon?.stats[1].base_stat} / 150</label>
      </div>
      <div className="contenedor-barra-progreso">
      <div className="barra-progreso" style={{ width: `${(pokemon?.stats[1].base_stat / 150) * 100}%` }}></div>
      </div>

      <div className="stats-container">
      <label className="label__stats">Defense</label>
      <label className="label__value_stats">{pokemon?.stats[2].base_stat} / 150</label>
      </div>
      <div className="contenedor-barra-progreso">
      <div className="barra-progreso" style={{ width: `${(pokemon?.stats[2].base_stat / 150) * 100}%` }}></div>
      </div>

      <div className="stats-container">
      <label className="label__stats">Speed</label>
      <label className="label__value_stats">{pokemon?.stats[5].base_stat} / 150</label>
      </div>
      <div className="contenedor-barra-progreso">
      <div className="barra-progreso" style={{ width: `${(pokemon?.stats[5].base_stat / 150) * 100}%` }}></div>
      </div>
     
    </article>


        </div>
    </div>
  )
}

export default PokeDetailPage