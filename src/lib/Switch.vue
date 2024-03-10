<template>
    <div class="switch-box">
        <button :class="{ checked: props.modelValue, disabled: props.disabled }"
            @click="hanleToggle"><span></span></button>
    </div>
</template>
<script lang="ts" setup>
// defineProps, defineEmits
import { ref, withDefaults, } from 'vue';
const emit = defineEmits(["update:modelValue"])
const props = withDefaults(defineProps<{
    modelValue?: boolean,
    disabled?: boolean
}>(), {
    modelValue: false,
    disabled: false
})
const hanleToggle = () => {
    if (props.disabled) {
        return;
    }
    emit('update:modelValue', !props.modelValue)
}
</script>
<style lang="scss" scoped>
$switch-background-color: #ca91f8;
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    background-color: #999;
    border-radius: calc($h / 2);
    position: relative;

    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: calc($h2 / 2);
        transition: 0.25s all;
    }

    &.checked {
        background-color: $switch-background-color;

        >span {
            left: calc(100% - $h2 - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &.disabled {
        opacity: 0.3;
    }
}
</style>