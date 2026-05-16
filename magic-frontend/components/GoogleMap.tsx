'use client';

import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
interface MapProps {
  lat: number;
  lng: number;
}
export default function Map({
  lat,
  lng
}: MapProps) {

  const { isLoaded } =
    useJsApiLoader({
      googleMapsApiKey:
        process.env
          .NEXT_PUBLIC_GOOGLE_MAPS_KEY!
    });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      center={{
        lat,
        lng
      }}
      zoom={14}
      mapContainerStyle={{
        width: '100%',
        height: '400px'
      }}
    >
      <Marker
        position={{
          lat,
          lng
        }}
      />
    </GoogleMap>
  );
}