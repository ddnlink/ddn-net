import React from 'react';
import './styles/Community.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import Title2 from '../components/Title2';
import ServiceContent from '../components/ServiceContent';
import ServiceContent2 from '../components/ServiceContent2';
import Sidebar from '../components/Sidebar';
import { withRouter, Link } from 'react-router-dom';
import Swiper from 'swiper';
import ApiRequest from '../Resources/Request';
class Community extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner4: [
                { id: 4, path: Images.Service4 }
            ],
            photos: [
                { id: 1, img: Images.Photo1, name: '未完的未完。', show_name: false },
            ],
            projects: [],
            contribution: [],
            sidebar_tabs: [
                { title: '贡献动态', active: false, scrollTop: 550 },
                { title: '贡献成员', active: false, scrollTop: 1060 },
                { title: '社区项目', active: false, scrollTop: 2388 },
                { title: '悬赏任务', active: false, scrollTop: 2780 },
                { title: '优秀社区', active: false, scrollTop: 3570 },
                { title: '社区基金', active: false, scrollTop: 4110 },
                { title: '社区提案', active: false, scrollTop: 4550 },
                { title: '发展历程', active: false, scrollTop: 5350 },
                { title: '加入社区', active: false, scrollTop: 6200 },
            ],
            qrcode: [],
            community_swiper: [
                { title: 'DDN链底层', content: 'DDN底层链核心项目，项目由DDN社区创建，社区成员可由DATM申请加入到项目，领取任务，加入到项目的开发。代码已在github开源。' },
                { title: '区块链浏览器', content: 'DDN区块浏览器应用项目，提供用户浏览与查询区块链所有信息的工具，项目使用NodeJs开发语言，React框架' },
                { title: '区块链钱包', content: '区块链钱包里储存着我们的DDN信息，包括DDN地址（类似于你的银行卡账号）、私钥（类似于你的银行卡密码），区块链钱包可以储存多个DDN地址以及每个DDN地址所对应的独立私钥。项目使用NodeJs开发语言，React框架' },
            ],
            show_sub_head: null,


        };
    }
    componentDidMount() {
        // const { BMap, BMAP_STATUS_SUCCESS } = window
        // var map = new BMap.Map("allmap"); // 创建Map实例
        // var point = new BMap.Point(110.321027, 21.113632);
        // map.centerAndZoom(point, 16); // 初始化地图,设置中心点坐标和地图级别
        // var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        // var marker = new BMap.Marker(point);        // 创建标注    
        // map.addOverlay(marker);
        document.getElementById('App').scrollIntoView(true);
        let { sidebar_tabs, show_sub_head } = this.state;
        let self = this;
        var scrollTop = 0
        window.onscroll = function () {
            //为了保证兼容性，这里取两个值，哪个有值取哪一个
            //scrollTop就是触发滚轮事件时滚轮的高度
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= ((sidebar_tabs[sidebar_tabs.length - 1].scrollTop / 1920) * document.documentElement.clientWidth).toFixed(0)) {
                sidebar_tabs.forEach(function (item, index) {
                    item.active = false
                })
                sidebar_tabs[sidebar_tabs.length - 1].active = true;
            } else {
                sidebar_tabs.forEach(function (item, index) {
                    if (scrollTop >= ((item.scrollTop / 1920) * document.documentElement.clientWidth).toFixed(0) && scrollTop < ((sidebar_tabs[index + 1].scrollTop / 1920) * document.documentElement.clientWidth).toFixed(0)) {
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                })
            }
            if (scrollTop > ((330 / 1920) * document.documentElement.clientWidth).toFixed(0)) {
                self.setState({
                    show_sub_head: true,
                    sidebar_tabs: sidebar_tabs,
                })
            } else if (scrollTop >= 0 && scrollTop <= ((160 / 1920) * document.documentElement.clientWidth).toFixed(0)) {
                self.setState({
                    show_sub_head: false,
                    sidebar_tabs: sidebar_tabs,
                })
            }
        }


        var mySwiper = new Swiper('.community_swiper .swiper-container', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
            speed: 1000,
        })
        Promise.all([
            ApiRequest.getTopContributors(),
            ApiRequest.getTasks(),
            ApiRequest.getBounties(),
            ApiRequest.getCommunities()
        ]).then(function (results) {
            let photos = results[0].data.data;
            let contribution = results[1].data.data;
            let projects = results[2].data.data;
            let qrcode = results[3].data.data
            console.log(results)
            photos.forEach(function (item, index) {
                item.id = index;
                item.show_name = false;
            })
            projects.forEach(function (item, index) {
                item.id = index + 1;
            })
            self.setState({
                photos: photos,
                contribution: contribution,
                projects: projects,
                qrcode: qrcode
            })
        })


    }
    _showName(data, id) {
        let { photos } = this.state;
        if (data) {
            photos.forEach(function (item) {
                if (item.id == id) {
                    item.show_name = true
                } else {
                    item.show_name = false
                }
            })
        } else {
            photos.forEach(function (item) {
                item.show_name = false
            })
        }
        this.setState({
            photos: photos
        })
    }
    render() {
        let { photos, banner4, projects, qrcode,contribution, sidebar_tabs, show_sub_head, community_swiper } = this.state;
        return (
            <div>
                <Head show_sub_head={show_sub_head} />
                <div className="community_banner">
                    <div className="community_text_block">
                        <div className="community_title">DDN社区是什么</div>
                        <div className="community_text">DDN全球社区将首先实践DDN“去中心、去组织、去管理”的理念。按功能划分，DDN全球社区包含节点管理、技术开发、运营管理、市场推广4个等多个子板，已推出DDN社区管理《绿皮书》正式版，面向全球招募开发、运营、管理和翻译团队。</div>
                        <a href="http://docs.ddn.link/zh-CN/community/greenpaper" style={{ textDecoration: 'none', display: "block" }} className="community_banner_btn">绿皮书</a>
                    </div>
                </div>
                <Title2 title="Contribution dynamics" title_sub="贡献动态" />
                <div className="contribution_view">
                    {contribution.map((item, index) => {
                        return (
                            <div key={index} className="contribution_item">
                                <div className="dian"></div>
                                <div className="contribution_name" style={{ marginRight: '1.34vw' }}>{item.user.name}</div>
                                <div className="contribution_name" style={{ marginRight: '0vw' }}>{item.title}</div>
                                <div className="contribution_name">已到账</div>
                                <div className="contribution_name" style={{ color: '#006BE3FF' }}>{item.reward.amount}{item.reward.token}</div>
                            </div>
                        )
                    })}
                </div>
                <Title2 title="Excellent contributor" title_sub="优秀贡献者" />
                <div className="photo_bar">
                    {photos.map((item, index) => {
                        return (
                            <div className="community_photo_block"   >
                                <img key={index} src={item.photoUrl} onMouseOver={this._showName.bind(this, true, item.id)} onMouseOut={this._showName.bind(this, false, item.id)} className="community_photo" />
                                {item.show_name ? (<div className="community_photo_name">{item.name}</div>) : null}
                            </div>
                        )
                    })}
                </div>
                <div className="community_main">
                    <ServiceContent
                        banner={banner4}
                        name='service_content4'
                    />
                    <ServiceContent2
                        title="分布式云办公-DATM"
                        btn={{ title: "查看详情", path: 'http://datm.ddn.link/', out: true }}
                        content="&nbsp;&nbsp;&nbsp;&nbsp;分布式团队远程协作利器远程协作，实时通讯，有效沟通，团队协作，任务管理，特色社区，海量任务，各行各业都有我们的身影，随时随地，移动办公。"
                    />
                </div>
                <div className="community_swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {community_swiper.map((item, index) => {
                                return (
                                    <div key={index} className="swiper-slide">
                                        <div className='community_banner2' style={{ marginBottom: '4.68vw', marginTop: '4.68vw' }}>
                                            <div className="community_banner2_title">{item.title}</div>
                                            <div className="community_banner2_text">{item.content}</div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

                <Title2 title="Community reward task" title_sub="社区悬赏任务" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '72.91vw', margin: '0 auto', flexFlow: 'row wrap', marginTop: '2.34vw' }}>
                    {projects.map((item, index) => {
                        return (
                            <div key={index} className={index == (projects.length - 1) || index == (projects.length - 2) ? 'community_number_block_last' : 'community_number_block'}>
                                <div className="community_number">0{item.id}.</div>
                                <div className="community_number_right">
                                    <div className="community_number_title">{item.bountyType}{item.community.name}</div>
                                    <div className="community_number_sub">{item.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Title2 title="Community invitation" title_sub="优秀社区" />
                <div className="invitation_sub">这里有上百优秀小伙伴，诚邀您的加入哦</div>
                <div className="invitation_qrcode_bar">
                    {qrcode.map((item, index) => {
                        return (
                            <div className="invitation_qrcode_block">
                                <img className="invitation_qrcode" src={item.qrcode} />
                                <div className="invitation_qrcode_title" >{item.name}</div>
                            </div>
                        )
                    })}

                </div>
                <div className="CommunityBannerbg2">
                    <div className="community_money_title">基金公开透明</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '72.91vw', margin: '0 auto' }}>
                        <div className="community_money_block">
                            <div className="community_money_sub">DDN社区</div>
                            <div className="community_money_bar" >
                                <div className="community_money">9073</div>
                                <div className="community_money_unit">DDN</div>
                            </div>
                            <div className="community_money_sub2">资助我们：DA4FvUP7EztagfQ6XrGxLG3XgzjuMx11tX</div>
                        </div>
                        <div className="community_money_block">
                            <div className="community_money_sub">LIMSChain社区</div>
                            <div className="community_money_bar" >
                                <div className="community_money">1010</div>
                                <div className="community_money_unit">DDN</div>
                            </div>
                            <div className="community_money_sub2">资助我们：DBJC4pWczhnTX8NHxtv6FvA8iW3oSJWN5F</div>
                        </div>
                        <div className="community_money_block">
                            <div className="community_money_sub">国标链社区</div>
                            <div className="community_money_bar" >
                                <div className="community_money">270</div>
                                <div className="community_money_unit">DDN</div>
                            </div>
                            <div className="community_money_sub2">资助我们：D5pNwjynBZBoSqS3ZotZXQr1FTdT97V3KT</div>
                        </div>
                    </div>
                </div>

                <Title2 title="Community proposal" title_sub="社区提案" />
                <div className="invitation_sub">DIP提案将在 DATM 上发起，并在区块链上通过智能合约进行存证和处理。</div>
                <div style={{ textAlign: 'center', paddingBottom: '2.34vw' }}>
                    <img src={Images.Line} className="proposal_pic" />
                </div>
                <div className="development_view2">
                    <Title2 title="Development path" title_sub="发展历程" />
                    <div className="TimeLine_block">
                        <div className="TimeLine_block_inner">
                            <div className='time_line_content'>
                                <div className="time_line_content_text1" style={{ marginRight: '15.31vw' }}>DDN核心链技术研发</div>
                                <div className="time_line_content_text1" style={{ marginRight: '15.31vw' }}>成为可信区块链推进计划（理事成员）,获得“可信区块链功能测试证明”</div>
                                <div className="time_line_content_text1">基于DDN的区块链党建积分项目“红榜链”上线</div>
                            </div>
                            <img src={Images.TimeLine} className="time_line" />
                            <div className='time_line_content2'>
                                <div className="time_line_content_text1" style={{ marginRight: '15.62vw' }}>出版《Node.js 区块链开发》，DDN测试网上线，DDN主网上线</div>
                                <div className="time_line_content_text1">入围国家互联网信息办公室公布的197个区块链信息服务产品</div>
                            </div>
                            <div className="time_line_year" style={{ position: 'absolute', left: '8.66vw', top: '14.06vw' }}>2016年</div>
                            <div className="time_line_year" style={{ position: 'absolute', left: '24.81vw', top: '6.37vw ' }}>2017年</div>
                            <div className="time_line_year" style={{ position: 'absolute', left: '38.91vw', top: '14.06vw' }}>2018年</div>
                            <div className="time_line_year" style={{ position: 'absolute', left: '55.02vw', top: '6.37vw ' }}>2019年</div>
                            <div className="time_line_year" style={{ position: 'absolute', left: '69.125vw', top: '14.06vw' }}>2020年</div>
                        </div>
                    </div>
                </div>
                <div className="jion_view">
                    <div>
                        <div className="jion_bar">
                            <div className="jion_line"></div>
                            <div className="jion_title">加入社区</div>
                            <div className="jion_title_sub">Jion us</div>
                        </div>
                        <div className="jion_step">第一步</div>
                        <div className="jion_net" style={{ marginBottom: '4.166vw' }}><a href="http://files.datm.link/DATM_Mobile_v2.0.1.apk">下载DATM</a></div>
                        <div className="jion_step">第二步</div>
                        <div className="jion_net">扫描下方二维码进入社区。</div>
                        <img src={Images.QrCode} className="jion_qr_code" />
                    </div>
                    <div style={{ width: '42.44vw' }}>
                        <div className="jion_bar">
                            <div className="jion_line"></div>
                            <div className="jion_title">路线图</div>
                            <div className="jion_title_sub">Road map</div>
                        </div>
                        <img src={Images.Map} style={{ width: '41.92vw', height: '28.9vw' }} />
                        {/* <div id="allmap" style={{ width: '41.92vw', height: '28.9vw' }}></div> */}
                    </div>
                </div>
                <Footer />
                <Sidebar tabs={sidebar_tabs} />
            </div>
        );
    }
}

Community.propTypes = {
};

export default withRouter(Community);
