function useDescription(description) {
	let bgImage;

	if (description < 0) {
		bgImage =
			"https://plus.unsplash.com/premium_photo-1675715923850-b5be1d5d71a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	} else if (description < 6) {
		bgImage =
			"https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
	} else if (description < 10) {
		bgImage =
			"https://images.unsplash.com/photo-1635252517690-1a4438427ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDI0fHxzbW9rZSUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	} else if (description < 15) {
		bgImage =
			"https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVyYXRlJTIwcmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
	} else if (description < 20) {
		bgImage =
			"https://images.unsplash.com/photo-1502210600188-51a3adffa4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
	} else if (description < 24) {
		bgImage =
			"https://images.unsplash.com/photo-1581059288064-ec3f1ab22e3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8";
	} else if (description < 28) {
		bgImage =
			"https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsZWFyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
	} else if (description < 32) {
		bgImage =
			"https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
	} else if (description < 38) {
		bgImage =
			"https://images.unsplash.com/photo-1563630381190-77c336ea545a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
	} else if (description < 42) {
		bgImage =
			"https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
	} else {
		bgImage =
			"https://images.unsplash.com/photo-1447611636938-80e6ffe13e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzdW58ZW58MHx8MHx8fDA%3D";
	}
	return { bgImage };
}

export default useDescription;
