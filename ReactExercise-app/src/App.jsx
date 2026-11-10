import coreConceptImage from "./assets/react-core-concepts.png"
import Header from "./components/Header"
import TabButton from "./components/TabButton"

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(){
  return Math.floor(Math.random() * titles.length);
}


export function CoreConcepts({title, description, image}){
  return (
    <li>
      <img />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header

      title="React"
      text="going to build!"
      image={coreConceptImage}
      />

      <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton />
            <TabButton />
            <TabButton />
            <TabButton />
          </menu>
      </section>
      
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;