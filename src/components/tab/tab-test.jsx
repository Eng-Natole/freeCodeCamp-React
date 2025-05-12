import Tab from "./index"; // make sure path is correct

function RandomComponent() {
  return <h1>some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>this is content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>this is content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log("Current tab index:", currentTabIndex);
  }

  return <Tab tabsContent={tabs} onChange={handleChange} />;
}
