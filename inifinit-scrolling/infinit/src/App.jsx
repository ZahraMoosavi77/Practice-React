import { useState, useRef, useCallback } from "react";
import "./App.css";
import useBookSearch from "./hooks/useBookSearch";
function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);
  const observer = useRef(); // دنبال اخرین المان میگردیم
  const lastBookElementRef = useCallback(
    (node) => {
      //  از یک فانشکن به عنوان رف استفاده میکنیم. که فقط یکبار ساخته میشه که تنها در هر رندر یکبار ساخته میشه و از تکرار مجدد ان جلوگیری میشه
//       چرا از disconnect() استفاده می‌کنیم؟
// در برخی شرایط، شما می‌خواهید که ناظر قبلی (که در observer.current ذخیره شده) را قطع کنید و یک ناظر جدید ایجاد کنید. این کار مخصوصاً زمانی مهم است که بخواهید ناظر را برای یک عنصر دیگر تنظیم کنید یا اینکه ناظر قبلی دیگر کاربردی نباشد (مثلاً وقتی که صفحه جدیدی بارگذاری می‌شود یا صفحه از حالت اسکرول به انتها تغییر می‌کند).

// دلیل استفاده از observer.current.disconnect() این است که می‌خواهید تمام ناظرهای قبلی را قطع کنید و از ایجاد ناظرهای متعدد یا تداخل‌ها جلوگیری کنید. اگر این کار را نکنید، ممکن است چندین ناظر به طور همزمان فعال شوند که باعث مشکلاتی مانند تداخل یا بار اضافه می‌شود.
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {        
        if (enteries[0].isIntersecting && hasMore) {
          console.log("visible");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1)
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        else return <div key={book}>{book}</div>;
      })}
      <div>{loading && "loading....."}</div>
      <div>{error && "error"}</div>
    </>
  );
}

export default App;
