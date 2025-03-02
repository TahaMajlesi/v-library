import Header from "../Header/Header";
import Shelves from "../Shelves/Shelves";
let booksList = [];
export function Getdata(query) {
  fetch(`https://www.dbooks.org/api/search/${query}`)
    .then((res) => res.json())
    .then((data) => {
      booksList = data["books"];
    });
  console.log(booksList);
}

const App = () => {
  return (
    <>
      <Header />
      <Shelves booksList={booksList} />{" "}
    </>
  );
};

export default App;
