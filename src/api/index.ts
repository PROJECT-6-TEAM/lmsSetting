export const fetchClient = async (
  endpoint: string,
  options?: RequestInit,
): Promise<any> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
    options,
  );
  return response.json();
};
