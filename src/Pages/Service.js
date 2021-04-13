import React from 'react';
import './styles/Service.css';
import Head from '../components/Head';
import ServiceContent from '../components/ServiceContent';
import ServiceContent2 from '../components/ServiceContent2';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import Title2 from '../components/Title2';
import { withRouter, Link } from 'react-router-dom'
class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [
                { id: 13, path: Images.Pic20 },
                { id: 14, path: Images.service15 },
            ],
            banner2: [
                { id: 1, path: Images.Service },
                { id: 2, path: Images.service11 },
                { id: 3, path: Images.liulanqi5 },
                { id: 4, path: Images.liulanqi6 }
            ],
            banner3: [
                { id: 5, path: Images.liulanqi1 },
                { id: 6, path: Images.liulanqi2 },
                { id: 7, path: Images.liulanqi3 },
                { id: 8, path: Images.liulanqi4 }
            ],
            banner4: [
                { id: 9, path: Images.Service4 }
            ],
            banner5: [
                { id: 10, path: Images.Service1 }
            ],
            banner6: [
                { id: 11, path: Images.Service2 }
            ],
            banner8: [
                { id: 12, path: Images.Ddnui }
            ],
            show_sub_head: false
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
    _toPage(path) {
        this.props.history.push(path)
      }
    render() {
        let { banner, banner2, banner3, banner4, banner5, banner6, banner8, show_sub_head } = this.state;
        return (
            <div>
                <Head show_sub_head={show_sub_head} />
                {/* <div className="service_main_bg">
                    <div className="service_main">
                        <ServiceContent2
                            title="DDN服务"
                            btn={{ title: "查看详情", path: '/DDNDetaile' }}
                            content="基于DDN夯实的底层区块链技术和完善的敏捷开发框架，已经开发出了许多可以直接使用的服务。DDN将采取技术孵化的模式，进一步加快推进全球布局。任何一家对区块链应用有需求的实体，只要具备优质的资源，就可以得到DDN的技术支持和服务。"
                        />
                        <ServiceContent
                            name='service_content1'
                            banner={banner}
                        />
                    </div>
                </div> */}
                <div style={{position:'relative'}}>
                    <img style={{width:'100%'}} src={Images.pic222} />
                    <div style={{position:'absolute',top:'5vw',left:'5vw'}}>
                        <div style={{color:'#fff',fontSize:'2.96vw'}}>DDN服务</div>
                        <div style={{color:'#fff',fontSize:'1.18vw',lineHeight:'2vw',width:'30vw',marginTop:'1vw'}}> &nbsp;&nbsp; &nbsp;&nbsp;基于DDN夯实的底层区块链技术和完善的敏捷开发框架，已经开发出了许多可以直接使用的服务。DDN将采取技术孵化的模式，进一步加快推进全球布局。任何一家对区块链应用有需求的实体，只要具备优质的资源，就可以得到DDN的技术支持和服务。</div>
                        <Link  onClick={this._toPage.bind(this, '/DDNDetaile')} >
                            <div style={{position:'absolute',right:'0vw',bottom:'-5vw',width:'8vw',height:'3vw',border:'1px solid #fff',borderRadius:8,color:'#fff',textAlign:'center',lineHeight:'3vw'}}>查看详情</div>
                        </Link>
                    </div>
                </div>
                <div style={{ backgroundColor: '#F2F6F9FF', paddingBottom: '5vw' }}>
                    <div className="service_main">
                        <ServiceContent2
                            title="DDN-UI"
                            btn={{ title: "查看详情", path: 'http://ui.ddn.net/', out: true }}
                            content="DDN 区块链可视化云平台，在线配置适合自己的区块链、侧链或智能合约，并在线进行打包、下载。自动检索新部署的区块链、侧链的全部节点，监控其地域、状态，实时掌握网络状况。帮助普通人部署节点服务器参与挖矿，帮助用户管理多个节点服务器及其各项配置"
                        />
                        <ServiceContent
                            banner={banner8}
                            name='service_content3'
                        />
                    </div>
                </div>
                <div style={{ paddingBottom: '5vw' }}>
                    <div className="service_main2">
                        <ServiceContent
                            banner={banner2}
                            name='service_content2'
                        />
                        <ServiceContent2
                            title="区块链浏览器"
                            btn={{ title: "查看详情", path: 'http://mainnet.ddn.link/', out: true }}
                            // btn2={{title:"一键创建新链",path:'/'}}
                            content="提供用户浏览与查询区块链所有信息的工具，通过区块链浏览器，可以查看区块链的基本信息，区块高度等链的实时信息，区块信息，交易信息，节点信息，受托人信息，存证信息等。"
                        />
                    </div>
                </div>
                <div style={{ backgroundColor: '#F2F6F9FF', paddingBottom: '5vw' }}>
                    <div className="service_main">
                        <ServiceContent2
                            title="区块链钱包"
                            btn={{ title: "查看详情", path: 'http://wallet.ddn.link/', out: true }}
                            content="区块链钱包里存储着我们的DDN信息，包括DDN地址(类似于你的银行卡账号)、私钥(类似于你的银行卡密码)，区块链钱包可以存储多个DDN地址以及每个DDN地址所对应的独立私钥。"
                        />
                        <ServiceContent
                            banner={banner3}
                            name='service_content3'
                        />
                    </div>
                </div>
                <div style={{ paddingBottom: '5vw' }}>
                    <div className="service_main2">
                        <ServiceContent
                            banner={banner4}
                            name='service_content4'
                        />
                        <ServiceContent2
                            title="分布式云办公-DATM"
                            btn={{ title: "查看详情", path: 'http://datm.ddn.link/', out: true }}
                            content="分布式团队远程协作利器远程协作，实时通讯，有效沟通，团队协作，任务管理，特色社区，海量任务，各行各业都有我们的身影，随时随地，移动办公。"
                        />
                    </div>
                </div>
                <div style={{ backgroundColor: '#F2F6F9FF', paddingBottom: '5vw' }}>
                    <div className="service_main" >
                        <ServiceContent2
                            title="信息上链存证"
                            //btn={{ title: "立刻存证", path: '/Existing' }}
                            content="通过区块链实现数据的可信存储，结合基于数据多级加密和多维权限控制技术，解决电子数据易伪造、易篡改、难溯源、难校验等问题，联合共建可信生态联盟。"
                        />
                        <ServiceContent
                            name='service_content5'
                            banner={banner5}
                        />
                    </div>
                </div>
                <div className="service_main2" style={{ paddingBottom: '5vw' }}>
                    <ServiceContent
                        banner={banner6}
                        name='service_content6'
                    />
                    <ServiceContent2
                        title="DDN-UBL"
                        //btn={{title:"联系合作",path:'/'}}
                        //btn2={{title:"体验课程",path:'/'}}
                        content="高校区块链实验课程，由北京亿生生网络科技有限公司自主研发，完全独立自主知识产权，是面向高校推出的区块链科研新平台，专注于区块链教育教学、实验实训、人才培养，包含共识算法、P2P网络、交易、智能合约等模块，共计40多个实训任务。"
                    />
                </div>

                <Title2 title="On-chain application" title_sub="链上应用" />
                <div className="service_sub_title">基于DDN的侧链技术，DDN生态中，已经注册了超过上百款DAPP</div>
                <div className="service_Dapp">
                    <div className="service_Dapp_content">
                        <div className="service_Dapp_title">预测机</div>
                        <div className="service_Dapp_text">
                            从1到10中，任猜一个数字，同时消耗1个DDN进入奖金池，预测机在十分钟后，随机生成一个10以内的数字，猜对的用户，可平分资金池中的DDN，猜错的用户没有任何奖励。
                            基于智能合约生成的DAPP，剔除中心化人为因素，保证了竞猜的公平性。</div>
                    </div>
                    <img style={{ width: '39.63vw',  height: '24.47vw'}} src={Images.Dapp} />
                </div>
                <Footer />
            </div>
        );
    }
}

Service.propTypes = {
};

export default withRouter(Service);
