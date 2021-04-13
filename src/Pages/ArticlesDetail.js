import React from 'react';
import './styles/NewsDetaile.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import ApiRequest from '../Resources/Request';
class ArticlesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            id: 1
        };
    }
    componentDidMount() {
        let self = this;
        document.getElementById('App').scrollIntoView(true);
        let id=this.props.match.params.id
        ApiRequest.getNewsDetaile(id, {'namespace': 19865854}).then(function (result) {
            console.log(result)
            self.setState({
                data: result.data.data
            })
        })
    }
    render() {
        let { data } = this.state;
        return (
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head />
                <div style={{ flex: 1 }}>
                    <img style={{ width: '100%', border: 'node', }} src={Images.NewsBanner} />
                    <div className="news_detailes_path">
                        <div className="news_detailes_left">首页 - 媒体中心 - </div>
                        <div className="news_detailes_right">技术分享</div>
                    </div>
                    <div>
                        <div className="news_detailes_title">{data.title}</div>
                        <div className="news_detailes_time">发布时间：{moment(data.created_at).format('DD/MM/YYYY')}</div>
                        <div className="news_detailes_content">
                            <div dangerouslySetInnerHTML={{ __html: data.body_html }}></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

ArticlesDetail.propTypes = {
};

export default withRouter(ArticlesDetail);
