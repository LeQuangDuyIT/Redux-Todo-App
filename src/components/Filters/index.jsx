import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchTextSelector, statusSelector, prioritySelector } from '../../redux/selectors';
import filtersSlice from './FilterSlice';

const { Search } = Input;

export default function Filters() {
	const searchText = useSelector(searchTextSelector);
	const filterStatus = useSelector(statusSelector);
	const filterPriority = useSelector(prioritySelector);
	const dispatch = useDispatch();

	const onSearchTextChange = e => {
		dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
	};

	const onFilterStatusTypeChange = e => {
		dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
	};

	const onFilterPriorityChange = value => {
		dispatch(filtersSlice.actions.priorityFilterChange(value));
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
					value={filterPriority}
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
