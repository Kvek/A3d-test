import styled from "styled-components";

export const List = styled.ol`
	padding: 30px;
`;

export const ListCol = styled.div`
	font-family: Inter, Arial, sans-serif;
	text-align: left;
	color: #6B778C;
	background-color: white;
	padding: 8px;
	border-bottom: 1px solid #F2F6FC;
	${(props: any) => (props.width !== undefined) ? 'width: ' + props.width+ 'px' : 'flex:1'};
` as any;

export const ListHeader = styled.li`
	list-style: none;
	display: flex;

	${ListCol} {
		background-color: transparent;
		font-size: 9px;
		text-transform: uppercase;
		font-weight: 600;
		border-bottom: 0px;
	}
`;

export const ListItem  = styled.li`
	list-style: none;
	display: flex;
`;

export const NoResults = styled(ListCol)`
	border-style: dashed;
	border: 1px solid grey;
	text-align: center;
`;