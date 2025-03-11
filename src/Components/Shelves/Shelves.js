const Shelves = ({ booksList }) => {
  return (
    <div className="w-full flex bg-gray-900 border-t-[1px] border-white flex-wrap gap-8 lg:p-3">
      {" "}
      {booksList.map((elem) => {
        return (
          <div
            className="lg:w-1/12 md:w-4/12 w-8/12 flex flex-col  cursor-pointer hover:lg:-translate-y-2 transition-transform mt-1 "
            key={elem["id"]}
          >
            <img
              src={elem["image"]}
              alt={elem["subtitle"]}
              className="rounded-2xl"
            />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Shelves;
