import React, { Component } from 'react'
import LoadingBar from './LoadingBar';
import NewsItem from './NewsItem'

export class News extends Component {

    articles = []
    constructor() {

        super();
        console.log("constructor called")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            category:'general'
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca45681f2bb94b69b83e27776a264e92&category=${this.props.category}&pageSize=${this.props.pageSize}&page=1`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        })
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca45681f2bb94b69b83e27776a264e92&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);

        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading: false
        })
    }
    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca45681f2bb94b69b83e27776a264e92&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parseddata = await data.json()
            console.log(parseddata);
            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <>

                <div className='container my-4' >
                    <h1>Top News Headlines </h1>
                    {this.state.loading && <LoadingBar />}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col md-4 mx-3 my-2' key={element.url}>
                                <NewsItem title={element.title} author={element.author ? element.author : "Unknown"} uploadtime={element.publishedAt} desc={element.description ? element.description.slice(0, 80) : " "} imgurl={element.urlToImage} newsUrl={element.url} /> </div>
                        })}
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} className="btn btn-dark">&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>

                    </div>
                </div>
            </>
        )
    }
}

export default News