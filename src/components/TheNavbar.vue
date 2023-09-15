<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from 'vue-router';

const toggleFunction = ref(false);
let panel = ref(null);
let hamburger = ref(null);
let navbar = ref(null);
let overlay = ref(null);

// Close side panel
const closePanelFunction = () => {
    if(panel.value?.classList?.contains('panel-visible')) {
        panel.value?.classList?.remove('panel-visible');
        hamburger.value?.classList?.remove('is--active');

        // Remove overlay
        let backDrop = document.querySelector('.panel-overlay');
        backDrop.remove();
    }
};

// Open side panel
const openPanelFunction = () => {
    if(!panel.value?.classList?.contains('panel-visible')) {
        panel.value?.classList?.add('panel-visible');
        hamburger.value?.classList?.add('is--active');

        // Add overlay
        let elem = document.createElement('div');
        elem.className = 'panel-overlay';
        document.body.appendChild(elem);

        // Create an action to click overlay to close panel
        overlay.value = document.querySelector('.panel-overlay');
        
        if (overlay.value !== null || overlay.value !== undefined) {
            overlay.value.addEventListener('click', () => {
                if(panel.value?.classList?.contains('panel-visible')) {
                    panel.value?.classList?.remove('panel-visible')
                    // document.body.style.overflow = 'auto'
            
                    // Remove overlay
                    let backDrop = document.querySelector('.panel-overlay');
                    backDrop.remove();
                }
            })
        }
    }
};

// Toggle Open and Close Menu Functions
const openCloseSlideInPanel = () => {
    toggleFunction.value = !toggleFunction.value;

    if(toggleFunction.value) {
        // Open Menu
        openPanelFunction();
    } else {
        closePanelFunction();
    }
};

onMounted(() => {
    // Hide sidebar panel on browser resize
    const browserResized = (x) => {
        if (x.matches || panel.value?.classList.contains('panel-visible')) { // If media query matches
            closePanelFunction()
        }
    }

    let x = window.matchMedia("(max-width: 768px)")
    browserResized(x) // Call listener function at run time
    x.addListener(browserResized) // Attach listener function on state changes

    /* Navbar OnScroll Animation */
    let curScroll: number;
    let prevScroll = window.scrollY || document.documentElement.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;

    /*
        How it works:
        -------------
        * Create a scroll event listener
        * Create function to check scroll position on each scroll event,
        * Compare curScroll and prevScroll values to find the scroll direction
        * Scroll up - 1, scroll down - 2, initial - 0
        * Then set the direction value to curDirection
        * Compare curDirection and prevDirection
        * If it is different, call a function to show or hide the navbar

        Example:
            - step 1: user scrolls down: curDirection 2, prevDirection 0 > hide navbar
            - step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
            - step 3: user scrolls up: curDirection 1, prevDirection 2 > show navbar
    */

    let header = document.querySelector('.custom-navbar');
    let toggled: boolean;
    let threshold = 200;

    const checkScroll = () => {
        curScroll = window.scrollY || document.documentElement.scrollTop;
        navbar.value?.classList?.toggle("__shadow", window.scrollY > 0)
        // console.log(curScroll, prevScroll);
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    const toggleHeader = () => { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header?.classList?.add('hide');
        }
        else if (curDirection === 1) {
            header?.classList?.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);
});
</script>

<template>
    <header ref="navbar" class="custom-navbar">
        <nav class="container">
            <!-- pressOne Africa Logo -->
            <router-link to="/">
                <img src="@/assets/images/pressOneAfricaLogo.svg" class="navbar-brand-logo" alt="pressOne Africa Logo">
            </router-link>

            <!-- Animated Menu Icon -->
            <div ref="hamburger" id="burger" class="md-right" @click="openCloseSlideInPanel">
                <button type="button" title="Menu" class="menu-button">
                    <span class="menu-bar menu-bar--1"></span> 
                    <span class="menu-bar menu-bar--2"></span> 
                    <span class="menu-bar menu-bar--3"></span>
                </button>
            </div>

            <!-- Desktop, Laptops, Tablet screens -->
            <div class="lg-right">
                <!-- Links -->
                <div class="custom-navbar-links">
                    <router-link to="/" class="custom-navbar-links--link">
                        <span class="">About Us</span>
                    </router-link>
                    <router-link to="/" class="custom-navbar-links--link">
                        <span class="">Pricing</span>
                    </router-link>
                    <router-link to="/" class="custom-navbar-links--link">
                        <span class="">Product</span>
                    </router-link>
                    <router-link to="/" class="custom-navbar-links--link">
                        <span class="">Support</span>
                    </router-link>
                </div>

                <!-- Get Started -->
                <router-link to="/" class="get-pressone-button">Get PressOne</router-link>
            </div>

            <!-- Slide-In Panel -->
            <div ref="panel" class="panel panel-half">
                <div class="scrollable panel-scrollable">
                    <div class="scrollable-content">
                        <div class="panel-content menu-section">
                            <div class="">
                                <ul class="panel-u-list">
                                    <li class="panel-menu-item">
                                        <router-link to="/" class="panel-menu-link">
                                            <span class="panel-menu-link-title">
                                                <span data-text="About Us">
                                                    About Us
                                                </span>
                                            </span>
                                        </router-link>
                                    </li>
                                    <li class="panel-menu-item">
                                        <router-link to="/" class="panel-menu-link">
                                            <span class="panel-menu-link-title">
                                                <span data-text="Pricing">
                                                    Pricing
                                                </span>
                                            </span>
                                        </router-link>
                                    </li>
                                    <li class="panel-menu-item">
                                        <router-link to="/" class="panel-menu-link">
                                            <span class="panel-menu-link-title">
                                                <span data-text="Product">
                                                    Product
                                                </span>
                                            </span>
                                        </router-link>
                                    </li>
                                    <li class="panel-menu-item">
                                        <router-link to="/" class="panel-menu-link">
                                            <span class="panel-menu-link-title">
                                                <span data-text="Support">
                                                    Support
                                                </span>
                                            </span>
                                        </router-link>
                                    </li>
                                </ul>
                                <div class="panel-action-buttons">
                                    <!-- Get Started -->
                                    <router-link to="/" class="get-pressone-button">Get PressOne</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="panel-footer-menu">
                                <div class="">
                                    <div class="panel-footer-links">
                                        <a href="https://pressone.africa/terms-and-agreement/" target="_blank" rel="noreferrer noopener" class="panel-footer-link">Terms &amp; Agreement</a>
                                        <a href="https://pressone.africa/privacy-policy/" target="_blank" rel="noreferrer noopener" class="panel-footer-link">Privacy Policy</a>
                                    </div>
                                </div>
                                <div class="panel-footer-socials">
                                    <a href="https://www.facebook.com/pressone.africa" target="_blank" rel="noreferrer noopener">
                                        <img src="@/assets/images/facebook-icon.svg" alt="PressOne Africa Facebook">
                                    </a>
                                    <a href="https://twitter.com/Pressone_africa" target="_blank" rel="noreferrer noopener">
                                        <img src="@/assets/images/twitter-icon.svg" alt="PressOne Africa Twitter">
                                    </a>
                                    <a href="https://instagram.com/pressone.africa" target="_blank" rel="noreferrer noopener">
                                        <img src="@/assets/images/instagram-icon.svg" alt="PressOne Africa Instagram">
                                    </a>
                                    <a href="https://www.linkedin.com/company/pressone-africa/" target="_blank" rel="noreferrer noopener">
                                        <img src="@/assets/images/linkedin-icon.svg" alt="PressOne Africa LinkedIn">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">

</style>