declare namespace React {
  type ReactNode = unknown;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
  }
  export interface NextConfig {
    images?: {
      formats?: string[];
    };
  }
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}
