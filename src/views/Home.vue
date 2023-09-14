<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useApiService } from '../services/api.service';
import MetricCard from "@/components/MetricCard.vue";
import TheNavbar from "../components/TheNavbar.vue";
import PerkCard from "@/components/PerkCard.vue";
import PricingCard from "@/components/PricingCard.vue";

const { getPricingPlans } = useApiService();

const pricingList = ref(null);

const metricTextArray = ref([
    '75% of consumers prefer human interactions to automated interactions.',
    '81% of consumers say a positive customer service experience increases the chances of them making another purchase.',
    '76% of surveyed customers contact customer service over the phone.',
    '68% of buyers will pay more for products and services from a company with a strong record of good customer service.'
]);

const salesPerkItems = ref([
    'We handle your enquiries, orders, reservations and help improve your customers\' experience.',
    'We send a weekly report of custom sales through a personalized dashboard for your business.',
    'You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.'
]);

const customerPerkItems = ref([
    'We handle all your customer calls and help them transition through each phase of their customer journey.',
    'We send a weekly report of customer engagement through a personalized dashboard for your business.',
    'You can monitor the calls, hear the conversations and make instant decisions that would grow your business at a glance.'
]);

const fetchPricingData = async() => {
    try {
        const response  = await getPricingPlans('swQ1ic');
        pricingList.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchPricingData();
})
</script>

<template>
    <main>
        <TheNavbar />
        
        <section class="hero-section">
            <div class="container container-lg container-xxl hero-section-container">
                <div class="hero-section-left">
                    <div class="hero-section-left--text">
                        <div class="wraptext-container">
                            <h1>You do the work, <br> We'll do the talk</h1>
                            <h5>Move your customers' <span class="emphasize-text">enquiry</span> to our team of experts</h5>
                        </div>
                        <p>
                            Let us manage your customer relationship from their first call till they become your raving fans
                        </p>
                    </div>
                    <router-link to="/" class="get-started-button">
                        Get Started
                    </router-link>
                </div>
                <div class="group">
                    <div class="overlap">
                        <div class="overlap-group">
                            <div class="div-4"></div>
                            <div class="overlap-group-wrapper">
                                <div class="overlap-group-2">
                                    <img class="mask-group" src="@/assets/images/Frame-11258.svg" />
                                </div>
                            </div>
                        </div>
                        <img class="highlight-sprite highlight-1" src="@/assets/images/highlight-1.svg" />
                        <img class="highlight-sprite highlight-2" src="@/assets/images/highlight-2.svg" />
                    </div>
                </div>
            </div>
            <div class="box-1">
                <img class="group" src="@/assets/images/Group-137.svg" alt="Blob Shape" />
            </div>
        </section>

        <!-- Metric Section -->
        <section class="metric-section">
            <div class="container metric-section-container">
                <div class="metric-items">
                    <MetricCard 
                        v-for="(message, index) in metricTextArray" 
                        :key="index" 
                        :text="message" 
                    />
                </div>
            </div>
        </section>

        <!-- Support Offers Section -->
        <section class="support-offers-section">
            <div class="container support-offers-section-container">
                <h1 class="support-offer-section-header">What you get</h1>
                <div class="support-offer-items">
                    <PerkCard 
                        className="sales-offer" 
                        cardTitle="Sales Support" 
                        :cardListItem="salesPerkItems"
                    />

                    <PerkCard 
                        className="customer-offer" 
                        cardTitle="Customer Support" 
                        :cardListItem="customerPerkItems"
                    />
                </div>
            </div>
            <div class="box-1">
                <img class="group" src="@/assets/images/Group-136.svg" alt="Blob Shape" />
            </div>
            <div class="box-2">
                <img class="group" src="@/assets/images/Group-137.svg" alt="Blob Shape" />
            </div>
        </section>

        <!-- Pricing Section -->
        <section class="pricing-section">
            <div class="container pricing-section-container">
                <h1 class="pricing-section-container-header">Choose a plan that works for you</h1>
                <div class="pricing-section-container-content">
                    <div class="pricing-section-container-content--top">
                        <div class="pressone-africa-logo-wrapper">
                            <img src="@/assets/images/pressone-africa-logo-2.svg" alt="PressOne Africa Logo">
                        </div>
                        <div class="pricing-section-container-content--top__pricing-cards">
                            <PricingCard 
                                v-for="data in pricingList"
                                :key="data.id"
                                :data="data"
                            />
                        </div>
                    </div>
                    <div class="plan-section">
                        <div class="frame-wrapper">
                            <div class="frame-7">
                                <div class="div-wrapper">
                                    <div class="frame-8">
                                        <div class="frame-9">
                                            <div class="frame-7">
                                                <div class="frame-10">
                                                    <div class="text-wrapper-6">Call Reception</div>
                                                </div>
                                                <div class="frame-11">
                                                    <div class="text-wrapper-6">Calls per Week</div>
                                                </div>
                                                <div class="frame-10">
                                                    <div class="text-wrapper-6">Agents</div>
                                                </div>
                                            </div>
                                            <div class="frame-12">
                                                <div :class="index === 1 ? 'frame-16' : 'frame-13'" v-for="(data, index) in pricingList" :key="data.id">
                                                    <div :class="index === 2 ? 'frame-17' : 'frame-14'">
                                                        <div :class="index === 2 ? 'text-wrapper-8' : 'text-wrapper-7'">{{ data.call_reception }}</div>
                                                    </div>
                                                    <div :class="index === 2 ? 'frame-17' : 'frame-15'" :style="{backgroundColor: `${index === 2 ? 'transparent' : ''}`}">
                                                        <div :class="index === 2 ? 'text-wrapper-8' : 'text-wrapper-7'">{{ data.calls_per_week }}</div>
                                                    </div>
                                                    <div :class="index === 2 ? 'frame-17' : 'frame-14'">
                                                        <div :class="index === 2 ? 'text-wrapper-8' : 'text-wrapper-7'">{{ data.agent }}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-1">
                <img class="group" src="@/assets/images/Group-136.svg" alt="Blob Shape" />
            </div>
        </section>

        <section class="container join-section">
            <div class="join-section-container">
                <img class="blob-left" src="@/assets/images/Group-140.svg" />
                <img class="blob-right" src="@/assets/images/Group-141.svg" />
                <div class="join-section-container--content">
                    <h4 class="join-invite-text">Join thousands of entrepreneurs using PressOne to improve their business communications.</h4>
                    <p class="join-invite-sub-text">Ready to make your customers love your business?</p>
                </div>
                <router-link to="/" class="join-pressone-africa-action--button">Join Now</router-link>
            </div>
        </section>

        <footer class="footer">
            <div class="footer-wrapper">
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
    </main>
