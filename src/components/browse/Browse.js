import React, { useEffect, useState } from 'react'
import { Button, CardDeck, Modal } from 'react-bootstrap'
import Book from "../book/Book";

function Browse(props) {
    const bookData = props.allBooks;

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.openBrowseModal(false);
    }
    //const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.openBrowse);
    }, [props.openBrowse]);

    return (
        <div>
            <Modal show={show} onHide={handleClose} size={"xl"}>
                <Modal.Header closeButton>
                    <Modal.Title>Browse books <small>(Top-100)</small></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <CardDeck>
                        {
                            bookData ? bookData.map(data => <Book data={data} key={data.bookID} />) : null
                        }
                    </CardDeck>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Browse
