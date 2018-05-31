module.exports = {
	name: 'info',
	description: 'Information about the arguments provided.',
	cooldown: 5,
	args: true,
	execute(message, args) {
		if (args[0] === 'chucky') {
			return message.channel.send('<@256091180066930688> is a NIGGER');
		}

		message.channel.send(`First argument: ${args[0]}`);
	},
};