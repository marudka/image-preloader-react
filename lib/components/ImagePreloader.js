import React, { Component } from "react";
import PropTypes from "prop-types";

import loadImage from "./loadImage";
import Preloader from "./Preloader/Preloader";
import "./../styles/preloader.scss";

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
        const styles = {
            height: this.props.styles.height,
            width: this.props.styles.width,
        };

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
            <div className="image-preloader" style={styles}>
                {imageWrapper}
            </div>
        )
    }
}

ImagePreloader.defaultProps = {
    styles: {
        width: "100%",
        height: "100%",
    }
};

ImagePreloader.PropTypes = {
    src: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

export default ImagePreloader;