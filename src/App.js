import "./styles.css";
import HomePage from "./home/home-page";
import { Store } from "./home/Store";

function App() {
  return (
    <Store>
      <HomePage />
    </Store>
  );
}

export default App;
