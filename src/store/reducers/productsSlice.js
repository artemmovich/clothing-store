import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const isImageAvailable = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true); 
    img.onerror = () => resolve(false); 
    img.src = url;
  });
};


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();

   
    const productsWithValidImages = await Promise.all(
      data.map(async (product) => {
        const imageAvailable = await isImageAvailable(product.images[0]);
        return imageAvailable ? product : null;
      })
    );

    
    return productsWithValidImages.filter(product => product !== null);
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    loading: false, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
