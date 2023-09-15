import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MetricCard from '../MetricCard.vue';

describe('MetricCard.vue', () => {
    // Test case 1: Test with a non-empty text prop
    it('renders text prop when it is non-empty', () => {
        const text = 'Some metric text';
        const wrapper = mount(MetricCard, {
            props: { text },
        });

        expect(wrapper.text()).toContain(text);
    });

    // Test case 2: Test with an empty text prop
    it('does not render anything when text prop is empty', () => {
        const wrapper = mount(MetricCard, {
        props: { text: '' },
        });

        expect(wrapper.text()).toBe('');
    });

    // Test case 3: Test with a default value for text prop
    it('renders default text when text prop is not provided', () => {
        const defaultMessage = 'Default Message';
        const wrapper = mount(MetricCard);

        expect(wrapper.text()).toContain(defaultMessage);
    });

    // Test case 4: Test with a custom default value for text prop
    it('renders custom default text when text prop is not provided', () => {
        const customDefaultMessage = 'Custom Default Message';
        const wrapper = mount(MetricCard);

        expect(wrapper.text()).toContain(customDefaultMessage);
    });
});
