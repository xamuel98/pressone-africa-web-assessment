import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import PricingCard from '../PricingCard.vue';

describe('PricingCard.vue', () => {
    // Sample data for testing
    const propsData = {
        name: 'Basic Plan',
        amount: '20000',
        description: 'Includes basic features',
        cta: 'Choose Plan',
    };

    let wrapper: VueWrapper<any>;

    beforeEach(() => {
        wrapper = mount(PricingCard, {
            props: {
                data: propsData,
            },
        });
    });

    afterEach(() => {
        wrapper.unmount();
    });

    // Test case 1: Test with a custom props data object
    it('renders correctly with provided data', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.pricing-card').exists()).toBe(true);
        expect(wrapper.find('.pricing-title').text()).toBe(propsData.name);

        // Check if the card amount is rendered correctly
        if (!isNaN(parseFloat(propsData.amount))) {
        expect(wrapper.find('.pricing-text').text()).toBe(`N${parseFloat(propsData.amount).toLocaleString()}/month`);
        } else {
        expect(wrapper.find('.pricing-text').text()).toBe(propsData.amount);
        }

        expect(wrapper.find('.pricing-description').text()).toBe(propsData.description);
        expect(wrapper.find('.choose-pricing-plan').text()).toBe(propsData.cta);
    });
});
