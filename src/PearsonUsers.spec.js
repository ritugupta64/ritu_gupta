import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";

describe('Uesrs List rendering tests', () => {
  const  testState = {
    users: [
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ]
  };
  
  it('should behave like tree', () => {
    const wrapper=shallow(
      <PearsonUsers/>
    );
    wrapper.setState(testState);
    expect(wrapper.find('UsersGridContainer').length).toBe(3);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('UsersGridContainer').first().props().delete).toBeDefined();
    expect(wrapper.find('UsersGridContainer').first().props().firstName).toBe('Eve');
    expect(wrapper.find('UsersGridContainer').first().props().lastName).toBe('Holt');
    expect(wrapper.find('UsersGridContainer').first().props().avatar).toBe('https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg');
  });

  it('Test case for delete function', () => {
    const component = shallow(<PearsonUsers />);
    component.setState(testState);
    component.instance().delete(1);
    expect(component.instance().state.users.length).toBe(2);
    component.instance().delete(1);
    expect(component.instance().state.users.length).toBe(1);
  });

  it('should call methodName during componentDidMount', () => {
    const json='hasOwnProperty';
     fetch = jest.fn(() => new Promise(resolve => resolve()));
     const component = shallow(<PearsonUsers />)
     component.instance().componentDidMount();
     expect(fetch).toHaveBeenCalled();
     expect(fetch).toHaveBeenCalledWith('https://reqres.in/api/users?page=1&per_page=10');
     expect(component.instance().state).hasOwnProperty('users');

});
  
});