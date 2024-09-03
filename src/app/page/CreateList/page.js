"use client";

import React from "react";
import axios from "axios";
import isheader from "@/style/isheader.module.css";
import Header from "@/app/Component/Header";
import ItemForm from "../../Component/boradForm";

const addItem = async (newItem) => {
  try {
    const response = await axios.post("/api/Create_borad", newItem);
    setItems((prevItems) => [...prevItems, response.data]);
  } catch (error) {
    console.error("Failed to add item:", error.response?.data || error.message);
  }
};

const CreateList = () => {
  return (
    <>
      <Header />
      <div className={`${isheader.layout} flex items-center flex-col`}>
        <ItemForm onAddItem={addItem} />
      </div>
    </>
  );
};

export default CreateList;
