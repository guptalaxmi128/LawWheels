import React, { useState } from 'react';

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full overflow-x-auto">
      <div className="inline-flex tab-gradient rounded-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-4 sm:px-6 lg:px-6 focus:outline-none rounded-xl font-space-grotesk transition ${
                tab.name === activeTab
                  ? 'bg-white text-gray-900 shadow m-1'
                  : 'text-white hover:text-white m-1'
              }`}
              onClick={() => handleTabClick(tab.name)}
              style={{ minWidth: '100px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full p-4 mt-4 text-left">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`${tab.name === activeTab ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabMenu;
