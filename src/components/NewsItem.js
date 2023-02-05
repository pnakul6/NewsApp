import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, desc, imgurl, newsUrl, author, uploadtime } = this.props;
        return (
            <>
                <div className='my-3'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imgurl ? imgurl : "https://picsum.photos/id/870/286/143?grayscale&blur=2"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <p class="card-text"><small class="text-muted">Uploaded by {author} at {uploadtime}</small></p>
                            <a rel="noreferrer" href={newsUrl}  className="btn btn-primary">Read More.....</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem