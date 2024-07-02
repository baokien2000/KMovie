import React, { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IUser } from "@/interface/user";
import Modal from "@/components/UI/modal";
import { ErrorIcon } from "../../../public/static/svg";
import { FormField } from "./change-pass-field";
import { changePassword, verifyCaptcha } from "@/services/auth";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z
    .object({
        captcha: z.optional(z.boolean()),
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

export default function ChangePassModal({ user }: { user: IUser }) {
    const [loading, setLoading] = React.useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        setError,
        clearErrors,
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            captcha: false,
        },
    });

    const onSubmit = async (data: z.infer<typeof schema>, callback: () => void) => {
        const captchaToken = recaptchaRef.current?.getValue();
        if (!captchaToken) {
            setError("captcha", { message: "Vui lòng xác nhận bạn không phải là robot" });
            return;
        }
        const verify = await verifyCaptcha(captchaToken);
        console.log("verifyCaptcha", verify);
        if (verify.status !== 200) {
            setError("captcha", { message: "Vui lòng xác nhận bạn không phải là robot" });
            return;
        }
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

    const onChange = async (value: string | null) => {
        if (!value) {
            setError("captcha", { message: "Vui lòng xác nhận bạn không phải là robot" });
        } else {
            clearErrors("captcha");
        }
    };

    return (
        <Modal onRequestClose={onClose}>
            <Modal.Open>
                <button className="py-1 self-start px-2 h-8 sm:h-9  text-sm font-bold text-[#111827] rounded flex items-center justify-center gap-2 w-fit bg-[#ffce4f]/90 hover:bg-[#ffce4f]">
                    Đổi mật khẩu
                </button>
            </Modal.Open>
            <Modal.Content
                className=" aspect-auto w-[calc(100svw-24px)] sm:w-[500px]  rounded bg-cardBackground p-3 sm:p-10 py-6 sm:py-12 text-default"
                icon={<></>}
            >
                {(closeModal) => {
                    return (
                        <div className="space-y-3">
                            <h2 className="text-base uppercase sm:text-2xl font-medium">Đổi Mật Khẩu</h2>
                            <form onSubmit={handleSubmit((value) => onSubmit(value, closeModal!))} className="  text-sm  text-default">
                                <div className="flex flex-col gap-1 sm:gap-3">
                                    {FieldData.map((field) => (
                                        <FormField type="password" key={field.name} control={control} label={field.label} name={field.name} />
                                    ))}
                                </div>
                                <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                                    <ReCAPTCHA
                                        className="mt-3"
                                        onChange={onChange}
                                        theme={"dark"}
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                                    />
                                </div>

                                <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                                    {Object.keys(errors).length > 0 && (
                                        <>
                                            <ErrorIcon className="h-4 w-4" />
                                            <p className="leading-[10px]">
                                                {errors?.oldPassword?.message ||
                                                    errors?.newPassword?.message ||
                                                    errors?.confirmPassword?.message ||
                                                    errors?.captcha?.message ||
                                                    ""}
                                            </p>
                                        </>
                                    )}
                                </div>
                                <div className="flex text-sm items-center gap-3 justify-end">
                                    <button
                                        onClick={closeModal}
                                        disabled={loading}
                                        type="button"
                                        className="bg-dark1 rounded w-fit  p-2 text-default  font-bold tracking-wider"
                                    >
                                        Hủy
                                    </button>
                                    {loading ? (
                                        <div className="loadingText rounded cursor-wait text-center bg-mainColor/90  w-fit p-2 text-des  font-bold tracking-wider" />
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-mainColor/90 rounded  w-fit p-2 text-des  font-bold tracking-wider hover:text-black hover:bg-mainColor"
                                        >
                                            Xác nhận
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
