import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
    PlayBackType,
    RecordBackType,
  } from 'react-native-audio-recorder-player';
  import { PermissionsAndroid, Platform } from 'react-native';
  import RNFetchBlob from 'rn-fetch-blob';
  
  const audioRecorderPlayer = AudioRecorderPlayer;
  audioRecorderPlayer.setSubscriptionDuration(0.9);
  
 
  
  const onStartRecord = async (
  callback: (data: { uri: string; temp: { recordSec: string; recordTime: string; }; }) => void  ) => {
    let dirs = RNFetchBlob.fs.dirs;
    let path = Platform.select({
      ios: `${new Date().getTime()}voice.m4a`,
      android: `${dirs.CacheDir}/${new Date().getTime()}voice.mp3`,
    });
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);
        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.log(err);
        return;
      }
    }
    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: 'aac',
    };
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      let temp = {
        recordSec: audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
        recordTime: audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition),
        ),
      };
      callback({uri, temp});
    });
  };
  
  const onPauseRecord = async () => {
    try {
      await audioRecorderPlayer.pauseRecorder();
    } catch (err) {
      console.warn(err);
    }
  };
  
  const onResumeRecord = async () => {
    await audioRecorderPlayer.resumeRecorder();
  };
  
  const onStopRecord = async (
    callback: (data: { result: string }) => void
  ) => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    callback({ result });
  };
  
  const onStartPlay = async (
    path: string,
    callback: (data: { volume: string; msg: string; e: PlayBackType }) => void
  ) => {
    const msg = await audioRecorderPlayer.startPlayer(path);
    const volume = await audioRecorderPlayer.setVolume(1.0);
  
    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      callback({ volume, msg, e });
    });
  };
  
  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };
  
  const onResumePlay = async () => {
    await audioRecorderPlayer.resumePlayer();
  };
  
  const onStopPlay = async (
    callback: (data: { msg: string; remove: void }) => void
  ) => {
    const msg = await audioRecorderPlayer.stopPlayer();
    const remove = await audioRecorderPlayer.removePlayBackListener();
    callback({ msg, remove });
  };

  export{
onStartRecord,
onPauseRecord,
onResumeRecord,
onStopRecord,
onStartPlay,
onPausePlay,
onResumePlay,
onStopPlay
  }