</template>

<style lang="scss">
// ---------- HERO SECTION ----------------
.hero-section {
    padding-top: calc(6rem + 6.6rem);
    position: relative;
    overflow: hidden;

    &-container {
        display: flex;
        padding-top: 2.5rem;
        padding-bottom: 5rem;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;

        @media (max-width: $sm) {
            flex-direction: column-reverse;
        }

        .hero-section-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4rem;
            width: 100%;
            
            &--text {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;

                .wraptext-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2rem;

                    h1, h5 {
                        font-style: normal;
                        line-height: 130%;
                    }

                    h1 {
                        width: 42.875rem;
                        color: $text-heading;
                        font-family: "Recoleta SemiBold";
                        font-size: 4rem;
                        font-weight: 600;

                        @media (max-width: $sm) {
                            font-size: 2.8rem;
                            width: 100%;
                        }
                    }

                    h5 {
                        width: 35rem;
                        color: $dark-colors-dark-3;
                        font-family: "Recoleta Bold";
                        font-size: 2rem;
                        font-weight: 700;
                        span.emphasize-text {
                            color: $primary-blue;
                        }

                        @media (max-width: $sm) {
                            font-size: 1.45rem;
                            width: 100%;
                        }
                    }

                    @media (max-width: $sm) {
                        gap: 1.5rem;
                    }
                }

                p {
                    color: $text-body-text;
                    font-family: "Urbanist", sans-serif;;
                    font-size: 1.25rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%;
                    width: 35.75rem;

                    @media (max-width: $sm) {
                        font-size: 1rem;
                        width: 100%;
                    }
                }

                @media (max-width: $sm) {
                    gap: .7rem;
                }
            }

            .get-started-button {
                display: flex;
                height: 3.5rem;
                padding: 0.875rem 7rem;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                border-radius: 0.25rem;
                background: $primary-blue;
                color: $white;
                text-align: center;
                font-family: "Urbanist", sans-serif;
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                transition: .3s all;
                &:hover {
                    transition: .3s all;
                    background: $primary-blue-800;
                }

                @media (max-width: $sm) {
                    width: 100%;
                    font-size: 1rem;
                }
            }

            @media (max-width: $sm) {
                gap: 3rem;
            }
        }

        .group {
            position: relative;
            width: 552.93px;
            height: 532px;

            .overlap {
                position: relative;
                width: 553px;
                height: 532px;

                .overlap-group {
                    position: absolute;
                    width: 553px;
                    height: 532px;
                    top: 0;
                    left: 0;

                    .div-4 {
                        position: absolute;
                        width: 311px;
                        height: 433px;
                        top: 0;
                        left: 0;
                        background-color: #d9d9d9;
                        border-radius: 6.98px;
                        background-image: url(../assets/images/Frame-11259.svg);
                        background-size: 100% 100%;

                        @media(max-width: $sm) {
                            width: 215px;
                            height: 300px;
                        }
                    }

                    .overlap-group-wrapper {
                        position: absolute;
                        width: 311px;
                        height: 415px;
                        top: 117px;
                        left: 220px;
                        overflow: hidden;

                        .overlap-group-2 {
                            position: relative;
                            width: 332px;
                            height: 401px;
                            top: 0;
                            left: 0;
                            border-radius: 0px 0px 348.85px 0px;

                            .mask-group {
                                position: absolute;
                                width: 297px;
                                height: 380px;
                                top: 10px;
                                left: -10px;

                                @media(max-width: $sm) {
                                    width: 225px;
                                    height: 310px;
                                    left: -3px;
                                }
                            }

                            @media(max-width: $sm) {
                                width: 320px;
                                height: 387px;
                            }
                        }

                        @media(max-width: $sm) {
                            width: 298px;
                            height: 403px;
                            left: 120px;
                        }
                    }

                    @media(max-width: $sm) {
                        width: 266px;
                        height: 433px;
                    }
                }
            }

            @media(max-width: $sm) {
                width: 349.93px;
                height: 500px;
            }
        }
        
        img.highlight-sprite {
            position: absolute;
            &.highlight-1 {
                width: 74px;
                height: 92px;
                top: 13px;
                left: 337px;

                @media(max-width: $sm) {
                    left: 260px;
                }
            }

            &.highlight-2 {
                width: 44px;
                height: 55px;
                top: 450px;
                left: 168px;

                @media(max-width: $sm) {
                    top: 330px;
                    left: 60px;
                }
            }
        }
    }

    .box-1 {
        width: 995px;
        height: 750px;
        position: absolute;
        top: 4rem;
        right: -23.5rem;

        .group {
            position: absolute;
            width: 995px;
            height: 750px;
            top: 0;
            left: 0;
        }
    }

    svg {
        position: absolute;
    }

    img.blob {
        position: absolute;

        &.left-blob {
            left: 0;
        }

        &.right-blob {
            top: 0;
            right: 0;
        }
    }

    @media (max-width: $sm) {
        padding-top: 6.6rem;
    }
}

