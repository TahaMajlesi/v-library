import Header from "../Header/Header";
import Shelves from "../Shelves/Shelves";

export function Getdata(query) {
  fetch(`https://www.dbooks.org/api/search/${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

const App = () => {
  return (
    <>
      <Header />
      <Shelves />
    </>
  );
};

export default App;
