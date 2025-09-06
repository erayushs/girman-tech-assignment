import ProfileCard from "@/components/ProfileCard";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { users, type User } from "../utils/users";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleTyping = (typing: boolean) => {
    setIsTyping(typing);
    if (typing) {
      setError(null);
      setSubmitted(false);
    } else {
      setSearchTerm("");
    }
  };

  const handleSubmit = (query: string) => {
    setSubmitted(true);
    setSearchTerm(query);
  };

  useEffect(() => {
    try {
      if (searchTerm.trim() === "") {
        setFilteredList([]);
        return;
      }
      setFilteredList(
        users.filter(
          (user) => user.first_name.toLowerCase() === searchTerm.toLowerCase()
        )
      );
    } catch (err) {
      setError("Something went wrong while searching.");
    }
  }, [searchTerm]);

  return (
    <div className="flex items-center justify-center lg:mt-[150px] mt-[40px] lg:flex-col">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        {!isTyping && (
          <div className="lg:flex justify-between hidden">
            <img src="/large-girman-logo.svg" alt="large size girman logo" />
            <img src="/girman-text.svg" alt="girman text" />
          </div>
        )}

        <SearchBar onTyping={handleTyping} onSubmit={handleSubmit} />

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
      {submitted && searchTerm.trim() === "" && (
        <p className="text-red-400 text-center mt-4">
          Please enter a valid name.
        </p>
      )}
    </div>
  );
};

export default Home;
