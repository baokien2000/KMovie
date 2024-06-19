import { IHistory } from '@/store/user/user.store';
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const data = await req.json()
  const cookieStore = cookies();
  const history = cookieStore.get("movie-history");
  if (history) { 
    const historyValue = JSON.parse(history.value)
    const index = historyValue.findIndex((h:IHistory) => h.slug === data.slug);
    if (index === -1) {
      historyValue.push({
        slug: data.slug,
        time: Date.now(),
        episode: [data.episode]
      });
    } else {
      historyValue[index].time = Date.now();
      if (!historyValue[index].episode.includes(data.episode)) {
        historyValue[index].episode.push(data.episode);
      }
    }
    cookies().set('movie-history', JSON.stringify(historyValue))
  } else {
    cookies().set('movie-history', JSON.stringify([
      {
        slug: data.slug,
        time: Date.now(),
        episode: [data.episode]
      }
    ]))
    
  }

    
  
    return Response.json({success: true})
  }