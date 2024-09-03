import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import MediaCard from "@/app/Component/mui/MediaCard";

const ItemListDisplay = ({ items }) => {
  return (
    <ul className="w-full">
      {items.length === 0 ? (
        // 데이터가 없을 때 표시할 텍스트
        <li className="flex justify-center items-center flex-col">
          <ErrorOutlineOutlinedIcon color="#1f1f1f" sx={{ fontSize: 48 }} className="mb-2" />
          <p className="text-lg font-bold">등록된 게시물이 없습니다.</p>
        </li>
      ) : (
        // 데이터가 있을 때 아이템 목록을 렌더링
        items.map((item) => (
          <li key={item.id} className="mb-3 w-full">
            <MediaCard item={item} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ItemListDisplay;
