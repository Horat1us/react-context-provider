import * as React from 'react';
import {ContextReceiverContextTypes, ContextReceiverContext} from "./ContextReceiverContext"


export class ContextReceiver extends React.Component<any, any> {
    static contextTypes = ContextReceiverContextTypes;
    context: ContextReceiverContext;

    render(): JSX.Element {
        return <span>{this.context.text}</span>
    }
}