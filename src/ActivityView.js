import React from 'react'
import { useSlectedActivity } from './selectedActivityContext'

export default function ActivityView() {
    const {selectedActivity} = useSlectedActivity()
    return (
        <div className ='activity-view'>
            {console.log(selectedActivity)}
            <h1>{selectedActivity.name}</h1>
            {
                selectedActivity.tasks.map((task, index) => {
                    return <p key={index}>{task}</p>
                })
            }
        </div>
    )
}
