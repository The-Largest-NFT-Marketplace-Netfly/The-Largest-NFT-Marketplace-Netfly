export interface INotification {
    username: string;
    product: string;
    action: string;
    time: string;
}

export const notifications: INotification[] = [
    { username: "Joe Graham", product: "3D Glassy Cube", action: "make an offer to", time: "20 minutes ago" },
    { username: "Alex  Morgan", product: "3D Glassy Cube", action: "purchased", time: "Yesterday" },
    { username: "Jimmy Caicedo", product: "3D Glassy Cube", action: "liked", time: "2 hours ago" },
    { username: "Mirəfqan Eminbəyli", product: "3D Glassy Cube", action: "Follows you", time: "3 hours ago" }
]

