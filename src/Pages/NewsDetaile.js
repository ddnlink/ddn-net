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
                <div style={{flex:1}}>
                    <img style={{ width: '100%', border: 'node', }} src={Images.NewsBanner} />
                    <div className="news_detailes_path">
                        <div className="news_detailes_left">首页 - 新闻中心 - </div>
                        <div className="news_detailes_right">公司新闻</div>
                    </div>
                    <div>
                        <div className="news_detailes_title">热烈庆祝徳志项目签约进驻广州南沙平谦汽车产业园！</div>
                        <div className="news_detailes_time">发布时间：6/27/2011</div>
                        <div className="news_detailes_content">广州徳志金属制品有限公司（以下简称徳志公司）为欧洲著名金属制品商DGS在中国独资设立的公司。2011年11月，该公司签约进驻广州南沙平谦汽车产业园（以下简称南沙平 谦）。项目共分两期发展。一期厂房由南沙平谦按照徳志公司要求量身定制约9000平方米厂房。一期工厂主要是徳志公司为满足现有客户奔驰、宝马、奥迪、大众等汽车制造商的需 要，生产手动换挡支架、仪表台支架、制动部分零件和底盘结构件等。一期项目已进入正式设计施工阶段，预计20012年下半年交付厂房投产。 徳志项目二期发展计划在一期投产后再量身定制2万平方米厂房。主要设置汽车骨架组件压铸生产线及后续加工工序车间。 徳志项目总投资4500万欧元，一期投资1800万欧元。二期投资2700万欧元。整体达产后年产值5~6亿元人民币。</div>
                        <div style={{ textAlign: "center", paddingBottom: '11.97vw' }}>
                            <img className="news_detailes_img" src={Images.NewDetaile} />
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
