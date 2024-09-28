import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaTiktok,
  FaAmazon,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-theme2 text-white pt-10   ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-3 py-4">
        {/* About Us */}
        <div>
          <h2 className="font-bold text-lg">About Us</h2>
          <ul className="mt-4 space-y-2">
            <li>About Company</li>
            <li>Career</li>
            <li>Press Releases</li>
            <li>Partners</li>
            <li>Social Projects</li>
            <li>Store Finder</li>
            <li>Company Values</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Global Partners */}
        <div>
          <h2 className="font-bold text-lg">Global Partners</h2>
          <ul className="mt-4 space-y-2">
            <li>Zephyr</li>
            <li>Apex Group</li>
            <li>Stellar Poshta</li>
            <li>Innovate Inc.</li>
            <li>Fusion Solutions</li>
            <li>Visionary Enterprises</li>
          </ul>
        </div>

        {/* Fashionize */}
        <div>
          <h2 className="font-bold text-lg">Fashionize</h2>
          <ul className="mt-4 space-y-2">
            <li>Find your size</li>
            <li>Tips & Advice</li>
            <li>Support</li>
            <li>Pickup Points</li>
          </ul>
        </div>

        {/* Infos */}
        <div>
          <h2 className="font-bold text-lg">Infos</h2>
          <ul className="mt-4 space-y-2">
            <li>Payment Options</li>
            <li>Shipping and Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h2 className="font-bold text-lg">Our Products</h2>
          <ul className="mt-4 space-y-2">
            <li>Free Delivery</li>
            <li>30 days return policy</li>
            <li>Free Returns</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-bold text-lg">Stay Connected</h2>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Youtube">
              <FaYoutube className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterest className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="#" aria-label="Amazon">
              <FaAmazon className="w-6 h-6 hover:text-gray-300" />
            </a>
          </div>

         
        </div>
        
      </div>
       {/* Payment Icons and Mobile Apps */}
       {/* <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
              <img
                src="/path-to-visa-logo.png"
                alt="Visa"
                className="w-12 h-auto"
              />
              <img
                src="/path-to-mastercard-logo.png"
                alt="MasterCard"
                className="w-12 h-auto"
              />
              <img
                src="/path-to-paypal-logo.png"
                alt="PayPal"
                className="w-12 h-auto"
              />
              <img
                src="/path-to-stripe-logo.png"
                alt="Stripe"
                className="w-12 h-auto"
              />
            </div>

            <div className="flex justify-center sm:justify-start space-x-4">
              <img
                src="/path-to-appstore-logo.png"
                alt="App Store"
                className="w-32 h-auto"
              />
              <img
                src="/path-to-googleplay-logo.png"
                alt="Google Play"
                className="w-32 h-auto"
              />
            </div>
          </div> */}

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-10 bg-black py-4 ">
        &copy; {new Date().getFullYear()} Gulf Style | Powered by XYZ Solutions
      </div>
    </footer>
  );
};

export default Footer;
