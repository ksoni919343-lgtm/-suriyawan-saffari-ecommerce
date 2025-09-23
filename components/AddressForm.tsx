'use client';
import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  version: 'weekly',
});

const AddressForm = () => {
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    loader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address-input') as HTMLInputElement,
        { types: ['geocode'] }
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setAddress(place.formatted_address || '');
      });
    });
  }, []);

  return (
    <input
      id="address-input"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      placeholder="Enter Address"
      className="w-full p-2 border rounded"
    />
  );
};

export default AddressForm;
