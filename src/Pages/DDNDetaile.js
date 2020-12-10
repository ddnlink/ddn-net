import React from 'react';
import './styles/DDNDetaile.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
import Title from '../components/Title';
class DDNDetaile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test_device: [
                { id: 1, url: Images.ddn1, title: '预测机' },
                { id: 2, url: Images.ddn2, title: '石头剪刀布' },
                { id: 3, url: Images.ddn3, title: '足球竞猜' },
                { id: 4, url: Images.ddn4, title: '去中心化交易所' },
                { id: 5, url: Images.ddn5, title: '宠物养成' },
                { id: 6, url: Images.ddn6, title: 'PK之王' },
                { id: 7, url: Images.ddn7, title: '链上捕鱼' },
                { id: 8, url: Images.ddn8, title: '猜正反' },
                { id: 9, url: Images.ddn9, title: '预约早起' },
                { id: 10, url: Images.ddn10, title: '掷骰子' },
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
    render() {
        let { test_device, show_sub_head } = this.state;
        return (
            <div>
                <Head show_sub_head={show_sub_head} />
                <div className="ddn_detaile_banner">
                    <Title line_width={'7.8vw'} title="Core Technology" title_sub="核心技术" />
                    <div className="detaile_card_view">
                        <div className="detaile_card">
                            <div className="detaile_card_inner">
                                <div className="detaile_card_img">
                                    <img src={Images.Pic22} style={{ width: '16.4vw' }} />
                                </div>
                                <div className='detaile_card_content2'>
                                    <div className="detaile_card_title">可视化定制</div>
                                    <div className="detaile_card_text">让没有接触过区块链技术的用户，也能根据自己的需求，轻点鼠标定制出自己需要的区块链产品。</div>
                                </div>
                            </div>
                        </div>
                        <div className="detaile_card">
                            <div className="detaile_card_inner">
                                <div className="detaile_card_img">
                                    <img src={Images.Pic23} style={{ width: '16.4vw' }} />
                                </div>
                                <div className='detaile_card_content2'>
                                    <div className="detaile_card_title">微服务+模块化</div>
                                    <div className="detaile_card_text">功能模块优化到最小粒度，让开发更简单；提供了侧链、链上资产等丰富的应用接口，方便不同的需求进行扩展。</div>
                                </div>
                            </div>
                        </div>
                        <div className="detaile_card">
                            <div className="detaile_card_inner">
                                <div className="detaile_card_img"> 
                                    <img src={Images.Pic24} style={{ width: '16.4vw' }} />
                                </div>
                                <div className='detaile_card_content2'>
                                    <div className="detaile_card_title">多链并行+跨链互通</div>
                                    <div className="detaile_card_text">鼓励每条链服务一个场景，跨链技术实现链和链之间数据资产的交易，融合海量应用场景。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantage_view">
                    <Title line_width={'7.8vw'} title="Architecture advantage" title_sub="架构优势" />
                    <div className="advantage_card_main">
                        <div style={{ display: "flex", justifyContent: 'space-between' }}>
                            <div className="advantage_card">
                                <div className="advantage_card_left">
                                    <div className="advantage_title">01、权属明晰</div>
                                    <div className="advantage_line"></div>
                                    <div className="advantage_text">交易的前提是数据所有权要明晰。所以无论从法律层面，还是技术层面，首先要明确所有权。特别在互联网的范围内，法律更要有技术上的支撑，唯有技术上可操作，才可言其他。当前，我们无法保证自己的数据传到网上之后仍然属于自己，所以我们首先要从技术上进行确权。DDN可以轻松实现数据确权、授权、维权，所以使用DDN既能做到“数有所属”，又能做到“数有所值”。</div>
                                </div>
                                <img src={Images.Pic25} className="advantage_card_right" />
                            </div>
                            <div className="advantage_card" style={{ marginTop: '13vw', marginLeft: '2vw' }}>
                                <img src={Images.Pic26} className="advantage_card_right" style={{ marginRight: '-10.41vw', zIndex: 1 }} />
                                <div className="advantage_card_left">
                                    <div style={{ marginLeft: '10.15vw' }}>
                                        <div className="advantage_title">02、高度安全</div>
                                        <div className="advantage_line"></div>
                                        <div className="advantage_text">DDN处理个人存证的方式是“三层防护”，第一层是让用户自己保存全部数据，并允许用户通过DSP，直接使用智能网盘等同步自己的数据；第二层是DDN区块链存证数据，赋予数据所有权，让用户永远拥有自己的数字资产；第三层是点对点传输，让用户通过DAP和DDP，定向浏览经过严格加密的数据信息</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'space-between', marginTop: '-9.6vw' }}>
                            <div className="advantage_card">
                                <div className="advantage_card_left">
                                    <div className="advantage_title">03、即时响应</div>
                                    <div className="advantage_line"></div>
                                    <div className="advantage_text">无缓存，DDN网络是即时应用，极少用到缓存，内容时刻都是最新的。只有在用户退出的那一刻，才会将最优资源列表或内容缓存，方便下次使用。另外，DDN面向的可以是个人用户生产发布的各类数据，也可以是企业用户构建的大型网站，只要涉及到各类交易和授权操作，都可以与DDN网络进行交互</div>
                                </div>
                                <img src={Images.Pic27} className="advantage_card_right" />
                            </div>
                            <div className="advantage_card" style={{ marginTop: '13vw', marginLeft: '2vw' }}>
                                <img src={Images.Pic28} className="advantage_card_right" style={{ marginRight: '-10.41vw', zIndex: 1 }} />
                                <div className="advantage_card_left">
                                    <div style={{ marginLeft: '10.15vw' }}>
                                        <div className="advantage_title">04、最佳体验</div>
                                        <div className="advantage_line"></div>
                                        <div className="advantage_text">DDN有着即时、快速、高效、简单的特点，用户可以基于DDN非常简单的构建自己的去中心化网站、博客、电子商务网站等平台。在相同的使用和体验情况下，成本几乎为“0”。随着DDN覆盖的范围越来越广，节点部署的越来越多，DAP和DDP的性能会越来越好，用户使用网络的体验也会更佳。因此，整个DDN系统就是一个增益补偿系统的最佳实践。</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="advantage_card" style={{ marginTop: '-9.6vw' }}>
                            <div className="advantage_card_left">
                                <div className="advantage_title">05、开发友好</div>
                                <div className="advantage_line"></div>
                                <div className="advantage_text">DDN的核心功能将进一步细化，从而使协作开发更高效。各模块设为独立工程，通过模块化的功能，方便维护和集成。DDN将支持更多开发语言扩展核心P2P网络。同时，提供可视化组合操作，轻松组合完整的区块链产品，让开发更友好</div>
                            </div>
                            <img src={Images.Pic29} className="advantage_card_right" />
                        </div>

                    </div>
                </div>
                <div style={{ paddingTop: '1.56vw' }}>
                    <Title title="Side chain technology" line_width={'7.8vw'} title_sub="侧链技术" />
                    <div className="technology_sub">DDN区块链具备强大、易用、可编程的侧链(Sidechain)，可为第三方开发者提供简单快捷的扩展服务，开发设计出个性化的 Dapps。</div>
                    <div className="technology_card_view">
                        {test_device.map((item, index) => {
                            return (
                                <div key={index} className="technology_card">
                                    <img src={item.url} style={{ width: '9.63vw', height: '11.97vw' }} />
                                    <div className="technology_title">{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className="technology_more">查看更多</div> */}
                </div>
                <div className="cross_bg">
                    <Title title="Cross-chain technology" line_width={'7.8vw'} title_sub="跨链技术" />
                    <div className="cross_sub">侧链是对单独一条链的扩展，是锚定在某条主链之上的一个应用，主链消失，侧链也将不再存在。面对不同的业务场景，DDN区块链可以快速衍生出新的主链，多条主链并行运行，它们之间没有主侧之分，互不影响，某一条链消失不会影响另一条链的存在，数据也不会受到任何影响。</div>
                    <div style={{ textAlign: 'center', marginTop: '3.64vw' }}>
                        <img className="computer" src={Images.Computer} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

DDNDetaile.propTypes = {
};

export default withRouter(DDNDetaile);
