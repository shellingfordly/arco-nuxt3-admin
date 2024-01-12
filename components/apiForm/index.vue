<script lang="ts" setup>
import type { FormColumn } from "~/types";

const props = defineProps<{
  columns: FormColumn[];
  apiName: string;
  defaultForm?: any;
  title?: string;
  btnText?: string;
}>();
const emit = defineEmits(["update:content", "success"]);

const form = reactive({});
const loading = ref(false);
const text = computed(() => props.btnText || "发送");

const data = props.defaultForm;
if (data && data instanceof Object) {
  for (const key in data) {
    if (Reflect.has(data, key)) {
      form[key] = data[key];
    }
  }
}

async function onSubmit({ values, errors }: any) {
  if (errors) return;

  loading.value = true;
  if (props.apiName) {
    const res = await useHttp<string>(props.apiName, {
      ...values,
      ...toRaw(form),
    });
    emit("update:content", res.data);
  }
  loading.value = false;
  emit("success");
}
</script>

<template>
  <div class="title" v-if="title">{{ title }}</div>
  <a-form
    :model="form"
    layout="vertical"
    :style="{ maxWidth: '800px' }"
    @submit="onSubmit"
    v-bind="$attrs"
  >
    <a-form-item
      v-for="column in columns"
      :field="column.field"
      :validate-trigger="['blur']"
      :rules="column.rules"
      :label="column.label"
    >
      <a-input
        v-model="form[column.field]"
        :placeholder="`请填写${column.label}`"
      />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary" :loading="loading">
        {{ text }}
      </a-button>
    </a-form-item>
  </a-form>
</template>
