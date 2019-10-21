import React from 'react';
import { useAlerts } from '../../lib';
import dangerousRequestAsync from '../riskReward';
import './SubmitButton.css';

const AlertButton = () => {
    const Alerts = useAlerts();
    const onSubmit = async () => {
        try {
            const unlikelyResult = await dangerousRequestAsync();
            Alerts.showAlert({
                type: 'success',
                title: 'Success',
                message: unlikelyResult,
            });
        } catch (e) {
            Alerts.showAlert({
                type: 'error',
                title: 'Error',
                message: e.message,
            });
        }
    };
    return (
        <button
            type="button"
            className="submit-button"
            onClick={ onSubmit }
        >
            Feeling lucky?
        </button>
    );
};

export default AlertButton;
