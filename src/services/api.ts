import {store} from '@/src/redux/store';
import {showToast} from '@/src/utils/helpers';
import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: Config.PUBLIC_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
    // 'Content-Type': 'application/json'
  }
});

export const initialApiConfig = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const {user} = store.getState().main;
      if (user) {
        config.headers.Authorization = `Bearer ${user?.token}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    },
  );

  HTTP_CLIENT.interceptors.response.use(
    (response: any) => {
      return response;
    },
    err => {
      console.log('err?.response?.data?.error', err?.response?.data);
      if (err?.response?.data?.data?.error)
        showToast('Error', err.response?.data?.data?.error, 'error');
      return Promise.reject(err);
    },
  );
};

const LOGIN = (params: FormData) => HTTP_CLIENT.post('login', params);
const SINGUP = (params: FormData) => HTTP_CLIENT.post('register', params);
const VERIFY_OTP = (params: FormData) => HTTP_CLIENT.post('verify-otp', params);
const GET_FARM_LIST = () => HTTP_CLIENT.get('get-farm-list');
const GET_FARM_ENUMS = () => HTTP_CLIENT.get('farm/enums');
const GET_FARM_STATS = () => HTTP_CLIENT.get('farm-statistics');
const ADD_FARM_DETAILS = (params: FormData) =>
  HTTP_CLIENT.post('add-farm-details', params);
const UPDATE_PASSWORD = (params: any) =>
  HTTP_CLIENT.post("update-password", params);

export const API = {LOGIN, SINGUP, VERIFY_OTP, ADD_FARM_DETAILS, GET_FARM_LIST, GET_FARM_ENUMS, GET_FARM_STATS, UPDATE_PASSWORD};