// ---------- METRIC SECTION ----------------
.metric-section {
    background: $primary-blue;
    position: relative;
    z-index: 1;

    .metric-section-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 0.5rem;
        padding-top: 5rem;
        padding-bottom: 5rem;
        width: 100%;
        
        .metric-items {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            align-items: flex-end;
            gap: 2rem;
            align-self: stretch;
            width: 100%;
            
            .metric-item {
                grid-column: span 4 / span 4;
                display: flex;
                width: 100%;
                height: 16rem;
                justify-content: center;
                align-items: flex-end;
                position: relative;

                &--inner {
                    height: 12.5rem;
                    flex: 1 0 0;
                    border-radius: 1.05rem;
                    background: $white;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0.75rem 0;

                    .metric-icon-wrapper {
                        position: absolute;
                        top: -25%;
                        z-index: 1;
                        display: flex;
                        width: 7.25rem;
                        height: 7.25rem;
                        padding: 1.375rem;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        border: 12px solid $white;
                        background: #F3F8FE;

                        img.icon {
                            width: 3.5rem;
                            height: 3.5rem;
                        }
                    }

                    .text-wrapper {
                        display: flex;
                        width: 100%;
                        height: 100%;
                        padding: 4rem 1rem 1rem 1rem;
                        margin: .8rem;
                        justify-content: center;
                        align-items: flex-start;
                        gap: 0.5rem;
                        border-radius: 0.625rem;
                        background: #F3F8FE;

                        p {
                            color: $text-sub-heading;
                            text-align: center;
                            font-family: "Urbanist", sans-serif;
                            font-size: 1rem;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 140%;
                            -webkit-box-pack: justify;
                        }
                    }
                }
            }

            @media (min-width: $md) {
                .metric-item {
                    grid-column: span 2 / span 2;
                }
            }

            @media (min-width: $lg) {
                .metric-item {
                    grid-column: span 1 / span 1;
                }
            }
        }
    }
}

