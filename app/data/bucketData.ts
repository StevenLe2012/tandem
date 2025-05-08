// bucketData.ts

export interface BucketItem {
  id: number;
  title: string;
  image: any;
  completed: boolean;
}

export const sharedItems: BucketItem[] = [
  {
    id: 1,
    title: "Fountain Hop",
    image: require("@/assets/images/bucket/fountain.png"),
    completed: false,
  },
  {
    id: 2,
    title: "Picnic at Oval",
    image: require("@/assets/images/bucket/oval.jpg"),
    completed: true,
  },
];

// 3. individualItems now has an index signature
export const individualItems: { [key: string]: BucketItem[] } = {
  Steven: [
    {
      id: 3,
      title: "Rooftop Climb Memchu",
      image: require("@/assets/images/bucket/memchu.jpg"),
      completed: false,
    },
    {
      id: 4,
      title: "Go to Encyclopedia Cave",
      image: require("@/assets/images/bucket/encyclopedia_cave.jpg"),
      completed: false,
    },
  ],
  Claire: [
    {
      id: 4,
      title: "Run Around Lake Lag",
      image: require("@/assets/images/bucket/lake_lag.jpg"),
      completed: false,
    },
  ],
  Jose: [
    {
      id: 5,
      title: "Try New Matcha Shop in University Ave.",
      image: require("@/assets/images/bucket/matcha.jpg"),
      completed: false,
    },
  ],
  Raghad: [
    {
      id: 6,
      title: "Hike the Dish",
      image: require("@/assets/images/bucket/dish.jpeg"),
      completed: true,
    },
    {
      id: 7,
      title: "Finish CS 278 Milestone 1",
      image: require("@/assets/images/bucket/milestone.jpg"),
      completed: true,
    },
  ],
};
