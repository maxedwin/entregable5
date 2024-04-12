import FormTrainer from "../components/HomePage/FormTrainer"
import PokeCard from "../components/PokedexPage/PokeCard"
import '../App.css'

const HomePage = () => {
  return (
    <>
    <div  className="main__app">
        <h1>Pokedex</h1>
        <h2>Hi Trainer</h2>
        <p>to see the information of the pokemon tell me your trainer name</p>
        <FormTrainer />
    
    </div>
    <footer className="footer">
    <div className="footer__red"></div>
    <div className="footer__black">
      <div className="footer__container">
        <div className="footer__circle--inner">
          <div className="footer__circle--outer"></div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default HomePage