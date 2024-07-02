export const pageSize = 24;
export const MovieStatus = new Map([
    ["trailer", "Sắp chiếu"],
    ["ongoing", "Đang tiến hành"],
        ["completed", "Hoàn thành"]
]) 
export const status = [
   "trailer",
     "ongoing",
       "completed"
]

export const MovieTabs = [{
    id: "category",
    name: "Thể loại",
    slug: "the-loai",
}, {
    id: "year",
    name: "Năm",
    slug: "nam",
}, {
    id: "country",
    name: "Quốc gia",
    slug: "quoc-gia",
}, {
    id: "series",
    name: "Phim bộ",
    slug: "phim-bo",
}, {
    id: "movie",
    name: "Phim lẻ",
    slug: "phim-le",

}, {
    id: "filter",
    name: "Lọc phim",
    slug: "loc-phim",
    }];
export const sorts = ["newest", "view", "rate", "comment"]
export const types = ["series", "single", "tvshows", "hoathinh", "chieurap","vietsub","thuyetminh"];
export const MovieType = new Map([
    ["series", "Phim Bộ"],
    ["tvshows", "TV Shows"],
    ["hoathinh", "Hoạt Hình"],
    ["single", "Phim Lẻ"],
    ["chieurap", "Phim chiếu rạp"],
    ["vietsub", "Phim Vietsub"],
    ["thuyetminh", "Phim Thuyết Minh"]
])
export const  Categories = [
    {
        name: "Hành Động",
        slug: "hanh-dong",
    },
    {
        name: "Tình Cảm",
        slug: "tinh-cam",
    },
    {
        name: "Hài Hước",
        slug: "hai-huoc",
    },
    {
        name: "Cổ Trang",
        slug: "co-trang",
    },
    {
        name: "Tâm Lý",
        slug: "tam-ly",
    },
    {
        name: "Hình Sự",
        slug: "hinh-su",
    },
    {
        name: "Chiến Tranh",
        slug: "chien-tranh",
    },
    {
        name: "Thể Thao",
        slug: "the-thao",
    },
    {
        name: "Võ Thuật",
        slug: "vo-thuat",
    },
    {
        name: "Viễn Tưởng",
        slug: "vien-tuong",
    },
    {
        name: "Phiêu Lưu",
        slug: "phieu-luu",
    },
    {
        name: "Khoa Học",
        slug: "khoa-hoc",
    },
    {
        name: "Kinh Dị",
        slug: "kinh-di",
    },
    {
        name: "Âm Nhạc",
        slug: "am-nhac",
    },
    {
        name: "Thần Thoại",
        slug: "than-thoai",
    },
    {
        name: "Tài Liệu",
        slug: "tai-lieu",
    },
    {
        name: "Gia Đình",
        slug: "gia-dinh",
    },
    {
        name: "Chính kịch",
        slug: "chinh-kich",
    },
    {
        name: "Bí ẩn",
        slug: "bi-an",
    },
    {
        name: "Học Đường",
        slug: "hoc-duong",
    },
    {
        name: "Kinh Điển",
        slug: "kinh-dien",
    },
]

