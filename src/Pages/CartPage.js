import { useContext } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HeaderPage from "../components/HeaderPage";
import MessageBox from "../components/MessageBox";
import NavBar from "../components/NavBar";
import { Store } from "../Store";



export default function CheckoutScreen() {
    const { state, dispatch: cxtDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    return(
        <>
        <div>
            <Helmet>
                <title>Shopping Cart</title>
            </Helmet>
            <HeaderPage/>
            <NavBar/>
            <h1>Shopping Cart</h1>
            <Row>
                <Col md={8}></Col>
                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart Is Empty <Link to= "/">Go Shopping</Link>
                    </MessageBox>
                ):
                (
                    <ListGroup>
                        {cartItems.map((items) => (
                            <ListGroup.Item key={items.id}>
                                <Row className="align-items-cart"></Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )
            }
                <Col md={4}></Col> 
            </Row>
        </div>
        </>
    )
    
}