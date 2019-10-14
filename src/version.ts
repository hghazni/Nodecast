const packagejson = require('../package.json');
export async function version() {
    console.log(packagejson.version);
}