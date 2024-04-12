import { useRef } from "react"
import { setTrainer } from "../../store/states/trainer.slice"
import { useDispatch} from "react-redux"
import { useNavigate} from "react-router-dom"
import '../PokedexPage/style/FormTrainer.css'
const FormTrainer = () => {
    const trainerInput = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')
    }
  return (
    <div>
        
        <form  className='form__app' onSubmit={HandleSubmit}>
            <input className="input__form" ref={trainerInput} type="text"></input>
            <button className="button__form">Let start</button>
        </form>
        </div>

  )
}

export default FormTrainer