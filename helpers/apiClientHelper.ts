import { BenBristowWebsiteApiClient } from "@/apiClient";

export const getApiClient = (): BenBristowWebsiteApiClient => {
    const baseUrl = process.env.NODE_ENV === 'development'
        ? 'https://localhost:7238' : 'https://api.ben.bristow.me'

    return new BenBristowWebsiteApiClient(baseUrl);
}
