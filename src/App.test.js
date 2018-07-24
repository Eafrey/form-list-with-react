import React from 'react';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer"
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import { resolve } from 'path';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders App correctly', () => {
//   const tree = renderer.create(<App hello="world 2018" />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('check button1 state', () => {
//   Enzyme.configure({ adapter: new Adapter() });
//   const app = shallow(<App />);
//   expect(app.find('.App-intro').text()).toEqual('react demo');

//   app.find('button').at(0).simulate('click');

//   expect(app.find('.App-intro').text()).toEqual('react demo 2018 desc');


// })

// it('check button2 state,use state', () => {
//   Enzyme.configure({ adapter: new Adapter() });
//   const app = mount(<App />);
//   expect(app.state().appName).toEqual('world 2018');

//   app.find('button').at(1).simulate('click');
//   expect(app.state().appName).toEqual("react reduc app name")
// })

// it('check button2 state,use mount', () => {
//   Enzyme.configure({ adapter: new Adapter() });
//   const app = mount(<App />);
//   expect(app.find('.App-title').text()).toEqual('world 2018');
//   app.find('button').at(1).simulate('click');
//   expect(app.find('.App-title').text()).toEqual("react reduc app name")
// })

describe('', () => {
  beforeEach(function () {
    Enzyme.configure({ adapter: new Adapter() });
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve( {
      ok: true,
      json: () => {
        return {
          items: [{ 'description': 'description123' }]
        }
      }
    }
    ));

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders App correctly', () => {
    const tree = renderer.create(<App hello="world 2018" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check button1 state', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const app = shallow(<App />);
    expect(app.find('.App-intro').text()).toEqual('react demo');

    app.find('button').at(0).simulate('click');

    expect(app.find('.App-intro').text()).toEqual('react demo 2018 desc');


  })

  it('check button2 state,use state', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const app = mount(<App />);
    expect(app.state().appName).toEqual('world 2018');

    app.find('button').at(1).simulate('click');
    expect(app.state().appName).toEqual("react reduc app name")
  })

  it('check button2 state,use mount', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const app = mount(<App />);
    expect(app.find('.App-title').text()).toEqual('world 2018');
    app.find('button').at(1).simulate('click');
    expect(app.find('.App-title').text()).toEqual("react reduc app name")
  })

  it('should hava description', function () {
    const app = shallow(<App />);
    return new Promise(resolve => setTimeout(resolve, 0)).then(() => {
      expect(app.state().infos).toEqual( [{"description": "description123"}]);
    });
  });
})