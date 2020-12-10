import React from 'react';
import './styles/ServiceContent2.css';
import { withRouter, Link } from 'react-router-dom'
class ServiceContent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    _goPage(path){
        console.log(path)
        this.props.history.push(path)
    }
    render() {
        let {title,content,btn,btn2}=this.props;
        return (
            <div style={{display:'flex',flexDirection:'column',justifyContent: 'space-between'}}>
                <div>
                    <div className="service_title">{title}</div>
                    <div className="service_text">{content}</div>
                </div>
                
                <div style={{display:"flex",flexDirection:'row'}}>
                    {btn2&&btn2.out?(<a href={btn2.path} style={{ textDecoration: 'none' }} className="service_btn2" >{btn2.title}</a>):(
                        btn2&&!btn2.out?(<Link onClick={this._goPage.bind(this,btn2.path)} className="service_btn2">{btn2.title}</Link>):(null)
                    )}
                    {btn&&btn.out?(<a href={btn.path} style={{ textDecoration: 'none' }} className="service_btn" >{btn.title}</a>):(
                        btn&&!btn.out?(<Link onClick={this._goPage.bind(this,btn.path)} className="service_btn">{btn.title}</Link>):(null)
                    )}
                </div>
            </div>
        );
    }
}
ServiceContent2.propTypes = {

};

export default withRouter(ServiceContent2);
