import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import BookingModal from '@/components/BookingModal';
import { mockProperties, Property } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { Star, Users, Bed, Bath, MapPin, Heart, Share, Camera } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

const PropertyDetail = () => {
  const { id } = useParams<{id: string;}>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const foundProperty = mockProperties.find((p) => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-id="il6klv4q7" data-path="src/pages/PropertyDetail.tsx">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500" data-id="f59yee0ai" data-path="src/pages/PropertyDetail.tsx"></div>
      </div>);

  }

  const handleBookNow = () => {
    if (!user) {
      toast.error('Please log in to book this property');
      navigate('/auth');
      return;
    }
    setShowBookingModal(true);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href
      });
    } catch (error) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="min-h-screen bg-white" data-id="ai7y6nz6g" data-path="src/pages/PropertyDetail.tsx">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-id="9hp5qxa5a" data-path="src/pages/PropertyDetail.tsx">
        <div className="flex items-center justify-between mb-4" data-id="v53x4faf8" data-path="src/pages/PropertyDetail.tsx">
          <div data-id="lkcct3zul" data-path="src/pages/PropertyDetail.tsx">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" data-id="v09lzxksf" data-path="src/pages/PropertyDetail.tsx">
              {property.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm" data-id="yi83bzixm" data-path="src/pages/PropertyDetail.tsx">
              <div className="flex items-center space-x-1" data-id="2e1mtizau" data-path="src/pages/PropertyDetail.tsx">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" data-id="1lblkqkic" data-path="src/pages/PropertyDetail.tsx" />
                <span className="font-medium" data-id="q073e5t14" data-path="src/pages/PropertyDetail.tsx">{property.rating}</span>
                <span className="text-gray-500" data-id="m3cj7wdvi" data-path="src/pages/PropertyDetail.tsx">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1" data-id="dfwofqqm2" data-path="src/pages/PropertyDetail.tsx">
                <MapPin className="h-4 w-4 text-gray-500" data-id="1ezfvrbni" data-path="src/pages/PropertyDetail.tsx" />
                <span className="text-gray-700" data-id="dexnq7u01" data-path="src/pages/PropertyDetail.tsx">{property.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2" data-id="3eoullx7m" data-path="src/pages/PropertyDetail.tsx">
            <Button variant="ghost" size="sm" onClick={handleShare} data-id="ei53nkjdb" data-path="src/pages/PropertyDetail.tsx">
              <Share className="h-4 w-4 mr-2" data-id="zul7gxtqa" data-path="src/pages/PropertyDetail.tsx" />
              Share
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleLike} data-id="c4fnptmmm" data-path="src/pages/PropertyDetail.tsx">
              <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} data-id="1v582s6ni" data-path="src/pages/PropertyDetail.tsx" />
              Save
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden" data-id="il34liqo4" data-path="src/pages/PropertyDetail.tsx">
          <div className="relative aspect-square md:aspect-[4/3]" data-id="hkrliw44j" data-path="src/pages/PropertyDetail.tsx">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover" data-id="ojn2wsemj" data-path="src/pages/PropertyDetail.tsx" />

            <Button
              variant="ghost"
              size="sm"
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white"
              onClick={() => setCurrentImageIndex((currentImageIndex + 1) % property.images.length)} data-id="kvo06qxhd" data-path="src/pages/PropertyDetail.tsx">

              <Camera className="h-4 w-4 mr-2" data-id="f9llu0fz8" data-path="src/pages/PropertyDetail.tsx" />
              {currentImageIndex + 1} / {property.images.length}
            </Button>
          </div>
          
          {property.images.length > 1 &&
          <div className="hidden md:grid grid-cols-2 gap-2" data-id="jazp6efnj" data-path="src/pages/PropertyDetail.tsx">
              {property.images.slice(1, 5).map((image, index) =>
            <div
              key={index}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setCurrentImageIndex(index + 1)} data-id="fl1vm4eyu" data-path="src/pages/PropertyDetail.tsx">

                  <img
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-full object-cover rounded-lg" data-id="pnmqyo1av" data-path="src/pages/PropertyDetail.tsx" />

                </div>
            )}
            </div>
          }
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="mo9ogi2ze" data-path="src/pages/PropertyDetail.tsx">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8" data-id="sqe76anav" data-path="src/pages/PropertyDetail.tsx">
            {/* Property Info */}
            <div data-id="hi05iazny" data-path="src/pages/PropertyDetail.tsx">
              <div className="flex items-center justify-between mb-4" data-id="2fsvvaom2" data-path="src/pages/PropertyDetail.tsx">
                <div data-id="apjxlmeo0" data-path="src/pages/PropertyDetail.tsx">
                  <h2 className="text-xl font-semibold mb-2" data-id="xxdigburj" data-path="src/pages/PropertyDetail.tsx">
                    {property.propertyType} hosted by {property.host.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600" data-id="k3fkav7ce" data-path="src/pages/PropertyDetail.tsx">
                    <div className="flex items-center space-x-1" data-id="119wdp0jq" data-path="src/pages/PropertyDetail.tsx">
                      <Users className="h-4 w-4" data-id="o8uswo0br" data-path="src/pages/PropertyDetail.tsx" />
                      <span data-id="tdj5bk6c2" data-path="src/pages/PropertyDetail.tsx">{property.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center space-x-1" data-id="qb6pa96av" data-path="src/pages/PropertyDetail.tsx">
                      <Bed className="h-4 w-4" data-id="2m5niytc1" data-path="src/pages/PropertyDetail.tsx" />
                      <span data-id="zft0qyip0" data-path="src/pages/PropertyDetail.tsx">{property.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center space-x-1" data-id="tolinbgc6" data-path="src/pages/PropertyDetail.tsx">
                      <Bath className="h-4 w-4" data-id="mtsdcacjy" data-path="src/pages/PropertyDetail.tsx" />
                      <span data-id="olu1tonox" data-path="src/pages/PropertyDetail.tsx">{property.bathrooms} bathrooms</span>
                    </div>
                  </div>
                </div>
                <Avatar className="h-14 w-14" data-id="k1svzb86o" data-path="src/pages/PropertyDetail.tsx">
                  <AvatarImage src={property.host.avatar} alt={property.host.name} data-id="uw9xuboa5" data-path="src/pages/PropertyDetail.tsx" />
                  <AvatarFallback data-id="y4vh0enuc" data-path="src/pages/PropertyDetail.tsx">{property.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              {property.host.isSuperhost &&
              <Badge className="mb-4 bg-rose-100 text-rose-800" data-id="gu8wfxyu7" data-path="src/pages/PropertyDetail.tsx">
                  ⭐ Superhost
                </Badge>
              }
            </div>

            <Separator data-id="nwjkikhqw" data-path="src/pages/PropertyDetail.tsx" />

            {/* Description */}
            <div data-id="ndz98m033" data-path="src/pages/PropertyDetail.tsx">
              <h3 className="text-lg font-semibold mb-3" data-id="3ps8687zw" data-path="src/pages/PropertyDetail.tsx">About this place</h3>
              <p className="text-gray-700 leading-relaxed" data-id="fbfneskuo" data-path="src/pages/PropertyDetail.tsx">{property.description}</p>
            </div>

            <Separator data-id="gtop5dnmz" data-path="src/pages/PropertyDetail.tsx" />

            {/* Amenities */}
            <div data-id="w3989qrdt" data-path="src/pages/PropertyDetail.tsx">
              <h3 className="text-lg font-semibold mb-4" data-id="wngwppdjf" data-path="src/pages/PropertyDetail.tsx">What this place offers</h3>
              <div className="grid grid-cols-2 gap-3" data-id="v2kn7p4jd" data-path="src/pages/PropertyDetail.tsx">
                {property.amenities.map((amenity, index) =>
                <div key={index} className="flex items-center space-x-3 py-2" data-id="0wgjab1tm" data-path="src/pages/PropertyDetail.tsx">
                    <div className="w-6 h-6 flex items-center justify-center" data-id="16kd6mwfh" data-path="src/pages/PropertyDetail.tsx">
                      {amenity.includes('WiFi') && '📶'}
                      {amenity.includes('Pool') && '🏊'}
                      {amenity.includes('Kitchen') && '🍳'}
                      {amenity.includes('Parking') && '🚗'}
                      {amenity.includes('Air conditioning') && '❄️'}
                      {amenity.includes('view') && '🏞️'}
                      {amenity === 'Hot tub' && '🛁'}
                      {amenity === 'Fireplace' && '🔥'}
                      {!amenity.includes('WiFi') && !amenity.includes('Pool') && !amenity.includes('Kitchen') &&
                    !amenity.includes('Parking') && !amenity.includes('Air conditioning') && !amenity.includes('view') &&
                    amenity !== 'Hot tub' && amenity !== 'Fireplace' && '✨'}
                    </div>
                    <span className="text-gray-700" data-id="bydh5tbjg" data-path="src/pages/PropertyDetail.tsx">{amenity}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator data-id="93sws5s3g" data-path="src/pages/PropertyDetail.tsx" />

            {/* Host Info */}
            <div data-id="axvbssw6i" data-path="src/pages/PropertyDetail.tsx">
              <h3 className="text-lg font-semibold mb-4" data-id="h7gtdw44l" data-path="src/pages/PropertyDetail.tsx">Meet your host</h3>
              <Card data-id="ixr8ojc3o" data-path="src/pages/PropertyDetail.tsx">
                <CardContent className="p-6" data-id="ryn3hcnpp" data-path="src/pages/PropertyDetail.tsx">
                  <div className="flex items-center space-x-4" data-id="birpp05h1" data-path="src/pages/PropertyDetail.tsx">
                    <Avatar className="h-16 w-16" data-id="fcwf6ow2x" data-path="src/pages/PropertyDetail.tsx">
                      <AvatarImage src={property.host.avatar} alt={property.host.name} data-id="56gyser8z" data-path="src/pages/PropertyDetail.tsx" />
                      <AvatarFallback data-id="wx6hqmwnx" data-path="src/pages/PropertyDetail.tsx">{property.host.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div data-id="a441xvdwu" data-path="src/pages/PropertyDetail.tsx">
                      <h4 className="font-semibold text-lg" data-id="ady86xrfu" data-path="src/pages/PropertyDetail.tsx">{property.host.name}</h4>
                      <p className="text-gray-600" data-id="ntop18z2p" data-path="src/pages/PropertyDetail.tsx">Joined in {property.host.joinedDate}</p>
                      {property.host.isSuperhost &&
                      <Badge className="mt-1 bg-rose-100 text-rose-800" data-id="igpkpcniw" data-path="src/pages/PropertyDetail.tsx">
                          Superhost
                        </Badge>
                      }
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1" data-id="ckfzfuus3" data-path="src/pages/PropertyDetail.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24" data-id="y95dk86lt" data-path="src/pages/PropertyDetail.tsx">

              <Card className="shadow-lg" data-id="5sg1slbqa" data-path="src/pages/PropertyDetail.tsx">
                <CardHeader data-id="wv9kgb55n" data-path="src/pages/PropertyDetail.tsx">
                  <div className="flex items-baseline space-x-2" data-id="9qhy8krp3" data-path="src/pages/PropertyDetail.tsx">
                    <span className="text-2xl font-bold" data-id="6xw7sv5cw" data-path="src/pages/PropertyDetail.tsx">${property.price}</span>
                    <span className="text-gray-600" data-id="209d4bmv1" data-path="src/pages/PropertyDetail.tsx">night</span>
                  </div>
                  <div className="flex items-center space-x-1" data-id="wnl75r00n" data-path="src/pages/PropertyDetail.tsx">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" data-id="on5efgteu" data-path="src/pages/PropertyDetail.tsx" />
                    <span className="font-medium" data-id="74gm4dy9w" data-path="src/pages/PropertyDetail.tsx">{property.rating}</span>
                    <span className="text-gray-500" data-id="sqady0pe0" data-path="src/pages/PropertyDetail.tsx">({property.reviewCount} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4" data-id="j1is53eii" data-path="src/pages/PropertyDetail.tsx">
                  <Button
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                    size="lg"
                    onClick={handleBookNow} data-id="zzxu94nu1" data-path="src/pages/PropertyDetail.tsx">

                    Reserve
                  </Button>
                  <p className="text-center text-sm text-gray-600" data-id="zmk5uxaab" data-path="src/pages/PropertyDetail.tsx">
                    You won't be charged yet
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t" data-id="jt1fdqklu" data-path="src/pages/PropertyDetail.tsx">
                    <div className="flex justify-between" data-id="9j4i70sjz" data-path="src/pages/PropertyDetail.tsx">
                      <span data-id="y4p8viywf" data-path="src/pages/PropertyDetail.tsx">${property.price} × 5 nights</span>
                      <span data-id="5zsxd8rpe" data-path="src/pages/PropertyDetail.tsx">${property.price * 5}</span>
                    </div>
                    <div className="flex justify-between" data-id="v8ose6r64" data-path="src/pages/PropertyDetail.tsx">
                      <span data-id="g1q46kyt9" data-path="src/pages/PropertyDetail.tsx">Service fee</span>
                      <span data-id="pjx5alanr" data-path="src/pages/PropertyDetail.tsx">${Math.round(property.price * 5 * 0.14)}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t" data-id="ks7v5oxzs" data-path="src/pages/PropertyDetail.tsx">
                      <span data-id="40ziz6pyi" data-path="src/pages/PropertyDetail.tsx">Total</span>
                      <span data-id="uuplf8s04" data-path="src/pages/PropertyDetail.tsx">${property.price * 5 + Math.round(property.price * 5 * 0.14)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal &&
      <BookingModal
        property={property}
        onClose={() => setShowBookingModal(false)} data-id="9vn65lner" data-path="src/pages/PropertyDetail.tsx" />

      }
    </div>);

};

export default PropertyDetail;