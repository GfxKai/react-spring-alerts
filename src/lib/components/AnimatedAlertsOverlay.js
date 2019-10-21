import React from 'react';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import Alert from './Alert';
import { transitionConfigPropType, styleConfigPropType } from '../propTypes';
import './AnimatedAlertsOverlay.css';

const propTypes = {
    alerts: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeAlert: PropTypes.func.isRequired,
    transitionConfig: transitionConfigPropType.isRequired,
    styleConfig: styleConfigPropType,
};

const defaultProps = {
    styleConfig: {},
};

const AnimatedAlertsOverlay = ({
    alerts,
    removeAlert,
    transitionConfig,
    styleConfig,
}) => {
    // useTransition hook generates an transition animation object for each item in the input array
    const transitions = useTransition(
        alerts,
        // assign keys to item array elements to minimise DOM mutation
        (alert) => alert.id,
        transitionConfig,
    );
    // render transition array elements as components and pass through animation styling
    const animatedAlerts = transitions.map(
        ({
            key,
            item: alertInfo,
            props: animationConfig,
        }) => (
            <Alert
                key={ key }
                type={ alertInfo.type }
                title={ alertInfo.title }
                message={ alertInfo.message }
                onDismiss={ () => removeAlert(alertInfo.id) }
                animation={ animationConfig }
                styling={ styleConfig }
            />
        )
    );
    return (
        <div className="alerts-container">
            { animatedAlerts }
        </div>
    );
};

AnimatedAlertsOverlay.propTypes = propTypes;
AnimatedAlertsOverlay.defaultProps = defaultProps;

export default AnimatedAlertsOverlay;
