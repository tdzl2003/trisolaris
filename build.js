/**
 * Created by tdzl2_000 on 2015/2/20.
 */

({
    appDir: "game",
    baseUrl: "scripts",
    dir: "build",
    optimize: "closure",
    modules: [
        {
            name: "main"
        }
    ],
    mainConfigFile: 'game/scripts/main.js',
    generateSourceMaps: true,
    optimizeAllPluginResources: false,
    preserveLicenseComments: false
})