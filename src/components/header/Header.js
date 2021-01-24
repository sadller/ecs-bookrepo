import React, { useState } from 'react'
import { Badge, Button, Navbar } from 'react-bootstrap'
import Browse from '../browse/Browse';
import Cart from '../cart/Cart';

function Header(props) {

    const [openCart, setOpenCart] = useState(false);

    const openCartModal = (status) => {
        setOpenCart(status);
    }

    const [openBrowse, setBrowse] = useState(false);

    const openBrowseModal = (status) => {
        setBrowse(status);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand color="light">Book Repo - ECS Frontend Developer Challenge</Navbar.Brand>

                <Button variant="info"
                    onClick={() => openBrowseModal(true)}
                    style={{ position: "fixed", right: "110px" }}
                >
                    Browse
                </Button>

                <Button variant="danger"
                    onClick={() => openCartModal(true)}
                    style={{ position: "fixed", right: "10px" }}
                >
                    Cart <Badge variant="light"> {props.cart.length} </Badge>
                </Button>
            </Navbar>

            <Cart data={props} openCart={openCart} openCartModal={openCartModal} />
            <Browse allBooks={props.allBooks} openBrowse={openBrowse} openBrowseModal={openBrowseModal} />
        </div>
    )
}

export default Header
