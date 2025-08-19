import React, { useCallback } from 'react';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';

const showToast = (title: string, desc: string, type: ToastType) =>
  Toast.show({
    text1: title,
    text2: desc,
    type,
  });

const getCenterOffsetForAnchor = (
  anchor: {x: number; y: number},
  markerWidth: number,
  markerHeight: number,
): {x: number; y: number} => ({
  x: markerWidth * 0.5 - markerWidth * anchor.x,
  y: markerHeight * 0.5 - markerHeight * anchor.y,
});

const acreToSquareKM = (size: number) => (0.00404686 * size).toFixed(2);

const navigationRef: any = React.createRef();

const getPlainNumber = (phoneNumber: string) => phoneNumber.split(" ").join("");




const fetchAddressFromCoords = async (lat: number, lng: number) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Config.GOOGLE_PLACES_API_KEY}`
    );
    const data = await response.json();
    if (data.results.length > 0) {
     
      const validAddress = data.results.find((result: { types: string | string[]; formatted_address: string | string[]; }) => 
        !result.types.includes('plus_code') && !result.formatted_address.includes('+')
      );

      if (validAddress) {
        return validAddress.formatted_address;
      } else {
        return data.results[0].formatted_address; 
      }
    }
  } catch (error) {
    console.error('Error fetching address:', error);
  }
};
const getAverageCoordinates = (coords: Coords[]) => {
  const res = coords.reduce(
    (acc, obj) => ({
      latitude: acc.latitude + obj.latitude,
      longitude: acc.longitude + obj.longitude,
    }),
    {latitude: 0, longitude: 0},
  );
  return {
    latitude: res.latitude / coords.length,
    longitude: res.longitude / coords.length,
  };
};



 
export {
  getAverageCoordinates,
  acreToSquareKM,
  navigationRef,
  getCenterOffsetForAnchor,
  showToast,
  getPlainNumber,
  fetchAddressFromCoords,
  
};
