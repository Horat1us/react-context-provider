import * as PropTypes from 'prop-types';

export interface ContextReceiverContext {
    text: string,
}

export const ContextReceiverContextTypes = {
    text: PropTypes.string.isRequired,
};