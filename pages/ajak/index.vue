<template>
  <Head>
    <Title>{{ $t('ajak.metaTitle') }}</Title>
    <Meta name="description" content="Punya pertanyaan seputar Desty? Dengan senang hati kami akan menjawab dan membantu. Hubungi kami di sini." />
  </Head>
  <div class="ajak-page">
    <PrivacyHeader />
    <client-only>
    <div class="ajak">
      <div class="content">
        <div class="head-title">{{ $t('ajak.headnav5') }}</div>
        <div class="head-text" v-html="$t('ajak.ajakHeadText')"></div>
        contact information here
        <div class="head-contact">
          <div>
            <img
              src="https://static.desty.app/desty-app/img/phoneIcon.svg"
              alt=""
            />
            <a
              href="https://api.whatsapp.com/send?phone=628995533789&text=&source=web"
            >
              <span>+62 899-5533-789</span>
            </a>
          </div>
          <div class="email-contact">
            <img
              src="https://static.desty.app/desty-app/img/EmailIcon.svg"
              alt=""
            />
            <a href="mailto:info@desty.app"><span>info@desty.app</span></a>
          </div>
        </div>
        <div class="tanya-card">
          <div class="card-title">{{ $t('ajak.headnav1') }}</div>
          <div class="card-text">{{ $t('ajak.ajakCardText') }}</div>
          <el-form
            ref="ruleForm1"
            :model="ruleForm"
            label-width="152px"
            class="demo-ruleForm"
          >
            <el-form-item :label="$t('ajak.formLabel1')">
              <el-select
                v-model="topik"
                :default-active="activeIndex"
                class="selectOption"
              >
                <el-option
                  v-for="item in topikItem"
                  :key="item.value"
                  :value="item.value"
                  :label="$t(item.text)"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('ajak.formLabel2')" class="demo-input">
              <el-input
                v-model="ruleForm.Nama"
                @blur="checkoutNama()"
              ></el-input>
              <PrivacyError
                v-if="errorIsShowNama"
                :text="$t(namaErrorText)"
                class="error-hint"
              ></PrivacyError>
            </el-form-item>
            <el-form-item :label="$t('ajak.formLabel3')" class="demo-input">
              <el-input
                v-model="ruleForm.telepon"
                @blur="checkoutTel()"
              ></el-input>
              <PrivacyError
                v-if="errorIsShowTel"
                :text="$t(teloponErrorText)"
                class="error-hint"
              ></PrivacyError>
            </el-form-item>
            <el-form-item :label="$t('ajak.formLabel4')" class="demo-input">
              <el-input
                v-model="ruleForm.email"
                @blur="checkoutEmail()"
              ></el-input>
              <PrivacyError
                v-if="errorIsShowEmail"
                :text="$t(emailErrorText)"
                class="error-hint"
              ></PrivacyError>
            </el-form-item>
            <el-form-item :label="$t('ajak.formLabel5')" class="demo-input">
              <el-input
                v-model="ruleForm.Mau"
                type="textarea"
                class="input-textarea"
                @blur="checkoutMau()"
              ></el-input>
              <PrivacyError
                v-if="errorIsShowMau"
                :text="$t(apaErrorText)"
                class="error-hint"
              ></PrivacyError>
            </el-form-item>
          </el-form>
          <el-button class="tenyaBtn" @click="getForm" :loading="loading">
            {{ $t('ajak.submitbtn') }}
          </el-button>
        </div>
      </div>
    </div>
    </client-only>
  </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton, ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import useHome from '~/stores/index';
import PrivacyHeader from './components/PrivacyHeader/index.vue'
import PrivacyError from './components/PrivacyError/index.vue'

