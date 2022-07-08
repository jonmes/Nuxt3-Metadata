<script setup>
import { watch } from "vue";
import { useField } from "vee-validate";
import Visible from "@/plugins/visible";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  rows: {
    type: String,
    default: "8",
    required: false,
  },
  id: String,
  placeholder: String,
  label: String,
  labelClass: String,
  trailingIcon: Function,
  rules: String,
  inputClass: String,
  placeholderStyle: String,
});
const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const set = (event) => {
  emit("update:modelValue", event.target.value);
};
watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
    // console.log("input value", inputValue.value);
  }
);
</script>
<template>
  <div>
    <label :for="id" :class="labelClass" class="block"
      ><span v-show="rules !== undefined" class="text-red-500"></span
      >{{ label }}</label
    >
    <slot name="label"></slot>
    <div class="relative mt-1 rounded-md shadow-sm">
      <textarea
        v-model="inputValue"
        @input="set($event)"
        :type="type"
        :name="name"
        :rows="rows"
        :id="id"
        :class="[
          props.placeholderStyle ? props.placeholderStyle : 'text-primary',
          !errorMessage
            ? 'hover:border-primary-2  border-1 border-gray-300 focus:border-primary focus:ring-primary'
            : 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500',
          props.inputClass ? props.inputClass : '',
        ]"
        class="text-hahugray block w-full rounded-md pr-10 text-base focus:outline-none"
        :placeholder="placeholder"
        aria-invalid="true"
        aria-describedby="email-error"
      />
    </div>
    <p
      :visible="errorMessage"
      class="mt-2 text-sm text-red-600"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
