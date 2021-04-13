import axios from 'axios'
const Request = {
  async call(url, method = 'get', data = {}) {
    let config = {
      url: url,
      method: method,
      baseURL: url.includes('http') ? '' : 'http://peer.ddn.link:8000/',
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
  async call2(url, method = 'get', data = {}) {
    let config = {
      url: url,
      method: method,
      baseURL: url.includes('http') ? '' : 'http://47.91.156.21:3000/',
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
  getNewsList(params) {
    return this.call2('/api/ddnNet/articles', 'get', params);
  },
  getNewsDetaile(id, params) {
    return this.call2('/api/ddnNet/articles/'+id, 'get', params);
  },
  getTopNewsList(params) {
    return this.call2('/api/ddnNet/articles/top', 'get', params);
  },
  getFaqs() {
    return this.call2('/api/ddnNet/faqs', 'get', {});
  },
  getTopContributors() {
    return this.call2('/api/ddnNet/tasks/topContributors', 'get', {});
  },
  getTasks() {
    return this.call2('/api/ddnNet/tasks/', 'get', {});
  },
  getBounties() {
    return this.call2('/api/ddnNet/tasks/bounties', 'get', {});
  },
  getCommunities() {
    return this.call2('/api/ddnNet/tasks/communities', 'get', {});
  },
}

export default Request;
