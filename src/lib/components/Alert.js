import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import IconButton from './IconButton';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import './Alert.css';

const propTypes = {
    type: PropTypes.oneOf(['success', 'info', 'error']),
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
    animation: PropTypes.object.isRequired,
    styling: PropTypes.shape({
        container: PropTypes.object,
        header: PropTypes.object,
        body: PropTypes.object,
        error: PropTypes.object,
        info: PropTypes.object,
        success: PropTypes.object,
    }),
};

const defaultProps = {
    type: 'error',
    styling: {},
};

const Alert = ({
    type,
    title,
    message,
    onDismiss,
    animation,
    styling,
}) => (
    <animated.div
        className={ `alert-container ${type}` }
        style={{
            ...styling.container,
            ...styling[type],
            ...animation
        }}
    >
        <div className="alert-header" style={ styling.header }>
            <span>
                { title.toUpperCase() }
            </span>
            <IconButton
                Icon={ CloseIcon }
                size={ 12 }
                containerStyling={{
                    position: 'absolute',
                    right: 12,
                    height: 12,
                }}
                color="white"
                action={ onDismiss }
            />
        </div>
        <div className="alert-body" style={ styling.body }>
            <span>
                { message }
            </span>
        </div>
    </animated.div>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
