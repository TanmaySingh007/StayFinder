import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useSearch } from '@/contexts/SearchContext';
import { format } from 'date-fns';
import { CalendarDays, MapPin, Users, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    google: any;
  }
}

const SearchBar = () => {
  const { filters, updateFilters } = useSearch();
  const [showCalendar, setShowCalendar] = useState<'checkIn' | 'checkOut' | null>(null);
  const [showGuests, setShowGuests] = useState(false);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    if (window.google && locationInputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        locationInputRef.current,
        {
          types: ['(cities)'],
          componentRestrictions: { country: 'us' }
        }
      );

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        if (place.formatted_address) {
          updateFilters({ location: place.formatted_address });
        }
      });
    }
  }, [updateFilters]);

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    // Search is handled by the SearchContext and HomePage automatically
  };

  return (
    <div className="bg-white rounded-full shadow-lg p-2" data-id="fvdyxuklk" data-path="src/components/SearchBar.tsx">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2" data-id="4boog9hdd" data-path="src/components/SearchBar.tsx">
        {/* Location */}
        <div className="relative" data-id="8im8gf89r" data-path="src/components/SearchBar.tsx">
          <div className="flex items-center space-x-3 p-4 rounded-full hover:bg-gray-50 cursor-pointer" data-id="si5cj6131" data-path="src/components/SearchBar.tsx">
            <MapPin className="h-5 w-5 text-gray-500" data-id="n7c9b0fx8" data-path="src/components/SearchBar.tsx" />
            <div className="flex-1" data-id="bdokw78p1" data-path="src/components/SearchBar.tsx">
              <Label className="text-xs font-medium text-gray-900" data-id="flsm41yrm" data-path="src/components/SearchBar.tsx">Where</Label>
              <Input
                ref={locationInputRef}
                placeholder="Where are you going?"
                value={filters.location}
                onChange={(e) => updateFilters({ location: e.target.value })}
                className="border-0 p-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0" data-id="dgz5dopjj" data-path="src/components/SearchBar.tsx" />

            </div>
          </div>
        </div>

        {/* Check-in */}
        <Popover open={showCalendar === 'checkIn'} onOpenChange={(open) => setShowCalendar(open ? 'checkIn' : null)} data-id="jd424t8rc" data-path="src/components/SearchBar.tsx">
          <PopoverTrigger asChild data-id="cfss2lh62" data-path="src/components/SearchBar.tsx">
            <div className="flex items-center space-x-3 p-4 rounded-full hover:bg-gray-50 cursor-pointer" data-id="63oaatd22" data-path="src/components/SearchBar.tsx">
              <CalendarDays className="h-5 w-5 text-gray-500" data-id="el35juwc8" data-path="src/components/SearchBar.tsx" />
              <div data-id="qyf0h5bme" data-path="src/components/SearchBar.tsx">
                <Label className="text-xs font-medium text-gray-900" data-id="xo45trz1i" data-path="src/components/SearchBar.tsx">Check in</Label>
                <p className="text-sm text-gray-600" data-id="hnstlpst6" data-path="src/components/SearchBar.tsx">
                  {filters.checkIn ? format(filters.checkIn, 'MMM dd') : 'Add dates'}
                </p>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" data-id="f1idj9cax" data-path="src/components/SearchBar.tsx">
            <Calendar
              mode="single"
              selected={filters.checkIn || undefined}
              onSelect={(date) => {
                updateFilters({ checkIn: date || null });
                setShowCalendar(null);
              }}
              disabled={(date) => date < new Date()}
              initialFocus data-id="8wtnl6viu" data-path="src/components/SearchBar.tsx" />

          </PopoverContent>
        </Popover>

        {/* Check-out */}
        <Popover open={showCalendar === 'checkOut'} onOpenChange={(open) => setShowCalendar(open ? 'checkOut' : null)} data-id="rkqy1j1wp" data-path="src/components/SearchBar.tsx">
          <PopoverTrigger asChild data-id="zhh9xmnkl" data-path="src/components/SearchBar.tsx">
            <div className="flex items-center space-x-3 p-4 rounded-full hover:bg-gray-50 cursor-pointer" data-id="ynvstsldq" data-path="src/components/SearchBar.tsx">
              <CalendarDays className="h-5 w-5 text-gray-500" data-id="f974gho81" data-path="src/components/SearchBar.tsx" />
              <div data-id="g8cfjbav7" data-path="src/components/SearchBar.tsx">
                <Label className="text-xs font-medium text-gray-900" data-id="a7h40mna3" data-path="src/components/SearchBar.tsx">Check out</Label>
                <p className="text-sm text-gray-600" data-id="ont0uil3t" data-path="src/components/SearchBar.tsx">
                  {filters.checkOut ? format(filters.checkOut, 'MMM dd') : 'Add dates'}
                </p>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start" data-id="slx73neaq" data-path="src/components/SearchBar.tsx">
            <Calendar
              mode="single"
              selected={filters.checkOut || undefined}
              onSelect={(date) => {
                updateFilters({ checkOut: date || null });
                setShowCalendar(null);
              }}
              disabled={(date) => date < (filters.checkIn || new Date())}
              initialFocus data-id="poxhymfko" data-path="src/components/SearchBar.tsx" />

          </PopoverContent>
        </Popover>

        {/* Guests */}
        <div className="flex items-center" data-id="8gwabt0h2" data-path="src/components/SearchBar.tsx">
          <Popover open={showGuests} onOpenChange={setShowGuests} data-id="eyr3op2xk" data-path="src/components/SearchBar.tsx">
            <PopoverTrigger asChild data-id="srau9000a" data-path="src/components/SearchBar.tsx">
              <div className="flex items-center space-x-3 p-4 rounded-full hover:bg-gray-50 cursor-pointer flex-1" data-id="cypg70f1c" data-path="src/components/SearchBar.tsx">
                <Users className="h-5 w-5 text-gray-500" data-id="lgocndlc3" data-path="src/components/SearchBar.tsx" />
                <div className="flex-1" data-id="2hit0v4tz" data-path="src/components/SearchBar.tsx">
                  <Label className="text-xs font-medium text-gray-900" data-id="7u42pzki3" data-path="src/components/SearchBar.tsx">Who</Label>
                  <p className="text-sm text-gray-600" data-id="5kp5ro40f" data-path="src/components/SearchBar.tsx">
                    {filters.guests} guest{filters.guests !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end" data-id="j5bn4er1n" data-path="src/components/SearchBar.tsx">
              <div className="space-y-4" data-id="snwg1cya2" data-path="src/components/SearchBar.tsx">
                <div className="flex items-center justify-between" data-id="p4un8gwe6" data-path="src/components/SearchBar.tsx">
                  <div data-id="v3vkhfnb8" data-path="src/components/SearchBar.tsx">
                    <p className="font-medium" data-id="ccgaigooh" data-path="src/components/SearchBar.tsx">Guests</p>
                    <p className="text-sm text-gray-500" data-id="m4in404x9" data-path="src/components/SearchBar.tsx">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center space-x-3" data-id="zghbietai" data-path="src/components/SearchBar.tsx">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateFilters({ guests: Math.max(1, filters.guests - 1) })}
                      disabled={filters.guests <= 1} data-id="m27eplt0f" data-path="src/components/SearchBar.tsx">

                      -
                    </Button>
                    <span className="w-8 text-center" data-id="tc9hwpk53" data-path="src/components/SearchBar.tsx">{filters.guests}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateFilters({ guests: filters.guests + 1 })} data-id="rn7znfsro" data-path="src/components/SearchBar.tsx">

                      +
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            size="icon"
            className="rounded-full bg-rose-500 hover:bg-rose-600 ml-2"
            onClick={handleSearch} data-id="0eje2hzxn" data-path="src/components/SearchBar.tsx">

            <Search className="h-4 w-4" data-id="7cola7vi9" data-path="src/components/SearchBar.tsx" />
          </Button>
        </div>
      </div>
    </div>);

};

export default SearchBar;