import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface PriceData {
    code: string;
    rate: number;
    volume: number;
    cap: number;
    delta: number;
    timestamp: string;
  }

interface PriceDataState {
  currentSymbol: string;
  data: PriceData[];
}

const initialState: PriceDataState = {
  currentSymbol: '',
  data: [],
};

const priceDataSlice = createSlice({
  name: 'priceData',
  initialState,
  reducers: {
    setCurrentSymbol: (state, action: PayloadAction<string>) => {
      state.currentSymbol = action.payload;
    },
    updatePriceData: (state, action: PayloadAction<PriceData[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.priceData,
        };
      });
  },
});

export const { setCurrentSymbol, updatePriceData } = priceDataSlice.actions;
export default priceDataSlice.reducer;