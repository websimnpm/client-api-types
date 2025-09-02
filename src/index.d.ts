import type { WebsimClientAPI } from "./client";

declare global {
  interface Window {
    readonly websim: WebsimClientAPI;
  }

  declare const websim: WebsimClientAPI;
}
