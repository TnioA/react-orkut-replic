export interface BaseResultModel {
    success: boolean;
    data: any;
    errors: Error[];
}

export interface Error {
    code: string;
    message: string;
}