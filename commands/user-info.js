module.exports = {
	name: 'user-info',
	description: 'Owner of <@451213417097986058>.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};