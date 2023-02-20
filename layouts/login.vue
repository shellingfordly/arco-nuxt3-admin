
<template>
    <div class="h-[100%] relative <xl:bg-v-dark <sm:px-10px <xl:px-10px <md:px-10px">
        <div class="relative h-full flex mx-auto">
            <div :class="`left flex-1 bg-gray-500 bg-opacity-20 relative p-30px <xl:hidden`">
                <div class="flex justify-center items-center h-[calc(100%-60px)]">
                    <TransitionGroup appear tag="div" enter-active-class="animate__animated animate__bounceInLeft">
                        <img src="~/assets/login-box-bg.svg" key="1" alt="" class="w-350px" />
                        <div class="text-3xl text-white" key="2">Arco Nuxt Admin</div>
                        <div class="mt-5 font-normal text-white text-14px" key="3">
                            管理系统
                        </div>
                    </TransitionGroup>
                </div>
            </div>
            <div class="flex-1 p-30px <sm:p-10px dark:bg-v-dark relative">
                <div class="flex justify-between items-center text-white @2xl:justify-end @xl:justify-end"></div>
                <Transition appear enter-active-class="animate__animated animate__bounceInRight">
                    <div
                        class="h-full flex items-center m-auto w-[100%] @2xl:max-w-500px @xl:max-w-500px @md:max-w-500px @lg:max-w-500px">
                        <div class="w-[100%]">
                            <h2 class="text-2xl font-bold text-center w-[100%]">登录</h2>
                            <slot />
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.left {
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-image: url("~/assets/login-bg.svg");
        background-position: center;
        background-repeat: no-repeat;
        content: "";
    }
}
</style>
