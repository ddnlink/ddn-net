import React from 'react';
import './styles/Sidebar.css';
import Images from '../Resources/Image';
import 'underscore';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs:this.props.tabs
        };
    }
    componentDidMount() {
        
    }
    
    async _tabClick(item){
        document.documentElement.scrollTop=Number(((item.scrollTop/1920)*document.documentElement.clientWidth).toFixed(0))
    }
    render() {
        let {tabs}=this.state;
        return (
            <div className="sidebar_main">
                {tabs.map((item,index)=>{
                    return(
                        <div onClick={this._tabClick.bind(this,item)} key={index} className={item.active?"sidebar_tab_active":"sidebar_tab"}>
                            <div className="sidebar_title">{item.title}</div>
                        </div>
                    )
                })}
            </div>

        );
    }
}
Sidebar.propTypes = {
};

export default Sidebar;
