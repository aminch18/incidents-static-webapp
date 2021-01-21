const cosmos = require('@azure/cosmos');
require('dotenv').config()
const connectionString = process.env.COSMOS_CONNECTION_STRING;
const dataBaseName = process.env.COSMOS_DATABASE_NAME;
const containerName = process.env.COSMOS_CONTAINER_NAME;

const { CosmosClient } = cosmos;
const client = new CosmosClient(connectionString)
const container = client.database(dataBaseName).container(containerName);

module.exports = async function (context, req) {
    const { id, partitionKey } = req.params;
    let res;
    try {
        res = await container.item(id, partitionKey).delete();
        context.res = {
            body: {'result': 'success'}
        };
    }
    catch(err) {
        context.log(err)
        context.res = {
            status: 400,
            body: {'result': 'fail'}
        };
    }
}