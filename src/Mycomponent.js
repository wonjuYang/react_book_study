import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mycomponent extends Component {
    
    //static defaultProps = {
    //   name : '기본 이름'
    //}

    //static propTypes = {
    //   name: PropTypes.string // name props 타입을 문자열로 설정합니다.
    //}

    state = {
        number: 0
    }
    render() {
        return (
            <div> 
                <p>안녕하세요 제 이름은 {this.props.name}입니다.</p>
                <p>저는 {this.props.age} 살입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number +1 
                    })
                }}>
                더하기</button>
            </div>
        );
    }
}

Mycomponent.defaultProps = {
    name: '기본 이름'
}

Mycomponent.propTypes = {
    name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
    age: PropTypes.number.isRequired
}

export default Mycomponent;