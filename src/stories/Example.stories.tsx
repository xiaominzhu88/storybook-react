import type { Meta, StoryObj } from '@storybook/react';
import { User } from './Example';
import { faker } from '@faker-js/faker';

function createRandomUser() {
	const sex = faker.person.sexType();
	const firstName = faker.person.firstName(sex);
	const lastName = faker.person.lastName();
	const email = faker.internet.email({ firstName, lastName }); //generate personal fake email
	return {
		birthday: faker.date.birthdate(),
		email,
		firstName,
		lastName,
		sex,
	};
}
const randomUsers = faker.helpers.multiple(createRandomUser, {
	count: 50,
});

const meta: Meta<typeof User> = {
	title: 'Example/User',
	component: User,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RandomBlue: Story = {
	args: {
		randomUsers: randomUsers,
	},
};

export const RandomHotPink: Story = {
	args: {
		randomUsers: randomUsers,
		color: 'hotpink',
	},
};
