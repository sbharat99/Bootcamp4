import React from 'react';



class BuilingList extends React.Component {

	render() {
		const buildingList = this.props.data1
		.filter(directory => {
			return directory.name.toLowerCase().indexOf(this.props.filterText) >= 0 
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}>{directory.code} </td>
					<td>:</td>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
				</tr>
			);
		
		});


		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
