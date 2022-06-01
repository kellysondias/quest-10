import Button from './components/button/button'

const showLabel = label => {
  return alert(`A label desse botão é "${label}"`)
}

function App() {
  return <Button showLabel={showLabel}/>
}

export default App;
