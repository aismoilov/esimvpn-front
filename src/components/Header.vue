<template>
  <header class="header">
    <section class="header-container">
      <div class="header-logo">
        <img src="/logo.svg" alt="logo" />
      </div>

      <navbar>
        <ul class="header-menu">
          <li class="header-menu__item">
            <router-link to="/help">
              <img src="/icons/info.svg" alt="info" />
              Help
            </router-link>
          </li>

          <li class="header-menu__item">
            <button class="button button-primary">Get started</button>
          </li>
        </ul>
      </navbar>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &-container {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-menu {
    display: flex;
    align-items: center;
    gap: 24px;
    list-style: none;

    &__item {
      a {
        display: flex;
        align-items: center;
        gap: 4px;
        color: $textPrimaryColor;
        text-decoration: none;
        font-size: 16px;
        line-height: 22px;
      }  
    }
  }

}
</style>