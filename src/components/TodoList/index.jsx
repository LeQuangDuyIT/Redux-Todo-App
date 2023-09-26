import { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo';
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
	const [todoName, setTodoName] = useState('');
	const [todoPriority, setTodoPriority] = useState('Low');
	const dispatch = useDispatch();

	const todoList = useSelector(todoRemainingSelector);

	const handleAddButtonClick = () => {
		dispatch(
			addTodo({
				id: uuidv4(),
				name: todoName,
				prioriry: todoPriority,
				isCompleted: false
			})
		);
		setTodoName('');
		setTodoPriority('Low');
	};

	return (
		<Row style={{ height: 'calc(100% - 40px)' }}>
			<Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
				{todoList.map(todo => (
					<Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />
				))}
			</Col>
			<Col span={24}>
				<Space.Compact style={{ display: 'flex' }}>
					<Input value={todoName} onChange={e => setTodoName(e.target.value)} />
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
