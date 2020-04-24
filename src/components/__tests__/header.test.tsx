import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header from '../header';

describe('Header', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Header siteTitle="Starter" />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('contains a link to the home page', () => {
        const { getByText } = render(<Header siteTitle="Starter" />);

        expect(getByText('Starter')).toHaveAttribute('href', '/');
    });
});
