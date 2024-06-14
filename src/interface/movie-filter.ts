
type filterType = "category" | "year" | "episode" | "status";
interface IFilter { 
    id: filterType;
    name: string;
}
export const MovieFilterName = new Map([
    ["category", "Thể loại"],
    ["year", "Năm"],
    ["type", "Loại"],
  ["status", "Trạng thái"],
    ["country", "Quốc gia"],
    ["sort", "Sắp xếp"],
  ]);

  export const MovieFilterSort = new Map([
    ["newest", "Mới nhất"],
    ["view", "Lượt xem"],
    ["comment", "Bình luận"],
    ["rate", "Đánh giá"],
  ]);
