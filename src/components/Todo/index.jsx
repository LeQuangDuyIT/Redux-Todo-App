import PropTypes from 'prop-types';
import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../redux/actions';

const priorityColorMapping = {
	High: 'red',
	Medium: 'blue',
	Low: 'gray'
};

export default function Todo({ data }) {
	const { id, name, priority, isCompleted } = data;
	const [checked, setChecked] = useState(isCompleted);

	const dispatch = useDispatch();

	const toggleCheckbox = () => {
		setChecked(!checked);
		const updatedTodo = { ...data, isCompleted: !checked };
		dispatch(updateTodo(id, updatedTodo));
	};

	return (
		<Row
			justify='space-between'
			style={{
				marginBottom: 3,
				...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
			}}
		>
			<Checkbox checked={checked} onChange={toggleCheckbox}>
				{name}
			</Checkbox>
			<Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
				{priority}
			</Tag>
		</Row>
	);
}

Todo.propTypes = {
	data: PropTypes.object.isRequired
};
