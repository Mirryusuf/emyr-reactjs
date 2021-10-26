import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, InputGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';
import SingleHeadline from "../SingleHeadlines";


export default class LifeCycleComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
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

    updateUi = (e) => {
        e.preventDefault();
        let keyword = this.state.search;
        axios.get('https://newsapi.org/v2/everything?sortBy=popularity&apiKey=4c21906492b64f858ceaabc1be77f640&q=' + keyword)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error) => console.log(error))
        // console.log(this.state.search);
    }

    render(){
        return(
            <Container className="mt-5">
                <p className="fs-1 fw-bold">News App</p>
                <Form onSubmit={this.updateUi}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search..."
                            onChange={e => this.setState({search: e.target.value})} 
                            
                        />
                        <Button variant="outline-secondary" type="submit">
                        Button
                        </Button>
                    </InputGroup>
                </Form>
                <div className="row mt-5">{this.renderItems()}</div>
            </Container>
        )
    }

}