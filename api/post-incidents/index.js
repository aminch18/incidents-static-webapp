
module.exports = async function (context, req) {
    const moment = require('moment');
    const { body }= req;
    if (body !== null) {

        context.bindings.outputDocument = {
            ...body,
            CreatedDateTime: moment.utc().format()
        };
        context.res = {
            body: {'IsSuccess': true}
        };
    }else{
        context.res = {
            status: 400,
            body: {'IsSuccess': false }
        };
    }
}