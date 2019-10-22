import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import IconButton from './IconButton';
import { styleConfigPropType } from '../propTypes';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import './Alert.css';

const propTypes = {
    type: PropTypes.oneOf(['success', 'info', 'error']),
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
    animation: PropTypes.object.isRequired,
    styling: styleConfigPropType,
};

const defaultProps = {
    type: 'error',
    styling: {},
};

// use forwardRef here to access alert *content* div height
// used to animate *container* div height from 0 <-> auto during enter / leave transition
const Alert = React.forwardRef(
    ({
        type,
        title,
        message,
        onDismiss,
        animation,
        styling,
    }, ref) => (
        <animated.div
            className={ `alert-container ${type}` }
            style={{
                ...styling.container,
                ...styling[type],
                ...animation
            }}
        >
            <div className="alert-content-wrapper" ref={ ref }>
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
            </div>
        </animated.div>
    )
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
