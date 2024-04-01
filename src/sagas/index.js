// Import các hàm và các hiệu ứng từ thư viện redux-saga
import { takeEvery, put, call } from "redux-saga/effects";

// Import các hành động liên quan đến việc lấy dữ liệu từ API
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from "../actions";

// Import hàm fetchData từ module api
import { api } from "../api";

// Hàm saga để lấy dữ liệu từ API và xử lý kết quả
function* fetchDataSaga() {
  try {
    // Gọi hàm fetchData từ module api và lưu kết quả vào biến data
    const data = yield call(api.fetchData);
    // Dispatch một hành động thành công với dữ liệu được lấy từ API
    yield put(fetchDataSuccess(data));
  } catch (error) {
    // Nếu có lỗi xảy ra, dispatch một hành động thất bại với thông điệp lỗi
    yield put(fetchDataFailure(error));
  }
}

// Hàm rootSaga để theo dõi tất cả các hành động FETCH_DATA và gọi fetchDataSaga khi có hành động này được gọi
function* rootSaga() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
}

// Export rootSaga để sử dụng trong cấu hình saga của store
export default rootSaga;