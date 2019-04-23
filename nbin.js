const { Binary } = require("@coder/nbin");
const fs = require("fs");
const os = require("os");
const path = require("path");

const target = `${os.platform()}-${os.arch()}`;
const rootDir = path.join(__dirname);
const bin = new Binary({
    mainFile: path.join(rootDir, "out", "cli.js"),
    suppressOutput: false
});
bin.writeFiles(path.join(rootDir, "lib", "**"));
bin.writeFiles(path.join(rootDir, "src-gen", "**"));
bin.writeFiles(path.join(rootDir, "out", "**"));
[
    // Native modules. These are marked as externals in the webpack config.
    // "spdlog",
    // "node-pty",

    // // These are spdlog's dependencies.
    // "mkdirp", "bindings",
    '@theia/node-pty',
    'drivelist',
    'find-git-repositories',
    'nsfw',
    'formidable',
    '@coder/nbin'
].forEach((name) => {
    bin.writeModule(path.join(__dirname, 'node_modules', name));
});
bin.build().then((binaryData) => {
    const outputPath = path.join(__dirname, `cli-${target}`);
    fs.writeFileSync(outputPath, binaryData);
    fs.chmodSync(outputPath, "755");
}).catch((ex) => {
    // tslint:disable-next-line:no-console
    console.error(ex);
    process.exit(1);
});
