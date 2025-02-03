import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        Alert.alert("Error", errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  const refetch = async (newParams: P) => await fetchData(newParams);

  return { data, loading, error, refetch };
};





// Example usage: Where you want to fetch user data based on login status.

// const MyComponent = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
//     const { data, loading, refetch } = useAppwrite({
//       fn: fetchUserData,
//       params: { id: 123 },
//       skip: !isLoggedIn, // Skip fetch if the user is not logged in
//     });
  
//     useEffect(() => {
//       if (isLoggedIn) {
//         refetch({ id: 123 }); // Fetch data manually when user logs in
//       }
//     }, [isLoggedIn]);
  
//     if (loading) return <Text>Loading...</Text>;
//     return <Text>{data ? `User: ${data.name}` : "No user data available"}</Text>;
//   };
  

// The provided UseAppwriteOptions and UseAppwriteReturn interfaces are generic TypeScript interfaces designed to make the useAppwrite hook reusable for various data-fetching scenarios by utilizing generic types (T and P). Let me explain these interfaces step by step.

// 1. What Are T and P?
// T: Represents the type of data that the hook will return after fetching the API response. This makes the hook flexible for different kinds of data, such as user objects, lists of products, etc.
// P: Represents the shape of the parameters passed to the API function (fn). This allows you to define what arguments your API function accepts (e.g., userId, query, etc.).