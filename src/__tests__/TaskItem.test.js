import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

test('toggles task and removes task', () => {
    const task = { text: 'Test Task', completed: false };
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(<TaskItem task={task} onToggle={onToggle} onRemove={onRemove} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalled();

    const removeButton = screen.getByText(/remove/i);
    fireEvent.click(removeButton);
    expect(onRemove).toHaveBeenCalled();
});
