import * as React from 'react';
import {ReactContextProviderProps, ReactContextProviderPropTypes} from "./ReactContextProviderProps"

export function wrapContext(ComposedComponent: typeof React.Component): typeof ReactContextProviderBase {

    const contextTypes = (ComposedComponent as any).contextTypes;

    return class ReactContextProvider extends ReactContextProviderBase {
        static childContextTypes = contextTypes || {};

        render() {
            const {context, ...childProps} = this.props;
            return <ComposedComponent {...childProps}/>;
        }
    }
}

export class ReactContextProviderBase extends React.Component<ReactContextProviderProps, any> {
    static displayName = 'ReactContextProvider';
    static propTypes = ReactContextProviderPropTypes;

    getChildContext() {
        return this.props.context;
    }
}