"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/style/styles.module.css";
import Button from "@/app/Component/Button";

const ItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({ title: "", author: "", content: "" });
  const router = useRouter(); // Initialize useRouter hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = async () => {
    if (newItem.title.trim() === "" || newItem.author.trim() === "") return;
    await onAddItem(newItem);
    setNewItem({ title: "", author: "", content: "" });
    router.push("/page/BoradList");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <div className="mb-3">
          <label className="w-full mb-2 block px-2">제목</label>
          <input
            name="title"
            className={`${styles.input_style} w-full mb-2`}
            value={newItem.title}
            onChange={handleInputChange}
            placeholder="제목"
          />
        </div>
        <div className="mb-3">
          <label className="w-full mb-2 block px-2">작성자</label>
          <input
            name="author"
            className={`${styles.input_style} w-full mb-2`}
            value={newItem.author}
            onChange={handleInputChange}
            placeholder="작성자"
          />
        </div>
        <div className="mb-3">
          <label className="w-full mb-2 block px-2">추모글</label>
          <textarea
            name="content"
            className={styles.input_style}
            value={newItem.content}
            onChange={handleInputChange}
            placeholder="추모글을 남겨주세요."
            style={{ resize: "none", height: "300px", width: "100%", padding: "14px" }}
          />
        </div>
        <Button onClick={handleSubmit} type="submit" text={"완료"} color="#1f1f1f" />
      </div>
    </div>
  );
};

export default ItemForm;
