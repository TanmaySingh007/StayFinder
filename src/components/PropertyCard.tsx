import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/mockData';
import { Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="group" data-id="5kemybhba" data-path="src/components/PropertyCard.tsx">

      <Link to={`/property/${property.id}`} data-id="xrk4e7vgj" data-path="src/components/PropertyCard.tsx">
        <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300" data-id="tav0iz6p7" data-path="src/components/PropertyCard.tsx">
          <div className="relative" data-id="pdcfktuz5" data-path="src/components/PropertyCard.tsx">
            {/* Image Carousel */}
            <div className="relative aspect-square overflow-hidden rounded-t-lg" data-id="xqp42f0y8" data-path="src/components/PropertyCard.tsx">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-id="ipzw6abrd" data-path="src/components/PropertyCard.tsx" />

              
              {/* Image Navigation */}
              {property.images.length > 1 &&
              <>
                  <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-id="6h0d91v0n" data-path="src/components/PropertyCard.tsx">

                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="oth81l85x" data-path="src/components/PropertyCard.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" data-id="6idgq8j53" data-path="src/components/PropertyCard.tsx" />
                    </svg>
                  </button>
                  <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-id="ip9m5kba3" data-path="src/components/PropertyCard.tsx">

                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="curgtma8f" data-path="src/components/PropertyCard.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" data-id="kr7417rc4" data-path="src/components/PropertyCard.tsx" />
                    </svg>
                  </button>
                </>
              }

              {/* Image Indicators */}
              {property.images.length > 1 &&
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1" data-id="4wusbyonq" data-path="src/components/PropertyCard.tsx">
                  {property.images.map((_, index) =>
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`
                  } data-id="njli6a0fn" data-path="src/components/PropertyCard.tsx" />

                )}
                </div>
              }
            </div>

            {/* Like Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLike}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full w-8 h-8" data-id="rgntt6cs2" data-path="src/components/PropertyCard.tsx">

              <Heart
                className={`h-4 w-4 transition-colors duration-200 ${
                isLiked ? 'fill-rose-500 text-rose-500' : 'text-gray-700'}`
                } data-id="uuwwlqwg4" data-path="src/components/PropertyCard.tsx" />

            </Button>

            {/* Superhost Badge */}
            {property.host.isSuperhost &&
            <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white" data-id="bp8xt4spa" data-path="src/components/PropertyCard.tsx">
                Superhost
              </Badge>
            }
          </div>

          <CardContent className="p-4" data-id="opxfv5d8k" data-path="src/components/PropertyCard.tsx">
            <div className="space-y-2" data-id="6p5g9gw7g" data-path="src/components/PropertyCard.tsx">
              {/* Location and Rating */}
              <div className="flex items-center justify-between" data-id="kvz5egf4v" data-path="src/components/PropertyCard.tsx">
                <p className="text-sm font-medium text-gray-900 truncate" data-id="u9pn5bysx" data-path="src/components/PropertyCard.tsx">
                  {property.location}
                </p>
                <div className="flex items-center space-x-1" data-id="72cs34ppz" data-path="src/components/PropertyCard.tsx">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" data-id="18kwjthga" data-path="src/components/PropertyCard.tsx" />
                  <span className="text-sm font-medium" data-id="mcpq02tz6" data-path="src/components/PropertyCard.tsx">{property.rating}</span>
                  <span className="text-sm text-gray-500" data-id="sjanwf5nq" data-path="src/components/PropertyCard.tsx">({property.reviewCount})</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight" data-id="8k3mn3fuj" data-path="src/components/PropertyCard.tsx">
                {property.title}
              </h3>

              {/* Property Details */}
              <p className="text-sm text-gray-600" data-id="ir7custrr" data-path="src/components/PropertyCard.tsx">
                {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
              </p>

              {/* Price */}
              <div className="flex items-baseline space-x-1 pt-1" data-id="r4itpf55k" data-path="src/components/PropertyCard.tsx">
                <span className="text-lg font-semibold text-gray-900" data-id="qtouz21ad" data-path="src/components/PropertyCard.tsx">
                  ${property.price}
                </span>
                <span className="text-sm text-gray-600" data-id="v84bolq4b" data-path="src/components/PropertyCard.tsx">/ night</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>);

};

export default PropertyCard;