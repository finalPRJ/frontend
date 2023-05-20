import styled from "styled-components";

const Select = styled.select`
   width: 80px; 
   margin-left: 120px;
   text-align: center;
   font-size: 20px;
`


const BoardComboBox = (props) => {
    return (
		<Select>
			{props.options.map((option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.name}
				</option>
			))}
		</Select>
	);
}

export default BoardComboBox;