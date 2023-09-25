import { useState } from "react"

function Toolbar({addItem}) {

  const [name, setName] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [error, setError] = useState('')
  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || timeZone.trim() === '') {
      setError('Заполните все поля')
      return;
    }
    addItem({name, timeZone});
    setName('');
    setTimeZone('');
    setError('');
  }

    return (
    <form className="toolbar" onSubmit={onHandleSubmit}>
      {error ? <span className="error">{error}</span> : ''}
      <label>&nbsp;&nbsp;Название&nbsp;&nbsp;
        <input onChange={e => setName(e.target.value)} value={name} type="text" />
      </label>
      <label>&nbsp;&nbsp;Временная Зона&nbsp;&nbsp;
        <input onChange={e => setTimeZone(e.target.value)} value={timeZone} type="text" />
      </label>
      <button type="submit">Добавить</button>
    </form>
    )
  }
  
  export default Toolbar
  