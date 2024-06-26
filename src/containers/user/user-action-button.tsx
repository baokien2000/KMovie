import { UserProfileType } from "@/enum/user";
import { updateUser } from "@/services/user";
import { useAuthStore } from "@/store/auth/auth.store";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ChangePassButton from "./change-pass-button";
import { useUserStore } from "@/store/user/user.store";

const UserActionButton = ({ status, setStatus }: { status: UserProfileType; setStatus: (value: UserProfileType) => void }) => {
    const [loading, setLoading] = useState(false);

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const currentAvatar = useUserStore((state) => state.currentAvatar);
    const setCurrentAvatar = useUserStore((state) => state.setCurrentAvatar);
    const handleUpdate = async () => {
        setLoading(true);
        try {
            if (!user?._id) return;
            const name = (document.querySelector("#userEditName") as HTMLInputElement).value;
            const gender = (document.querySelector("input[name=gender]:checked") as HTMLInputElement).value;
            const payload = { name, gender, userId: user._id, avatar: currentAvatar };
            const res = await updateUser(user, payload);
            if (res.status === 200) {
                setStatus("idle");
                toast.success("Cập nhật thông tin thành công");
                setUser(res.data);
                setCurrentAvatar(null);
            } else {
                toast.error("Cập nhật thông tin thất bại");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full gap-4 flex">
            {user && <ChangePassButton user={user} />}
            <button
                onClick={() => setStatus("idle")}
                className={`py-1 h-9 font-bold text-default rounded-md flex items-center justify-center gap-2 w-fit  bg-cardBackground  ${
                    status === "idle" ? "hidden" : "block ml-auto"
                }`}
            >
                Trở lại
            </button>
            <button
                disabled={status === "editing" || loading}
                className={`py-1 disabled:bg-mainColor/50  h-9 font-bold text-[#111827] rounded-md flex items-center justify-center gap-2 sm:w-[200px] w-[130px] bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${
                    status === "idle" ? "hidden" : "block "
                }`}
                onClick={handleUpdate}
            >
                {loading ? <div className="loadingText" /> : "Cập nhật"}
            </button>
            <button
                onClick={() => setStatus("editing")}
                className={`py-1 h-9 font-bold text-[#111827] rounded-md flex items-center justify-center gap-2 sm:w-[200px] w-[130px] bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${
                    status !== "idle" ? "hidden" : "block ml-auto"
                }`}
            >
                Chỉnh sữa
            </button>
        </div>
    );
};

export default UserActionButton;
