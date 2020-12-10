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
                        <div className="news_detailes_title">青色组织与区块链，风马牛不相及？</div>
                        <div className="news_detailes_time">发布时间： 2019-10-28</div>
                        <div className="news_detailes_content">青色组织与
                        区块链
                        风马牛不相及？
                        人类历史上的组织范式分为红外、品红、红色、琥珀色、橙色、绿色、青色七种。青色组织是最近兴起的新的组织管理方式，与其它组织模式强调“管控”不同，青色组织所强调的是一种基于同僚关系的自主管理系统，追求的是一种身心完整以及真实的组织使命、并能不断进化。
具体来讲，青色组织弱化老板和中间管理层，让组织管理从金字塔结构向扁平化结构进化，从而省去上传下达过程中的管控机制，利用新的信任机制构建组织架构，避免“一言堂”的权威和“达成共识”的低效率。那区块链和青色组织有什么关联呢？它的出现会否对青色组织起到助推和催化作用呢？要弄清这个问题，我们首先需要知道它们之间到底有何共通之处。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news4_1} />
                        </div>
                        <div className="news_detailes_content">两者都致力于
                        去中心化的
                        管理理念
青色组织强调的是弱化老板和中间管理层，将权力和义务下放给团队和成员，由团队成员自主决策；区块链作为一种新兴技术，他强调的是去掉业务流转和信息传递的中间环节，构建一个点对点高效的信息传输通道。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news4_1} />
                        </div>
                        <div className="news_detailes_content">两者都采用
                        公开透明的
                        信任机制
青色组织采用的是基于同僚关系的互锁架构，在同僚关系网中，大家的表现、业绩和能力有目共睹，互相评价，从而形成一个去中心化的信任机制；区块链以特殊节点投票的方式，可以在短时间内完成对交易的验证和确认，以算法的方法构建了共识信任机制。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news4_1} />
                        </div>
                        <div className="news_detailes_content">两者都追求
                        最大限度的
                        组织自治
                        青色组织的最终目的是实现组织自治，由组织成员自己负责协调与他人的合作，不再与少数高层领导的特定职位绑在一起；区块链的最终目的是实现社区组织的自治，区块链系统完全由社区开发、管理和运营，从而实现一个由使命和愿景驱动的自治生态。最终实现价值最大化。
                        两者之间的不同之处在于，青色组织涉及的是一个管理学领域，而区块链涉及的却是一个信息技术领域，但也恰恰是这两者间的异同，可能会导致两者的结合注定会有不可思议的化学反应。
在信息管理系统已成为企业现代化管理重要支撑的今天，青色组织和区块链的结合究竟会擦出怎样的火花？有没有一款产品可以让我们洞悉未来？关注公众号，我们下期为您详细解答。</div>
                        <div style={{ textAlign: "center", paddingBottom: '1vw' }}>
                            <img className="news_detailes_img" src={Images.news4_1} />
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
