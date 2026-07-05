// Minimal shims to avoid TS errors when node_modules isn't installed yet.
// This file is intentionally lightweight — remove after `npm install` restores real types.

declare module "@lovable.dev/vite-tanstack-config" {
  export function defineConfig(config: any): any;
  const _default: typeof defineConfig;
  export default _default;
}

declare module "vite/client" {
  interface ImportMetaEnv {
    readonly MODE?: string;
    [key: string]: any;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
