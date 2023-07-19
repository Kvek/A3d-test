import styled from "styled-components";

export const Container = styled.div``;

export const SearchInput = styled.input`
	border: 1px solid transparent;
	border-radius: 8px;
	background: white;
	padding: 10px;
	outline: none;
	&:focus, &:hover, &:focus-visible {
		border: 1px solid #00d1c4;
	}

	&::before {
		content: url('../lensIcon.svg');
	}
	
`;


