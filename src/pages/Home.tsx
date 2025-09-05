import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="flex justify-center lg:mt-[150px] mt-[40px] ">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        {!isTyping && (
          <div className="lg:flex justify-between hidden">
            <img src="/large-girman-logo.svg" alt="large size girman logo" />
            <img src="/girman-text.svg" alt="girman text" />
          </div>
        )}

        <SearchBar onTyping={setIsTyping} />
      </div>
    </div>
  );
};

export default Home;
