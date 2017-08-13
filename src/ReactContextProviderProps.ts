import * as PropTypes from 'prop-types';

export interface ReactContextProviderProps {
    context: object,
}

export const ReactContextProviderPropTypes = {
    context: PropTypes.object.isRequired,
}