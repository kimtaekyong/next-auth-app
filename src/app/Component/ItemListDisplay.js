"use client";

import { useRouter } from "next/navigation";
import MediaCard from "@/app/Component/mui/MediaCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const ItemListDisplay = ({ items }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/page/details/${id}`); // 상세보기 페이지로 이동
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="mb-3 w-full cursor-pointer" onClick={() => handleClick(item.id)}>
          <ThemeProvider theme={theme}>
            <MediaCard item={item} />
          </ThemeProvider>
        </li>
      ))}
    </ul>
  );
};

export default ItemListDisplay;
