import "./styles.css";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import data from "./data";

export default function App() {
  const journals = data.map((data) => {
    return <Journal {...data} key={data.id} />;
  });

  return (
    <div className="App">
      <Navbar />
      {journals}
    </div>
  );
}
