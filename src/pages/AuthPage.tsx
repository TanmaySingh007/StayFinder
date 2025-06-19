import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, isLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await login(loginForm.email, loginForm.password);
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (registerForm.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      await register(registerForm.name, registerForm.email, registerForm.password);
      toast.success('Account created successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4" data-id="obex99cmn" data-path="src/pages/AuthPage.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md" data-id="jwqdjrox8" data-path="src/pages/AuthPage.tsx">

        <Card className="shadow-xl border-0" data-id="1wdj6k2ee" data-path="src/pages/AuthPage.tsx">
          <CardHeader className="text-center pb-2" data-id="6hevx8dws" data-path="src/pages/AuthPage.tsx">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4" data-id="9ysbj00dn" data-path="src/pages/AuthPage.tsx">
              <span className="text-white font-bold text-xl" data-id="poigyl4j0" data-path="src/pages/AuthPage.tsx">S</span>
            </div>
            <CardTitle className="text-2xl font-bold" data-id="xw388nzap" data-path="src/pages/AuthPage.tsx">Welcome to StayFinder</CardTitle>
            <CardDescription data-id="95a3bnce8" data-path="src/pages/AuthPage.tsx">Find your perfect stay around the world</CardDescription>
          </CardHeader>
          
          <CardContent data-id="8xha88gr7" data-path="src/pages/AuthPage.tsx">
            <Tabs defaultValue="login" className="w-full" data-id="r40n0rvq8" data-path="src/pages/AuthPage.tsx">
              <TabsList className="grid w-full grid-cols-2 mb-6" data-id="f5bvu9svg" data-path="src/pages/AuthPage.tsx">
                <TabsTrigger value="login" data-id="cr1b6bge7" data-path="src/pages/AuthPage.tsx">Log In</TabsTrigger>
                <TabsTrigger value="register" data-id="pjop194oa" data-path="src/pages/AuthPage.tsx">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4" data-id="1nkc8vkbt" data-path="src/pages/AuthPage.tsx">
                <form onSubmit={handleLogin} className="space-y-4" data-id="8o73umlrp" data-path="src/pages/AuthPage.tsx">
                  <div className="space-y-2" data-id="ly45gti1m" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="login-email" data-id="c5kx0nn6y" data-path="src/pages/AuthPage.tsx">Email address</Label>
                    <div className="relative" data-id="6kn6358an" data-path="src/pages/AuthPage.tsx">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="f2wnljdmh" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        required data-id="my20ne4y7" data-path="src/pages/AuthPage.tsx" />

                    </div>
                  </div>
                  
                  <div className="space-y-2" data-id="ys5kcxpr5" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="login-password" data-id="hplg0vcy6" data-path="src/pages/AuthPage.tsx">Password</Label>
                    <div className="relative" data-id="8sh04xyz1" data-path="src/pages/AuthPage.tsx">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="6wxyrz5y5" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required data-id="6t4t62hlq" data-path="src/pages/AuthPage.tsx" />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="xnef4hg9i" data-path="src/pages/AuthPage.tsx">

                        {showPassword ? <EyeOff className="h-4 w-4" data-id="nujogdcvj" data-path="src/pages/AuthPage.tsx" /> : <Eye className="h-4 w-4" data-id="0tkh2no5j" data-path="src/pages/AuthPage.tsx" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600"
                    disabled={isLoading} data-id="g7bznd7tt" data-path="src/pages/AuthPage.tsx">

                    {isLoading ?
                    <div className="flex items-center" data-id="fbfngurql" data-path="src/pages/AuthPage.tsx">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-id="vo80p0x09" data-path="src/pages/AuthPage.tsx"></div>
                        Logging in...
                      </div> :

                    'Log In'
                    }
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4" data-id="465wt8ksq" data-path="src/pages/AuthPage.tsx">
                <form onSubmit={handleRegister} className="space-y-4" data-id="six5bkvr7" data-path="src/pages/AuthPage.tsx">
                  <div className="space-y-2" data-id="nrx5f7mfe" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="register-name" data-id="p4fnsvd7e" data-path="src/pages/AuthPage.tsx">Full name</Label>
                    <div className="relative" data-id="7u4u8kwez" data-path="src/pages/AuthPage.tsx">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="4ws9ccca6" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                        required data-id="0sydjcgsy" data-path="src/pages/AuthPage.tsx" />

                    </div>
                  </div>
                  
                  <div className="space-y-2" data-id="9m5t9rxrr" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="register-email" data-id="c1ufs37ak" data-path="src/pages/AuthPage.tsx">Email address</Label>
                    <div className="relative" data-id="uditla02d" data-path="src/pages/AuthPage.tsx">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="321zzn6r3" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        required data-id="f0kxii6gm" data-path="src/pages/AuthPage.tsx" />

                    </div>
                  </div>
                  
                  <div className="space-y-2" data-id="ya1rjykij" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="register-password" data-id="leda2jyah" data-path="src/pages/AuthPage.tsx">Password</Label>
                    <div className="relative" data-id="7lno33sky" data-path="src/pages/AuthPage.tsx">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="eh26elwi7" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="register-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        required data-id="hqq52wkr0" data-path="src/pages/AuthPage.tsx" />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" data-id="ggouffa8b" data-path="src/pages/AuthPage.tsx">

                        {showPassword ? <EyeOff className="h-4 w-4" data-id="h11yi64bi" data-path="src/pages/AuthPage.tsx" /> : <Eye className="h-4 w-4" data-id="qgffbuwl0" data-path="src/pages/AuthPage.tsx" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2" data-id="blphhscdz" data-path="src/pages/AuthPage.tsx">
                    <Label htmlFor="register-confirm-password" data-id="dn98zveos" data-path="src/pages/AuthPage.tsx">Confirm password</Label>
                    <div className="relative" data-id="pfh1a1icw" data-path="src/pages/AuthPage.tsx">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" data-id="fqia0xm41" data-path="src/pages/AuthPage.tsx" />
                      <Input
                        id="register-confirm-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                        required data-id="8cr0l9me7" data-path="src/pages/AuthPage.tsx" />

                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600"
                    disabled={isLoading} data-id="aqjo1mijd" data-path="src/pages/AuthPage.tsx">

                    {isLoading ?
                    <div className="flex items-center" data-id="81djnf3hh" data-path="src/pages/AuthPage.tsx">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-id="9ck97f80n" data-path="src/pages/AuthPage.tsx"></div>
                        Creating account...
                      </div> :

                    'Create Account'
                    }
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6" data-id="my6u8ft7c" data-path="src/pages/AuthPage.tsx">
              <div className="relative" data-id="b5d47z8om" data-path="src/pages/AuthPage.tsx">
                <div className="absolute inset-0 flex items-center" data-id="t0h8dcm1w" data-path="src/pages/AuthPage.tsx">
                  <Separator data-id="hn32pwm86" data-path="src/pages/AuthPage.tsx" />
                </div>
                <div className="relative flex justify-center text-xs uppercase" data-id="gvpjgqib0" data-path="src/pages/AuthPage.tsx">
                  <span className="bg-white px-2 text-gray-500" data-id="fvn32qnf6" data-path="src/pages/AuthPage.tsx">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4" data-id="9nk2p00jw" data-path="src/pages/AuthPage.tsx">
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full" data-id="ed95qztd2" data-path="src/pages/AuthPage.tsx">

                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" data-id="ndf38a2ai" data-path="src/pages/AuthPage.tsx">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" data-id="lsy999b5i" data-path="src/pages/AuthPage.tsx" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" data-id="2zhzrls43" data-path="src/pages/AuthPage.tsx" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" data-id="mgydaas0n" data-path="src/pages/AuthPage.tsx" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" data-id="xkia6seds" data-path="src/pages/AuthPage.tsx" />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-full" data-id="rnjgyabvc" data-path="src/pages/AuthPage.tsx">

                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" data-id="vhl7zpsy2" data-path="src/pages/AuthPage.tsx">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-id="c1lgv0tie" data-path="src/pages/AuthPage.tsx" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-6" data-id="i8kzcs9sc" data-path="src/pages/AuthPage.tsx">
              By continuing, you agree to our{' '}
              <a href="#" className="text-rose-500 hover:underline" data-id="55irrpw4k" data-path="src/pages/AuthPage.tsx">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-rose-500 hover:underline" data-id="swv150ety" data-path="src/pages/AuthPage.tsx">Privacy Policy</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

export default AuthPage;