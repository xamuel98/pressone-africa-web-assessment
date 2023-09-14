<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TheFooter",
})
</script>

<template>
    <footer class="footer">
        <div class="container footer-wrapper">
            <div class="footer-wrapper--content">
                <div class="footer-left-menu">
                    <img src="@/assets/images/pressOneAfricaLogo.svg" alt="PressOne Africa Logo">
                    <div class="pressone-contact-information">
                        <div class="pressone-contact-information-items">
                            <a class="contact-item" href="mailto:hello@pressone.africa">hello@pressone.africa</a>
                            <a class="contact-item" href="tel:+234 1 343 8962">+234 1 343 8962</a>
                        </div>
                        <div class="pressone-social-links">
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
                <div class="footer-middle-menu order-2">
                    <h4 class="footer-menu-section-header">Company</h4>
                    <ul class="footer-menu-section-links">
                        <li>
                            <router-link to="/">Help &amp; Support</router-link>
                        </li>
                        <li>
                            <router-link to="/">About Us</router-link>
                        </li>
                        <li>
                            <router-link to="/">Product</router-link>
                        </li>
                        <li>
                            <router-link to="/">Media</router-link>
                        </li>
                        <li>
                            <router-link to="/">FAQs</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-middle-menu order-3">
                    <h4 class="footer-menu-section-header">Address</h4>
                    <ul class="footer-menu-section-links">
                        <li>
                            <address>The Lennox Mall, 3 Admiralty Way, <br> Lekki Phase 1, Lagos</address>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-wrapper--extras">
                <div class="extra-item">
                    <p class="text">© {{ new Date().getFullYear() }} PressOne Africa</p>
                    <p class="text">All rights reserved</p>
                </div>
                <div class="extra-item">
                    <a href="/" class="text">Terms &amp; Agreement</a>
                    <a href="/" class="text">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>

</style>