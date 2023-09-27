import { useRef, useState } from 'react';
import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodo,
	searchFilterChange,
	statusFilterChange,
	priorityFilterChange
} from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo';
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
	const [todoName, setTodoName] = useState('');
	const [todoPriority, setTodoPriority] = useState('Low');
	const [isError, setIsError] = useState(false);

	const inputRef = useRef(null);

	const dispatch = useDispatch();
	const todoList = useSelector(todoRemainingSelector);

	const handleAddButtonClick = () => {
		if (todoName === '') {
			setIsError(true);
			inputRef.current.focus();
			return;
		}
		dispatch(
			addTodo({
				id: uuidv4(),
				name: todoName,
				priority: todoPriority,
				isCompleted: false
			})
		);
		dispatch(searchFilterChange(''));
		dispatch(statusFilterChange('All'));
		dispatch(priorityFilterChange([]));
		setTodoName('');
		setTodoPriority('Low');
	};

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{todoList.map(todo => (
					<Todo key={todo.id} data={todo} />
				))}
			</Col>
			<Col span={24}>
				<Space.Compact style={{ display: 'flex' }}>
					<Input
						ref={inputRef}
						value={todoName}
						onChange={e => setTodoName(e.target.value)}
						onInput={() => setIsError(false)}
						onBlur={() => setIsError(false)}
						status={isError ? 'error' : undefined}
						style={{ zIndex: '1' }}
					/>
					<Select
						defaultValue='Medium'
						value={todoPriority}
						onChange={value => setTodoPriority(value)}
					>
						<Select.Option value='High' label='High'>
							<Tag color='red'>High</Tag>
						</Select.Option>
						<Select.Option value='Medium' label='Medium'>
							<Tag color='blue'>Medium</Tag>
						</Select.Option>
						<Select.Option value='Low' label='Low'>
							<Tag color='gray'>Low</Tag>
						</Select.Option>
					</Select>
					<Button type='primary' onClick={handleAddButtonClick}>
						Add
					</Button>
				</Space.Compact>
			</Col>
		</Row>
	);
}