export const CategoriesSlug = [
    "hanh-dong",
    "tinh-cam",
    "hai-huoc",
    "co-trang",
    "tam-ly",
    "hinh-su",
    "chien-tranh",
    "the-thao",
    "vo-thuat",
    "vien-tuong",
    "phieu-luu",
    "khoa-hoc",
    "kinh-di",
    "am-nhac",
    "than-thoai",
    "tai-lieu",
    "gia-dinh",
    "chinh-kich",
    "bi-an",
    "hoc-duong",
    "kinh-dien",
]
export const categoriesMap = new Map(
    [["hanh-dong", "Hành Động"],
    ["tinh-cam", "Tình Cảm"],
    ["hai-huoc", "Hài Hước"],
    ["co-trang", "Cổ Trang"],
    ["tam-ly", "Tâm Lý"],
    ["hinh-su", "Hình Sự"],
    ["chien-tranh", "Chiến Tranh"],
    ["the-thao", "Thể Thao"],
    ["vo-thuat", "Võ Thuật"],
    ["vien-tuong", "Viễn Tưởng"],
    ["phieu-luu", "Phiêu Lưu"],
    ["khoa-hoc", "Khoa Học"],
    ["kinh-di", "Kinh Dị"],
    ["am-nhac", "Âm Nhạc"],
    ["than-thoai", "Thần Thoại"],
    ["tai-lieu", "Tài Liệu"],
    ["gia-dinh", "Gia Đình"],
    ["chinh-kich", "Chính kịch"],
    ["bi-an", "Bí ẩn"],
    ["hoc-duong", "Học Đường"],
    ["kinh-dien", "Kinh Điển"]
    ]
);
export const years = ["19XX","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
export const countriesSlug = [
    "trung-quoc",
    "han-quoc",
    "nhat-ban",
    "thai-lan",
    "au-my",
    "dai-loan",
    "hong-kong",
    "an-do",
    "anh",
    "phap",
    "canada",
    "quoc-gia-khac",
    "duc",
    "tay-ban-nha",
    "tho-nhi-ky",
    "ha-lan",
    "indonesia",
    "nga",
    "mexico",
    "ba-lan",
    "uc",
    "thuy-dien",
    "malaysia",
    "brazil",
    "philippines",
    "bo-dao-nha",
    "y",
    "dan-mach",
    "uae",
    "na-uy",
    "thuy-si",
    "chau-phi",
    "nam-phi",
    "ukraina",
    "arap-xe-ut",
];
export const countriesMap = new Map([
    ["trung-quoc", "Trung Quốc"],
    ["han-quoc", "Hàn Quốc"],
    ["nhat-ban", "Nhật Bản"],
    ["thai-lan", "Thái Lan"],
    ["au-my", "Âu Mỹ"],
    ["dai-loan", "Đài Loan"],
    ["hong-kong", "Hồng Kông"],
    ["an-do", "Ấn Độ"],
    ["anh", "Anh"],
    ["phap", "Pháp"],
    ["canada", "Canada"],
    ["quoc-gia-khac", "Quốc Gia Khác"],
    ["duc", "Đức"],
    ["tay-ban-nha", "Tây Ban Nha"],
    ["tho-nhi-ky", "Thổ Nhĩ Kỳ"],
    ["ha-lan", "Hà Lan"],
    ["indonesia", "Indonesia"],
    ["nga", "Nga"],
    ["mexico", "Mexico"],
    ["ba-lan", "Ba lan"],
    ["uc", "Úc"],
    ["thuy-dien", "Thụy Điển"],
    ["malaysia", "Malaysia"],
    ["brazil", "Brazil"],
    ["philippines", "Philippines"],
    ["bo-dao-nha", "Bồ Đào Nha"],
    ["y", "Ý"],
    ["dan-mach", "Đan Mạch"],
    ["uae", "UAE"],
    ["na-uy", "Na Uy"],
    ["thuy-si", "Thụy Sĩ"],
    ["chau-phi", "Châu Phi"],
    ["nam-phi", "Nam Phi"],
    ["ukraina", "Ukraina"],
    ["arap-xe-ut", "Ả Rập Xê Út"],
])
export const countries = [
    {
        name: "Trung Quốc",
        slug: "trung-quoc",
    },
    {
        name: "Hàn Quốc",
        slug: "han-quoc",
    },
    {
        name: "Nhật Bản",
        slug: "nhat-ban",
    },
    {
        name: "Thái Lan",
        slug: "thai-lan",
    },
    {
        name: "Âu Mỹ",
        slug: "au-my",
    },
    {
        name: "Đài Loan",
        slug: "dai-loan",
    },
    {
        name: "Hồng Kông",
        slug: "hong-kong",
    },
    {
        name: "Ấn Độ",
        slug: "an-do",
    },
    {
        name: "Anh",
        slug: "anh",
    },
    {
        name: "Pháp",
        slug: "phap",
    },
    {
        name: "Canada",
        slug: "canada",
    },
    {
        name: "Quốc Gia Khác",
        slug: "quoc-gia-khac",
    },
    {
        name: "Đức",
        slug: "duc",
    },
    {
        name: "Tây Ban Nha",
        slug: "tay-ban-nha",
    },
    {
        name: "Thổ Nhĩ Kỳ",
        slug: "tho-nhi-ky",
    },
    {
        name: "Hà Lan",
        slug: "ha-lan",
    },
    {
        name: "Indonesia",
        slug: "indonesia",
    },
    {
        name: "Nga",
        slug: "nga",
    },
    {
        name: "Mexico",
        slug: "mexico",
    },
    {
        name: "Ba lan",
        slug: "ba-lan",
    },
    {
        name: "Úc",
        slug: "uc",
    },
    {
        name: "Thụy Điển",
        slug: "thuy-dien",
    },
    {
        name: "Malaysia",
        slug: "malaysia",
    },
    {
        name: "Brazil",
        slug: "brazil",
    },
    {
        name: "Philippines",
        slug: "philippines",
    },
    {
        name: "Bồ Đào Nha",
        slug: "bo-dao-nha",
    },
    {
        name: "Ý",
        slug: "y",
    },
    {
        name: "Đan Mạch",
        slug: "dan-mach",
    },
    {
        name: "UAE",
        slug: "uae",
    },
    {
        name: "Na Uy",
        slug: "na-uy",
    },
    {
        name: "Thụy Sĩ",
        slug: "thuy-si",
    },
    {
        name: "Châu Phi",
        slug: "chau-phi",
    },
    {
        name: "Nam Phi",
        slug: "nam-phi",
    },
    {
        name: "Ukraina",
        slug: "ukraina",
    },
    {
        name: "Ả Rập Xê Út",
        slug: "arap-xe-ut",
    },
]
