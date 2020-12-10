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
                        <div className="news_detailes_title">链想会主题分享精彩回顾</div>
                        <div className="news_detailes_time">发布时间：2020-11-07</div>
                        <div className="news_detailes_content">11月2日，由DDN社区、链世界、Blockchain007、QB.com等主办的高品质区块链分享会《链想会》第一期成功举办，包括DDN核心开发者和社区发起人EvanLai、Blockchain007社区联合发起人DAG007在内的多位资深区块链从业者做了线上分享。本期链想会，与会者主要围绕“分布式社区如何做？”这一主题开展，现场干货满满，互动频频。据悉，链想会将持续开展线上交流分享活动，主要议题围绕着区块链热门概念、区块链与传统行业热门玩法的结合等等。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news2_1} />
                        </div>
                        <div className="news_detailes_content">
                            加速组织的进化：
                            区块链协议+青色组织架构
                            第一位分享嘉宾是DDN核心开发者和社区发起人EvanLai。Evan从一本经典书籍《重塑组织》开始，系统的梳理了组织的进化流程，最后结合区块链技术对组织的再塑造，分析了区块链社区未来的发展方向。
      对于如何做好分布式社区，Evan认为要有效结合青色组织架构与区块链协议，青色组织的架构可以让每个参与者都能够成为独立的、会思考的细胞，能够让组织更加有生命力；而区块链协议可以通过代码保证公开透明，减少组织内部的消耗，最终的目标是达到共同成长、长期陪伴、共建共赢的效果。最后，Evan介绍了DDN区块链正在为分布式社区所做的努力——一款分布式协同办公软件DATM，其主要思想便是有效结合青色组织架构与区块链协议来实现分布式组织建设。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news2_2} />
                        </div>
                        <div className="news_detailes_content">
                            分布式社区实践：
                            中心化组织到分布式社区的演变
                            第二位嘉宾是来自Blockchain007社区的联合发起人DAG007。DAG007认为 “去中心化”一词，过于尖锐，“分布式”更具包容性、广阔性，讲究“求同存异，共同发展”。“分布式”是一种比“去中心化”更高级的组织架构或者说组织形态。某种意义上来说，“分布式”是一种“多中心化”的形态。“去中心化”存在对中心化的侵略性，而“分布式”则是基于“去中心化”的演变，保持一定的自治、独立性、联动性又不与其他组织形态相抗衡。
                            DAG007认为社区的发展同样会经历中心化、去中心化、分布式3个阶段，这表现为，在前期，需要有领军人物，规划社区的发展，组织社区的组建，制定激励体系等；在中期，出现多个领军人物，完善社区的发展，推动社区的变革， 提议各类激励体系；而在后期，人人都是领军人物或者说出现N个领军人物，各式各类，各种各样的议案被提出并实施。
                            在分布式社区中，整个社区系统的创造性、活力值是最大的，但同样面临着更多“混乱”的可能。会混乱的原因是因为没有“序”。社区需要经历一个“中心化”的阶段，有人来制定规则，有人来规划安排。同时，社区需要保证足够的包容性、开放性、透明性，让其他人来参与规则的修改与完善，达到“序”的共识性。当足够多的人参与到该社区的建设中，该社区的分布式组织形态也逐步形成，营造互相推动、 互相制衡的氛围。分布式社区一定需要时间进行磨合，绝对不是一朝一夕便能完成的。
                        </div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news2_3} />
                        </div>
                        <div className="news_detailes_content" >
                            畅所欲言：社区组织成员充分享受分布式带来的效益。
                            互动分享环节，雪球obyte中国区代表，从雪球社区早期运营到后期的社区化开发团队运作剖析分布式社区的优点，社区化运作帮助雪球汇聚了众多全球开发者和区块链爱好者，项目因为分布式社区成员的参与不断创新和改进，也让参与社区开源等方式的成员，充分享受到分布式和共识机制带来的经济效益及自身成就感。
                            参与互动的树同学通过自身在区块链行业摸爬滚打的经历，介绍了现在几种常见的社区呈现方式，例举用户在DDN社区通过自身具备的技能特长，利用闲暇时间参与任务，获得收益。
                            磊在分享时说到，分布式社区具有高灵活性，可以粹炼出自己的标签，找到自己能做的事情，同时还能获得回报，并且在参与社区化开源项目提交代码的时候，自身能够获得强烈的荣誉感。
                            链想会鼓励并欢迎大家提交感兴趣的区块链话题，共同参与话题的讨论，同时，也欢迎更多的社区参与分享。
                            链想会介绍：
                            《链想会》是由DDN社区发起，由交易所、媒体、各类社区组成的一个高品质线上干货分享会，主要分享区块链热门概念，技术研讨，和最新玩法。每期我们将邀请行业高管、投资界精英、区块链技术大咖、资深研究者、各类优质社区和区块链爱好者等伙伴参与分享，我们希望通过链想会搭起区块链与其他行业的桥梁，也将尽最大可能将不同行业的热门玩法互相嫁接，实现资源共享，行业互通。
                            链想会主办方感谢下列媒体支持：</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news2_4} />
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
