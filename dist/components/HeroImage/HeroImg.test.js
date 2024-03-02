import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeroImage from './HeroImg';
describe('HeroImage', function () {
    it('renders the title and subtitle', function () {
        var getByText = render(_jsx(HeroImage, { imageUrl: "test.jpg", title: "Test Title", subtitle: "Test Subtitle" })).getByText;
        expect(getByText('Test Title')).toBeVisible();
        expect(getByText('Test Subtitle')).toBeVisible();
    });
    it('changes background to dark grey when disabled', function () {
        var getByText = render(_jsx(HeroImage, { imageUrl: "test.jpg", title: "Test Title", subtitle: "Test Subtitle", disabled: true })).getByText;
        var heroContainer = getByText('Test Title').parentElement;
        expect(heroContainer).toHaveStyle('background-color: darkgrey');
    });
});
//# sourceMappingURL=HeroImg.test.js.map