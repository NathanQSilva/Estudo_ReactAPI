import axios from 'axios'

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

export default {
    getData: () =>
    axios.post(apiUrl, apiData, {
      headers: {
        'Content-Type': 'application/json-rpc'
      }
    })
}