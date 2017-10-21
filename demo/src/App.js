import React from "react";
import { Grid, Row, Col, Thumbnail, Button, Jumbotron } from "react-bootstrap";
import catImage from "random-cat";

import ImagePreloader from "./../../lib/components/ImagePreloader";

const App = () => {
    const src = "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg";
    const src2 = "https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg";
    const src3 = catImage.get();
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
                        <ImagePreloader src={src} />
                        <h3>Preloader as a image</h3>
                        <p>
                            <Button bsStyle="primary">Reload image</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                    <Thumbnail>
                        <ImagePreloader src={src2} />
                        <h3>Preloader as a background</h3>
                        <p>
                            <Button bsStyle="primary">Reload image</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                    <Thumbnail>
                        <ImagePreloader src={src3} />
                        <h3>Loaded image error</h3>
                        <p>
                            <Button bsStyle="primary">Reload image</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </Row>
        </Grid>
    )
};

export default App;
