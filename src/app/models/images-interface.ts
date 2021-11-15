import {Model} from "./interfaces/model";

export class Image implements Model{
    readonly username: string
    readonly location: string
    readonly avatar: string
    readonly image: string
    readonly description: string
    likes: number
    comments: Array<object>

    constructor(input: Partial<Image>) {
        this.username = input.username || ''
        this.location = input.location || ''
        this.avatar = input.avatar || ''
        this.image = input.image || ''
        this.description = input.description || ''
        this.likes = input.likes || 0
        this.comments = input.comments || []
    }
}