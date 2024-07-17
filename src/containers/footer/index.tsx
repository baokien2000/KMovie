import React from "react";
import Lincese from "./lincese";
import { Link } from "@/lib/router-events";
import Image from "next/image";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon.png";
import LinkList from "./link-list";
const NewMovieLinks = [
    { name: "Khoa học", href: "/the-loai/khoa-hoc" },
    { name: "Hành động", href: "/the-loai/hanh-dong" },
    { name: "Hoạt hình", href: "/the-loai/hoat-hinh" },
    { name: "Kinh dị", href: "/the-loai/kinh-di" },
];
const CountyMovieLinks = [
    { name: "Phim Nhật Bản", href: "/quoc-gia/nhat-ban" },
    { name: "Phim Trung Quuốc", href: "/quoc-gia/trung-quoc" },
    { name: "Phim Hàn Quốc", href: "/quoc-gia/han-quoc" },
    { name: "Phim Mỹ", href: "/quoc-gia/my" },
];
const InfoLinks = [
    { name: "Giới thiệu", href: "/gioi-thieu" },
    { name: "Liên hệ", href: "/lien-he" },
    { name: "Chính sách riêng tư", href: "/chinh-sach-rieng-tu" },
    { name: "Khiếu nại bản quyền", href: "/ban-quyen" },
];
const Footer = () => {
    return (
        <footer className="text-default mx-auto border-des border-t  w-full md:px-6 px-3  text-xs sm:text-sm ">
            <div className=" justify-between items-center flex-col laptopSmall:flex-row gap-3 flex max-w-screen-laptop mx-auto laptopSmall:py-10 py-6 ">
                <div className="flex flex-col gap-2 text-[13px] max-w-full laptopSmall:max-w-[500px]">
                    <Link href={"/"} className=" w-fit cursor-pointer h-fit min-h-[36px] ">
                        <Image
                            sizes="240px"
                            priority
                            height={36}
                            width={120}
                            className="block object-contain -ml-[5.5px] w-[120px] max-w-[120px]  h-9 "
                            alt="Logo"
                            src={Logo}
                        />
                    </Link>
                    <p className="text-left ">
                        <b className="text-mainColor">Kmovie</b> - Nền tảng xem phim trực tuyến hàng đầu với hàng ngàn bộ phim đa dạng, miễn phí.
                        Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú. Khám phá ngay các bộ phim
                        hot nhất và trải nghiệm công nghệ xem phim tiên tiến cùng Kmovie.
                    </p>
                    <p className="">
                        ©2024, Developed by <a href="/#">baokien.tang</a>
                    </p>
                </div>
                <div className="w-full gap-3 flex laptopSmall:justify-evenly justify-start">
                    <LinkList links={NewMovieLinks} title="Phim mới" />
                    <LinkList links={CountyMovieLinks} title="Phim hay" className="hidden sm:flex" />
                    <LinkList links={InfoLinks} title="Thông tin" />
                </div>
            </div>

            {/* <Lincese /> */}
        </footer>
    );
};

export default Footer;
