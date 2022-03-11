import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please fill this field");
      return
    }
    onAdd({ task, date, reminder });
    setTask('');
    setDate('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholdeer="Add Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Date and Time</label>
        <input
          type="text"
          placeholdeer="Add Text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
