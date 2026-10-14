export const SITE_CONFIG = {
  brandName: "RutVi24H",
  legalName: "Dịch Vụ Rút Ví Trả Sau & Tài Chính Số 24H",
  tagline: "Quy đổi hạn mức Ví Trả Sau sang tiền mặt an toàn, bảo mật 100%, giải ngân 2-3 phút",
  hotline: "0869098696",
  hotlineFormatted: "0869 098 696",
  zaloUrl: "https://zalo.me/0869098696",
  zaloPhone: "0869.098.696",
  addressHanoi: "Đường Láng, Phường Láng Thượng, Quận Đống Đa, Hà Nội",
  addressShort: "Đường Láng, Đống Đa - Hà Nội",
  officeImage: "/van-phong-lang.jpg",
  logoIcon: "/logo-icon.png",
  logoFull: "/logo-full-horizontal.png",
  logoText: "/logo-text.png",
  ogImage: "/og-cover.png",
  workingHours: "24/7 (Cả Thứ Bảy, Chủ Nhật & Ngày Lễ)",
  minFeePercent: 1.6,
  baseFeeOnline: 7.8,
  baseFeeOffline: 9.3,
};

export const STATS = [
  { value: "10.000+", label: "Khách hàng tin chọn", icon: "Users" },
  { value: "2-3 Phút", label: "Thời gian giải ngân TB", icon: "Clock" },
  { value: "100%", label: "Không giữ mã OTP/Mật khẩu", icon: "ShieldCheck" },
  { value: "24/7", label: "Hỗ trợ xuyên đêm & Lễ Tết", icon: "Zap" },
];

