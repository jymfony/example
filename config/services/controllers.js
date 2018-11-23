/** @global {Jymfony.Component.DependencyInjection.ContainerBuilder} container */
/** @global {Jymfony.Component.Config.Loader.LoaderInterface} loader */

container.register(App.Controller.ApplicationController)
    .setPublic(true)
;
