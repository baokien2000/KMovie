import { cookies } from 'next/headers'
 
export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('refreshToken')
  console.log("token", token);
  console.log("cookieStore",cookieStore.getAll());
  if (token) {
    return  Response.json({ token })
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