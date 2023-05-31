// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "@notionhq/client"
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"
import type { NextApiRequest, NextApiResponse } from "next"
import { StaticImageData } from "next/image"

type Data = {
  name: string
}

interface IRich_text {
  rich_text: [
    {
      type: "text"
      text: {
        content: string
        link: null
      }
      plain_text: string
      href: null
    }
  ]
}

interface ITitle {
  title: [
    {
      type: "text"
      text: {
        content: string
        link: null
      }
      plain_text: string
      href: null
    }
  ]
}
interface Row {
  title: IRich_text
  files: {
    files: [
      {
        name: string
        type: "file"
        file: {
          url: string
          expiry_time: string
        }
      }
    ]
  }
  points: {
    multi_select: [
      {
        name: string
        color: string
        id?: string
      }
    ]
  }
  date: IRich_text
  company_name: ITitle
  icon: {
    files: {
      name: string
      type: string
      file: {
        url: string
        expiry_time: string
      }
    }[]
  }
  iconBg: IRich_text
}

export const handleNotionRequest = (response: QueryDatabaseResponse) => {
  //@ts-ignore
  let data = response.results.map((res) => res.properties) as Row[]
  const experiences = data.map((experience) => {
    return {
      iconBg: experience.iconBg?.rich_text[0]?.plain_text || "",
      title: experience.title.rich_text[0].plain_text,
      company_name: experience.company_name.title[0].plain_text,
      points: experience.points.multi_select.map((point) => point.name),
      date: experience.date?.rich_text[0]?.plain_text || "",
      icon: {
        height: 100,
        width: 100,
        src: experience.icon?.files[0]?.file.url,
      },
    }
  })
  return experiences
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  })
  const database_id = "db46ebd1cae349c9ae622f059639d658"
  const response = await notion.databases.query({
    database_id,
  })

  //@ts-ignore
  res.status(200).json(handleNotionRequest(response))
}
export interface IExperience {
  title: string
  company_name: string
  icon: StaticImageData
  iconBg: string
  date: string
  points: string[]
}
