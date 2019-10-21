# react-spring alerts

The easiest way to add beautiful alerts to your React app. Built with Hooks and Context API, animated with react-spring.

![](react-spring-alerts.gif)

## Quickstart

1. `npm i react-spring-alerts` / `yarn add react-spring-alerts`
2. Wrap your root component with the `AlertsWrapper` component:

```JSX
import { AlertsWrapper } from 'react-spring-alerts';
import { App } from './App';

const AppWithAlerts = () => (
    <AlertsWrapper>
        <App />
    </AlertsWrapper>
);
```

3. Access the Alerts context from any component within your app

```JSX
import { useAlerts } from 'react-spring-alerts';

const AlertButton = () => {
    const Alerts = useAlerts();
    ...
};
```

4. Trigger an alert

```JS
Alerts.showAlert({
    type: 'error',
    title: 'Example Error',
    message: 'This is an error message',
    duration: 5000,
});
```

## AlertWrapper Configuration

You can override the style of the alerts by passing an optional `styleConfig` prop to `AlertWrapper`:

```JS
const styleConfigPropType = PropTypes.shape({
    container: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object,
    error: PropTypes.object,
    info: PropTypes.object,
    success: PropTypes.object,
});
```

You can also customise the transition animation by passing an optional `transitionConfig` prop to `AlertWrapper`. For more information, please see documentation for react-spring's [useTransition](https://www.react-spring.io/docs/hooks/use-transition).

## Alert Configuration

| Property | Type | Required | Default value | Description |
| -- | -- | :--: | :--: | -- |
| title | string | ✅ | - | Header for the alert |
| message | string | ✅ | - | Message content for the alert |
| type | string | ❌ | 'error' | Type of the alert. One of 'success', 'info' or 'error' |
| duration | number | ❌ | 8000 | Duration of the alert in ms. 0 disables auto-dismiss |