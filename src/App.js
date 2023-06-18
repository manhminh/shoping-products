import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Cart />
        <HomeScreen />
      </header>
    </div>
  );
}

export default App;
