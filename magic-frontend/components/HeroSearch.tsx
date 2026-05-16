'use client';

import {
  ChevronDown,
  MapPin,
  Home,
  IndianRupee,
  Search,
} from 'lucide-react';

export default function HeroSearch() {

  const topMenus = [
    'Buy',
    'Rent',
    'New Projects',
    'PG',
    'Plot',
    'Commercial',
    'Post Free Property Ad',
  ];

  return (

    <section className="bg-[#f5f5f5] border-t">

      <div className="max-w-[1600px] mx-auto px-[5%] py-10 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}

          <div className="lg:col-span-9 w-full">

            {/* TITLE */}

            <h1 className="text-3xl md:text-5xl font-light text-center lg:text-left leading-tight text-[#222]">

              Start your

              <span className="font-bold ml-3">
                #PataBadloLifeBadlo
              </span>

              Journey

            </h1>

            {/* TOP BUTTONS */}

            <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-12 border-b pb-4 overflow-x-auto">

              {topMenus.map((menu, index) => (

                <button
                  key={index}
                  className={`text-base md:text-lg whitespace-nowrap transition px-2 pb-3 ${
                    menu === 'Buy'
                      ? 'text-red-600 border-b-4 border-red-600 font-semibold'
                      : 'text-[#222] hover:text-red-600'
                  }`}
                >
                  {menu}
                </button>

              ))}

            </div>

            {/* SEARCH BAR */}

            <div className="bg-white rounded-[30px] shadow-md border mt-8 overflow-hidden">

              <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch">

                {/* LOCATION */}

                <button className="flex items-center gap-3 px-6 py-5 lg:border-r border-b lg:border-b-0 text-left hover:bg-gray-50 transition">

                  <MapPin
                    className="text-red-600 min-w-[22px]"
                    size={22}
                  />

                  <div className="bg-[#f9ecec] px-5 py-2 rounded-full text-base md:text-lg whitespace-nowrap">

                    Bangalore

                  </div>

                  <span className="text-base md:text-lg text-gray-500">

                    Add more...

                  </span>

                </button>

                {/* PROPERTY TYPE */}

                <button className="flex items-center justify-between px-6 py-5 lg:border-r border-b lg:border-b-0 hover:bg-gray-50 transition">

                  <div className="flex items-center gap-3">

                    <Home
                      className="text-red-600"
                      size={22}
                    />

                    <span className="text-base md:text-lg">
                      Flat +1
                    </span>

                  </div>

                  <ChevronDown size={20} />

                </button>

                {/* BUDGET */}

                <button className="flex items-center justify-between px-6 py-5 lg:border-r border-b lg:border-b-0 hover:bg-gray-50 transition">

                  <div className="flex items-center gap-3">

                    <IndianRupee
                      className="text-red-600"
                      size={22}
                    />

                    <span className="text-base md:text-lg">
                      Budget
                    </span>

                  </div>

                  <ChevronDown size={20} />

                </button>

                {/* SEARCH */}

                <div className="p-3">

                  <button className="w-full bg-red-600 hover:bg-red-700 transition text-white text-xl md:text-2xl font-semibold rounded-full py-4 md:py-5 flex items-center justify-center gap-3">

                    <Search size={28} />

                    Search

                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT BANNER */}

          <div className="lg:col-span-3 w-full">

            <button className="w-full bg-[#4ea39d] rounded-2xl overflow-hidden relative min-h-[260px] lg:min-h-[320px] flex flex-col justify-between p-6 md:p-8 text-white shadow-lg text-left hover:scale-[1.01] transition">

              {/* TOP */}

              <div>

                <div className="text-3xl md:text-4xl font-bold lowercase">

                  magicbricks

                </div>

                <div className="inline-block bg-yellow-400 text-black text-xs md:text-sm px-3 py-1 rounded-full mt-3 font-semibold">

                  NEW PROJECTS

                </div>

              </div>

              {/* CONTENT */}

              <div>

                <h2 className="text-2xl md:text-4xl font-bold leading-tight">

                  India&apos;s biggest destination for new projects

                </h2>

                <div className="bg-red-600 inline-block mt-6 px-5 py-3 rounded-full font-semibold text-sm md:text-base">

                  VISIT NOW

                </div>

              </div>

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}