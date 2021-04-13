import React from 'react';
import './styles/ServiceContent.css';
import Images from '../Resources/Image'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
class ServiceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: this.props.banner
        };
    }
    componentDidMount() {
        let { banner } = this.state;
        let name =this.props.name;
        let is_banners=false;
        if(banner.length>1){
            is_banners=true;
        }
        console.log(banner)
        console.log(is_banners)
        var mySwiper = new Swiper('.'+name+' .swiper-container', {
            autoplay: is_banners,//可选选项，自动滑动
            loop: is_banners,
            pagination: {
                el: '.'+name+' .swiper-pagination',
                type: 'custom',
                autoplayDisableOnInteraction: false,
                renderCustom: function (swiper, current, total) {
                    console.log(total)
                    var paginationHtml = "";
                    for (var i = 0; i < total; i++) {
                        // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                        if (i === (current - 1)) {
                            paginationHtml += banner[i]?'<div style="margin-right:1px;padding:0;" class="swiper-pagination-customs swiper-pagination-customs-active"><img src="' + banner[i].path + '"  class="min_banner_active" /></div>':"";
                        } else {
                            paginationHtml += banner[i]?'<div style="margin-right:1px;padding:0;" class="swiper-pagination-customs"><img src="' + banner[i].path + '"  class="min_banner" /></div>':"";
                        }
                    }
                    return is_banners?paginationHtml:"";
                },
            },
        })
    }

    render() {
        let { banner } = this.state;
        let name =this.props.name;
        return (
            <div className={"service_content "+name}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {banner.map((item, index) => {
                            return (
                                <div key={index} className="swiper-slide">
                                    <img className="pic20" src={item.path} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="swiper-pagination" style={{ position: 'relative', display: 'flex', zIndex: 100, left: '0.15vw', top: '-6.05vw', width: '31.25vw' }}></div>
            </div>
        );
    }
}
ServiceContent.propTypes = {
};

export default ServiceContent;
