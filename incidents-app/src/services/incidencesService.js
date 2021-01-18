const baseUrl = 'http://localhost:7071';
const endpoint = '/api/incidents'
const url = baseUrl + endpoint;

export const getAllIncidences = async () => {
    const response = await fetch(url);
    return await response.json();
}

export const getIncidence = async (data) => {
    const getByIdUrl = url +  `/${data.id}`;
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
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const response = await fetch(url, requestInit);
    return await response.json();
}

export const updateIncident = async (data) => {
    const updateUrl = url +  `/${data.id}`;
    const requestInit =  {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    const response = await fetch(updateUrl, requestInit);
    return await response.json();
}

export const deleteIncident = async (incidentId, workerId) => {
    const deleteUrl = url +  `/${incidentId}/${workerId}`;
    const requestInit =  { method: 'DELETE' };
    const response = await fetch(deleteUrl, requestInit);
    return await response.json();
}