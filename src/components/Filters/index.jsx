import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
	const [searchText, setSearchText] = useState('');
	const [filterStatus, setFilterStatus] = useState('All');
	const dispatch = useDispatch();

	const onSearchTextChange = e => {
		const filterKey = e.target.value;
		setSearchText(filterKey);
		dispatch(searchFilterChange(filterKey));
	};

	const onFilterStatusTypeChange = e => {
		const filterType = e.target.value;
		setFilterStatus(filterType);
		dispatch(statusFilterChange(filterType));
	};

	const onFilterPriorityChange = value => {
		dispatch(priorityFilterChange(value));
	};

	return (
		<Row justify='center'>
			<Col span={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Search
				</Typography.Paragraph>
				<Search placeholder='input search text' value={searchText} onChange={onSearchTextChange} />
			</Col>
			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Filter By Status
				</Typography.Paragraph>
				<Radio.Group value={filterStatus} onChange={onFilterStatusTypeChange}>
					<Radio value='All'>All</Radio>
					<Radio value='Completed'>Completed</Radio>
					<Radio value='Todo'>To do</Radio>
				</Radio.Group>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
					Filter By Priority
				</Typography.Paragraph>
				<Select
					mode='multiple'
					allowClear
					placeholder='Please select'
					defaultValue={[]}
					onChange={onFilterPriorityChange}
					style={{ width: '100%' }}
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
			</Col>
		</Row>
	);
}
