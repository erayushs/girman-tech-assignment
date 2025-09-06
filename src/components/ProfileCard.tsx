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
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

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
              <DialogTrigger asChild>
                <Button className="lg:w-[136.57px] lg:h-[45.71px] w-[103.67px] h-[34.59px] lg:text-[1rem] text-[12.11px]">
                  Fetch Details
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-[299px] h-[477px] lg:max-w-[512px] lg:h-[475px]">
                <DialogHeader>
                  <div className="flex justify-between items-center">
                    <DialogTitle className="text-[22px] lg:text-2xl font-semibold self-start">
                      Fetch Details
                    </DialogTitle>
                    <DialogClose>
                      <div className="w-[24px] h-[24px] mt-[-4px]">
                        <X className="lg:hidden w-full h-full" />
                      </div>
                    </DialogClose>
                  </div>

                  <DialogDescription className="text-left lg:text-sm text-[12px]">
                    Here are the details of following employee.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col lg:gap-[2px] gap-[1px]">
                  <Label className="text-xs lg:text-sm">
                    Name: {userDetails.first_name} {userDetails.last_name}
                  </Label>
                  <Label className="text-xs lg:text-sm">
                    Location: {userDetails.city}
                  </Label>
                  <Label className="text-xs lg:text-sm">
                    Contact Number: {userDetails.contact_number}
                  </Label>
                  <Label className="mt-2 text-xs lg:text-sm">
                    Profile Image:
                  </Label>

                  <div className="lg:w-[207px] lg:h-[207px] my-[6px] lg:mb-0 mb-40 lg:mt-2 mt-4">
                    <img src="/large-profile-imge.svg" alt="profile image" />
                  </div>
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="lg:block hidden mt-[-12px]"
                    >
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
