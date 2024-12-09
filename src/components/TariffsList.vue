<template>
  <section class="tariffs">
    <article 
      v-for="tariff in tariffs" 
      :key="tariff.id" 
      class="tariffs-item"
      :class="{'tariffs-item--selected': selectedTariff === tariff.id}"
      @click="onSelect(tariff.id)"
    >
      <div class="tariffs-item-internet">
        <span>{{ tariff.internetLimit }}</span>
        <span>{{ tariff.daysCount }} days for eSIM</span>
      </div>

      <div class="tariffs-item-vpn">
        <span>{{ tariff.vpnLimit }}</span>
        <span>{{ tariff.daysCount }} days for VPN</span>
      </div>

      <div class="tariffs-item-sale">
        <img v-if="tariff.sale" src="/icons/sale.svg" alt="sale" />
      </div>

      <div class="tariffs-item-price">
        <span v-if="!tariff.sale">$ {{ tariff.price }}</span>
        <span v-if="tariff.sale" class="tariffs-item-price__new">$ {{ getPriceWithSale(tariff.price) }}</span>
        <span v-if="tariff.sale" class="tariffs-item-price__old">$ {{ tariff.price }}</span>
      </div>

      <div class="tariffs-item-select">
        <RadioInput :value="tariff.id" :checked="selectedTariff === tariff.id" />
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { Tariff } from '../shared/types'
import RadioInput from '../components/RadioInput.vue'

const emit = defineEmits(['select'])

interface Props {
  tariffs: Tariff[],
  selectedTariff: Number
}

const { tariffs, selectedTariff } = defineProps<Props>()


function onSelect(tariffId: number) {
  emit('select', tariffId)
}

function getPriceWithSale(price: number) {
  return Number(price / 2).toFixed(2)
}
</script>

<style lang="scss" scoped>
.tariffs {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  &-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 30px;
    color: #fff;
    border: 1px solid #FFFFFF1F;
    border-radius: 12px;
    padding: 8px 20px;
    cursor: pointer;

    &--selected {
      border: 2px solid #775CFF;
    }

    &-internet, &-vpn {
      display: flex;
      flex-direction: column;

      span {
        font-size: 20px;
        line-height: 28px;

        &:nth-child(2) {
          color: #7F8A9F;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    &-sale {
      display: flex;
      align-items: center;
    }

    &-price {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;

      &__old {
        color: #7F8A9F;
        font-size: 14px;
        line-height: 20px;
        text-decoration: line-through;
      }

      &__new {
        color: #FF86A4;
      }
    }

    &-select {
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: $screenMobileEnd) {
    &-item {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-internet, &-vpn, &-sale, &-price, &-select {
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>