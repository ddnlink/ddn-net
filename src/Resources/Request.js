import axios from 'axios'
const Request = {
    async call(url, method = 'get', data = {}) {
        let config = {
          url: url,
          method: method,
          baseURL: url.includes('http') ? '' :  'http://peer.ddn.link:8000/',
          timeout: 10000,
          headers: {
            'Accept': 'application/json; charset=utf-8',
            'Content-Type': 'application/json; charset=utf-8',
          }
        }
        switch (method) {
          case 'get':
            config.params = data;
            break;
          case 'put':
            config.data = JSON.stringify(data);
            break;
          case 'post':
            config.data = JSON.stringify(data);
            break;
          default:
            break;
        }
        return axios(config).then(result => {
            return result;
          }).catch(err => {
            return err;
          });
      },
      getStatus() {
        return this.call('/api/blocks/getStatus', 'get', {});
      },
      getTransactions() {
        return this.call('/api/transactions', 'get', {});
      },
      getPeers() {
        return this.call('/api/peers', 'get', {});
      },
      getDelegates() {
        return this.call('/api/delegates', 'get', {});
      },
}

export default Request;