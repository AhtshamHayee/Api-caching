import { useEffect, useRef, useReducer } from 'react';
/**
  Custom hook to fetch and cache data, using this to fetch data initialy and then based upon the
  returned status using the cached data in univeristies.js file.

  ** I took the memoization approach to cache data, so that i don't have to fetch the endpoint after fetching initially,
  Storing the result of expensive fetch calls will save the users some load time, therefore, increasing overall performance

 */




export const useFetch = (url) => {
	// using useRef to retrieve mutable values at ease and its value persists throughout the component’s lifecycle.
	const cache = useRef({});

	const initialState = {
		status: 'idle',
		error: null,
		data: [],
	};
	// using useReducer to check what type of action need to perform, and set the appropriate values to state based on that
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: 'fetching' };
			case 'FETCHED':
				return { ...initialState, status: 'fetched', data: action.payload };
			case 'FETCH_ERROR':
				return { ...initialState, status: 'error', error: action.payload };
			default:
				return state;
		}
	}, initialState);

	useEffect(() => {
		let cancelRequest = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
			if (cache.current[url]) {
				const data = cache.current[url];
				dispatch({ type: 'FETCHED', payload: data });
			} else {
				try {
					// data fetch request
					const response = await fetch(url);
					const data = await response.json();
					cache.current[url] = data;
					if (cancelRequest) return;
					dispatch({ type: 'FETCHED', payload: data });
				} catch (error) {
					if (cancelRequest) return;
					dispatch({ type: 'FETCH_ERROR', payload: error.message });
				}
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [url]);

	return state;
};