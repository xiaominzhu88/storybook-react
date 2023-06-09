import { SexType } from '@faker-js/faker';
import { format } from 'date-fns';
import './User.css';

export interface UserType {
	email: string;
	firstName: string;
	lastName: string;
	sex: SexType;
	birthday: Date;
}
export interface RandomUserType extends UserType {
	randomUsers: UserType[];
	color?: string;
}

export const RandomUser = ({ randomUsers, color }: RandomUserType) => (
	<div className={color === 'hotpink' ? 'pink' : 'blue'}>
		{randomUsers.map(
			({ email, firstName, lastName, sex, birthday }: UserType) => (
				<>
					Hello from {firstName} {lastName} 👐
					<br />
					<br />
					<div>Sex: {sex === 'female' ? '👩' : '👨'}</div>
					<div>Birthday: {format(new Date(birthday), 'dd-MM-yyyy')}</div>
					<div>Email: {email}</div>
					<hr />
				</>
			),
		)}
	</div>
);
