import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-b from-[#050b1f] to-[#020617] text-gray-300 px-6 md:px-16 pt-14">
        {/* Join Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-1">
              Join CarHut
            </h2>
            <p className="text-gray-400">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <div className="flex w-full md:w-[420px] bg-[#0b122e] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-6 py-3 outline-none text-sm placeholder-gray-400"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 text-sm font-medium text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Terms</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Get in Touch</li>
              <li>Help center</li>
              <li>Live chat</li>
              <li>How it works</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2 text-sm">
              <li>Toyota</li>
              <li>Porsche</li>
              <li>Audi</li>
              <li>BMW</li>
              <li>Ford</li>
              <li>Nissan</li>
              <li>Peugeot</li>
              <li>Volkswagen</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Vehicles Type</h4>
            <ul className="space-y-2 text-sm">
              <li>Sedan</li>
              <li>Hatchback</li>
              <li>SUV</li>
              <li>Hybrid</li>
              <li>Electric</li>
              <li>Coupe</li>
              <li>Truck</li>
              <li>Convertible</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Mobile App</h4>
            <div className="space-y-3">
              <button className="w-full bg-[#0b122e] rounded-xl px-4 py-3 text-left text-sm">
                🍎 Download on the Apple Store
              </button>
              <button className="w-full bg-[#0b122e] rounded-xl px-4 py-3 text-left text-sm">
                ▶️ Get it on Google Play
              </button>
            </div>

            <h4 className="text-white font-semibold mt-6 mb-3">
              Connect With Us
            </h4>
            <div className="flex gap-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
              <span>💼</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 example.com. All rights reserved.</p>
          <p>Terms & Conditions · Privacy Notice</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
