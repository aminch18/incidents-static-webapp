const endpoint = '/api/incidents'
// const url = baseUrl + endpoint;

export const getAllIncidences = async () => {
    try {
        const response = await fetch(endpoint);
        return await response.json();
    } 
    catch (error) {
        throw error;
    }
}

export const getIncidence = async (data) => {
    try {
        const getByIdUrl = endpoint +  `/${data.id}`;
        const response = await fetch(getByIdUrl);
        return await response.json();
    } 
    catch (error) {
        throw error;
    }
}
export const createIncidence = async (data) => {
    try {
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
    catch (error) {
        throw error;
    }
}

export const updateIncident = async (data) => {
    try {
        const updateUrl = endpoint +  `/${data.id}`;
        const requestInit =  {
            method: 'PUT', 
            mode: 'cors', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(updateUrl, requestInit);
        return await response.json();
    } 
    catch (error) {
        throw error;
    }
}

export const deleteIncident = async (incidentId, workerId) => {
    try {
        const deleteUrl = endpoint +  `/${incidentId}/${workerId}`;
        console.log(deleteUrl);
        const requestInit =  { method: 'DELETE' };
        const response = await fetch(deleteUrl, requestInit);
        return await response.json();
    } 
    catch (error) {
        throw error;
    }
}