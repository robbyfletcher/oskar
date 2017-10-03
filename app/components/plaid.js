import React from 'react';
import { render } from 'react-dom';

class PlaidLink extends React.Component {
  constructor(props) {
    super(props);

    this.handler = null;
    this.handlerOpen = this.handlerOpen.bind(this);
  }

  componentDidMount() {
  	console.log('Loading...');

    this.handler = Plaid.create({
      apiVersion: 'v2',
      clientName: 'Oskar',
      env: 'development',
      product: ['auth'],
      key: '<PUBLIC_KEY>',
      onLoad: () => (console.log('Finished Loading')),
      onSuccess: (public_token) => (console.log(public_token)),
			onExit: (err, metadata) => {
				if (err) 
					console.error(err);
				else {
					console.log(metadata);
				}
			}
    });
  }

  handlerOpen() {
    this.handler.open();
  }

  render() {
    return (
      <div>
				<button className="btn" type="button" onClick={this.handlerOpen}>Log in</button>
      </div>
    )
  }
}


export default PlaidLink;
