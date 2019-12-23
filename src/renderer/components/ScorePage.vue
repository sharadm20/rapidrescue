<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="eyantra">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to score page!
        </span>
        <router-link to="/" >Go back</router-link>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Team - {{teamId}}</div>
          <p>
           <button class="button is-rounded is-success" @click="start">Start</button>
           <button class="button is-rounded is-danger" @click="pause">Pause</button>
           
          </p>
          <div class="title">{{timer}}</div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex';
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'score-page',
    data: () => ({
      started: false,
    }),
    components: { SystemInformation },
    methods: {
      start() {
        if (!this.started) {
          this.started = true;
          setInterval(() => this.$store.dispatch('Counter/startTimer'), 1000);
        }
      },
      pause() {
        this.$store.dispatch('Counter/pauseTimer');
      },
    },
    computed: {
      timer() {
        return this.$store.state.Counter.timer;
      },
      teamId() {
        return this.$store.state.Counter.teamId;
      },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 150px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

</style>
