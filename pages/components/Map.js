import { React, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import tw from 'tailwind-styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoidmVua2F0ZXM5dWkiLCJhIjoiY2t2bWszaDZiMTVqcjJvbzA0cHV6cWZxaCJ9.nWgnUUycTGxAG96wsnobWQ';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
  });
  return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1
`;
