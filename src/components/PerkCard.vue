<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PerkCard",
    props: {
        className: {
            type: String,
            required: true,
            default: () => ('')
        },
        cardTitle: {
            type: String,
            required: true,
            default: () => ('')
        },
        cardListItem: {
            type: Array,
            required: true,
            default: () => ([])
        }
    },
    setup (props) { 
        // Access and use the props
        const customClassName = props.className;
        const title = props.cardTitle;
        const listPerks = props.cardListItem;

        return {
            customClassName,
            title,
            listPerks,
        }
    }
});
</script>

<template>
    <div class="support-offer-card" :class="customClassName">
        <div class="support-offer-card--banner">
            <div class="overlap-wrapper">
                <div class="overlap">
                    <div class="div"></div>
                    <div class="sales-support-sprite-group" v-if="customClassName === 'sales-offer'">
                        <div class="group">
                            <div class="overlap-group">
                                <img src="@/assets/images/Group-11176.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-2">
                                <img src="@/assets/images/Group-11176.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="div-wrapper">
                            <div class="overlap-3">
                                <img src="@/assets/images/Group-11176.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="group-2">
                            <div class="overlap-4">
                                <img src="@/assets/images/Group-11176.svg" alt="Sprite">
                            </div>
                        </div>
                    </div>

                    <div class="customer-support-sprite-group" v-if="customClassName === 'customer-offer'">
                        <div class="group">
                            <div class="overlap-group">
                                <img src="@/assets/images/Group-11166.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-2">
                                <img src="@/assets/images/Group-11166.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="div-wrapper">
                            <div class="overlap-3">
                                <img src="@/assets/images/Group-11166.svg" alt="Sprite">
                            </div>
                        </div>
                        <div class="group-2">
                            <div class="overlap-4">
                                <img src="@/assets/images/Group-11166.svg" alt="Sprite">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="support-offer-card--content">
            <div class="support-offer-card--content-wrapper">
                <div class="support-offer-card--content-wrapper-header">
                    <div class="support-offer-card-title">{{ title }}</div>
                </div>
                <div class="support-offer-card--content-wrapper-u">
                    <ul class="support-offer-card--content-wrapper-u-list">
                        <li v-for="(perk, index) in listPerks" :key="index">
                            {{ perk }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="support-offer-card--content-icon-wrapper">
                <img v-if="customClassName === 'sales-offer'" src="@/assets/images/sales-support-icon.svg" class="" alt="Sales Support Icon">
                <img v-else-if="customClassName === 'customer-offer'" src="@/assets/images/customer-icon.svg" class="" alt="Customer Support Icon">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.support-offer-card {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    overflow: hidden;
    border: 1px solid;
    border-radius: 1.25rem;
    border-color: $supplimentary-colors-w-hite-stroke;

    .sales-support-sprite-group {
        .group {
            top: 144px;
            left: 472px;
            position: absolute;
            width: 154px;
            height: 154px;
            transform: rotate(13.65deg);
            opacity: 1;
        }

        .overlap-group {
            position: relative;
            width: 167px;
            height: 211px;
            top: -21px;
            left: -35px;
        }

        .overlap-group-wrapper {
            top: 184px;
            left: 216px;
            position: absolute;
            width: 154px;
            height: 154px;
            transform: rotate(13.65deg);
            opacity: 1;
        }

        .overlap-2 {
            position: relative;
            width: 225px;
            height: 225px;
            top: -9px;
            left: -20px;
        }

        .div-wrapper {
            top: -6px;
            left: 272px;
            position: absolute;
            width: 154px;
            height: 154px;
            transform: rotate(13.65deg);
            opacity: 1;
        }

        .group-2 {
            top: 56px;
            left: 16px;
            position: absolute;
            width: 154px;
            height: 154px;
            transform: rotate(13.65deg);
            opacity: 1;
        }
    }

    .customer-support-sprite-group {
        .group {
            position: absolute;
            width: 139px;
            height: 121px;
            top: 52px;
            left: -10px;
            opacity: 1;
        }

        .overlap-group-wrapper {
            position: absolute;
            width: 166px;
            height: 66px;
            top: 26px;
            left: 290px;
            opacity: 1;
        }

        .div-wrapper {
            position: absolute;
            width: 139px;
            height: 121px;
            right: 70px;
            bottom: -150px;
            opacity: 1;

            @media (max-width: $sm) {
                position: absolute;
                right: -320px;
                bottom: -160px;
            }
        }

        .group-2 {
            position: relative;
            width: 166px;
            height: 121px;
            top: 180px;
            left: 140px;
            opacity: 1;
        }
    }

    &--banner {
        display: inline-flex;
        flex-direction: column;
        height: 180px;
        align-items: center;
        position: relative;

        .overlap-wrapper {
            position: relative;
            width: 488px;
            height: 263px;
            margin-bottom: -83px;
            background-color: #fce9d2;

            @media (max-width: $sm) {
                width: 100%;
            }
        }

        .overlap {
            position: relative;
            width: 642px;
            height: 429px;
            top: -82px;
            left: -95px;

            @media (max-width: $sm) {
                width: 100%;
            }
        }

        .div {
            position: absolute;
            width: 488px;
            height: 347px;
            top: 82px;
            left: 95px;
        }
    }

    &--content {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        flex: 1;
        flex-grow: 1;
        width: 100%;

        &-wrapper {
            display: flex;
            flex-direction: column;
            width: 488px;
            align-items: flex-start;
            gap: 48px;
            padding: 100px 32px 40px;
            position: relative;
            flex: 1;
            flex-grow: 1;
            background-color: #ffffff;
            border-radius: 20px 24px 0px 0px;
            overflow: hidden;

            &-header {
                display: flex;
                align-items: center;
                gap: 16px;
                position: relative;
                align-self: stretch;
                width: 100%;
                flex: 0 0 auto;

                .support-offer-card-title {
                    position: relative;
                    flex: 1;
                    margin-top: -1px;
                    font-family: "Recoleta SemiBold";
                    font-weight: 600;
                    color: $text-heading;
                    font-size: 32px;
                    text-align: center;
                    letter-spacing: 0;
                    line-height: 41.6px;
                }
            }

            &-u {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 24px;
                position: relative;
                align-self: stretch;
                width: 100%;
                flex: 0 0 auto;

                &-list {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;

                    li {
                        color: $text-body-text;
                        font-family: "Urbanist", sans-serif;
                        font-size: 1.125rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 140%;
                        position: relative;
                        padding-left: 2rem;
                        text-indent: -2.3rem;

                        @media (max-width: $sm) {
                            font-size: 1rem;
                        }
                    }
                }
            }

            @media (max-width: $sm) {
                width: 100%;
                padding: 100px 20px 30px;
                gap: 30px;
            }
        }

        &-icon-wrapper {
            display: flex;
            padding: 1.75rem;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 16px solid $white;
            position: absolute;
            width: 152px;
            height: 152px;
            top: -76px;
            z-index: 1;

            @media (min-width: $lg) {
                left: 168px;
            }

            @media (max-width: $sm) {
                padding: 1.35rem;
                width: 122px;
                height: 122px;
                top: -60px;
                border: 13px solid $white;
            }

            img {
                width: 4rem;
                height: 4rem;
                @media (max-width: $sm) {
                    width: 3rem;
                    height: 3rem;
                }
            }
        }
    }

    &.sales-offer {
        .div {
            background: #FCE9D2;
        }

        .support-offer-card--content {
            &-icon-wrapper {
                background: $supplimentary-colors-orange;
            }

            &-wrapper-u {
                &-list {
                    li {
                        &:before {
                            content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI2IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMjEuNTI0OCAzLjc0ODQ4QzIyLjc0NjEgNC45MTY4OSAyMy4yNjA2IDYuNTg1MjcgMjMuMjYxMSA4LjI0MzczQzIzLjI2MjMgMTAuMjI2OSAyMi41OTA5IDEyLjE4MjIgMjEuNjI1OSAxMy44OTI5QzIwLjQ3MDIgMTUuOTI1NiAxOC44OTEyIDE3LjY4NDcgMTYuOTk1NSAxOS4wNTEyQzE1LjMzMTcgMjAuMjQ4OSAxMy4zOTQyIDIxLjE2NDUgMTEuMzQ3NiAyMS40MjZDOS42Nzg2OCAyMS42Mzc2IDcuODk3MjMgMjEuMzkyNCA2LjUyODI0IDIwLjM0ODdDNS4xOTY5NSAxOS4zMzkxIDQuNTA0MjEgMTcuNzYzMiA0LjM3MzA4IDE2LjEyNTNDNC4yMTg2OSAxNC4xOTA2IDQuNzYyNjkgMTIuMjM0OCA1LjYxNTQ4IDEwLjUxN0M2LjY1ODA3IDguNDUwMzIgOC4xMzA5NyA2LjYzMjMgOS45MzUyOSA1LjE4NDk2QzExLjU2ODcgMy44NjMyMSAxMy40OTk4IDIuODI0ODggMTUuNTc1MiAyLjQwNDg3QzE3LjI0NjIgMi4wNjg1NyAxOS4wODMgMi4xNDQ1MyAyMC41ODQzIDMuMDM0NjlDMjAuOTIyNyAzLjIzNjQ0IDIxLjIzNzYgMy40NzUyMiAyMS41MjM0IDMuNzQ2NjFDMjEuNjIxIDMuODM3NTEgMjEuODQyNiAzLjU3MzEyIDIxLjc0MDkgMy40NzY2MUMyMC40NjYgMi4yNjk4NSAxOC43MDM0IDEuODM0OCAxNi45ODg4IDEuOTM2NDRDMTQuOTEyNSAyLjA1OTA5IDEyLjkwODEgMi44ODg2NyAxMS4xODEyIDQuMDEzMzhDOS4xNzM2OCA1LjMyODkzIDcuNDY5NSA3LjA1NzE5IDYuMTgxNDUgOS4wODM4MUM1LjA3NjM5IDEwLjg0MzMgNC4yNTc1NyAxMi44Njg4IDQuMTA2ODkgMTQuOTYxQzMuOTgzMDkgMTYuNjY4MyA0LjMzMDgyIDE4LjQ1MDkgNS40NTExOCAxOS43OTQ0QzYuNTcxNTMgMjEuMTM4IDguMjQzNDggMjEuNzU2NSA5Ljk0MjI4IDIxLjc5MzlDMTEuOTczNCAyMS44Mzg3IDEzLjk3MzEgMjEuMTQgMTUuNzExOCAyMC4xNDE0QzE3Ljc3OTQgMTguOTM3IDE5LjU2MzEgMTcuMzAxMSAyMC45NDIgMTUuMzQ0NUMyMi4xNzc3IDEzLjYwMTcgMjMuMTE2NyAxMS41OTA1IDIzLjQyNjIgOS40NjE0OUMyMy42NzU1IDcuNzQwMTkgMjMuNDk0OCA1Ljg3MzM0IDIyLjUxMTkgNC4zOTY4NUMyMi4yOTAxIDQuMDY0NjQgMjIuMDMyNyAzLjc1NzYyIDIxLjc0NDMgMy40ODEyOUMyMS42NDU5IDMuMzg1MjkgMjEuNDIzNCAzLjY1MDM1IDIxLjUyNDggMy43NDg0OFoiIGZpbGw9IiM0QTNBRkYiLz4KICA8cGF0aCBkPSJNMjMuOTIxNiA0LjU2ODY1QzI1LjA5MTEgNi4xNzU4OCAyNS4zMzU0IDguMjE4NDcgMjQuOTcyNSAxMC4xMzI4QzI0LjUzNTkgMTIuNDU1OSAyMy4zMjM4IDE0LjU3ODQgMjEuODEyNyAxNi4zNjI2QzIwLjA0MDggMTguNDQxIDE3Ljg0NzIgMjAuMTE3NyAxNS4zNzY4IDIxLjI4MTlDMTMuMjA0MyAyMi4zMDgyIDEwLjc3ODcgMjIuOTQxNSA4LjM2MzA3IDIyLjgxNTRDNi4zOTkxMiAyMi43MDYgNC40MDgxMiAyMi4wMzc0IDMuMDQ1MTggMjAuNTU2N0MxLjcxOTg3IDE5LjExNTggMS4yNjIyNSAxNy4xNDExIDEuNDYyMzkgMTUuMjMwNkMxLjY5OTkgMTIuOTQ3OCAyLjc2ODM2IDEwLjc5NjYgNC4xMzY5IDguOTg3MTRDNS43OTg1OCA2LjgxODA1IDcuOTA3MDkgNS4wMzI3NiAxMC4zMiAzLjc1MTg2QzEyLjQ3NzcgMi41OTczMyAxNC45MDA5IDEuODI1NDIgMTcuMzYxNSAxLjc3OTc5QzE5LjM2MjQgMS43NDc3OSAyMS40NTM0IDIuMjI2MSAyMy4wMDA3IDMuNTY5ODZDMjMuMzQ0IDMuODY3MyAyMy42NTI5IDQuMjAyMzQgMjMuOTIxNiA0LjU2ODY1QzI0LjAyODYgNC43MTU3IDI0LjI3ODcgNC40ODA3MSAyNC4xODQgNC4zNTA1MkMyMi45NzA0IDIuNjkyMzYgMjEuMDUyOCAxLjgxMjgzIDE5LjA1NzUgMS41NTQyOEMxNi42NjU0IDEuMjQ0ODkgMTQuMjA5NyAxLjc1ODI1IDEyLjAwMDcgMi42NTc4OEM5LjQwNjIzIDMuNzI3NTIgNy4wNzE2NyA1LjM0MDI0IDUuMTUzMjIgNy4zODgxNUMzLjQ2NTc5IDkuMTg4OTUgMi4wNzkxNyAxMS4zNjM5IDEuNDUxMyAxMy43Njc1QzAuOTQyOTggMTUuNzE3NCAwLjk2NjI1MyAxNy44NzIxIDEuOTc5MzggMTkuNjY0N0MyLjk3MTAyIDIxLjQyIDQuNzYzMTUgMjIuNTA5NyA2LjY5MjA2IDIyLjkxODNDOS4wMDU1MiAyMy40MDggMTEuNDQ2MyAyMy4wNTQ1IDEzLjY1ODEgMjIuMjkwM0MxNi4yODkxIDIxLjM1NzcgMTguNjg4IDE5Ljg3MDcgMjAuNjkzIDE3LjkyOTRDMjIuNTA2NCAxNi4xODAyIDI0LjAyNzQgMTQuMDU2NCAyNC44NDgyIDExLjY1NzFDMjUuNTE1MSA5LjcwOTI4IDI1LjY5NzQgNy41MDk1MyAyNC44NzQ4IDUuNTcyNkMyNC42OTE1IDUuMTQyMjIgMjQuNDYwNCA0LjczMzc2IDI0LjE4NTggNC4zNTQ5NEMyNC4wNzU0IDQuMjAzMjEgMjMuODI2OSA0LjQzODQ2IDIzLjkyMTYgNC41Njg2NVoiIGZpbGw9IiM0QTNBRkYiLz4KICA8cGF0aCBkPSJNMjMuOTIxNiA0LjU2ODY1QzI1LjA5MTEgNi4xNzU4OCAyNS4zMzU0IDguMjE4NDcgMjQuOTcyNSAxMC4xMzI4QzI0LjUzNTkgMTIuNDU1OSAyMy4zMjM4IDE0LjU3ODQgMjEuODEyNyAxNi4zNjI2QzIwLjA0MDggMTguNDQxIDE3Ljg0NzIgMjAuMTE3NyAxNS4zNzY4IDIxLjI4MTlDMTMuMjA0MyAyMi4zMDgyIDEwLjc3ODcgMjIuOTQxNSA4LjM2MzA3IDIyLjgxNTRDNi4zOTkxMiAyMi43MDYgNC40MDgxMiAyMi4wMzc0IDMuMDQ1MTggMjAuNTU2N0MxLjcxOTg3IDE5LjExNTggMS4yNjIyNSAxNy4xNDExIDEuNDYyMzkgMTUuMjMwNkMxLjY5OTkgMTIuOTQ3OCAyLjc2ODM2IDEwLjc5NjYgNC4xMzY5IDguOTg3MTRDNS43OTg1OCA2LjgxODA1IDcuOTA3MDkgNS4wMzI3NiAxMC4zMiAzLjc1MTg2QzEyLjQ3NzcgMi41OTczMyAxNC45MDA5IDEuODI1NDIgMTcuMzYxNSAxLjc3OTc5QzE5LjM2MjQgMS43NDc3OSAyMS40NTM0IDIuMjI2MSAyMy4wMDA3IDMuNTY5ODZDMjMuMzQ0IDMuODY3MyAyMy42NTI5IDQuMjAyMzQgMjMuOTIxNiA0LjU2ODY1Wk0yMy45MjE2IDQuNTY4NjVDMjQuMDI4NiA0LjcxNTcgMjQuMjc4NyA0LjQ4MDcxIDI0LjE4NCA0LjM1MDUyQzIyLjk3MDQgMi42OTIzNiAyMS4wNTI4IDEuODEyODMgMTkuMDU3NSAxLjU1NDI4QzE2LjY2NTQgMS4yNDQ4OSAxNC4yMDk3IDEuNzU4MjUgMTIuMDAwNyAyLjY1Nzg4QzkuNDA2MjMgMy43Mjc1MiA3LjA3MTY3IDUuMzQwMjQgNS4xNTMyMiA3LjM4ODE1QzMuNDY1NzkgOS4xODg5NSAyLjA3OTE3IDExLjM2MzkgMS40NTEzIDEzLjc2NzVDMC45NDI5OCAxNS43MTc0IDAuOTY2MjUzIDE3Ljg3MjEgMS45NzkzOCAxOS42NjQ3QzIuOTcxMDIgMjEuNDIgNC43NjMxNSAyMi41MDk3IDYuNjkyMDYgMjIuOTE4M0M5LjAwNTUyIDIzLjQwOCAxMS40NDYzIDIzLjA1NDUgMTMuNjU4MSAyMi4yOTAzQzE2LjI4OTEgMjEuMzU3NyAxOC42ODggMTkuODcwNyAyMC42OTMgMTcuOTI5NEMyMi41MDY0IDE2LjE4MDIgMjQuMDI3NCAxNC4wNTY0IDI0Ljg0ODIgMTEuNjU3MUMyNS41MTUxIDkuNzA5MjggMjUuNjk3NCA3LjUwOTUzIDI0Ljg3NDggNS41NzI2QzI0LjY5MTUgNS4xNDIyMiAyNC40NjA0IDQuNzMzNzYgMjQuMTg1OCA0LjM1NDk0QzI0LjA3NTQgNC4yMDMyMSAyMy44MjY5IDQuNDM4NDYgMjMuOTIxNiA0LjU2ODY1Wk0yMS41MjQ4IDMuNzQ4NDhDMjIuNzQ2MSA0LjkxNjg5IDIzLjI2MDYgNi41ODUyNyAyMy4yNjExIDguMjQzNzNDMjMuMjYyMyAxMC4yMjY5IDIyLjU5MDkgMTIuMTgyMiAyMS42MjU5IDEzLjg5MjlDMjAuNDcwMiAxNS45MjU2IDE4Ljg5MTIgMTcuNjg0NyAxNi45OTU1IDE5LjA1MTJDMTUuMzMxNyAyMC4yNDg5IDEzLjM5NDIgMjEuMTY0NSAxMS4zNDc2IDIxLjQyNkM5LjY3ODY3IDIxLjYzNzYgNy44OTcyMyAyMS4zOTI0IDYuNTI4MjQgMjAuMzQ4N0M1LjE5Njk1IDE5LjMzOTEgNC41MDQyMSAxNy43NjMyIDQuMzczMDggMTYuMTI1M0M0LjIxODY5IDE0LjE5MDYgNC43NjI2OSAxMi4yMzQ4IDUuNjE1NDggMTAuNTE3QzYuNjU4MDcgOC40NTAzMiA4LjEzMDk3IDYuNjMyMyA5LjkzNTI5IDUuMTg0OTZDMTEuNTY4NyAzLjg2MzIxIDEzLjQ5OTggMi44MjQ4OCAxNS41NzUyIDIuNDA0ODdDMTcuMjQ2MiAyLjA2ODU3IDE5LjA4MyAyLjE0NDUzIDIwLjU4NDMgMy4wMzQ2OUMyMC45MjI3IDMuMjM2NDQgMjEuMjM3NiAzLjQ3NTIyIDIxLjUyMzQgMy43NDY2MUMyMS42MjEgMy44Mzc1MSAyMS44NDI2IDMuNTczMTIgMjEuNzQwOSAzLjQ3NjYxQzIwLjQ2NiAyLjI2OTg1IDE4LjcwMzQgMS44MzQ4IDE2Ljk4ODggMS45MzY0NEMxNC45MTI1IDIuMDU5MDkgMTIuOTA4MSAyLjg4ODY3IDExLjE4MTIgNC4wMTMzOEM5LjE3MzY4IDUuMzI4OTMgNy40Njk1IDcuMDU3MTkgNi4xODE0NSA5LjA4MzgxQzUuMDc2MzkgMTAuODQzMyA0LjI1NzU3IDEyLjg2ODggNC4xMDY4OSAxNC45NjFDMy45ODMwOSAxNi42NjgzIDQuMzMwODIgMTguNDUwOSA1LjQ1MTE4IDE5Ljc5NDRDNi41NzE1MyAyMS4xMzggOC4yNDM0OCAyMS43NTY1IDkuOTQyMjggMjEuNzkzOUMxMS45NzM0IDIxLjgzODcgMTMuOTczMSAyMS4xNCAxNS43MTE4IDIwLjE0MTRDMTcuNzc5NCAxOC45MzcgMTkuNTYzMSAxNy4zMDExIDIwLjk0MiAxNS4zNDQ1QzIyLjE3NzcgMTMuNjAxNyAyMy4xMTY3IDExLjU5MDUgMjMuNDI2MiA5LjQ2MTQ5QzIzLjY3NTUgNy43NDAxOSAyMy40OTQ4IDUuODczMzQgMjIuNTExOSA0LjM5Njg1QzIyLjI5MDEgNC4wNjQ2NCAyMi4wMzI3IDMuNzU3NjIgMjEuNzQ0MyAzLjQ4MTI5QzIxLjY0NTkgMy4zODUyOSAyMS40MjM0IDMuNjUwMzUgMjEuNTI0OCAzLjc0ODQ4WiIgc3Ryb2tlPSIjRkY5ODFGIi8+Cjwvc3ZnPg==");
                            margin-right: 0.5rem;
                            position: relative;
                            top: 0.5rem;
                            transform: rotate(-36.04deg);
                        }
                    }
                }
            }
        }
    }

    &.customer-offer {
        .div {
            background: #D2E5FC;
        }

        .support-offer-card--content {
            &-icon-wrapper {
                background: $supplimentary-colors-blue;
            }

            &-wrapper-u {
                &-list {
                    li {
                        &:before {
                            content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI2IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMjEuNTI0OCAzLjc0ODQ4QzIyLjc0NjEgNC45MTY4OSAyMy4yNjA2IDYuNTg1MjcgMjMuMjYxMSA4LjI0MzczQzIzLjI2MjMgMTAuMjI2OSAyMi41OTA5IDEyLjE4MjIgMjEuNjI1OSAxMy44OTI5QzIwLjQ3MDIgMTUuOTI1NiAxOC44OTEyIDE3LjY4NDcgMTYuOTk1NSAxOS4wNTEyQzE1LjMzMTcgMjAuMjQ4OSAxMy4zOTQyIDIxLjE2NDUgMTEuMzQ3NiAyMS40MjZDOS42Nzg2OCAyMS42Mzc2IDcuODk3MjMgMjEuMzkyNCA2LjUyODI0IDIwLjM0ODdDNS4xOTY5NSAxOS4zMzkxIDQuNTA0MjEgMTcuNzYzMiA0LjM3MzA4IDE2LjEyNTNDNC4yMTg2OSAxNC4xOTA2IDQuNzYyNjkgMTIuMjM0OCA1LjYxNTQ4IDEwLjUxN0M2LjY1ODA3IDguNDUwMzIgOC4xMzA5NyA2LjYzMjMgOS45MzUyOSA1LjE4NDk2QzExLjU2ODcgMy44NjMyMSAxMy40OTk4IDIuODI0ODggMTUuNTc1MiAyLjQwNDg3QzE3LjI0NjIgMi4wNjg1NyAxOS4wODMgMi4xNDQ1MyAyMC41ODQzIDMuMDM0NjlDMjAuOTIyNyAzLjIzNjQ0IDIxLjIzNzYgMy40NzUyMiAyMS41MjM0IDMuNzQ2NjFDMjEuNjIxIDMuODM3NTEgMjEuODQyNiAzLjU3MzEyIDIxLjc0MDkgMy40NzY2MUMyMC40NjYgMi4yNjk4NSAxOC43MDM0IDEuODM0OCAxNi45ODg4IDEuOTM2NDRDMTQuOTEyNSAyLjA1OTA5IDEyLjkwODEgMi44ODg2NyAxMS4xODEyIDQuMDEzMzhDOS4xNzM2OCA1LjMyODkzIDcuNDY5NSA3LjA1NzE5IDYuMTgxNDUgOS4wODM4MUM1LjA3NjM5IDEwLjg0MzMgNC4yNTc1NyAxMi44Njg4IDQuMTA2ODkgMTQuOTYxQzMuOTgzMDkgMTYuNjY4MyA0LjMzMDgyIDE4LjQ1MDkgNS40NTExOCAxOS43OTQ0QzYuNTcxNTMgMjEuMTM4IDguMjQzNDggMjEuNzU2NSA5Ljk0MjI4IDIxLjc5MzlDMTEuOTczNCAyMS44Mzg3IDEzLjk3MzEgMjEuMTQgMTUuNzExOCAyMC4xNDE0QzE3Ljc3OTQgMTguOTM3IDE5LjU2MzEgMTcuMzAxMSAyMC45NDIgMTUuMzQ0NUMyMi4xNzc3IDEzLjYwMTcgMjMuMTE2NyAxMS41OTA1IDIzLjQyNjIgOS40NjE0OUMyMy42NzU1IDcuNzQwMTkgMjMuNDk0OCA1Ljg3MzM0IDIyLjUxMTkgNC4zOTY4NUMyMi4yOTAxIDQuMDY0NjQgMjIuMDMyNyAzLjc1NzYyIDIxLjc0NDMgMy40ODEyOUMyMS42NDU5IDMuMzg1MjkgMjEuNDIzNCAzLjY1MDM1IDIxLjUyNDggMy43NDg0OFoiIGZpbGw9IiM0QTNBRkYiLz4KICA8cGF0aCBkPSJNMjMuOTIxNiA0LjU2ODY1QzI1LjA5MTEgNi4xNzU4OCAyNS4zMzU0IDguMjE4NDcgMjQuOTcyNSAxMC4xMzI4QzI0LjUzNTkgMTIuNDU1OSAyMy4zMjM4IDE0LjU3ODQgMjEuODEyNyAxNi4zNjI2QzIwLjA0MDggMTguNDQxIDE3Ljg0NzIgMjAuMTE3NyAxNS4zNzY4IDIxLjI4MTlDMTMuMjA0MyAyMi4zMDgyIDEwLjc3ODcgMjIuOTQxNSA4LjM2MzA3IDIyLjgxNTRDNi4zOTkxMiAyMi43MDYgNC40MDgxMiAyMi4wMzc0IDMuMDQ1MTggMjAuNTU2N0MxLjcxOTg3IDE5LjExNTggMS4yNjIyNSAxNy4xNDExIDEuNDYyMzkgMTUuMjMwNkMxLjY5OTkgMTIuOTQ3OCAyLjc2ODM2IDEwLjc5NjYgNC4xMzY5IDguOTg3MTRDNS43OTg1OCA2LjgxODA1IDcuOTA3MDkgNS4wMzI3NiAxMC4zMiAzLjc1MTg2QzEyLjQ3NzcgMi41OTczMyAxNC45MDA5IDEuODI1NDIgMTcuMzYxNSAxLjc3OTc5QzE5LjM2MjQgMS43NDc3OSAyMS40NTM0IDIuMjI2MSAyMy4wMDA3IDMuNTY5ODZDMjMuMzQ0IDMuODY3MyAyMy42NTI5IDQuMjAyMzQgMjMuOTIxNiA0LjU2ODY1QzI0LjAyODYgNC43MTU3IDI0LjI3ODcgNC40ODA3MSAyNC4xODQgNC4zNTA1MkMyMi45NzA0IDIuNjkyMzYgMjEuMDUyOCAxLjgxMjgzIDE5LjA1NzUgMS41NTQyOEMxNi42NjU0IDEuMjQ0ODkgMTQuMjA5NyAxLjc1ODI1IDEyLjAwMDcgMi42NTc4OEM5LjQwNjIzIDMuNzI3NTIgNy4wNzE2NyA1LjM0MDI0IDUuMTUzMjIgNy4zODgxNUMzLjQ2NTc5IDkuMTg4OTUgMi4wNzkxNyAxMS4zNjM5IDEuNDUxMyAxMy43Njc1QzAuOTQyOTggMTUuNzE3NCAwLjk2NjI1MyAxNy44NzIxIDEuOTc5MzggMTkuNjY0N0MyLjk3MTAyIDIxLjQyIDQuNzYzMTUgMjIuNTA5NyA2LjY5MjA2IDIyLjkxODNDOS4wMDU1MiAyMy40MDggMTEuNDQ2MyAyMy4wNTQ1IDEzLjY1ODEgMjIuMjkwM0MxNi4yODkxIDIxLjM1NzcgMTguNjg4IDE5Ljg3MDcgMjAuNjkzIDE3LjkyOTRDMjIuNTA2NCAxNi4xODAyIDI0LjAyNzQgMTQuMDU2NCAyNC44NDgyIDExLjY1NzFDMjUuNTE1MSA5LjcwOTI4IDI1LjY5NzQgNy41MDk1MyAyNC44NzQ4IDUuNTcyNkMyNC42OTE1IDUuMTQyMjIgMjQuNDYwNCA0LjczMzc2IDI0LjE4NTggNC4zNTQ5NEMyNC4wNzU0IDQuMjAzMjEgMjMuODI2OSA0LjQzODQ2IDIzLjkyMTYgNC41Njg2NVoiIGZpbGw9IiM0QTNBRkYiLz4KICA8cGF0aCBkPSJNMjMuOTIxNiA0LjU2ODY1QzI1LjA5MTEgNi4xNzU4OCAyNS4zMzU0IDguMjE4NDcgMjQuOTcyNSAxMC4xMzI4QzI0LjUzNTkgMTIuNDU1OSAyMy4zMjM4IDE0LjU3ODQgMjEuODEyNyAxNi4zNjI2QzIwLjA0MDggMTguNDQxIDE3Ljg0NzIgMjAuMTE3NyAxNS4zNzY4IDIxLjI4MTlDMTMuMjA0MyAyMi4zMDgyIDEwLjc3ODcgMjIuOTQxNSA4LjM2MzA3IDIyLjgxNTRDNi4zOTkxMiAyMi43MDYgNC40MDgxMiAyMi4wMzc0IDMuMDQ1MTggMjAuNTU2N0MxLjcxOTg3IDE5LjExNTggMS4yNjIyNSAxNy4xNDExIDEuNDYyMzkgMTUuMjMwNkMxLjY5OTkgMTIuOTQ3OCAyLjc2ODM2IDEwLjc5NjYgNC4xMzY5IDguOTg3MTRDNS43OTg1OCA2LjgxODA1IDcuOTA3MDkgNS4wMzI3NiAxMC4zMiAzLjc1MTg2QzEyLjQ3NzcgMi41OTczMyAxNC45MDA5IDEuODI1NDIgMTcuMzYxNSAxLjc3OTc5QzE5LjM2MjQgMS43NDc3OSAyMS40NTM0IDIuMjI2MSAyMy4wMDA3IDMuNTY5ODZDMjMuMzQ0IDMuODY3MyAyMy42NTI5IDQuMjAyMzQgMjMuOTIxNiA0LjU2ODY1Wk0yMy45MjE2IDQuNTY4NjVDMjQuMDI4NiA0LjcxNTcgMjQuMjc4NyA0LjQ4MDcxIDI0LjE4NCA0LjM1MDUyQzIyLjk3MDQgMi42OTIzNiAyMS4wNTI4IDEuODEyODMgMTkuMDU3NSAxLjU1NDI4QzE2LjY2NTQgMS4yNDQ4OSAxNC4yMDk3IDEuNzU4MjUgMTIuMDAwNyAyLjY1Nzg4QzkuNDA2MjMgMy43Mjc1MiA3LjA3MTY3IDUuMzQwMjQgNS4xNTMyMiA3LjM4ODE1QzMuNDY1NzkgOS4xODg5NSAyLjA3OTE3IDExLjM2MzkgMS40NTEzIDEzLjc2NzVDMC45NDI5OCAxNS43MTc0IDAuOTY2MjUzIDE3Ljg3MjEgMS45NzkzOCAxOS42NjQ3QzIuOTcxMDIgMjEuNDIgNC43NjMxNSAyMi41MDk3IDYuNjkyMDYgMjIuOTE4M0M5LjAwNTUyIDIzLjQwOCAxMS40NDYzIDIzLjA1NDUgMTMuNjU4MSAyMi4yOTAzQzE2LjI4OTEgMjEuMzU3NyAxOC42ODggMTkuODcwNyAyMC42OTMgMTcuOTI5NEMyMi41MDY0IDE2LjE4MDIgMjQuMDI3NCAxNC4wNTY0IDI0Ljg0ODIgMTEuNjU3MUMyNS41MTUxIDkuNzA5MjggMjUuNjk3NCA3LjUwOTUzIDI0Ljg3NDggNS41NzI2QzI0LjY5MTUgNS4xNDIyMiAyNC40NjA0IDQuNzMzNzYgMjQuMTg1OCA0LjM1NDk0QzI0LjA3NTQgNC4yMDMyMSAyMy44MjY5IDQuNDM4NDYgMjMuOTIxNiA0LjU2ODY1Wk0yMS41MjQ4IDMuNzQ4NDhDMjIuNzQ2MSA0LjkxNjg5IDIzLjI2MDYgNi41ODUyNyAyMy4yNjExIDguMjQzNzNDMjMuMjYyMyAxMC4yMjY5IDIyLjU5MDkgMTIuMTgyMiAyMS42MjU5IDEzLjg5MjlDMjAuNDcwMiAxNS45MjU2IDE4Ljg5MTIgMTcuNjg0NyAxNi45OTU1IDE5LjA1MTJDMTUuMzMxNyAyMC4yNDg5IDEzLjM5NDIgMjEuMTY0NSAxMS4zNDc2IDIxLjQyNkM5LjY3ODY3IDIxLjYzNzYgNy44OTcyMyAyMS4zOTI0IDYuNTI4MjQgMjAuMzQ4N0M1LjE5Njk1IDE5LjMzOTEgNC41MDQyMSAxNy43NjMyIDQuMzczMDggMTYuMTI1M0M0LjIxODY5IDE0LjE5MDYgNC43NjI2OSAxMi4yMzQ4IDUuNjE1NDggMTAuNTE3QzYuNjU4MDcgOC40NTAzMiA4LjEzMDk3IDYuNjMyMyA5LjkzNTI5IDUuMTg0OTZDMTEuNTY4NyAzLjg2MzIxIDEzLjQ5OTggMi44MjQ4OCAxNS41NzUyIDIuNDA0ODdDMTcuMjQ2MiAyLjA2ODU3IDE5LjA4MyAyLjE0NDUzIDIwLjU4NDMgMy4wMzQ2OUMyMC45MjI3IDMuMjM2NDQgMjEuMjM3NiAzLjQ3NTIyIDIxLjUyMzQgMy43NDY2MUMyMS42MjEgMy44Mzc1MSAyMS44NDI2IDMuNTczMTIgMjEuNzQwOSAzLjQ3NjYxQzIwLjQ2NiAyLjI2OTg1IDE4LjcwMzQgMS44MzQ4IDE2Ljk4ODggMS45MzY0NEMxNC45MTI1IDIuMDU5MDkgMTIuOTA4MSAyLjg4ODY3IDExLjE4MTIgNC4wMTMzOEM5LjE3MzY4IDUuMzI4OTMgNy40Njk1IDcuMDU3MTkgNi4xODE0NSA5LjA4MzgxQzUuMDc2MzkgMTAuODQzMyA0LjI1NzU3IDEyLjg2ODggNC4xMDY4OSAxNC45NjFDMy45ODMwOSAxNi42NjgzIDQuMzMwODIgMTguNDUwOSA1LjQ1MTE4IDE5Ljc5NDRDNi41NzE1MyAyMS4xMzggOC4yNDM0OCAyMS43NTY1IDkuOTQyMjggMjEuNzkzOUMxMS45NzM0IDIxLjgzODcgMTMuOTczMSAyMS4xNCAxNS43MTE4IDIwLjE0MTRDMTcuNzc5NCAxOC45MzcgMTkuNTYzMSAxNy4zMDExIDIwLjk0MiAxNS4zNDQ1QzIyLjE3NzcgMTMuNjAxNyAyMy4xMTY3IDExLjU5MDUgMjMuNDI2MiA5LjQ2MTQ5QzIzLjY3NTUgNy43NDAxOSAyMy40OTQ4IDUuODczMzQgMjIuNTExOSA0LjM5Njg1QzIyLjI5MDEgNC4wNjQ2NCAyMi4wMzI3IDMuNzU3NjIgMjEuNzQ0MyAzLjQ4MTI5QzIxLjY0NTkgMy4zODUyOSAyMS40MjM0IDMuNjUwMzUgMjEuNTI0OCAzLjc0ODQ4WiIgc3Ryb2tlPSIjMUE5NkYwIi8+Cjwvc3ZnPg==");
                            margin-right: 0.5rem;
                            position: relative;
                            top: 0.5rem;
                            transform: rotate(-36.04deg);
                        }
                    }
                }
            }
        }
    }
}
</style>