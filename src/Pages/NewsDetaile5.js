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
                        <div className="news_detailes_title">DDN | 时刻准备，马上出发</div>
                        <div className="news_detailes_time">发布时间： 2019-08-17</div>
                        <div className="news_detailes_content">Talk
                        还 真 是 怀 念 当 初 , 能 够 在 群 里
                        肆 无 忌 惮 互 动 的 日 子 啊 ！
                        ——imfly
                        DDN核心开发者
                        8月16日在QQ1群现身说法，
                        对用户提出的问题一一作答，ddn blockchain 3.0
                        开源在即！
                        Q
                        鸣人 ：我在github上看到你们浏览器已经开源了，主网要开源了？
                        A
 imfly ：DDN主网即将开源!同时将提供完善的开发文档，并为众多开发爱好者提供支持！ddn blockchain 3.0，可以完美支持插件化的扩展，实现多链并行，跨链互通，真是让大家久等了！</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news5_1} />
                        </div>
                        <div className="news_detailes_content" style={{ paddingBottom: '1vw' }}>Q

                        写作爱好者 ：技术共享了，那拼的就是市场。如果有人抄袭搞个山寨版的，宣传好又有市场渠道，是否会对DDN造成影响？
                       
                        A

                        imfly ：之前这个问题我们确实想过，不过现在不用担心了。这一年多来，我们做了很多项目，为的是经济寒冬，验证商业模式，打磨产品，占领市场。DDN已经服务了众多大型区块链产品：智慧社区、智慧旅游、券式系统、智能微网、检验检测、版权存证、无车承运、电子医疗等。这些产品，因为各种原因，不能像币圈那样，大肆宣扬，所以我们只能保持沉默。因为我们是技术方，在合同的约束下，要对项目做好保密工作，一旦时机成熟，这些产品就会爆发，所以我们并不担心。





                        Q

                        cool ：DDN的跨链用的什么技术?



                        A

                        imfly ：目前主要是采取ddn 独有的dapp模式，独立node虚拟机，开发跨链智能合约。到时候，我们会通过文档、视频等方式，一起与大家探讨和普及。





                        Q

                        加州知梦 ：开源之后DDN是否加大力度推广?是否会对DDN持有用户空投？



                        A

                        imfly ：当然！DDN除了在为开源做准备，同时也在做一款基于DDN区块链的应用。开源后我们将会加大宣传力度，扩大社区建设，大力推广产品，为DDN和这款应用做更多的宣传推广工作，具体活动和合作我们将在社群和公众号等官方渠道公布，到时还请大家多多参与。



                        很多用户关心空投，按照之前公布的DDN跨链发展逻辑，每个使用DDN区块链技术的产品都会质押一部分的DDN。在当前这个阶段，我们与项目方约定，将这部分的对应TOKEN用来空投。所以只要项目有TOKEN，就会有空投，多少而已。而且这些TOKEN在系统里，实现了自循环，大家可以多了解！





                        Q

                        雕卓 ：一直提到这个DATM到底是什么?



                        A

                        imfly ：datm是一个分布式任务管理系统，系统将ddn作为核心燃料，是能够支持ddn实现社区自治的工具，现在已经有公司对这个产品感兴趣，我们将免费提供给用户使用。



                        当然，我们也会通过SDK的方式，让区块链圈子里的其他项目直接扩展加入进来，这样这个产品就会更加好玩，欢迎大家参与测试。





                        Q

                        无言人 ：海外社群和新交易所计划有吗？



                        A

                        imfly ： 我们已经有美国、日本和新加坡的合作团队，也会通过各种渠道，寻找海外力量。



                        交易所这边，从半月报可以知悉，其实我们一直都在和多个交易所积极对接，有好消息会第一时间告知大家。



                        Q

                        山海不可平 ：现在有哪些企业正在使用我们的产品吗？



                        A

                        imfly ：有很多，包括国家级的检测中心，上市企业等，也希望大家了解，我们的软件是可以交付企业用户的，现在已经有山东、大连、甘肃、安徽的用户和企业成为我们的城市合伙人，帮我们推广产品，拓展渠道。



                        群里的朋友也可以作为城市代理人，服务于你身边的企业，团队可以给你技术支持。



                        DDN核心开发者有话说
                        <br/>
                        目前我们已经在黑龙江、山东成立了2家分公司，也希望社群的朋友能够多了解咱们的产品，DDN可以服务于当地政府、企业，目前政府的创新资金非常欢迎区块链，咱们也有这方面的案例和经验，技术也很成熟，有资源渠道的朋友欢迎合作，深度参与。



因为DATM是针对分布式的任务管理系统，能很好的帮助各区块链项目方做人员和任务管理，到时将和其他项目方，社群合作，发布后还请大家多用多问多推广。</div>
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
