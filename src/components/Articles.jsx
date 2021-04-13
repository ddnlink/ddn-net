import React from 'react';
import './styles/News.css';
import Images from '../Resources/Image'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { withRouter, Link } from 'react-router-dom'
import ApiRequest from '../Resources/Request';
import moment from 'moment';
class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: [{ imge: Images.Pic4, text: 'DDN与诸城市委合作，致力智能党建' }],
            news: [
                {
                    title: 'DDN区块链受邀参与“红榜链”应用推广调度会',
                    img: Images.news1,
                    path: '/NewsDetaile1',
                    id: 1
                },
                {
                    title: '链想会主题分享精彩回顾',
                    img: Images.news2_1,
                    path: '/NewsDetaile2',
                    id: 2
                },
                {
                    title: '必看！DDN开发报告',
                    img: Images.news3_1,
                    path: '/NewsDetaile3',
                    id: 3
                }
            ],
            newslist: [
                {
                    title: 'DDN区块链受邀参与“红榜链”应用推广调度会',
                    source: "内容来源：DDN",
                    path: '/NewsDetaile1',
                    day: '10',
                    month: '11',
                    id: 1,
                    active: true
                },
                {
                    title: '链想会主题分享精彩回顾',
                    source: "内容来源：DDN",
                    path: '/NewsDetaile2',
                    day: "07",
                    month: '11',
                    id: 2,
                    active: false
                },
                {
                    title: '必看！DDN开发报告',
                    path: '/NewsDetaile3',
                    source: "内容来源：DDN",
                    day: '16',
                    month: '10',
                    id: 3,
                    active: false
                },
                {
                    title: '青色组织与区块链，风马牛不相及？',
                    source: "内容来源：DDN",
                    path: '/NewsDetaile4',
                    day: '28',
                    month: '10',
                    id: 4,
                    active: false
                }
            ],
            news_title: ''
        };
    }
    componentDidMount() {
        let self = this;
        ApiRequest.getTopNewsList({'namespace': 19865854}).then(function(result){
            console.log(result)
            self.setState({news:result.data.data},function(){
                self.instanceSwiper();
            })
        })
        ApiRequest.getNewsList({'namespace': 19865854,'skip':1,'limit':4}).then(function(result){
            console.log(result)
            self.setState({
                newslist:result.data.data.list
            })
        })
    }
    instanceSwiper() {
        let self = this;
        let { news, newslist } = this.state;
        var mySwiper2 = new Swiper('.news_swiper .swiper-container', {
            loop: true,
            on: {
                slideChangeTransitionEnd: function () {
                    self.setState({
                        news_title: news[this.realIndex].title
                    })
                }
            },
            autoplay: {
                disableOnInteraction: false,
                delay: 2000,
            },
            pagination: {
                el: '.news_swiper .swiper-pagination',
                autoplayDisableOnInteraction: false,
                clickable: true,
                renderBullet: function (index, className) {
                    var paginationHtml = " ";
                    paginationHtml += '<span class="' + className + '">' + (index + 1) + '</span>'
                    if (index == 2) {
                        paginationHtml += `<a href="#/ArticlesList" class="more_news"><img src="${Images.Dian}" class="dian3" /></a>`
                    }
                    return paginationHtml;
                },
                // renderCustom: function (swiper, current, total) {
                //     var paginationHtml = " ";
                //     for (var i = 0; i < total; i++) {
                //         if (i === (current - 1)) {
                //             paginationHtml += '<span class="swiper-pagination-customs2 swiper-pagination-customs-active2">' + (i + 1) + '</span>';
                //         } else {
                //             paginationHtml += '<span onClick="test()" class="swiper-pagination-customs2">' + (i + 1) + '</span>';
                //         }
                //     }
                //     paginationHtml += `<a href="#/NewsList" class="more_news"><img src="${Images.Dian}" class="dian3" /></a>`
                //     return paginationHtml;
                // },
            }
        })
    }

    _toPage(id) {
        this.props.history.push({pathname :`/ArticlesDetail/${id}`})
    }
    _onMouseOver(id){
        let {newslist}=this.state
        this.state.newslist.forEach(function(item){
            if(id==item._id){
                item.active=true
            }else{
                item.active=false
            }
        })
        this.setState({newslist:newslist})
    }
    render() {
        let { news, news_title, newslist } = this.state;
        return (
            <div className="news_bar">
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '2.81vw' }}>
                    <div className="news_title_sub">Technology Share</div>
                    <div className="news_title">技术分享</div>
                </div>
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: '70.31vw',marginLeft:'10vw' }}>
                    <div className="news_swiper" style={{ width: '37.18vw', height: '21.56vw', marginTop: '3.28vw', position: 'relative' }}>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {news.map((item, index) => {
                                    return (<div className="swiper-slide">
                                        <Link onClick={this._toPage.bind(this, item._id)}>
                                            <img src={item.cover} className="pic4" />
                                        </Link>

                                    </div>)
                                })}
                            </div>
                        </div>
                        <div className="swiper-pagination" style={{ position: 'absolute', display: 'flex', zIndex: 1000, left: '24.64vw', bottom: '2.05vw', width: '15.62vw' }}></div>
                        <div className="news_banner_title">
                            {news_title}
                        </div>
                    </div>
                    <div style={{ marginLeft: '6.66vw', marginTop: '3.28vw' }}>
                        {newslist.map((item, index) => {
                            return (
                                <Link key={index} onMouseOver={this._onMouseOver.bind(this, item._id)} onClick={this._toPage.bind(this, item._id)} style={{ display: "flex", flexDirection: 'row', marginBottom: '1vw' }}>
                                    <div className={item.active ? "news_date_active" : 'news_date'}>
                                        <div className="news_month">{moment(item.created_at).format('DD')}</div>
                                        <div className="news_line"></div>
                                        <div className="news_day">{moment(item.created_at).format('MM')}</div>
                                    </div>
                                    <div className={item.active ? "news_content_active" : 'news_content'}>
                                        <div className="news_content_title">{item.title}</div>
                                        <div className="news_content_sub">内容来源：DDN</div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
Articles.propTypes = {
};

export default withRouter(Articles);
