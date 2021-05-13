import React from 'react';
import './styles/Footer.css';
import Images from '../Resources/Image'
import { withRouter, Link } from 'react-router-dom'
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [

      ],
      show_weixin_code: false
    };
  }
  componentDidMount() {
  }
  _toPage(path) {
    this.props.history.push(path)
  }
  _weixin_code() {
    let { show_weixin_code } = this.state;
    console.log('nnnn')
    this.setState({
      show_weixin_code: !show_weixin_code
    })
  }
  render() {
    let { show_weixin_code } = this.state;
    return (
      <div>
        <div className="footer_line"></div>
        <div className="footer_main">
          <div style={{width:'72.91vw',display:'flex',flexDirection:'row',margin:'0 auto'}}>
          <div className="footer_logo_block">
            <img style={{ width: '4.68vw', height: '4.68vw' }} src={Images.Logo2} />
            <div className="footer_title">用区块链技术解决人类信任问题</div>
          </div>
          <div className="footer_tab_block">
            <div className='footer_tab_bar'>
              <div>
                <div className="footer_tab_title">介绍</div>
                <div className="footer_title_line"></div>
              </div>
              <Link onClick={this._toPage.bind(this, '/DDNDetaile')} className='footer_tab'>DDN区块链</Link>
              <Link className='footer_tab' onClick={this._toPage.bind(this, '/Programme')}>解决方案</Link>
              <Link className='footer_tab' onClick={this._toPage.bind(this, '/Service')}>产品与服务</Link>
              <Link className='footer_tab' onClick={this._toPage.bind(this, '/TimeLine')}>时间轴</Link>
              <a className='footer_tab' href="https://github.com/ddnlink/whitepaper"  >白皮书</a>
            </div>
            <div className='footer_tab_bar'>
              <div>
                <div className="footer_tab_title">服务</div>
                <div className="footer_title_line"></div>
              </div>
              <Link to="/Service" className='footer_tab' onClick={this._toPage.bind(this, '/Service')}>信息</Link>
              <a href="http://wallet.ddn.net/" className='footer_tab'>主网钱包</a>
              <a href="http://wallet.testnet.ddn.net/" className='footer_tab'>测试网钱包</a>
              <a href="http://wallet.ddn.net/" className='footer_tab'>手机版钱包</a>
              <a href="http://mainnet.ddn.net/" className='footer_tab'>主网区块链浏览器</a>
              <a href="http://testnet.ddn.net/" className='footer_tab'>测试区块链浏览器</a>
              <a href="http://files.datm.link/DATM_Mobile_v2.0.1.apk" className='footer_tab'>DATM下载</a>
            </div>
            <div className='footer_tab_bar'>
              <div>
                <div className="footer_tab_title">开发者</div>
                <div className="footer_title_line"></div>
              </div>
              <a href="http://docs.ddn.net/zh-CN" className='footer_tab'>快速入门</a>
              <a href="http://docs.ddn.net/zh-CN/api" className='footer_tab'>API文档</a>
              <a href="https://github.com/ddnlink/ddn" className='footer_tab'>GitHub</a>
              <Link className='footer_tab' onClick={this._toPage.bind(this, '/FAQ')}>FAQ</Link>
            </div>
            <div className='footer_tab_bar'>
              <div>
                <div className="footer_tab_title">联系我们</div>
                <div className="footer_title_line"></div>
              </div>
              <div className='footer_tab'>operation@ddn.net</div>
              <div className='footer_tab'>support@ddn.net</div>
            </div>
          </div>
          </div>

        </div>
        <div className="footer_bottom">
          <div className="footer_date">©2020 by DDN FOUNDATION All Rights Reserved</div>
          <div className="footer_user">
            <div className="abount" onClick={this._weixin_code.bind(this)}>关注我们:</div>
            <Link onClick={this._weixin_code.bind(this)}>
              <div className="round" style={{ position: 'relative'}}   >
                <img src={Images.Weixin}  className="round_icon" />
                {show_weixin_code ? (<div className="Weixin_code">
                  <img src={Images.Weixin_code} className="Weixin_code_pic" />
                  <div className="Weixin_code_text">微信“扫一扫”<br></br>获取更多信息</div>
                </div>) : null}
              </div>
            </Link>

            <a href="https://weibo.com/ddnlink" className="round">
              <img src={Images.Weibo} className="round_icon" />
            </a>
            <a href="https://www.facebook.com/DDNlink" className="round">
              <img src={Images.Facebook} className="round_icon"  />
            </a>
            <a href="https://twitter.com/DDN_link" className="round">
              <img src={Images.Twitter} className="round_icon"  />
            </a>
            <a href="https://t.me/joinchat/H-kmwQ0dbU9fofIgd1nvVg" className="round">
              <img src={Images.Telegram} className="round_icon"  />
            </a>
            <a href="https://ddnlink.slack.com/" className="round">
              <img src={Images.Slack} className="round_icon"  />
            </a>
            <a href="https://www.instagram.com/ddn_link/" className="round">
              <img src={Images.Instagram} className="round_icon"  />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Footer.propTypes = {
};

export default withRouter(Footer);
