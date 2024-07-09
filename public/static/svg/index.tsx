import { cn } from "@/lib/cn";
import React from "react";
interface SVGProps {
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    size?: string;
    fill?: string;
}

export const BookmarkIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={props.fill ?? "#cac9c9"}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke={props.fill ?? "#cac9c9"}
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
        </svg>
    );
};
export const LoginIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
        </svg>
    );
};
export const LogoutIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                stroke={props.fill ?? "#cac9c9"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export const ClockIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke={props.fill ?? "#cac9c9"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export const MenuIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#cac9c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const SearchIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            onClick={props.onClick}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke={props.fill ?? "#cac9c9"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export const SendIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.05304 8.49231L7.38691 12.0077C7.67322 12.7622 8.68441 12.8804 9.10657 12.1926C10.9257 9.22858 12.2512 6.05742 12.2746 3.14649C12.2785 2.65826 11.8871 2.26677 11.3989 2.27067C8.48804 2.29395 5.31683 3.61947 2.35289 5.43864C1.66508 5.86079 1.78326 6.87195 2.53778 7.15829L6.05304 8.49231Z"
                fill={props.fill ?? "#000"}
                stroke={props.fill ?? "#000"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const PlayIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z"
                stroke={props.fill ?? "#111827"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke={props.fill ?? "#111827"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export const StarIcon = (props: SVGProps) => {
    return (
        <svg
            onClick={props?.onClick}
            onMouseEnter={props?.onMouseEnter}
            className={props.className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1_2289)">
                <path
                    d="M11.049 2.92664C11.3483 2.00537 12.6517 2.00538 12.951 2.92664L14.4699 7.60055C14.6038 8.01254 14.9877 8.29148 15.4209 8.29149L20.3354 8.29168C21.3041 8.29172 21.7068 9.53127 20.9232 10.1007L16.9474 12.9895C16.5969 13.2441 16.4503 13.6955 16.5841 14.1075L18.1026 18.7815C18.4019 19.7028 17.3475 20.4689 16.5638 19.8995L12.5878 17.011C12.2373 16.7564 11.7627 16.7564 11.4122 17.011L7.43622 19.8995C6.65252 20.4689 5.5981 19.7028 5.8974 18.7815L7.41589 14.1075C7.54974 13.6955 7.40309 13.2441 7.05263 12.9895L3.07683 10.1007C2.29317 9.53127 2.69592 8.29172 3.66461 8.29168L8.57911 8.29149C9.01231 8.29148 9.39623 8.01254 9.53011 7.60055L11.049 2.92664Z"
                    stroke={props.fill ?? "#111827"}
                    strokeWidth="1.5"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_2289">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const RefreshIcon = (props: SVGProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15"
                stroke={props.fill ?? "#111827"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const FilmIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z"
                stroke="#ffce4f"
                strokeWidth="2"
            />
        </svg>
    );
};

export const ReportIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke={props.fill ?? "#fff"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const XIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            onClick={props.onClick}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6 18L18 6M6 6L18 18" stroke={props.fill ?? "#cac9c9"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const LoadingIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className + " animate-spin"}
            width={props.size ?? "24"}
            height={props.size ?? "24"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.75 3V6C12.75 6.19891 12.671 6.38968 12.5303 6.53033C12.3897 6.67098 12.1989 6.75 12 6.75C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6V3C11.25 2.80109 11.329 2.61032 11.4697 2.46967C11.6103 2.32902 11.8011 2.25 12 2.25C12.1989 2.25 12.3897 2.32902 12.5303 2.46967C12.671 2.61032 12.75 2.80109 12.75 3ZM21 11.25H18C17.8011 11.25 17.6103 11.329 17.4697 11.4697C17.329 11.6103 17.25 11.8011 17.25 12C17.25 12.1989 17.329 12.3897 17.4697 12.5303C17.6103 12.671 17.8011 12.75 18 12.75H21C21.1989 12.75 21.3897 12.671 21.5303 12.5303C21.671 12.3897 21.75 12.1989 21.75 12C21.75 11.8011 21.671 11.6103 21.5303 11.4697C21.3897 11.329 21.1989 11.25 21 11.25ZM16.7728 15.7125C16.631 15.5778 16.4422 15.5038 16.2466 15.5063C16.0511 15.5088 15.8642 15.5876 15.7259 15.7259C15.5876 15.8642 15.5088 16.0511 15.5063 16.2466C15.5038 16.4422 15.5778 16.631 15.7125 16.7728L17.8331 18.8944C17.9739 19.0351 18.1647 19.1142 18.3638 19.1142C18.5628 19.1142 18.7536 19.0351 18.8944 18.8944C19.0351 18.7536 19.1142 18.5628 19.1142 18.3638C19.1142 18.1647 19.0351 17.9739 18.8944 17.8331L16.7728 15.7125ZM12 17.25C11.8011 17.25 11.6103 17.329 11.4697 17.4697C11.329 17.6103 11.25 17.8011 11.25 18V21C11.25 21.1989 11.329 21.3897 11.4697 21.5303C11.6103 21.671 11.8011 21.75 12 21.75C12.1989 21.75 12.3897 21.671 12.5303 21.5303C12.671 21.3897 12.75 21.1989 12.75 21V18C12.75 17.8011 12.671 17.6103 12.5303 17.4697C12.3897 17.329 12.1989 17.25 12 17.25ZM7.22719 15.7125L5.10562 17.8331C4.96489 17.9739 4.88583 18.1647 4.88583 18.3638C4.88583 18.5628 4.96489 18.7536 5.10562 18.8944C5.24636 19.0351 5.43723 19.1142 5.63625 19.1142C5.83527 19.1142 6.02614 19.0351 6.16687 18.8944L8.2875 16.7728C8.42221 16.631 8.49621 16.4422 8.4937 16.2466C8.4912 16.0511 8.4124 15.8642 8.2741 15.7259C8.1358 15.5876 7.94894 15.5088 7.75337 15.5063C7.5578 15.5038 7.36898 15.5778 7.22719 15.7125ZM6.75 12C6.75 11.8011 6.67098 11.6103 6.53033 11.4697C6.38968 11.329 6.19891 11.25 6 11.25H3C2.80109 11.25 2.61032 11.329 2.46967 11.4697C2.32902 11.6103 2.25 11.8011 2.25 12C2.25 12.1989 2.32902 12.3897 2.46967 12.5303C2.61032 12.671 2.80109 12.75 3 12.75H6C6.19891 12.75 6.38968 12.671 6.53033 12.5303C6.67098 12.3897 6.75 12.1989 6.75 12ZM6.16687 5.10562C6.02614 4.96489 5.83527 4.88583 5.63625 4.88583C5.43723 4.88583 5.24636 4.96489 5.10562 5.10562C4.96489 5.24636 4.88583 5.43723 4.88583 5.63625C4.88583 5.83527 4.96489 6.02614 5.10562 6.16687L7.22719 8.2875C7.36898 8.42221 7.5578 8.49621 7.75337 8.4937C7.94894 8.4912 8.1358 8.4124 8.2741 8.2741C8.4124 8.1358 8.4912 7.94894 8.4937 7.75337C8.49621 7.5578 8.42221 7.36898 8.2875 7.22719L6.16687 5.10562Z"
                fill={props.fill ?? "white"}
            />
        </svg>
    );
};

export const HamburgerIcon = (props: SVGProps) => {
    return (
        <svg className={cn("bars mx-auto", props.className)} viewBox="0 0 100 100" onClick={props.onClick}>
            <path
                className="line top"
                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            ></path>
            <path
                className="line middle"
                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            ></path>
            <path
                className="line bottom"
                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            ></path>
        </svg>
    );
};

export const NotFoundIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={64} width={64} viewBox="0 0 32 32">
            <path
                style={{
                    lineHeight: "normal",
                    textIndent: 0,
                    textAlign: "start",
                    textDecorationLine: "none",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000",
                    textTransform: "none",
                    msBlockProgression: "tb",
                    isolation: "auto",
                    mixBlendMode: "normal",
                }}
                fill="currentColor"
                d="M 19 3 C 13.488997 3 9 7.4889971 9 13 C 9 15.396508 9.8510142 17.597385 11.263672 19.322266 L 3.2929688 27.292969 L 4.7070312 28.707031 L 12.677734 20.736328 C 14.402615 22.148986 16.603492 23 19 23 C 24.511003 23 29 18.511003 29 13 C 29 7.4889971 24.511003 3 19 3 z M 19 5 C 23.430123 5 27 8.5698774 27 13 C 27 17.430123 23.430123 21 19 21 C 14.569877 21 11 17.430123 11 13 C 11 8.5698774 14.569877 5 19 5 z M 16 10 A 1 1 0 0 0 15 11 A 1 1 0 0 0 16 12 A 1 1 0 0 0 17 11 A 1 1 0 0 0 16 10 z M 22 10 A 1 1 0 0 0 21 11 A 1 1 0 0 0 22 12 A 1 1 0 0 0 23 11 A 1 1 0 0 0 22 10 z M 19 14 C 16.792859 14 15.345703 15.244141 15.345703 15.244141 A 1.0001 1.0001 0 1 0 16.654297 16.755859 C 16.654297 16.755859 17.515141 16 19 16 C 20.484859 16 21.345703 16.755859 21.345703 16.755859 A 1.0001 1.0001 0 1 0 22.654297 15.244141 C 22.654297 15.244141 21.207141 14 19 14 z"
                font-weight="400"
                font-family="sans-serif"
                white-space="normal"
                overflow="visible"
            />
        </svg>
    );
};

export const ErrorIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
    );
};
export const CameraOutlineIcon = (props: SVGProps) => {
    return (
        <svg
            onClick={props.onClick}
            height={24}
            width={24}
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
        </svg>
    );
};
export const UserCircleIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
        </svg>
    );
};

export const PencilSquareIcon = (props: SVGProps) => {
    return (
        <svg
            className={props.className}
            height={24}
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
        </svg>
    );
};

export const UserIcon = (props: SVGProps) => {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
        </svg>
    );
};