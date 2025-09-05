import { Input } from "@/components/ui/input";
import { useState } from "react";

type SearchBarProps = {
  onTyping?: (typing: boolean) => void;
  onSubmit?: (query: string) => void;
};

export default function SearchBar({ onTyping, onSubmit }: SearchBarProps) {
  const [value, setValue] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onTyping?.(e.target.value.length > 0);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit?.(value);
    }
  };

  return (
    <div className="relative max-w-full lg:mx-0 mx-[40px]">
      <img
        src="/magnifying-glass.svg"
        alt="magnifying glass icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
      <Input
        type="search"
        placeholder="Search"
        className="pl-9 bg-white lg:h-[50px] h-[40px] lg:text-[18px] rounded-[12px] border-[#D7D7EA]"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
