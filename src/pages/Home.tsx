import ProfileCard from "@/components/ProfileCard";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { users, type User } from "../utils/users";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState<User[]>(users);

  const handleTyping = (typing: boolean) => {
    setIsTyping(typing);
    if (!typing) {
      setSearchTerm("");
    }
  };

  useEffect(() => {
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
          <div className="mt-[40px] flex flex-wrap gap-[22px]">
            {filteredList.map((user, index) => (
              <ProfileCard key={index} userDetails={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
