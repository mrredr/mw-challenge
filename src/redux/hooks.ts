import { Dispatch } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useGenericSelector,
  useDispatch as useGenericDispatch
} from 'react-redux';
import { RootState } from './rootReducer';

export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;

// export const useDispatch: () => Dispatch<RootAction> = useGenericDispatch;