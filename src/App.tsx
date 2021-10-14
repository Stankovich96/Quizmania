import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Quizmania</h1>
				<input type='text' name='' id='' placeholder='Enter your name' />
				<button type='submit' name='Proceed'></button>
				<p>The Ultimate Quiz Application loading .......</p>
				{/* <a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React and typescript
				</a> */}
			</header>
		</div>
	);
}

export default App;
