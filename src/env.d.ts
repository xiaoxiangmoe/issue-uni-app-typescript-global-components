/// <reference types="vite/client" />
/// <reference types="@dcloudio/types" />
import type { UniAppGlobalComponents } from './uni-app/runtime-uni-app-global-components';

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends UniAppGlobalComponents {}
}
export {};
