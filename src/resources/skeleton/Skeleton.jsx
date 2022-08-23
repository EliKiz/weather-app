
import './skeleton.scss'

const Skeleton = () => { 
    return ( 
        <>  
            <div className="skeleton-wrapper">
                <p className="weather__select">Please enter city name</p>
                <div className="skeleton">
                    <div className="pulse skeleton__block-left">
                        <div className="pulse skeleton__block"></div>
                        <div className="pulse skeleton__header">
                            <div className="pulse skeleton__circle"></div>
                        </div>
                    </div>
                    <div className="pulse skeleton__block-right">
                        <div className="pulse skeleton__block"></div>
                        <div className="pulse skeleton__block"></div>
                        <div className="pulse skeleton__block"></div>

                    </div>
                </div>
            </div>
        </>
        
            
        
    )
    

}
export default Skeleton