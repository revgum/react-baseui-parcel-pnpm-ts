import React from 'react';
import { render } from 'react-dom';

const Application: React.SFC<{}> = () => <h1>Applications too</h1>;

render(<Application />, document.getElementById('root'));
