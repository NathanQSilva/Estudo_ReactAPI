function App() {

    const URL_TO_FETCH = 'https://zabbix.plss.com.br/api_jsonrpc.php';
        fetch(URL_TO_FETCH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/jsonrequest'
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "user.login",
                "params": {
                    "user": "nathan.quadros",
                    "password": "S3c77$1Nfr488"
                },
                "id": 1,
                "auth": null
            })            
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        //.then(function(response) {
        //    response.text()
        //    .then(function(result){
        //        console.log('teste', result);
        //    })
        //})
        .catch(function(err){
            console.error('Failed retriving information', err); 
        });
    

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default App;