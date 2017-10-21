import React, { Component } from "react";
import PropTypes from "prop-types";
import catImage from "random-cat";

import ImagePreloader from "./../../lib/components/ImagePreloader";

class ImageGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            src: catImage.get({
                width: 332,
                height: 220,
                category: this.props.category,
                imageIndex: this.props.imageIndex,
            }),
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.imageIndex !== this.props.imageIndex) {
            this.setState({
                src: catImage.get({
                    width: 332,
                    height: 220,
                    category: nextProps.category,
                    imageIndex: nextProps.imageIndex,
                }),
            })
        }
    }


    render() {
        return (
            <div>
                <ImagePreloader src={this.state.src} />
            </div>
        )
    }
}

ImageGenerator.PropTypes = {
    imageIndex: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
};

export default ImageGenerator;
