const packagejson = require('../package.json');
export async function version(args: { _: string[]}) {
    console.log(packagejson.version);
}