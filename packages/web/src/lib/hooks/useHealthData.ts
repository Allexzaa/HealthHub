import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api/client'

export interface HealthMetrics {
  heartRate: number
  bloodPressure: { systolic: number; diastolic: number }
  weight: number
  glucose: number
  timestamp: string
}

export function useHealthMetrics() {
  return useQuery({
    queryKey: ['health-metrics'],
    queryFn: async () => {
      const { data } = await apiClient.get<HealthMetrics>('/api/health/metrics')
      return data
    },
    refetchInterval: 60000, // Refetch every minute
  })
}

export function useUpdateHealthMetric() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (metric: Partial<HealthMetrics>) => {
      const { data } = await apiClient.post('/api/health/metrics', metric)
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['health-metrics'] })
    },
  })
}