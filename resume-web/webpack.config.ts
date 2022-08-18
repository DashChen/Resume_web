import * as webpack from 'webpack';
import * as pkg from './package.json';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import IconListPlugin from './webpack_plugins/icon-list-plugin';
const path = require('path');

export default (
    config: webpack.Configuration,
    options: CustomWebpackBrowserSchema,
    targetOptions: TargetOptions
) => {
    if (config.plugins) {
        config.plugins.push(
            new webpack.DefinePlugin({
                'APP_VERSION': JSON.stringify(pkg.version),
            }),
        );
        // config.plugins.push(new IconListPlugin);
        config.plugins.push(
            new webpack.WatchIgnorePlugin({
                paths: [
                    path.resolve(__dirname, './src/assets/icons.json')
                ]
            })
        );
    }
    return config;
}