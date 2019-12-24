<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to Rapid Rescue GUI!
        </span>
      </div>
      <div class="right-side">
        <div class="doc">
          <div class="title">Team Information</div>
          <b-field label="Team Id" :type="error ? 'is-danger' : ''"
            :message="error ? error : ''">
            <b-input v-model="teamId"></b-input>
          </b-field>
           <button class="button" @click="startScore">Go to Score</button><br><br>
        </div>
        <div class="doc">          
        </div>
      </div>
    </main>
    <footer>
      <img id="footer" src="~@/assets/Illustration.png" alt="electron-vue">
    </footer>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    data: () => ({
      teamId: null,
      error: null,
    }),
    name: 'landing-page',
    components: { SystemInformation },
    created() {
      this.teamId = null;
      this.error = null;
    },
    methods: {
      startScore() {
        if (this.teamId !== null && this.teamId !== '') {
          this.$store.dispatch('Counter/setTeamId', this.teamId);
        } else {
          this.error = 'Please input team id';
        }
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
    width: 420px;
  }
  #footer {
    position: sticky;
    top: 0px;
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
