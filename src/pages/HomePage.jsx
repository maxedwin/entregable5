import FormTrainer from "../components/HomePage/FormTrainer"
import PokeCard from "../components/PokedexPage/PokeCard"
import '../App.css'

const HomePage = () => {
  return (
    <>
   
    <div  className="main__app">
   
    <div className="img__home">

    </div>
     
        <h2>Hi Trainer</h2>
        <p>to see the information of the pokemon tell me your trainer name</p>
        <FormTrainer />
        
    </div>
   

    
   
    </>
  )
}

export default HomePage