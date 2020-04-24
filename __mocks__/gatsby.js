const React = require('react');
const gatsby = jest.requireActual('gatsby');

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            to,
            ...rest
        }) =>
            React.createElement('a', {
                ...rest,
                href: to,
            })
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => {
        return {
            site: {
                siteMetadata: {
                    title: `Starter`,
                },
            },
            placeholderImage: {
                childImageSharp: {
                    fluid: {
                        aspectRatio: 1,
                        sizes: `100 200 300`,
                        src: `base64-encoded-image`,
                        srcSet: `gatsby-astronaut`,
                    },
                },
            },
        };
    }),
};
