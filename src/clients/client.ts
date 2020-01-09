export default interface Client {
    makeRequest<T>(url: string): Promise<T>;
}
