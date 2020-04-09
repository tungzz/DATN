import React, { Component } from 'react';
import axios from 'axios';
import {
    Container, Row, Col, 
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

class Products extends Component {
    constructor(){
        super();

        this.state = {
          products: []
        };
    }

    componentDidMount() {
      axios.get("https://0pllb.sse.codesandbox.io/products/").then(res => {
        this.setState({
          products: res.data
        })
      })
    }


    render(){
        const { products } = this.state;
        return(
            <Container>
                <h2>Products</h2>
                <Row>
                    {products.map(product =>(
                        <Col sm="4">
                            <Card>
                            <CardImg top width="100%" src={product.imgUrl} />
                            <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <Button>Add to card</Button>
                            </CardBody>
                            </Card> 
                        </Col>
                    ))}
                </Row>
            </Container>
            
        );
    }
}
export default Products