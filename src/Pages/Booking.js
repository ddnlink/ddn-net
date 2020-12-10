import React from 'react';
import './styles/Booking.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
    }
    render() {
        return (
            <div>
                <Head />
                <div className="booking_banner" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                    <div style={{width:600,textAlign:"left"}}>
                        <div style={{display:"flex",flexDirection:'row',alignItems:'flex-end',paddingTop:180}}>
                            <div style={{fontSize: 60,fontFamily: 'FZZDHJW',fontWeight: 'normal',color: '#32B4FF',marginRight:25}}>免&nbsp;费</div>
                            <div style={{fontSize: 42,fontFamily: 'PingFangSC',color:'#fff'}}>获得DDN产品演示</div>
                        </div>
                        <div style={{ fontSize:20,marginTop:30,fontFamily:'PingFangSC-Regular',fontWeight:400,color:'#fff'}}>超过7000家企业在使用DDN实现产品上链</div>
                    </div>
                    
                </div>
                <div className="booking">
                    <div>
                        <div className="book_title">我们能帮助您：</div>
                        <div className="book_detail">·搭建息的底层链服务，升级产品为区块链应用 <br />·将重要信息加密后上链存储，保证真实不丢失 <br />·解决企业（或行业）痛点 ·提高公司整体运行效率 <br />·扩大公司市场占有率 <br />·深化公司品牌影响力</div>
                        <div className="book_call">我们根据您的需求，提供最佳的上链解决方案，业务需求<br />可拨打 400-2342 7996</div>
                    </div>
                    <div style={{ marginLeft: 230 }}>
                        <div className="book_title" style={{ marginBottom: 80,textAlign: 'center',marginLeft:50 }}>我要预约产品演示</div>
                        <div style={{    display: 'flex',flexDirection: 'column',alignItems: 'flex-end'}}>
                            <div className="bookingtable">
                                <div className="bookingMessage">
                                    <div className="start">*</div>
                                    <div className="bookingContent">姓名：</div>
                                </div>
                                <input className="bookingInput" type={Text} />
                            </div>
                            <div className="bookingtable">
                                <div className="bookingMessage">
                                    <div className="start">*</div>
                                    <div className="bookingContent">工作邮箱：</div>
                                </div>
                                <input className="bookingInput" type={Text} />
                            </div>
                            <div className="bookingtable">
                                <div className="bookingMessage">
                                    <div className="start">*</div>
                                    <div className="bookingContent">手机号：</div>
                                </div>
                                <input className="bookingInput" type={Text} />
                            </div>
                            <div className="bookingtable">
                                <div className="bookingMessage">
                                    <div className="start">*</div>
                                    <div className="bookingContent">公司名称：</div>
                                </div>
                                <input className="bookingInput" type={Text} />
                            </div>
                            <div className="bookingtable" style={{alignItems: 'flex-start'}}>
                                <div className="bookingContent" style={{marginTop:15}}>您面临的难题：</div>
                                <textarea className="bookingInput" style={{height:215}} type={Text} />
                            </div>
                        </div>

                        <div className="booking_save">立即预约</div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

Booking.propTypes = {
};

export default withRouter(Booking);
