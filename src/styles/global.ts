import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');	
  
  * {
		margin: 0;
		padding: 0;
		outline: 0;
		box-shadow: border-box;
	}

	body {
		background: #17171E;
		-webkit-font-smoothing: antialiased !important;
	}

	body, input, button {
		font: 14px Mulish, sans-serif;
	}
	#root {
		max-width: 1020px;
		padding: 0 20px 50px;
	}
	button {
		cursor: pointer;
	}
`;