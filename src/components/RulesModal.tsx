import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface RulesModalProps {
  rulesModalOpen: boolean;
  pathname: string;
  handleRulesModalToggle: () => void;
}

const rulesObj: { [key: string]: string } = {
  "/letters": "Placeholder for the rules of the Letters Game",
  "/numbers": "Placeholder for the rules of the Numbers Game",
  "/finale": "Placeholder for the rules of the Finale Conundrum",
  "/": "Placeholder for the over-arching introduction to Conundrum",
};

const RulesModal = ({
  rulesModalOpen,
  handleRulesModalToggle,
  pathname,
}: RulesModalProps) => {
  const sectionName =
    pathname === "/"
      ? "Conundrum"
      : pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <Modal
      open={rulesModalOpen}
      onClose={handleRulesModalToggle}
      aria-labelledby="Rules Modal"
      aria-describedby={`Rules for ${pathname.slice(1)} game`}
    >
      <Box sx={style}>
        <Typography
          sx={{ fontWeight: "800", textDecorationLine: "underline" }}
          id="rules-modal-title"
          variant="h6"
          component="h2"
        >
          {`${sectionName} Game Rules`}
        </Typography>
        <Typography id="rules-modal-description" sx={{ mt: 2 }}>
          {rulesObj[pathname]}
        </Typography>
      </Box>
    </Modal>
  );
};

export default RulesModal;
