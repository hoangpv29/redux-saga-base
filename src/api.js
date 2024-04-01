// Định nghĩa hàm fetchData trong module api, giả sử đây là hàm gọi API lấy dữ liệu
export const api = {
  fetchData: async () => {
    return [
      { id: 1, name: "hoangpham" },
      { id: 2, name: "congtran" },
      { id: 3, name: "nguyenvan" },
      { id: 4, name: "nguyenvan1" },
      { id: 5, name: "nguyenvan2" },
      { id: 6, name: "nguyenvan3" },
    ];
  },
};