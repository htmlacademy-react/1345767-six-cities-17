import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map.tsx';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';
import { Icon, layerGroup, Marker } from 'leaflet';
import { TOffer, TOfferById } from '../../types/offers.ts';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  offers: TOffer[];
  activeOffer?: TOffer | TOfferById;
  isNearby?: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, activeOffer, isNearby }: TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (isNearby && map && activeOffer) {
      const markerLayer = layerGroup().addTo(map);
      const { latitude: lat, longitude: lng } = activeOffer.location;
      const marker = new Marker({ lat, lng });

      marker.setIcon(currentCustomIcon).addTo(markerLayer);
    }
  }, [activeOffer, isNearby, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach(({ location, title }) => {
        const { latitude: lat, longitude: lng } = location;

        const marker = new Marker({ lat, lng });

        marker
          .setIcon(
            activeOffer?.title === title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      if (isNearby && activeOffer?.location) {
        const { latitude: lat, longitude: lng } = activeOffer.location;
        const marker = new Marker({ lat, lng });

        marker.setIcon(currentCustomIcon).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer, isNearby]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;
