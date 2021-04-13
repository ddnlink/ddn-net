import React from 'react';
import './styles/FAQ.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
import ApiRequest from '../Resources/Request';
class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{title:'',answer:''}]
        };
    }
    componentDidMount() {
        document.getElementById('App').scrollIntoView(true);
        let self = this;
        ApiRequest.getFaqs().then(function (result) {
            console.log(result)
            self.setState({
                data: result.data.data.rows
            })
        })
    }
    render() {
        let {data}=this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head />
                <div>
                    <div className="FQA_title">关于DDN</div>
                    <div style={{ width: '65.10vw', margin: '0 auto', paddingBottom: '1.5vw' }}>
                        {data.map((item,index) => {
                            return (
                                <div key={index}>
                                    <div className="FQA_Q">Q：{item.title}</div>
                                    <div className="FQA_A">A：{item.answer}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}

FAQ.propTypes = {
};

export default withRouter(FAQ);
