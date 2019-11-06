import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		if(this.props.selectedBuilding === 0) {
			return (
				<div>
					<p class = "visual">
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		else{
			const building = this.props.data1
		.filter(directory => {
			return directory.id === this.props.selectedBuilding 
		})
		if(!building[0].hasOwnProperty('coordinates') && building[0].hasOwnProperty('address')){
			return (
				<div>
					<b class = "visual">
						{building[0].code} : {building[0].name}
					</b>
					<p class = "visual">
						Address: {building[0].address}
					</p>
					<p><i>Coordinates not available!</i></p>
					
				</div>
			);
		}

		else if(!building[0].hasOwnProperty('address') && building[0].hasOwnProperty('coordinates')){
			return (
				<div>
					<b class = "visual">
						{building[0].code} : {building[0].name}
					</b>
					<p class = "visual">
						Coordinates:
					</p>
						<p class = "visual"><i>Latitude: {building[0].coordinates.latitude}</i></p>
						<p class = "visual"><i>Longitude: {building[0].coordinates.longitude}</i></p>
					<p><i>Address not available!</i></p>
					
				</div>
			);
		}

		else if(!building[0].hasOwnProperty('coordinates') && !building[0].hasOwnProperty('address')){
			return (
				<div>
					<b class = "visual">
						{building[0].code} : {building[0].name}
					</b>
					<p><i>No other info available!</i></p>
				</div>
			);
		}

		else{
			return (
				<div>
					<b class = "visual">
						{building[0].code} : {building[0].name}
					</b>
					<p class = "visual">
						Coordinates:
					</p>
						<p class = "visual"><i>Latitude: {building[0].coordinates.latitude}</i></p>
						<p class = "visual"><i>Longitude: {building[0].coordinates.longitude}</i></p>
					<p class = "visual">
						Address: {building[0].address}
					</p>
				</div>
			);
		}
		}
		
	}
}
export default ViewBuilding;
