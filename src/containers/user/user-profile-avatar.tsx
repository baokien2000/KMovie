import { UserProfileType } from "@/enum/user";
import { useUserStore } from "@/store/user/user.store";
import { getBase64 } from "@/utils/image";
import { CameraIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { use } from "react";
import toast from "react-hot-toast";

const UserProfileAvatar = ({
    avatar,
    status,
    setStatus,
}: {
    avatar?: string;
    status: UserProfileType;
    setStatus: (value: UserProfileType) => void;
}) => {
    const currentAvatar = useUserStore((state) => state.currentAvatar);
    const setCurrentAvatar = useUserStore((state) => state.setCurrentAvatar);

    const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file.size > 5242880) {
                return toast.error("Ảnh quá lớn, vui lòng chọn ảnh dưới 5MB");
            }
            const avatarUrl = await getBase64(file);
            setCurrentAvatar(avatarUrl as string);
            setStatus("edited");
            event.target.value = "";
            event.target.files = null;
        }
    };
    return (
        <div className="w-full my-0 phone:my-4 md:my-0  mx-auto phone:w-[230px] phone:min-w-[230px] md:min-w-[265px] md:w-[265px] h-full p-[5px] bg-black rounded aspect-square ">
            <div className="relative text-title rounded  w-full h-full">
                {avatar || currentAvatar ? (
                    <Image
                        src={currentAvatar ? `data:image/jpeg;base64,${currentAvatar}` : avatar ?? ""}
                        sizes="(max-width: 320px) 100vw,300px"
                        priority
                        rel="preload"
                        loading="eager"
                        alt="thumbnail"
                        fill
                        className="object-cover rounded"
                    />
                ) : (
                    <UserIcon />
                )}
                {status !== "idle" && (
                    <label htmlFor="upload-avatar" className="absolute top-2 right-2 cursor-pointer">
                        <CameraIcon className="h-6 w-6 " />
                    </label>
                )}
                <input onChange={handleChangeImage} type="file" className="hidden" id="upload-avatar" accept="image/*" />
            </div>
        </div>
    );
};

export default UserProfileAvatar;
