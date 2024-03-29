import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// UTILS
import { formatDate, formatTime } from "../utils/functions";

const ClientCard = ({ Client, IdChat, LastMsg, LastDate, Name, LastName }) => {
  console.log(LastMsg);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Card clicked", IdChat);
    navigate(`/keesense/chat/${IdChat}`);
  };
  return (
    <Box sx={styles.card} onClick={handleClick}>
      <Stack direction={"column"} spacing={1}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="title">
            {Name} {LastName} - Id#{Client}
          </Typography>
          {/* <Typography variant="subTitle">{formatDate(LastDate)}</Typography> */}
        </Stack>

        {/* <Typography variant="subTitle">{LastMsg}</Typography> */}
      </Stack>
    </Box>
  );
};

/**@type {import("@mui/material".SxProps)} */
const styles = {
  card: {
    bgcolor: "white",
    width: "100%",
    height: "75px",
    p: 2,
    borderBottom: "1px solid rgba(169, 169, 169, 0.3)",
    "&:hover": {
      bgcolor: "#f0f0f0", // Example: change background color on hover
      cursor: "pointer", // Example: change cursor to pointer on hover
    },
  },
};

export default ClientCard;
