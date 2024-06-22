import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const appwriteconfig = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.rj.orion',
	projectId: '6674f1ad000bec206be8',
	databaseId: '6674f6740020bcf87bd4',
	userCollectionId: '6674f693003bd4bd1c50',
	videoCollectionId: '6674f6c4003ac564395e',
	storageId: '6674f9710010117aece1'
}

// Init your React Native SDK
const client = new Client();

client
	.setEndpoint(appwriteconfig.endpoint)
	.setProject(appwriteconfig.projectId)
	.setPlatform(appwriteconfig.platform) // Your application ID or bundle ID.
	;



interface createUser {
	email: string,
	password: string
	username: string,
}


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export async function createUser(email: string, password: string, username: string) {

	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username
		)
		if (!newAccount) throw Error;

		const avatarUrl = avatars.getInitials(username)
		await signIn(email, password)

		const newUser = await databases.createDocument(
			appwriteconfig.databaseId,
			appwriteconfig.userCollectionId,
			ID.unique(),
			{
				acountId: newAccount.$id,
				email: email,
				username: username,
				avatar: avatarUrl
			}


		)
		return newUser;
	} catch (error) {
		console.log(error);
		throw new Error

	}


}



export const signIn = async (email: string, password: string) => {

	try {
		const session = await account.createEmailPasswordSession(email, password);
		return session;
	} catch (error) {
		console.log(error);
		throw new Error;

	}

}


export const getCurrentUser = async () => {
	try {
		const currentAccount = await account.get()
		if (!currentAccount) throw Error;

		const currentUser = await databases.listDocuments(
			appwriteconfig.databaseId,
			appwriteconfig.userCollectionId,
			[Query.equal('acountId', currentAccount.$id)]
		)

		if (!currentUser) throw Error;
		return currentUser.documents[0];


	} catch (error) {

	}


}