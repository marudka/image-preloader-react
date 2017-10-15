import React from "react";
import PropTypes from "prop-types";
import "./../../styles/loaders.scss";

const Preloader = ({ className }) => {
    return (
        <div className="loader">
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
};

Preloader.PropTypes = {
    className: PropTypes.string.isRequired,
};

export default Preloader;