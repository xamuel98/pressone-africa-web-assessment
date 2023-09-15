import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PerkCard from '../PerkCard.vue';

describe('PerkCard', () => {
    // Test case 1: Test with default prop
    it('renders with default props', () => {
        const propsData = {
            className: 'custom-class',
            cardTitle: 'Default Title',
            cardListItem: ['Item 1', 'Item 2', 'Item 3'],
        };

        const wrapper = mount(PerkCard, {
            propsData
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain('support-offer-card');
        expect(wrapper.text()).toContain('Default Title');
        expect(wrapper.findAll('li')).toHaveLength(3);
    });

    // Test case 2: Test with a custom-class for className and other prop data
    it('renders with custom class and props', () => {
        const propsData = {
            className: 'custom-class',
            cardTitle: 'Custom Title',
            cardListItem: ['Item 1', 'Item 2'],
        };

        const wrapper = mount(PerkCard, {
            propsData,
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.classes()).toContain('support-offer-card');
        expect(wrapper.classes()).toContain('custom-class');
        expect(wrapper.text()).toContain('Custom Title');

        const listItems = wrapper.findAll('li');
        expect(listItems).toHaveLength(2);
        expect(listItems[0].text()).toBe('Item 1');
        expect(listItems[1].text()).toBe('Item 2');
    });

    // Test case 3: Test with an image sprite with class sales-support-sprite-group
    it('renders sales support card with correct images', async () => {
        const propsData = {
            className: 'sales-offer',
        };

        const wrapper = mount(PerkCard, {
            propsData,
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.sales-support-sprite-group').exists()).toBe(true);
        expect(wrapper.find('.customer-support-sprite-group').exists()).toBe(false);
    });

    // Test case 4: Test with an image sprite with class customer-support-sprite-group
    it('renders customer support card with correct images', async () => {
        const propsData = {
            className: 'customer-offer',
        };

        const wrapper = mount(PerkCard, {
            propsData,
        });

        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.sales-support-sprite-group').exists()).toBe(false);
        expect(wrapper.find('.customer-support-sprite-group').exists()).toBe(true);
    });
});
