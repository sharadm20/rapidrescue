import router from '../../router';

const state = {
  main: 0,
  isPaused: false,
  time: '10:00',
  seconds: 10 * 60,
  timer: '10:00',
  minutesLeft: 0,
  secondsLeft: 0,
  teamId: '',
};
const timeDurationToString = duration => (duration > 9
  ? duration
  : `0${duration}`);

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {
    state.main -= 1;
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main += 1;
  },
  START_TIMER(state) {
    if (state.isPaused) return;

    state.seconds -= 1;
    state.minutesLeft = Math.floor(state.seconds / 60);
    state.secondsLeft = state.seconds % 60;
    state.timer = `${timeDurationToString(state.minutesLeft)}:${timeDurationToString(state.secondsLeft)}`;
  },
  PAUSE_TIMER(state) {
    state.isPaused = !state.isPaused;
  },
  SET_TEAM(state, teamId) {
    state.teamId = teamId;
  },
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
  startTimer({ commit }) {
    commit('START_TIMER');
  },
  pauseTimer({ commit }) {
    commit('PAUSE_TIMER');
  },
  setTeamId({ commit }, teamId) {
    commit('SET_TEAM', teamId);
    router.push('/score');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
