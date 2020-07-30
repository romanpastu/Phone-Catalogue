import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import App from './App';
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import mockData from "../mockStore" 
const mockStore = configureMockStore();
const store = mockStore({
  phones: { mockData },
});

describe('App comp testing', () => {
 
  it("should render without throwing an error", () => {
    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive()
    expect(app.find('.introductoryNav').text()).toContain("Phones");
  });

})

