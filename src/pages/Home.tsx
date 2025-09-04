import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="flex justify-center mt-[150px]">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        <div className="flex justify-between ">
          <img src="/large-girman-logo.svg" alt="large size girman logo" />
          <img src="/girman-text.svg" alt="girman text" />
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
