const Request = Jymfony.Component.HttpFoundation.Request;
const BaseKernel = Jymfony.Component.Kernel.Kernel;
const Route = Jymfony.Component.Routing.Route;
const RouteCollection = Jymfony.Component.Routing.RouteCollection;

const fs = require('fs');

/**
 * @memberOf App
 */
class Kernel extends BaseKernel {
    /**
     * @inheritdoc
     */
    * registerBundles() {
        yield new Jymfony.Bundle.FrameworkBundle.FrameworkBundle();
    }

    /**
     * @inheritdoc
     */
    _configureContainer(container, loader) {
        loader.load(__dirname + '/../config/config.json');
        if (fs.existsSync(__dirname + '/../config/' + container.getParameter('kernel.environment') + '/config.json')) {
            loader.load(__dirname + '/../config/' + container.getParameter('kernel.environment') + '/config.json');
        }

        loader.load(__dirname + '/../config/services.js');
    }

    loadRoutes() {
        const collection = new RouteCollection();

        collection
            .add('index', new Route('/', {
                _controller: 'App.Controller.ApplicationController:indexAction',
            }))
        ;

        return collection;
    }
}

module.exports = Kernel;
