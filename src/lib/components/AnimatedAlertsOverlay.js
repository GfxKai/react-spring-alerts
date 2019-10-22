import React, { useState } from 'react';
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
    // use weakmap to get div height for alert items
    // prevents memory leaks by garbage collecting removed items
    const [refMap] = useState(() => new WeakMap());
    const transitionConfigWithHeightAnimation = {
        ...transitionConfig,
        from: {
            ...transitionConfig.from,
            height: 0,
        },
        enter: (item) => async (next) => {
            await next({
                ...transitionConfig.enter,
                height: refMap.get(item).offsetHeight,
            });
        },
        leave: () => async (next) => {
            await next({
                ...transitionConfig.leave,
                height: 0,
            });
        },
    };
    // useTransition hook generates an transition animation object for each item in the input array
    const transitions = useTransition(
        alerts,
        // assign keys to item array elements to minimise DOM mutation
        (alert) => alert.id,
        transitionConfigWithHeightAnimation,
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
                ref={ (ref) => ref && refMap.set(alertInfo, ref) }
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
