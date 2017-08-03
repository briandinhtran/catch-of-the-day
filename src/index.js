import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

const Root = () => {
   return (
   	<BrowserRouter>
		<div>
			{/* If you don't use exactly every route will go to StorePicker */}
			<Match exactly pattern="/" component={StorePicker} />
			<Match pattern="/store/:storeId" component={App} />
			{/* Miss will route to NotFound component when url cannot be found*/}
			<Miss component={NotFound} />
		</div>
		</BrowserRouter>	
   )
}

render(<Root />, document.querySelector('#main'));