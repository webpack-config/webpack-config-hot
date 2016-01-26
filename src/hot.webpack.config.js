import partial from 'webpack-partial';
import {HotModuleReplacementPlugin, NoErrorsPlugin} from 'webpack';

export default () => (config) => partial(config, {
  plugins: [
    // Add webpack's HMR runtime.
    new HotModuleReplacementPlugin(),

    // Don't generate bundles with errors so HMR doesn't bomb the app.
    new NoErrorsPlugin(),
  ],
});
