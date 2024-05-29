export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://mp21ec24d01346f12d72.free.beeceptor.com"
  );
};
