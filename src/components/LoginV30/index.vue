<template>
  <main>
    <div class="layout-container" style="display: none;">
      <div class="welcome-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
          <text
            class="time-text"
            x="533"
            y="375"
            font-size="45px"
            font-family="Roboto Mono"
            fill="#bec2c6"
          >--:--:--</text>

          <text
            class="left-welcome-text"
            x="382"
            y="363.5"
            font-size="14px"
            font-family="Passion One"
            fill="#bec2c6"
          >WELCOME</text>

          <text
            class="right-welcome-text"
            x="845"
            y="363.5"
            font-size="14px"
            font-family="Passion One"
            fill="#bec2c6"
          >WELCOME</text>
        </svg>
      </div>
      <div class="login-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
          <text
            class="left-login-text"
            x="418"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >LOGIN</text>

          <text
            class="right-login-text"
            x="835"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >LOGIN</text>

          <path
            class="polylines"
            d="M 387 284 l 65 2 l 38 36 l 10 1 M 387 436 l 65 -2 l 38 -36 l 10 -1 M 892 284 l -65 2 l -38 36 l -10 1 M 892 436 l -65 -2 l -38 -36 l -10 -1"
            stroke="#bec2c6"
            stroke-width="1"
            fill="none"
          />

          <path
            class="rolling-dots"
            d="M 291 361 v 122 M 291 361 v -122 M 989 361 v 122 M 989 361 v -122"
            stroke="url(#rolling-dots-gradient)"
            stroke-width="2"
            stroke-dasharray="2 22"
          />

          <g class="account-field-background">
            <rect x="540" y="330" width="200" height="25" fill="#0b0a0b" />

            <text
              class="account-field-hint-text"
              x="546"
              y="346"
              font-size="9px"
              font-style="italic"
              font-family="Roboto Slab"
              fill="#bec2c6"
            >Account</text>

            <path
              class="account-field-right-chevron"
              d="M 593 340 l 3 3 l -3 3"
              stroke="#bec2c6"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>

          <g class="password-field-background">
            <rect x="540" y="365" width="200" height="25" fill="#0b0a0b" />

            <text
              class="password-field-hint-text"
              x="545"
              y="380"
              font-size="9px"
              font-style="italic"
              font-family="Roboto Slab"
              fill="#bec2c6"
            >Password</text>

            <path
              class="password-field-right-chevron"
              d="M 593 374 l 3 3 l -3 3"
              stroke="#bec2c6"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
        </svg>
        <div class="account-field-container">
          <form>
            <input
              type="text"
              class="account-field-asterisk"
              tabindex="-1"
              spellcheck="false"
              autocomplete="off"
            />
            <input
              type="text"
              class="account-field"
              name="account"
              tabindex="0"
              spellcheck="false"
              autocomplete="off"
            />
          </form>
        </div>
        <div class="password-field-container">
          <input
            type="text"
            class="password-field-asterisk"
            tabindex="-1"
            spellcheck="false"
            autocomplete="off"
          />
          <input
            type="text"
            class="password-field"
            name="password"
            tabindex="0"
            spellcheck="false"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="verfiy-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
          <text
            class="left-verify-text"
            x="418"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >VERIFY</text>

          <text
            class="right-verify-text"
            x="835"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >VERIFY</text>

          <g class="ip-and-system-texts">
            <text
              class="ip-text"
              x="616"
              y="250"
              font-size="10px"
              font-family="Oxygen"
              fill="#bec2c6"
            >192.111.3.54</text>

            <text
              class="access-im-system-text"
              x="576"
              y="266"
              font-size="14px"
              font-family="Roboto"
              font-weight="100"
              fill="#bec2c6"
            >ACCESS iM SYSTEM</text>

            <text
              class="im-bold-text"
              x="630"
              y="266"
              font-size="14px"
              font-family="Roboto"
              font-weight="500"
              fill="#bec2c6"
            >iM</text>
          </g>

          <g class="version-and-mode-texts">
            <text
              class="version-text"
              x="608"
              y="463"
              font-size="8px"
              font-family="Roboto"
              font-weight="100"
              fill="#bec2c6"
            >VERSION</text>

            <text
              class="3.0.0-text"
              x="641"
              y="463"
              font-size="10px"
              font-family="Cantarell"
              font-weight="700"
              fill="#bec2c6"
            >3.0.0</text>

            <text
              class="straght-link-mode"
              x="599"
              y="472"
              font-size="8px"
              font-family="Roboto"
              fill="#bec2c6"
            >
              STRAGHT
              LINK MODE
            </text>
          </g>

          <g class="top-left-short-lines">
            <path
              class="top-left-short-line-1"
              d="M 569 295 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="top-left-short-line-2"
              d="M 593 295 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="top-left-short-line-3"
              d="M 617 295 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
          </g>

          <g class="bottom-left-short-lines">
            <path
              class="bottom-left-short-line-1"
              d="M 569 425 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="bottom-left-short-line-2"
              d="M 593 425 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="bottom-left-short-line-3"
              d="M 617 425 h 22"
              stroke="#bec2c6"
              stroke-width="2"
            />
          </g>

          <g class="top-right-short-lines">
            <path
              class="top-right-short-line-3"
              d="M 663 295 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="top-right-short-line-2"
              d="M 687 295 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="top-right-short-line-1"
              d="M 711 295 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
          </g>

          <g class="bottom-right-short-lines">
            <path
              class="bottom-right-short-line-3"
              d="M 663 425 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="bottom-right-short-line-2"
              d="M 687 425 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
            <path
              class="bottom-right-short-line-1"
              d="M 711 425 h -22"
              stroke="#bec2c6"
              stroke-width="2"
            />
          </g>

          <g class="analyze-view">
            <rect x="550" y="330" width="175" height="65" fill="#bec2c6" opacity="0.25" />
            <path
              class="analyze-scale-lines"
              d="M 586 335 v 55 M 638 335 v 55 M 690 335 v 55"
              stroke="#bec2c6"
              stroke-width="1"
              opacity="0.25"
            />
            <path
              class="analyze-line-1"
              d="M 550 362.5 h 175"
              stroke="#bec2c6"
              stroke-width="2.5"
              opacity="0.25"
            />
            <path
              class="analyze-line-2"
              d="M 550 367.5 l 10 -5.5 h 43 l 10 2 l 10 1 l 10 -1 l 8 -1 l 4 1 l 16 -13 h 8 l 13 11 h 7 l 18 18 h 5 l 12 -29"
              stroke="#bec2c6"
              stroke-width="2.5"
              fill="none"
            />
          </g>

          <path
            class="left-big-curve"
            d="M 48 0 a 30 359 0 0 1 0 717"
            stroke="#bec2c6"
            stroke-width="2.5"
            opacity="0.25"
            fill="none"
          />

          <path
            class="right-big-curve"
            d="M 1231 0 a 30 359 0 0 0 0 717"
            stroke="#bec2c6"
            stroke-width="2.5"
            opacity="0.25"
            fill="none"
          />
        </svg>
      </div>
      <div class="dive-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
          <text
            class="left-dive-text"
            x="418"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >DIVE</text>

          <text
            class="right-dive-text"
            x="835"
            y="363.5"
            font-size="12px"
            font-family="Passion One"
            fill="#bec2c6"
          >DIVE</text>

          <text
            class="access-text"
            x="555"
            y="375"
            font-size="36px"
            font-family="Roboto"
            fill="#bec2c6"
            style="letter-spacing: 7px;"
          >ACCESS</text>
        </svg>
        <svg
          class="left-dive-status"
          xmlns="http://www.w3.org/2000/svg"
          width="274"
          height="420"
          style="position: absolute; top: 150px; left: 126px; transform: perspective(50px) rotateY(1deg);"
        >
          <rect x="5" y="5" width="30" height="6" fill="none" stroke="#bec2c6" stroke-width="1" />
          <rect x="5" y="410" width="30" height="6" fill="none" stroke="#bec2c6" stroke-width="1" />
          <path d="M 5 18 h 265" stroke="#bec2c6" stroke-width="2" fill="none" />
          <path d="M 5 402 h 265" stroke="#bec2c6" stroke-width="2" fill="none" />
          <path d="M 138 20 h 132" stroke="#bec2c6" stroke-width="4" fill="none" />
          <path d="M 138 400 h 132" stroke="#bec2c6" stroke-width="4" fill="none" />
          <text
            x="5"
            y="28"
            font-size="8px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >01.f305</text>
          <text
            x="5"
            y="398"
            font-size="8px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >01.f305</text>
          <text
            x="105"
            y="191"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >STATUS</text>
          <text
            x="60"
            y="208"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >10.29 DELOPY</text>
          <text
            x="50"
            y="222"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >-0.035 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DIVE</text>
          <text
            x="60"
            y="236"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >36^% &nbsp;OFFSET</text>
        </svg>
        <svg
          class="right-dive-status"
          xmlns="http://www.w3.org/2000/svg"
          width="274"
          height="420"
          style="position: absolute; top: 150px; left: 881px; transform: perspective(50px) rotateY(-1deg);"
        >
          <rect x="239" y="5" width="30" height="6" fill="none" stroke="#bec2c6" stroke-width="1" />
          <rect
            x="239"
            y="410"
            width="30"
            height="6"
            fill="none"
            stroke="#bec2c6"
            stroke-width="1"
          />
          <path d="M 5 18 h 265" stroke="#bec2c6" stroke-width="2" fill="none" />
          <path d="M 5 402 h 265" stroke="#bec2c6" stroke-width="2" fill="none" />
          <path d="M 5 20 h 132" stroke="#bec2c6" stroke-width="4" fill="none" />
          <path d="M 5 400 h 132" stroke="#bec2c6" stroke-width="4" fill="none" />
          <text
            x="238"
            y="28"
            font-size="8px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >01.f305</text>
          <text
            x="238"
            y="398"
            font-size="8px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >01.f305</text>
          <text
            x="125"
            y="191"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >STATUS</text>
          <text
            x="125"
            y="208"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >DELOPY 10.29</text>
          <text
            x="125"
            y="222"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >DIVE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -0.035</text>
          <text
            x="125"
            y="236"
            font-size="14px"
            font-style="italic"
            font-weight="700"
            font-family="Roboto"
            fill="#bec2c6"
          >OFFSET&nbsp; 36^%</text>
        </svg>
      </div>
      <div class="shared-layout">
        <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720">
          <path
            class="outer-left-arrow"
            d="M 355 354 v 12 l 7 -6.5 z"
            stroke="#bec2c6"
            stroke-width="1"
            fill="none"
          />

          <path
            class="outer-right-arrow"
            d="M 926 354 v 12 l -7 -6.5 z"
            stroke="#bec2c6"
            stroke-width="1"
            fill="none"
          />

          <path
            class="inner-left-arrow"
            d="M 362 354 v 12 l 7 -6.5 z"
            stroke="#bec2c6"
            stroke-width="1"
            fill="none"
          />

          <path
            class="inner-right-arrow"
            d="M 919 354 v 12 l -7 -6.5 z"
            stroke="#bec2c6"
            stroke-width="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "login-v30",

  async mounted() {
    const main = require("./scripts/main").default;
    await main(
      form =>
        new Promise((resolve, reject) => {
          this.$emit("login", { form, resolve, reject });
        })
    );

    this.$emit("logged");
  }
});
</script>

<style scoped src="./styles/main.css"></style>
<style scoped src="./styles/login.css"></style>
<style scoped src="./styles/verify.css"></style>

<style scoped>
@import "https://fonts.googleapis.com/css2?family=Electrolize&family=Passion+One&family=Passion+One&family=Jomhuria&family=Cantarell:wght@700&family=Roboto:wght@100;500&family=Roboto+Mono:wght@700&family=Roboto+Slab:wght@700&family=Oxygen&display=swap";
</style>
