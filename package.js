// @ts-check

(async () => {

    const nexe = require('nexe')
    const path = require('path')
    const rimraf = require('rimraf')
    const copyfiles = require('copyfiles')

    // Wipe previous state if any.
    rimraf.sync(path.resolve(__dirname, 'dist'))

    // Create the executable into `dist`.
    const natives = [
        'node_modules/drivelist/build/Release/drivelist.node',
        'node_modules/find-git-repositories/build/Release/findGitRepos.node',
        'node_modules/nsfw/build/Release/nsfw.node',
        'node_modules/@theia/node-pty/build/Release/pty.node',
        'node_modules/fsevents/lib/binding/Release/',
        'node_modules/@theia/typescript/lib/node/startserver.js' // https://github.com/theia-ide/theia/pull/4954
    ]

    const output = path.resolve(__dirname, 'dist/theia')
    await nexe.compile({
        output,
        input: path.resolve(__dirname, 'src-gen/backend/main.js'),
        loglevel: 'verbose',
        resources: [
            'lib/**/*', // The frontend application.
            ...natives
        ]
    })

    // Move the natives next to the executable.
    // XXX: Is there a better approach?
    copy([...natives, path.resolve(__dirname, 'dist')])

    /**
     * The last item is the destination path. Consumes `glob`.
     */
    function copy(paths) {
        copyfiles(paths, {
            all: true,
            verbose: true
        }, error => {
            if (error) {
                console.error(error)
                process.exit(1)
            }
        })
    }

})()