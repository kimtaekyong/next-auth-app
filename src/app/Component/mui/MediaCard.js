import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg" // 이미지 경로를 변경하려면 여기를 수정하세요
        // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          제목: {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          작성자: {item.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          내용: {item.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          작성시간: {new Date(item.created_at).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
