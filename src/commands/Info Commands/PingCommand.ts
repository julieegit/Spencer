import { RunFunction } from '../../interfaces/Command';

export const run: RunFunction = async (client, message) => {
	const msg = await message.channel.send(
		client.embed({ description: 'Ponging..' }, message)
	);
	await msg.edit(
		client.embed(
			{
				description: `WebSocket ping: \`${client.ws.ping}\`MS, API Ping: \`${
					msg.createdTimestamp - message.createdTimestamp
				}\`MS`,
			},
			message
		)
	);
};
export const name: string = 'ping';
export const category: string = 'info';
export const description: string = 'Get the ping of the bot';
