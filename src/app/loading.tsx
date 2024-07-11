import Image from "next/image";
import { LoadingIcon } from "../../public/static/svg";
import Logo from "../../public/static/images/logo/logo_sm_light.png";
export default function Loading() {
    return (
        <div className="text-mainColor bg-mainBackground  flex flex-col gap-2 items-center justify-center top-0 left-0 absolute h-[100svh] w-[100svw]">
            <Image
                sizes="400px"
                loading="eager"
                priority={true}
                height={36}
                width={120}
                className="object-contain w-[120px] max-w-[120px]  h-9 "
                alt="Logo"
                src={Logo}
            />
            <LoadingIcon fill="currentColor" className="" />
        </div>
    );
}
