import axios from 'axios';

export const getYoutube = async () => {
	const key = 'AIzaSyDNF6ER_FjS5SUokp336zPZpztBATERgqU';
	const playlistId = 'PLJMGVKPzkm8wzgPYetuzATsT2fbnH9mn5';
	const maxResults = 12;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${maxResults}`;

	return await axios.get(url);
};
