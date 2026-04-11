import { urlAdministration } from "../environments/environments.js";

export const getRegisterSolicitud = async () => {
  
  
  const response = await urlAdministration.get(`/CourserInfo`, {});
  return response.data;
};

export const saveRegisterSolicitud = async (data) => {
  console.log(data)
  const response = await urlAdministration.post("/CourserInfo", data, {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      },
    });
  //console.log(response.data)
  return response.data;
};

export const updateRegisterSolicitud = async (id, data) => {
  //console.log(data)
  const response = await urlAdministration.put(`/CourserInfo/${id}`, data, {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      },
    });
  //console.log(response.data)
  return response.data;
};