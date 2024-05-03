import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-xs">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
