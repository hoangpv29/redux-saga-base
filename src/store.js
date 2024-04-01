// Import các hàm và middleware từ thư viện Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Import rootReducer và rootSaga từ các file tương ứng
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// Tạo middleware saga
const sagaMiddleware = createSagaMiddleware();

// Tạo store Redux và cấu hình middleware saga
const store = configureStore({
  reducer: rootReducer, // Sử dụng rootReducer đã được kết hợp từ các reducers
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Sử dụng middleware saga
});

// Chạy sagaMiddleware với rootSaga
sagaMiddleware.run(rootSaga);

// Export store để sử dụng trong ứng dụng React
export default store;