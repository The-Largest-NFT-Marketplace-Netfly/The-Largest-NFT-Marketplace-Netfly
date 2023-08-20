import dashboard from "../assets/img/dashboard.svg"
import profile from "../assets/img/profile.png"
import folders from "../assets/img/folders.svg"
import settings from "../assets/img/setting.png"


export interface INotification {
    username: string;
    product: string;
    action: string;
    time: string;
}
export interface IProfileItems {
    title: string;
    img: string;
    link:string;
}

export const notifications: INotification[] = [
    { username: "Joe Graham", product: "3D Glassy Cube", action: "make an offer to", time: "20 minutes ago" },
    { username: "Alex  Morgan", product: "3D Glassy Cube", action: "purchased", time: "Yesterday" },
    { username: "Jimmy Caicedo", product: "3D Glassy Cube", action: "liked", time: "2 hours ago" },
    { username: "Mirəfqan Eminbəyli", product: "3D Glassy Cube", action: "Follows you", time: "3 hours ago" }
]



export const profileItems: IProfileItems[] = [
    { link:'/dashboard', img: dashboard, title: "Dashboard", },
    { link:'/profile', img: profile, title: "Public Profile", },
    { link:'/folders', img: folders, title: "My Collections", },
    { link:'/settings', img: settings, title: "Account Setting", }
]