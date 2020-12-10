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
                        <div className="news_detailes_title">必看！DDN开发报告</div>
                        <div className="news_detailes_time">发布时间：2020-10-16</div>
                        <div className="news_detailes_content">
                            ❤欢迎新朋友多多了解我们哦❤
                            01
                            DDN白皮书1.0发布时间：2017年12月12日
                            02
                            DDN主网上线时间：2017年12月20日
                            03
                            DDN官网：http://ddn.link
                            04
                            DDN核心链主网：http://mainnet.ddn.link
                            05
                            DDN源码库：https://github.com/ddnlink
                            06
                            DDN白皮书：
                            https://github.com/ddnlink/whitepaper
                        </div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news3_1} />
                        </div>
                        <div className="news_detailes_content">
                            一个优秀的区块链项目，应该具备不断更新升级完善的过程，DDN从官网到钱包到主链目前正在紧锣密鼓的进行重大升级❤
                            1.完善主链程序
                            2.官网重大改版-进行中
                            3.钱包dao页面完善
                            4.区块链浏览器更新
                            5.本地部署主网节点，测试链上数据
                            6.优化sequelize 中insert和 insertOrUpdate
                            7.Dapp开发和功能实现
                        </div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news3_2} />
                        </div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news3_3} />
                        </div>
                        <div className="news_detailes_content">更多DDN开发内容，欢迎点击GitHub查看：https://github.com/ddnlink/ddn</div>
                        <div className="news_detailes_content">
                            1.与交易所对接，对接合作事宜，请期待更多好消息。

                            2.与广东区块链+农产品溯源项目对接，进一步合作正在对接中。

                            3.区块链加党建项目收尾完成，培训完成，新增售后对接，收集用户使用建议，进行系统优化该项目已经进入党建大面积推广使用阶段。

                            4.社区招募到贡献成员4名，将参与开发、测试、翻译、社区搭建相关工作。

                            5.社区外援招募一位，负责社区搭建、活动策划、上币方案和其他运营统筹相关工作。

                            如果你有充足的碎片时间，想通俗易懂学习区块链知识，了解我们项目方和交易所的那些事，更想要轻松赚TOKEN，那么来找我们吧！

                            不论你是会写、会翻译、会活跃社群、还是愿意做推广。

                            加入我们贡献团队，把你的碎片时间价值最大化！

                            详情请微信号：ddnlink2018
                        </div>
                        <div className="news_detailes_content">

                            如果你有充足的碎片时间，想通俗易懂学习区块链知识，了解我们项目方和交易所的那些事，更想要轻松赚TOKEN，那么来找我们吧！

                            不论你是会写、会翻译、会活跃社群、还是愿意做推广。

                            加入我们贡献团队，把你的碎片时间价值最大化！

                            详情请微信号：ddnlink2018
                        </div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news3_4} />
                        </div>
                        <div className="news_detailes_content" style={{  paddingBottom: '1vw' }}>
                            1.前端开发

                            2.资深区块链运营

                            3.新媒体运营(方案、文稿编辑方向)

                            4.UI设计

                            5.全栈开发

                            HR热线：18519600790；

                            招聘邮箱：325173953@qq.com


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