// ---------- SUPPORT OFFERS SECTION ----------------
.support-offers-section {
    padding-top: $container-padding-x;
    padding-bottom: $container-padding-x;
    overflow: hidden;

    &-container {
        width: 100%;
        max-width: 80rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        position: relative;
        z-index: 1;

        h1.support-offer-section-header {
            color: $text-heading;
            text-align: center;
            font-family: "Recoleta SemiBold";
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 600;
            line-height: 130%;
        }

        .support-offer-items {
            display: flex;
            width: 100%;
            gap: 5rem;
            justify-content: space-between;
            align-items: stretch;

            @media (max-width: $sm) {
                flex-direction: column;
            }
        }
    }

    .box-1 {
        width: 995px;
        height: 750px;
        position: absolute;
        top: -7rem;
        left: -10rem;

        .group {
            position: absolute;
            width: 995px;
            height: 750px;
            top: 0;
            left: 0;
        }
    }

    .box-2 {
        width: 954px;
        height: 750px;
        position: absolute;
        right: -15rem;
        top: 13rem;

        .group {
            position: absolute;
            width: 995px;
            height: 750px;
            top: 0;
            left: 0;
        }
    }

    @media (max-width: $sm) {
        padding-top: calc($container-padding-x - 2rem);
        padding-bottom: calc($container-padding-x - 2rem);
    }
}

