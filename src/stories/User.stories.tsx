import type { Meta, StoryObj } from '@storybook/react';
import { RandomUser } from './User';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof RandomUser> = {
	title: 'Example/User',
	component: RandomUser,
};

export default meta;

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

type Story = StoryObj<typeof meta>;

export const RandomBlue: Story = {
	args: {
		randomUsers: randomUsers,
	},
};

export const RandomHotPink: Story = {
	args: {
		...RandomBlue.args,
		color: 'hotpink',
		randomUsers: randomUsers.slice(0, 3),
	},
};

const SomeComponent = (args: { label: string }) => <>{args.label}</>;

// 👇 Render functions are a framework specific feature to allow you control on how the component renders.
export const RenderSomething: Story = {
	render: () => <SomeComponent label="Render Something" />,
};
export const RenderSomethingElse: Story = {
	render: () => <SomeComponent label="Render Something else" />,
};
