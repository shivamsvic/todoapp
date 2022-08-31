import { render, screen } from "@testing-library/react";
import NewTask from "./NewTask";

test("Component is rendering properly", () => {
  const task = { id: 0, taskName: "This component is rendering" };
  render(
    <NewTask
      key={task.id}
      task={task}
      markAsCompleted={() => {}}
      deleteTask={() => {}}
    />
  );
  const taskName = screen.getByTestId("taskname-0-id");
  expect(taskName).toBeInTheDocument();
});
