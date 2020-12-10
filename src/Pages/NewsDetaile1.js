import React from 'react';
import './styles/NewsDetaile.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class NewsDetaile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
    }
    render() {
        return (
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head />
                <div style={{ flex: 1 }}>
                    <img style={{ width: '100%', border: 'node', }} src={Images.NewsBanner} />
                    <div className="news_detailes_path">
                        <div className="news_detailes_left">首页 - 新闻中心 - </div>
                        <div className="news_detailes_right">公司新闻</div>
                    </div>
                    <div>
                        <div className="news_detailes_title">DDN区块链受邀参与“红榜链”应用推广调度会</div>
                        <div className="news_detailes_time">发布时间：2020-11-10</div>
                        <div className="news_detailes_content">11月5日，诸城市组织召开“红榜链”信用平台应用推广调度会，DDN区块链相关技术人员受邀出席现场会议。会上，就“红榜链”使用体验进行了经验分享，市委组织部相关领导就“红榜链”下一步工作进行了调度安排，DDN区块链技术人员结合前期测试运行情况，配合大会就“红榜链”主网上线提供技术支持。
                        大会对红榜链几个月来的运行成果给予高度评价。“红榜链”信用平台是基于DDN区块链技术进行的一次基层党建创新，为推进党建责任落实、提升党建实效、激励党员作为，提供了务实管用的手段。运行以来，在规范基层组织生活、建立信用管理运行机制、破解党建工作难题等方面，取得了显著成效。
                        “红榜链”信用平台,从激励党员自我管理出发，构建党建管理+实体经济体系，夯实党建基础；推进党组织工作，红榜链完整地记录了党组织所做的工作、活动等内容，提高了党建工作的针对性和工作效率；变革党员管理形式，将评价的权力交给党员自己，充分发挥党员主观能动性。
“红榜链”信用平台，是DDN区块链面向政府在政务管理领域又一典型落地应用。DDN区块链是国内面向企业的区块链平台，拥有自主知识产权，是国内第一批通过工信部可信区块链测试的产品之一，第一批通过国家网络信息办公室区块链信息服务备案；已经构建起从技术研发->应用落地 -> 高校培训 -> 学生就业 -> 技术研发的闭环生态，拥有国家市场监督局、中移动、微软、亚马逊等众多客户、合作伙伴；在文创版权、数字存证、党建政务、金融期货、检验检测、电子医疗等 7 大行业 15 个领域，落地了红榜链、亿检链、国标链、文创链等众多大型应用。</div>
                        <div style={{ textAlign: "center", paddingBottom: '11.97vw' }}>
                            <img className="news_detailes_img" src={Images.news1} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

NewsDetaile.propTypes = {
};

export default withRouter(NewsDetaile);