// ---------- PRICING SECTION ----------------
.pricing-section {
    background: transparent;
    padding-top: calc($container-padding-x - 2.5rem);
    padding-bottom: calc($container-padding-x - 2.5rem);

    @media(max-width: $sm) {
        overflow: hidden;
    }

    &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        position: relative;
        z-index: 1;

        &-header {
            color: $text-heading;
            text-align: center;
            font-family: "Recoleta SemiBold";
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 600;
            line-height: 130%;
        }

        &-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            width: 100%;

            @media (max-width: $sm) {
                width: 100%;
            }

            &--top {
                display: flex;
                width: 100%;
                justify-content: flex-end;
                align-items: flex-start;
                gap: 1.5rem;

                @media (max-width: $sm) {
                    flex-direction: column;
                }

                .pressone-africa-logo-wrapper {
                    display: flex;
                    // height: 14.6875rem;
                    padding: 1.5rem;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 2.5rem;
                    flex: 1 0 0;
                    border-radius: 0.75rem;

                    @media (max-width: $sm) {
                        width: 100%;
                    }

                    img {
                        width: 7.5rem;
                        height: 9.35981rem;
                        
                        @media (max-width: $sm) {
                            width: 4.5rem;
                            height: 5.35981rem;
                        }
                    }
                }

                &__pricing-cards {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    align-items: flex-start;
                    gap: 1.5rem;
                    // width: 991px;
                    width: 1120px;

                    @media (max-width: $sm) {
                        width: 100%;
                    }

                    .pricing-card {
                        grid-column: span 1 / span 1;
                        display: flex;
                        width: 100%;
                        padding: 1.5rem;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2.5rem;
                        border-radius: 0.75rem;
                        border: 1px solid $text-sup-text-1;

                        @media (max-width: $sm) {
                            grid-column: span 3 / span 3;
                        }

                        &-information {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 0.5rem;
                            flex-grow: 1;
                            width: 100%;

                            small.pricing-title, 
                            p.pricing-description,
                            h4.pricing-text span {
                                font-family: "Urbanist", sans-serif;
                            }
                            
                            small.pricing-title {
                                color: $primary-blue;
                                text-align: center;
                                font-size: 1rem;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 130%;
                            }

                            h4.pricing-text {
                                color: $text-heading;
                                text-align: center;
                                font-family: "Recoleta SemiBold";
                                font-size: 2rem;
                                font-style: normal;
                                font-weight: 600;
                                line-height: 130%;

                                span {
                                    color: $text-placeholder;
                                    font-size: 0.875rem;
                                    font-style: normal;
                                    font-weight: 500;
                                    line-height: 140%;
                                }
                            }

                            p.pricing-description {
                                color: $text-body-text;
                                white-space: nowrap;
                                text-align: center;
                                font-size: 1rem;
                                font-style: normal;
                                font-weight: 500;
                                line-height: 130%;
                            }
                        }

                        button.choose-pricing-plan {
                            display: flex;
                            padding: 0.875rem 4rem;
                            justify-content: center;
                            align-items: center;
                            gap: 0.5rem;
                            align-self: stretch;
                            outline: 0;
                            border: 0;
                            box-shadow: none;
                            width: 100%;
                            border-radius: 0.25rem;
                            background: $primary-blue;
                            color: $white;
                            text-align: center;
                            font-family: "Urbanist", sans-serif;
                            font-size: 1rem;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            white-space: nowrap;
                            letter-spacing: 0;
                            cursor: pointer;
                            user-select: none;
                            transition: .3s all;
                            &:hover {
                                transition: .3s all;
                                background: $primary-blue-800;
                            }
                        }
                    }
                }
            }

            &--bottom {
                width: 100%;
                table {
                    &.table {
                        width: 100%;
                        caption-side: bottom;
                        border-collapse: collapse;
                        vertical-align: top;
                        margin-bottom: 0;

                        > :not(caption) > * > * {
                            padding: 1rem;
                            text-align: center;
                            color: $text-sub-heading;
                            font-family: "Urbanist", sans-serif;
                            font-size: 1.125rem;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 140%;

                            &:first-of-type {
                                border-radius: 0.5rem 0rem 0rem 0.5rem;
                            }

                            &:last-of-type {
                                color: $primary-blue;
                                font-size: 1.125rem;
                                font-weight: 700;
                                border-radius: 0rem 0.5rem 0.5rem 0rem;
                            }
                        }

                        > tbody > tr {
                            &:nth-of-type(odd) {
                                border-radius: 0.5rem;
                                color: $white;

                                > * {
                                    background: #EAF1F6;
                                }
                            }
                        } 

                    }
                }
            }

            .plan-section {
                width: 100%;
                
                @media(max-width: $sm) {
                    display: none;
                }

                .frame-wrapper {
                    display: flex;
                    // width: 1272px;
                    width: 100%;
                    align-items: center;
                    position: relative;
                    flex: 0 0 auto;
                }

                .frame-7 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    position: relative;
                    flex: 1;
                    flex-grow: 1;
                }

                .div-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 24px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                }

                .frame-8 {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                }

                .frame-9 {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                }

                .frame-10 {
                    padding: 16px 8px 16px 32px;
                    border-radius: 8px 0px 0px 8px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                    background-color: #e9f1f5;
                }

                .text-wrapper-6 {
                    position: relative;
                    width: fit-content;
                    margin-top: -1px;
                    letter-spacing: 0;
                    white-space: nowrap;
                    color: $text-sub-heading;
                    font-family: "Urbanist", sans-serif;
                    font-size: 1.125rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%;
                }

                .frame-11 {
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    padding: 16px 8px 16px 32px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                }

                .frame-12 {
                    display: flex;
                    width: 1120px;
                    align-items: flex-start;
                    position: relative;
                }

                .frame-13 {
                    display: flex;
                    flex-direction: column;
                    width: 314px;
                    align-items: center;
                    position: relative;
                }

                .frame-14 {
                    justify-content: center;
                    padding: 16px 8px;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                    background-color: #e9f1f5;
                }

                .text-wrapper-7 {
                    position: relative;
                    width: fit-content;
                    margin-top: -1px;
                    letter-spacing: 0;
                    white-space: nowrap;
                    color: $text-body-text;
                    font-family: "Urbanist", sans-serif;
                    font-size: 1.125rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%;
                }

                .frame-15 {
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 8px;
                    padding: 16px 8px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                }

                .frame-16 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    flex: 1;
                    flex-grow: 1;
                }

                .frame-17 {
                    justify-content: center;
                    padding: 16px 8px;
                    border-radius: 0px 8px 8px 0px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    position: relative;
                    align-self: stretch;
                    width: 100%;
                    flex: 0 0 auto;
                    background-color: #e9f1f5;
                }

                .text-wrapper-8 {
                    position: relative;
                    width: fit-content;
                    margin-top: -1px;
                    letter-spacing: 0;
                    white-space: nowrap;
                    color: $primary-blue;
                    font-family: "Urbanist", sans-serif;
                    font-size: 1.125rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 140%;
                }
            }
        }
    }

    .box-1 {
        width: 995px;
        height: 750px;
        position: absolute;
        left: -13rem;
        top: 32rem;

        .group {
            position: absolute;
            width: 995px;
            height: 750px;
            top: 0;
            left: 0;
        }
    }

}

