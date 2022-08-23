import errorGif from './giphy.gif'
const Error = (props) =>  {

    return (
        <>
            <div style={{'display': 'flex', 'width': '100%', 'height': '100%', 'flexDirection': 'column', 'justifyContent': 'center', 'alignContent': 'center'}}> 
                <h2 style={{'textAlign': 'center'}} >{props.text}</h2>
                <img style={{  'width': '100px', 'height': '100px', 'border-radius': '10px', 'margin': '10px auto 0 auto'}} src={errorGif} alt="Error gif" />
            </div>
        </> 
    )

}


export default Error