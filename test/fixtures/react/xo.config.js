import * as configs from "../.src/index.js";

export default [...configs.xo, ...configs.react({version: '19'}), ...configs.dprint];
