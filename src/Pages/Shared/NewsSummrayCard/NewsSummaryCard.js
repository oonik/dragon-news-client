import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { BsBookmark, BsShare, BsStarFill, BsEyeFill } from 'react-icons/bs';


const NewsSummaryCard = ({ news }) => {
    const { title, author, _id, total_view, details, image_url, rating} = news;
    console.log(news)
    return (
        <Card className=" mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image 
                    className='me-2'
                    roundedCircle
                    src={author.img}
                    style={{height: '60px'}}
                    ></Image>
                    <div>
                    <p className='mb-0'>{author.name}</p>
                    <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <BsBookmark className='me-2'></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200?
                         <p>{details.slice (0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                         :
                         <p>{details}</p>
                    }
                </Card.Text>
                
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <BsStarFill className='me-2 text-warning'></BsStarFill>
                    <span>{total_view}</span>
                </div>
                <div>
                  <BsEyeFill className='me-2'></BsEyeFill>  
                  <span>{rating.number}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;