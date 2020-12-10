import React from 'react';
import './styles/FAQ.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class FAQ extends React.Component {
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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
                <Head />
                <div>
                    <div className="FQA_title">关于DDN</div>
                    <div style={{ width: '65.10vw', margin: '0 auto', paddingBottom: '1.5vw' }}>
                        <div className="FQA_Q">Q：安装DDN-NODE-SDK失败，显示无权限?</div>
                        <div className="FQA_A">A：将DDN-NODE-SDK fortk到自己的版本库，赋权后可以正常使用。</div>
                        {/* <div className="FQA_Q">Q：安装DDN-NODE-SDK失败，显示无权限?</div>
                        <div className="FQA_A">A：将DDN-NODE-SDK fortk到自己的版本库，赋权后可以正常使用。</div>
                        <div className="FQA_Q">Q：安装DDN-NODE-SDK失败，显示无权限?</div>
                        <div className="FQA_A">A：将DDN-NODE-SDK fortk到自己的版本库，赋权后可以正常使用。</div>
                        <div className="FQA_Q">Q：安装DDN-NODE-SDK失败，显示无权限?</div>
                        <div className="FQA_A">A：将DDN-NODE-SDK fortk到自己的版本库，赋权后可以正常使用。</div>
                        <div className="FQA_Q">Q：安装DDN-NODE-SDK失败，显示无权限?</div>
                        <div className="FQA_A">A：将DDN-NODE-SDK fortk到自己的版本库，赋权后可以正常使用。</div> */}
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
