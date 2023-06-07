# ReactJS

## 1. React.js là gì
- React.js là một thư viện Javascript để xây dựng giao diện người dùng, được phát triển ban đầu từ Facebook và đóng góp bởi cộng đồng lập trình viên trên thế giới.

- React.js có thể sử dụng để viết phần nền cho single-page hoặc ứng dụng di động, giúp trang lấy và xử lý dữ liệu được tối ưu hơn các phương pháp khác.

- React.js thích hợp với các ứng dụng lớn, khả năng mở rộng ở tương lai.

Điểm mạnh của React.js dễ thấy nhất là phần Component:

- React.js chia nhỏ các phần của trang thành từng phần riêng biệt để xử lý, gọi là component, giúp dễ quản lý, dễ sử dụng ở nhiều nơi.

- Mỗi khi dữ liệu được cập nhật mới, thay vì thay đổi nguyên trang, thì React.js sẽ giúp thay đổi chỉ component liên quan, việc này sẽ tối ưu rất nhiều thời gian làm mới dữ liệu.

- Đặc biệt là hầu hết các component thường dùng đã được phát triển và chia sẻ, chỉ cần cài đặt và sử dụng.
...

Điểm "không mạnh" của React.js có lẽ là ... khó học đối với một số bạn mới tiếp xúc lần đầu, hoặc với những bạn đã quen với cách viết các thư viện khác như jQuery.

## 2. React.js render HTML

- Render là việc hiển thị nội dung lên trình duyệt. Nội dung có thể được viết từ HTML, Javascript hay PHP,... Kết quả cuối cùng là hiển thị nội dung đó trên trình duyệt cho người dùng sử dụng.

- Với React.js thì nội dung layout bạn viết không phải nằm ở trang HTML, mà được viết bên trong file Javascript, file HTML chỉ là cầu nối giúp nội dung Javascript "liên kết" với trình duyệt.

### 2.1. Nội dung thư mục react-project

Sau khi hoàn thành cài đặt React, ta sẽ được cấu trúc sau:

- node_modules chứa nội dung cài đặt, tất cả cài đặt sẽ được lưu tại đây, chúng ta không thao tác trong thư mục này nhé.

- public chứa tất cả file output, là các file sẽ tương tác trực tiếp với trình duyệt như: HTML, image, ...

- src chứa tất cả các file input, đây là các file mà chúng ta sẽ code nội dung, thao tác phần lớn ở những file này, gồm các file Javascript, CSS,...

### 2.2. Cách React render nội dung HTML ra trình duyệt

- File /src/index.js lấy nội dung từ function App của file /src/App.js render ra nội dung trả về id="root" của file /public/index.html, sau đó hiển thị nội dung này ra trình duyệt.

