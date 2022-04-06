import { useSelector } from 'react-redux'

export function Display () {
  const connected = useSelector(state => state.connected)
  console.log(connected)
  return <p> {connected ? 'connecté' : 'deconnecté'} </p>
}
