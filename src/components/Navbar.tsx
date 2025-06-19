import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50" data-id="fm1vhhjgv" data-path="src/components/Navbar.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="8gd9grpy2" data-path="src/components/Navbar.tsx">
        <div className="flex justify-between items-center h-16" data-id="qekb8y9mw" data-path="src/components/Navbar.tsx">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-id="1bvehk4wi" data-path="src/components/Navbar.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center" data-id="b5ub6k00a" data-path="src/components/Navbar.tsx">
              <span className="text-white font-bold text-lg" data-id="yp2aj2q3m" data-path="src/components/Navbar.tsx">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900" data-id="tba50mxw4" data-path="src/components/Navbar.tsx">StayFinder</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4" data-id="0krgz6gp4" data-path="src/components/Navbar.tsx">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium" data-id="xngh2ge5d" data-path="src/components/Navbar.tsx">
              Explore
            </Link>
            {user &&
            <Link to="/host" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium" data-id="ppdvc2aaj" data-path="src/components/Navbar.tsx">
                Become a Host
              </Link>
            }
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4" data-id="hu4a8fnl0" data-path="src/components/Navbar.tsx">
            {user ?
            <DropdownMenu data-id="9e8piy0t6" data-path="src/components/Navbar.tsx">
                <DropdownMenuTrigger asChild data-id="qgfe399xi" data-path="src/components/Navbar.tsx">
                  <Button variant="ghost" className="flex items-center space-x-2 p-2" data-id="scksnf8d1" data-path="src/components/Navbar.tsx">
                    <Menu className="h-4 w-4" data-id="qqeucefw2" data-path="src/components/Navbar.tsx" />
                    <Avatar className="h-8 w-8" data-id="o91fioe8v" data-path="src/components/Navbar.tsx">
                      <AvatarImage src={user.avatar} alt={user.name} data-id="7f3pgn17u" data-path="src/components/Navbar.tsx" />
                      <AvatarFallback data-id="nhup21c2m" data-path="src/components/Navbar.tsx">
                        <User className="h-4 w-4" data-id="r2daxfxvo" data-path="src/components/Navbar.tsx" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56" data-id="kgbcvvmnu" data-path="src/components/Navbar.tsx">
                  <DropdownMenuItem data-id="23qodyk9j" data-path="src/components/Navbar.tsx">
                    <div className="flex flex-col" data-id="crbd5cyvb" data-path="src/components/Navbar.tsx">
                      <span className="font-medium" data-id="9mirj6ahp" data-path="src/components/Navbar.tsx">{user.name}</span>
                      <span className="text-sm text-gray-500" data-id="5stb2mw91" data-path="src/components/Navbar.tsx">{user.email}</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem data-id="fri1bssgt" data-path="src/components/Navbar.tsx">Your trips</DropdownMenuItem>
                  <DropdownMenuItem data-id="s6r11i6g8" data-path="src/components/Navbar.tsx">Wishlist</DropdownMenuItem>
                  <DropdownMenuItem data-id="tn3np22h6" data-path="src/components/Navbar.tsx">Account settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} data-id="jmi9fo0ow" data-path="src/components/Navbar.tsx">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> :

            <div className="flex items-center space-x-2" data-id="k5jjwww93" data-path="src/components/Navbar.tsx">
                <Button variant="ghost" onClick={() => navigate('/auth')} data-id="u8vwtkwbx" data-path="src/components/Navbar.tsx">
                  Log in
                </Button>
                <Button onClick={() => navigate('/auth')} data-id="0xul5ih9u" data-path="src/components/Navbar.tsx">
                  Sign up
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>);

};

export default Navbar;