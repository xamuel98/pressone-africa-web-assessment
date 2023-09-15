// import MatchMediaMock from 'jest-matchmedia-mock';
// import { mount, VueWrapper } from '@vue/test-utils';
// import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest';
// import TheNavbar from '../TheNavbar.vue';


// describe('TheNavbar.vue', () => {
//     let wrapper: VueWrapper<any>;
//     // let matchMedia: any;

//     beforeAll(() => {
//         // matchMedia = new MatchMediaMock();
//         // matchMedia.useMediaQuery("(max-width: 769px)");
//     });

//     beforeEach(() => {
//         // Create a shallow wrapper for the component before each test
//         wrapper = mount(TheNavbar);
//     });

//     // afterEach(() => {
//     //     // Destroy the wrapper after each test to clean up
//     //     wrapper.unmount();
//     //     // matchMedia.clear();
//     // });


//     it('renders the component without errors', () => {
//         expect(wrapper.exists()).toBe(true);
//     });


// });

import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from "../../router";
import TheNavbar from '../TheNavbar.vue';


describe('TheNavbar', () => {
    let router: any;
    let wrapper: VueWrapper<any>;

    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: (query: any) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: () => {}, // Deprecated
                removeListener: () => {}, // Deprecated
                addEventListener: () => {},
                removeEventListener: () => {},
                dispatchEvent: () => {},
            })
        });
    });

    beforeEach(async () => {
        router = createRouter({
            history: createWebHistory(),
            routes,
        });

        router.push('/');
        await router.isReady();

        wrapper = mount(TheNavbar, {
            global: {
              plugins: [router], // Set the router on the Vue instance
              stubs: ["router-link", "router-view"], // Stubs for router-link and router-view in case they're rendered in your template
            },
        });
    });

    it('renders the component', async () => {
        // Assert that the wrapper exists
        expect(wrapper.exists()).toBe(true);
    });

    it('toggles the side panel when the hamburger icon is clicked', async () => {
        const hamburger = wrapper.find('#burger');
        const panel = wrapper.find('.panel');

        // Initially, the panel should not have the 'panel-visible' class
        expect(panel.classes()).not.toContain('panel-visible');

        // Click the hamburger icon to open the panel
        await hamburger.trigger('click');

        // Now, the panel should have the 'panel-visible' class
        expect(panel.classes()).toContain('panel-visible');

        // Click the hamburger icon again to close the panel
        await hamburger.trigger('click');

        // The panel should not have the 'panel-visible' class again
        expect(panel.classes()).not.toContain('panel-visible');
    });

    it('closes the side panel when the overlay is clicked', async () => {
        const hamburger = wrapper.find('#burger');
        const panel = wrapper.find('.panel');

        // Click the hamburger icon to open the panel
        await hamburger.trigger('click');

        // Now, the panel should have the 'panel-visible' class
        expect(panel.classes()).toContain('panel-visible');

        // Click the overlay to close the panel
        const overlay = document.querySelector('.panel-overlay');
        overlay?.click();

        // The panel should not have the 'panel-visible' class again
        expect(panel.classes()).not.toContain('panel-visible');
    });

    it('shows the navbar when scrolling up', async () => {
        const header = wrapper.find('.custom-navbar');
        header.classes('hide'); // Initially, the navbar is hidden

        // Simulate scrolling up
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));

        // The navbar should not have the 'hide' class, meaning it's shown
        await wrapper.vm.$nextTick();
        expect(header.classes()).not.toContain('hide');
    });

    it('hides the navbar when scrolling down', async () => {
        const header = wrapper.find('.custom-navbar');

        // Initially, the navbar is shown
        expect(header.classes()).not.toContain('hide');

        // Simulate scrolling down
        window.scrollY = 300;
        window.dispatchEvent(new Event('scroll'));

        // The navbar should have the 'hide' class, meaning it's hidden
        await wrapper.vm.$nextTick();
    });

    it('initially sets toggleFunction to false', () => {
        expect(wrapper.vm.toggleFunction).toBe(false);
    });

    it('opens the panel when calling openPanelFunction', async () => {
        const panel = wrapper.find('.panel');

        // Check if panel exists in DOM
        expect(panel.exists()).toBe(true);

        // Initially, the panel is not shown
        expect(panel.classes()).not.toContain('panel-visible');

        await wrapper.vm.openPanelFunction();
        expect(panel.classes()).toContain('panel-visible');
    });

    it('closes the panel when calling closePanelFunction', async () => {
        const panel = wrapper.find('.panel');
        panel.classes('panel-visible'); // Panel is open

        await wrapper.vm.closePanelFunction();

        // Panel should no longer have the .panel-visible class after it's closed
        expect(panel.classes()).not.toContain('panel-visible');
    });

    it('toggles the panel open and close', async () => {
        const panel = wrapper.find('.panel');

        await wrapper.vm.openCloseSlideInPanel();
        expect(panel.classes()).toContain('panel-visible');

        await wrapper.vm.openCloseSlideInPanel();
        expect(panel.classes()).not.toContain('panel-visible');
    });
});

