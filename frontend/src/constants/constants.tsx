export const TRANSITIONS = {
  NORMAL: "0.13s ease-out",
  STEEP: "0.1s cubic-bezier(0,.75,1,.99)",
  EASING: {
    STEEP: "cubic-bezier(0,.75,1,.99)",
  },
};

export function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}
export function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export const SPRING = {
  POP: {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
    config: { duration: 500, easing: easeOutExpo },
  },
  FADE: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500, easing: easeOutExpo },
  },
};
