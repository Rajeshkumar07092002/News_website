import React from 'react'

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <span style={{ zIndex: '1', left: '88%' }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}</span>
        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          {/* eslint-disable-next-line */}
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItems
