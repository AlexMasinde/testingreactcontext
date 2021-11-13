import { render, screen } from "@testing-library/react";
import ActivityList from "./ActivityList";
import { SelectedActivityContextProvider } from "./selectedActivityContext";
import { testActivities } from "./testActivities";
import userEvent from "@testing-library/user-event";

test("renders activity view when activity is selected", async () => {
  render(
    <SelectedActivityContextProvider testActivities={testActivities}>
      <ActivityList />
    </SelectedActivityContextProvider>
  );
  const activityName = testActivities[0].name;
  const activityElement = screen.getByText(activityName);
  userEvent.click(activityElement);
  expect(
    screen.getByRole("heading", { name: activityName })
  ).toBeInTheDocument();
  screen.debug();
});
