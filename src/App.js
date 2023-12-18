import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ImageComponent
        src="https://upload.wikimedia.org/wikipedia/commons/4/43/Stevie_Ray_Vaughan_Live_1983.jpg"
        alt="Stevie Ray Vaughan"
      />

      <ImageComponent
        src="https://cdn.britannica.com/32/247332-050-43601B8A/Blues-guitarist-Stevie-Ray-Vaughan-1983.jpg"
        alt="StevieRAy"
      />
      <div>
        <Button mioBottone="Bottone" pipo="SUPERBOTTONE" />
        <Button mioBottone="Bottonazzo" pipo="Bottoncino" />
      </div>
    </div>
  );
}
export default App;
