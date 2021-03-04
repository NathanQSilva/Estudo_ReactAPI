import react from 'react';
import axios from 'axios';

function getKey() {

    const apiData = JSON.stringify({
        "jsonrpc": "2.0",
        "method": "user.login",
        "params": {
            "user": 'nathan.quadros',
            "password": 'S3c77$1Nfr488'
        },
        "id": 1,
        "auth": null
    });

    const apiUrl = 'https://zabbix.plss.com.br/api_jsonrpc.php';
 
    axios.post(apiUrl, apiData, {
        headers: {
            'Content-Type': 'application/json-rpc'
        }
    })
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.data.result)
    });

    return (
        <div>
            <h1>teste</h1>
        </div>
    )
}

export default getKey;