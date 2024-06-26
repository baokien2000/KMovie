import React, { use, useEffect, useMemo, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/cn";
import { IUser } from "@/interface/user";
import Modal from "@/components/UI/modal";
import { ErrorIcon } from "../../../public/static/svg";
import { FormField } from "./change-pass-field";
import { changePassword } from "@/services/auth";
import toast from "react-hot-toast";

const schema = z
    .object({
        oldPassword: z.string({ message: "Mật khẩu cũ không được để trống" }).trim().min(1, { message: "Mật khẩu cũ không được để trống" }),
        newPassword: z
            .string({ message: "Mật khẩu mới không được để trống" })
            .trim()
            .min(1, { message: "Mật khẩu mới không được để trống" })
            .min(6, { message: "Mật khẩu mới phải có ít nhất 6 ký tự" })
            .max(25, { message: "Mật khẩu quá dài" })
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
                message: "Mật khẩu phải có ít nhất 1 chữ thường, 1 chữ hoa và 1 số bất kỳ",
            }),
        confirmPassword: z
            .string({ message: "Xác nhận mật khẩu không được để trống" })
            .trim()
            .min(1, { message: "Xác nhận mật khẩu không được để trống" }),
    })
    .superRefine((val, ctx) => {
        if (val.oldPassword === val.newPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Mật khẩu mới không được giống với mật khẩu cũ`,
                path: ["newPassword"],
            });
        }
        if (val.newPassword !== val.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Mật khẩu mới không trùng khớp`,
                path: ["confirmPassword"],
            });
        }
    });
const FieldData = [
    { label: "Mật khẩu cũ", name: "oldPassword" },
    { label: "Mật khẩu mới", name: "newPassword" },
    { label: "Xác nhận mật khẩu mới", name: "confirmPassword" },
];

export default function ChangePassButton({ user }: { user: IUser }) {
    const [loading, setLoading] = React.useState(false);
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        setError,
        clearErrors,
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    });
    const formRef = useRef<HTMLFormElement>(null);
    const onSubmit = async (data: z.infer<typeof schema>, callback: () => void) => {
        setLoading(true);
        try {
            console.log("onSubmit", data);
            const res = await changePassword(user, data.oldPassword, data.newPassword);
            console.log("Res", res);
            switch (res.status) {
                case 401:
                    setError("oldPassword", { message: "Mật khẩu cũ không đúng" });
                    break;
                case 200:
                    toast.success("Đổi mật khẩu thành công");
                    reset();
                    callback && callback();
                    break;
            }
        } catch (error: any) {
            toast.error("Đã xảy ra lỗi, vui lòng thử lại");
        } finally {
            setLoading(false);
        }
    };
    const onClose = () => {
        clearErrors();
        reset();
    };

    return (
        <Modal onRequestClose={onClose}>
            <Modal.Open>
                <button className="py-1 self-start h-9 font-bold text-[#111827] rounded-md flex items-center justify-center gap-2 sm:w-[200px] w-[130px] bg-[#ffce4f]/90 hover:bg-[#ffce4f]">
                    Đổi mật khẩu
                </button>
            </Modal.Open>
            <Modal.Content className=" aspect-auto w-[500px]  rounded-2xl bg-cardBackground p-10 py-12 text-default" icon={<></>}>
                {(closeModal) => {
                    return (
                        <div className="space-y-3">
                            <h2 className="text-2xl font-medium">Đổi Mật Khẩu</h2>
                            <form onSubmit={handleSubmit((value) => onSubmit(value, closeModal!))} className="  text-sm  text-default">
                                <div className="flex flex-col gap-3">
                                    {FieldData.map((field) => (
                                        <FormField type="password" key={field.name} control={control} label={field.label} name={field.name} />
                                    ))}
                                </div>
                                <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                                    {Object.keys(errors).length > 0 && (
                                        <>
                                            <ErrorIcon className="h-4 w-4" />
                                            <p className="leading-[10px]">
                                                {errors?.oldPassword?.message ||
                                                    errors?.newPassword?.message ||
                                                    errors?.confirmPassword?.message ||
                                                    ""}
                                            </p>
                                        </>
                                    )}
                                </div>
                                <div className=" ml-auto max-w-[200px]">
                                    {loading ? (
                                        <div className="loadingText cursor-wait text-center bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider" />
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider hover:text-black hover:bg-mainColor"
                                        >
                                            Đổi mật khẩu
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Modal.Content>
        </Modal>
    );
}