// ---------- JOIN SECTION ----------------
.join-section {
    padding-top: $container-padding-x;
    padding-bottom: $container-padding-x;
    background: transparent;

    .join-section-container {
        display: flex;
        flex-direction: column;
        width: 1148px;
        margin: auto;
        align-items: center;
        gap: 40px;
        padding: 56px 120px;
        position: relative;
        background-color: $primary-blue;
        border-radius: 20px;
        overflow: hidden;

        @media (max-width: $sm) {
            padding: 4.5rem 2.5rem;
            width: 100%;
        }

        img {
            &.blob-left {
                width: 498px;
                left: 650px;
                position: absolute;
                height: 354px;
                top: 0;
            }

            &.blob-right {
                width: 474px;
                left: 0;
                position: absolute;
                height: 354px;
                top: 0;

                @media (max-width: $sm) {
                    left: -50%;
                    top: 0;
                }
            }
        }

        &--content {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-self: stretch;
            width: 100%;
            flex: 0 0 auto;
            align-items: center;
            position: relative;

            h4.join-invite-text {
                position: relative;
                align-self: stretch;
                margin-top: -1px;
                font-family: "Recoleta SemiBold";
                font-weight: 600;
                color: $white;
                font-size: 40px;
                text-align: center;
                letter-spacing: 0;
                line-height: 52px;

                @media (max-width: $sm) {
                    font-size: 2rem;
                }
            }

            p.join-invite-sub-text {
                position: relative;
                align-self: stretch;
                font-family: "Urbanist", sans-serif;
                font-weight: 500;
                color: $textsub-heading-light;
                font-size: 20px;
                text-align: center;
                letter-spacing: 0;
                line-height: 26px;

                @media (max-width: $sm) {
                    font-size: 1.1rem;
                }
            }
        }

        

        .join-pressone-africa-action--button {
            display: inline-flex;
            height: 56px;
            justify-content: center;
            gap: 8px;
            padding: 14px 112px;
            background-color: $white;
            border-radius: 4px;
            overflow: hidden;
            align-items: center;
            position: relative;
            text-decoration: none;
            width: fit-content;
            font-family: "Urbanist", sans-serif;
            font-weight: 700;
            color: $primary-blue;
            font-size: 18px;
            text-align: center;
            letter-spacing: 0;
            line-height: normal;
            user-select: none;
            white-space: nowrap;
            transition: .3s all;

            @media (max-width: $sm) {
                width: 100%;
            }
        }
    }
}

