import axios from 'axios';
import { API } from './api.constants';
import {Section, Trip} from '../models/models';

export type Params = {
  name?: number;
  _id?: number;
};

axios.defaults.headers.common['authorization'] = process.env.REACT_APP_MONGO_API_KEY;

// TODO add serialization for params and handle them on BE
export const fetchTrips = async (params: Params): Promise<Trip[]> => {
  return axios.get(API.TRIPS).then((res) => res.data);
};

export const fetchOneTrip = async (id: string): Promise<Trip> => {
  return axios.get(`${API.TRIPS}?id=${id}`).then((res) => res.data);
};

export const createTrip = async (newTrip: Trip): Promise<Trip> => {
  return axios.post(API.TRIPS, newTrip).then((res) => res.data);
}

export const updateTrip = async (newTrip: Trip): Promise<Trip> => {
  return axios.put(API.TRIPS, newTrip).then((res) => res.data);
}

export const removeTrip = async (id: string): Promise<Trip> => {
  return axios.delete(`${API.TRIPS}?id=${id}`).then((res) => res.data);
}

export const addTripSection = async (tripId: string, sectionData: Section): Promise<Trip> => {
  return axios.put(`${API.TRIPS}?id=${tripId}`, sectionData).then((res) => res.data);
}
