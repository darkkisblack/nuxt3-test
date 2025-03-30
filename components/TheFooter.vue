<template>
  <footer class="footer">
    <div class="container wrapper">
      <div class="footer__content">
        <div class="footer__left">
          <p class="footer__question">Is there a project?</p>
          <h2 class="footer__title">Let's work together</h2>
        </div>

        <div class="footer__contacts">
          <h3 class="footer__subtitle">For all questions</h3>
          <a
            href="tel:+7(920)278-00-68"
            class="footer__contact"
          >+7 (920) 278—00—68</a>
          <a
            href="mailto:qtim@agency.com"
            class="footer__contact--email"
          >qtim@agency.com</a>
          
          <div class="footer__offices">
            <div class="footer__office">
              <h4 class="footer__office-title">Office in Russia</h4>
              <p class="footer__address">139 Ruben Station Lake Drew, NM 52678</p>
              <VCircleButton>
                <VLocationIcon />
              </VCircleButton>
            </div>
            
            <div class="footer__office">
              <h4 class="footer__office-title">Office in Dubai</h4>
              <p class="footer__address">139 Ruben Station Lake Drew, NM 52678</p>
              <VCircleButton>
                <VLocationIcon />
              </VCircleButton>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__social footer__social--left">
          <a
            href="#"
            class="footer__link"
          >Facebook</a>
          <a
            href="#"
            class="footer__link"
          >Instagram</a>
          <a
            href="#"
            class="footer__link"
          >Telegram</a>
        </div>
        <div class="footer__ellipsis">
          <a
            href="#"
            class="footer__link footer__link--go"
          >Go</a>
        </div>
        <div class="footer__social footer__social--right">
          <a
            href="#"
            class="footer__link"
          >Behance</a>
          <a
            href="#"
            class="footer__link"
          >LinkedIn</a>
          <a
            href="#"
            class="footer__link"
          >Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import VCircleButton from '@/components/ui/VCircleButton.vue';
import VLocationIcon from '@/components/icons/VLocationIcon.vue';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.footer {
  height: 900px;
  background: $color-purple-light;
  position: relative;
  overflow: hidden;

  &__content {
    display: flex;
    justify-content: flex-start;
    padding-top: 140px;
  }

  &__left {
    width: 464px;
  }

  &__question {
    margin-bottom: 56px;
    color: $color-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 1%;
    text-align: left;
  }

  &__title {
    line-height: 1;
    color: $color-black;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 10px;
    color: $color-black;
    font-size: 112px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
  }

  &__contacts {
    margin-left: 368px;
    width: 152px;
    @include text-base;
    color: $color-black;
  }

  &__subtitle {
    margin-bottom: 12px;
    @include text-base;
    color: $color-black;
  }

  &__contact {
    display: block;
    @include text-base;
    text-decoration: none;
    margin-bottom: 4px;
    color: $color-black;
  }

  &__offices {
    margin-top: 36px;
  }

  &__office {
    margin-top: 24px;

    &-title {
      margin-bottom: 12px;
      font-weight: $font-weight-regular;
    }
  }

  &__address {
    @include text-base;
    margin-bottom: 8px;
  }

  &__ellipsis {
    position: absolute;
    width: 358px;
    height: 179px;
    background: $color-black;
    border-radius: 358px 358px 0 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 32px;
  }

  &__social {
    display: flex;
    gap: 32px;

    &--left {
      margin-right: auto;
    }

    &--right {
      margin-left: auto;
    }
  }

  &__link {
    color: $color-black;
    text-decoration: none;
    border-bottom: 0.4px solid $color-black;
    transition: opacity 0.3s ease;
    position: relative;
    padding-bottom: 2px;

    &:hover {
      opacity: 0.7;
    }
  }

  .footer__ellipsis .footer__link--go {
    color: $color-light;
    font-size: 32px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
    border-bottom: none;
    position: relative;
    cursor: pointer;
    transition: opacity 0.3s ease;
    padding-bottom: 0;

    &:hover {
      opacity: 0.7;
    }
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    width: calc(100% - 240px);
    left: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
  }

  .wrapper {
    margin-left: 120px;
    margin-right: 120px;
  }
}
</style>
