module.exports = (api) => {
    api.cache(true);
    
return {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['last 4 versions', 'not ie <= 10']
                },
                exclude: ['proposal-dynamic-import']
            }
        ],
        '@babel/react',
        '@babel/preset-typescript'
    ],

    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']
}
};
