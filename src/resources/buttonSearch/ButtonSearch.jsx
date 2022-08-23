
import './button.scss'

const ButtonSearch = (props) => { 
    return ( 
        <button {...props} className='button'>
            {props.children}
        </button>   

    )
}

export default ButtonSearch