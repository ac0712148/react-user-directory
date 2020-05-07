import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row"
import Col from "./Col"


class UserContainer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        Test Text
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserContainer;