import React from 'react';
import './styles/ValueBar.css';
import Images from '../Resources/Image'
class ValueBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    render() {
        let { array } = this.props;
        return (
            <div className="number_value">
                {array.map((item, index) => {
                    return (
                        <div key={index} className="number_value_block">
                            <img className="pic6" src={item.image} />
                            <div className="number_value_title">{item.title}</div>
                            <div style={{ display: "flex", justifyContent: 'center', marginTop: 20 }}>
                                <div className="number_value_content">{item.content}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
ValueBar.propTypes = {
};

export default ValueBar;
