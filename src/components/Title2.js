import React from 'react';
import './styles/Title.css';
class Title2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    render() {
        let {title,title_sub,fontcolor}=this.props;
        return (
            <div>
                <div className='programme_title_bar'>
                    <div style={{color: fontcolor? fontcolor : "none"}} className="programme_title_sub3">{title_sub}</div>
                    <div className="programme_title2">{title}</div>
                </div>

            </div>

        );
    }
}
Title2.propTypes = {
};

export default Title2;
