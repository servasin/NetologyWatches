import List from "./List";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Watches() {

  const [arr, setArr] = useState([
    { id: uuidv4(), name: 'Москва', timeZone: 3 },
  ])

  function addItem(item) {
    item.id = uuidv4();
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
