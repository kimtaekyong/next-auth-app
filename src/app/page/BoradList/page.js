"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemListDisplay from "@/app/Component/ItemListDisplay";
import Header from "@/app/Component/Header";
import styled from "styled-components";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

// 스타일 정의
const Layout = styled.div`
  height: calc(100vh - 138px);
  width: 100%;
  padding: 14px;
  overflow-y: scroll;
`;

const IsLayout = styled.div`
  height: calc(100vh - 138px);
  width: 100%;
  padding: 14px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get("/api/Create_borad");
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch items:", error.response?.data || error.message);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <Header />
      {items.length === 0 ? (
        <IsLayout>
          <div className="flex flex-col justify-center items-center">
            <ErrorOutlineOutlinedIcon color="#1f1f1f" sx={{ fontSize: 48 }} className="mb-2" />
            <p className="text-lg font-bold">등록된 게시물이 없습니다.</p>
          </div>
        </IsLayout>
      ) : (
        <Layout>
          {/* 데이터가 있을 때 */}
          <ItemListDisplay items={items} />
        </Layout>
      )}
    </>
  );
};

export default ItemList;
