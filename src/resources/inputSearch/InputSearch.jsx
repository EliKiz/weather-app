
import './inputSearch.scss'


const InputSearch = (props) => { 
    const {listdata} = props

    return ( 
        <>
            <input className='input' {...props} type="text"  />
            <datalist id = 'datalist'>
                {
                    listdata.map(item => { 
                        const {id, text} = item 
                        return <option key ={id} value={text}/>
                    })
                }
            </datalist>
        </>
        
    )   
    
}

export default InputSearch