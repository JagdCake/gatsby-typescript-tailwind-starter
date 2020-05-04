module.exports = {
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
    purge: {
        content: ['./src/**/*.tsx', './src/**/*.jsx'],
        // PurgeCSS options
        options: {
            whitelist: [],
        },
    },
};
