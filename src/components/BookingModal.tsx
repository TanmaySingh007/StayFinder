import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Property } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { format, differenceInDays } from 'date-fns';
import { CalendarDays, Users, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

interface BookingModalProps {
  property: Property;
  onClose: () => void;
}

const BookingModal = ({ property, onClose }: BookingModalProps) => {
  const { user } = useAuth();
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const basePrice = nights * property.price;
  const serviceFee = Math.round(basePrice * 0.14);
  const total = basePrice + serviceFee;

  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      toast.error('Please select check-in and check-out dates');
      return;
    }

    if (nights <= 0) {
      toast.error('Check-out date must be after check-in date');
      return;
    }

    if (guests > property.maxGuests) {
      toast.error(`Maximum ${property.maxGuests} guests allowed`);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock booking creation
      const booking = {
        id: Math.random().toString(36).substr(2, 9),
        propertyId: property.id,
        userId: user?.id,
        checkIn,
        checkOut,
        guests,
        total,
        status: 'confirmed'
      };

      console.log('Booking created:', booking);
      toast.success('Booking confirmed! Check your email for details.');
      onClose();
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={() => !isLoading && onClose()} data-id="7t1mw4h3u" data-path="src/components/BookingModal.tsx">
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-id="impg7mypu" data-path="src/components/BookingModal.tsx">
        <DialogHeader data-id="f3i3mf1mn" data-path="src/components/BookingModal.tsx">
          <DialogTitle className="text-xl" data-id="pqsa6eevo" data-path="src/components/BookingModal.tsx">Complete your booking</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="ujrxdliux" data-path="src/components/BookingModal.tsx">
          {/* Booking Form */}
          <div className="space-y-6" data-id="jey38ylem" data-path="src/components/BookingModal.tsx">
            {/* Property Info */}
            <Card data-id="fcsa2jtu5" data-path="src/components/BookingModal.tsx">
              <CardContent className="p-4" data-id="dvv4dc5ns" data-path="src/components/BookingModal.tsx">
                <div className="flex space-x-3" data-id="e0g794gwj" data-path="src/components/BookingModal.tsx">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-16 h-16 rounded-lg object-cover" data-id="9ikesiedl" data-path="src/components/BookingModal.tsx" />

                  <div data-id="t6qdh0s0s" data-path="src/components/BookingModal.tsx">
                    <h3 className="font-semibold text-sm" data-id="5n7w6gnog" data-path="src/components/BookingModal.tsx">{property.title}</h3>
                    <p className="text-xs text-gray-600" data-id="bltjojt2v" data-path="src/components/BookingModal.tsx">{property.location}</p>
                    <p className="text-xs text-gray-500 mt-1" data-id="slqcizb0d" data-path="src/components/BookingModal.tsx">
                      {property.propertyType} · {property.maxGuests} guests
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Date Selection */}
            <div data-id="fpaoavwel" data-path="src/components/BookingModal.tsx">
              <Label className="text-base font-medium flex items-center mb-3" data-id="ieayqlzs5" data-path="src/components/BookingModal.tsx">
                <CalendarDays className="h-4 w-4 mr-2" data-id="pv26ff5by" data-path="src/components/BookingModal.tsx" />
                Select dates
              </Label>
              <div className="grid grid-cols-2 gap-4" data-id="u248xs5a7" data-path="src/components/BookingModal.tsx">
                <div data-id="3kwi483yj" data-path="src/components/BookingModal.tsx">
                  <Label className="text-sm text-gray-600 mb-1 block" data-id="56xntvfal" data-path="src/components/BookingModal.tsx">Check-in</Label>
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date() || date >= (checkOut || new Date('2025-12-31'))}
                    className="rounded-md border" data-id="2i14mw9uk" data-path="src/components/BookingModal.tsx" />

                </div>
                <div data-id="ucos6vixh" data-path="src/components/BookingModal.tsx">
                  <Label className="text-sm text-gray-600 mb-1 block" data-id="jyp2sqwkk" data-path="src/components/BookingModal.tsx">Check-out</Label>
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date <= (checkIn || new Date())}
                    className="rounded-md border" data-id="m36gox0qr" data-path="src/components/BookingModal.tsx" />

                </div>
              </div>
            </div>

            {/* Guest Selection */}
            <div data-id="7w1yuc8h7" data-path="src/components/BookingModal.tsx">
              <Label className="text-base font-medium flex items-center mb-3" data-id="fcqyiwh5r" data-path="src/components/BookingModal.tsx">
                <Users className="h-4 w-4 mr-2" data-id="wptezvwzx" data-path="src/components/BookingModal.tsx" />
                Guests
              </Label>
              <div className="flex items-center space-x-3" data-id="itkr16qhq" data-path="src/components/BookingModal.tsx">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  disabled={guests <= 1} data-id="7v9dpy3pb" data-path="src/components/BookingModal.tsx">

                  -
                </Button>
                <span className="w-8 text-center font-medium" data-id="s41z1hin4" data-path="src/components/BookingModal.tsx">{guests}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setGuests(Math.min(property.maxGuests, guests + 1))}
                  disabled={guests >= property.maxGuests} data-id="9w8kv6fbk" data-path="src/components/BookingModal.tsx">

                  +
                </Button>
                <span className="text-sm text-gray-600 ml-2" data-id="7o89bcu5c" data-path="src/components/BookingModal.tsx">
                  guests (max {property.maxGuests})
                </span>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div data-id="ogb2jk3pf" data-path="src/components/BookingModal.tsx">
            <Card data-id="rjp69iess" data-path="src/components/BookingModal.tsx">
              <CardContent className="p-6 space-y-4" data-id="26iaflzuy" data-path="src/components/BookingModal.tsx">
                <h3 className="font-semibold text-lg flex items-center" data-id="rkeitwq54" data-path="src/components/BookingModal.tsx">
                  <CreditCard className="h-5 w-5 mr-2" data-id="2mrzwq1tk" data-path="src/components/BookingModal.tsx" />
                  Price breakdown
                </h3>
                
                {checkIn && checkOut && nights > 0 ?
                <>
                    <div className="space-y-2" data-id="mtx7ioa72" data-path="src/components/BookingModal.tsx">
                      <div className="flex justify-between" data-id="h5uiommil" data-path="src/components/BookingModal.tsx">
                        <span data-id="a57gjoe5l" data-path="src/components/BookingModal.tsx">${property.price} × {nights} nights</span>
                        <span data-id="sc0qzmq39" data-path="src/components/BookingModal.tsx">${basePrice}</span>
                      </div>
                      <div className="flex justify-between" data-id="765vwl803" data-path="src/components/BookingModal.tsx">
                        <span data-id="y33fvz3er" data-path="src/components/BookingModal.tsx">Service fee</span>
                        <span data-id="r3peezzb2" data-path="src/components/BookingModal.tsx">${serviceFee}</span>
                      </div>
                    </div>
                    
                    <Separator data-id="eohrzgybq" data-path="src/components/BookingModal.tsx" />
                    
                    <div className="flex justify-between font-semibold text-lg" data-id="iv5dyvw06" data-path="src/components/BookingModal.tsx">
                      <span data-id="geic32i6y" data-path="src/components/BookingModal.tsx">Total</span>
                      <span data-id="95to1xhsv" data-path="src/components/BookingModal.tsx">${total}</span>
                    </div>

                    <div className="pt-4 space-y-2" data-id="yxgy1hrra" data-path="src/components/BookingModal.tsx">
                      <div className="text-sm text-gray-600" data-id="tbxvzctor" data-path="src/components/BookingModal.tsx">
                        <p data-id="amvic52kq" data-path="src/components/BookingModal.tsx"><strong data-id="djxxmw6o9" data-path="src/components/BookingModal.tsx">Check-in:</strong> {format(checkIn, 'MMM dd, yyyy')}</p>
                        <p data-id="3buuug5b9" data-path="src/components/BookingModal.tsx"><strong data-id="gpyehvirs" data-path="src/components/BookingModal.tsx">Check-out:</strong> {format(checkOut, 'MMM dd, yyyy')}</p>
                        <p data-id="4bcgdg3d3" data-path="src/components/BookingModal.tsx"><strong data-id="neh8fp7xk" data-path="src/components/BookingModal.tsx">Guests:</strong> {guests}</p>
                      </div>
                    </div>
                  </> :

                <div className="text-center py-8 text-gray-500" data-id="tsbgydjj3" data-path="src/components/BookingModal.tsx">
                    <CalendarDays className="h-12 w-12 mx-auto mb-3 opacity-50" data-id="eukcelxam" data-path="src/components/BookingModal.tsx" />
                    <p data-id="n1i0xahj1" data-path="src/components/BookingModal.tsx">Select dates to see pricing</p>
                  </div>
                }
              </CardContent>
            </Card>

            {checkIn && checkOut && nights > 0 &&
            <Button
              className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white"
              size="lg"
              onClick={handleBooking}
              disabled={isLoading} data-id="kkg7t0x9r" data-path="src/components/BookingModal.tsx">

                {isLoading ?
              <div className="flex items-center" data-id="vcfig2se0" data-path="src/components/BookingModal.tsx">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-id="mx3k98tr2" data-path="src/components/BookingModal.tsx"></div>
                    Processing...
                  </div> :

              `Confirm booking - $${total}`
              }
              </Button>
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>);

};

export default BookingModal;