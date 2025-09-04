import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <img
        src="/magnifying-glass.svg"
        alt="magnifying glass icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
      />
      <Input
        type="search"
        placeholder="Search"
        className="pl-9 bg-white h-[50px] lg:text-[18px] rounded-[12px] border-[#D7D7EA]"
      />
    </div>
  );
}
