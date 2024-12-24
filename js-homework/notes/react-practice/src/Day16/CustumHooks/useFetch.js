import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null); // 存储 API 返回的数据
  const [isLoading, setIsLoading] = useState(true); // 加载状态
  const [isError, setIsError] = useState(false); // 错误状态

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setIsError(true);
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // 依赖于 url 的变化

  return { data, isLoading, isError };
}

