import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface SettingsModalProps {
  settingsModalOpen: boolean;
  // pathname: string;
  handleSettingsModalToggle: () => void;
}

const SettingsModal = ({
  settingsModalOpen,
  handleSettingsModalToggle,
  // pathname,
}: SettingsModalProps) => {
  // const sectionName = pathname === '/' ? 'Conundrum' : pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <Modal
      open={settingsModalOpen}
      onClose={handleSettingsModalToggle}
      aria-labelledby="Settings Modal"
      aria-describedby={`Settings for Conundrum game`}
    >
      <Box sx={style}>
        <Typography id="settings-modal-title" variant="h6" component="h2">
          Settings
        </Typography>
        <Typography id="settings-modal-description" sx={{ mt: 2 }}>
          Toggle to turn timer on and off & Timer slider setting
        </Typography>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
