import { Button } from "@mui/material";
import { Link } from "react-router-dom";



function PostListItem({ id, title }) {
  return (
    <Button component={Link} to={`/post/${id}`} variant="outlined" sx={{ mb: 1 }}>
      {title}
    </Button>
  );
}
