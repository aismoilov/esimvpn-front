<template>
  <section class="home">
    <section class="home-img">
      <img src="/home-img.svg" alt="Esimvpn" />
    </section>

    <article class="home-content">
      <section class="home-content__title">
        <img class="home-content__title-icon" src="/icons/esim.svg" >
        <h2>eSIM Europe + VPN</h2>
      </section>

      <section class="home-content__features">
        <button class="button button-white">
          Features
        </button>
        <button class="button">
          Tech specs
        </button>
      </section>

      <section class="home-content__description">
        <ul>
          <li>33 countries</li>
          <li>Reliable connection from best networks.</li>
          <li>You will only get mobile data and keep your original phone number.</li>
          <li>Works with all smartphones with eSIM technology.</li>
        </ul>
      </section>

      <TariffsList :tariffs="tariffs" :selected-tariff="selectedTariff" @select="onSelect" />

      <button class="home-content__action-button button button-primary" @click="showContactForm = true">
        Buy now
      </button>
    </article>

    <ContactFormModal v-if="showContactForm" @close="onCloseContactForm" @save="onSaveContact" />
    <ContactFormSuccessModal v-if="showContactFormSuccess" @close="onCloseContactFormSuccess" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TariffsList from '../components/TariffsList.vue'
import ContactFormModal from '../components/ContactFormModal.vue'
import ContactFormSuccessModal from '../components/ContactFormSuccessModal.vue'
import { Contact, Tariff } from '../shared/types'
import contactService from '../shared/api/ContactService'

const selectedTariff = ref(1)
const showContactForm = ref(false)
const showContactFormSuccess = ref(false)

const tariffs: Tariff[] = [
  {
    id: 1,
    internetLimit: "500 MB",
    vpnLimit: "∞ GB",
    daysCount: 7,
    price: 10,
    sale: false
  },
  {
    id: 2,
    internetLimit: "1 GB",
    vpnLimit: "∞ GB",
    daysCount: 30,
    price: 20,
    sale: false
  },
  {
    id: 3,
    internetLimit: "3 GB",
    vpnLimit: "∞ GB",
    daysCount: 30,
    price: 30,
    sale: false
  },
  {
    id: 4,
    internetLimit: "5 GB",
    vpnLimit: "∞ GB",
    daysCount: 7,
    price: 42.12,
    sale: true
  },
  {
    id: 5,
    internetLimit: "10 GB",
    vpnLimit: "∞ GB",
    daysCount: 60,
    price: 51.03,
    sale: true
  },
  {
    id: 6,
    internetLimit: "20 GB",
    vpnLimit: "∞ GB",
    daysCount: 60,
    price: 80,
    sale: false
  },
]

function onSelect(tariffId: number) {
  selectedTariff.value = tariffId
}

function onCloseContactForm() {
  showContactForm.value = false;
}

function onCloseContactFormSuccess() {
  showContactFormSuccess.value = false;
}

async function onSaveContact(form: Contact) {
  console.log(form)
  const success = await contactService.saveContact(form);
  if (success) {
    onCloseContactForm();
    showContactFormSuccess.value = true;
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  gap: 96px;

  &-img {
    img {
      max-height: 585px;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;

    &__title {
      display: flex;
      align-items: center;
      gap: 16px;

      h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 43px;
        color: $textPrimaryColor;
      }
    }

    &__features {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__description {
      color: #7F8A9F;
      font-size: 14px;
      line-height: 20px;
      padding: 16px;
    }

    &__action-button {
      height: 45px;
    }
  }

  @media (max-width: $screenMobileEnd) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-img {
      img {
        max-height: 300px;
      }
    }

    &-content{
      &__title {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>