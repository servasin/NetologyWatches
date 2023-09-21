import { useState, useEffect } from "react";

const Clock = ({timeZone=3}) =>{

  const [ctime,setTime] = useState('')

  useEffect(() => {
  const interval = setInterval(() => {
    
    const addZero = i => { return i < 10 ? '0' + i : i }

    let d = new Date();
    let h = addZero(d.getUTCHours());
    let m = addZero(d.getUTCMinutes());
    let s = addZero(d.getUTCSeconds());

    let time = h + timeZone + ':' + m + ':' + s;
    setTime(time)

    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
  <span>{ctime}</span>
  )
}
export default Clock