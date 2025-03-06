import Header from "../Header/Header";
import Shelves from "../Shelves/Shelves";
let booksList = [];
let status = false;
export function Getdata(query) {
  fetch(`https://www.dbooks.org/api/search/${query}`)
    .then((res) => res.json())
    .then((data) => {
      booksList = data["books"];
      status = true;
    });
  console.log(status);
}

const App = () => {
  return (
    <>
      <Header />
      <Shelves Status={status} booksList={booksList} />
    </>
  );
};

export default App;
