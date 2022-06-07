import React from "react";
import { useLocation } from "react-router-dom";

// 获取查询参数
const useQuery = () => {
  // useLocation用到了React Router
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
