import React from 'react';
import './styles/Programme.css';
import 'swiper/css/swiper.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Title from '../components/Title';
import Title2 from '../components/Title2';
import ValueBar from '../components/ValueBar';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class Programme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: [{ id: 1, title: '降低成本，监管友好', image: Images.Pic6, content: '打通数据孤岛，由区块链底层来保证数据的同步一致，降低机构间通信协作成本。监管机构加入节点后可实时监控区块链上的交易，有效提高监管效能。' },
      { id: 2, title: '降低交易成本', image: Images.Pic7, content: '对于多机构间资产流转与交易，参与机构基于区块链上的可信交易数据实现实时清结算，降低交易与对账成本。' },
      { id: 3, title: '高效接入新参与方', image: Images.Pic8, content: '提供标准化API接口与多种接入方式、工具，多通道、可插拔、易拓展。当业务联盟链中有新成员加入时，可以提高接入效率，降低开发成本。' }],
      value2: [{ id: 1, title: '信息记录', image: Images.Pic11, content: '商品从生产到消费的全部关键信息区块链记录并加密存储，防止数据伪造，授权用户可查询验证。' },
      { id: 2, title: '数据追溯', image: Images.Pic12, content: '商品码映射区块链账户地址，共享账本，连接商品权属及转移关系，通过智能手机、传感器装备等可对商品码进行自动识别，数据可实时抽取、验证。' },
      { id: 3, title: '多方参与', image: Images.Pic13, content: '区块链多中心网络信任，企业不仅能够掌握上下游企业情况、跟踪交易状况，了解间接环节直至终端消费者信息；同时提供监管方介入接口，有利于政府/市场监督。' }],
      value3: [{ id: 1, title: '提升隐私保护', image: Images.Pic16, content: '多重加密算法，支持完全公开和授权访问的权限控制策略，对用户公示敏感数据脱敏，保护用户隐私。' },
      { id: 2, title: '提高数据公信力', image: Images.Pic17, content: '基于区块链不可篡改的技术特征，解决存证数据可信度问题。' },
      { id: 3, title: '提供版权保护', image: Images.Pic18, content: '文字、图片、视频、软件等各种数字内 容，都可以在DDN区块链上轻松登记、 注册，永久保存，轻松追溯。' }],
      show_sub_head:false
    };
  }
  componentDidMount() {
    document.getElementById('App').scrollIntoView(true);
    let scrollTop = 0;
    let self=this;
    window.onscroll = function () {
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > (321 / 1920) * document.documentElement.clientWidth.toFixed(0)) {
        self.setState({
          show_sub_head: true,
        })
      } else if (scrollTop >= 0 && scrollTop <= (160 / 1920) * document.documentElement.clientWidth.toFixed(0)) {
        self.setState({
          show_sub_head: false,
        })
      }
    }
  }
  contact() {
    this.props.history.push('Booking')
  }
  render() {
    let { value1, value2, value3 ,show_sub_head} = this.state;
    return (
      <div>
        <Head show_sub_head={show_sub_head} />
        <div className="programme_banner">
          <div style={{textAlign:'center',paddingTop:'8.22vw',width:'20.15vw',marginLeft:'28.43vw'}}>
            <div className="programme_banner_title">让杰出的企业</div>
            <div className="programme_banner_sub">已服务于 100+ 家企业</div>
          </div>
        </div>
        <Title title="Digital assets" title_sub="数字资产" detaile="将有形、无形的资产转变为区块链可流动、可交易的数字资产" />
        <div className="projectDetaileView" >
          <img src={Images.Pic5} style={{ width: '51.77vw', height: '33.38vw' }} />
          <div className="projectDetaile">
            <div className="projectDetaileTitle">方案简介</div>
            <div className="projectDetaileText">将传统的非标准资产转换为区块链上的标准化数字资产，并在区块链上进行交易，将线下交易线上化；参与机构共享交易账本，在清结算时无需进行二次对账，降低交易与清结算成本。</div>
          </div>
        </div>
        <Title2 title="Digital asset value" title_sub="数字资产价值" />
        <ValueBar array={value1} />
        <div className="programme_bg">
          <Title2 title="Applications" fontcolor="#fff" title_sub="应用案例" />
          <div className="case" >
           <img src={Images.Pic9} className="pic9" />
            <div className="case_content">
              <div className="case_title">红榜链——山东某市委组织部</div>
              <div className="case_text">&nbsp;&nbsp;&nbsp;&nbsp;全国首款基于区块链的智慧党建信用平台。本案例从党员信用积分出发，构建党建管理+实体经济体系。传统的党员积分管理，都是党组织评价党员，是自上而下的管理模式，党组织任务重，积极性不高，党员反感不配合问题多，所以党员评价管理基本上都是不了了之。</div>
              <div className="case_text2">&nbsp;&nbsp;&nbsp;&nbsp;本案例借助区块链公开、透明、不可篡改的特性，将党员评价和积分的权利下放给每个党员，通过排行和积分记录党员个人信用，党组织仅制定规则、发现纠正问题，变被动为主动、变他评为自评，公正、可信，大大提高党员积极性和主动性，是一种新尝试。</div>
              <a href="http://www.lcxf.gov.cn" style={{paddingTop:'2vw',display:'block'}} className="case_text2" >查看详情 》</a>
            </div>
          </div>
          <div className="DDN_bg">DDN</div>
        </div>
        <div style={{ marginTop: '5.2vw' }}>
          <Title title="Blockchain traceability" title_sub="区块链溯源" detaile="记录产品全生命周期，建立安全可信的品质溯源体系" />
          <div className="projectDetaileView" >
            <div className="projectDetaile2">
              <div className="projectDetaileTitle">方案简介</div>
              <div className="projectDetaileText">将传统的非标准资产转换为区块链上的标准化数字资产，并在区块链上进行交易，将线下交易线上化；参与机构共享交易账本，在清结算时无需进行二次对账，降低交易与清结算成本。</div>
            </div>
            <img src={Images.Pic10} style={{ width: '51.77vw', height: '33.38vw' }} />
          </div>
        </div>
        <Title2 title="Traceability value" title_sub="溯源价值" />
        <ValueBar array={value2} />

        <div className="programme_bg">
          <Title2 title="Applications" fontcolor="#fff" title_sub="应用案例" />
          <div className="case" style={{ marginBottom: '11.98vw' }}>
           <img src={Images.Pic35} className="pic9" />
            <div className="case_content">
              <div className="case_title">LIMSChain 亿检链</div>
              <div className="case_text">&nbsp;&nbsp;&nbsp;&nbsp;全国首款基于区块链的检验检测平台。该产品符合国家国际标准，可有效帮助检验检测机构提高效率、降低成本，提升检验检测机构信息化水平，充分利用区块链安全、可追溯的特点，保证检测数据脱敏，保护检测数据安全，打通内部数据壁垒，给检验检测机构赋能，为检测数据赋值。</div>
              <div className="case_text2">&nbsp;&nbsp;&nbsp;&nbsp; LIMSChain检验检测平台，底层区块链首批通过工信部可信区块链测试，应用层符合GB-17025标准，场景覆盖疾控、食品、药品、环境、消防、计量等多个行业的检测实验室，包含样品、检测、质控、文档、库存等几十个基础管理模块，简单易用。</div>
              <a href="http://www.limschain.com" style={{paddingTop:'1vw',display:'block'}} className="case_text2" >查看详情 》</a>
            </div>
          </div>
          <div className="DDN_bg">DDN</div>
        </div>
        <div style={{paddingTop:'3vw'}}>
        <Title title="Blockchain deposit certificate" title_sub="区块链存证" detaile="区块链技术让电子数据实现不可篡改" />
        </div>
        <div className="projectDetaileView" >
          <img src={Images.Pic15} style={{ width: '51.77vw', height: '33.38vw' }} />
          <div className="projectDetaile">
            <div className="projectDetaileTitle">方案简介</div>
            <div className="projectDetaileText">通过区块链实现数据的可信存储，结合基于数据多级加密和多维权限控制技术，解决电子数据易伪造、易篡改、难溯源、难校验等问题，联合共建可信生态联盟。</div>
          </div>
        </div>
        <Title2 title="Deposit value" title_sub="存证价值" />
        <ValueBar array={value3} />
        <div className="programme_bg">
          <Title2 title="Applications" fontcolor="#fff" title_sub="应用案例" />
          <div className="case" style={{ marginBottom: '11.98vw' }}>
            <img src={Images.Pic36} className="pic9" />
            <div className="case_content">
              <div className="case_title">Ebookchain</div>
              <div className="case_text">&nbsp;&nbsp;&nbsp;&nbsp;首款基于区块链的版权保护与知识分销系统。它坚守“让有知识的人富起来”的使命，实现文本、图片、视频的确权、授权和维权，打通了原创作者，从文本创作到知识分发，再到版权转化和交易的全过程。该系统提供了文本写作、链上存证、媒体号、去中心化博客（网站）等极具创新的功能。</div>
            </div>
          </div>
          <div className="DDN_bg">DDN</div>
        </div>
        <div className="banner3">
          <div className="banner3_title" onClick={this.contact.bind(this)}>联系我们</div>
          <div className="banner3_number">support@ddn.link</div>
        </div>
        <Footer />
      </div>
    );
  }
}

Programme.propTypes = {
};

export default withRouter(Programme);
