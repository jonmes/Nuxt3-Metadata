import { defineRule } from "vee-validate";
import i18n from "@/plugins/i18n";

defineRule("required", (value) => {
    if (typeof value === "number") {
        return true;
    }
    return !!value || i18n.global.t("this_field_is_required");
});

defineRule("number", (value) => {
    return (
        !value ||
        typeof value === "number" ||
        i18n.global.t("this field must be number")
    );
});

defineRule("email", (value) => {
    return (
        !value ||
        /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
            value
        ) ||
        i18n.global.t("invalid_email")
    );
});

defineRule("ethiopian_phone_number", (value) => {
    return !value || /^09\d{8}$/.test(value) || i18n.global.t("invalid_phone");
});

defineRule("ethio_phone", (value) => {
    return !value || /^9\d{8}$/.test(value) || i18n.global.t("invalid_phone");
});

defineRule("password", (value) => {
    return !value || value.length >= 8 || i18n.global.t("password_too_short");
});
defineRule("confirmed", (value, [other]) => {
    return !value || value === other || i18n.global.t("passwords_do_not_match");
});
