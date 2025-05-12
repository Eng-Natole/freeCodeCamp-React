import { useState } from "react";

function Tab({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] &&
          tabsContent[currentTabIndex].tabsContent}
      </div>
    </div>
  );
}
export default Tab;