export const WALLETS_DATA = [
  {
    id: "momo_trasau",
    name: "Ví Trả Sau MoMo",
    provider: "Ngân hàng TPBank / Shinhan Bank",
    category: "popular",
    maxLimit: "20.000.000đ",
    feeRange: "Từ 5.0% - 7.0%",
    speed: "2 - 3 phút",
    badge: "Phổ biến nhất",
    color: "#d82d8b",
    logo: "/wallets/momo.png",
    features: [
      "Miễn lãi ngân hàng tới 45 ngày",
      "Thanh toán qua quét mã hóa đơn",
      "Tiền về tài khoản ngay lập tức"
    ]
  },
  {
    id: "zalopay_trasau",
    name: "Tài Khoản Trả Sau ZaloPay",
    provider: "Ngân hàng CIMB Bank Việt Nam",
    category: "popular",
    maxLimit: "20.000.000đ",
    feeRange: "Từ 5.0% - 7.0%",
    speed: "2 - 3 phút",
    badge: "Khuyên dùng",
    color: "#0068ff",
    logo: "/wallets/zalopay.png",
    features: [
      "Không chứng minh thu nhập",
      "Xử lý trực tiếp trên ứng dụng Zalo",
      "Bảo mật tài khoản 100%"
    ]
  },
  {
    id: "tiktok_paylater",
    name: "TikTok PayLater",
    provider: "TikTok & Đối tác Tài chính",
    category: "popular",
    maxLimit: "20.000.000đ",
    feeRange: "Từ 10% - 12%",
    speed: "2 - 3 phút",
    badge: "Xu hướng mới",
    color: "#010101",
    logo: "/wallets/tiktok.png",
    features: [
      "Quy đổi qua đơn hàng TikTok Shop",
      "Xử lý nhanh chóng không giữ OTP",
      "Tiền chuyển thẳng về tài khoản ngân hàng"
    ]
  },
  {
    id: "fe_paylater",
    name: "FE PayLater (FE Credit)",
    provider: "Tài chính FE Credit (VPBank SMBC)",
    category: "bnpl",
    maxLimit: "20.000.000đ",
    feeRange: "Từ 9% - 12%",
    speed: "2 - 4 phút",
    badge: "Hạn mức cao",
    color: "#008853",
    logo: "/wallets/fepaylater.png",
    features: [
      "Hạn mức tài chính linh hoạt từ FE Credit",
      "Xác thực nhanh gọn, an toàn 100%",
      "Hỗ trợ giải ngân online & trực tiếp 24/7"
    ]
  },
  {
    id: "kredivo_bnpl",
    name: "Hạn Mức Kredivo",
    provider: "Kredivo & Công ty Tài chính VietCredit",
    category: "bnpl",
    maxLimit: "50.000.000đ",
    feeRange: "Từ 7.8% - 9.0%",
    speed: "3 - 5 phút",
    badge: "Hạn mức cao",
    color: "#f97316",
    logo: "/wallets/kredivo.png",
    features: [
      "Hạn mức lớn dành cho tài khoản chuẩn",
      "Hỗ trợ kỳ hạn linh hoạt",
      "Xác nhận qua mã thanh toán hợp lệ"
    ]
  },
  {
    id: "spaylater_shopee",
    name: "SPayLater (ShopeePay)",
    provider: "Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)",
    category: "bnpl",
    maxLimit: "25.000.000đ",
    feeRange: "Từ 8.0% - 9.2%",
    speed: "2 - 4 phút",
    badge: "Tiện lợi",
    color: "#ee4d2d",
    logo: "/wallets/spaylater.png",
    features: [
      "Quy đổi qua đơn hàng dịch vụ thật",
      "Không ảnh hưởng điểm tín dụng",
      "Giải ngân tài khoản ngân hàng chính chủ"
    ]
  },
  {
    id: "viettel_money",
    name: "Viettel Money Trả Sau",
    provider: "Viettel & Ngân hàng Quân Đội (MBBank)",
    category: "popular",
    maxLimit: "15.000.000đ",
    feeRange: "Từ 7.8% - 8.8%",
    speed: "2 - 3 phút",
    badge: "Ổn định",
    color: "#e11d48",
    logo: "/wallets/viettelmoney.png",
    features: [
      "Hệ thống viễn thông ổn định cao",
      "Thao tác dễ dàng trên app Viettel Money",
      "Hỗ trợ rút toàn quốc 24/7"
    ]
  },
  {
    id: "credit_card",
    name: "Thẻ Tín Dụng Quốc Tế",
    provider: "Visa / Mastercard / JCB mọi ngân hàng",
    category: "card",
    maxLimit: "Theo hạn mức thẻ",
    feeRange: "Từ 1.6% - 2.2%",
    speed: "1 - 2 phút",
    badge: "Phí siêu rẻ",
    color: "#1e293b",
    logo: "/wallets/creditcard.png",
    features: [
      "Đáo hạn & Rút tiền mặt POS/Online",
      "Hưởng trọn thời gian miễn lãi 45-55 ngày",
      "Tích lũy điểm thưởng và dặm bay"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Liên Hệ Tư Vấn",
    desc: "Khách hàng nhắn tin Zalo hoặc gọi Hotline 0869.098.696 thông báo loại ví (MoMo, ZaloPay, Kredivo...) và số tiền cần rút.",
    time: "Ngay tức thì"
  },
  {
    step: "02",
    title: "Báo Phí Minh Bạch",
    desc: "Chuyên viên tư vấn báo phí trọn gói rõ ràng, không phụ phí ẩn, sau đó gửi mã thanh toán hóa đơn hợp lệ.",
    time: "1 phút"
  },
  {
    step: "03",
    title: "Chủ Động Thanh Toán",
    desc: "Khách hàng tự thao tác quét mã thanh toán ngay trên ứng dụng ví của mình. Tuyệt đối KHÔNG cung cấp OTP hay mật khẩu.",
    time: "30 giây"
  },
  {
    step: "04",
    title: "Xác Nhận Hóa Đơn",
    desc: "Hệ thống kiểm tra xác nhận giao dịch thanh toán hóa đơn thành công trên cổng dữ liệu đối tác.",
    time: "1 - 2 phút"
  },
  {
    step: "05",
    title: "Nhận Tiền Ngay",
    desc: "RutVi24H chuyển khoản 100% số tiền thực nhận vào tài khoản ngân hàng chính chủ của quý khách trong 30 giây.",
    time: "30 giây nổ tiền"
  }
];

export const FEE_TIERS = [
  {
    limitRange: "Dưới 2.000.000 VNĐ",
    feeRate: "Từ 7.0%",
    time: "2 - 3 phút",
    supportType: "Online & Tại Quầy",
    note: "Phù hợp tiêu dùng cấp bách"
  },
  {
    limitRange: "Từ 2.000.000 - 5.000.000 VNĐ",
    feeRate: "Từ 6.2%",
    time: "2 - 3 phút",
    supportType: "Online & Tại Quầy",
    note: "Mức rút phổ biến nhất"
  },
  {
    limitRange: "Từ 5.000.000 - 10.000.000 VNĐ",
    feeRate: "Từ 5.6%",
    time: "2 - 3 phút",
    supportType: "Online & Tại Quầy",
    note: "Chiết khấu tối ưu chi phí"
  },
  {
    limitRange: "Trên 10.000.000 - 50.000.000 VNĐ",
    feeRate: "Từ 5.0% (Ưu đãi VIP)",
    time: "3 - 5 phút",
    supportType: "Online & Tại Quầy",
    note: "Cam kết phí cạnh tranh số 1 thị trường"
  }
];

export const SECURITY_COMPARISON = {
  legit: [
    "Khách hàng tự tay cầm điện thoại quét mã thanh toán dịch vụ thật.",
    "Tuyệt đối KHÔNG bao giờ hỏi mật khẩu, mã PIN đăng nhập ví.",
    "Tuyệt đối KHÔNG bao giờ yêu cầu gửi mã OTP gửi về tin nhắn SMS.",
    "Tuyệt đối KHÔNG giữ thẻ căn cước (CCCD) hay bất kỳ tài sản cá nhân nào.",
    "Báo phí trọn gói 1 lần trước khi làm, không trừ thêm tiền sau giao dịch.",
    "Có điểm giao dịch văn phòng trực tiếp rõ ràng tại Đường Láng (Đống Đa - Hà Nội)."
  ],
  scam: [
    "Yêu cầu khách hàng gửi ảnh 2 mặt CCCD và thông tin tài khoản cá nhân.",
    "Bắt khách gửi mã OTP để 'hỗ trợ kích hoạt' hoặc 'xử lý hộ trên hệ thống'.",
    "Đòi cung cấp mật khẩu ví điện tử hoặc mật khẩu Smart OTP ngân hàng.",
    "Chào mời mức phí rẻ bất thường (1% - 2%) rồi cắt liên lạc sau khi nhận mã.",
    "Thu thêm các khoản 'phí kích hoạt hệ thống', 'phí bảo hiểm hạn mức' vô căn cứ.",
    "Địa chỉ ảo, tài khoản Zalo ảo, chặn liên lạc ngay khi khách vừa thanh toán xong."
  ]
};

export const FAQ_DATA = [
  {
    question: "Dịch vụ rút ví trả sau tại RutVi24H hỗ trợ những loại ví nào?",
    answer: "RutVi24H hỗ trợ chuyển đổi hạn mức tất cả các ví và dịch vụ Mua trước trả sau (BNPL) phổ biến nhất hiện nay: Ví Trả Sau MoMo, Tài khoản Trả Sau ZaloPay, TikTok PayLater, FE PayLater (FE Credit), Hạn mức Kredivo, Shopee SPayLater và Viettel Money Trả Sau. Chúng tôi cũng hỗ trợ rút tiền mặt và đáo hạn thẻ tín dụng quốc tế Visa/Mastercard/JCB."
  },
  {
    question: "Rút ví trả sau có yêu cầu gửi mã OTP hay mật khẩu tài khoản không?",
    answer: "TUYỆT ĐỐI KHÔNG. RutVi24H cam kết 100% KHÔNG bao giờ yêu cầu khách hàng cung cấp mật khẩu, mã PIN hay mã OTP. Bạn là người trực tiếp cầm điện thoại mở app ví cá nhân để quét mã thanh toán hóa đơn mua sắm dịch vụ hợp lệ. Tài khoản và thông tin cá nhân của bạn hoàn toàn bảo mật."
  },
  {
    question: "Thời gian xử lý và nhận tiền mặt chuyển khoản mất bao lâu?",
    answer: "Toàn bộ quy trình diễn ra siêu tốc chỉ từ 2 đến 3 phút. Sau khi bạn hoàn tất quét mã hóa đơn trên app ví, hệ thống của RutVi24H sẽ kiểm tra và giải ngân tiền mặt ngay tức thì vào số tài khoản ngân hàng chính chủ của bạn (nhận tiền trong 30 giây qua chuyển khoản 24/7 Napas)."
  },
  {
    question: "Phí rút ví trả sau là bao nhiêu? Có phát sinh phụ phí ẩn không?",
    answer: "Mức phí quy đổi tại RutVi24H chỉ từ 6.8% đến 8.5% tùy thuộc vào loại ví và hạn mức giao dịch (hạn mức càng lớn, mức chiết khấu càng ưu đãi). Chúng tôi cam kết báo giá trọn gói 100% trước khi làm, tuyệt đối không có phí ẩn, không phí chuyển khoản và không phát sinh bất kỳ khoản tiền nào khác."
  },
  {
    question: "Tôi ở Hà Nội có thể đến giao dịch trực tiếp tại quầy được không?",
    answer: "Hoàn toàn được! Quý khách tại Hà Nội có thể ghé điểm hỗ trợ trực tiếp tại khu vực Đường Láng (Quận Đống Đa, gần Ngã Tư Sở và Cầu Giấy, Hà Nội) để nhân viên hỗ trợ thao tác, xuất biên nhận rõ ràng và phục vụ chu đáo. Ngoài ra, chúng tôi phục vụ giao dịch Online 24/7 cho khách hàng trên toàn quốc."
  },
  {
    question: "Rút ví trả sau có bị khóa tài khoản hoặc nợ xấu không?",
    answer: "Hoàn toàn an toàn. Quy trình của RutVi24H dựa trên việc thanh toán các hóa đơn mua sắm hàng hóa/dịch vụ tiện ích hợp lệ, hoàn toàn phù hợp với chính sách sử dụng ví trả sau. Miễn là bạn thanh toán lại số tiền đã tiêu cho ví đúng hạn hàng tháng thì điểm tín dụng CIC của bạn sẽ luôn tốt và còn được ngân hàng xem xét tăng hạn mức."
  },
  {
    question: "Dịch vụ có hỗ trợ vào ban đêm, ngày lễ hoặc cuối tuần không?",
    answer: "Có. Đội ngũ nhân viên trực tuyến của RutVi24H làm việc xuyên suốt 24/7/365, kể cả lúc nửa đêm, ngày Thứ Bảy, Chủ Nhật và các dịp Lễ, Tết. Bất cứ khi nào bạn có nhu cầu tài chính khẩn cấp, chỉ cần nhắn tin qua Zalo 0869.098.696 sẽ có chuyên viên hỗ trợ giải ngân ngay."
  }
];

export const BLOG_GUIDES = [
  {
    id: "bi-quyet-rut-vi-momo-an-toan",
    title: "Hướng Dẫn Rút Ví Trả Sau MoMo An Toàn, Tránh Bị Khóa Tài Khoản 2026",
    summary: "Những nguyên tắc vàng khi quy đổi hạn mức MoMo, cách tận dụng thời gian miễn lãi lên tới 45 ngày của ngân hàng TPBank mà không phát sinh phí phạt.",
    category: "Mẹo Ví MoMo",
    readTime: "4 phút đọc",
    author: "Chuyên gia tài chính RutVi24H",
    date: "11/10/2026"
  },
  {
    id: "nhan-biet-bay-lua-dao-rut-vi",
    title: "Cảnh Báo 5 Thủ Đoạn Lừa Đảo Rút Ví Trả Sau Tinh Vi Cần Tránh Xa",
    summary: "Nhận diện ngay các đối tượng mạo danh đòi mã OTP, thu phí trước, hoặc tạo đường link độc hại nhằm chiếm đoạt tài khoản ví của bạn.",
    category: "Bảo Mật & Cảnh Báo",
    readTime: "5 phút đọc",
    author: "Ban An Toàn Thông Tin",
    date: "09/10/2026"
  },
  {
    id: "tang-han-muc-kredivo-spaylater",
    title: "Cách Kích Hoạt & Nâng Hạn Mức Kredivo, SPayLater Lên 25 - 50 Triệu",
    summary: "Bí quyết duy trì lịch sử thanh toán đẹp, tăng điểm tín dụng cá nhân để được cấp hạn mức tối đa từ các nền tảng Mua trước trả sau.",
    category: "Cẩm Nang BNPL",
    readTime: "3 phút đọc",
    author: "Đội ngũ Tư Vấn",
    date: "05/10/2026"
  }
];
