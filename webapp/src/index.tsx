import React from 'react';
import { render } from 'react-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const Application: React.SFC<{}> = () => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Centered>
        <StatefulInput />
      </Centered>
    </BaseProvider>
  </StyletronProvider>
);

render(<Application />, document.getElementById('root'));
