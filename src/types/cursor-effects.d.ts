declare module "cursor-effects" {
  export class fairyDustCursor {
    constructor(options: { colors: string[]; size: number });
    destroy(): void;
  }

  export class trailingCursor {
    constructor(options: { particles: number; rate: number });
    destroy(): void;
  }

  export class snowflakeCursor {
    constructor(options: { size: number; elementCount: number });
    destroy(): void;
  }

  export class bubbleCursor {
    constructor(options: { size: number });
    destroy(): void;
  }
}
