import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Table from "./Table";


class UserContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col> 
                            <Table /> 
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserContainer;