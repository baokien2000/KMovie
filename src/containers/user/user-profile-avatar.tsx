import { UserProfileType } from "@/enum/user";
import { useUserStore } from "@/store/user/user.store";
import { getBase64 } from "@/utils/image";
import { CameraIcon, UserIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { use } from "react";

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
            console.log("e", event.target.files[0]);
            const avatarUrl = await getBase64(event.target.files[0]);
            console.log("avatarUrl", avatarUrl);
            setCurrentAvatar(avatarUrl as string);
            event.target.files = null;
            event.target.value = "";
            setStatus("edited");
        }
    };
    return (
        <div className="w-fit h-full p-[5px] bg-black rounded">
            <div className="relative text-title aspect-square sm:w-[250px] rounded sm:min-w-[250px] w-full h-full">
                {avatar || currentAvatar ? (
                    <Image
                        src={currentAvatar ? `data:image/jpeg;base64,${currentAvatar}` : avatar ?? ""}
                        sizes="(max-width: 640px) 100vw,250px"
                        quality={100}
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
