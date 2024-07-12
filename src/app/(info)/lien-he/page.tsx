import MovieListTitle from "@/components/movies/list/movie-list-title";
import { Link } from "@/lib/router-events";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang liên hệ`,
    };
}
export default async function Page() {
    return (
        <main className="md:p-6 sm:p-3 py-3 flex flex-col gap-2 text-sm text-default ">
            <MovieListTitle title="Liên hệ" />
            <h2 className="font-bold text-base mt-2 px-3 sm:px-0">Gmail: baokien2000@gmail.com</h2>
            <p className="px-3 sm:px-0">(Nếu có vấn đề bản quyền vui lòng liên hệ để gỡ phim xuống…)</p>
        </main>
    );
}
