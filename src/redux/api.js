import axios from 'axios';

export const getYoutube = async () => {
	const key = 'AIzaSyDNF6ER_FjS5SUokp336zPZpztBATERgqU';
	const playlistId = 'PLJMGVKPzkm8ypLyvmhWQDu6491SoA4nzO';
	const maxResults = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${maxResults}`;

	return await axios.get(url);
};

export const getFlickr = async (option) => {
	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	const method_gallery = 'flickr.galleries.getPhotos';
	const api_key = '351a57e95d2a68e2c23e344ae6c77508';
	const per_page = 10;
	let url = '';

	if (option.type === 'interest')
		url = `${baseURL}&method=${method_interest}&api_key=${api_key}&per_page=${per_page}`;
	if (option.type === 'search')
		url = `${baseURL}&method=${method_search}&api_key=${api_key}&per_page=${per_page}&tags=${option.tags}`;
	if (option.type === 'user')
		url = `${baseURL}&method=${method_user}&api_key=${api_key}&per_page=${per_page}&user_id=${option.user}`;
	if (option.type === 'gallery')
		url = `${baseURL}&method=${method_gallery}&api_key=${api_key}&per_page=${per_page}&gallery_id=${option.gallery}`;

	return await axios.get(url);
};
