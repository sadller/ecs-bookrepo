import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

function Cart(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.openCartModal(false);
    }
    //const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.openCart);
    }, [props.openCart]);

    return (
        <div>
            <Modal show={show} onHide={handleClose} size={"lg"}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th key={"book_id"}>Book ID</th>
                                <th key={"title"}>Title</th>
                                <th key={"price"}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.data.cart.map(book => (
                                    <tr key={book.bookID}>
                                        <td key={book.bookID}>{book.bookID}</td>
                                        <td key={book.title}>{book.title}</td>
                                        <td key={book.bookID+book.price}>{book.price}</td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </Table>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Checkout
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cart
