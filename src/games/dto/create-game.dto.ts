export class CreateGameDto{
    readonly teamId: string
    readonly name: string
    readonly semesterId: number
    readonly category: number
    readonly theme: number
    readonly rating: number
    readonly statusId: number
    readonly shortDescription: string
    readonly playDescription: string
    readonly gitHubLink: string

}