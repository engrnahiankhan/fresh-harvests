import { ProductsType } from "@/types/products.types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk<ProductsType>(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<ProductsType>("/database/products.json");
    return response.data;
  }
);

interface ProductState {
  data: ProductsType;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsType>) => {
          state.loading = false;
          state.data = action.payload;

          console.log("check payload:", action.payload);
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
