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

type ProfileCardProps = {
  userDetails: {
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
  };
};

const ProfileCard = ({ userDetails }: ProfileCardProps) => {
  if (!userDetails) return null;
  return (
    <div className="lg:w-[388.57px] lg:h-[312.57px] lg:mx-0 mx-[40px] w-[313px] h-[236.21px] rounded-[18.29px] bg-white p-[27px] flex flex-col">
      <div className="lg:w-[89.15px] lg:h-[89.15px] w-[67.45px] h-[67.45px]">
        <div className="w-full h-full rounded-full border border-[#F3F3F3]">
          <img
            src="/profile-image.svg"
            alt="profile image"
            className="lg:p-3 p-1"
          />
        </div>
      </div>

      <div>
        <h3 className="font-sans font-semibold lg:text-[36.57px] text-[27.27px]">
          {userDetails.first_name} {userDetails.last_name}
        </h3>
        <div className="flex gap-2">
          <img
            src="/location-icon.svg"
            alt="location icon"
            className="w-[8.65px] h-[11.24px] lg:w-[11.43px] lg:h-[14.86px] mt-[1px]"
          />
          <span className="lg:text-[11.43px] text-[8.65px] font-medium text-[#425763]">
            {userDetails.city}
          </span>
        </div>

        <div className="lg:mt-[37px] mt-[26px] border-t-1 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 mt-[14.71px]">
              <img
                src="/call-icon.svg"
                alt="location icon"
                className="w-[11.24px] h-[11.24px] lg:w-[14.86px] lg:h-[14.86px] lg:mt-1 mt-[2px]"
              />
              <span className="lg:text-[13.71px] text-[10.38px] font-semibold">
                {userDetails.contact_number}
              </span>
            </div>

            <p className="font-medium lg:text-[11.43px] text-[8.65px] text-[#AFAFAF]">
              Available on phone
            </p>
          </div>

          <div className="mt-2">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button className="lg:w-[136.57px] lg:h-[45.71px] w-[103.67px] h-[34.59px] lg:text-[1rem] text-[12.11px]">
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
  );
};

export default ProfileCard;
