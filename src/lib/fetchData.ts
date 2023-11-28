import axios from "axios";

interface PlayerFetch {
	playerId?: number;
	playerName?: string;
	teamId: number;
	season: number;
}

interface TeamFetch {
	teamId: number;
	name?: string;
}

interface InjuryFetch {
	teamId?: number;
	playerId?: number;
}

const fetchPlayer = async (params: PlayerFetch) => {
	const options = {
		method: "GET",
		url: "https://api-american-football.p.rapidapi.com/players",
		params: {
			id: params.playerId,
			name: params.playerName,
			team: params.teamId,
			season: params.season,
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_KEY,
			"X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		const data = response.data.response;
		return data;
	} catch (error) {
		console.error("API fetching failed: ", error);
		throw error;
	}
};

const fetchTeam = async (params: TeamFetch) => {
	const options = {
		method: "GET",
		url: "https://api-american-football.p.rapidapi.com/players",
		params: {
			id: params.teamId,
			name: params.name,
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_KEY,
			"X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		const data = response.data.response;
		return data;
	} catch (error) {
		console.error("API fetching failed: ", error);
		throw error;
	}
};

const fetchInjury = async (params: InjuryFetch) => {
	const options = {
		method: "GET",
		url: "https://api-american-football.p.rapidapi.com/players",
		params: {
			player: params.playerId,
			team: params.teamId,
		},
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_KEY,
			"X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		const data = response.data.response;
		return data;
	} catch (error) {
		console.error("API fetching failed: ", error);
		throw error;
	}
};

export { fetchPlayer, fetchTeam, fetchInjury };