const loading = ref(false);
const ruleForm = reactive({ Nama: '', telepon: '', email: '', Mau: '' });
const errorIsShowNama = ref(false);
const errorIsShowTel = ref(false);
const errorIsShowEmail = ref(false);
const errorIsShowMau = ref(false);
const topik = ref('');
const topikItem = ref([
  { text: 'ajak.topiktext1', value: '1' },
  { text: 'ajak.topiktext2', value: '2' },
  { text: 'ajak.topiktext3', value: '3' },
  { text: 'ajak.topiktext4', value: '4' },
  { text: 'ajak.topiktext5', value: '5' },
]);
const activeIndex = ref('1');
const namaErrorText = ref('ajak.namaErrorText');
const teloponErrorText =ref('ajak.teloponErrorText');
const emailErrorText = ref('ajak.emailErrorText');
const apaErrorText = ref('ajak.apaErrorText');
const homeStore = useHome();
const { t } = useI18n();
const config = useRuntimeConfig();

const numberValidateForm = reactive({
  age: '',
})

const getLang = computed(() => homeStore.currLang);
watch(getLang, val => {
  if (val === 'en') {
    topik.value = 'General information'
  } else {
    topik.value = 'Informasi umum'
  }
})

onBeforeMount(() => {
  topik.value = t(topikItem.value[0].text);
});

function checkoutNama() {
  const str = ruleForm.Nama
  errorIsShowNama.value = !str;
};

function checkoutTel() {
  const str = ruleForm.telepon
  errorIsShowTel.value = !str;
}
function checkoutEmail() {
  const str = ruleForm.email
  errorIsShowEmail.value = !str
  
};

function checkoutMau() {
  const str = ruleForm.Mau
  errorIsShowMau.value = !str

};

async function getForm() {
  const params = {
    email: ruleForm.email,
    message: ruleForm.Mau,
    name: ruleForm.Nama,
    phone: ruleForm.telepon,
    topic: topik.value,
  }
  loading.value = true
  try {
    const res = await $fetch(`${config.VITE_HOME_URL}/api/inform/sendToDesty`, {
      method: 'POST',
      body: params,
    });
    if (res?.code === '200') {
      ElMessage({
        message: 'success',
        type: 'success',
      });
      loading.value = false
    } else {
      loading.value = false
    }
  } catch (error) {
      loading.value = false
  }
};

</script>

<style lang="less" scoped>
@primary-color: #2e4399;
@secondary-color: #ff9e2d;
.ajak-page {
  background-color: #fff;
  min-height: 100vh;
  .ajak {
    margin-top: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 33px;
    .content {
      width: 544px;
      .head-title {
        color: @secondary-color;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
      }
      .head-text {
        color: #545454;
        line-height: 20px;
        margin-top: 8px;
      }
      .head-contact {
        margin-top: 28px;
        display: flex;
        flex-direction: row;
        div {
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
          }
        }
        .email-contact {
          margin-left: 28px;
        }
        a {
          color: #409eff;
          text-decoration: none;
        }
      }
      .tanya-card {
        margin-top: 28px;
        padding: 32px 24px;
        border: 1px solid #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        .card-title {
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
        }
        .card-text {
          margin-top: 8px;
          font-size: 14px;
          line-height: 20px;
          color: #545454;
        }
        .demo-ruleForm {
          margin-top: 32px;
          .selectOption {
            width: 100%;
          }
          :deep(.el-form-item__label)  {
            justify-content: flex-start;
          }
          .error-hint {
            float: left;
          }
          :deep(.el-form-item__label::after) {
            content: '*';
            color: #a63217 !important;
            display: inline;
            margin-left: 4px;
          }
        }
        .tenyaBtn {
          background: @primary-color;
          border-radius: 4px;
          color: #fff;
          font-family: Roboto;
          width: 200px;
          margin-left: 295px;
        }
        .input-textarea {
          :deep(.el-textarea__inner) {
            height: 103px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .ajak {
    margin-top: 20px;
    flex-direction: column;
    padding: 16px;
    .desktopImg {
      display: none;
    }
    .content {
      width: 100%;
      margin-left: 0;
      .head-contact {
        span {
          font-size: 12px;
        }
      }
    }
    .tanya-card {
      .tenyaBtn {
        margin-left: 0 !important;
        width: 100% !important;
      }
      .demo-ruleForm {
        :deep(.el-form-item) {
          display: flex;
          flex-direction: column;
        }
        :deep(.el-form-item__content) {
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>
