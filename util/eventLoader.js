const reqEvent = (event) => require(`../events/${event}`);
module.exports = (client, guild) => {
	client.on('ready', () => reqEvent('ready')(client));
	client.on('reconnecting', () => reqEvent('reconnecting')(client));
	client.on('disconnect', () => reqEvent('disconnect')(client));
	client.on('message', reqEvent('message'));
	client.on('guildCreate', guild => reqEvent('guildCreate')(client, guild));
	client.on('guildDelete', guild => reqEvent('guildDelete')(client, guild));
};
