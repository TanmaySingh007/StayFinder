import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { useSearch } from '@/contexts/SearchContext';
import { useState } from 'react';

const propertyTypes = [
{ id: 'all', name: 'All Types', icon: '🏠' },
{ id: 'apartment', name: 'Apartment', icon: '🏢' },
{ id: 'villa', name: 'Villa', icon: '🏖️' },
{ id: 'cabin', name: 'Cabin', icon: '🏔️' },
{ id: 'loft', name: 'Loft', icon: '🏙️' },
{ id: 'cottage', name: 'Cottage', icon: '🏡' },
{ id: 'resort', name: 'Resort', icon: '🌴' }];


const amenities = [
'Pool', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning', 'Hot tub',
'Fireplace', 'Gym access', 'Pet friendly', 'Smoking allowed'];


const FilterPanel = () => {
  const { filters, updateFilters, resetFilters } = useSearch();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handlePriceRangeChange = (value: number[]) => {
    updateFilters({ priceRange: [value[0], value[1]] });
  };

  const handlePropertyTypeChange = (type: string) => {
    updateFilters({ propertyType: type });
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = selectedAmenities.includes(amenity) ?
    selectedAmenities.filter((a) => a !== amenity) :
    [...selectedAmenities, amenity];
    setSelectedAmenities(newAmenities);
  };

  const handleReset = () => {
    resetFilters();
    setSelectedAmenities([]);
  };

  return (
    <Card data-id="ko2b7iv59" data-path="src/components/FilterPanel.tsx">
      <CardHeader className="pb-4" data-id="h7wcysh41" data-path="src/components/FilterPanel.tsx">
        <div className="flex items-center justify-between" data-id="9z5y4z9mi" data-path="src/components/FilterPanel.tsx">
          <CardTitle className="text-lg" data-id="6ry0shjyv" data-path="src/components/FilterPanel.tsx">Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={handleReset} data-id="u9rinyxav" data-path="src/components/FilterPanel.tsx">
            Clear all
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-id="6dce739zr" data-path="src/components/FilterPanel.tsx">
        {/* Price Range */}
        <div data-id="8sf79yzh1" data-path="src/components/FilterPanel.tsx">
          <h3 className="font-medium mb-3" data-id="3q00a28ml" data-path="src/components/FilterPanel.tsx">Price Range</h3>
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={1000}
            step={10}
            className="mb-2" data-id="v8vhggbxi" data-path="src/components/FilterPanel.tsx" />

          <div className="flex justify-between text-sm text-gray-600" data-id="z0to8apj7" data-path="src/components/FilterPanel.tsx">
            <span data-id="x3d47l7vo" data-path="src/components/FilterPanel.tsx">${filters.priceRange[0]}</span>
            <span data-id="9jmx60wxl" data-path="src/components/FilterPanel.tsx">${filters.priceRange[1]}+</span>
          </div>
        </div>

        {/* Property Type */}
        <div data-id="10ebc9efz" data-path="src/components/FilterPanel.tsx">
          <h3 className="font-medium mb-3" data-id="twbdleewc" data-path="src/components/FilterPanel.tsx">Property Type</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" data-id="1h5cuxns6" data-path="src/components/FilterPanel.tsx">
            {propertyTypes.map((type) =>
            <Button
              key={type.id}
              variant={filters.propertyType === type.id ? "default" : "outline"}
              size="sm"
              onClick={() => handlePropertyTypeChange(type.id)}
              className="justify-start h-auto p-3 flex-col space-y-1" data-id="vyrey5w3o" data-path="src/components/FilterPanel.tsx">

                <span className="text-lg" data-id="0b81e06do" data-path="src/components/FilterPanel.tsx">{type.icon}</span>
                <span className="text-xs" data-id="cthz4rdmo" data-path="src/components/FilterPanel.tsx">{type.name}</span>
              </Button>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div data-id="ldru5ereb" data-path="src/components/FilterPanel.tsx">
          <h3 className="font-medium mb-3" data-id="t6e7lnivm" data-path="src/components/FilterPanel.tsx">Amenities</h3>
          <div className="flex flex-wrap gap-2" data-id="8l2guvb0n" data-path="src/components/FilterPanel.tsx">
            {amenities.map((amenity) =>
            <Badge
              key={amenity}
              variant={selectedAmenities.includes(amenity) ? "default" : "outline"}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => toggleAmenity(amenity)} data-id="i359w0c8j" data-path="src/components/FilterPanel.tsx">

                {amenity}
              </Badge>
            )}
          </div>
        </div>

        {/* Guests */}
        <div data-id="ws6nrxozp" data-path="src/components/FilterPanel.tsx">
          <h3 className="font-medium mb-3" data-id="za9nwhsqm" data-path="src/components/FilterPanel.tsx">Guests</h3>
          <div className="flex items-center space-x-3" data-id="98025s60v" data-path="src/components/FilterPanel.tsx">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilters({ guests: Math.max(1, filters.guests - 1) })}
              disabled={filters.guests <= 1} data-id="pig2xi3mo" data-path="src/components/FilterPanel.tsx">

              -
            </Button>
            <span className="w-8 text-center font-medium" data-id="exufb2l43" data-path="src/components/FilterPanel.tsx">{filters.guests}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateFilters({ guests: filters.guests + 1 })} data-id="bd8iaymlq" data-path="src/components/FilterPanel.tsx">

              +
            </Button>
            <span className="text-sm text-gray-600 ml-2" data-id="acavw82d9" data-path="src/components/FilterPanel.tsx">guests</span>
          </div>
        </div>
      </CardContent>
    </Card>);

};

export default FilterPanel;