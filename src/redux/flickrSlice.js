import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk('flickr/requestFlickr', async (option) => {
	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	const api_key = '351a57e95d2a68e2c23e344ae6c77508';
	const per_page = 12;
	let url = '';

	if (option.type === 'interest')
		url = `${baseURL}&method=${method_interest}&api_key=${api_key}&per_page=${per_page}`;
	if (option.type === 'search')
		url = `${baseURL}&method=${method_search}&api_key=${api_key}&per_page=${per_page}&tags=${option.tags}`;
	if (option.type === 'user')
		url = `${baseURL}&method=${method_user}&api_key=${api_key}&per_page=${per_page}&user_id=${option.user_id}`;

	const response = await axios.get(url);
	return response.data.photos.photo;
});

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
