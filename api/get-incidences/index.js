module.exports = async function (context, req) {
    context.log('Get all incidences function executed.');
    context.res = {
        body: context.bindings.inputDocument
    };

}