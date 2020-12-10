import React from 'react';
import './styles/Development.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom';
import ServiceContent2 from '../components/ServiceContent2';
import ServiceContent from '../components/ServiceContent';
class Development extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [
                { id: 1, path: Images.Shequ },
            ],
            banner2: [
                { id: 1, path: Images.Student },
            ],
            show_sub_head:false
        };
    }
    componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
        let scrollTop = 0;
        let self = this;
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
    render() {
        let { banner ,banner2,show_sub_head} = this.state;
        return (
            <div>
                <Head show_sub_head={show_sub_head} />
                <div className="Development_banner">
                    <div className="Development_banner_left">
                        <div className="Development_banner_title">轻松上手企业级区块链开发</div>
                        <div className="Development_banner_sub">DDN是一款企业级的区块链应用平台，面向开发者却实现了简单易用，快速上手。具有完整的文档，定制化课程，并搭建企业级区块链学习实验平台UBL，实现无门槛加入。</div>
                    </div>
                    <img className="Development_banner_img" src={Images.Code} />
                </div>
                <div className="development_icon_bar">
                    <a href="http://docs.ddn.link/zh-CN" className="development_icon_view" style={{ paddingLeft: '3.54vw' }}>
                        <img src={Images.Document} className="development_icon" />
                        <div className="development_icon_title">文档</div>
                        <div className="development_icon_sub">查看DDN相关文档，快速开启DDN链上开发</div>
                    </a>
                    <a href="http://docs.ddn.link/zh-CN/guide" className="development_icon_view">
                        <img src={Images.Guide} className="development_icon" style={{ width: '6.35vw', height: '6.35vw' }} />
                        <div className="development_icon_title">指南</div>
                        <div className="development_icon_sub">跟随指南，开发实际案例应用</div>
                    </a>
                    <a href="http://docs.ddn.link/zh-CN/api" className="development_icon_view">
                        <img src={Images.Jiekou} className="development_icon" style={{ width: '6.66vw', height: '6.35vw' }} />
                        <div className="development_icon_title">接口</div>
                        <div className="development_icon_sub">DDN完整，接口文档，快速定位功能和方法</div>
                    </a>
                    <a href="https://github.com/ddnlink/ddn" className="development_icon_view" style={{ paddingRight: '3.54vw' }}>
                        <img src={Images.GitHub} className="development_icon" style={{ width: '6.66vw', height: '6.66vw' }} />
                        <div className="development_icon_title">GitHub</div>
                        <div className="development_icon_sub">DDN官方源代码库</div>
                    </a>
                </div>
                <div className="service_main2" style={{ paddingBottom: '4.16vw',width:'72.91vw' }}>
                    <ServiceContent
                        banner={banner}
                        name='service_content4'
                    />
                    <ServiceContent2
                        title="DDN技术贡献团队"
                        btn={{ title: "了解更多", path: 'https://github.com/ddnlink/',out:true }}
                        content="DDN技术贡献团队即技术核心团队。成员对DDN技术架构和产品有深入的了解，共同更新维护DDN技术代码。看看你是否能够加入我们的开发小组"
                    />
                </div>
                <div className="datm_bar">
                    <div style={{width:'72.91vw',display:"flex",justifyContent:'space-between',margin:'0 auto',marginTop:'3vw'}}>
                        <div className="datm_col" >
                        <a href="http://datm.ddn.link/" ><img className="datm" src={Images.DATM} /></a>
                            <a href="http://datm.ddn.link/" className="datm_title">加入DATM社区</a>
                            <div className="datm_item">
                                <div className="datm_title_sub">代码贡献者</div>
                                <div className="datm_number">13</div>
                                <div className="datm_title_sub">人</div>
                            </div>
                        </div>
                        <div className="datm_col" >
                            <a href="https://github.com/ddnlink/ddn" ><img className="datm" src={Images.GitHub2} /></a>
                            <a href="https://github.com/ddnlink/ddn" className="datm_title" style={{border:'none'}}>GitHub</a>
                            <div className="datm_item">
                                <div className="datm_title_sub">关注/Star</div>
                                <div className="datm_number">103</div>
                                <div className="datm_title_sub">人</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service_main2" style={{ paddingBottom: '4.166vw',width:'72.91vw' }}>
                    <ServiceContent
                        banner={banner2}
                        name='service_content4'
                    />
                    <ServiceContent2
                        title="DDN-UBL"
                        btn={{ title: "开始学习", path: 'http://docs.ddn.link/zh-CN',out:true}}
                        content="区块链属于近年新兴的概念，还未被人员广泛知晓，区块链技术相关资料相对匮乏，学习上手门槛相对较高。针对以上问题，DDN自主研发了DDN-UBL，区块链实验课程，专注于区块链教育教学、实验实训、人才培养，包含共识算法、P2P网络、交易、智能合约等模块，共计40多个实训任务，带你零门槛学习区块链技术，掌握区块链开发技能，跻身技术前沿。"
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

Development.propTypes = {
};

export default withRouter(Development);
