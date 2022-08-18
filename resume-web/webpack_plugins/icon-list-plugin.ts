import { Compiler } from 'webpack';
const path = require('path');
const fs = require('fs');

export default class IconListPlugin {
  apply(compiler: Compiler) {
    const pluginName = IconListPlugin.name;
    compiler.hooks.done.tap(pluginName, () => {
      try {
        const icons: Array<string> = fs.readdirSync(path.resolve(__dirname, '../src/assets/icons'));
        fs.writeFileSync(
          path.resolve(__dirname, '../src/assets/icons.json'),
          JSON.stringify(
            icons.reduce(
              (acc, name) => ({
                ...acc,
                [name.replace(/\.[^/.]+$/, '')]: name,
              }),
              {}
            ),
            null,
            2
          ),
          () => {
            //
          }
        );
      } catch (err: any) {
        if (err) {
          throw err;
        }
      }
    });
  }
}