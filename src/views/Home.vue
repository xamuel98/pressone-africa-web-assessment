<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useApiService } from '../services/api.service';
import MetricCard from "@/components/MetricCard.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import PerkCard from "@/components/PerkCard.vue";
import PricingCard from "@/components/PricingCard.vue";

const { getPricingPlans } = useApiService();

const pricingList = ref(null);
const parsedKeys = ref(null);

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
        const response  = await getPricingPlans('swQ1ic'); // GET api call
        pricingList.value = response.data;

        // Get the property names for the last 3 properties (call_reception, calls_per_week, agent)
        parsedKeys.value = Object.keys(pricingList.value[0]).slice(-3);  
        
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
            <div class="box-2">
                <img class="group" src="@/assets/images/Group-136.svg" alt="Blob Shape" />
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
                        <div class="pricing-section-container-content--top__pricing-cards" v-if="pricingList">
                            <PricingCard 
                                v-for="data in pricingList"
                                :key="data.id"
                                :data="data"
                            />
                        </div>
                        <div class="error" v-else>
                            <p>Can't retrieve pricing plans!</p>
                        </div>
                    </div>

                    <div class="pricing-section-container-content--bottom">
                        <table class="table" v-if="pricingList">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Starter Plan</th>
                                    <th scope="col">Growth Plan</th>
                                    <th scope="col">All Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(key, index) in parsedKeys" :key="index">
                                    <td>{{ key }}</td>
                                    <td v-for="(data, index) in pricingList" :key="index">{{ data[key] }}</td>
                                </tr>
                            </tbody>
                        </table>
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
                                            <div class="frame-12" v-if="pricingList">
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

        <TheFooter />
    </main>
</template>

<style lang="scss">

</style>