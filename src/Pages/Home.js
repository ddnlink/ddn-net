import React from 'react';
import './styles/Home.css';
import Head from '../components/Head';
import News from '../components/News';
import Footer from '../components/Footer';
import Images from '../Resources/Image'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
// Http 请求
import ApiRequest from '../Resources/Request';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [{ img: Images.Banner }, { img: Images.Banner }],
      height_data: 0,
      count: 0,
      totalCount: 0,
      user_count: 0,
      days: 0,
      show_sub_head: false,
      partners: [
        { id: 4, img: Images.Hezuo4, title: '两岸梧桐（厦门）集团', show_title: false },
        { id: 8, img: Images.Hezuo8, title: '香港信息技术研究院', show_title: false },
        { id: 1, img: Images.Hezuo1, title: '北京知链科技', show_title: false },
        { id: 2, img: Images.Hezuo2, title: '潭州教育', show_title: false },
        { id: 3, img: Images.media8, title: '中国移动', show_title: false },
        { id: 5, img: Images.Hezuo5, title: '赣州新链金融信息', show_title: false },
        { id: 6, img: Images.Hezuo6, title: '诸城市委组织部', show_title: false },
        { id: 7, img: Images.Hezuo7, title: '厦门茅锋网络科技', show_title: false },
      ],
      media: [
        { id: 4, img: Images.media1, title: 'FN', show_title: false },
        { id: 8, img: Images.media2, title: '一灯社区', show_title: false },
        { id: 1, img: Images.media3, title: '链叨叨', show_title: false },
        { id: 2, img: Images.media4, title: '电子时代', show_title: false },
        { id: 3, img: Images.media5, title: '链世界', show_title: false },
        { id: 5, img: Images.media6, title: '世链财经', show_title: false },
        { id: 6, img: Images.media7, title: '链一财经', show_title: false },
        { id: 7, img: Images.media9, title: '链云财经', show_title: false },
      ]
    };
  }
  componentDidMount() {
    let days = 0;
    let self = this;
    days = moment().diff(moment('2017-12-20 12:00:00'), 'days');
    let scrollTop = 0;
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
    Promise.all([
      ApiRequest.getStatus(),
      ApiRequest.getTransactions(),
      ApiRequest.getPeers(),
      ApiRequest.getDelegates()
    ]).then(function (results) {
      console.log(results)
      self.setState({
        height_data: results[0].data.height,
        count: results[1].data.count,
        totalCount: results[2].data.totalCount,
        user_count: results[3].data.totalCount,
        days: days
      })
    }).catch(function (err) {
      console.log(err)
    });

    this.instanceSwiper();
    document.getElementById('App').scrollIntoView(true);
  }

  instanceSwiper() {
    var mySwiper = new Swiper('.home_banner .swiper-container', {
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      loop: true,
      pagination: {
        el: '.home_banner .swiper-pagination',
        //type: 'custom',
        autoplayDisableOnInteraction: false,
        clickable: true,
        renderBullet: function (index, className) {
          var paginationHtml = " ";
          paginationHtml += '<span class="' + className + '"></span>'
          // if(index==2){
          //     paginationHtml += `<a href="#/NewsList" class="more_news"><img src="${Images.Dian}" class="dian3" /></a>`
          // }
          return paginationHtml;
        },
        // renderCustom: function (swiper, current, total) {
        //   var paginationHtml = " ";
        //   for (var i = 0; i < total; i++) {
        //     // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
        //     if (i === (current - 1)) {
        //       paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
        //     } else {
        //       paginationHtml += '<span class="swiper-pagination-customs"></span>';
        //     }
        //   }
        //   return paginationHtml;
        // },
      }
    })
  }

  _toPage(path) {
    this.props.history.push(path)
  }
  _showName(data, id) {
    let { partners } = this.state;
    if (data) {
      partners.forEach(function (item) {
        if (item.id == id) {
          item.show_title = true
        } else {
          item.show_title = false
        }
      })
    } else {
      partners.forEach(function (item) {
        item.show_title = false
      })
    }
    this.setState({
      partners: partners
    })
  }
  _showName2(data, id) {
    let { media } = this.state;
    if (data) {
      media.forEach(function (item) {
        if (item.id == id) {
          item.show_title = true
        } else {
          item.show_title = false
        }
      })
    } else {
      media.forEach(function (item) {
        item.show_title = false
      })
    }
    this.setState({
      media: media
    })
  }
  render() {
    let { banner, height_data, count, totalCount, user_count, days, show_sub_head, partners, media } = this.state;
    return (
      <div>
        <Head show_sub_head={show_sub_head} head_width={true} />
        <div className="home_banner" style={{ position: 'relative' }}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="banner" >
                  <div className="banner_content" >
                    <div className="banner_title" style={{ paddingTop: '7.29vw' }}>开源的区块链敏捷开发框架</div>
                    <div className="banner_title2">Open source block chain Agile Development Framework</div>
                    <div className="banner_title3" style={{ marginTop: '2.5vw' }}>DDN，英文“Data Delivery Network”的简称，新一代数据</div>
                    <div className="banner_title3" style={{ marginTop: '1.98vw' }}>分发网络，是面向企业的区块链应用平台。</div>
                  </div>
                  <div className="banner_btn">
                    <Link to="/DDNDetaile" className="detaile">查看详情</Link>
                    <a href="http://docs.ddn.link" className="detaile">快速上手</a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="banner1" >
                  <div style={{ width: '25vw', paddingTop: '11vw', marginLeft: '11vw' }}>
                    <div className="banner_2_title">可信的</div>
                    <div className="banner_2_title" style={{ marginTop: '0.5vw' }}>区块链平台</div>
                    <div className="banner_line"></div>
                    <div style={{ lineHeight: '2vw', marginTop: '1vw', fontSize: '1.17vw', color: '#fff' }}>可信区块链推进计划于2018年9月20日对DDN<br /> 区块链平台进行了可信区块链功能测试。 <br />DDN满足可信区块链标准，通过 <br />详审，是一款可信的 <br />区块链产品。 </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="swiper-pagination" style={{ position: 'relative', display: 'flex', zIndex: 100, left: '5.72vw', top: '-9.02vw', width: '31.25vw' }}></div>
        </div>
        <div className="data_bar">
          <img src={Images.Pic1} className="pic1" />
          <div className="data_bar_inner">
            <div className="data_bar_col" >
              <div className="icon_block" >
                <img className="icon1" src={Images.Icon1} />
                <div>
                  <div className="data_title">区块高度</div>
                  <div className="data_number">{height_data}</div>
                </div>
              </div>
              <div className="icon_block" >
                <img className="icon1" src={Images.Icon4} />
                <div>
                  <div className="data_title">服务器节点</div>
                  <div className="data_number">{totalCount}</div>
                </div>
              </div>
            </div>
            <div className="data_bar_col" >
              <div className="icon_block" >
                <img className="icon1" src={Images.Icon2} />
                <div>
                  <div className="data_title">运行天数</div>
                  <div className="data_number">{days}</div>
                </div>
              </div>

              <div className="icon_block" >
                <img className="icon1" src={Images.Icon5} />
                <div>
                  <div className="data_title">已注册受托人</div>
                  <div className="data_number">{user_count}</div>
                </div>
              </div>
            </div>
            <div className="data_bar_col" >
              <div className="icon_block">
                <img className="icon1" src={Images.Icon3} />
                <div>
                  <div className="data_title">交易总数</div>
                  <div className="data_number">{count}</div>
                </div>
              </div>
              <div className="icon_block">
                <img className="icon1" src={Images.Icon6} />
                <div>
                  <div className="data_title">账户总数</div>
                  <div className="data_number">1567</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="success_project_bar" style={{ position: 'relative' }}>
          <div style={{ display: "flex", flexDirection: 'row', width: '72.91vw', justifyContent: 'space-between', margin: '0 auto' }}>
            <div >
              <div className="success_project_bar_title">企业成功案例丰富</div>
              <div className="success_project_bar_sub">大量优秀的企业与DDN合作，为企业引入区块链技术，为企业数据，业务注入催化剂，领跑科技前沿，抢占商业机遇。</div>
              <div className="success_project_detaile">
                <img src={Images.Dian} className="home_dian" />
                <Link onClick={this._toPage.bind(this, '/Programme')} className="detaile_text"> 了解更多</Link>
              </div>
            </div>
            <div className="photo_block">
              <img src={Images.Photo} style={{ width: '32.03vw' }} />
            </div>
          </div>
          <div className="DDN_bg">DDN</div>
        </div>
        <div className="cooperation_bar">
          <div className="cooperation_title_bar">
            <img src={Images.Line11} className="line" />
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '-1vw' }}>
              <div className="cooperation_title">OUR PARTNER</div>
              <div className="cooperation_title_sub">合作伙伴</div>
            </div>
            <img src={Images.Line2} className="line" />
          </div>
          <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginTop: '5.2vw', paddingLeft: '13.02vw', paddingRight: '13.02vw' }}>
            {partners.map((item, index) => {
              return (
                <div style={{ width: '15vw', marginBottom: '5vw', position: 'relative' }}>
                  <div style={{ height: '3.5vw', lineHeight: '3.5vw' }}>
                    <img onMouseOver={this._showName.bind(this, true, item.id)} onMouseOut={this._showName.bind(this, false, item.id)} className="cooperation" src={item.img} />
                  </div>
                  {item.show_title ? (<div className="partner_title">{item.title}</div>) : null}
                </div>
              )
            })}
          </div>
          <div className="cooperation_title_bar" style={{ marginTop: 1 }}>
            <img src={Images.Line11} className="line" />
            <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '-1vw' }}>
              <div className="cooperation_title">COOPERATIVE MEDIA</div>
              <div className="cooperation_title_sub">合作媒体</div>
            </div>
            <img src={Images.Line2} className="line" />
          </div>
          <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginTop: '5.2vw', paddingLeft: '13.02vw', paddingRight: '13.02vw' }}>
            {media.map((item, index) => {
              return (
                <div style={{ width: '15vw', marginBottom: '5vw', position: 'relative' }}>
                  <div style={{ height: '3.5vw', lineHeight: '3.5vw' }}>
                    <img onMouseOver={this._showName2.bind(this, true, item.id)} onMouseOut={this._showName2.bind(this, false, item.id)} className="cooperation" src={item.img} />
                  </div>
                  {item.show_title ? (<div className="partner_title">{item.title}</div>) : null}
                </div>
              )
            })}
          </div>
        </div>
        <div className="community">
          <div style={{width:'72.91vw',display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'0 auto'}}>
            <img src={Images.Pic2} className="pic2" />
            <div className="community_content">
              <div className="community_content_title">社区力量成就无限不可能</div>
              <div className="community_content_sub">DDN全球社区将首先实践DDN“去中心、去组织、去管理”的理念。按功能划分，DDN全球社区包含节点管理、技术开发、运营管理、市场推广4个等多个子板，已推出DDN社区管理((绿皮书》正式版，面向全球招募开发、运营、管理和翻译团队。</div>
              <div className="success_project_detaile2">
                <img src={Images.Dian} className="home_dian" />
                <Link onClick={this._toPage.bind(this, '/Community')} className="detaile_text"> 了解更多</Link>
              </div>
            </div>
          </div>
        </div>
        <News />
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
};

export default Home;
