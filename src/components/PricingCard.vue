<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PricingCard",
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({
                name: '',
                amount: '',
                description: '',
                cta: '',
            })
        },
    },
    computed: {
        // Evaluate the type of the card figure(Can it be parsed into an integer?)
        evaluateCardFigureType() { 
            // Pass cardFigure prop as integer
            const parsedCardFigure = parseInt(this.data?.amount);

            // Check if parsed figure is an integer
            if(!isNaN(parsedCardFigure)) {
                return typeof parsedCardFigure; // return data type of parsed card figure
            } 

            return typeof this.data?.amount
        }
    },  
    setup(props) {
        const pricingData = props.data;

        return {
            pricingData,
        }
    }
});
</script>

<template>
    <div class="pricing-card" v-if="pricingData">
        <div class="pricing-card-information">
            <small class="pricing-title">{{ pricingData.name }}</small>
            <h4 class="pricing-text" v-if="evaluateCardFigureType === 'number'">N{{ Number(pricingData.amount).toLocaleString() }}<span>/month</span> </h4>
            <h4 class="pricing-text" v-else>{{ pricingData.amount }}</h4>
            <p class="pricing-description">{{ pricingData.description }}</p>
        </div>
        <button type="button" class="choose-pricing-plan">
            {{ pricingData.cta }}
        </button>
    </div>
</template>

<style>

</style>