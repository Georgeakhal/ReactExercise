
export function Header({title, text}){
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>{title}</h1>
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
      title="React Essentials"
      text="going to build!"
      />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;