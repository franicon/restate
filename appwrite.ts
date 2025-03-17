import {Account, Avatars, Client} from "react-native-appwrite";

export const config = {
    platform: 'com.franicons.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:  process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID
}

export const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

export const avater =new Avatars(client);
export const account = new Account(client);

export async function Login() {
    try {

    }catch (e) {
        console.error(e);
        return false;
    }
}