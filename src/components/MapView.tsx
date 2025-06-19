import { useEffect, useRef, useState } from 'react';
import { Property } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

interface MapViewProps {
  properties: Property[];
}

const MapView = ({ properties }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    // Initialize map
    const mapInstance = new window.google.maps.Map(mapRef.current, {
      zoom: 10,
      center: { lat: 40.7128, lng: -74.0060 }, // Default to NYC
      styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }]

    });

    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (!map || !properties.length) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    // Create bounds to fit all properties
    const bounds = new window.google.maps.LatLngBounds();

    // Add markers for each property
    properties.forEach((property) => {
      const marker = new window.google.maps.Marker({
        position: property.coordinates,
        map: map,
        title: property.title,
        icon: {
          url: `data:image/svg+xml,${encodeURIComponent(`
            <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C8.96 0 0 8.96 0 20C0 35 20 50 20 50C20 50 40 35 40 20C40 8.96 31.04 0 20 0Z" fill="#ef4444"/>
              <circle cx="20" cy="20" r="8" fill="white"/>
              <text x="20" y="25" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">$${property.price}</text>
            </svg>
          `)}`,
          scaledSize: new window.google.maps.Size(40, 50),
          anchor: new window.google.maps.Point(20, 50)
        }
      });

      marker.addListener('click', () => {
        setSelectedProperty(property);
      });

      markersRef.current.push(marker);
      bounds.extend(property.coordinates);
    });

    // Fit map to show all markers
    if (properties.length > 0) {
      map.fitBounds(bounds);
      if (properties.length === 1) {
        map.setZoom(15);
      }
    }
  }, [map, properties]);

  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden" data-id="vd5620s5f" data-path="src/components/MapView.tsx">
      <div ref={mapRef} className="w-full h-full" data-id="5uslo915n" data-path="src/components/MapView.tsx" />
      
      {/* Property Info Card */}
      {selectedProperty &&
      <Card className="absolute bottom-4 left-4 w-80 shadow-lg" data-id="irv0tdvtq" data-path="src/components/MapView.tsx">
          <CardContent className="p-4" data-id="xy5bir7jc" data-path="src/components/MapView.tsx">
            <div className="flex space-x-3" data-id="xv6170ypl" data-path="src/components/MapView.tsx">
              <img
              src={selectedProperty.images[0]}
              alt={selectedProperty.title}
              className="w-20 h-20 rounded-lg object-cover" data-id="83gi9z4xc" data-path="src/components/MapView.tsx" />

              <div className="flex-1 min-w-0" data-id="uevsmv6gj" data-path="src/components/MapView.tsx">
                <div className="flex items-center justify-between mb-1" data-id="3lefqr68l" data-path="src/components/MapView.tsx">
                  <h3 className="font-semibold text-sm truncate" data-id="q196i8qe3" data-path="src/components/MapView.tsx">
                    {selectedProperty.title}
                  </h3>
                  <button
                  onClick={() => setSelectedProperty(null)}
                  className="text-gray-400 hover:text-gray-600" data-id="52dn3bd7m" data-path="src/components/MapView.tsx">

                    ✕
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-2" data-id="s4z35rwk4" data-path="src/components/MapView.tsx">
                  {selectedProperty.location}
                </p>
                <div className="flex items-center justify-between" data-id="8v3t7lhoz" data-path="src/components/MapView.tsx">
                  <div className="flex items-center space-x-1" data-id="1u98n7dxh" data-path="src/components/MapView.tsx">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" data-id="n1o7gwv10" data-path="src/components/MapView.tsx" />
                    <span className="text-xs font-medium" data-id="xso4wyq8i" data-path="src/components/MapView.tsx">{selectedProperty.rating}</span>
                    <span className="text-xs text-gray-500" data-id="h79l155pg" data-path="src/components/MapView.tsx">({selectedProperty.reviewCount})</span>
                  </div>
                  <div className="text-right" data-id="zaajizzq8" data-path="src/components/MapView.tsx">
                    <span className="font-semibold text-sm" data-id="8okzfpw3u" data-path="src/components/MapView.tsx">${selectedProperty.price}</span>
                    <span className="text-xs text-gray-600" data-id="azdbfi7jr" data-path="src/components/MapView.tsx"> / night</span>
                  </div>
                </div>
                {selectedProperty.host.isSuperhost &&
              <Badge className="mt-2 text-xs bg-rose-100 text-rose-800" data-id="lo04qhy78" data-path="src/components/MapView.tsx">
                    Superhost
                  </Badge>
              }
              </div>
            </div>
          </CardContent>
        </Card>
      }

      {/* Loading indicator */}
      {!window.google &&
      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center" data-id="xajf6lu39" data-path="src/components/MapView.tsx">
          <div className="text-center" data-id="kgej7bj8g" data-path="src/components/MapView.tsx">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mx-auto mb-2" data-id="yxbxdq3bf" data-path="src/components/MapView.tsx"></div>
            <p className="text-gray-600" data-id="ntoygqdbz" data-path="src/components/MapView.tsx">Loading map...</p>
          </div>
        </div>
      }
    </div>);

};

export default MapView;