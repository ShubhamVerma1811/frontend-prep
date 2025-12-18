<!-- TODO:: WIP -->

## Data Model Client Side

```ts
type EntityType = "MovieEntity" | "EventEntity";

interface Entity {
  entityId: string;
  entityType: EntityType;
  name: string;
  description: string;
  price: number;
}

interface Cast {
  name: string;
  character: string;
  image: string;
  description: string;
}

interface MovieEntity extends Entity {
  lanauges: string[];
  genres: string[];
  formats: string[];
  images: string[];
  cast: Cast[];
  runTime: number;
  rating: string;
}

interface MovieWithShowTimes extends MovieEntity {
  showTimes: {
    id: string;
    venue: {
      id;
      info: {};
      sessions: {};
    };
  };
}
```

## Service Layer

### MovieService

```ts
interface MovieService {
  getMovie();
}
```
