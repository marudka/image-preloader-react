import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Jumbotron } from "react-bootstrap";

import ImageGenerator from "./ImageGenerator";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cats: 1,
            city: 1,
            nature: 1,
        };

        this.mounted = false;

        this.handleButtonImageClick = this.handleButtonImageClick.bind(this);
        this.handleButtonBackgroundClick = this.handleButtonBackgroundClick.bind(this);
        this.handleButtonErrorClick = this.handleButtonErrorClick.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
    }

    handleButtonImageClick() {
        if (!this.mounted) {
            return;
        }
        const newCountCats = this.state.cats + 1;
        this.setState({
            cats: newCountCats,
        });
    }

    handleButtonBackgroundClick() {
        if (!this.mounted) {
            return;
        }
        const newCountCity = this.state.city + 1;
        this.setState({
            city: newCountCity,
        });
    }

    handleButtonErrorClick() {
        if (!this.mounted) {
            return;
        }
        const newCountNature = this.state.nature + 1;
        this.setState({
            nature: newCountNature,
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>Simple React Image Preloader</p>
                    </Jumbotron>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <ImageGenerator category="cats" imageIndex={this.state.cats} />
                            <h3>Preloader as a image</h3>
                            <p>
                                <Button bsStyle="primary" onClick={this.handleButtonImageClick}>Reload image</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <ImageGenerator category="city" imageIndex={this.state.city} />
                            <h3>Preloader as a background</h3>
                            <p>
                                <Button bsStyle="primary" onClick={this.handleButtonBackgroundClick}>Reload image</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                        <Thumbnail>
                            <ImageGenerator category="nature" imageIndex={this.state.nature} />
                            <h3>Loaded image error</h3>
                            <p>
                                <Button bsStyle="primary" onClick={this.handleButtonErrorClick}>Reload image</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default App;
