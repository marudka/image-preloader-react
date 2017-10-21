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
        this.handleLoad(this.props.src);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src === this.props.src) {
            return;
        }
        this.resetState();
        this.handleLoad(nextProps.src);
    }

    handleLoad(image) {
        loadImage(image)
            .then(() => {
                this.setState({ loaded: true });
            }).catch(() => {
                this.setState({ error: true });
            })
    }

    resetState() {
        this.setState({
            loaded: false,
            error: false,
        })
    }

    render() {
        const styles = this.props.styles;

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
        minHeight: "220px",
    }
};

ImagePreloader.PropTypes = {
    src: PropTypes.string.isRequired,
    styles: PropTypes.object,
};

export default ImagePreloader;