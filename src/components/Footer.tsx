import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12 mt-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">NearGo</h2>
            <p className="text-gray-600 mb-6">For a better experience, download the NearGo app now.</p>
            <div className="flex gap-4">
              <Link to="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </Link>
              <Link to="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-10"
                />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Available in</h3>
            <p className="text-gray-600 mb-2">Sathupally</p>
            <p className="text-sm text-gray-500">More locations coming soon!</p>
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-primary">Team</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 hover:text-primary">Help & Support</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-primary">Partner with Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-600">© {new Date().getFullYear()} NearGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;