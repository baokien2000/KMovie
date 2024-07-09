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

  const res = await axios({
    method: 'GET',
    url: url,
    withCredentials: true,
    params: {
      cookie1: cookieStore,
      cookie2: cookie2,
    },
    headers: {
      Authorization: `${request.headers.get('Authorization')}`
    }
  })

  if (res) {
    return  Response.json({ res })
  }
    return new Response(null, {
      status: 200,
      
    })

}

export async function DELETE() {
  const cookieStore = cookies()
  const token = cookieStore.delete('refreshToken')
  return new Response("success", {
    status: 200,
  })
}