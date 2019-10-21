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

3. Trigger an alert anywhere in your app

```JSX
import { useAlerts } from 'react-spring-alerts';

const AlertButton = () => {
    const Alerts = useAlerts();
    const onSubmit = async () => {
        try {
            const result = await requestAsync();
            Alerts.showAlert({
                type: 'success',
                title: 'Success',
                message: result,
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
        <SubmitButton action={ onSubmit } />
    );
};
```

## Configuration

You can customise the style of the alerts by passing an optional `styleConfig` prop to `AlertWrapper`:

```JS
const styleConfig = {
    container: containerStyle,
    header: headerStyle,
    body: bodyStyle,
    error: errorStyle,
    info: infoStyle,
    success: successStyle,
}
```

You can also customise the transition animation by passing an optional `transitionConfig` prop to `AlertWrapper`. For more information please see documentation for react-spring's [useTransition](https://www.react-spring.io/docs/hooks/use-transition)