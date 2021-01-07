<template>
    <div class="antialiased bg-gray-200 min-h-screen p-8" id="tabs" style="animation-delay:1s; animation-duration:4s;">
        <div class="flex justify-center">
            <nav id="nav" class="w-56 relative">
      <span
              class="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"
              :style="{ transform: `translateY(calc(100% * ${selected}))` }"
      ></span>
                <ul class="relative">
                    <li>
                        <button id="buttonSpan"
                                type="button"
                                @click="select(0)"
                                :aria-selected="selected === 0"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                        >
                            <svg id="buttonSvg"
                                 :class="selected === 0 ? 'text-indigo-400' : 'text-gray-500'"
                                 class="h-6 w-6 transition-all ease-out transition-medium"
                                 viewBox="0 0 24 24"
                                 fill="currentColor"

                            >
                                <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
                                />
                            </svg>
                            <span
                                    :class="selected === 0 ? 'text-indigo-600' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                            >
              首页
            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnimatedVerticalTabs",
        data() {
            return {
                selected: 0
            }
        },
        methods: {
            select(i) {
                this.selected = i;
            }
        }
    }
</script>

<style scoped>
    /*@import "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css";*/
    @import "../../static/css/tailwind/tailwind.min.css";

    #tabs {
        width: 15%;
        transition: .4s;
        /*font-family: Comfortaa;*/
    }

    /*.bg-gray-200 {
        transition: .4s;
    }*/

    /*#buttonSvg {
        transition: .4s;
    }*/

    .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }

    .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        background-size: cover
    }

    .ease-in-out {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    .transition-fastest {
        transition-duration: 75ms;
    }

    .transition-faster {
        transition-duration: 100ms;
    }

    .transition-fast {
        transition-duration: 150ms;
    }

    .transition-medium {
        transition-duration: 200ms;
    }

    .transition-slow {
        transition-duration: 300ms;
    }

    .transition-slower {
        transition-duration: 500ms;
    }

    .transition-slowest {
        transition-duration: 700ms;
    }

    .transition-all {
        transition-property: all;
    }

    .transition-opacity {
        transition-property: opacity;
    }

    .transition-transform {
        transition-property: transform;
    }

    .focus-visible.focus-visible\:underline {
        text-decoration: underline;
    }

    @media (max-width: 933px) {
        #buttonSpan {
            /*width: 90%;*/
            display: none;
        }

        .bg-gray-200 {
            width: 0;
            /*background-color: white;*/
        }
        .p-8 {
            padding: 0;
        }


        #tabs {
            /*display: none;*/
            width: 0;
            /*display: none;*/
        }
    }

    @media (max-width: 1071px) {
        span {
            display: none;
        }
        /*span {
            display: none;
        }*/
    }

    @media (max-width: 934px) {
        #buttonSvg {
            width: 0;
        }
    }

</style>
