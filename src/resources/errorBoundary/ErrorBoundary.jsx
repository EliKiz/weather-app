import { Component } from "react";
import Error from "../error/Error";


class ErrorBoundary extends Component { 

    state = {
        error : false,
    } 

    componentDidCatch(error, errorInfo) { 
        console.log(error, errorInfo) 
        this.setState({
            error : true
        })
    }

    render () { 
        if( this.state.error) { 
            return <Error text = 'Something went wrong, please reload the page or try again later' />
        }

        return this.props.children
    }
}

export default ErrorBoundary