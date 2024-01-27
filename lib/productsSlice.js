import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
	"products/fetchAllProducts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://fakestoreapi.com/products/`);
			if (!res.ok) {
				throw new Error("Something went wrong while fetching products");
			}
			const data = await res.json();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchItemsByCategory = createAsyncThunk(
	"products/fetchItemsByCategory",
	async (categoryString, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://fakestoreapi.com/products/category/${categoryString}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch items by category");
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const initialState = {
	items: [],
	allItems: [],
	isLoading: false,
	error: null,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// Other reducers...
		setFilteredProducts: (state, action) => {
			const filter = action.payload.trim().toLowerCase(); // Trim whitespace
			if (filter === "") {
				// If search string is empty, set items back to the original list
				state.items = state.allItems;
			} else {
				// Filter items based on search string
				state.items = state.allItems.filter((product) =>
					product.title.toLowerCase().includes(filter)
				);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProducts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
				state.allItems = action.payload;
			})
			.addCase(fetchAllProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});

		builder
			// Handle pending state while fetching items by category
			.addCase(fetchItemsByCategory.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			// Handle success state after fetching items by category
			.addCase(fetchItemsByCategory.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
				state.allItems = action.payload;
			})
			// Handle failure state after fetching items by category
			.addCase(fetchItemsByCategory.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { setFilteredProducts } = productsSlice.actions;

export default productsSlice.reducer;
