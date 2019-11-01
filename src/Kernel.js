import { existsSync } from 'fs';

const BaseKernel = Jymfony.Component.Kernel.Kernel;
const Route = Jymfony.Component.Routing.Route;
const RouteCollection = Jymfony.Component.Routing.RouteCollection;

/**
 * @memberOf App
 */
export default class Kernel extends BaseKernel {
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
        loader.load(__dirname + '/../config/config.yaml');
        if (existsSync(__dirname + '/../config/' + container.getParameter('kernel.environment') + '/config.yaml')) {
            loader.load(__dirname + '/../config/' + container.getParameter('kernel.environment') + '/config.yaml');
        }

        loader.load(__dirname + '/../config/services.yaml');
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
