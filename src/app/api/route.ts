import { cookies } from 'next/headers'
 
export async function GET() {
  const cookieStore = cookies()
  console.log("im here",cookieStore.getAll());
  const token = cookieStore.get('refreshToken')
  console.log("im here",token);
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
export async function DELETE() {
  const cookieStore = cookies()
  const token = cookieStore.delete('refreshToken')
  return new Response("success", {
    status: 200,
  })
}