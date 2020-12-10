import React from 'react';
import './styles/TimeLine.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let {show_sub_head} = this.state;
        return (
            <div style={{display:"flex",flexDirection:'column',justifyContent:'space-between',height:'100vh'}}>
                <Head show_sub_head={show_sub_head} />
                <div className="time_line_bg">
                    {/* <img src={Images.Tile_line_bg} style={{ width: '100%', height:'78.12vw',display: 'block', border: 'node',position: 'absolute' }} /> */}
                    <div  className='time_line_mian'>
                        <div className="timeLineTitle">发展历程</div>
                        <div style={{paddingLeft:'23.65vw'}}>
                            <div className="line_start_bar">
                                <div className="line_start"></div>
                                <div className="line_start_line"></div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2020年9月，【落地区块链党建积分项目-红榜链</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2020年4月，获【中关村高新技术企业】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine3} />
                                <div className="timeLineText">2020年4月，【北京软件和信息服务行业协会第九届理事会会员单位】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2019年12月，获【2019年度区块链十佳创新应用奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2019年12月，获【2019年度区块链十佳菁英贡献奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2019年4月，成为北京软件和信息服务业协会第九届理事会员单位</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine3} />
                                <div className="timeLineText">2019年3月，入围由“国家互联网信息办公室”公布的197个【区块链信息服务产品】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年10月，评为【出版融合创新·年度推优技术】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年10月，获【可信区块链功能测试证明】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年10月，获【产品创新技术应用】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年9月，获【全国移动互联网创新大赛区块链应用技术专项奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年3月，落地基于区块链的检验检测管理平台LIMSChain</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年2月，获【 数据中心联盟理事】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2018年1月，登【中国出版传媒商报数字报】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine3} />
                                <div className="timeLineText">2018年1月，获【优秀数字阅读平台奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2017年12月12日，主网正式上线</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2017年10月12日，测试网络上线</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2017年9月，获【数字出版创新奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2017年8月，加入【中国电子商务协会区块链专业委员会常务理事单位】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine2} />
                                <div className="timeLineText">2017年6月，出版《Node.js 区块链开发》</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine3} />
                                <div className="timeLineText">2017年4月，获【区块链金融（杭州）应用创建奖】</div>
                            </div>
                            <div className="timeLineBar">
                                <img src={Images.timeLine3} />
                                <div className="timeLineText">2015年，开启区块链的研发</div>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

TimeLine.propTypes = {
};

export default withRouter(TimeLine);
