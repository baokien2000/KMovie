import { MUserGender, UserProfileType } from "@/enum/user";
import { IUser } from "@/interface/user";
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
        <div className="w-full text-[#ccc] ml-[10px]">
            <UserInfoRow label="Email" value={user?.email!} />
            <UserNameEditRow name={user?.name ?? ""} status={status} setStatus={setStatus} />
            <UserInfoRow label="Ngày tham gia" value={dayjs(user?.createdAt).format("DD/MM/YYYY")} />
            <UserGenderEditRow userGender={user?.gender} status={status} setStatus={setStatus} />
            <UserInfoRow label="Số phim đã xem" value={viewedMovie ? viewedMovie : 0} />
        </div>
    );
};

export default UserInfoDetails;

const UserInfoRow = ({ label, value }: { label: string; value: string | number }) => (
    <div className="flex w-full p-4 border-b border-secondary">
        <span className="font-bold w-[120px]">{label}</span>
        <span className="flex-1 text-center font-medium">{value}</span>
    </div>
);

const UserNameEditRow = ({ name, status, setStatus }: { name: string; status: UserProfileType; setStatus: (value: UserProfileType) => void }) => (
    <div className="flex items-center w-full px-4 py-3.5 border-b border-secondary">
        <span className="font-bold w-[120px]">Họ Tên</span>
        <div className="flex-1 flex justify-center gap-[5px] font-medium">
            {status === "idle" ? (
                name
            ) : (
                <input
                    id="userEditName"
                    onChange={() => setStatus("edited")}
                    maxLength={30}
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
    <div className="flex w-full p-4 border-b border-secondary">
        <span className="font-bold w-[120px]">Giới tính</span>
        <span className="flex-1 text-center font-medium">
            {status === "idle" ? (
                MUserGender.get(userGender ?? "") ?? ""
            ) : (
                <div className="flex w-fit gap-1 items-center mx-auto">
                    {["male", "female", "other", "unknown"].map((gender) => (
                        <>
                            <input
                                key={`input-${gender}`}
                                id={`gender-${gender}`}
                                className="cursor-pointer accent-mainColor"
                                defaultChecked={userGender === gender}
                                type="radio"
                                value={gender}
                                name="gender"
                                onClick={() => setStatus("edited")}
                            />
                            <label key={`label-${gender}`} htmlFor={`gender-${gender}`} className="mr-2 cursor-pointer accent-mainColor">
                                {MUserGender.get(gender) ?? " Khác"}
                            </label>
                        </>
                    ))}
                </div>
            )}
        </span>
    </div>
);
