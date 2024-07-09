import { baseURL } from '@/repositories'
import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest ) {
  const cookieStore = cookies().get('refreshToken')
  const cookie2 = request.cookies.get('refreshToken')
  console.log("cookieStore", cookieStore);
  console.log("cookie2", cookie2);
  console.log("request.headers.get('Authorization')", request.headers.get('Authorization'));

  const url = `${baseURL}/users/verifyToken`;


  try {
    const res = await axios({
      method: 'GET',
      url: url,
      withCredentials: true,
      params: {
        cookie1: cookieStore?.value,
        cookie2: cookie2?.value,
      },
      headers: {
        Authorization: `${request.headers.get('Authorization')}`
      }
    })

    return Response.json({ data: res.data }, { status: 200 }) 
    
} catch (error:any) {
    return Response.json({ data: error?.response.data,status: error?.response.status })  
}
 
}

export async function DELETE() {
  const cookieStore = cookies()
  const token = cookieStore.delete('refreshToken')
  return new Response("success", {
    status: 200,
  })
}