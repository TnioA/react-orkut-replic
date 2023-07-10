import { BaseResultModel } from "./models/BaseResult";

export async function Login(email: string, pass: string): Promise<BaseResultModel> {
    return await MockApiRequest({});
}

async function MockApiRequest(response: any): Promise<BaseResultModel> {
    return await new Promise(() => setTimeout(response, 3000));   
}