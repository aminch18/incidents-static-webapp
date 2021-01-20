module.exports = async function (context, req) {
    context.log('Get all incidences function executed.');
    context.log(context.bindings.inputDocument)
    context.res = {
        body: context.bindings.inputDocument
    };

}