import React from "react";
/* import { ContextConsumer } from './provider'; */

export const connect = (mapStateToProps: any, mapDispatchToProps: any) => {
  return (Component: any) => {
    return (props: any) => {
      return (
        <ContextConsumer>
          {(data: any) => {
            const stateToProps = mapStateToProp(data.state);
            const dispatchToProps = mapDispatchToProps
              ? mapDispatchToProps(data.dispatch)
              : null;
            const mappedProps = {
              ...stateToProps,
              ...props,
              ...(mapDispatchToProps ? dispatchToProps : null),
            };
            return <Component {...mappedProps} />;
          }}
        </ContextConsumer>
      );
    };
  };
};
