const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = (async () => {
    const defaultConfig = await mergeConfig(getDefaultConfig(__dirname), config);
    defaultConfig.transformer = {
        ...defaultConfig.transformer,
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    };

    return defaultConfig;
})(); 
