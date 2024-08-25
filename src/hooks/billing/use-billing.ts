
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'

export const useSubscriptions = (plan: 'STANDARD' | 'PRO' | 'ULTIMATE') => {
    const [loading, setLoading] = useState<boolean>(false)
    const [payment, setPayment] = useState<'STANDARD' | 'PRO' | 'ULTIMATE'>(plan)
    const { toast } = useToast()
    const router = useRouter()
    const onUpdatetToFreTier = async () => {
        try{
    //         setLoading(true)
    //   const free = await onUpdateSubscription('STANDARD')
    //   if (free) {
    //     setLoading(false)
    //     toast({
    //       title: 'Success',
    //       description: free.message,
    //     })
    //     router.refresh()
    //   }
        }
        catch(error){
            console.log(error);
        }
    }

    const onSetPayment = (payment: 'STANDARD' | 'PRO' | 'ULTIMATE') =>
    setPayment(payment)
    return {
        loading,
        onSetPayment,
        payment,
        onUpdatetToFreTier,
      }
}