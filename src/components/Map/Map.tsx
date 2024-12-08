import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map.tsx';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';
import { Icon, layerGroup, Marker } from 'leaflet';
import { TOffer, TOfferById } from '../../types/offers.ts';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  offers: TOffer[];
  activeOffer: TOffer | TOfferById;
  className: string;
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

function Map({ offers, activeOffer, className }: TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, activeOffer.city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach(({ location, title }) => {
        const { latitude: lat, longitude: lng } = location;

        const marker = new Marker({ lat, lng });

        marker
          .setIcon(
            !!activeOffer && title === activeOffer.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className={className}
      style={{ maxWidth: '800px', margin: '0 auto' }}
      ref={mapRef}
    />
  );
}

export default Map;
