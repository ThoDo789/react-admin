import React, { useState } from "react";
import "./calender.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  TextField,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useStyles } from "./StyleCalendar";

const Calender = () => {
  const classes = useStyles();
  const eventsData = [
    {
      title: "event 1",
      allDay: true,
      start: "2021-08-29",
      end: "2021-08-30",
    },
    {
      title: "event 2",
      allDay: true,
      start: "2021-08-29",
      end: "2021-08-30",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [myValue, setValue] = useState("");
  console.log(myValue);
  return (
    <div className="calender">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={eventsData}
        dateClick={handleDateClick}
      />
      <Modal
        className="modal-container"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="modal-title">
              Create new event <Close onClick={handleClose} />
            </h2>

            <form autoComplete="off" className={classes.root}>
              <div className="input-group">
                <div className="wrapper">
                  <TextField
                    label="Add title"
                    variant="outlined"
                    color="primary"
                    className="modal-input"
                    size="small"
                    value={myValue}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="wrapper">
                  <TextField
                    id="date"
                    label="Start date"
                    variant="outlined"
                    size="small"
                    type="date"
                    defaultValue="2021-08-02"
                    className={classes.textField1}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    color="primary"
                  />

                  <TextField
                    id="time"
                    label="Select Time"
                    type="time"
                    variant="outlined"
                    size="small"
                    defaultValue="07:30"
                    className={classes.textField2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </div>
                <div className="wrapper">
                  <TextField
                    id="date"
                    label="End Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    defaultValue="2021-08-02"
                    className={classes.textField1}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="time"
                    label="Select Time"
                    type="time"
                    variant="outlined"
                    size="small"
                    defaultValue="07:30"
                    className={classes.textField2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </div>
                <div className="wrapper">
                  <TextareaAutosize
                    // variant="outlined"
                    aria-label="minimum height"
                    minRows="1"
                    maxRows="3"
                    className={classes.textFieldArea}
                    aria-label="empty textarea"
                    placeholder="Write some description(optional)..."
                  />
                </div>
                <div className="wrapper">
                  <FormControl
                    variant="outlined"
                    size="small"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      // value={age}
                      // onChange={handleChange}

                      label="Category"
                    >
                      <MenuItem value="Select category">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="modal-btn">
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.font}
                  >
                    Add Event
                  </Button>
                  <Button
                    color="default"
                    variant="contained"
                    className={classes.font}
                    onClick={handleClose}
                  >
                    Discard
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Calender;
