import FormatLineSpacing from "@mui/icons-material/FormatLineSpacing";
import ManageSearch from "@mui/icons-material/ManageSearch";
import ActionCard from "../card/action-card";
import RowBox from "../styled/row-box";

const ActionBar = () => {
  return (
    <RowBox
      sx={{
        border: "1px solid #3F3979",
        position: "sticky",
        p: 1,
        top: "0",
        zIndex: 1,
        backgroundColor: "white",
      }}
    >
      <ActionCard icon={<ManageSearch sx={{ mr: 1 }} />} label="Trier" />
      <ActionCard icon={<FormatLineSpacing sx={{ mr: 1 }} />} label="Trier" />
    </RowBox>
  );
};

export default ActionBar;
