import { MUserGender, UserProfileType } from "@/enum/user";
import { IUser } from "@/interface/user";
import { cn } from "@/lib/cn";
import { UserIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
interface UserInfoDetailsProps {
    user: IUser | null;
    status: UserProfileType;
    setStatus: (value: UserProfileType) => void;
    viewedMovie?: number;
}
const UserInfoDetails = ({ user, status, setStatus, viewedMovie }: UserInfoDetailsProps) => {
    return (
        <div className="w-full text-[#ccc]  sm:mx-2">
            <UserInfoRow label="Email" value={user?.email!} />
            <UserNameEditRow name={user?.name ?? ""} status={status} setStatus={setStatus} />
            <UserInfoRow label="Ngày tham gia" value={dayjs(user?.createdAt).format("DD/MM/YYYY")} />
            <UserGenderEditRow userGender={user?.gender} status={status} setStatus={setStatus} />
            <UserInfoRow className="border-none" label="Số phim đã xem" value={viewedMovie ? viewedMovie : 0} />
        </div>
    );
};

export default UserInfoDetails;

const UserInfoRow = ({ label, value, className }: { label: string; value: string | number; className?: string }) => (
    <div className={cn("flex w-full md:p-4 p-3 border-b border-secondary", className)}>
        <span className="font-bold w-[120px]">{label}</span>
        <span className="flex-1 text-center font-medium">{value}</span>
    </div>
);

const UserNameEditRow = ({ name, status, setStatus }: { name: string; status: UserProfileType; setStatus: (value: UserProfileType) => void }) => (
    <div className="flex max-smallPhone:flex-wrap max-smallPhone:gap-1 items-center w-full md:p-4 p-3  border-b border-secondary">
        <span className={cn("font-bold w-[120px] ", status !== "idle" && "w-[80px]")}>Họ Tên</span>
        <div className="flex-1 flex justify-center gap-[5px] font-medium">
            {status === "idle" ? (
                name
            ) : (
                <input
                    id="userEditName"
                    onChange={() => setStatus("edited")}
                    maxLength={25}
                    className="bg-white text-dark4 px-2 outline-none"
                    defaultValue={name}
                />
            )}
        </div>
    </div>
);

const UserGenderEditRow = ({
    userGender,
    status,
    setStatus,
}: {
    userGender?: string;
    status: UserProfileType;
    setStatus: (value: UserProfileType) => void;
}) => (
    <div className="flex max-smallPhone:flex-wrap  max-smallPhone:gap-1  w-full md:p-4 p-3 border-b border-secondary">
        <span className={cn("font-bold w-[120px] ", status !== "idle" && "w-[80px]")}>Giới tính</span>
        <span className="flex-1 text-center font-medium">
            {status === "idle" ? (
                MUserGender.get(userGender ?? "") ?? ""
            ) : (
                <div className="flex w-fit gap-3 items-center mx-auto">
                    {["male", "female", "other", "unknown"].map((gender) => (
                        <div key={`input-${gender}`} className="flex gap-1 items-center">
                            <input
                                id={`gender-${gender}`}
                                className="cursor-pointer accent-mainColor"
                                defaultChecked={userGender === gender}
                                type="radio"
                                value={gender}
                                name="gender"
                                onClick={() => setStatus("edited")}
                            />
                            <label htmlFor={`gender-${gender}`} className="whitespace-nowrap cursor-pointer accent-mainColor">
                                {MUserGender.get(gender) ?? " Khác"}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </span>
    </div>
);
