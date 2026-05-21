import type { Company, GetCompanies } from "@/types/apiTypes";
import axiosInstance from "../axiosInstance";
import { Endpoints } from "../endpoints";

export const getCompanies = async (
  page?: GetCompanies[0],
  limit?: GetCompanies[0],
  status?: GetCompanies[1],
): Promise<Company[]> => {
  const response = await axiosInstance.get(
    Endpoints.getCompanies(page, limit, status),
  );
  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error(response.statusText);
  }
};

export const getCompany = async (id: string): Promise<Company> => {
  const response = await axiosInstance.get(Endpoints.getCompany(id));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(response.statusText);
  }
};
