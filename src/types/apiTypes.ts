type IdSchema = {
  _id: string;
};

export type Company = IdSchema & {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  imageUrl: string;
  website: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: "2026-05-21T11:45:55.464Z";
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type GetCompanies = [number | undefined, boolean | undefined];
