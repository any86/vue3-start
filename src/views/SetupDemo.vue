<template>
  <article>
    <section class="a">
      <h2 class="mb-1" style="color:#42b983;">AB.vue</h2>
      <div class="mb-3" v-for="key in keys" :key="key">
        <p :class="[key, 'mt-1']" v-for="n in count" :key="key + n">
          {{ key }} - {{ getLetter(n) }}
        </p>
      </div>
    </section>

    <transition name="b">
      <section class="b ml-4">
        <h2 class="mb-1" style="color:#42b983;">AB.vue</h2>
        <div class="mb-3" v-for="n in count" :key="n">
          <h3 class="mb-1">use{{ getLetter(n) }}函数</h3>
          <template v-for="key in keys" :key="key + n">
            <p :class="[key]">{{ key }} - {{ getLetter(n) }}</p>
          </template>
        </div>
      </section>
    </transition>
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      count: 2,
      keys: ["data", "computed", "watch", "mounted", "methods"],
    };
  },

  methods: {
    getLetter(n) {
      return String.fromCodePoint(n + 64);
    },
  },
});
</script>

<style lang="scss" scoped>
article {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 16px;
  color: #fff;
  section {
    width: 300px;
    // box-shadow: 1px 1px 15px 11px rgba(0, 0, 0, 0.1);
    border-radius:  4px;
    border:12px solid #42b983;
    padding: 8px;
    background: #35495e;
    p {
      margin: 0;
      font-size: 24px;
      padding: 8px;
      color: #fff;
    }
    p.data {
      background: #673ab7;
    }

    p.computed {
      background: rgb(70, 184, 35);
    }

    p.watch {
      background: rgb(8, 122, 167);
    }

    p.mounted {
      background: rgb(212, 33, 78);
    }

    p.methods {
      background: #ffc107;
    }
  }
}
</style>