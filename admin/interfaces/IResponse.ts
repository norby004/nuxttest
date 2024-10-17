export interface IResponse<DataType> {
    data?: DataType;
    success?: boolean;
    errors?: object;
}