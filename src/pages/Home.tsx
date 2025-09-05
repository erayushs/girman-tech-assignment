import ProfileCard from "@/components/ProfileCard";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { users, type User } from "../utils/users";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState<User[]>([]);

  const handleTyping = (typing: boolean) => {
    setIsTyping(typing);
    if (!typing) {
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") return;
    setFilteredList(
      users.filter(
        (user) => user.first_name.toLowerCase() === searchTerm.toLowerCase()
      )
    );
  }, [searchTerm]);

  return (
    <div className="flex justify-center lg:mt-[150px] mt-[40px]">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        {!isTyping && (
          <div className="lg:flex justify-between hidden">
            <img src="/large-girman-logo.svg" alt="large size girman logo" />
            <img src="/girman-text.svg" alt="girman text" />
          </div>
        )}

        <SearchBar onTyping={handleTyping} onSubmit={setSearchTerm} />

        {searchTerm && (
          <div className="mt-[40px] flex flex-col items-center gap-[22px]">
            {filteredList.length > 0 ? (
              <div className="flex flex-wrap gap-[22px]">
                {filteredList.map((user) => (
                  <ProfileCard key={user.id} userDetails={user} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500 ">
                <img
                  src="/no-results.svg"
                  alt="No results"
                  className="lg:w-[472px] lg:h-[402px] w-[291px] h-[278px] mt-[-20px]"
                />
                <p>No results found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
