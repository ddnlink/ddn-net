import React from 'react';
import './styles/NewsPage.css';
import Head from '../components/Head';
import Images from '../Resources/Image';
import Footer from '../components/Footer';
import { withRouter, Link } from 'react-router-dom'
class NewsPage extends React.Component {
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
            <div>
                <Head />
                    <img  src={Images.NewsBanner} />
                    <div>新闻</div>
                    <div></div>
                <Footer />
            </div>
        );
    }
}

NewsPage.propTypes = {
};

export default withRouter(NewsPage);
