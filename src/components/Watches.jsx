import List from "./List";
import Toolbar from "./Toolbar";
import { useState } from "react";

function Watches() {

  const [arr, setArr] = useState([
    { id: self.crypto.randomUUID(), name: 'Москва', timeZone: 3 },
  ])

  function addItem(item) {
    item.id = self.crypto.randomUUID();
    setArr([...arr, item])
  }

  function removeItem(id) {
    setArr(arr.filter((item) => item.id !== id))
  }

  return (
    <>
      <Toolbar addItem={addItem} />
      <List timeList={arr} removeItem={removeItem}/>
    </>
  )
}

export default Watches
