import React, {Component} from "react";
import SingleHeadline from "./SingleHeadlines";
import axios from 'axios';

class Headlines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        const apiUrl =
            "https://newsapi.org/v2/top-headlines?country=id&apiKey=4c21906492b64f858ceaabc1be77f640";

        axios.get(apiUrl)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error) => console.log(error))
    }

    renderItems() {
        return this.state.news.map((item) => (
            <SingleHeadline key={item.url} item={item}/>
        ));
    }


    render() {
        return <div className="row">{this.renderItems()}</div>;
    }
}

export default Headlines;