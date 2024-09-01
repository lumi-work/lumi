'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/server'

export async function signup(formData: FormData) {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    const confirmPassword = formData.get('password-confirm') as string
  
    const { error } = await supabase.auth.signUp(data)

    if (!data.email || !data.password || !confirmPassword) {
      return { error: 'All fields are required' };
    }
    
    if (data.password !== confirmPassword) {
    return { error: 'Passwords do not match' };
    }
  
    if (error) {
      return { error: error.message }
    }
  
    revalidatePath('/', 'layout')
    redirect('/sign-in')
  }