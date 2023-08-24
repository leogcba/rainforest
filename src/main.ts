import axios, { AxiosResponse } from 'axios';

interface ChallengeResponse {
	message: string;
	follow?: string;
}

const main = async () => {
	let data: ChallengeResponse | null = null;
	
	do {
		try {
			let url = 'https://www.letsrevolutionizetesting.com/challenge';
			if (data?.follow) {
				url += `?id=${data.follow?.split('=')[1]}`
			}
			data = (await axios.get(url,
				{
					headers: {
					  'Accept': 'application/json'
				}
			})).data;
			console.log('URL', url);
		} catch (error) {
			console.error(error.message);
			throw error
		}
	}
	while (data?.follow)

	console.log(data?.message);
	
}

main();