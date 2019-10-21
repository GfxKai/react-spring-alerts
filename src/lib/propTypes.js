import PropTypes from 'prop-types';

const transitionConfigPropType = PropTypes.shape({
    initial: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    from: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    enter: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    update: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    leave: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.object),
    ]),
    trail: PropTypes.number,
    unique: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    reset: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    onDestroyed: PropTypes.func,
});

const styleConfigPropType = PropTypes.shape({
    container: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object,
    error: PropTypes.object,
    info: PropTypes.object,
    success: PropTypes.object,
});

export {
    transitionConfigPropType,
    styleConfigPropType,
};
