import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

function Typography({
    variant = 'body1',
    className,
    children,
    ...otherProps
}) {
    const variantMapping = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'p',
        caption: 'span',
        overline: 'span',
        button: 'span',
        srOnly: 'span',
    };
    const ComponentProp = variantMapping[variant] || 'p';

    return (
        <ComponentProp className={className} {...otherProps}>
            {children}
        </ComponentProp>
    )
}

Typography.propTypes = {
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
        'button',
        'srOnly',
    ]),
    className: PropTypes.string,
    children: PropTypes.node
}

export default Typography;
