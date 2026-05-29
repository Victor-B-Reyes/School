import axios from "axios";
const num = "2.0.0";
export const version = `Versión ${num} (08/04/2026 23:00)`
export const versionCorta = `Versión ${num}`
export const url = "https://endpoints.biapp.com.mx"
export const WHATSAPP_ICON = "https://cdn-icons-png.flaticon.com/512/3670/3670051.png";
export const PHONE_ICON = "https://cdn-icons-png.flaticon.com/512/597/597177.png";
export const VERIFIED_ICON = "https://cdn-icons-png.flaticon.com/512/10629/10629607.png";
export const FACEBOOK_ICON = "https://cdn-icons-png.flaticon.com/512/5968/5968764.png";
export const INSTAGRAM_ICON = "https://cdn-icons-png.flaticon.com/512/2111/2111463.png";
export const urlSecurity = axios.create({
  baseURL: `${url}/api`,
  //baseURL: " http://localhost:5260/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export const urlSmp = axios.create({
  baseURL: `${url}/smp/api`,
  //baseURL: " http://localhost:5183/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});


export const urlWarehouse = axios.create({
  baseURL: `${url}/warehouse/api`,
  //baseURL: " http://localhost:5199/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});


export const urlAdministration = axios.create({
  baseURL: `${url}/administration/api`,
  //baseURL: " http://localhost:5047/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export const urlClinica = axios.create({
  baseURL: `${url}/clinica/api`,
  //baseURL: " http://localhost:5112/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});


export const firebase = {
    projectId: 'beapp-501d1',
    appId: '1:151993360357:web:127db5b6d20896fb84990c',
    //aqui juego con las base de datos
    databaseURL: 'https://beapp-501d1-default-rtdb.firebaseio.com',
    // databaseURL: 'https://beapp-testing-b89.firebaseio.com/',
    storageBucket: 'beapp-501d1.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyDxCBGKk8nT09hdW85-PyOkhw5_JPZLF1A',
    authDomain: 'beapp-501d1.firebaseapp.com',
    messagingSenderId: '151993360357',
}

export const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN;