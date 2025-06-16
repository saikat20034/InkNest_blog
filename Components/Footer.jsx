import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 py-12 pt-10 font-mono bg-gray-900 t-10 mtext-gray-300 md:px-20">
      <div className="flex flex-col justify-between gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          {/* Uncomment if you want logo */}
          {/* <Image src={assets.logo_light} alt="InkNest Logo" width={150} /> */}
          <h2 className="mb-3 text-3xl font-bold text-white">InkNest</h2>
          <p className="max-w-xs text-sm text-center md:text-base md:text-left">
            InkNest is your daily dose of inspiring stories, tech insights, and lifestyle tips. Dive in and stay informed with us.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-around md:justify-center md:gap-24 md:w-1/3">
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end md:w-1/3">
          <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
          <div className="flex gap-6">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src={assets.facebook_icon} alt="Facebook" width={30} height={30} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Image src={assets.twitter_icon} alt="Twitter" width={30} height={30} />
            </Link>
            <Link href="https://plus.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Plus">
              <Image src={assets.googleplus_icon} alt="Google Plus" width={30} height={30} />
            </Link>
          </div>
          <p className="mt-6 text-xs text-center text-gray-500 md:text-right">
            &copy; {new Date().getFullYear()} InkNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
