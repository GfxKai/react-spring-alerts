import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const propTypes = {
    Icon: PropTypes.elementType.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    offset: PropTypes.number,
    isDisabled: PropTypes.bool,
    action: PropTypes.func.isRequired,
    containerStyling: PropTypes.object,
    itemInfo: PropTypes.object,
};

const defaultProps = {
    color: '#565656',
    size: 24,
    offset: 0,
    isDisabled: false,
    containerStyling: undefined,
    itemInfo: undefined,
};

const IconButton = ({
    Icon,
    color,
    size,
    offset,
    isDisabled,
    action,
    containerStyling,
    itemInfo,
}) => {
    const getColor = () => {
        if (typeof color === 'function') {
            return color(itemInfo);
        }
        return color;
    };
    return (
        <button
            type="button"
            className="icon-button"
            style={ containerStyling }
            onClick={ !isDisabled ? () => action(itemInfo) : () => null }
        >
            <Icon
                className={ isDisabled ? 'icon-button disabled' : 'icon-button' }
                fill={ getColor() }
                style={{
                    height: size,
                    width: size,
                    marginBottom: offset,
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                }}
            />
        </button>
    );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
