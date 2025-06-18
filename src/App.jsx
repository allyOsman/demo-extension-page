import { useState } from "react";

import { data } from "./utilities/data.js";

import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  // const [data, setData] = useState(initialData);
  const [displayData, setDisplayData] = useState(data);

  function handleFilterData(status) {
    if (status === "all") {
      setDisplayData(data); // show all data.
    } else if (status === "active") {
      setDisplayData(data.filter((item) => item.isActive)); // show active data.
    } else if (status === "inactive") {
      setDisplayData(data.filter((item) => !item.isActive)); // show inactive data.
    }
  }

  // function handleRemoveItem(name) {
  //   const updatedData = data.filter(item => item.name == name);
  //   setData(updatedData);
  //   // setDisplayData(updatedData);
  // }

  return (
    <>
      <main>
        <Header onFilter={handleFilterData} />
        <Section items={displayData}/>
      </main>
    </>
  );
}

export default App;
