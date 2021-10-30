import React, { useEffect, useState } from 'react';
import { Spinner, Row, Form, Container, InputGroup, FormControl, Button } from "react-bootstrap";
import axios from 'axios';


function Apps() {
    
    let [news, setNews] = useState([]);
    let [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const callingApi = async () => {
        try {
            const data = await axios
            .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=6093717e4f0a461e9379f05e3289d2c2')
            .then((response) => {
                setNews(response.data.articles)                
            });
            setLoading(true);
        } catch(e){
            console.log(e);
        }
    };

    const searchApi = async () => {
        try {
            let keyword = search;
            const data2 = await axios
            .get('https://newsapi.org/v2/everything?sortBy=popularity&apiKey=6093717e4f0a461e9379f05e3289d2c2&q=' + keyword)
            .then((response) => {
                setNews(response.data.articles)                
            });
            setLoading(true);
        } catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        callingApi();
    }, []);

    useEffect(() => {
        searchApi();
    }, [search]);

    // useEffect(() => {
    //     const apiUrl =
    //         "https://newsapi.org/v2/top-headlines?country=id&apiKey=b05ef90fd2574884a6259ce057df5df1";

    //     axios.get(apiUrl)
    //         .then((response) => {
    //             setNews(response.data.articles)                
    //         })
    //         .catch((error) => console.log(error))
    // }, [])
  
    // useEffect(() => {
    //     let keyword = search;
    //     axios.get('https://newsapi.org/v2/everything?sortBy=popularity&apiKey=b05ef90fd2574884a6259ce057df5df1&q=' + keyword)
    //         .then((response) => {
    //             setNews(response.data.articles)                
    //         })
    //         .catch((error) => console.log(error))
    //     // return console.log(search);
    // }, [search]);
    
    // const handlerSearch = (e) => {
    //     setSearch(e)
    // }

    // const updateUi = () => {

    //     let keyword = search;
    //     console.log(keyword);
    //     axios.get('https://newsapi.org/v2/everything?sortBy=popularity&apiKey=b05ef90fd2574884a6259ce057df5df1&q=' + keyword)
    //         .then((response) => {
    //             setNews(response.data.articles)                
    //         })
    //         .catch((error) => console.log(error))
    //     // return console.log(search);
    // }

    return (
        <Container className="mt-5">
            <p className="fs-1 fw-bold">News App</p>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                            
                        />
                        
                    </InputGroup>
                </Form>
                <Row>
                    {
                        loading ?
                        news.map(item => (
    
                            <a className="col-md-3 mb-3" href={item.url}>
                                <div className="card">
                                    <img className="img-fluid" src={item.urlToImage} alt=""/>
                                    <div className="card-body">
                                        <p className="card-title">{item.title}</p>
                                    </div>
                                </div>
                            </a>
                        
                        )) : <center><Spinner className="mt-5" animation="border" /></center> 
                    }
                </Row>
        </Container>
    );
}
export default Apps;