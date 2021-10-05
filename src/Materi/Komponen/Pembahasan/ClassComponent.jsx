import React from "react";

class ClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
        return(
            <div>
                <h1>hai, {this.props.name}</h1>
                <h2>waktu saat ini {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default ClassComponent;