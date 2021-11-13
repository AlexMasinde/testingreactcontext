import React from "react";

export default function ActivityView({ selectedActivity }) {
  return (
    <div className="activity-view">
      {console.log(selectedActivity)}
      <h1>{selectedActivity.name}</h1>
      {selectedActivity.tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}
