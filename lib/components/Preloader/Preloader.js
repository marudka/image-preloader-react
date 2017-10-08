import React from "react";
import PropTypes from "prop-types";
import "./../../styles/loaders.scss";

const Preloader = ({ className }) => {
    return (
        <div className="loader">
            <div className={className}>
                ssss
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};

Preloader.PropTypes = {
    className: PropTypes.string.isRequired,
};

export default Preloader;