/**
 * Map routes
 * @param app : express application
 * @param options : folder, prefix
 */
exports.map = function(app, options){
    var fs = require('fs');

    var folder = options.path;
    var prefix = '/';
    if (options.prefix) {
        prefix += options.prefix + "/";
    }

    var controllers = fs.readdirSync(folder);

    controllers.forEach(function (file) {
        var controllerModule = require(folder + file.split('.')[0]);
        var controller = new controllerModule.controller();
        var routeParam = controller.name;
        console.log('controller : ' + routeParam);

        if (controller.index) {
            app.get(prefix + routeParam, controller.index);
            console.log('route : ' + prefix + routeParam + ' created');
        }

        for (var action in controller) {
            if (typeof controller[action] === 'function' 
                && (action.length > 0 && action[0] != "_")) {
                app.get(prefix + routeParam + '/' + action, controller[action]);
                console.log('route : ' + prefix + routeParam + '/' + action + ' created');
            }
        }
    });
}