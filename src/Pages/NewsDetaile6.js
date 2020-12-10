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
                        <div className="news_detailes_title">DDN区块链：面向未来，全面发力！</div>
                        <div className="news_detailes_time">发布时间：2019-11-04</div>
                        <div className="news_detailes_content">
                            11月1日，DDN基金会召开社区核心贡献者大会，从社区建设情况、DATM产品定位和市场情况等三个方面，总结了近期工作，规划了下一步重点任务。
                        </div>
                        <div className="news_detailes_content">
                            《社区建设方面》

                            DDN社区当前共掌握社群90多个，社群类型涵盖微信群、QQ群、电报群等多种类型；媒体宣发渠道23家，覆盖区块链主流媒体，互联网新媒体及传统门户网站等多种媒体类别，基本形成了私域流量与公域流量的有效分发和触达。下一阶段，DDN社区将在巩固私域流量和公域流量的基础上，大力发展私域社交和公域社交。具体表现为：

                            1. 空投。按DDN区块链智能合约，联合链上区块链产品对DDN用户进行空投；

                            2. 节点。扩大DDN节点竞选范围，向优秀贡献者提供链上其他产品的节点优先竞选资格；

                            3. 合作。与外部社群、区块链团体及组织积极对接，提高活跃度；

                            4. 活动。积极参与区块链行业活动和会议，增加事件策划和曝光度等。
                        </div>
                        <div className="news_detailes_content">
                            DATM是基于DDN区块链开发的一款任务管理系统，愿景是打造一个去中心化的任务管理与协作生态，实现去中心化的项目组织形式，彻底打破社区组织的时间、地点、规模限制。核心功能主要包括任务、项目、社区、广场、奖励、评价等，可以轻松实现社区工作管理与社区人员管理，促进社区管理朝公开、透明的方向发展。项目方、社区成员可以在这个生态内发布和承接任务，并通过DATM的智能合约和评价系统构建连接各方的信任评价体系。
                        </div>
                        <div className="news_detailes_content" style={{paddingBottom:'2vw'}}>
                            DDN区块链，自主知识产权，是国产最早的企业级区块链技术，其目标是为实体赋能、为数据赋值，“让杰出的企业更杰出”。从国家最高领导人最近一次关于区块链的讲话来看，DDN服务实体经济的方向选对了，阻碍DDN落地和发展的风险减少了，属于DDN的时代已经到来！ </div>
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
