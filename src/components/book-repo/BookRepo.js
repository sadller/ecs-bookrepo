import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import Header from '../header/Header';
import "./bookrepo.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import StarRatings from 'react-star-ratings';


function BookRepo() {

    const [bookData, setBookData] = useState([]);
    const [cart, setCart] = useState([]);
    

    const loadBookDataFromAPI = async () => {
        const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json";
        try {
            const resp = await axios.get(url);
            resp.data = resp.data.map(d => {
                if (d.bookID === 40132) {
                    d.average_rating = 0;
                    return d;
                } else {
                    return d;
                }
            })
            setBookData(resp.data);
        } catch (err) {
            console.log(err);
        }
    }

    const addToCart = (book) => {
        if (cart.includes(book)) {
            alert("Book already present");
        } else {
            setCart(cart.concat(book));
        }
    }

    useEffect(() => {
        loadBookDataFromAPI();
    }, [])

    const columns = [
        { Header: "Book ID", accessor: "bookID" },
        { Header: "Title", accessor: "title", minWidth: 350 },
        { Header: "Authors", accessor: "authors", minWidth: 250 },
        { Header: "ISBN", accessor: "isbn", minWidth: 100 },
        { Header: "Language Code", accessor: "language_code" },
        { Header: "Price", accessor: "price" },
        {
            Header: "Average Rating",
            accessor: "average_rating",
            minWidth: 150,
            sortMethod: (a, b) => Number(a) - Number(b),
            Cell: props => (<StarRatings
                rating={parseFloat(props.value) ? parseFloat(props.value) : 0}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="1px"
                numberOfStars={5}
                name={"startlight"}
            />)
        },
        { Header: "Ratings Count", accessor: "ratings_count", minWidth: 150 },
        {
            Header: "Add to Cart",
            accessor: "bookID",
            minWidth: 150,
            Cell: props => (
                <Button type="button" variant="primary" size="sm" onClick={() => addToCart(props.original)} >Add to Cart</Button>
            )
        }
    ]

    return (
        <div>
            <Header cart={cart} allBooks={bookData.slice(0,100)}/>
            <br /><br/><br/><br/>
            <Container fluid>
                <ReactTable
                    data={bookData}
                    columns={columns}
                    className='-striped -highlight'
                    defaultPageSize={20}
                    filterable={true}
                />
            </Container>
            
            <br/>
        </div>
    )
}

export default BookRepo