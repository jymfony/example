const Response = Jymfony.Component.HttpFoundation.Response;
const BinaryFileResponse = Jymfony.Component.HttpFoundation.BinaryFileResponse;

/**
 * @memberOf App.Controller
 */
export default class ApplicationController {
    /**
     * @returns {Jymfony.Component.HttpFoundation.Response}
     */
    indexAction() {
        return new BinaryFileResponse(
            __dirname + '/../../templates/index.html',
            Response.HTTP_OK,
            { 'Content-Type': 'text/html' }
        );
    }
}
