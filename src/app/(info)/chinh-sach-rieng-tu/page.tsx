import MovieListTitle from "@/components/movies/list/movie-list-title";
import { Link } from "@/lib/router-events";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang chính sách riêng tư`,
    };
}
export default async function Page() {
    return (
        <main className="md:p-6 sm:p-3 py-3 flex flex-col gap-2 text-sm text-default ">
            <MovieListTitle title="Chính sách riêng tư" />
            <div className="px-3 sm:px-0 flex flex-col gap-3">
                <h2 className="font-bold text-base mt-2">1. Cookies</h2>
                <p className="mb-1">
                    Cũng như nhiều website khác, tôi thiết lập và sử dụng cookie để tìm hiểu thêm về cách bạn tương tác với nội dung của chúng tôi và
                    giúp tôi cải thiện trải nghiệm của bạn khi ghé thăm website của tôi, cũng như duy trì thiết lập cá nhân của bạn…
                </p>
                <h2 className="font-bold text-base">2. Thay đổi điều khoản</h2>
                <p className="mb-1">
                    Tôi có thể thay đổi các điều khoản của bản Chính sách bảo vệ riêng tư này cho phù hợp với điều kiện thực tế. Tôi sẽ thông báo về
                    những thay đổi lớn bằng cách đặt thông báo trên website.
                </p>
                <h2 className="font-bold text-base">3. Từ chối bảo đảm</h2>

                <p className="mb-1">
                    Mặc dù Chính sách bảo vệ riêng tư đặt ra những tiêu chuẩn về Dữ liệu và tôi luôn cố gắng hết mình để đáp ứng, tôi không bị buộc
                    phải bảo đảm những tiêu chuẩn đó. Có thể có những nhân tố vượt ra ngoài tầm kiểm soát của tôi và có thể dẫn đến việc Dữ liệu bị
                    tiết lộ. Vì thế, chúng tôi không chịu trách nhiệm bảo đảm Dữ liệu luôn được duy trì ở tình trạng hoàn hảo hoặc không bị tiết lộ.
                </p>
                <h2 className="font-bold text-base">4. Sự đồng ý của bạn</h2>
                <p className="mb-1">Khi sử dụng dịch vụ của website, bạn mặc nhiên chấp nhận điều khoản trong Chính sách bảo vệ riêng tư này</p>
            </div>
        </main>
    );
}
