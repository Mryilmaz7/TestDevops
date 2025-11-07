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

    // Test dışı ortamlarda (ör. build, start) Babel devre dışı
    return {};
};
