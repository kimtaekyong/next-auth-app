"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Layout = styled.div`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.04), 0 3px 3px rgba(0, 0, 0, 0.04);
`;

const MediaCard = ({ item }) => {
  return (
    <Layout>
      <Card sx={{ maxWidth: "100%" }} elevation={0}>
        <CardMedia
          sx={{ height: 140 }}
          // image="/static/images/cards/contemplative-reptile.jpg" // 이미지 경로를 변경하려면 여기를 수정하세요
          // title="green iguana"
        />
        <CardContent>
          <Typography className="mb-4" gutterBottom variant="h5" component="div" fontWeight={700} fontSize={24}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500} fontSize={16}>
            {item.author}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500} fontSize={16}>
            {item.content}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500} fontSize={16}>
            {new Date(item.created_at).toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Layout>
  );
};

export default MediaCard;
