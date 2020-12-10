/*
 * @Author: jinqian
 * @LastEditors: jinqian
 * @Description: file content
 * @Date: 2019-08-03 15:32:55
 * @LastEditTime: 2019-07-24 14:23:51
 */

// 统一管理项目中的图片，格式按照下面的来
const Images = {
    Logo: require('./images/logo.png').default,
    Logo2: require('./images/logo2.png').default,
    Language:require('./images/language.png').default,
    Banner:require('./images/banner.png').default,
    Pic1:require('./images/pic1.png').default,
    Icon1:require('./images/icon1.png').default,
    Icon2:require('./images/icon2.png').default,
    Icon3:require('./images/icon3.png').default,
    Icon4:require('./images/icon4.png').default,
    Icon5:require('./images/icon5.png').default,
    Icon6:require('./images/icon6.png').default,
    Dian:require('./images/dian.png').default,
    Photo:require('./images/photo.png').default,
    Line11:require('./images/line2.png').default,
    Line2:require('./images/line3.png').default,
    Pic2:require('./images/pic2.png').default,
    Pic4:require('./images/pic4.png').default,
    Pic5:require('./images/pic5.png').default,
    Pic6:require('./images/pic6.png').default,
    Pic7:require('./images/pic7.png').default,
    Pic8:require('./images/pic8.png').default,
    Pic9:require('./images/pic9.png').default,
    Pic10:require('./images/pic10.png').default,
    Pic11:require('./images/pic11.png').default,
    Pic12:require('./images/pic12.png').default,
    Pic13:require('./images/pic13.png').default,
    Pic14:require('./images/pic14.png').default,
    Pic15:require('./images/pic15.png').default,
    Pic16:require('./images/pic16.png').default,
    Pic17:require('./images/pic17.png').default,
    Pic18:require('./images/pic18.png').default,
    Pic19:require('./images/pic19.png').default,
    Pic20:require('./images/pic20.png').default,
    Pic21:require('./images/pic21.png').default,
    Pic22:require('./images/pic22.png').default,
    Pic23:require('./images/pic23.png').default,
    Pic24:require('./images/pic24.png').default,
    Pic25:require('./images/pic25.png').default,
    Pic26:require('./images/pic26.png').default,
    Pic27:require('./images/pic27.png').default,
    Pic28:require('./images/pic28.png').default,
    Pic29:require('./images/pic29.png').default,
    Pic30:require('./images/pic30.png').default,
    Pic31:require('./images/pic31.png').default,
    Pic32:require('./images/pic32.png').default,
    Pic33:require('./images/pic33.png').default,
    Pic34:require('./images/pic34.png').default,
    Pic35:require('./images/pic35.png').default,
    Pic36:require('./images/pic36.png').default,
    Banner2:require('./images/banner2.png').default,
    Banner3:require('./images/banner3.png').default,
    Banner4:require('./images/banner4.png').default,
    Title_line1:require('./images/title_line1.png').default,
    Title_line2:require('./images/title_line2.png').default,
    Dapp:require('./images/dapp.png').default,
    Service1:require('./images/service1.png').default,
    Service2:require('./images/service2.png').default,
    Service3:require('./images/service3.png').default,
    Service4:require('./images/service4.png').default,
    Service:require('./images/service.png').default,
    Bj:require('./images/bj.png').default,
    Photo1:require('./images/photo1.png').default,
    Photo2:require('./images/photo2.png').default,
    Photo3:require('./images/photo3.png').default,
    Photo4:require('./images/photo4.png').default,
    Photo5:require('./images/photo5.png').default,
    Photo6:require('./images/photo6.png').default,
    Photo7:require('./images/photo7.png').default,
    Photo8:require('./images/photo8.png').default,
    Photo9:require('./images/photo9.png').default,
    Photo10:require('./images/photo10.png').default,
    QrCode:require('./images/qrCode.png').default,
    Bannerbg2:require('./images/bannerbg2.png').default,
    Line:require('./images/line.png').default,
    TimeLine:require('./images/timeLine.png').default,
    Community_bg:require('./images/community_bg.png').default,
    Computer:require('./images/computer.png').default,
    DevelopmentBanner:require('./images/DevelopmentBanner.png').default,
    Code:require('./images/code.png').default,
    Document:require('./images/document.png').default,
    Jiekou:require('./images/jiekou.png').default,
    Guide:require('./images/guide.png').default,
    GitHub:require('./images/GitHub.png').default,
    DATM:require('./images/DATM.png').default,
    GitHub2:require('./images/GitHub2.png').default,
    Student:require('./images/student.png').default,
    Shequ:require('./images/shequ.png').default,
    Tile_line_bg:require('./images/tile_line_bg.png').default,
    timeLine1:require('./images/timeLine1.png').default,
    timeLine2:require('./images/timeLine2.png').default,
    timeLine3:require('./images/timeLine3.png').default,
    NewsBanner:require('./images/NewsBanner.png').default,
    NewDetaile:require('./images/newDetaile.png').default,
    Map:require('./images/map.png').default,
    Facebook:require('./images/facebook.png').default,
    Slack:require('./images/slack.png').default,
    Telegram:require('./images/telegram.png').default,
    Instagram:require('./images/instagram.png').default,
    Twitter:require('./images/Twitter.png').default,
    Weibo:require('./images/Weibo.png').default,
    Weixin:require('./images/Weixin.png').default,
    Hezuo1:require('./images/hezuo1.png').default,
    Hezuo2:require('./images/hezuo2.png').default,
    Hezuo3:require('./images/hezuo3.png').default,
    Hezuo4:require('./images/hezuo4.png').default,
    Hezuo5:require('./images/hezuo5.png').default,
    Hezuo6:require('./images/hezuo6.png').default,
    Hezuo7:require('./images/hezuo7.png').default,
    Hezuo8:require('./images/hezuo8.png').default,
    Banner1:require('./images/banner1.png').default,
    Weixin_code:require('./images/weixin_gzh.jpg').default,
    service11:require('./images/service11.png').default,
    service12:require('./images/service12.png').default,
    service13:require('./images/service13.png').default,
    service14:require('./images/service14.png').default,
    service15:require('./images/service15.png').default,
    news1:require('./images/news1.png').default,
    news2_1:require('./images/news2_1.jpeg').default,
    news2_2:require('./images/news2_2.jpeg').default,
    news2_3:require('./images/news2_3.jpeg').default,
    news2_4:require('./images/news2_4.jpeg').default,
    news3_1:require('./images/news3_1.jpeg').default,
    news3_2:require('./images/news3_2.jpeg').default,
    news3_3:require('./images/news3_3.jpeg').default,
    news3_4:require('./images/news3_4.jpeg').default,
    news4_1:require('./images/news4_1.jpeg').default,
    news5_1:require('./images/news5_1.jpeg').default,
    ddn1:require('./images/ddn1.png').default,
    ddn2:require('./images/ddn2.png').default,
    ddn3:require('./images/ddn3.png').default,
    ddn4:require('./images/ddn4.png').default,
    ddn5:require('./images/ddn5.png').default,
    ddn6:require('./images/ddn6.png').default,
    ddn7:require('./images/ddn7.png').default,
    ddn8:require('./images/ddn8.png').default,
    ddn9:require('./images/ddn9.png').default,
    ddn10:require('./images/ddn10.png').default,

    media1:require('./images/media1.png').default,
    media2:require('./images/media2.png').default,
    media3:require('./images/media3.png').default,
    media4:require('./images/media4.png').default,
    media5:require('./images/media5.png').default,
    media6:require('./images/media6.png').default,
    media7:require('./images/media7.png').default,
    media8:require('./images/media8.png').default,
    media9:require('./images/media9.png').default,

    liulanqi1:require('./images/liulanqi1.png').default,
    liulanqi2:require('./images/liulanqi2.png').default,
    liulanqi3:require('./images/liulanqi3.png').default,
    liulanqi4:require('./images/liulanqi4.png').default,
    liulanqi5:require('./images/liulanqi5.png').default,
    liulanqi6:require('./images/liulanqi6.png').default,
    pic222:require('./images/pic222.png').default,
};

export default Images;