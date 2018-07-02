import * as PropTypes from 'prop-types';
import * as React from 'react';

interface IProps {
  name?: string;
  age?: number;
  gaga?: any[];
}
interface IStates {
  math: string;
}

export default class Greeting extends React.Component<IProps, IStates> {
  public static PropTypes = {
    name: PropTypes.string,
  };
  public defaultProps: Partial<IProps> = {
    name: 'Stranger',
  };
  public render() {
    return (
      <h1>
        Hello, {this.props.name}
      </h1>
    );
  }
}
