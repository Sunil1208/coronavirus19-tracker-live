import React from 'react'

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : {},
            country: '',
        }
    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        console.log(fetchedData)

        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        //console.log(country)
        const fetchedData = await fetchData(country);
        console.log(fetchedData)

        this.setState({
            data: fetchedData,
            country: country
        });
        //Task
        //1.Fetch the data
        //2.Set the state
    }

    render(){
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;