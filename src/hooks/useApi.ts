// src/hooks/useApi.ts
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { apiCall, apiFormDataCall } from '../services/apiClient';
import { AxiosError } from 'axios';

// --- Type Definitions ---
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// --- HOOK 1: For Fetching Data (GET) ---
export const useFetch = <T>(
  key: string[],
  url: string,
  options?: Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<T, AxiosError>({
    queryKey: key,
    queryFn: () => apiCall<T>('GET', url),
    ...options,
  });
};

// --- HOOK 2: For Mutations (POST, PUT, DELETE - JSON) ---
export const useGenericMutation = <TData, TVariables>(
  method: HttpMethod,
  url: string,
  options?: UseMutationOptions<TData, AxiosError, TVariables>
) => {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: (data: TVariables) => apiCall<TData>(method, url, data),
    ...options,
  });
};

// --- HOOK 3: For Form Data Mutations (File Uploads) ---
export const useUploadMutation = <TData>(
  method: 'POST' | 'PUT',
  url: string,
  options?: UseMutationOptions<TData, AxiosError, FormData>
) => {
  return useMutation<TData, AxiosError, FormData>({
    mutationFn: (formData: FormData) => apiFormDataCall<TData>(method, url, formData),
    ...options,
  });
};