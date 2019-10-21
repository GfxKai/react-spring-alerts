import React from 'react';
import { AlertsWrapper } from '../lib';
import SubmitButton from './components/SubmitButton';
import './App.css';

const AppWithAlerts = () => (
    <AlertsWrapper>
        <div className="app">
            <SubmitButton />
        </div>
    </AlertsWrapper>
);

export default AppWithAlerts;
