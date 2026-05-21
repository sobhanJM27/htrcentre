import type { GetCompanies } from "@/types/apiTypes";

export const Endpoints = {
  // Company endpoints
  getCompanies: (
    page: GetCompanies[0],
    limit: GetCompanies[0],
    status: GetCompanies[1],
  ) => `/companies/getAll?page=${page}&limit=${limit}&status=${status}`,
  getCompany: (companyId: string) => `/companies/${companyId}`,
};
