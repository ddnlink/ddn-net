import React from 'react';
import './styles/Head.css';
import Images from '../Resources/Image';
import { withRouter, Link } from 'react-router-dom'
class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { id: 1, title: '首页', active: true, path: '/' },
        { id: 2, title: '解决方案', active: false, path: '/Programme' },
        { id: 3, title: '产品与服务', active: false, path: '/Service' },
        { id: 4, title: '社区', active: false, path: '/Community' },
        { id: 5, title: '开发者', active: false, path: '/Development' },
        // { id: 6, title: '钱包', active: false, path: '/Wallet' },
        // { id: 7, title: '浏览器', active: false, path: '/Browser' }
      ],
      is_Wallet: false,
      is_Browser: false,
      is_Over_Browser: false,
      is_Over_Wallet: false
    };
  }
  componentDidMount() {
    let self = this;
    let { tabs } = this.state;
    tabs.forEach(function (item) {
      if (item.path == self.props.history.location.pathname) {
        item.active = true
      } else {
        item.active = false
      }
    })
    if (self.props.history.location.pathname == '/Programme/Booking') {
      tabs.forEach(function (item) {
        if (item.path == '/Programme/') {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
    if (self.props.history.location.pathname == '/DDNDetaile') {
      tabs.forEach(function (item) {
        if (item.path == '/') {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
    if (self.props.history.location.pathname == '/Service/Existing') {
      tabs.forEach(function (item) {
        if (item.path == '/Service/') {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
    this.setState({
      tabs: tabs
    })
  }
  toUrl(path) {
    this.props.history.push(path)
  }
  handleClick(id, path) {
    let self = this;
    let { tabs, is_Wallet, is_Browser } = this.state;
    tabs.forEach(function (item) {
      if (item.id == id) {
        item.active = true
      } else {
        item.active = false
      }
    })
    this.setState({
      tabs: tabs
    })
    if (path == '/Wallet') {
      this.setState({
        is_Wallet: !is_Wallet,
        is_Browser: false
      })
      return;
    } else if (path == '/Browser') {
      this.setState({
        is_Browser: !is_Browser,
        is_Wallet: false
      })
      return;
    } else {
      this.setState({
        is_Browser: false,
        is_Wallet: false
      })
    }
    this.props.history.push(path)
  }
  _onMouseOver(id, path) {
    let { is_Wallet, is_Browser } = this.state;
    if (path == '/Wallet') {
      this.setState({
        is_Wallet: true
      })
      return;
    } else if (path == '/Browser') {
      this.setState({
        is_Browser: true
      })
      return;
    }
  }
  _onMouseOver2(id, path) {
    console.log('wwwww')
    if (path == '/Wallet') {
      this.setState({
        is_Over_Wallet: true
      })
      return;
    } else if (path == '/Browser') {
      this.setState({
        is_Over_Browser: true
      })
      return;
    }
  }
  _onMouseOut(id, path) {
    let { is_Wallet, is_Browser } = this.state;
    console.log(path)
    if (path == '/Wallet') {
      this.setState({
        is_Wallet: false,
        is_Browser: false
      })
      return;
    } else if (path == '/Browser') {
      this.setState({
        is_Browser: false,
        is_Wallet: false
      })
      return;
    }
  }
  render() {
    let { tabs, is_Wallet, is_Browser, is_Over_Browser } = this.state;
    let { show_sub_head, head_width } = this.props;
    console.log(is_Over_Browser)
    return (
      <div>
        {show_sub_head ? (<div className={head_width ? "min_head_main2" : "min_head_main"}>
          <div className="mini_head_inner">
            <Link onClick={this.handleClick.bind(this, 1, '/')}><img className="mini_logo" src={Images.Logo} /></Link>
            <div className="mini_tabBar">
              {
                tabs.map((item, index) => {
                  return (
                    <Link  style={{ textDecoration: 'none', height: '3.9vw', lineHeight: '3.9vw' }} key={index} onClick={this.handleClick.bind(this, item.id, item.path)} >
                      <div className={item.active ? "mini_tab_active" : "mini_tab"}>{item.title}</div>
                    </Link>
                  )
                })
              }
              <div className="_onMouseOut3">
                <Link  style={{ textDecoration: 'none', height: '3.9vw', lineHeight: '3.9vw' }}  >
                  <div className="mini_tab">钱包</div>
                </Link>
                <div className="mini_tab_list">
                  <a href="http://wallet.ddn.link/" style={{ textDecoration: 'none' }}> <div className="tab_list_btn">主网钱包</div></a>
                  <a href="http://wallet.testnet.ddn.link/" style={{ textDecoration: 'none' }}> <div className="tab_list_btn">测试网钱包</div></a>
                  <a href="http://wallet.ddn.link/" style={{ textDecoration: 'none' }}> <div className="tab_list_btn">手机版钱包</div></a>
                </div>
              </div>
              <div className="_onMouseOut4">
                <Link  style={{ textDecoration: 'none', height: '3.9vw', lineHeight: '3.9vw' }}  >
                  <div className="mini_tab">浏览器</div>
                </Link>
                <div className="mini_tab_list2">
                  <a href="http://mainnet.ddn.link/" style={{ textDecoration: 'none' }}> <div className="tab_list_btn">主网区块链浏览器</div></a>
                  <a href="http://testnet.ddn.link/" style={{ textDecoration: 'none' }}> <div className="tab_list_btn">测试网区块链浏览器</div></a>
                </div>
              </div>

               
              {/* <div className="mini_language">EN</div> */}
            </div>
          </div>
        </div>) : (
            <div className="head"   >
              <div className="head_inner">
                <Link onClick={this.handleClick.bind(this, 1, '/')}><img className="logo" src={Images.Logo} /></Link>
                <div className="tabBar">
                  {
                    tabs.map((item, index) => {
                      return (
                        <Link style={{ textDecoration: 'none' }} key={index} onClick={this.handleClick.bind(this, item.id, item.path)} >
                          <div className={item.active ? "tab_active" : "tab"}>{item.title}</div>
                          <div className={item.active ? "head_tab_line" : "head_tab_line2"}></div>
                        </Link>
                      )
                    })
                  }
                  <div className="_onMouseOut">
                    <Link style={{ textDecoration: 'none' }} onClick={this.handleClick.bind(this, 6, '/Wallet')} >
                      <div className="tab" >钱包</div>
                      <div className="head_tab_line2"></div>
                    </Link>
                    <div className="tab_list">
                      <a href="http://wallet.ddn.link/" className="tab_list_a" > <div className="tab_list_btn">主网钱包</div></a>
                      <a href="http://wallet.testnet.ddn.link/" className="tab_list_a"  > <div className="tab_list_btn">测试网钱包</div></a>
                      <a href="http://wallet.ddn.link/" className="tab_list_a"  > <div className="tab_list_btn">手机版钱包</div></a>
                    </div>
                  </div>

                  <div className="_onMouseOut2">
                    <Link style={{ textDecoration: 'none' }} onClick={this.handleClick.bind(this, 7, '/Browser')} >
                      <div className="tab">浏览器</div>
                      <div className="head_tab_line2"></div>
                    </Link>
                    <div className="tab_list2">
                      <a href="http://mainnet.ddn.link/" className="tab_list_a"  > <div className="tab_list_btn">主网区块链浏览器</div></a>
                      <a href="http://testnet.ddn.link/" className="tab_list_a"  > <div className="tab_list_btn">测试网区块链浏览器</div></a>
                    </div>
                  </div>
                  {/* <div className="language">EN</div> */}
                </div>
              </div>
            </div>
          )}
      </div>




    );
  }
}
Head.propTypes = {
};

export default withRouter(Head);
