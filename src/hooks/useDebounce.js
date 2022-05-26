import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // #1: value là chuỗi rỗng => debounceValue cũng là chuỗi rỗng
    // #2: value là 'h', lần đầu đã lấy initState là 1 chuỗi rỗng nên lần 2 nó sẽ không lấy nữa mà lọt vào useEffect bên dưới
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    // Khi lọt vào useEffect, depedency bị thay đổi, thực hiện việc set lại debounceValue là chữ h với setTimeout thời gian là delay
    // Nếu trong thời gian delay ta tiếp tục gõ thì value tiếp tục  thay đổi lại lọt vào useEffect này và lại tiếp tục bị delay
    // Khi ngừng gõ thì thì nó mới bắt đầu set lại debounceValue

    return debounceValue;
    // #1: Return về debounceValue là 1 chuỗi rỗng
    // #2: Lúc này trong thời gian delay nó vẫn chưa set ngay nên return vẫn là chuỗi rỗng, nếu ta không làm gì thì sau thời gian delay nó set lại debounceValue và return về kết quả
}

export default useDebounce;
