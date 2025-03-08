const Shelves = ({ booksList }) => {
  return (
    <div className="w-full flex bg-gray-900 border-t-[1px] border-white flex-wrap gap-8 lg:p-3">
      {booksList.map((elem) => {
        return (
          <div
            className=" bg-gray-500 lg:w-1/12 md:w-4/12 w-8/12 flex flex-col rounded-2xl cursor-pointer hover:lg:-translate-y-2 transition-transform mt-1 "
            key={elem["id"]}
          >
            <img
              src={elem["image"]}
              alt={elem["subtitle"]}
              className="rounded-t-2xl"
            />{" "}
            <p className="h-full text-center ">
              {" "}
              {elem["title"] || "undefined"}{" "}
            </p>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Shelves;
