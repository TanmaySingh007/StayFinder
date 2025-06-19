import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import FilterPanel from '@/components/FilterPanel';
import MapView from '@/components/MapView';
import { useSearch } from '@/contexts/SearchContext';
import { searchProperties, mockProperties } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Map, Grid } from 'lucide-react';

const HomePage = () => {
  const { filters } = useSearch();
  const [properties, setProperties] = useState(mockProperties);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = searchProperties(filters);
    setProperties(filtered);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50" data-id="ku0uttffr" data-path="src/pages/HomePage.tsx">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 text-white" data-id="da8udja9v" data-path="src/pages/HomePage.tsx">
        <div className="absolute inset-0 bg-black/20" data-id="11alvht8w" data-path="src/pages/HomePage.tsx"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-id="mklbs8o9l" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-12" data-id="lfmykopzn" data-path="src/pages/HomePage.tsx">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-id="vaepvtglh" data-path="src/pages/HomePage.tsx">
              Find your perfect stay
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90" data-id="i99zx0m52" data-path="src/pages/HomePage.tsx">
              Discover unique places to stay around the world
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto" data-id="hj6h1hv2p" data-path="src/pages/HomePage.tsx">
            <SearchBar data-id="dsgrmexoa" data-path="src/pages/HomePage.tsx" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-id="oqfaapklp" data-path="src/pages/HomePage.tsx">
        <div className="flex items-center justify-between" data-id="ow6ho433f" data-path="src/pages/HomePage.tsx">
          <div className="flex items-center space-x-4" data-id="7jikpshzj" data-path="src/pages/HomePage.tsx">
            <Button
              variant={showFilters ? "default" : "outline"}
              onClick={() => setShowFilters(!showFilters)} data-id="fk9ixr2eb" data-path="src/pages/HomePage.tsx">

              Filters
            </Button>
            <span className="text-gray-600" data-id="hv044gx15" data-path="src/pages/HomePage.tsx">
              {properties.length} stays found
            </span>
          </div>
          
          <div className="flex items-center space-x-2" data-id="v0ug32r0a" data-path="src/pages/HomePage.tsx">
            <Button
              variant={!showMap ? "default" : "outline"}
              size="sm"
              onClick={() => setShowMap(false)} data-id="2c7c81axc" data-path="src/pages/HomePage.tsx">

              <Grid className="h-4 w-4 mr-2" data-id="mmhd8jcj3" data-path="src/pages/HomePage.tsx" />
              Grid
            </Button>
            <Button
              variant={showMap ? "default" : "outline"}
              size="sm"
              onClick={() => setShowMap(true)} data-id="k630dwsm5" data-path="src/pages/HomePage.tsx">

              <Map className="h-4 w-4 mr-2" data-id="gowyg0m4r" data-path="src/pages/HomePage.tsx" />
              Map
            </Button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters &&
        <div className="mt-6" data-id="qx1mxpqp9" data-path="src/pages/HomePage.tsx">
            <FilterPanel data-id="3enngdwp6" data-path="src/pages/HomePage.tsx" />
          </div>
        }
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12" data-id="3vvttizgb" data-path="src/pages/HomePage.tsx">
        {showMap ?
        <MapView properties={properties} data-id="n2qu96szc" data-path="src/pages/HomePage.tsx" /> :

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-id="1h5jfsdhu" data-path="src/pages/HomePage.tsx">
            {properties.map((property) =>
          <PropertyCard key={property.id} property={property} data-id="vkgmnqyik" data-path="src/pages/HomePage.tsx" />
          )}
          </div>
        }

        {properties.length === 0 &&
        <div className="text-center py-12" data-id="8rx0r1h9g" data-path="src/pages/HomePage.tsx">
            <div className="max-w-md mx-auto" data-id="70ii3e85g" data-path="src/pages/HomePage.tsx">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="0n8tl48b5" data-path="src/pages/HomePage.tsx">
                No properties found
              </h3>
              <p className="text-gray-600 mb-4" data-id="la9w0fsb8" data-path="src/pages/HomePage.tsx">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={() => window.location.reload()} data-id="665q2vp4x" data-path="src/pages/HomePage.tsx">
                Reset Search
              </Button>
            </div>
          </div>
        }
      </div>
    </div>);

};

export default HomePage;