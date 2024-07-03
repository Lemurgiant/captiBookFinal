export function easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }
  export function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }