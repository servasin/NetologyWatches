import { useState, useEffect } from "react";

const Clock = ({timeZone}) =>{
  timeZone = Number(timeZone)

  function setTimeZone() {
    const addZero = i => { return i < 10 ? '0' + i : i }
    const get24Hours = n => { return n > 23 ? n - 24 : n }

    let d = new Date();
    let h = get24Hours(d.getUTCHours() + timeZone);
    
    let m = addZero(d.getUTCMinutes());
    let s = addZero(d.getUTCSeconds());

    let time = addZero(h) + ':' + m + ':' + s;
    return time
  }

  const [ctime,setTime] = useState(setTimeZone())

  useEffect(() => {
  const interval = setInterval(() => setTime(setTimeZone()), 1000);
    return () => clearInterval(interval);
  }, []);


  return (
  <span>{ctime}</span>
  )
}
export default Clock