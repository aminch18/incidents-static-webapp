// const baseUrl = 'https://incidences-api.azurewebsites.net';
const endpoint = '/api/incidents'
// const url = baseUrl + endpoint;

export const getAllIncidences = async () => {
    try{
        const response = await fetch(endpoint);
        console.log(response.body)
        return await response.json();
    }
    catch(err){
        console.log(err)
        throw err;
    }
    
}

export const getIncidence = async (data) => {
    const getByIdUrl = endpoint +  `/${data.id}`;
    const response = await fetch(getByIdUrl);
    return await response.json();
}
export const createIncidence = async (data) => {
    const requestInit =  {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, requestInit);
    return await response.json();
}

export const updateIncident = async (data) => {
    const updateUrl = endpoint +  `/${data.id}`;
    const requestInit =  {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    console.log(JSON.stringify(data));
    const response = await fetch(updateUrl, requestInit);
    return await response.json();
}

export const deleteIncident = async (incidentId, workerId) => {
    const deleteUrl = endpoint +  `/${incidentId}/${workerId}`;
    const requestInit =  { method: 'DELETE' };
    const response = await fetch(deleteUrl, requestInit);
    return await response.json();
}