![alt](https://hocwebchuan.com/tutorial/reactjs/images/img_reactjs_html_render01.png)

## 3. JSX

- JSX (Javascript XML), là cấu trúc XML được viết bên trong cấu trúc Javascript (HTML cũng được viết theo cấu trúc XML), do đó có thể hiểu đơn giản hơn là JSX giống như cách viết HTML bên trong cấu trúc Javascript.

- Ngoài ra JSX chống tấn công kiểu injection, do mặc định React DOM sẽ loại bỏ những ký tự đặc biệt trong bất kì giá trị nào được nhúng vào JSX trước khi được render, việc này giúp ngăn chặn phương thức tấn công XSS (cross site scripting).

## 4. React.js Component

- React chia nhỏ các phần của trang thành từng phần riêng biệt, gọi là component, ví dụ như các phần: header, footer, sidebar, navigation, itemList, ... .

- Tính chất của component giống như một hàm (function) Javascript, có thể tái sử dụng ở nhiều nơi khác nhau.

### Cách viết một component (component mẫu trong App.js, render trong index.js)

- Viết dưới dạng function (hoặc Class), và function luôn được return.

- Bên trong return luôn tồn tại tag bao ngoài tất cả (tag wrap).

- Sử dụng thư viện React.DOM để render một component.

- Function render phải có cấu trúc XML, viết dưới dạng <Tên /> hoặc <Tên></Tên>

## 5. React.js Props

- Component thực chất là một function Javascript (hoặc class), phương thức truyền giá trị giữa các function này được gọi là props, chúng được React xử lý và trả kết quả hiển thị trên trình duyệt.

### Cách viết một React.js Props

- [Link đến React.js Props](https://hocwebchuan.com/tutorial/reactjs/reactjs_props.php)

## 6. React.js props xử lý data

- [Link đến React.js props xử lý data](https://hocwebchuan.com/tutorial/reactjs/reactjs_props_data.php)

## 7. React.js component xử lý data

- [Link đến React.js component xử lý data](https://hocwebchuan.com/tutorial/reactjs/reactjs_props_component_data.php)

## 8. Props - arrow function

- [Link đến Props - arrow function](https://hocwebchuan.com/tutorial/reactjs/reactjs_props_by_arrow_function.php)

## 9. React.js Props by Class (Không viết theo kiểu Class???)

## 10. React.js State

- Giá trị của Props không thay đổi, chỉ truyền từ component này sang component khác.

- Tuy nhiên trong thực tế, bản thân component đôi lúc cũng cần xử lý dữ liệu riêng của nó, ví dụ thay đổi thông tin dữ liệu như name, ... do đó React đã cho ra đời khái niệm State để giải quyết bài toán về dữ liệu bên trong component.

[Link đến React.js State](https://hocwebchuan.com/tutorial/reactjs/reactjs_state.php)

## 11. React.js setState

Muốn thay đổi hay cập nhật nội dung của một State, chúng ta sử dụng this.setState, khi này dữ liệu thay đổi sẽ được cập nhật tới State hiện tại.

[Link đến React.js setState](https://hocwebchuan.com/tutorial/reactjs/reactjs_setstate.php)

## 12. Component Lifecycle là gì?

Component có thể được viết theo kiểu của vòng đời như sau:
- Tạo vòng đời (Mount trên DOM)
- Cập nhật vòng đời (Updating)
- Kết thúc vòng đời (Unmount từ DOM)
Quá trình trên được gọi là Component lifecycle (vòng đời của một component).

[Link đến Component Lifecycle](https://hocwebchuan.com/tutorial/reactjs/reactjs_component_lifecyrcle.php)

# ES6

## 1. ES6 là gì?

- ES6 (ECMAScript 6) Một phiên bản nâng cao của Javascript, hiện tại ES6 được phần lớn các thư viện hay JS Frameworks sử dụng như: React.js, AngularJS, NodeJS, ...

- Do phiên bản ES6 được cập nhật vào năm 2015, do đó một số trình duyệt sẽ không đọc được một số câu lệnh trong ES6, để giải quyết vấn đề này, ta cần sử dụng thư viện Babel.

## 2. ES6 variables

ES6 có thể cách khai báo giá trị cho một biến bằng cách sử dụng: var, let, const. Tùy vào điều kiện cụ thể mà sử dụng cách khai báo cho phù hợp.

- var đã có từ các phiên bản Javascript trước đây, khai báo có 2 dạng toàn cục - global (ảnh hưởng mọi nơi) và địa phương - local (chỉ ảnh hưởng bên trong function).

- let có từ phiên bản ES6, sử dụng như var, tuy nhiên có tác dụng phạm vi bên trong một khối (như bên trong câu điều kiện if, vòng lặp for, ...).

- const sử dụng như let, tuy nhiên const có giá trị không đổi trong suốt ứng dụng.

## 3. ES6 default parameters

- Tham số mặc định (default parameters) cho phép các tham số mang giá trị mặc định nếu tham số không có giá trị hoặc giá trị không xác định (undefined).

- Hoặc có thể hiểu tham số mặc định là tham số ban đầu được gán cho function.

## 4. Spread syntax

- Cú pháp spread cho phép một phép lặp lại các phần tử của mãng (array) hay đối tượng (object).

- Cú pháp spread được thể hiện dưới dạng dấu ...

## 5. Rest parameters

- Tham số "còn lại" (rest parameters), là tham số đại diện cho những tham số không được khai báo.

- Khi sử dụng khai báo đại diện bên trong một function thì khi gọi function sẽ không giới hạn giá trị truyền vào.

- Đại diện này được ký hiệu bằng khai báo ...name (cẩn thận coi chừng nhầm lẫn với spread syntax).

## 6. ES6 Destructuring (phá vỡ cấu trúc).

- Destructuring (phá vỡ cấu trúc) cho phép chúng ta dễ dàng sử dụng các giá trị phần tử của Array hoặc Object.

- Destructuring rất hữu dụng khi làm việc với function có đối số.

## 7. ES6 arrow function

- ES6 arrow function, viết function dưới dạng mũi tên =>.

- Cách viết này linh hoạt, tùy biến function hơn so với cách viết cũ.

## 8. ES6 Classes

- Classes là một dạng function đặc biệt, thay vì sử dụng từ function thì chúng ta sử dụng class và thuộc tính được gán bên trong phương thức constructor().

- Classes có tính kế thừa (inheritance), dễ dàng kế thừa tất cả phương thức từ Classes đã có trước đó.

## 9. Javascript - export & import

Để dễ làm việc, quản lý các chức năng file javascript, chúng ta thường tách các phần riêng biệt ra riêng từng file khác nhau, khi đó nhu cầu lồng ghép các function của file này vào file kia để sử dụng các function đã có là khó tránh khỏi, khi này ta sẽ sử dụng:

- Câu lệnh export để các file chấp nhận việc xuất các function

- Câu lệnh import để file liên kết với các function của file được export.

Javascript - export & import có 2 dạng là theo mặc định (default), và theo tên (name)


