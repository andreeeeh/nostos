interface rating {
    raterId: number,
    entryId: number,
    value: number
}
interface entry {
  id: number,
  placeId: number,
  authorId: number,
  title: string,
  content: string,
  creation_date: Date,
  tags: string[]
}

interface newEntry {
  placeId: number,
  authorId: number,
  title: string,
  content: string,
}

interface SmallEntry {
  "authorId": number,
  "title": string,
  "creation_date": Date,
  "tag": string[],
  "id": number,
}

interface NewPlace {
    lat: number,
    lng: number,
    name: string,
    city: string
}
interface Comment {
  commenterId: number,
  content: string
  creation_date?: Date
  entryId: number
}

interface Place {
  lat: number,
  lng: number,
  name: string,
  city: string,
  id: number,
}

interface UserType {
  id: number;
  email: string;
  username: string;
  password: string;
  filter_preference: string;
}

interface LastVisited {
  userId: number;
  placeId: number;
  visit_time: Date;
}

export type {Comment, NewPlace, Place, UserType, LastVisited, rating, entry, newEntry, SmallEntry};
