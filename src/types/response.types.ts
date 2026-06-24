export interface ISuccessResponse<T> {
    status: string;
    message: string;
    statusCode: number;
    data: T;
}

export interface IPaginationResponse<T> {
    status: string;
    message: string;
    statusCode: number;
    data: {
        records: T[];
        totalRecords: number;
        perPage: number;
        totalPages: number;
        currentPage: number;
        hasPrevious: boolean;
        hasNext: boolean;
        prev: string | null;
        next: string | null;
        recordShown: number;
    };
}

export interface IParams {
    page?: number;
    limit?: number;
    search?: string;
    sort?: "createdAt";
    dir?: "asc" | "desc";
}
