import React from 'react';
import './styles/Title.css';
import Images from '../Resources/Image';
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    render() {
        console.log(this.props)
        let {title,detaile,title_sub,line_width}=this.props;
        return (
            <div>
                <div className='programme_title_bar'>
                    <div className="programme_title">{title}</div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <img src={Images.Title_line1} style={line_width?{height:2,marginTop:10,width:line_width}:{height:2,marginTop:10}} />
                        <div className="programme_title_sub">{title_sub}</div>
                        <img src={Images.Title_line2} style={line_width?{height:2,marginTop:10,width:line_width}:{height:2,marginTop:10}} />
                    </div>
                    <div className="programme_title_sub2">{detaile}</div>
                </div>

            </div>

        );
    }
}
Title.propTypes = {
};

export default Title;
