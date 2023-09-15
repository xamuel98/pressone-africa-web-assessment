import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import TheFooter from '../TheFooter.vue';

describe('TheFooter.vue', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(TheFooter);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    // Test case 1: Test with expected class names to be sure it renders correctly
    it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.footer').exists()).toBe(true);
        expect(wrapper.find('.footer-wrapper').exists()).toBe(true);
    });

    // Test case 2: Test to show correct contact information
    it('displays company contact information', () => {
        const contactItemLinks = wrapper.findAll('.contact-item');
        expect(contactItemLinks.length).toBe(2);

        expect(contactItemLinks[0].attributes('href')).toBe('mailto:hello@pressone.africa');
        expect(contactItemLinks[1].attributes('href')).toBe('tel:+234 1 343 8962');
    });

    // Test case 3: Test with social media links
    it('displays social media links', () => {
        const socialMediaLinks = wrapper.findAll('.pressone-social-links a');
        expect(socialMediaLinks.length).toBe(4);

        expect(socialMediaLinks[0].attributes('href')).toBe('https://www.facebook.com/pressone.africa');
        expect(socialMediaLinks[1].attributes('href')).toBe('https://twitter.com/Pressone_africa');
        expect(socialMediaLinks[2].attributes('href')).toBe('https://instagram.com/pressone.africa');
        expect(socialMediaLinks[3].attributes('href')).toBe('https://www.linkedin.com/company/pressone-africa/');
    });
});
