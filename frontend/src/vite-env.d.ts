/// <reference types="vite/client" />
declare module 'react-copy-to-clipboard'
declare module 'aos'
declare module 'react-native-sound'

interface InportMetaEnv {
  readonly VITE_APP_KAKAO_MAP_KEY: string
  readonly VITE_APP_KAKAO_MSG_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}