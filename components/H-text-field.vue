<script setup>
import { useField } from "vee-validate";
import Visible from "@/plugins/visible";
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
  id: {
    type: String,
    default: undefined,
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  placeholder: {
    type: String,
    default: undefined,
    required: false,
  },
  label: {
    type: String,
    default: undefined,
    required: false,
  },
  labelClass: {
    type: String,
    default: () => "",
    required: false,
  },
  hideDetail: {
    type: Boolean,
    default: false,
    required: false,
  },
  trailingIcon: {
    type: Function,
    default: undefined,
    required: false,
  },
  leadingIcon: {
    type: Function,
    default: undefined,
    required: false,
  },
  min: String,
  max: String,
  rules: {
    type: String,
    default: "",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  class: String,
  iconLeadingClass: String,
  placeholderStyle: String,
  iconBackground: Boolean,
  mainDiv: String,
});
const emit = defineEmits(["update:modelValue"]);

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const type = ref(props.type);

const set = (event) => {
  emit("update:modelValue", event.target.value);
};

const togglePassword = () => {
  if (type.value === "password") {
    type.value = "text";
    return;
  }
  if (type.value === "text") {
    type.value = "password";
  }
};

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);
</script>
<template>
  <div :class="mainDiv">
    <slot name="label"></slot>
    <div class="relative rounded-md font-body shadow-sm" :class="props.class">
      <div
        v-if="props.leadingIcon"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4"
        :class="
          iconBackground && !errorMessage
            ? 'rounded-l-lg border border-gray-300 bg-gray-50'
            : 'rounded-l-lg border border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500'
        "
      >
        <component
          class="h-5 w-5 text-gray-400 hover:cursor-pointer"
          :is="props.leadingIcon"
        ></component>
      </div>
      <input
        v-model="inputValue"
        @input="set($event)"
        @change="set($event)"
        :min="min"
        :max="max"
        :type="type"
        :name="props.name"
        step="any"
        :id="id"
        :class="[
          errorMessage
            ? 'border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-1  border-gray-300 hover:border-primary focus:border-primary focus:ring-primary',
          props.iconLeadingClass ? props.iconLeadingClass : '',
          props.trailingIcon ? 'pr-0' : '',
          props.class ? props.class : '',
          props.placeholderStyle
            ? props.placeholderStyle
            : ' placeholder-gray-500',
        ]"
        class="block w-full rounded-md font-body text-base text-secondary dark:bg-HahuGray1 placeholder-secondary focus:outline-none"
        :placeholder="props.placeholder"
        aria-invalid="true"
        aria-describedby="email-error"
        :disabled="props.disabled"
      />
      <!-- icon -->
      <div
        v-if="props.trailingIcon"
        class="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer"
        @click="togglePassword()"
      >
        <component
          class="h-5 w-5"
          :class="[type === 'password' ? 'text-primary' : 'text-gray-400']"
          :is="props.trailingIcon"
        ></component>
      </div>
    </div>
    <p
      v-if="!props.hideDetail"
      :visible="errorMessage"
      class="col-span-5 mt-2 font-body text-sm text-red-600"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
