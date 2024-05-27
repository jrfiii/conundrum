import { styled } from "@mui/material/styles";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import TimerIcon from "@mui/icons-material/Timer";
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

const Input = styled(MuiInput)`
  width: 42px;
`;
interface SettingsModalProps {
  settingsModalOpen: boolean;
  timerBool: boolean;
  timerSeconds: number;
  handleSettingsModalToggle: () => void;
  handleTimerToggle: () => void;
  handleTimerSlider: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
  handleTimerInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTimerBlur: (value: number) => void;
}

const SettingsModal = ({
  settingsModalOpen,
  handleSettingsModalToggle,
  timerBool,
  timerSeconds,
  handleTimerToggle,
  handleTimerSlider,
  handleTimerInput,
  handleTimerBlur,
}: SettingsModalProps) => {
  return (
    <Modal
      open={settingsModalOpen}
      onClose={handleSettingsModalToggle}
      aria-labelledby="Settings Modal"
      aria-describedby={`Settings for Conundrum game`}
    >
      <Box sx={style}>
        <Typography
          id="settings-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Settings
        </Typography>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="start"
              control={
                <Switch checked={timerBool} onChange={handleTimerToggle} />
              }
              label="Timer"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>

        <Typography id="input-slider">Seconds:</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TimerIcon />
          </Grid>
          <Grid item xs>
            <Slider
              disabled={!timerBool}
              value={typeof timerSeconds === "number" ? timerSeconds : 0}
              onChange={handleTimerSlider}
              valueLabelDisplay="auto"
              min={0}
              max={90}
              aria-labelledby="timer-input-slider"
            />
          </Grid>
          <Grid item>
            {!timerBool ? (
              <AllInclusiveIcon />
            ) : (
              <Input
                disabled={!timerBool}
                value={timerSeconds}
                size="small"
                onChange={handleTimerInput}
                onBlur={() => handleTimerBlur(timerSeconds)}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: 90,
                  type: "number",
                  "aria-labelledby": "timer-input-slider",
                }}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
