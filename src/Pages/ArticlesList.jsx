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
class ArticlesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_sub_head: false,
            news: [
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
        ApiRequest.getNewsList({'namespace': 19865854, 'skip':pageNumber,'limit':pageSize}).then(function(result){
            console.log(result)
            self.setState({
                news:result.data.data.list,
                total:result.data.data.count
            })
        })
    }
    _toDetaile(id){
        this.props.history.push({pathname :`/ArticlesDetail/${id}` ,query : { id: id}} )
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
                    {/*<img style={{ width: '100%', border: 'node', }} src={Images.NewsBanner} />*/}
                    <div className="news_list_view">
                        <div className="news_list_title">技术分享</div>
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

ArticlesList.propTypes = {
};

export default withRouter(ArticlesList);
