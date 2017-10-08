import React, { Component } from "react";
import PropTypes from "prop-types";

import loadImage from "./loadImage";
import Preloader from "./Preloader/Preloader";

class ImagePreloader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            error: false,
        }
    }

    componentDidMount() {
        this.handleLoad();
    }

    handleLoad() {
        loadImage(this.props.src)
            .then(() => {
                this.setState({ loaded: true });
            }).catch(() => {
                this.setState({ error: true });
            })
    }

    render() {
        let imageWrapper;
        switch (true) {
            case this.state.loaded :
                imageWrapper = <img src={this.props.src} />;
                break;
            case this.state.error :
                imageWrapper = <b>Error</b>;
                break;
            default :
                imageWrapper = <Preloader className="ball-pulse" />
        }

        return (
            <div className="image-preloader">
                {imageWrapper}
            </div>
        )
    }
}

ImagePreloader.PropTypes = {
    src: PropTypes.string.isRequired,
};

export default ImagePreloader;