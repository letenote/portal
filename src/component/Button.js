import React, { memo } from 'react';

const Button = ({ type, style, onClick = () => {}, title, loadingIndicator = false }) => {
	console.log('render button')
	return (
		<button
			type={type || 'button'}
			style={style || {}}
			onClick={!loadingIndicator ? onClick : null}
			className={loadingIndicator ? 'button loading' : 'button'}
		>
			{ title || 'title' }
		</button>
	);
};

export default memo(Button, ( prevProps, nextProps ) => {
	return JSON.stringify(prevProps) === JSON.stringify(nextProps)
});