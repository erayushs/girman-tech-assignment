import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <div className="flex justify-center lg:mt-[150px] mt-[40px] ">
      <div className="w-[800px] h-[255px] flex flex-col justify-between">
        {!isTyping && (
          <div className="lg:flex justify-between hidden">
            <img src="/large-girman-logo.svg" alt="large size girman logo" />
            <img src="/girman-text.svg" alt="girman text" />
          </div>
        )}

        <SearchBar onTyping={handleTyping} onSubmit={setSubmittedValue} />

        {submittedValue && (
          <div className="mt-[40px]">
            <div className="w-[388.57px] h-[312.57px] rounded-[18.29px] bg-white p-[27px] flex flex-col">
              <div className="w-[89.15px] h-[89.15px]">
                <div className="w-full h-full rounded-full border border-[#F3F3F3]">
                  <img
                    src="/profile-image.svg"
                    alt="profile image"
                    className="p-3"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-sans font-semibold text-[36.57px]">
                  Anjali Kejriwal
                </h3>
                <div className="flex gap-2">
                  <img src="/location-icon.svg" alt="location icon" />
                  <span className="text-[11.43px] font-medium text-[#425763]">
                    Mumbai
                  </span>
                </div>

                <div className="mt-[37px] border-t-1 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 mt-[14.71px]">
                      <img src="/call-icon.svg" alt="location icon" />
                      <span className="text-[13.71px] font-semibold">
                        90999 80888
                      </span>
                    </div>

                    <p className="font-medium text-[11.43px] text-[#AFAFAF]">
                      Available on phone
                    </p>
                  </div>

                  <div className="mt-2">
                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <Button className="w-[136.57px] h-[45.71px]">
                            Fetch Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              you&apos;re done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Name</Label>
                              <Input
                                id="name-1"
                                name="name"
                                defaultValue="Pedro Duarte"
                              />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="username-1">Username</Label>
                              <Input
                                id="username-1"
                                name="username"
                                defaultValue="@peduarte"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// className="w-[136.57px] h-[45.71px]
