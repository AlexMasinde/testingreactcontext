import React from 'react'
import ActivityView from './ActivityView'
import { useSlectedActivity } from './selectedActivityContext'

export default function ActivityList() {
    const {activities, selectedActivity, dispatch} = useSlectedActivity()

    function activitySelect(activity){
        dispatch({
            type: 'select-activity',
            payload: activity
        })
    }
    return (
        <div className='activity-list'>
            {
                activities.map((activity, index )=> {
                    return <p onClick={() => activitySelect(activity)} key={index}>{activity.name}</p>
                })
            }
            <div className='activity-view'>
                {
                    selectedActivity &&
                    <ActivityView />
                }
            </div>
        </div>
    )
}
