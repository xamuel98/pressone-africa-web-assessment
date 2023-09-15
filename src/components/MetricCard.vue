<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MetricCard",
    props: {
        text: {
            type: String,
            required: true,
            default: () => ('Custom Default Message')
        }
    },
    setup(props) { 
        // Access and use the props
        const message = props.text;

        return {
            message,
        };
    }
});
</script>

<template>
    <div class="metric-item">
        <div class="metric-item--inner">
            <div class="metric-icon-wrapper">
                <img src="@/assets/images/user-group.svg" class="icon" alt="User Group Icon">
            </div>
            <div class="text-wrapper">
                <p>{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<style>

</style>