<template>
  <el-form label-position="top" ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules"
    label-width="auto" class="demo-ruleForm" :size="formSize" status-icon>
    <el-form-item label="To support URL hostname is preferred over host." prop="name">
      <el-input v-model="ruleForm.hostname" placeholder="Enter request URL">
        <template #prepend>
          <el-select v-model="ruleForm.method" placeholder="Select" style="width: 115px">
            <el-option label="GET" value="1" />
            <el-option label="POST" value="2" />
            <el-option label="PUT" value="3" />
            <el-option label="DELETE" value="4" />
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="Port of remote server." prop="name">
      <el-input type="number" v-model="ruleForm.port" />
    </el-form-item>
    <el-form-item label="Send a CoAP confirmable message (CON) or non-confirmablemessage (NON)." prop="region">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="Send a CoAP observe message, allowing the streaming of updates from the server."
      prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="pathname: Request path. Defaults to '/'. Should not include query string." prop="name">
      <el-input v-model="ruleForm.hostname" placeholder="Enter request URL">
      </el-input>
    </el-form-item>
    <el-form-item label="query: Query string. Defaults to ''. Should not include the path, e.g. 'a=b&c=d'." prop="name">
      <el-input v-model="ruleForm.hostname" placeholder="Enter request URL">
      </el-input>
    </el-form-item>
    <el-form-item label="Supported Content-Format." prop="region">
      <el-select v-model="ruleForm.region" text="CON">
        <el-option v-for="item in contentFormatsRef" :label="item.key" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Accept Format" prop="region">
      <el-select v-model="ruleForm.region" text="CON">
        <el-option v-for="item in contentFormatsRef" :label="item.key" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
interface ContentFormat {
  key: string
  value: any
}
const contentFormats: ContentFormat[] = [
  { key: 'text/plain', value: 0 },
  { key: 'application/cose; cose-type="cose-encrypt0"', value: 16 },
  { key: 'application/cose; cose-type="cose-mac0"', value: 17 },
  { key: 'application/cose; cose-type="cose-sign1"', value: 18 },
  { key: 'application/link-format', value: 40 },
  { key: 'application/xml', value: 41 },
  { key: 'application/octet-stream', value: 42 },
  { key: 'application/exi', value: 47 },
  { key: 'application/json', value: 50 },
  { key: 'application/json-patch+json', value: 51 },
  { key: 'application/merge-patch+json', value: 52 },
  { key: 'application/cbor', value: 60 },
  { key: 'application/cwt', value: 61 },
  { key: 'application/multipart-core', value: 62 },
  { key: 'application/cbor-seq', value: 63 },
  { key: 'application/cose-key', value: 101 },
  { key: 'application/cose-key-set', value: 102 },
  { key: 'application/senml+json', value: 110 },
  { key: 'application/sensml+json', value: 111 },
  { key: 'application/senml+cbor', value: 112 },
  { key: 'application/sensml+cbor', value: 113 },
  { key: 'application/senml-exi', value: 114 },
  { key: 'application/sensml-exi', value: 115 },
  { key: 'application/coap-group+json', value: 256 },
  { key: 'application/dots+cbor', value: 271 },
  { key: 'application/missing-blocks+cbor-seq', value: 272 },
  { key: 'application/pkcs7-mime; smime-type=server-generated-key', value: 280 },
  { key: 'application/pkcs7-mime; smime-type=certs-only', value: 281 },
  { key: 'application/pkcs8', value: 284 },
  { key: 'application/csrattrs', value: 285 },
  { key: 'application/pkcs10', value: 286 },
  { key: 'application/pkix-cert', value: 287 },
  { key: 'application/senml+xml', value: 310 },
  { key: 'application/sensml+xml', value: 311 },
  { key: 'application/senml-etch+json', value: 320 },
  { key: 'application/senml-etch+cbor', value: 322 },
  { key: 'application/td+json', value: 432 },
  { key: 'application/vnd.ocf+cbor', value: 10000 },
  { key: 'application/oscore', value: 10001 },
  { key: 'application/javascript', value: 10002 },
  { key: 'application/vnd.oma.lwm2m+tlv', value: 11542 },
  { key: 'application/vnd.oma.lwm2m+json', value: 11543 },
  { key: 'application/vnd.oma.lwm2m+cbor', value: 11544 },
  { key: 'text/css', value: 20000 },
  { key: 'image/svg+xml', value: 30000 }
];

const contentFormatsRef = ref(contentFormats);
interface RuleForm {
  host: string
  hostname: string
  port: number
  method: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  host: 'localhost',
  hostname: '',
  port: 5683,
  method: 'GET',
  region: 'CON',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
