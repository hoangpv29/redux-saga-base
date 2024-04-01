Báo cáo về generator function js và midderware của redux saga

1h tìm hiểu về generator function 4h – 5h
Generator là object được trả về từ generator function.
Generator không thể được tạo ra trực tiếp.

generator function là
Hàm có thể dừng giữa chừng và tiếp tục sau.
Mỗi lần gọi, hàm sẽ được thực thi cho đến khi gặp lệnh yield hoặc return

Method Desc Return
Next() Tiếp tục thực thi hàm cho đến khi gặp yield or return {value:2,done:true/false}
Return() Dừng generator func và return két quả {value:2,done: true}
Throw() Dừng generator func và trả về lỗi {value: undefined, done: true}
1 vài ví dụ

---------------Redux saga----------------
Redux saga laf moojt thuw vieejn redux middleware, giúp giản lý những side effect trong ud redux trở lên đươn giản dễ kiểm soát hơn

• generator function là 1 function có khả năng tạm ngưng trước khi hàm kết thúc (khác với pure function khi được gọi sẽ thực thi hết các câu lệnh trong hàm), và có thể tiếp tục chạy tại một thời điểm khác.
• Chính chức năng mới này giúp ta giải quyết được việc bất đồng bộ, hàm sẽ dừng và đợi async chạy xong rồi tiếp tục thực thi
• Effect: đơn giản là 1 javascript obj chứa thông tin để saga middleware biết cần phải làm gì
• Effect Creator: là 1 func trả về 1 effect. Nó không thực thi cái Effect này, Cái thực thi là saga middleware, chứ không phải Effect Creator.

Effect Creator Trả về Effect chứa thông tingiusp middleWare biết phải làm gì
takeEvery(parttern, saga, ...args) Chạy saga mỗi lần khi có action pattern đc dispatch,dispatch bao nhiêu sẽ chạy bấy nhiêu cái saga
takeLatest(pattern, sagam ...args) Chạy saga, nhưng khi có action pattern mới được dispathc, thì cái saga trước đó sẽ bị cancel
takeLeading(pattern, saga, ...args) Chạy saga khi action pattern được dispatch, những action tiếp theo sẽ bị cancel cho đến khi saga trước đó chạy xong
‘put(action) Dispatch action từ saga
‘call(fn,...args) Gọi hàm dn và truyền tham số args vào hàm đó
‘all([...effects]) Chạy tất cả efects cùng 1 lúc
‘take(pattern) and fork(fn, ...args) Mô hình watcher ... worker, đợi dispatch action pattern thì sẽ thực hiện 1 cái task nào đó
‘throttle(ms, pattern, saga, ...args) Đảm bảo chi chạy saga 1 lần trong khoảng tg ms
‘debounce(ms, pattern, saga, ...args) Debounce cái action pattern, đảm bảo chỉ chạy saga 1 lần sau khi đã đợi khảong thời gian ms
‘retry(maxTries, delay, fn, ...args) Cố gắng gọi lại hàm fn nếu faiel, sau mỗi delay ms, và tối đa chỉ thử maxTries lần

Các kiến thức cơ bản về redux saga
-các method của redux saga gọi là các effect:

- Fork(): Sử dụng cơ chế non-blocking call trên func
  *Call(): gọi func. Nếu nó retrun về một promise, tạm dừng saga cho đến khi promise được giải quyết
  *Take(): Tạm dừng cho đến khi nhận được action
  *Put(): Dùng để dispatch một action
  *takeEvery(): Theo dõi một action nào đó thay đổi thì gọi 1 saga nào đó
  *akeLastest(): Có nghĩa nếu chúng ta thực hiện 1 loạt các action, nó sẽ chit thực thi và trrar lại kết quả của action cuối cùng
  *yield(): Có nghĩa là chạy tuần tự khi nào trả về kết quả mới thực thi tiếp
  \*Select(): Chạy 1 selector func để lấy data từ state
