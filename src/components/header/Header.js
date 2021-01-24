import React, { useState } from 'react'
import { Badge, Button, Navbar } from 'react-bootstrap'
import Cart from '../cart/Cart';

function Header(props) {

    const [openCart, setOpenCart] = useState(false);

    const openCartModal = (status) => {
        setOpenCart(status);
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand color="light">Book Repo - ECS Frontend Developer Challenge</Navbar.Brand>
                <Button variant="danger"
                    onClick={()=>openCartModal(true)}
                    style={{ position: "fixed", right: "10px" }} 
                >
                    Cart <Badge variant="light"> {props.cart.length} </Badge>
                </Button>
            </Navbar>

            <Cart data={props} openCart={openCart} openCartModal={openCartModal} />
        </div>
    )
}

export default Header
