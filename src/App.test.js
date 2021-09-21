import { render, screen, waitFor } from '@testing-library/react';
import ActivityList from './ActivityList';
import { SelectedActivityContext } from './selectedActivityContext';
import {activities} from './activities'
import userEvent from '@testing-library/user-event';



test('renders activity view when activity is selected', async () => {

  const value = {
    dispatch: jest.fn(),
    activities: activities,
    SelectedActivity: null
  }
  render(
    <SelectedActivityContext.Provider value={value}>
      <ActivityList />
    </SelectedActivityContext.Provider>
  )
  const activityElement = screen.getByText(activities[0].name)
  userEvent.click(activityElement)
  await waitFor(() => {
    screen.debug()
  })
  expect(activityElement).toBeInTheDocument()
});
