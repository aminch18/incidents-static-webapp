module.exports = async function (context, req, item) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const { body }= req;
    if (body !== null) {
        context.bindings.outputDocument = {
            ...body,
        };
        context.res = {
            body: {IsEdited: true }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {IsEdited: false }
        };
    }
}