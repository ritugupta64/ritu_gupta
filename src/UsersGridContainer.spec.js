import React from "react";
import { shallow } from "enzyme";
import UsersGridContainer from "./usersGridContainer";

describe('UsersGridContainer test', () => {
  const  testProp = {
    key: 4,
    firstName: "Eve",
    lastName: "Holt",
    avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
    delete:jest.fn(() => ({}))
  };
  
  it('should behave like tree : UsersGridContainer', () => {
    const wrapper=shallow(
        <UsersGridContainer {...testProp} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toBe(1);
    console.info(wrapper.html());
    const h3 = wrapper.find("h3");
    expect(h3.text()).toEqual("Eve Holt ");
     });
  
});