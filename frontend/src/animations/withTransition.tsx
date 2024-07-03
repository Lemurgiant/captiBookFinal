import React from "react";
import { animated, useTransition } from "react-spring";

interface AnimatedComponentProps {
  isShowing: boolean;
  style?: React.CSSProperties; // Ensure style is included
  [key: string]: any; // Accept any additional props
}

interface TransitionConfig {
  from: any;
  enter: any;
  leave: any;
  config: any;
}

export const withTransition = <P extends object>(
  Component: React.ComponentType<P>,
  transition: TransitionConfig
) => {
  const AnimatedComponent = animated(Component);

  return function WrappedComponent({
    isShowing,
    ...rest
  }: AnimatedComponentProps & P) {
    const transitions = useTransition(isShowing, {
      ...transition,
    });

    return (
      <>
        {transitions((style, item) =>
          item ? <AnimatedComponent style={style} {...(rest as any)} /> : null
        )}
      </>
    );
  };
};
