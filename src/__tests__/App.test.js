import React from "react";
import { shallow } from "enzyme";
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

describe('<App/> component',()=> {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App/>);
    });
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render CitySearch', () => { // This test checks that the required component (in this case, CitySearch) exists
        expect(AppWrapper.find(CitySearch)).toHaveLength(1); 
    });
});