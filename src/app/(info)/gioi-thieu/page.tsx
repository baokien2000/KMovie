import MovieListTitle from "@/components/movies/list/movie-list-title";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang giới thiệu`,
    };
}
export default async function Page() {
    return (
        <main className="md:p-6 sm:p-3 py-3 space-y-3  text-sm text-default ">
            <MovieListTitle title="Giới thiệu" />
            <div className="px-3 sm:px-0 flex flex-col gap-3">
                <p className="">
                    <b className="text-mainColor">Kmovie </b> là website xem phim online và lấy thông tin các bộ phim mới thông qua nhiều nguồn công
                    khai khác nhau trên các diễn đàn và website. Hàng ngàn video HD & FullHD cùng đi đôi với phụ đề vietsub, thuyết minh lồng tiếng
                    đầy đủ đang chờ bạn khám phá.
                </p>
                <p>
                    Kmovie đặc biệt quan tâm đến trải ngiệm của người dùng khi xem phim, do đó trang web được thiết kế đơn giản thân thiện, trực quan,
                    dễ sử dụng, cực nhanh, cực nét, cực mượt.
                </p>
                <p> Chúc các bạn xem phim vui vẻ !</p>
            </div>
        </main>
    );
}
