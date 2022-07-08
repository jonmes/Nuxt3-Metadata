<template>
  <section class="mt-10 flex flex-col" id="contact">
    <div class="mb-20 flex flex-col items-center">
      <h2
        class="mt-10 self-center text-lg font-medium leading-[18px] dark:text-white lg:mt-[90px]"
      >
        Contact
      </h2>
      <h2
        class="mt-[34px] self-center rounded-[36px] bg-primary-lite px-3 py-2 text-center text-base font-black leading-5 text-white xs:px-8 xs:text-lg lg:px-8 lg:py-4 lg:text-3xl lg:leading-[18px]"
      >
        Let’s stay connected
      </h2>
      <p
        class="mt-[34px] max-w-[900px] text-center text-base font-light leading-[30px] dark:text-HahuGray/4 xs:text-lg"
      >
        It's never been easier to get in touch with HaHu Jobs. Call us, use our
        live chat widget or email and we'll get back to you as soon as possible!
      </p>
    </div>
    <div class="flex flex-col 2xl:flex-row 2xl:space-x-[106px]">
      <div class="mb-[58px] flex-1">
        <div class="mt-6 flex flex-col justify-around sm:flex-row">
          <div class="flex flex-row flex-wrap items-baseline">
            <img :src="Email" />
            <div class="ml-[15px] flex flex-col">
              <h2 class="text-xl font-bold leading-[38px] text-primary">
                Email
              </h2>
              <h4
                class="text-lg font-normal leading-[30px] text-HahuGray2 duration-500 ease-in dark:text-HahuGray/4"
              >
                contact@hahujobs.co
              </h4>
            </div>
          </div>

          <div class="flex flex-row flex-wrap items-baseline">
            <img :src="Phone" />
            <div class="ml-[15px] flex flex-col">
              <h2 class="text-xl font-bold leading-[38px] text-primary">
                Phone
              </h2>
              <h4
                class="text-lg font-normal leading-[30px] text-HahuGray2 duration-500 ease-in dark:text-HahuGray/4"
              >
                +251-843-672-431
              </h4>
            </div>
          </div>

          <div class="flex flex-row flex-wrap items-baseline">
            <img :src="Office" />
            <div class="ml-[15px] flex flex-col">
              <h2 class="text-xl font-bold leading-[38px] text-primary">
                Office
              </h2>
              <h4
                class="text-lg font-normal leading-[30px] text-HahuGray2 duration-500 ease-in dark:text-HahuGray/4"
              >
                1686, Geraldine Lane
              </h4>
              <h4
                class="text-lg font-normal leading-[30px] text-HahuGray2 duration-500 ease-in dark:text-HahuGray/4"
              >
                New York, NY 10013
              </h4>
            </div>
          </div>
        </div>
        <img class="mt-[58px]" src="/images/map.png" alt="map" />
        <div class="mt-[56px] flex flex-row flex-wrap items-baseline">
          <img :src="Branch" />
          <div class="ml-[15px] flex flex-col">
            <h2 class="text-xl font-bold leading-[38px] text-primary">
              Branch
            </h2>
            <ul
              class="mt-8 grid w-full grid-cols-2 items-center justify-items-end gap-x-4 gap-y-9 xs:gap-x-28 md:grid-cols-3 md:gap-x-28"
            >
              <li class="flex flex-col gap-y-1" v-for="(branch, i) in branchs">
                <h2
                  class="text-xl font-semibold leading-6 text-HahuGray1 duration-500 ease-in dark:text-white"
                >
                  {{ branch.name }}
                </h2>
                <h3
                  class="ml-2 text-base font-normal leading-8 text-gray-500 duration-500 ease-in dark:text-HahuGray4"
                >
                  {{ branch.Phone }}
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form
        @submit.prevent="submit"
        class="flex max-h-[915px] flex-1 flex-col rounded-md bg-white py-11 px-2 duration-500 ease-in dark:bg-HahuGray1 sm:px-3 md:px-10 lg:px-20 xl:px-24"
      >
        <InputsHtextfield
          v-model="item.name"
          type="text"
          name="name"
          placeholder="Your name..."
          placeholderStyle="text-HahuGray2"
        >
          <template v-slot:label
            ><div
              class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
            >
              Name
            </div></template
          >
        </InputsHtextfield>
        <InputsHtextfield
          v-model="item.phone"
          rules="required|ethiopian_phone_number"
          type="text"
          name="phone"
          placeholder="09..."
          placeholderStyle="text-HahuGray2"
          ><template v-slot:label
            ><div
              class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
            >
              Phone Number
            </div></template
          ></InputsHtextfield
        >
        <InputsHtextfield
          v-model="item.email"
          type="text"
          name="email"
          placeholder="Your email..."
          placeholderStyle="text-HahuGray2"
          ><template v-slot:label
            ><div
              class="mb-5 text-lg font-medium leading-6 text-gray-800 dark:text-white"
            >
              Email
            </div></template
          ></InputsHtextfield
        >
        <InputsHtextarea
          type="text"
          v-model="item.message"
          placeholder="Your message..."
          placeholderStyle="text-HahuGray2"
          label="Message"
          labelClass="font-medium text-gray-800 text-lg leading-6 dark:text-white duration-500 ease-in mb-5"
          name="message"
        />

        <button
          type="submit"
          class="mt-9 mb-12 w-full rounded-md bg-primary py-3 text-xl font-medium leading-7 text-whitePrimary"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { Form, Field, useForm } from "vee-validate";
import Branch from "@/assets/svg/Branch.svg?url";
import Email from "@/assets/svg/Email.svg?url";
import Phone from "@/assets/svg/Phone.svg?url";
import Office from "@/assets/svg/Office.svg?url";
const item = reactive({});
const branchs = [
  { name: "Bahr Dar", Phone: "+251-843-672-431" },
  { name: "Assosa", Phone: "+251-843-672-431" },
  { name: "Nazerat", Phone: "+251-843-672-431" },
  { name: "Hawassa", Phone: "+251-843-672-431" },
  { name: "Dilla", Phone: "+251-843-672-431" },
  { name: "Sodo", Phone: "+251-843-672-431" },
  { name: "Arba Minch", Phone: "+251-843-672-431" },
  { name: "Dessie", Phone: "+251-843-672-431" },
  { name: "Jigijiga", Phone: "+251-843-672-431" },
];

const { handleSubmit } = useForm({});
const submit = handleSubmit(async (values) => {
  console.log("printing out value", values);
});
</script>

<style lang="scss" scoped></style>
