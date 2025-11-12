'use client';

import { useState, useRef, useEffect } from 'react';

const suggestedLocations = [
  {
    id: 1,
    name: 'Nearby',
    description: "Find what's around you",
    icon: '📍',
  },
  {
    id: 2,
    name: 'Mumbai, Maharashtra',
    description: 'Popular metropolitan area',
    icon: '🏙️',
  },
  {
    id: 3,
    name: 'Bangalore, Karnataka',
    description: 'Tech hub of India',
    icon: '🏙️',
  },
  {
    id: 4,
    name: 'Delhi, Delhi',
    description: 'Capital city',
    icon: '🏛️',
  },
  {
    id: 5,
    name: 'Pune, Maharashtra',
    description: 'Great for students',
    icon: '🎓',
  },
];

const suggestedItems = [
  { name: 'Cameras', icon: '📷' },
  { name: 'Drones', icon: '🚁' },
  { name: 'Laptops', icon: '💻' },
  { name: 'Gaming Consoles', icon: '🎮' },
  { name: 'Power Tools', icon: '🔧' },
  { name: 'Party Equipment', icon: '🎉' },
  { name: 'Sports Gear', icon: '⚽' },
  { name: 'Musical Instruments', icon: '🎸' },
];

export default function SearchBar() {
  const [whatQuery, setWhatQuery] = useState('');
  const [whereQuery, setWhereQuery] = useState('');
  const [showWhatDropdown, setShowWhatDropdown] = useState(false);
  const [showWhereDropdown, setShowWhereDropdown] = useState(false);
  
  const whatRef = useRef<HTMLDivElement>(null);
  const whereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whatRef.current && !whatRef.current.contains(event.target as Node)) {
        setShowWhatDropdown(false);
      }
      if (whereRef.current && !whereRef.current.contains(event.target as Node)) {
        setShowWhereDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', { what: whatQuery, where: whereQuery });
  };

  const filteredItems = suggestedItems.filter(item =>
    item.name.toLowerCase().includes(whatQuery.toLowerCase())
  );

  const filteredLocations = suggestedLocations.filter(location =>
    location.name.toLowerCase().includes(whereQuery.toLowerCase())
  );

  return (
    <div className="px-4 lg:px-6 -mt-8 lg:-mt-12 z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div 
          className="bg-white dark:bg-gray-800 rounded-[50px] shadow-lg flex items-center p-2 transition-all duration-300"
          style={{
            boxShadow: '0 10px 15px -3px rgba(248, 109, 91, 0.15), 0 4px 6px -4px rgba(248, 109, 91, 0.15)'
          }}
        >
          <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center w-full">
            {/* What Section */}
            <div className="text-left px-6 py-2 relative" ref={whatRef}>
              <span className="block text-xs font-bold text-gray-800 dark:text-white">
                What
              </span>
              <input
                type="text"
                value={whatQuery}
                onChange={(e) => setWhatQuery(e.target.value)}
                onFocus={() => setShowWhatDropdown(true)}
                placeholder="Cameras, Drones, etc."
                className="text-sm text-gray-500 dark:text-gray-400 bg-transparent border-none focus:outline-none focus:ring-0 p-0 w-full placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              
              {/* What Dropdown */}
              {showWhatDropdown && (
                <div className="absolute top-full left-0 mt-4 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3">
                      {whatQuery ? 'Search results' : 'Popular items'}
                    </h3>
                    <div className="space-y-1">
                      {(whatQuery ? filteredItems : suggestedItems).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setWhatQuery(item.name);
                            setShowWhatDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {item.name}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-8 border-r border-gray-200 dark:border-gray-600"></div>

            {/* Where Section */}
            <div className="text-left px-6 py-2 relative" ref={whereRef}>
              <span className="block text-xs font-bold text-gray-800 dark:text-white">
                Where
              </span>
              <input
                type="text"
                value={whereQuery}
                onChange={(e) => setWhereQuery(e.target.value)}
                onFocus={() => setShowWhereDropdown(true)}
                placeholder="Search location"
                className="text-sm text-gray-500 dark:text-gray-400 bg-transparent border-none focus:outline-none focus:ring-0 p-0 w-full placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              
              {/* Where Dropdown */}
              {showWhereDropdown && (
                <div className="absolute top-full left-0 mt-4 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3">
                      {whereQuery ? 'Search results' : 'Suggested destinations'}
                    </h3>
                    <div className="space-y-1">
                      {(whereQuery ? filteredLocations : suggestedLocations).map((location) => (
                        <button
                          key={location.id}
                          onClick={() => {
                            setWhereQuery(location.name);
                            setShowWhereDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-start gap-3"
                        >
                          <span className="text-2xl">{location.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-white">
                              {location.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {location.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="pl-4 pr-1 flex justify-end">
              <button
                aria-label="Search"
                onClick={handleSearch}
                className="bg-[#f86d5b] text-white w-14 h-14 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none"
                style={{
                  boxShadow: '0 4px 14px 0 rgba(248, 109, 91, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(248, 109, 91, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(248, 109, 91, 0.3)';
                }}
              >
                <span className="material-symbols-outlined text-3xl">search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
