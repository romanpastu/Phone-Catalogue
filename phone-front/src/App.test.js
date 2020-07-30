import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import App from './App';
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import mockData from "../mockStore"
import { jssPreset, ExpansionPanelActions } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import TablePhones from './Table.js';
const mockStore = configureMockStore();

describe('App comp testing', () => {
  let store;
  let undefinedStore;

  beforeEach(() => {
    store = mockStore({
      phones: mockData
    })
    store.dispatch = jest.fn();

    undefinedStore = mockStore({
      phones: {}
    })
    undefinedStore.dispatch = jest.fn();
  })

  it("should render a navbar when there are props", () => {
    const wrapper = mount(<Provider store={store}><App /></Provider>)
    expect(wrapper.find('.introductoryNav').text()).toContain("Phones")
  })


  it("should have a loading text when there are no props", () => {
    const wrapper = mount(<Provider store={undefinedStore}><App /></Provider>)
    expect(wrapper.find('.loadingText1').text()).toContain("Loading...")
  })

  

})

