import { BaseResultModel } from "./models/BaseResult";

export default new class Api {
    async Login(email: string, pass: string): Promise<BaseResultModel> {
        const logged = email === "teste@email.com";
        const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6Im12emtyeGpnNjZyanM5ZDliYzJ3OXZ4OXk5bXU1amRqIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2ODg1NjYyMDgsImV4cCI6MTY4ODYwOTQwOCwiaXNzIjoiaHR0cHM6Ly91YXQuZG90em5leHQuY29tL2FjY291bnRzL2FwaS9kZWZhdWx0IiwiYXVkIjpbImh0dHBzOi8vdWF0LmRvdHpuZXh0LmNvbS9hY2NvdW50cy9hcGkvZGVmYXVsdC9yZXNvdXJjZXMiLCJjb2JyYW5kaW5nLmFwaSIsImNvYnJhbmRpbmdidi5hcGkiLCJjb2JyYW5kaW5nc2hhcmVkLmFwaSIsImRpZ2l0YWxpemF0aW9uLmFwaSIsImxvYW5ub3RpZmljYXRpb24uYXBpIiwicmVjaGFyZ2Vkb3R6LmFwaSIsInJlZGVtcHRpb25zLmFwaSIsInJld2FyZHMuYXBpIiwic2lnbnVwLmFwaSJdLCJjbGllbnRfaWQiOiJUQk5KMEJaMktGSlJVTk4iLCJjbGllbnRfc3RvcmVDb2RlIjoiTUFUUklaIiwiY2xpZW50X2xvY2F0aW9uSWQiOiJNQVRSSVoiLCJjbGllbnRfYWRkaXRpb25hbF9yZWRlZW1fb3JpZ2luIjoiNjYiLCJjbGllbnRfc3BvbnNvcl9JZCI6IjEwMTI3NTkiLCJjbGllbnRfYXBwbGljYXRpb25fbGVnYWN5X2lkIjoiMTAxMjc1OSIsImNsaWVudF9yZWRlZW1fb3JpZ2luIjoiMzQiLCJjbGllbnRfYXBwbGljYXRpb25fb3JpZ2luIjoiNSIsInN1YiI6IktaUFZPODRuSlFWTzE0cCIsImF1dGhfdGltZSI6MTY4ODU2NjIwOCwiaWRwIjoibG9jYWwiLCJjbGllbnRfdXNlcm5hbWUiOiJQZWRybyIsImNsaWVudF9kb2N1bWVudCI6IjEyOTA5MDM5NzIyIiwiY2xpZW50X2FjY291bnRfbGVnYWN5X2lkIjoiMjYwNjUyNDgiLCJjbGllbnRfYWNjb3VudF9uZXh0X2lkIjoiNWFlMzFlNGFhYWFlYTcwMDAxN2MwNjE1IiwiY2xpZW50X3Byb2dyYW1faWQiOiJkb3R6Iiwicm9sZSI6IlVzZXIiLCJzY29wZSI6WyJjb2JyYW5kaW5nLmFwaSIsImNvYnJhbmRpbmdidi5hcGkiLCJjb2JyYW5kaW5nc2hhcmVkLmFwaSIsImRpZ2l0YWxpemF0aW9uLmFwaSIsImxvYW5ub3RpZmljYXRpb24uYXBpIiwicmVjaGFyZ2Vkb3R6LmFwaSIsInJlZGVtcHRpb25zLmFwaSIsInJld2FyZHMuYXBpIiwic2lnbnVwLmFwaSJdLCJhbXIiOlsicHdkIl19.BBCStDTE3WLOoHgpBISe84de33zYx6LKNgPuXDgfnlZOJfSKgeWlPUs8pwiBHS0pWhBGejaDsmg5XPAchUv5Yv-mo1g8v9HFc3flvU35Lk1r9lHpUCh89dUlQ0luYB-5kHADE4xe5XiKzeCEHS15SwwVWVYtujImiD_AuuGit0QfGawDuYEWFeJoY-eJgXPl3stLSgpSC4llNgIHaA1sPkXnzQk0-4VHSJDV5fZ6KL0kSNMEgUzRuf_n90UPMqYH9lXB9FoG8Asxe4IQ0wUG4yP4LWiCPoVO18ZqpYvMoodVwBEudMiYGIIkGxdu4P28D5g-DHw5qeweVZitWdyfPQ";

        return await this.MockApiRequest({
            success: logged,
            data: logged ? { token: token } : null,
            errors: logged ? null : [{
                code: "400",
                message: "Email ou senha inválidos, tente novamente."
            }]
        } as BaseResultModel);
    }

    async MockApiRequest(response: any): Promise<BaseResultModel> {
        return await new Promise((resolve)=> setTimeout(() => {
            resolve(response);
        }, 500));
    }
}