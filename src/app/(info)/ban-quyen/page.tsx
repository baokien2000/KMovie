import MovieListTitle from "@/components/movies/list/movie-list-title";
import { Link } from "@/lib/router-events";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang khiếu nại bản quyền`,
    };
}
export default async function Page() {
    return (
        <main className="md:p-6 sm:p-3 py-3 flex flex-col gap-2 text-sm text-default ">
            <MovieListTitle title="Khiếu nại bản quyền" />
            <div className="px-3 sm:px-0 flex flex-col gap-3">
                <h2 className="font-bold text-base mt-2">1. Trách nhiệm nội dung</h2>
                <p className="mb-1">
                    Website của tôi được tạo ra với mục đích học tập và nghiên cứu. Ttôi không nhận quảng cáo và không có bất kỳ mục đích thương mại
                    nào. Nội dung trên website lấy từ nguồn cung cấp dữ liệu công khai trên mạng xã hội, vì vậy trách nhiệm về nội dung thuộc về người
                    cung cấp dữ liệu phim. Tôi sẽ thường xuyên kiểm tra các nội dung trên trang và loại bỏ các nội dung vi phạm bản quyền, nội dung
                    quảng cáo, spam, nội dung xúc phạm, và các nội dung trái với các quy định pháp luật.
                </p>
                <h2 className="font-bold text-base">2. Bản quyền</h2>
                <p className="mb-1">
                    Là một trang web về thông tin giải trí, nhưng tôi không cam kết chắc chắn rằng có thể kiểm soát mọi thông tin trên trang web. Bất
                    kỳ hành vi xâm phạm đến bản quyền nào nếu được báo cáo sẽ bị gỡ bỏ khỏi trang web trong thời gian sớm nhất.
                </p>
                <h2 className="font-bold text-base">3. Sở hữu trí tuệ</h2>

                <p className="mb-1">
                    Mọi nội dung được đăng tải trên website, bao gồm thiết kế, logo, các phần mềm, chức năng kỹ thuật, cấu trúc trang đều thuộc bản
                    quyền của website . Nghiêm cấm mọi sao chép, sửa đổi, trưng bày, phân phát, chuyển tải, tái sử dụng, xuất bản, bán, cấp phép, tái
                    tạo hay sử dụng bất cứ nội dung nào của trang web cho bất kỳ mục đích nào mà không có sự xác nhận của tôi.
                </p>
                <h2 className="font-bold text-base">4. Quy trình báo cáo vi phạm bản quyền</h2>
                <p className="mb-1">
                    Nếu bạn tin rằng bất kỳ nội dung nào trên website của tôi vi phạm quyền sở hữu trí tuệ của bạn, vui lòng thông báo cho tôi về việc
                    vi phạm bản quyền qua trang{" "}
                    <Link className="text-mainColor" href="/lien-he">
                        liên hệ
                    </Link>{" "}
                    (Chú ý trong nội dung phải có chi tiết thông tin liên hệ và đường link nội dung vi phạm bản quyền trên website ). Tôi sẽ xử lý
                    thông báo vi phạm bản quyền mà tôi nhận được sớm nhất có thể.
                </p>
            </div>
        </main>
    );
}
