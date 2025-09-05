import ProfileCard from "@/components/ProfileCard";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [submittedValue, setSubmittedValue] = useState("");

  const handleTyping = (typing: boolean) => {
    setIsTyping(typing);
    if (!typing) {
      setSubmittedValue("");
    }
  };

  return (
    <div className="flex justify-center lg:mt-[150px] mt-[40px]">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        {!isTyping && (
          <div className="lg:flex justify-between hidden">
            <img src="/large-girman-logo.svg" alt="large size girman logo" />
            <img src="/girman-text.svg" alt="girman text" />
          </div>
        )}

        <SearchBar onTyping={handleTyping} onSubmit={setSubmittedValue} />

        {submittedValue && (
          <div className="mt-[40px] flex flex-wrap gap-[22px]">
            <ProfileCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// className="w-[136.57px] h-[45.71px]
