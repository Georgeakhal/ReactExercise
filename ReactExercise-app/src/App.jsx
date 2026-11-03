import coreConceptImage from "./assets/react-core-concepts.png"

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt(){
  return Math.floor(Math.random() * titles.length);
}

export function Header({title, text}){
  return (
    <header>
        <img src={coreConceptImage} alt="Stylized atom" />
        <h1>{title} {titles[getRandomInt()]}</h1>
        <p>
          {text}
        </p>
      </header>
  );
}

function App() {
  return (
    <div>
      <Header
      title="React"
      text="going to build!"
      />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;