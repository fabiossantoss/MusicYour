import { call, put } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from 'store/ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (error) {
    console.tron.log('erro no play');
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(play);
    yield put(PlayerActions.setSongSuccess(action.payload.song));
  } catch (error) {
    yield put(PlayerActions.setSongFailure('erro ao executar música'));
  }
}
