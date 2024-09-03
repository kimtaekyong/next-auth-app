"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemListDisplay from "@/app/Component/boradList";
import Header from "@/app/Component/Header";
import styled from "styled-components";

const Layout = styled.div`
  height: calc(100vh - 138px);
  width: 100%;
  padding: 14px;
  overflow-y: scroll;
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
      <Layout>
        <ItemListDisplay items={items} />
      </Layout>
    </>
  );
};

export default ItemList;
