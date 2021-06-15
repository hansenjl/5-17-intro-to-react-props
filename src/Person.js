import Weather from './Weather'
import React from 'react'

// function Person({name, weather}){

//     return(
//         <div>
//             <p>Hi {name}!</p>
//             <Weather weather={weather}/>
//         </div>
        
//     )

// }

// 

// the old way of writing components
class Person extends React.Component {


    render(){
        return(
            <div>
                <p>Hi {this.props.name}!</p>
                <Weather weather={this.props.weather}/>
            </div>
        )
    }
        
    
}

export default Person