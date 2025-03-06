const Shelves = ({ booksList, Status }) => {
  if (Status) {
    return (
      <>
        {" "}
        {booksList.map((elem, index) => {
          return (
            <div className=" bg-gray-500 w-3/12 flex flex-col " key={index}>
              <img src={elem["image"]} alt={elem["subtitle"]} />{" "}
              <p> {elem["title"] || "undefined"} </p>{" "}
            </div>
          );
        })}{" "}
      </>
    );
  }
};

export default Shelves;
