import React from 'react'
import bookImage from "./book.png";
import "./book.css";
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import NumberFormat from 'react-number-format';

function Book(props) {


    return (



        <div>
            <Card className={"book-card"}>
                <Card.Img variant="top" src={bookImage} className={"book-img"} />
                <Card.Body>
                    
                    <Card.Text>
                        {props.data.title}
                    </Card.Text>
                        <small className="text-muted">{JSON.stringify(props.data.authors)}</small>
                    <Card.Title>${props.data.price}</Card.Title>

                    <StarRatings
                        rating={4.3}
                        starRatedColor="orange"
                        starDimension="20px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name={JSON.stringify(props.data.title)}
                    />
                    <br/>
                    <span className={"rating-count"}>
                        <NumberFormat value={props.data.ratings_count} displayType={'text'} thousandSeparator={true} />
                    </span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Book
