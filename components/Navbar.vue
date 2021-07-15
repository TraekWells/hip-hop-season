<template>
  <nav class="nav">
    <div class="container">
      <nuxt-link to="/" class="nav__logo">
        <svg viewBox="0 0 1200 1000" class="logo">
          <g>
            <path
              d="M114.13,378.69C167.69,161.26,364,0,597.93,0s430.23,161.26,483.8,378.69Zm967.6,239.17c-53.57,217.43-249.84,378.69-483.8,378.69S167.69,835.29,114.13,617.86Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__black"
            />
            <path
              d="M398.48,378.69c66.07-110.15,208.93-145.89,319.09-79.81a232.6,232.6,0,0,1,79.81,79.81Zm398.9,239.17C731.32,728,588.47,763.76,478.31,697.69a232.63,232.63,0,0,1-79.83-79.83Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__purple"
            />
            <path
              d="M566.08,862.29c-131-5.95-251.85-90.84-304.22-210.65C319.65,771.69,435.94,845,566.08,862.29Zm-5.74,65.62h0C404,908.29,264.71,817.57,198.46,672.24,259.59,818,402.72,919.58,560.34,927.91Zm2.89-33.09h0C420.08,876.39,292.43,794.52,230.33,662c57,132.86,188.55,225.68,332.9,232.82Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__white"
            />
            <path
              d="M629.77,134.27c131,5.92,251.3,89.9,303.92,210C875.88,224.15,759.87,151.53,629.77,134.27Zm5.75-65.63C792.37,88.32,931.33,179.38,997.4,324.31h0C936.26,178.59,793.11,77,635.52,68.64Zm-2.9,33.09c143.14,18.41,270.85,100.43,332.94,232.92C908.51,202.2,777.1,108.85,632.62,101.73Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__white"
            />
            <polygon
              points="346.74 428.52 346.74 484.33 458.35 484.33 458.35 428.52 486.25 428.52 486.25 568.04 458.35 568.04 458.35 512.23 346.74 512.23 346.74 568.04 318.83 568.04 318.83 428.52 346.74 428.52"
              style="fill-rule: evenodd"
              class="logo__black"
            />
            <path
              d="M751.4,512.23a41.86,41.86,0,1,1-1.29-83.71H871.4v27.9h-120a14,14,0,0,0,0,27.91h83.71a41.86,41.86,0,0,1,0,83.71h-120V540.13h120a13.95,13.95,0,0,0,0-27.9Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__black"
            />
            <polygon
              points="542.06 428.52 542.06 484.33 653.68 484.33 653.68 428.52 681.58 428.52 681.58 568.04 653.68 568.04 653.68 512.23 542.06 512.23 542.06 568.04 514.16 568.04 514.16 428.52 542.06 428.52"
              style="fill-rule: evenodd"
              class="logo__black"
            />
            <path
              d="M8,428.52H279.34V568H8a8,8,0,0,1-5.63-13.61l56.15-56.15L2.36,442.13A8,8,0,0,1,8,428.52Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__purple"
            />
            <path
              d="M1187.86,428.52H916.52V568h271.34a8,8,0,0,0,5.64-13.61l-56.15-56.15,56.15-56.15a8,8,0,0,0-5.64-13.61Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__purple"
            />
            <path
              d="M182.93,459.43l11.55,24.77,27.13,3.33a1.77,1.77,0,0,1,1.5,2,1.81,1.81,0,0,1-.5,1l-20,18.63L207.82,536a1.76,1.76,0,0,1-2.58,1.88l-23.9-13.25-23.91,13.25a1.76,1.76,0,0,1-2.58-1.88l5.22-26.82-20-18.64a1.77,1.77,0,0,1,0-2.49,1.72,1.72,0,0,1,1-.51l27.12-3.33,11.55-24.77a1.78,1.78,0,0,1,3.19,0Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__white"
            />
            <path
              d="M1016.11,459.43l11.55,24.77,27.13,3.33a1.77,1.77,0,0,1,1.5,2,1.81,1.81,0,0,1-.5,1l-20,18.63L1041,536a1.76,1.76,0,0,1-2.58,1.88l-23.9-13.25-23.91,13.25a1.7,1.7,0,0,1-1.88-.12A1.74,1.74,0,0,1,988,536l5.22-26.82-20-18.64a1.77,1.77,0,0,1,0-2.49,1.72,1.72,0,0,1,1-.51l27.12-3.33,11.55-24.77a1.74,1.74,0,0,1,1.6-1A1.72,1.72,0,0,1,1016.11,459.43Z"
              transform="translate(-0.06)"
              style="fill-rule: evenodd"
              class="logo__white"
            />
          </g>
        </svg>
      </nuxt-link>
      <ul class="nav__list">
        <li class="nav__item">
          <nuxt-link to="/reviews" class="nav__link">Reviews</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/blog" class="nav__link">Blog</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/lists" class="nav__link">Lists</nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/contact">Contact Me</nuxt-link>
        </li>
        <div class="nav__social">
          <nuxt-link
            class="nav__social-link"
            to="https://twitter.com/ItsHipHopSeason"
            target="_blank"
            ><i data-feather="twitter"></i
          ></nuxt-link>
          <nuxt-link
            class="nav__social-link"
            to="https://www.instagram.com/itshiphopseason/"
            target="_blank"
            ><i data-feather="instagram"></i
          ></nuxt-link>
        </div>
      </ul>
      <div class="nav__burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
