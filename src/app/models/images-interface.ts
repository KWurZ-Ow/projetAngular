import {Model} from "./interfaces/model";

export class Image implements Model{
    readonly username: string
    readonly location: string
    readonly avatar: string
    likes: number
    readonly image: string
    readonly description: string

    constructor(input: Partial<Image>) {
        this.username = input.username || ''
        this.location = input.location || ''
        this.avatar = input.avatar || ''
        this.likes = input.likes || 0
        this.image = input.image || ''
        this.description = input.description || ''
    }
}