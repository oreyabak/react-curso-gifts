import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ({ name }) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		getGifs(name)
			.then(imgs => {
				setState({
					data: imgs,
					loading: false
				})
			});
	}, [name]);

	return state;
}