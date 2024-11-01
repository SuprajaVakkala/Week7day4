import { render, screen, fireEvent } from '@testing-library/react';
import TaskInput from '../components/TaskInput';

test('updates input value and submits task', () => {
    const onAddTask = jest.fn();
    render(<TaskInput onAddTask={onAddTask} />);

    const input = screen.getByPlaceholderText(/add a new task/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.submit(input);

    expect(onAddTask).toHaveBeenCalledWith('New Task');
    expect(input.value).toBe('');
});
