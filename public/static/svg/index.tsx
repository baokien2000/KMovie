import { cn } from "@/lib/cn";
import React from "react";
interface SVGProps {
    className?: string;
    onClick?: () => void;
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
            stroke-width="1.5"
            stroke={props.fill ?? "#cac9c9"}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke={props.fill ?? "#cac9c9"}
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
        </svg>
    );
};

export const LogoutIcon = () => {
    return (
        <svg className="" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                stroke="#cac9c9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
export const ClockIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#cac9c9"
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
                fill="#000"
                stroke="#000"
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2289)">
                <path
                    d="M11.049 2.92664C11.3483 2.00537 12.6517 2.00538 12.951 2.92664L14.4699 7.60055C14.6038 8.01254 14.9877 8.29148 15.4209 8.29149L20.3354 8.29168C21.3041 8.29172 21.7068 9.53127 20.9232 10.1007L16.9474 12.9895C16.5969 13.2441 16.4503 13.6955 16.5841 14.1075L18.1026 18.7815C18.4019 19.7028 17.3475 20.4689 16.5638 19.8995L12.5878 17.011C12.2373 16.7564 11.7627 16.7564 11.4122 17.011L7.43622 19.8995C6.65252 20.4689 5.5981 19.7028 5.8974 18.7815L7.41589 14.1075C7.54974 13.6955 7.40309 13.2441 7.05263 12.9895L3.07683 10.1007C2.29317 9.53127 2.69592 8.29172 3.66461 8.29168L8.57911 8.29149C9.01231 8.29148 9.39623 8.01254 9.53011 7.60055L11.049 2.92664Z"
                    stroke={props.fill ?? "#111827"}
                    strokeWidth="1"
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

export const FilmIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z"
                stroke="#ffce4f"
                strokeWidth="2"
            />
        </svg>
    );
};

export const ReportIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#fff"
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
            className={props.className + " loader"}
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
