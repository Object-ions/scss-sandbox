import "./App.scss";

function App() {
  return (
    <div>
      <header>
        <h1>Sass Sandbox</h1>
      </header>
      <section className="section section-a">
        <h3>Section A</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          fermentum eget ante sed hendrerit. Mauris semper eget ante at
          lobortis.
        </p>
        <a href="#" className="btn-light">
          Read More
        </a>
      </section>
      <section className="section section-b">
        <h3>Section B</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          fermentum eget ante sed hendrerit. Mauris semper eget ante at
          lobortis.
        </p>
        <a href="#" className="btn-dark">
          Read More
        </a>
      </section>
    </div>
  );
}

export default App;
