// Import combineReducers từ thư viện Redux để kết hợp các reducers
import { combineReducers } from "redux";
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../actions";

// Định nghĩa reducer cho trường data trong store
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload; // Trả về dữ liệu từ action
    default:
      return state; // Trả về state mặc định khi không có hành động nào khớp
  }
};

// Định nghĩa reducer cho trường error trong store
const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_DATA_FAILURE:
      return action.payload; // Trả về lỗi từ action
    default:
      return state; // Trả về state mặc định khi không có hành động nào khớp
  }
};

// Kết hợp các reducers lại với nhau thành rootReducer
const rootReducer = combineReducers({
  data: dataReducer,
  error: errorReducer,
});

// Export rootReducer để sử dụng trong store
export default rootReducer;
