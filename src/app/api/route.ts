import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server'
 
export async function GET() {
    const cookieStore = cookies()
  const token = cookieStore.get('refreshToken')
  if (token) {
    return  Response.json({ token })
  }
    return new Response(null, {
      status: 200,
    })

}

export async function POST() {
  const cookieStore = cookies()
const token = cookieStore.delete('refreshToken')

  return new Response("success", {
    status: 200,
    
  })

}