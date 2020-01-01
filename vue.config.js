const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "c@": path.join(__dirname, 'src/components'),
                "img@": path.join(__dirname, 'src/assets/img'),
            }
        },

        //Включить/оключить минификацию
        // optimization: {
        //   minimize: false
        // }

    },
}