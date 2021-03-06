import React, {
    useState,
    useContext,
} from 'react';
import PropTypes from 'prop-types';
import { transitionConfigPropType, styleConfigPropType } from './propTypes';
import AnimatedAlertsOverlay from './components/AnimatedAlertsOverlay';

const AlertContext = React.createContext({ showAlert: () => null });
// hook to expose showAlert in any descendant of AlertsWrapper
const useAlerts = () => useContext(AlertContext);

const propTypes = {
    transitionConfig: transitionConfigPropType,
    styleConfig: styleConfigPropType,
    children: PropTypes.node.isRequired,
};

const defaultProps = {
    transitionConfig: {
        from: {
            right: -500,
            marginTop: 0,
            opacity: 0,
        },
        enter: {
            right: 0,
            marginTop: 12,
            opacity: 1,
        },
        leave: {
            right: -500,
            marginTop: 0,
            opacity: 0,
        },
    },
    styleConfig: {},
};

// place AnimatedAlertsOverlay on top of children and wrap everything with AlertContext
const AlertsWrapper = ({
    transitionConfig,
    styleConfig,
    children,
}) => {
    const [alerts, setAlerts] = useState([]);
    // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
    const removeAlert = (timestampId) => {
        setAlerts(
            (alertArray) => alertArray.filter(
                (alertInfo) => alertInfo.id !== timestampId
            )
        );
    };
    const showAlert = ({
        type,
        title,
        message,
        duration = 8000
    }) => {
        // use creation timestamp as psuedo-unique alert object ID
        const newAlertId = new Date().getTime();
        const newAlert = {
            id: newAlertId,
            type,
            title,
            message,
        };
        setAlerts(
            (alertArray) => [...alertArray, newAlert]
        );
        if (duration !== 0) {
            setTimeout(
                () => removeAlert(newAlertId),
                duration,
            );
        }
    };
    return (
        <AlertContext.Provider value={{ showAlert }}>
            { children }
            <AnimatedAlertsOverlay
                alerts={ alerts }
                removeAlert={ removeAlert }
                transitionConfig={ transitionConfig }
                styleConfig={ styleConfig }
            />
        </AlertContext.Provider>
    );
};

AlertsWrapper.propTypes = propTypes;
AlertsWrapper.defaultProps = defaultProps;

export {
    AlertsWrapper,
    useAlerts,
};
