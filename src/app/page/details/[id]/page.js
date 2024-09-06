"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const { id } = router.query;

      if (id) {
        try {
          const response = await axios.get(`/api/create_board/${id}`);
          setItem(response.data);
        } catch (error) {
          console.error("Error fetching item details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (router.isReady) {
      fetchItem();
    }
  }, [router.isReady, router.query]);

  if (loading) return <div>Loading...</div>;

  if (!item) return <div>No item found</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.author}</p>
      <p>ID: {item.id}</p> {/* ID 값을 추가했습니다. */}
      <div>{item.content}</div>
    </div>
  );
};

export default DetailPage;
