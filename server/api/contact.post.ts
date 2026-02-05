import axios from "axios";
const webhookUrl = "https://discord.com/api/webhooks/1357771574345990439/1f-na4mTepmaE2Q9mBrOQrqHPHux8BCkeoVyHDsHWQa_GqE1cCXR-mRm9EdYaaDMfE4q";

export default defineEventHandler(async (event) => {
	const { name, email, message, token } = await readBody(event);
	if (!name || !email || !message || !token) {
		throw createError({
			statusCode: 400,
			statusMessage: "Missing required fields",
			message: "Missing required fields",
		});
	}

	if (!(await verifyTurnstileToken(token, event)).success) {
		throw createError({
			statusCode: 403,
			statusMessage: "Invalid token",
			message: "Invalid token",
		});
	}
	axios.post(webhookUrl, {
		embeds: [
			{
				title: "Contact Form Submission",
				fields: [
					{
						name: "Name",
						value: name,
						inline: true,
					},
					{
						name: "Email",
						value: email,
						inline: true,
					},
					{
						name: "Message",
						value: message,
					},
				],
			},
		],
	});
	return {
		statusCode: 200,
		body: {
			message: "Message sent successfully !",
		},
	};
});
