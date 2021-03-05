import React from 'react';
import api from './api/api';

const indexPage = () => {
    let [responseData, setResponseData] = React.useState('')

    const fetchData = (a) => {
        a.preventDefault()

        api.getData()
        .then((response) => {
            setResponseData(response.data)
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(a) => fetchData(a)} type='button'>Click Me For Data</button>
            <p>{ responseData.result }</p>
        </div>
    )
}

export default indexPage