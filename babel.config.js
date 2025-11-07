// babel.config.js
module.exports = function (api) {
    const isTest = api.env('test');
    if (isTest) {
        return {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-react',
                '@babel/preset-typescript',
            ],
        };
    }

    // Build sırasında hiçbir Babel config'i dönme
    return {};
};
