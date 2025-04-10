import Header from "./components/Header"
import { ways } from "./data"
import WayToTeach from "./components/WayToTeach"

function App() {
  return (
    <div>
      <Header />
      <section>
        <h1>Hello React!</h1>
        <ul>
          {/*с помощью индекса */}
          <WayToTeach 
            title={ways[0].title} 
            description={ways[0].description} 
            />
          {/*С помощью опертора Spread */}
          <WayToTeach {...ways[1]} /> 
          <WayToTeach
            title={ways[1].title}
            description={ways[1].description}
          />
        </ul>
      </section>
    </div>
  )
}

export default App 