'use client';

import Link from 'next/link';
import { ChevronDown, MapPin } from 'lucide-react';
import { useState } from 'react';

const cities = [
  'Ahmedabad',
  'Bangalore',
  'Chennai',
  'Delhi',
  'Gurgaon',
  'Hyderabad',
  'Mumbai',
  'Noida',
  'Pune',
  'Mysore',
  'Mangalore',
  'Udupi',
  'Goa',
  'Kochi',
  'Nagpur',
  'Trichy',
  'Tumkur',
  'Vijayawada',
  'Visakhapatnam',
  'Coimbatore',
];

export default function Navbar() {

  const [showCity, setShowCity] =
    useState(false);

  const [selectedCity, setSelectedCity] =
    useState('Current Location');

  const [activeMenu, setActiveMenu] =
    useState<string | null>(null);
    const [showAccount, setShowAccount] =
  useState(false);

  return (

    <header className="bg-white shadow-md sticky top-0 z-50 relative">

      {/* TOP NAVBAR */}

      <div className="relative w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 overflow-visible">

        <div className="flex flex-wrap items-center justify-between gap-4 py-4">

          {/* LEFT */}

          <div className="flex items-center gap-5">

            {/* LOGO */}

            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-red-600"
            >
              MagicBricks
            </Link>

            {/* CITY */}

            <div className="relative">

              <button
                onClick={() =>
                  setShowCity(!showCity)
                }
                className="border px-4 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
              >

                <MapPin size={18} />

                {selectedCity}

                <ChevronDown size={18} />

              </button>

              {showCity && (

                <div className="absolute top-14 left-0 bg-white shadow-2xl rounded-2xl w-[95vw] md:w-[700px] p-6 border z-[9999]">

                  {/* CURRENT LOCATION */}

                  <div className="border-b pb-4 mb-5">

                    <h2 className="font-bold text-lg mb-2">
                      Current Location
                    </h2>

                    <button className="text-red-600 font-medium">
                      Use Current Location
                    </button>

                  </div>

                  {/* INDIA */}

                  <div>

                    <h2 className="font-bold text-lg mb-4">
                      INDIA
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

                      {cities.map((city) => (

                        <button
                          key={city}
                          onClick={() => {

                            setSelectedCity(city);

                            setShowCity(false);

                          }}
                          className="text-left hover:text-red-600 text-sm"
                        >
                          {city}
                        </button>

                      ))}

                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

          {/* RIGHT */}

        <div className="flex items-center gap-4">

  {/* ACCOUNT */}

  <div
    className="relative"
    onMouseEnter={() =>
      setShowAccount(true)
    }
    onMouseLeave={() =>
      setShowAccount(false)
    }
  >

    <button className="flex items-center gap-2 font-medium hover:text-red-600">

      Login / Sign Up

      <ChevronDown size={18} />

    </button>

    {showAccount && (

      <div className="absolute top-full mt-3 right-0 bg-white shadow-2xl rounded-2xl border w-[320px] p-5 z-[9999]">

        {/* TOP */}

        <div className="border-b pb-4 mb-4">

          <h2 className="font-bold text-lg">
            My Activity
          </h2>

        </div>

        {/* MENU */}

        <div className="space-y-3 text-sm">

          <Link
            href="/register" className="block hover:text-red-600">
            Requested Properties
            <span className="text-red-600 ml-1">
              New
            </span>
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            MagicDiary
            <span className="text-red-600 ml-1">
              New
            </span>
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            Contacted Properties
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            Viewed Properties
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            Shortlisted Properties
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            Searches
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            Recommendations
          </Link>

          <Link
            href="/register" className="block hover:text-red-600">
            My Profile
          </Link>

        </div>

        {/* BUTTONS */}

        <div className="border-t mt-5 pt-5 flex gap-3">

          <Link
            href="/login"
            className="flex-1 border border-red-600 text-red-600 py-2 rounded-lg text-center hover:bg-red-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="flex-1 bg-red-600 text-white py-2 rounded-lg text-center"
          >
            Sign Up
          </Link>

        </div>

      </div>

    )}

  </div>

  {/* POST BUTTON */}

 <Link
  href="http://post.localhost:3000"
  target="_blank"
  className="bg-red-600 text-white px-3 md:px-5 py-2 rounded-lg text-sm md:text-base"
>
  Post Free Ad
</Link>

</div>

        </div>

      </div>

      {/* SECOND NAVBAR */}

      <div className="border-t bg-white overflow-visible">

        <div className="relative w-full max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 overflow-visible">

          <div className="flex items-center gap-6 py-4 relative">

            {/* BUY */}

            <div
              className="relative"
              onMouseEnter={() =>
                setActiveMenu('buy')
              }
              onMouseLeave={(e) => {

  const related =
    e.relatedTarget as HTMLElement;

  if (
    related &&
    e.currentTarget.contains(related)
  ) {
    return;
  }

  setActiveMenu(null);

}}
            >

              <button className="font-medium hover:text-red-600">
                Buy
              </button>

              {activeMenu === 'buy' && (

                <div className="absolute top-full mt-3 left-0 bg-white shadow-2xl rounded-2xl p-6 w-[95vw] lg:w-[950px] border z-[9999]">

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

                    <div>

                      <h3 className="font-bold mb-4">
                        Popular Choices
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Ready to Move</p>
                        <p>Owner Properties</p>
                        <p>Budget Homes</p>
                        <p>Premium Homes</p>
                        <p>New Projects</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Property Types
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Flats in Bangalore</p>
                        <p>House for sale</p>
                        <p>Villa</p>
                        <p>Plot</p>
                        <p>Commercial Space</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Budget
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Under ₹50 Lac</p>
                        <p>₹50 Lac - ₹1 Cr</p>
                        <p>₹1 Cr - ₹1.5 Cr</p>
                        <p>Above ₹1.5 Cr</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Explore
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Localities</p>
                        <p>Projects</p>
                        <p>Find an Agent</p>
                        <p>Home Interiors</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Buying Tools
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>PropWorth</p>
                        <p>Rates & Trends</p>
                        <p>Buy vs Rent</p>
                        <p>Tips and Guides</p>
                      </div>

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* RENT */}

            <div
              className="relative"
              onMouseEnter={() =>
                setActiveMenu('rent')
              }
              onMouseLeave={(e) => {

  const related =
    e.relatedTarget as HTMLElement;

  if (
    related &&
    e.currentTarget.contains(related)
  ) {
    return;
  }

  setActiveMenu(null);

}}
      
            >

              <button className="font-medium hover:text-red-600">
                Rent
              </button>

              {activeMenu === 'rent' && (

                <div className="absolute top-10 left-[-120px] bg-white shadow-2xl rounded-2xl p-6 w-[95vw] lg:w-[950px] border z-[9999]">

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

                    <div>

                      <h3 className="font-bold mb-4">
                        Popular Rentals
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Ready to Move</p>
                        <p>Budget Rentals</p>
                        <p>Premium Rentals</p>
                        <p>PG & Co-Living</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Property Types
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Flats for Rent</p>
                        <p>House for Rent</p>
                        <p>Villa for Rent</p>
                        <p>Commercial Rent</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Budget
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Under ₹10k</p>
                        <p>₹10k - ₹25k</p>
                        <p>₹25k - ₹50k</p>
                        <p>Above ₹50k</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Explore
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Rental Localities</p>
                        <p>Find Owner</p>
                        <p>Rental Guides</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Renting Tools
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Rent Agreement</p>
                        <p>Packers & Movers</p>
                        <p>Rent Calculator</p>
                      </div>

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* SELL */}

            <div
              className="relative"
              onMouseEnter={() =>
                setActiveMenu('sell')
              }
              onMouseLeave={(e) => {

  const related =
    e.relatedTarget as HTMLElement;

  if (
    related &&
    e.currentTarget.contains(related)
  ) {
    return;
  }

  setActiveMenu(null);

}}
            >

              <button className="font-medium hover:text-red-600">
                Sell
              </button>

              {activeMenu === 'sell' && (

                <div className="absolute top-full mt-3 right-0 bg-white shadow-2xl rounded-2xl p-6 w-[95vw] lg:w-[950px] border z-9999">

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

                    <div>

                      <h3 className="font-bold mb-4">
                        Sell Property
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Post Property Free</p>
                        <p>Owner Listings</p>
                        <p>Dealer Listings</p>
                        <p>Premium Listings</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Property Types
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Sell Flats</p>
                        <p>Sell Villas</p>
                        <p>Sell Land</p>
                        <p>Commercial</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Seller Tools
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Property Valuation</p>
                        <p>Rates & Trends</p>
                        <p>EMI Calculator</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Explore
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Top Buyers</p>
                        <p>Find Agents</p>
                        <p>Seller Tips</p>
                      </div>

                    </div>

                    <div>

                      <h3 className="font-bold mb-4">
                        Services
                      </h3>

                      <div className="space-y-2 text-sm">
                        <p>Legal Services</p>
                        <p>Verification</p>
                        <p>Documentation</p>
                      </div>

                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