// ---------- FOOTER SECTION ----------------
.footer {
    display: flex;
    padding: 5rem 12.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    background: #FEF8E7;
    overflow: hidden;

    &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        align-self: stretch;

        &--content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;

            .footer-left-menu {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2.5rem;

                img {
                    width: 4rem;
                    height: 3.14588rem;
                }

                .pressone-contact-information {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 1.5rem;

                    &-items {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;

                        a.contact-item {
                            color: $text-sub-heading;
                            text-align: center;
                            font-family: "Urbanist", sans-serif;
                            font-size: 1.125rem;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                            text-decoration: none;
                            transition: .3s all;

                            &:hover {
                                color: #3b3f41;
                                transition: .3s all;
                            }

                            @media (max-width: $sm) {
                                font-size: 1rem;
                            }
                        }
                    }

                    .pressone-social-links {
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-start;
                        gap: 1.5rem;

                        a {
                            text-decoration: none;
                            
                            img {
                                width: 1.5rem;
                                height: 1.5rem;

                                @media (max-width: $sm) {
                                    width: 1.2rem;
                                    height: 1.2rem;
                                }
                            }

                            @media (max-width: $sm) {
                                width: 1.2rem;
                                height: 1.2rem;
                            }
                        }

                        @media (max-width: $sm) {
                            gap: 1rem;
                        }
                    }
                }

                @media (max-width: $sm) {
                    grid-column: span 1 / span 1;
                    order: 1;
                }
            }

            .footer-middle-menu {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;

                @media (max-width: $sm) {
                    &.order-2 {
                        grid-column: span 1 / span 1;
                        order: 2;
                    }

                    &.order-3 {
                        grid-column: span 2 / span 2;
                        order: 3;
                    }
                }

                @media (max-width: $sm) {
                    gap: 1rem;
                }
            }

            .footer-menu-section-header {
                color: $text-heading;
                text-align: center;
                font-family: "Urbanist", sans-serif;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 140%;

                @media (max-width: $sm) {
                    font-size: 1.2rem;
                }
            }

            ul.footer-menu-section-links {
                margin: 0;
                padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 1rem;

                li {
                    address,
                    a {
                        font-family: "Urbanist", sans-serif;
                        font-size: 1.125rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 140%;

                        @media (max-width: $sm) {
                            font-size: 1rem;
                        }
                    }

                    a {
                        color: $text-body-text;
                        text-decoration: none;
                        transition: .3s all;

                        &:hover {
                            color: #3b3f41;
                            transition: .3s all;
                        }
                    }

                    address {
                        color: $text-sub-heading;
                        text-align: right;

                        @media (max-width: $sm) {
                            text-align: left;
                        }
                    }
                }

                @media (max-width: $sm) {
                    gap: .8rem;
                }
            }

            @media (max-width: $sm) {
                gap: 2rem;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        &--extras {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
            width: 100%;

            .extra-item {
                gap: 24px;
                display: inline-flex;
                align-items: center;
                position: relative;
                flex: 0 0 auto;
                .text {
                    position: relative;
                    width: fit-content;
                    margin-top: -1px;
                    color: $text-sub-heading;
                    font-family: "Urbanist", sans-serif;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 140%;
                    letter-spacing: 0;
                    white-space: nowrap;
                    text-decoration: none;

                    @media (max-width: $sm) {
                        font-size: .9rem;
                        font-weight: 500;
                    }
                }
            }

            @media (max-width: $sm) {
                flex-wrap: wrap;
                justify-content: center;
                row-gap: 0.9rem;
                padding-top: 1rem;
            }
        }
    }

    @media (max-width: $sm) {
        padding: 5rem 2rem 2rem;
    }
}
</style>