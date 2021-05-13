import React from 'react';
import './styles/Existing.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
import md5 from 'md5-nodejs';
import moment from 'moment'
import axios from 'axios'

class Existing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }
    async componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
    }

    //计算字符串字节
    getByty(str) {
        var count = str.length;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                count++;
            }
        }
        return count;

    }
    change(limit) {
        var size = "";
        size = (limit / 1024).toFixed(2) + "KB"
        var sizeStr = size + "";                        //转成字符串
        var index = sizeStr.indexOf(".");                    //获取小数点处的索引
        var dou = sizeStr.substr(index + 1, 2)            //获取小数点后两位的值
        if (dou == "00") {                                //判断后两位是否为00，如果是则删除00
            return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
        }
        return size;
    }
    async _save() {
        let { description } = this.state;
        let DdnJS = window.DdnJS
        let txt_length = this.getByty(description);
        var newLimit = this.change(txt_length);

        const evidencee = {
            ipid: 'online',
            title: 'ddn online evidence',
            description: description, // 文档的内容
            hash: md5(description),
            author: 'Online',
            size: newLimit, // 文档的大小
            type: 'text',
            url: 'ddn.net',
            tags: 'evidence',
            ext: 'china',
            ext1: 12345,
            ext2: new Date(),
        };
        console.log(evidencee)
        let transaction = await DdnJS.evidence.createEvidence(evidencee, 'mixed load aerobic proud skull select ahead crawl outdoor casino noble vacant');
        console.log(transaction)
        const trs = JSON.stringify({ transaction });
        console.log(trs);

        const peer_host = 'http://106.15.227.133:8001';
        const url = `${peer_host}/peer/transactions`;
        let config = {
            url: url,
            method: 'POST',
            timeout: 10000,
            data:trs,
            headers: {
                'Content-Type': 'application/json',
                version: '',
                nethash: '0ab796cd',
            },
          }
          return axios(config).then(result => {
              console.log(result)
            return result;
          }).catch(err => {
            return err;
          });

    }
    _getContent(e) {
        this.setState({
            description: e.target.value
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head />
                <div className="existing_bg">
                    <div className="existing_bg_inner">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="existing_title">信息上链存证</div>
                            <div className='existing_title_sub'>通过区块链实现数据的可信存储，获取区块链证书，保护自己数据的安全和版权权益不被威胁。</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '62.5vw', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3.9vw' }}>
                                <div className="existing_message_title">请输入要存证的信息：</div>
                                <div className="existing_input_block">
                                    <textarea onBlur={this._getContent.bind(this)} placeholder="请输入要存证信息" className="existing_input"></textarea>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1.56vw' }}>
                                <div className="existing_message_title">请输入钱包私钥：</div>
                                <div className="existing_input_block2">
                                    <textarea placeholder="DDN私钥，用于创建存证交易" className="existing_input2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1.3vw', marginLeft: '32.81vw',paddingBottom:'5vw' }}>
                            <div className="existing_shi">没有私钥?</div>
                            <a href='http://wallet.ddn.net/' className="existing_post">注册钱包</a>
                        </div>
                        {/* <div onClick={this._save.bind(this)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6.25vw' }}>
                            <div className="existing_save">存 证</div>
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

Existing.propTypes = {
};

export default withRouter(Existing);
