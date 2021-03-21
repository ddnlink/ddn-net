import React from 'react';
import './styles/NewsList.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
import { Pagination, ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import ApiRequest from '../Resources/Request';
class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_sub_head: false,
            news: [
                { id: 1, title: 'DDN区块链受邀参与“红榜链”应用推广调度会', date: '2020-11-10' },
                { id: 2, title: '链想会主题分享精彩回顾', date: '2020-11-07' },
                { id: 3, title: '必看！DDN开发报告', date: '2020-10-16' },
                { id: 4, title: '青色组织与区块链，风马牛不相及？', date: '2019-10-28' },
                { id: 5, title: 'DDN | 时刻准备，马上出发', date: '2019-08-17' },
                { id: 6, title: 'DDN区块链：面向未来，全面发力！', date: '2019-11-04' },
            ],
            pageNumber:1,
            pageSize:10,
            total:10
        };
    }
    componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
        let scrollTop = 0;
        let self = this;
        let {pageNumber,pageSize}=this.state;
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
        self.loadData(pageNumber,pageSize);
    }
    loadData(pageNumber,pageSize){
        let self = this;
        ApiRequest.getNewsList({'skip':pageNumber,'limit':pageSize}).then(function(result){
            console.log(result)
            self.setState({
                news:result.data.data.list,
                total:result.data.data.count
            })
        })
    }
    _toDetaile(id){
        this.props.history.push({pathname :`/NewsDetaile/` ,query : { id: id}} )
    }
    _goPage = page => {
        let {pageSize}=this.state;
        this.loadData(page,pageSize)
        
      };
    render() {
        let { show_sub_head, news,total,pageSize } = this.state
        return (
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head show_sub_head={show_sub_head} />
                <div style={{ flex: 1 }}>
                    <img style={{ width: '100%', border: 'node', }} src={Images.NewsBanner} />
                    <div className="news_list_view">
                        <div className="news_list_title">新闻</div>
                        {news.map((item, index) => {
                            return (
                                <div className="news_list_bar" >
                                    <Link className="news_list_text" onClick={this._toDetaile.bind(this,item._id)}>{item.title}</Link>
                                    <div className="news_list_text">{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</div>
                                </div>
                            )
                        })}
                    </div>
                    <Pagination defaultCurrent={1} onChange={this._goPage} pageSize={pageSize} showTitle={false} style={{ textAlign: "center", marginBottom: '2vw' }} total={total} />
                </div>
                <Footer />
            </div>
        );
    }
}

NewsList.propTypes = {
};

export default withRouter(NewsList);
