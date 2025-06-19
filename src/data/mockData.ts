export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
    isSuperhost: boolean;
  };
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  availableDates: Date[];
}

export const mockProperties: Property[] = [
{
  id: '1',
  title: 'Luxury Beachfront Villa',
  description: 'Wake up to stunning ocean views in this beautifully designed beachfront villa. Perfect for families or couples seeking a peaceful retreat.',
  location: 'Malibu, California',
  coordinates: { lat: 34.0259, lng: -118.7798 },
  price: 450,
  rating: 4.9,
  reviewCount: 127,
  images: [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'],

  amenities: ['Ocean view', 'Pool', 'WiFi', 'Kitchen', 'Parking', 'Air conditioning'],
  host: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2019',
    isSuperhost: true
  },
  propertyType: 'Villa',
  maxGuests: 8,
  bedrooms: 4,
  bathrooms: 3,
  availableDates: []
},
{
  id: '2',
  title: 'Modern Downtown Loft',
  description: 'Stylish loft in the heart of downtown with exposed brick walls and floor-to-ceiling windows. Walking distance to restaurants and nightlife.',
  location: 'New York, New York',
  coordinates: { lat: 40.7128, lng: -74.0060 },
  price: 280,
  rating: 4.7,
  reviewCount: 89,
  images: [
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=800&h=600&fit=crop'],

  amenities: ['City view', 'WiFi', 'Kitchen', 'Gym access', 'Elevator', 'Workspace'],
  host: {
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2020',
    isSuperhost: false
  },
  propertyType: 'Loft',
  maxGuests: 4,
  bedrooms: 2,
  bathrooms: 2,
  availableDates: []
},
{
  id: '3',
  title: 'Cozy Mountain Cabin',
  description: 'Escape to nature in this charming log cabin surrounded by pine trees. Features a fireplace, hot tub, and hiking trails nearby.',
  location: 'Aspen, Colorado',
  coordinates: { lat: 39.1911, lng: -106.8175 },
  price: 320,
  rating: 4.8,
  reviewCount: 156,
  images: [
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'],

  amenities: ['Mountain view', 'Hot tub', 'Fireplace', 'WiFi', 'Kitchen', 'Parking'],
  host: {
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2018',
    isSuperhost: true
  },
  propertyType: 'Cabin',
  maxGuests: 6,
  bedrooms: 3,
  bathrooms: 2,
  availableDates: []
},
{
  id: '4',
  title: 'Historic Brownstone Apartment',
  description: 'Beautiful 19th-century brownstone apartment with original hardwood floors, high ceilings, and modern amenities.',
  location: 'Boston, Massachusetts',
  coordinates: { lat: 42.3601, lng: -71.0589 },
  price: 195,
  rating: 4.6,
  reviewCount: 74,
  images: [
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'],

  amenities: ['Historic charm', 'WiFi', 'Kitchen', 'Laundry', 'Heating', 'Cable TV'],
  host: {
    name: 'David Martinez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2021',
    isSuperhost: false
  },
  propertyType: 'Apartment',
  maxGuests: 4,
  bedrooms: 2,
  bathrooms: 1,
  availableDates: []
},
{
  id: '5',
  title: 'Desert Oasis Resort',
  description: 'Luxurious desert retreat with infinity pool, spa services, and stunning sunset views. Perfect for romantic getaways.',
  location: 'Scottsdale, Arizona',
  coordinates: { lat: 33.4942, lng: -111.9261 },
  price: 380,
  rating: 4.9,
  reviewCount: 203,
  images: [
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'],

  amenities: ['Desert view', 'Pool', 'Spa', 'WiFi', 'Restaurant', 'Fitness center'],
  host: {
    name: 'Lisa Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2017',
    isSuperhost: true
  },
  propertyType: 'Resort',
  maxGuests: 2,
  bedrooms: 1,
  bathrooms: 1,
  availableDates: []
},
{
  id: '6',
  title: 'Waterfront Cottage',
  description: 'Charming cottage right on the lake with private dock, kayaks, and fishing equipment. Perfect for outdoor enthusiasts.',
  location: 'Lake Tahoe, California',
  coordinates: { lat: 39.0968, lng: -120.0324 },
  price: 225,
  rating: 4.7,
  reviewCount: 91,
  images: [
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=800&h=600&fit=crop'],

  amenities: ['Lake view', 'Private dock', 'Kayaks', 'WiFi', 'Kitchen', 'Fireplace'],
  host: {
    name: 'James Thompson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    joinedDate: '2019',
    isSuperhost: false
  },
  propertyType: 'Cottage',
  maxGuests: 5,
  bedrooms: 2,
  bathrooms: 1,
  availableDates: []
}];


export const searchProperties = (filters: any) => {
  let filtered = mockProperties;

  if (filters.location) {
    filtered = filtered.filter((property) =>
    property.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.priceRange) {
    filtered = filtered.filter((property) =>
    property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]
    );
  }

  if (filters.propertyType && filters.propertyType !== 'all') {
    filtered = filtered.filter((property) =>
    property.propertyType.toLowerCase() === filters.propertyType.toLowerCase()
    );
  }

  if (filters.guests) {
    filtered = filtered.filter((property) => property.maxGuests >= filters.guests);
  }

  return filtered;
};